import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {option} from './ListOption';
import "./Library.scss";
import RegulerBlocks from "../RegulerBlocks";

const Library = (props) => {
    const {isSelect,setSelec,visible,setVisible}= props;
   const [isSelected, setSelected] = useState(false);
    const [visibleBlock,setVisibleBlock] = useState(false);
    const [count, setCount] = useState("");
    const [flag, setFlag] = useState("");
    // useEffect(()=>{
    //     setVisible(true);
    // },[]);
    // const [visible,setVisible] = useState(false);

    const handelSelect = (item,index) =>{
        setSelec(index);
        switch (item) {
            case "Regular Blocks" :{
                // setVisibleBlock(true);
                setVisibleBlock(true);
            }
        }
        console.log("item",item);
        console.log("isSeelect",isSelect);
    };
    const countSelect = (list, regular) =>{
        setCount(list);
        setFlag(regular);
        return list;
    };
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
                            <div className={`listOption ${(index === isSelect) && 'selected'} `} onClick={()=>{handelSelect(item.title,index)}}>
                                <p className="list">{item.title}</p>
                                <p className="selectedList">{flag === item.title ? count : 0} New Blocks</p>
                            </div>
                        )
                    })
                }
            </div>
            </Modal>
            <RegulerBlocks
                visibleBlock={visibleBlock}
                countSelect={countSelect}
                setVisibleBlock={setVisibleBlock}/>
        </div>

    )
}

export default Library;