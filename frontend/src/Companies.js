import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import JoblyApi from "./api";
import Company from "./Company";
import SearchForm from "./Hooks/SearchForm";

const Companies = () => {
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
    //get data from API
    useEffect(() => {
        const getCompanies = async () => {
            let companiesData = await JoblyApi.getAllCompanies();
            setCompanies(companiesData.companies)
        }
        getCompanies();
    }, [])
    return (
        <div className="companies">
            <SearchForm searchTerm={searchCompany} />
            {companies.map((c) => (
                <Company
                    key={c.handle}
                    handleCompanyClick={handleCompanyClick}
                    handle={c.handle}
                    description={c.description}
                    name={c.name} />
            ))}
        </div>

    )
}

export default Companies;