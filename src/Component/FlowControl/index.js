import  React from "react";
import {Modal} from "antd";
import messenger from "../../assets/images/messanger.png";
import "./FlowControl.scss"

const FlowControl = () =>{
    return(
        <div className="FlowControl">
            <Modal
                visible={true}
                cancelButtonProps={{style: {display: 'none'}}}
                okButtonProps={{style: {display: 'none'}}}
                wrapClassName={"FlowControl-model"}
                closable={false}
                // footer={null}
            >
                <div className="main-Body">

                       <div className="img-box">
                           <img src={messenger} />
                       </div>
                    <div>
                       <span className="outer-box">
                           <div className="innner-Box">
                               <img src={messenger}/>
                           </div>
                           <div outer-text-box>
                               <div>
                                   Replay Me
                               </div>
                               <div>
                                   Text,Image
                               </div>
                           </div>
                       </span>
                   </div>

                </div>

            </Modal>
        </div>
    )
}
export default FlowControl;