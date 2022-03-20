import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackData from './context/FeedbackData'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ set }) => {
  const { feedback } = useContext(FeedbackData)
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
              <FeedbackItem item={item} set={set}/>
            </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )


  // return (
  //   <div className='feedback-list'>
  //       {data.map((item)=>(
  //           <FeedbackItem key={item.id} item={item} set={set}/>
  //       ))}
  //   </div>
  // )
}

export default FeedbackList