import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

const FAQ = ({question, answer}) => {
  const [isAnswerShowing , SetIsAnswerShowing] = useState(false);

  return (
      <article className="faq" onClick={()=>{SetIsAnswerShowing(!isAnswerShowing)}}>
        <div>
            <h4>{question}</h4>
            <button className='faq__icon'>
               {isAnswerShowing ? <AiOutlineMinus/>:  <AiOutlinePlus/>} 
            </button>
        </div>
        {isAnswerShowing ? <p>{answer}</p>: null }
      </article>
  )
}

export default FAQ
