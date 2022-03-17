import React from 'react' 
import Card from './shared/card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const Form = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtn] = useState(true);
    const [message, setMessage] = useState('');

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


  return (
    <Card>
        <form>
            <h2>How Would you rate our service with us?</h2>
                <RatingSelect />
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