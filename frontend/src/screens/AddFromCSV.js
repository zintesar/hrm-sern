import React, { useState } from 'react'
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/employeeActions'




const AddFromCSV = () => {


    const readCSV = async (file) => {
        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)

        const bufferArray = await fileReader.onload()
    }

    return (
        <div>

        </div>
    )
}

export default AddFromCSV
