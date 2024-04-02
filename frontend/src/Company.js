import { Row, Card, Col, CardText, CardTitle, Button } from "reactstrap"

const Company = ({ handle, description, name, handleCompanyClick }) => {
    return (
        <div className="company d-flex justify-content-center align-items-center" onClick={() => handleCompanyClick(handle)}>
            <Row>
                <Col sm="8">
                    <Card style={{ width: '65rem' }} className="cards" body>
                        <CardTitle tag="h5">
                            {name}
                        </CardTitle>
                        <CardText>
                            {description}
                        </CardText>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default Company;