import '../stylesheets/posts.css'


export default function Post({posts}) {
  return (
    <div className="post">

    <div className="container d-flex align-items-center justify-content-center flex-wrap">
      <div className="box">
          <div className="body">
              <div className="imgContainer" > 
                <img src={require("../images/pict4.jpg")} alt="" /> 
              </div>
              <div className="content flex-column align-items-center justify-content-center">
                  <div>
                      <h3>Don't be afraid</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
      
    </div>
  )
}

          
          