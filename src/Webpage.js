import React, {Component} from 'react'
import Profile from './Profile'
import Daily from './Daily'

export default class Webpage extends Component{

    constructor(){
        super()
        this.state={
            title: 'Quotes',
            quote_one:'',
            quote_two:'',
            image_one: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            image_two: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        }
    }

    componentDidMount(){
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
        .then(res => res.json())
        .then(data=>{
            this.setState({
                quote_one: data.data[0].quoteText,
                quote_two: data.data[2].quoteText
            })
        })
        .catch(err=>console.log(err))
    }

    changeMainTitle=()=>{
        this.setState({
            title: 'Another Quote'
        })
    }


    render(){
        return (
        <div className='webpage-container'>
            <h1>{this.state.title}</h1>
            <div className='box-container'>
                <Profile myquote={this.state.quote_one} myimage={this.state.image_one} title={this.state.title} changeMainTitle={this.changeMainTitle}/>
                <Profile myquote={this.state.quote_two} myimage={this.state.image_two} title={this.state.title} changeMainTitle={this.changeMainTitle}/>
                <Daily/>
            </div>
        </div>
    )
}
}