import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import JoblyApi from "./api";
import Job from "./Hooks/Job";
import SearchForm from "./Hooks/SearchForm";

const Jobs = ({ currentUser, token }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            // Navigate to home page if authToken is not available
            navigate('/');
        }
    }, [token, navigate]);

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getAllJobs = async () => {
            let res = await JoblyApi.getJobs();
            setJobs(res.jobs)
        }
        getAllJobs();
    }, [])

    const searchJob = async ({ search }) => {
        let jobsData = await JoblyApi.getJob(search)
        setJobs(jobsData.jobs)
    }
    return (
        <div className="allJobs pt-5">
            <SearchForm searchTerm={searchJob} />
            <div className="jobcards">
                {jobs.length === 0 ?
                    null :
                    jobs.map((j) => (
                        <Job
                            key={j.id}
                            id={j.id}
                            title={j.title}
                            salary={j.salary}
                            equity={j.equity}
                            currentUser={currentUser} />
                    ))
                }
            </div>


        </div>
    )
}

export default Jobs;