import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIcon = () => {
  return (
    <div className='about-link'>
        <Link to={{
            pathname: 'about',
            search: 'WHY_ARE_YOU_READING_THIS!!'
        }}>

        <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIcon