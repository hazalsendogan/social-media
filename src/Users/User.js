import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
} from "reactstrap";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [user]);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(
      (res) => setUserPosts(res.data)
    );
  }, [userPosts]);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then(
      (res) => setUserAlbums(res.data)
    );
  }, [userAlbums]);

  return (
    <Container>
      <Row className="mb-5 mt-5">
        <Col md={4}>
          <div className="profile-info">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Profile Info</CardTitle>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    <ListGroupItemHeading tag="h6">Name:</ListGroupItemHeading>
                    <ListGroupItemText>{user.name}</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading tag="h6">
                      Email - Phone Number
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      {user.email} - {user.phone}
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading tag="h6">
                      Website
                    </ListGroupItemHeading>
                    <ListGroupItemText>{user.website}</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading tag="h6">
                      Company Name
                    </ListGroupItemHeading>
                    <ListGroupItemText>{user.name}</ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </div>
          <div className="albums mt-3">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Albums</CardTitle>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  {userAlbums.map((album) => (
                    <ListGroupItem key={album.id}>
                      <ListGroupItemHeading tag="h6">
                        Album Title:
                      </ListGroupItemHeading>
                      <ListGroupItemText>{album.title}</ListGroupItemText>
                      <Link>See</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col md={8}>
          {userPosts.map((userPost) => (
            <Card key={userPost.id} className="mb-3">
              <CardBody>
                <CardTitle tag="h6">{userPost.title}</CardTitle>
                <CardText>{userPost.body}</CardText>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
