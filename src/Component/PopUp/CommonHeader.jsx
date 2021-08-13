import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import { GlobalOutlined,SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './CommonHeader.scss'


const Commonheader = (props) => {
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
            <h1 onClick={showModal}>hi</h1>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
            >
                <div className="library-heading">
                    <GlobalOutlined />
                    <div className="library1">
                        <h4>Library</h4>
                    </div>
                </div>
                <div>Drag and drop a block into  your flow</div>
                <div className="Search-field">
                    <Input suffix={<SearchOutlined />} />
                </div>
            </Modal>
        </div>

    )
}

export default Commonheader;