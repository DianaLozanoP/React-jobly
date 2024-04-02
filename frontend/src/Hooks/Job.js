import { Row, Card, Col, CardText, CardTitle } from "reactstrap"
import JoblyApi from "../api"
import { useEffect, useState } from "react"


const Job = ({ id, title, salary, equity, currentUser }) => {
    const [applied, setApplied] = useState(false);
    const checkApplied = async () => {
        let response = await JoblyApi.getUser(currentUser.username)
        console.log(id, response.user.applications)
        let answer = response.user.applications.some(j => j === id)
        console.log("this is the answer", answer)
        setApplied(answer)
    }
    useEffect(() => {
        checkApplied();
    }, [])

    const applyJob = async () => {
        await JoblyApi.applyJob(currentUser.username, id)
        checkApplied();
        //response{applied: 7}
    }
    return (
        <div className="job">
            <div className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col sm="8">
                        <Card style={{ width: '65rem' }} className="cards" body>
                            <CardTitle tag="h5">
                                {title}
                            </CardTitle>
                            <CardText>
                                <p>Salary :{salary}</p>
                                <p>Equity : {equity}</p>
                                {applied ? (
                                    <button className="btn btn-danger" disabled>APPLIED</button>
                                ) : (
                                    <button className="btn btn-danger" onClick={applyJob}>APPLY</button>
                                )}

                            </CardText>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div >
    )
}

export default Job;