import { Component } from "react";
class c1 extends  Component{
    constructor(props){
        super(props);
        this.state = {uni: "vit", roll: "xxxxxxxxx", rating:"?", bool:true} ;
    }
    handleClick = () =>{
        this.setState({uni: "vit-ap"})
    }
    rollno = () =>{
        this.setState({roll:"21BCE9497"})
    }
    rating = (event) =>{
        this.setState({rating: event.target.value})
    }
    result = () =>{
        this.setState({bool: !this.state.bool})
    }
    render(){
        return(
            <div>
                <h1>Hello! {this.props.name}</h1>
                <h2>University: {this.state.uni}</h2>
                <button onClick={this.handleClick}>display with branch</button> {/** one way binding : component to view */}
                <h3>roll No: {this.state.roll}</h3>
                <button onClick={this.rollno}>rollno?</button>
                <input placeholder="please give rating in 1-5" onChange={this.rating}/> {/** one way binding : view to component */}
                <p>you have given: {this.state.rating} star rating</p>
                <button onClick={this.result}>result</button>
                {(this.state.bool)?<h1 style={{color:"green"}}>Pass</h1>:<h1 style={{color:"red"}}>Fail</h1>}
            </div>
        )
    }
}
export default c1;