import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './auth.css'
const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

  const handleSubmit = () => {};
  return (
   <Container>
    <Row>
      <Col md={5} className="register_form--container">
        <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <h1>Create your Account</h1>
          <Form.Group>
            <Form.Control type="email" className="mb-3" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Control
             className="mb-3"
              type="password"
              placeholder="Enter your password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit"  className="mb-3">
            Register
          </Button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </Form>
      </Col>
      <Col md={7} className="register_image--container"></Col>
    </Row>
    </Container>
  )
}

export default Register