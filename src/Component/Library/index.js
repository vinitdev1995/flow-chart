import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {option} from '../Common/Options';
import "./Library.scss";
import RegulerBlocks from "../RegulerBlocks";
import LogicAndTriggers from "../LogicAndTriggers";

const Library = (props) => {
    const {isSelect,setSelec,visible,setVisible}= props;
    const [visibleBlock,setVisibleBlock] = useState(false);
    const [visibleBlocks,setVisibleBlocks] = useState(false);
    const [count, setCount] = useState("");
    const [flag, setFlag] = useState("");

    useEffect(()=>{
        setVisible(true);
    },[]);

    const handelSelect = (item,index) =>{
        setSelec(index);
        switch (item) {
            case "Regular Blocks" :{
                setVisibleBlock(true);
                break;
            }
            case "Logic and Triggers" :{
                setVisibleBlocks(true);
                break;
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

             <LogicAndTriggers
                visibleBlocks={visibleBlocks}
                countSelect={countSelect}
                setVisibleBlocks={setVisibleBlocks}
             />
        </div>

    )
}

export default Library;