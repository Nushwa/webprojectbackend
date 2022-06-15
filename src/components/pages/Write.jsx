import '../../stylesheets/write.css'
import { AiOutlinePlus } from 'react-icons/ai'


export default function Write() {
  return (
    <div className="write">
 
        <img 
        className="writeImg"
        src={require('../../images/pict1.jpg')}
        alt="" /> 
        <form className="writeForm">
            <div className="writeFormDiv"> 
                <label htmlFor ="fileInput">
                <AiOutlinePlus className="writeIcon" />
                </label>
                <input type="file" id="fileInput" style ={{display: 'none'}} />
                <input className="writeInput" type="text" name="text" placeholder="Title"  autoFocus={true} />
            </div>
            <div className="writeFormDiv">
              <textarea placeholder="Tell your story.." 
              type="text"
              className="writeInput writeText" >
              </textarea>
            </div>

            <div>
              <button className="Submit-btn" type="submit">Publish</button>
            </div>
        </form>
    </div>
  )
}
