import React,{useState,useEffect} from 'react'

export default function Header(props) { 

const [user,setUser] = useState('Elif')
const [day,setDay] = useState('Wednesday')
const [quote,setQuote]=useState('')


const changeInfo=()=>{
   setUser('Peter')
   setDay('Thursday')
}

useEffect(()=>{
  fetch(`https://quote-garden.herokuapp.com/api/v3/quotes`)
  .then(response=>response.json())
  .then(data=>{
    setQuote(data.data[0].quoteText)
  })
},[])


  return (
    <div className='header-container'>
        {/* Welcome {props.user} It is {props.day} */}
        <div>{quote}</div>
        {user} it is {day}
        <button onClick={changeInfo}>change name</button>
    </div>
  )
}
