import React,{useState} from "react"
import Library from "../Library/index"
import RegulerBlocks from "../RegulerBlocks/index"
import ActivityLog from "../ActivityLog/ActivityLog";
import FlowControl from "../FlowControl/index"
import ActivityLog from "../ActivityLog/ActivityLog"
import Chats from "../Common/Chats";
import ChatsLogged from "../ChatsLogged/index";

const Home =()=>{
    const [isSelect, setSelec] = useState('');
    const [visible,setVisible] = useState(false);
    const [activity,setActivity] = useState(false);
  return(
      <>
         {!activity && <h1 onClick={()=>setVisible(true)}>Hiii</h1>}
          {!activity && <h1 onClick={()=>setActivity(!activity)}>Activly log</h1>}
          {!activity && <h1 onClick={()=>setChatsLogs(true)}>chats</h1>}

          {!activity && <h1 onClick={()=>setChatFlow(true)}>chat Flow</h1>}

          {!activity && <Library isSelect={isSelect}
                   setSelec={setSelec}
                   visible={visible}
                   setVisible={setVisible}/> }

          {activity && <ActivityLog setActivity={setActivity}/> }
          {chatFlow && <FlowControl/>}
          {chatsLog && <ChatsLogged setChatsLogs={chatsLog}/> }

      </>
  )
}
export default Home;