import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoginMutation } from "../../features/auth/authApiSlice";



export const Login: React.FC = ()=>{
  const [login] = useLoginMutation()
  const [phone_number, setPhoneNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loginHandler = ()=>{
    login({
      phone: phone_number,
      password: password
    })
  }


  return  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone number</Form.Label>
    <Form.Control value={phone_number} onChange={(e)=>setPhoneNumber(e.currentTarget.value)} type="Phone" placeholder="Enter phone" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e)=>setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" onClick={loginHandler}>
    Submit
  </Button>
</Form>

}