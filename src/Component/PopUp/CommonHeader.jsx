import React,{useEffect,useState} from "react"
import { Modal, Button } from 'antd';
import search from "../../assets/images/search.png"




const Commonheader = (props) => {
    const {tital,img} = props;
    useEffect(()=>{
        // setVisible(true);
    },[])
    const [visible,setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    }
    const handleOk = (e) => {
        console.log(e);
        setVisible(false);
    }
    const handleCancel = (e) => {
        console.log(e);
        setVisible(false);
    }
    return (
        <div className="CommonHeader">
            <h1 onClick={showModal}>hi</h1>
            <Modal
                // title="Library"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
            >

                {/*<div className="d-flex flex-row">*/}
                {/*    <img src={img} alt="icon" className="d-flex align-items-center"/>*/}
                {/*    <h1>{tital}</h1>*/}
                {/*    <h1 className="d-inline mx-4">Library</h1>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <a href="#">Drag and drop block in to your flow</a>*/}
                {/*</div>*/}
                {/*<div className="d-flex flex-row">*/}
                {/*    <div>*/}
                {/*        <input type="text"/>*/}
                {/*    </div>*/}
                {/*    <div className="search-icon">*/}
                {/*        <img src={search}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>

    )
}

export default Commonheader;