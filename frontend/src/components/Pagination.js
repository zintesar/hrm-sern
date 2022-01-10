import React from 'react'

const Pagination = ({ employeePerPage, totalEmployee, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalEmployee / employeePerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
