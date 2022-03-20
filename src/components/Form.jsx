import {React, useContext} from 'react' 
import Card from './shared/card'
import FeedbackData from './context/FeedbackData'
import { useState, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'



const Form = () => {
    const { addFeedback, editFeedback, editForm } = useContext(FeedbackData)
    const [text, setText] = useState('');
    const [rating, setRating] = useState();
    const [btnDisabled, setBtn] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(editFeedback.edit === true){
            setBtn(false)
            setText(editFeedback.item.text)
            setRating(editFeedback.item.rating)
        }
    }, [editFeedback])

    
    function textChange(e){
        if(text === ''){
            setBtn(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtn(true)
            setMessage('Review Must be Atleast 10 characters')
        }else {
            setBtn(false)
            setMessage(null)
        }
        setText(e.target.value);
    }

    function submitFeedback(e){
        e.preventDefault()

        if(editFeedback.edit === true){
            editForm(editFeedback.item.id, {text, rating})
        }else{
            addFeedback({text, rating})
        }

        setText('')
        setBtn(true)
        setRating(null)
    }


  return (
    <Card>
        <form onSubmit={submitFeedback}>
            <h2>How Would you rate our service with us?</h2>
                <RatingSelect select={(selected)=>setRating(selected)}/>
            <div className="input-group">


                <input onChange={textChange} 
                type="text" 
                placeholder='Write a Review'
                value={text}/>


                <Button type='submit' isDisabled={btnDisabled}>Submit Review</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default Form