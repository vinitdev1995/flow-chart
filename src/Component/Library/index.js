import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {option} from './ListOption';
import "./Library.scss";

const Library = (props) => {
    const {isSelect,setSelec,visible,setVisible,setVisibleBlock}= props;
   const [isSelected, setSelected] = useState(false);
    // useEffect(()=>{
    //     setVisible(true);
    // },[]);
    // const [visible,setVisible] = useState(false);

    const handelSelect = (item) =>{
            setSelected(true)
        console.log(setSelected);
        setSelec(item);
        switch (item) {
            case "Regular Blocks" :{
                setVisibleBlock(true);
            }

        }
        console.log("item",item);
        console.log("isSeelect",isSelect);
    }
    return (
        <div className="Library">
            {/*<h1 onClick={showModal}>hi</h1>*/}
            <Modal
                visible={visible}
                cancelButtonProps={{ style: { display: 'none' }}}
                okButtonProps={{ style: { display: 'none' }}}
                wrapClassName={"common-header-modal"}
                closable={false}
                // footer={null}
            >
            <CommonHeader
                title="Library"
                notLibrary={true}
                isSelected={visible}
            />
            <div className="option custom-scroll-class" style={{ overflowY: option.length <=4 ? "hidden" : "scroll",height: option.length <= 4?"auto":"482px" }}
                 id="custom-scroll">
                {
                    option.map((item,index)=>{
                        return(
                            <div className={`listOption ${(item.title === isSelect) && 'selected'} `} onClick={()=>{handelSelect(item.title)}}>
                                <p className="list">{item.title}</p>
                                <p className="selectedList">New Blocks</p>
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