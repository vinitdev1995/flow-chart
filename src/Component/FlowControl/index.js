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
                    <div className="">
                        <div>
                            <img src={messenger} />
                        </div>
                        <div>
                            <div>
                                Replay Me
                            </div>
                            <div>
                                Text,Image
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

            </Modal>
        </div>
    )
}
export default FlowControl;