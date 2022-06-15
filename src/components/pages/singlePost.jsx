import '../../stylesheets/singlePost.css'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'


export default function singlePost() {
  return (
    <div className="single">
        <div className="PostWrapper">
            <img src={require("../../images/pict1.jpg")} alt="" className="PostImg" />

            <h1 className="Title">
               Lorem ipsum dolor sit amet,
               <div className="Edit">
                    <BiEdit className="singlePostIcon" />
                    <AiFillDelete className="singlePostIcon" />
                </div>
            </h1>
            <div className="Info">
                <span className="Author">Author: <b> Safak </b> </span>
                <span className="Date">1 hour ago </span>
            </div>
            <p className="Description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum sed lorem vitae egestas. 
        Proin porta ultricies ipsum vel sodales. Aliquam neque libero, vehicula et commodo nec, 
        aliquet vitae orci. Nam lorem turpis, mollis a ultrices non, porttitor sed ligula. Donec mauris tortor, accumsan eu elit id, 
        imperdiet sollicitudin urna. 
        Nullam dignissim ornare mi, a mollis enim feugiat eu. 
        Suspendisse elementum fermentum nulla, id sodales mauris tristique sit amet. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum sed lorem vitae egestas. 
        Proin porta ultricies ipsum vel sodales. Aliquam neque libero, vehicula et commodo nec, 
        aliquet vitae orci. Nam lorem turpis, mollis a ultrices non, porttitor sed ligula. Donec mauris tortor, accumsan eu elit id, 
        imperdiet sollicitudin urna. 
        Nullam dignissim ornare mi, a mollis enim feugiat eu. 
        Suspendisse elementum fermentum nulla, id sodales mauris tristique sit amet. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum sed lorem vitae egestas. 
        Proin porta ultricies ipsum vel sodales. Aliquam neque libero, vehicula et commodo nec, 
        aliquet vitae orci. Nam lorem turpis, mollis a ultrices non, porttitor sed ligula. Donec mauris tortor, accumsan eu elit id, 
        imperdiet sollicitudin urna. 
        Nullam dignissim ornare mi, a mollis enim feugiat eu. 
        Suspendisse elementum fermentum nulla, id sodales mauris tristique sit amet. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum sed lorem vitae egestas. 
        Proin porta ultricies ipsum vel sodales. Aliquam neque libero, vehicula et commodo nec, 
        aliquet vitae orci. Nam lorem turpis, mollis a ultrices non, porttitor sed ligula. Donec mauris tortor, accumsan eu elit id, 
        imperdiet sollicitudin urna. 
        Nullam dignissim ornare mi, a mollis enim feugiat eu. 
        Suspendisse elementum fermentum nulla, id sodales mauris tristique sit amet. 
            </p>
            
        </div>
    </div>
  )
}
