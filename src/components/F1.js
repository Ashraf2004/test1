import Axios from "axios";
import {useEffect, useState} from "react";
function F1(){
    const [Data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200){
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);
    const ListName = () =>{
        return Data.map((val)=>{
            return <h1>{val.name}</h1>
        })
    }
    return(
        <div>
            <h1>hello</h1>
            {ListName()}
        </div>
    );
}
export default F1;