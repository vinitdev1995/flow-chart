import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import { GlobalOutlined,SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './CommonHeader.scss'


const CommonHeader = (props) => {
    const {tital,img} = props;
    useEffect(()=>{
        setVisible(true);
    },[])
    const [visible,setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }
    const handleOk = (e) => {
        setVisible(false);
    }
    const handleCancel = (e) => {
        setVisible(false);
    }
    return (
        <div className="CommonHeader">
            <div className="library-heading">
                <span className="outline"/>
                <GlobalOutlined />
                <div className="library1">
                    <h4>Library</h4>
                </div>
            </div>
            <div><a href="#">Drag and drop a block into  your flow</a></div>
            <div className="Search-field">
                <Input suffix={<SearchOutlined />} />
            </div>
        </div>

    )
}

export default CommonHeader;