import {Link} from "react-router-dom"
import {useState} from "react"
 function Form (){
   
    return(
        <div className='youga'>
           <input type="text" placeholder='Titre' /><br />
           <input type="text" placeholder='Description' /><br />
           <input type="text" placeholder='Titre d image ' /><br />
           <Link to ="/Form"><button className='ghuvizo'>Add</button></Link>
             </div>
    )
 }
 export default Form; 