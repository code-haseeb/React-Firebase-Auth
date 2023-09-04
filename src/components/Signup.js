import { React, useRef } from "react";

import { Card, Form, Button } from "react-bootstrap";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConformRef = useRef();
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center">
      <Card className="p-5  ">
        <Card.Body>
          <h1>Sign Up</h1>
        </Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>{" "}
          <Form.Group>
            <Form.Label>Password Conform</Form.Label>
            <Form.Control type="password" ref={passwordConformRef} required />
          </Form.Group>
          <Button className="w-90" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
      Already Have an Account?
    </div>
  );
}
export default Signup;
