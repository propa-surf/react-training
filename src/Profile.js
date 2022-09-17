import React, { Component } from 'react'

export default class Profile extends Component {

  constructor(props){
    super(props)
    this.state={
      myTitle:this.props.title
    }
  }

  changeProfileTitle=()=>{
    this.setState({
      myTitle: "Different Quote"
    })
  }


  render() {
    return (
      <div className="profile-container">
        <h3 className="profile-header">{this.state.myTitle}</h3>
        <div className='image-quote'>
          <img className='profile-image' src={this.props.myimage} alt='Pic'/>
          <p className='myquote'>{this.props.myquote}</p>
        </div>
        <div className='button-container'>
          <button className='change-main' onClick={this.props.changeMainTitle}>Change Main</button>
          <button className='change-profile' onClick={this.changeProfileTitle}>Change Profile</button>
        </div>
      </div>
    )
  }
}
