import {useEffect, useState} from 'react'
import Header from '../components/Header'
import '../stylesheets/homestyle3.css'
import Post from '../components/Post'
import Footer from './Footer'
import axios from "axios"
import AllPost from "./pages/AllPost"


export default function Home() {
   const [posts, setPosts] = useState([]);

// const url = "http://localhost:5000/api"

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get('/posts')
         .then((res)=>console.log("success"))
         .catch(error => console.log(error))
         console.log(res);
      }
      fetchPosts()
   },[])

  return (
<div className="home">
   <Header />
   <center>
      <div>
         <h2 className="heading3">
            See what we’ve <span className="span-heading3"><i>written</i></span> lately
         </h2>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <AllPost posts={posts}/>
      
    
</div>
</center>
<div className="features row" >
   <a className="fe1 col-sm col-md" href="/" target="_blank">
      <div className=" col-sm" >
         <h3 className="fe-heading">
            Features
         </h3>
      </div>
   </a>
   <a className="fe2 col-sm col-md" href="/" target="_blank" >
      <div className=" col-sm" >
         <h3 className="fe-heading">
            Authors
         </h3>
      </div>
   </a>
   <a  className="fe3 col-sm " href="/" target="_blank">
      <div className=" col-sm" >
         <h3 className="fe-heading">
            Tags
         </h3>
      </div>
   </a>
</div>

</div>

  )
}
