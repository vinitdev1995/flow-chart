import React from "react"
import { GlobalOutlined,SearchOutlined , ArrowLeftOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import BackArrow from '../../../assets/images/left-arrow.png'
import './CommonHeader.scss'


const CommonHeader = (props) => {
    const {title,notLibrary,isSelected}=props;
    return (
        <div className="CommonHeader">
            {isSelected === true ? <></> : <div className='back-arrow'><img src={BackArrow} alt="left-arrow"/></div>}
            <div className="library-heading">
                {notLibrary && <span className="outline"/>}
                {notLibrary && <GlobalOutlined /> }
                <div className="library1">
                    <h4>{title}</h4>
                </div>
            </div>
            <div className="span-color">Drag and drop a block into  your flow</div>
            <div className="Search-field">
                <Input placeholder="search" suffix={<SearchOutlined />} />
            </div>
        </div>

    )
}

export default CommonHeader;