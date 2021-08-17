import React from "react"
import './chats.scss'
import {MoreOutlined} from '@ant-design/icons';

const Chats = (props) => {
    const {title,iconsTtexts,headerText,images,alt}=props;
    return (
        <div className="chats">
            <div className="img-button">
                <img src={images} alt={alt}/>
                <div className="button">
                    <button>Edit</button>
                    <MoreOutlined />
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