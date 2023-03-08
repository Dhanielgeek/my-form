import React from 'react'
import "./style.css"
import { BsSmartwatch } from 'react-icons/bs'

// import { icons } from 'react-icons/lib'

const ContentCard = (props) => {

  return (
    <div>
        <div className='card_service'>
          <div className='iconholder'>
            {props.icon}
        <BsSmartwatch style={{
          fontSize: "28px",
          color: "white"
        }}/>
          </div>
          <div className='textcon'>
            {/* <h3>Voice Assistant</h3> */}
            {props.text}
             {/* <a href='#'>Read More</a> */}
             <a href='#'>
              {props.link}
             </a>
          
          </div>
        </div>
    </div>
  )
}

export default ContentCard;

export const checkData = (arr)=>{
  if (arr !== undefined && arr !== null && arr.length > 0){
      return false
  }else{
    return true
  }
  
}
let user = null
checkData (user)