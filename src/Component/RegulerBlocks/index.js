import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {option,imageOptions} from './Option';
import "./RegulerBlocks.scss";

const RegulerBlocks = (props) => {
    const {visibleBlock,setVisibleBlock,setVisible,visible, countSelect}= props;
    const [isSelect, setSelect] = useState('');
    const [listGroup, setList] = useState([]);
    const handelSelect = (index) =>{
        console.log("onclick clickes");
        let listBlocks = [];
        const position = listGroup.indexOf(index);
        if (position >= 0){
            let array = [...listGroup];
            array.splice(position, 1);
            setList(array);
        } else {
            setList([...listGroup, index]);
        }
    };
    countSelect(listGroup.length, "Regular Blocks");
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
                <CommonHeader title="Reguler Blocks" stateFlagSetter={setVisible} visible={visible} modelCloser={setVisibleBlock} visibleBlock={visibleBlock}/>
                <div>
                <div className="optionList custom-scroll-class" style={{ overflowY: option.length <=7 ? "hidden" : "scroll",height: option.length <= 4?"auto":"482px" }}
                     id="custom-scroll">
                    {
                        option.map((item,index)=>{
                            return(
                                <div className={`listOption ${listGroup.includes(index) && 'selected'} `} onClick={()=>{handelSelect(index)}}>
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