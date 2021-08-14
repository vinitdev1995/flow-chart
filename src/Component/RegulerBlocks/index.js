import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {option,imageOptions} from './Option';
import "./RegulerBlocks.scss";

const RegulerBlocks = (props) => {
    const {visibleBlock,setVisibleBlock}= props;
    const [isSelect, setSelec] = useState('');
    // useEffect(()=>{
    //     setVisible(true);
    // },[]);
    // const [visible,setVisible] = useState(false);
    const handelSelect = (item) =>{
        console.log("onclick clickes");
        setSelec(item);
        // switch (item) {
        //     case "Regular Blocks" :{
        //         setVisibleBlock(true);
        //     }
        //
        // }
        console.log("item",item);
        console.log("isSeelect",isSelect);
    }

    return (
        <div className="Reguler Blocks">
            {/*<h1 onClick={showModal}>hi</h1>*/}
            <Modal
                visible={visibleBlock}
                cancelButtonProps={{ style: { display: 'none' }}}
                okButtonProps={{ style: { display: 'none' }}}
                wrapClassName={"common-header-modal"}
                closable={false}
                // footer={null}
            >
                <CommonHeader title="Reguler Blocks"/>
                <div>
                <div className="optionList custom-scroll-class" style={{ overflowY: option.length <=7 ? "hidden" : "scroll",height: option.length <= 4?"auto":"482px" }}
                     id="custom-scroll">
                    {
                        option.map((item,index)=>{
                            return(
                                <div className={`listOption ${(item.title === isSelect) && 'selected'} `} onClick={()=>{handelSelect(item.title)}}>
                                    <div className="img-box"><img src={item.img}/></div>
                                    <div className="title-text"> <p className="list">{item.title}</p></div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </Modal>

        </div>

    )
}

export default RegulerBlocks;