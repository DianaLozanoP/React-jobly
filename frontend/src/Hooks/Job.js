import { Row, Card, Col, CardText, CardTitle } from "reactstrap"

const Job = ({ key, id, title, salary, equity }) => {
    return (
        <div className="job">
            <div className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col sm="8">
                        <Card style={{ width: '65rem' }} body>
                            <CardTitle tag="h5">
                                {title}
                            </CardTitle>
                            <CardText>
                                Salary :{salary}
                                Equity : {equity}
                            </CardText>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default Job;