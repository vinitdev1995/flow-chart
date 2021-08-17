import React from "react"
import { GlobalOutlined,SearchOutlined , ArrowLeftOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import BackArrow from '../../../assets/images/left-arrow.png'
import './CommonHeader.scss'
import {isVisible} from "bootstrap/js/src/util";


const CommonHeader = (props) => {
    const {title,notLibrary,isSelected,selectCount,visible,modelCloser,visibleBlock,data,FilterData}=props;
    const handelRedirect = (modelCloser) =>{
        selectCount();
        modelCloser(false);
    };
    const handelChange = (e) =>{
        const {value} = e.target;
        console.log("data",data)
        console.log("value",value)
       let result =  data && data.filter((item)=>
           item?.title.toLowerCase().includes(value.toLowerCase())
        );
        if(result !== ""){
            FilterData(result);
        }else {
            FilterData(data);
        }
       return result;
    }
    return (
        <div className="CommonHeader">
            {isSelected === true ? <></> : <div className='back-arrow'onClick={()=>{handelRedirect(modelCloser)}}><img src={BackArrow} alt="left-arrow"/></div>}
            <div className="library-heading">
                {notLibrary && <span className="outline"/>}
                {notLibrary && <GlobalOutlined /> }
                <div className="library1">
                    <h4>{title}</h4>
                </div>
            </div>
            <div className="span-color">Drag and drop a block into  your flow</div>
            <div className="Search-field">
                <Input placeholder="search"
                       onChange={handelChange}
                       suffix={<SearchOutlined />}
                />
            </div>
        </div>

    )
}

export default CommonHeader;