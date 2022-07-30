import React from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userSlice } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AdminRoute } from "../../router/ListRouter";
import "./../index.css";
import AdminRouter from "../../router/AdminRouter";
function AdminTemplate() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const url = window.location.pathname;
  return (
    <>
      <Navbar
        sticky="top"
        style={{
          zIndex: "99",
          backgroundColor: "#fff",
          borderBottom: "2px solid",
          maxWidth: "100vw",
        }}
      >
        <Container fluid>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Toggle />
          <ul className="tab__menu">
            <li className="main-li">
              <Link to="/">About</Link>
            </li>
            {AdminRoute.map((route, index) => (
              <li
                className={`${url === route.path ? "link__active" : ""}`}
                key={index}
              >
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ marginRight: "10px" }}>
              Hello, {user?.name}
            </Navbar.Text>
            <Navbar.Text
              style={{
                cursor: "pointer",
                backgroundColor: "red",
                padding: "5px",
                color: "white",
              }}
              onClick={() => dispatch(userSlice.actions.logout())}
            >
              Logout
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row style={{ padding: "20px" }}>
        <AdminRouter/>
      </Row>
    </>
  );
}

export default AdminTemplate;
