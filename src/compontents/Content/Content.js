import React from 'react'
import ContentCard from './ContentCard'
import "./style.css"

import {checkData} from "./ContentCard"
import Cons from  "./Cons.json"

const Content = () => {

  const displayData = checkData(Cons) ? <div>Data not found!!</div> : Cons.map(({icon,text,link})=>{
    return(
        <ContentCard icon={icon} text={text} link= {link}/>
    )
   })
  
  // const  ContentData = [
  //   {
  //     id : 1,
  //     icon :  "",
  //     text : "Voice Assistant",
  //     link : <a href='#'>Read more</a>
  //   },
  //   {
  //     id : 2,
  //     icon :  "",
  //     text : "Install Andriod App",
  //     link: <a href='#'>Read more</a>
  //   },
  //   {
  //     id : 3,
  //     icon :  "",
  //     text : "Call and SMS Alert",
  //     link: <a href='#'>Read more</a>
  //   },
  //   {
  //     id : 4,
  //     icon : "",
  //     text : "Interactive Design",
  //     link: <a href='#'>Read more</a>
  //   },
  //   {
  //     id : 5,
  //     icon : "",
  //     text : "Wireless Freedom",
  //     link: <a href='#'>Read more</a>
  //   },
  //   {
  //     id : 6,
  //     icon : "",
  //     text : "Noise Cancelling",
  //     link: <a href='#'>Read more</a>
  //   }
  // ]
  return (
    <div className='service_main'>
        <div className='service_container'>
          {displayData}
            {/* <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/> */}
             {/* {
        ContentData.map((props)=>(
          <ContentCard icon = {props.icon} text = {props.text} link = {props.link}/>
        ))
      } */}
        </div>
    </div>
  )
}

export default Content