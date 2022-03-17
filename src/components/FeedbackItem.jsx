import React from 'react'
import Card from './shared/card' 
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, set }) => {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>set(item.id)} className='close'>
          <FaTimes color='red'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem