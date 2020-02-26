import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, CustomInput } from "reactstrap";
import AlianLogo from "./svg/alianWare.svg";
// import AlianLogoWhite from "./svg/alianWare - Copy.svg";
import InputGroup from "./InputGroup";
import FormImage from "./img/forForm-UI-White.png";
import FormImageDark from "./img/forForm-UI-Dark.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../App.css";

const AlianForm = () => {
  const [color, setColor] = useState(false);

  const onSwitchChange = e => {
    setColor(!color);
  };

  return (
    <Container className="contain">
      <CustomInput
        className="mb-1 position-absolute"
        type="switch"
        id="exampleCustomSwitch"
        name="customSwitch"
        label=""
        onChange={onSwitchChange}
      />

      <Row className="m-5">
        <Col className={color ? "f-img-bg-dark " : "f-img-bg-light"}>
          <img
            src={color ? FormImageDark : FormImage}
            alt=""
            className="FormImage position-relative"
          />
        </Col>

        <Col>
          <div className="text-center pt-4">
            <img src={AlianLogo} alt="" />
          </div>

          <form className="pt-5 form-group form-width">
            <div>
              <InputGroup
                className="form-control py-4"
                placeholder="Username"
                name="Username"
                icon="fas fa-user"
              />
              <InputGroup
                className="form-control py-4"
                placeholder="Password"
                name="Password"
                icon="fas fa-lock"
              />

              <Row>
                <Col className="text text-left">
                  <p>
                    <i className="fas fa-check-square mr-1"></i>remember me
                  </p>
                </Col>
                <Col className="text text-right">
                  <p>forgot password</p>
                </Col>
              </Row>

              <Row>
                <Col className="text-left">
                  <Button
                    type="submit"
                    className="btn btn-dark btn-inline mt-4 px-5 py-2"
                  >
                    Login
                  </Button>
                </Col>
                <Col className="text-right">
                  <Button className="btn btn-outline-dark btn-inline mt-4 px-5 py-2">
                    Sign up
                  </Button>
                </Col>
              </Row>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AlianForm;
