import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import Chats from "../Common/Chats";
import chats1 from "../../assets/images/msg2.svg"
import "./ChatsLogged.scss";

const ChatsLogged = (props) => {
    const {setChatsLogs}= props;
    return (
        <div className="ChatsLogged">
            <Modal
                visible={setChatsLogs}
                cancelButtonProps={{ style: { display: 'none' }}}
                okButtonProps={{ style: { display: 'none' }}}
                wrapClassName={"common-header-modal"}
                closable={false}
            >
                <Chats title={"Reply"} images={chats1} alt={"chats-icon"}  headerText={"Reply with a pre-defined messages to the users who triggered this flow"}/>
            </Modal>
        </div>

    )
}

export default ChatsLogged;