import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ data, set }) => {
  return (
    <div className='feedback-list'>
        {data.map((item)=>(
            <FeedbackItem key={item.id} item={item} set={set}/>
        ))}
    </div>
  )
}

export default FeedbackList