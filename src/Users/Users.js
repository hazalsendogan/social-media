import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

export default function Users({users}) {
  return (
    <Container>
        <Row className='mb-5 mt-5'>
            {
                users.map(user => (
                    <Col md={4} className="mb-3">
                    <Card>
                        <CardBody>
                            <CardTitle>Name: {user.name}</CardTitle>
                            <CardText>Username: {user.username}</CardText>
                            <CardText>Email: {user.email}</CardText>
                        </CardBody>
                        <CardFooter>
                            <Link to={`/user/${user.id}`}>Profile Detail</Link>
                        </CardFooter>
                    </Card>
                </Col>
                ))
            }
        </Row>
    </Container>
  )
}
