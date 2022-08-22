import React ,{useState}from 'react'
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";



const Search = () => {
    const [input,setInput]=useState("");
    const navigate=useNavigate()
    function submitHandler(e){
        e.preventDefault();
        navigate('/searched/'+input);
    }
  return (
    <FormStyle action="" onSubmit={submitHandler}>
        <div>
        <FaSearch/>
        <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}/>
        </div>
    </FormStyle>
  )
}
const FormStyle=styled.form`
margin:0rem 0rem;


div{
    width:100%;
    position:relative;
}
input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1rem;
    color:white;
    padding:1rem 3rem;
    outline:none;
    border-radius:1rem;
    width:100%;


}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
    color:white;
}

}
`
export default Search