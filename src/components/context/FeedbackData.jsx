import { createContext, React, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackData = createContext()

export function FeedbackProvider({ children }){

    const [feedback, setFeedback] = useState([
        {id: 1, text: 'This is a text', rating: 10}
    ])
    const [editFeedback, setEditFeedback] = useState({
        item: {},
        edit: false
    })

    const EditFeedback = (item) => {
        setEditFeedback({
            item,
            edit: true
        })
    }

    const editForm = (id, upditem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...upditem}: item))
    }

    function removeFeedback(id){
        setFeedback(feedback.filter(item => item.id !== id))
    }

    function addFeedback(obj){
        obj.id = uuidv4()
        setFeedback([obj, ...feedback])
        console.log(feedback)
    }

    return(
        <FeedbackData.Provider 
        value={{
            feedback,
            removeFeedback,
            addFeedback,
            EditFeedback,
            editFeedback,
            editForm
        }}> 
            {children}
        </FeedbackData.Provider>
    )

}

export default FeedbackData;