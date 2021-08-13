import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {option} from './ListOption';
import "./Library.scss";

const Library = (props) => {
   const [isSelect, setSelec] = useState([]);
    useEffect(()=>{
        setVisible(true);
    },[]);
    const [visible,setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };
    const handleOk = (e) => {
        setVisible(false);
    };
    const handleCancel = (e) => {
        setVisible(false);
    };
    const handelSelect = () =>{

    }
    return (
        <div className="Library">
            <h1 onClick={showModal}>hi</h1>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                wrapClassName={"common-header-modal"}
                closable={false}
                footer={null}
            >
            <CommonHeader/>
            <div className="option">
                {
                    option.map((item,index)=>{
                        return(
                            <div className="listOption" onClick={handelSelect}>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            </Modal>
        </div>

    )
}

export default Library;