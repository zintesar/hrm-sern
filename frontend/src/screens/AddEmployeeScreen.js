import React, { useState } from 'react'
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/employeeActions'


const RegisterScreen = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const dispatch = useDispatch()


    const addEmployee = useSelector(state => state.addEmployee)
    const { loading, error, userInfo } = addEmployee




    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(firstName, lastName, email))

    }
    return (

        <FormContainer>

            <h1>Add Employee</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='firstName' className='mt-2'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl type='name' placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required></FormControl>
                </Form.Group>
                <Form.Group controlId='lastName' className='mt-2'>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type='name' placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required></FormControl>
                </Form.Group>
                <Form.Group controlId='email' className='mt-2'>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required></FormControl>
                </Form.Group>
                <Button type='submit' variant='primary' className='mt-2'>
                    Sign Up
                </Button>

            </Form>
        </FormContainer>
    )
}


export default RegisterScreen
