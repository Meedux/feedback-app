import {React, useContext} from 'react'
import Card from './shared/card' 
import FeedbackData from './context/FeedbackData'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ item, set }) => {
  const { removeFeedback, EditFeedback } = useContext(FeedbackData)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>removeFeedback(item.id)} className='close'>
          <FaTimes color='red'/>
        </button> 
        <button onClick={()=>EditFeedback(item)} className="edit">
          <FaEdit />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem