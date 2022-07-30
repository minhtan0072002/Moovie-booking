import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form } from "react-bootstrap";
import LoginHook from "../../hook/LoginHook";

function LoginPage(props) {
  const dispatch = useDispatch();
  const { setParams, username, password, login } = LoginHook();

  return (
    <div className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Cybersoft</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 justify-content-center">
             
              <Card.Body>
                <form
                  style={{ width: "40rem" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    login();
                  }}
                >
                   <label className="form-label taikhoan" htmlFor="form2Example18">
                      Tài khoản
                    </label>
                  <div className="form-outline mb-4">
                    <Form.Control
                      className="mb-2"
                      minLength="3"
                      placeholder="Tài Khoản"
                      type="text"
                      name="userName"
                      value={username}
                      onChange={setParams}
                    />
                   
                  </div>
                  <label className="form-label" htmlFor="form2Example28">
                      Mật khẩu
                    </label>
                  <div className="form-outline mb-4">
                    <Form.Control
                      minLength="3"
                      className="mb-2"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={setParams}
                    />
                  
                  </div>
                  <div className="pt-1 mb-4">
                  <Button type="submit" variant="outline-primary">
                Login
              </Button>
                   
                  </div>
                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Quên mật khẩu?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <NavLink to="/register" className="link-info">
                      Đăng ký
                    </NavLink>
                  </p>
                </form>
              </Card.Body>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
