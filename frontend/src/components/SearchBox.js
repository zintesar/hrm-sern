import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => { }

    return (
        // <Form onSubmit={submitHandler} inline>
        //     <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.targer.value)} placeholder='Search employee' className='mr-sm-2 ml-sm-5'></Form.Control>
        //     <Button type='submit' variant='outline-success' className='p-2'>Search</Button>
        // </Form>
        <div>

        </div>
    )
}

export default SearchBox
