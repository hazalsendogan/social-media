import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
} from "reactstrap";

export default function Home({ users }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setPosts(res.data)
    );
  }, [posts]);

  const homepagePosts = posts.slice(posts.length-20, posts.length);
  const homepageUsers = users.slice(users.length - 5, users.length);
  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card className="mt-5">
            <CardHeader>
                <CardTitle tag="h5"> New Posts</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="posts">
                <ListGroup flush>
                  {homepagePosts.map((post) => (
                    <ListGroupItem key={post.id}>
                      <ListGroupItemHeading className="text-info">{post.title}</ListGroupItemHeading>
                      <ListGroupItemText>{post.body}</ListGroupItemText>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-5 mb-5">
            <CardHeader>
                <CardTitle tag="h5">
                    New Users
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div> 
                <ListGroup flush>
                  {homepageUsers.map((user) => (
                    <ListGroupItem key={user.id}>
                      <ListGroupItemHeading className="text-info">Username: {user.username}</ListGroupItemHeading>
                      <ListGroupItemText>Name: {user.name}</ListGroupItemText>
                    </ListGroupItem>
                  ))}
                </ListGroup>
                </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
