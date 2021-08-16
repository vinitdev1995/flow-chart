import React from "react";
import "./Activity.scss"
import {data} from "./data";

const ActivityLog =(props)=>{
    const {setActivity}= props;
    return(
        <div>
            <div className="container">
                <div className="header">
                    <p className="title" onClick={()=>setActivity(false)}>Activity Log</p>
                </div>
                <div className="ActivityBody">
                    {
                        data.map((item,index)=>{
                            return(
                                <div className="ActivityItems">
                                    <div className="img-parent">
                                        <div className="img-box">
                                            <img className="img" src={item.img}/>
                                        </div>
                                    </div>
                                    <div className="activity-parent">
                                        <div className="activityInfo">
                                            <span> {item.title} </span>
                                            <span className="name">&nbsp;{item.name}</span>
                                        </div>
                                        <div className="time-details">
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivityLog;