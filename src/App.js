import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import './index.css'
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)


    function removeFeedback(id){
        setFeedback(feedback.filter(item => item.id !== id))

    }
    return(
        <>
            <Header text='Feedback UI' />
            <div className="container">
                <Form />
                <FeedbackStats feedback={feedback} />
                <FeedbackList data={feedback} set={removeFeedback}/>
            </div>
        </>
    )
}

export default App