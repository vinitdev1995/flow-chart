import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import CommonHeader from '../Common/Header/CommonHeader';
import {ImageOption} from '../Common/Options';
import "./RegulerBlocks.scss";
import corner from "../../assets/images/corner.svg"
const RegulerBlocks = (props) => {
    const {visibleBlock,setVisibleBlock,setVisible,visible, countSelect}= props;
    const [isSelect, setSelect] = useState('');
    const [listGroup, setList] = useState([]);
    const [data,setData] = useState(ImageOption);
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
        countSelect(listGroup.length, "Regular Blocks");
    };
    const FilterData = (serchData) =>{
        setData(serchData);
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
                <CommonHeader data={ImageOption} FilterData={FilterData} selectCount={selectCount} title="Reguler Blocks" stateFlagSetter={setVisible} visible={visible} modelCloser={setVisibleBlock} visibleBlock={visibleBlock}/>
                {/*<CommonHeader selectCount={selectCount} title="Reguler Blocks" stateFlagSetter={setVisible} visible={visible} modelCloser={setVisibleBlock} visibleBlock={visibleBlock} headerText={"modules"}/>*/}
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

export default RegulerBlocks;