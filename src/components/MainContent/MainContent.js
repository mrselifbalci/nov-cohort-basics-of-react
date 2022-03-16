import React, { Component } from 'react'
import Profile from './Profile/Profile'
import Form from './Form/Form'

export default class MainContent extends Component {
 
  constructor(){
    super()
     this.state={
        myName:"Vedran",
        age:25,
        urlOne:"https://picsum.photos/200/300",
        urlTwo:"https://picsum.photos/200/300",
        quote:''
     }

  }

 changeAge =()=>{
    this.setState({
      age:40,
      myName:"Ozgur"
    })
 }

componentDidMount(){
 fetch(`https://quote-garden.herokuapp.com/api/v3/quotes`)
 .then(response=>response.json())
 .then(data=>{
  this.setState({
    quote:data.data[0].quoteText
  })

 })


}


 
  render() {
    return (
      <div className='main-container'>
          MainContent
          
          <button onClick={this.changeAge}>change age</button>
          
          <div>
            <p>{this.state.quote}</p>
            <p>{this.props.user}</p>
            <p>{this.state.myName}</p>
            <p>{this.state.age}</p>
            <Profile url={this.state.urlOne}/>
            <Profile url={this.state.urlTwo}/>
            <Form/>
            
          </div>
          
      </div>
    )
  }
}
