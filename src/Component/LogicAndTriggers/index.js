import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {ImageOption, option} from '../Common/Options';
import "../RegulerBlocks/RegulerBlocks.scss";

const LogicAndTriggers = (props) => {
    const {visibleBlocks,setVisibleBlocks,setVisible,visible, countSelect}= props;
    const [isSelect, setSelect] = useState('');
    const [data,setData] = useState(ImageOption);
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
    const selectCount = () =>{
        countSelect(listGroup.length, "Logic and Triggers");
    };
    const FilterData = (serchData) =>{
        setData(serchData);
    }

    return (
        <div className="Reguler Blocks">
            <Modal
                visible={visibleBlocks}
                cancelButtonProps={{ style: { display: 'none' }}}
                okButtonProps={{ style: { display: 'none' }}}
                wrapClassName={"common-header-modal"}
                closable={false}
            >
                <CommonHeader title="Logic & Triggers" selectCount={selectCount}
                              FilterData={FilterData}
                              data={ImageOption}
                              stateFlagSetter={setVisible} visible={visible} modelCloser={setVisibleBlocks} visibleBlock={visibleBlocks}/>
                <CommonHeader title="Logic & Triggers" selectCount={selectCount} stateFlagSetter={setVisible} visible={visible} modelCloser={setVisibleBlocks} visibleBlock={visibleBlocks} headerText={"modules"}/>
                <div>
                    <div className="optionList custom-scroll-class" style={{ overflowY: ImageOption.length <=7 ? "hidden" : "scroll",height: ImageOption.length <= 4?"auto":"482px" }}
                         id="custom-scroll">
                        {
                            data.map((item,index)=>{
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

export default LogicAndTriggers;