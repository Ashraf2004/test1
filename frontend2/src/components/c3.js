import { Component } from "react";
import Class4 from "./c4";
class c3 extends Component{
    render(){
        return(
            <div><h3>this is c3 component.Click unmount button to remove it.</h3>
            <h3>skills:</h3><Class4/>
            </div>
        );
    }
}
export default c3;