import '../../stylesheets/loginStyle.css'
import {Link} from 'react-router-dom'

export default function login() {
return (
<div className="login">
   <center>
      <div style={{margin: '20px'}} className="outer-form ">
         <div className="main">
            <div className="loginDiv">
               <form >
                  <label className="lab">Login</label>
                  <div className="col-12">
                     <input  type="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                     <input type="password" placeholder="Password" />
                  </div>
                  <div>
                     <button style={{padding: '2px'}}  className="login-btn">Login </button>
                     <button style={{padding: '2px'}}  className="Signup-btn">
                     <Link to="/register" style={{textDecoration: 'none', color: 'white'}} > Sign Up </Link>
                     </button>
                  </div>
                  
               </form>
            </div>
         </div>
      </div>
     
      
   </center>
</div>
)
}

//  <div style={{margin: '20px'}} className="outer-form ">
//          <div className="main">
//             <div className="login">
//                <form >
//                   <label className="lab">Admin Login</label>
//                   <div className="col-12">
//                      <input  type="email" placeholder="Email" />
//                   </div>
//                   <div className="col-12">
//                      <input type="password" placeholder="Password" />
//                   </div>
//                   <div>
//                      <button style={{padding: '2px'}}  className="login-btn">Login </button>

//                      <button style={{padding: '2px'}}  className="Signup-btn">Sign Up </button>

//                   </div>
//                </form>
//             </div>
//          </div>
//       </div>
