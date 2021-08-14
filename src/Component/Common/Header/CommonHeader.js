import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import { GlobalOutlined,SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './CommonHeader.scss'


const CommonHeader = (props) => {
    const {title}=props;
    return (
        <div className="CommonHeader">
            <div className="library-heading">
                <span className="outline"/>
                <GlobalOutlined />
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