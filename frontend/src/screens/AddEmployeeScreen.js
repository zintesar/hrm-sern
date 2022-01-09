import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/employeeActions'


const RegisterScreen = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [message, setMessage] = useState(null)


    const addEmployee = useSelector(state => state.addEmployee)
    const { loading, error, userInfo } = addEmployee

    // useEffect(() => {
    //     if (userInfo) {
    //         navigate(redirect)
    //     }
    // }, [navigate, userInfo])


    const submitHandler = (e) => {
        e.preventDefault()

        // if (password !== confirmPassword) {
        //     setMessage('password do not match')
        // } else {

        //     dispatch(register(firstName, lastName, email))
        // }

        dispatch(register(firstName, lastName, email))

    }
    return (

        <FormContainer>

            <h1>Add Employee</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='firstName'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl type='name' placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></FormControl>
                </Form.Group>
                <Form.Group controlId='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type='name' placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></FormControl>
                </Form.Group>
                <Form.Group controlId='email'>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></FormControl>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign Up
                </Button>

            </Form>
        </FormContainer>
    )
}


export default RegisterScreen
