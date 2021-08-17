import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {ImageOption, option} from '../Common/Options';
import "./Library.scss";
import RegulerBlocks from "../RegulerBlocks";
import LogicAndTriggers from "../LogicAndTriggers";

const Library = (props) => {
    const {isSelect,setSelec,visible,setVisible}= props;
    const [visibleBlock,setVisibleBlock] = useState(false);
    const [visibleBlocks,setVisibleBlocks] = useState(false);
    const [countValue, setCountValue] = useState({});
    const [data,setData] = useState(option);
    const [count, setCount] = useState("");
    const [flag, setFlag] = useState("");
    useEffect(() =>{

    }, [countValue]);
    const handelOpen = (item,index) =>{
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
    };
    const countSelect = (list, title) =>{
        if (list !== 0){
            setCountValue({
                ...countValue,
                [title]: list
            });
        }
    };
    const FilterData = (serchData) =>{
        setData(serchData);
    }
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
                data={option}
                notLibrary={true}
                isSelected={visible}
                FilterData={FilterData}
            />
            <div className="option custom-scroll-class" style={{ overflowY: option.length <=4 ? "hidden" : "scroll",height: option.length <= 4?"auto":"482px" }}
                 id="custom-scroll">
                {
                    data?.map((item,index)=>{
                        return(
                            <div className={`listOption ${(index === isSelect) && 'selected'} `}
                                 onClick={()=>setSelec(index)}
                                 onDoubleClick={()=>{handelOpen(item.title,index)}} >
                                <p className="list">{item.title}</p>
                                <p className="selectedList">{
                                    Object.keys(countValue).map(key =>{
                                        return key === item.title ? `${countValue[key]} New Blocks` : null
                                    })
                                } </p>
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