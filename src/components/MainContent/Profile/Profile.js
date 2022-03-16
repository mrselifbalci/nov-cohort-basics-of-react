import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
          Profile
          <img src={this.props.url} alt=""/>
     </div>
    )
  }
}
