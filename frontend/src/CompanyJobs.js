import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import JoblyApi from "./api";
import Job from "./Hooks/Job";

const CompanyJobs = () => {
    const params = useParams();
    const handle = params.handle
    const [company, setCompany] = useState({})
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getCompany = async () => {
            let companyRes = await JoblyApi.getCompany(handle)
            setJobs(company.jobs)
            setCompany(companyRes)
        }
        getCompany();
    }, [])


    return (
        <div className="companyDetails">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            {jobs.length === 0 ? null :
                jobs.map((j) => (
                    <Job
                        key={j.id}
                        id={j.id}
                        title={j.title}
                        salary={j.salary}
                        equity={j.equity} />
                ))}
        </div>
    )
}

export default CompanyJobs;