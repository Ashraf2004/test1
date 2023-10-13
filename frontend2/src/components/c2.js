import { Component } from "react";
import Class3 from "./c3";
class c2 extends Component{
    constructor(){
        console.log("I am constructor");
        super();
        this.state = {brand: "nike", toggle: true};
    }
    static getDerivedStateFromProps(){
        console.log("I am getDerivedStateFromProps method");
        return null;
    }
    componentDidMount(){
        console.log("I am componentDidMount method");
    }
    shouldComponentUpdate(){
        console.log("I am shouldComponentUpdate method");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }
    componentDidUpdate(){
        console.log("I am conponentDidUpdate method");
    }
    render(){
        console.log("I am rendor method");
        return(
            <div><h1>LIFE CYCLE METHODS: check console for understanding the flow</h1>
            <p>brand Name: {this.state.brand}</p>
            <button onClick={()=>{this.setState({brand:"adidas"})}}>click</button>
            {(this.state.toggle)?<Class3 />: null }
            <button onClick={()=>{this.setState({toggle:false})}}>unmount</button>
            </div>
            
        )
    }
}
export default c2;