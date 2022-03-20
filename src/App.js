import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import './index.css'
// import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";
import { v4 as uuidv4 } from 'uuid'
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from './components/context/FeedbackData'

function App(){
    return(
        //{NOTE}: Figure Out How ALl This Shit Works and how react-router-dom fukin works
        <FeedbackProvider>
            <Router>
                <Header text='Feedback UI' />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <Form />
                                <FeedbackStats/>
                                <FeedbackList />
                            </>
                        } />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
                <AboutIcon />
            </Router>
        </FeedbackProvider>
    )
}

export default App