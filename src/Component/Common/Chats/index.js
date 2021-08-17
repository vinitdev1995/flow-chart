import React from "react"
import './chats.scss'
import MoreVertIcon from '@material-ui/icons/MoreVert';
const Chats = (props) => {
    const {title,iconsTtexts,headerText,images,alt}=props;
    return (
        <div className="chats">
            <div className="img-button">
                <img src={images} alt={alt}/>
                <div className="button">
                    <button>Edit</button>
                    <span><MoreVertIcon style={{color:"#bfbfbf",height:"17px"}}/></span>
                </div>
            </div>
            <div className="chats-heading">
                <div className="chatsHeading">
                    <h4>{title}</h4>
                </div>
            </div>
            <div className="span-color">{headerText}</div>
        </div>

    )
}

export default Chats;