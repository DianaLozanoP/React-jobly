import { useEffect, useState } from "react"
import JoblyApi from "./api";
import Job from "./Hooks/Job";
import SearchForm from "./Hooks/SearchForm";

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getAllJobs = async () => {
            let res = await JoblyApi.getJobs();
            setJobs(res.jobs)
        }
        getAllJobs();
    }, [])

    const serachJob = async ({ search }) => {
        let jobsData = await JoblyApi.getJob(search)
        setJobs(jobsData.jobs)
    }
    return (
        <div className="allJobs">
            <SearchForm searchTerm={serachJob} />
            {jobs.length === 0 ?
                null :
                jobs.map((j) => (
                    <Job
                        key={j.id}
                        id={j.id}
                        title={j.title}
                        salary={j.salary}
                        equity={j.equity} />
                ))
            }

        </div>
    )
}

export default Jobs;