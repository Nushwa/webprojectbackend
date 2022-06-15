import {useState} from "react"
import '../../stylesheets/registerStyle.css'
import {Link} from 'react-router-dom'
import axios from "axios"


export default function Register() {
   const [username, setUserName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSubmit = async (e) =>{
      e.preventDefault();
      const res = axios("/auth", {
         username, 
         email, 
         password
      })
   }

  return (
    <div>
        
        <center>
   <div className="outer-form ">
      <div className="main">
         <div className="register">
            <form onSubmit={handleSubmit}>
               <label className="wel">Welcome!</label>
               <div className="col-12">
                  <input  type="text" placeholder="Username" onChange={e=> setUserName(e.target.value)} />
               </div>
               <div className="col-12">
                  <input  type="email" placeholder="Email" onChange={e=> setEmail(e.target.value)}/>
               </div>
               <div className="col-12">
                  <input type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} />
               </div>
               <div className="col-12">
                  <input  type="tel" placeholder="Phone" />
               </div>
                  <button style={{padding: '2px'}}  className="Signup-btn" type="submit">Sign Up </button>
                  <button style={{padding: '2px'}}  className="login-btn">
                     <Link to="/login" style={{textDecoration: 'none', color: 'white'}} > Login </Link>
                  </button>

            </form>
         </div>
      </div>
   </div>
   <br /> <br />
</center>
</div>
  )
}
