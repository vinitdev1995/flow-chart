import React,{useState} from "react"
import Library from "../Library/index"
import ActivityLog from "../ActivityLog/ActivityLog"
import Chats from "../Common/Chats";
import ChatsLogged from "../ChatsLogged/index";

const Home =()=>{
    const [isSelect, setSelec] = useState('');
    const [visible,setVisible] = useState(false);
    const [activity,setActivity] = useState(false);
    // const [chats,setChats] = useState(false);
    const [chatsLog, setChatsLogs] = useState(false)
    // const [visibleBlock,setVisibleBlock] = useState(false);
    //     // useEffect(()=>{
    //     //     setVisible(true);
    //     // },[]);
    console.log("setChatsLogs",chatsLog)
  return(
      <>
         {!activity && <h1 onClick={()=>setVisible(true)}>Hiii</h1>}
          {!activity && <h1 onClick={()=>setActivity(!activity)}>Activly log</h1>}
          {!activity && <h1 onClick={()=>setChatsLogs(true)}>chats</h1>}

          {!activity && <Library isSelect={isSelect}
                   setSelec={setSelec}
                   visible={visible}
                   setVisible={setVisible}/> }

          {activity && <ActivityLog setActivity={setActivity}/> }

          {/*{chats && <Chats setChats={setChats}/> }*/}
          {chatsLog && <ChatsLogged setChatsLogs={chatsLog}/> }
          {/*<ChatsLogged setChats={setChats}/>*/}
      </>
  )
}
export default Home;