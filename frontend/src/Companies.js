import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import JoblyApi from "./api";
import Company from "./Company";
import SearchForm from "./Hooks/SearchForm";

const Companies = ({ token }) => {
    const navigate = useNavigate();
    //setting the state for companies
    const [companies, setCompanies] = useState([]);
    //search company after filling out form
    const searchCompany = async ({ search }) => {
        let companiesData = await JoblyApi.searchCompany(search)
        setCompanies(companiesData.companies)
    }
    const handleCompanyClick = (handle) => {
        navigate(`/companies/${handle}`)
    }

    useEffect(() => {
        if (!token) {
            // Navigate to home page if authToken is not available
            navigate('/');
        }
    }, [token, navigate]);

    //get data from API
    useEffect(() => {
        const getCompanies = async () => {
            let companiesData = await JoblyApi.getAllCompanies();
            setCompanies(companiesData.companies)
        }
        getCompanies();
    }, [])
    return (
        <div>
            <div className="companies pt-5">
                <SearchForm searchTerm={searchCompany} />
                <div className="companiescards">
                    {companies.map((c) => (
                        <Company
                            key={c.handle}
                            handleCompanyClick={handleCompanyClick}
                            handle={c.handle}
                            description={c.description}
                            name={c.name} />
                    ))}
                </div>
            </div>

        </div>


    )
}

export default Companies;