import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import JoblyApi from "./api";
import Job from "./Hooks/Job";

const CompanyJobs = ({ currentUser, token }) => {
    const navigate = useNavigate();
    const params = useParams();
    const handle = params.handle
    const [company, setCompany] = useState({})
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getCompany = async () => {
            let companyRes = await JoblyApi.getCompany(handle)
            setJobs(companyRes.jobs)
            setCompany(companyRes)
        }
        getCompany();
    }, [])

    useEffect(() => {
        if (!token) {
            // Navigate to home page if authToken is not available
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className="companyDetails">
            <h2 className="companyDetails2" >{company.name}</h2>
            <p className="companyDetails3 ">{company.description}</p>
            <div className="jobcards">
                {jobs.length === 0 ? null :
                    jobs.map((j) => (
                        <Job
                            key={j.id}
                            id={j.id}
                            title={j.title}
                            salary={j.salary}
                            equity={j.equity}
                            currentUser={currentUser} />
                    ))}
            </div>
        </div>
    )
}

export default CompanyJobs;