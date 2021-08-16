import React,{useEffect,useState} from "react"
import Library from "../Library/index"
import RegulerBlocks from "../RegulerBlocks/index"
import ActivityLog from "../ActivityLog/ActivityLog"

const Home =()=>{
    const [isSelect, setSelec] = useState('');
    const [visible,setVisible] = useState(false);
    const [activity,setActivity] = useState(false)
    // const [visibleBlock,setVisibleBlock] = useState(false);
    //     // useEffect(()=>{
    //     //     setVisible(true);
    //     // },[]);

  return(
      <>
         {!activity && <h1 onClick={()=>setVisible(true)}>Hiii</h1>}
          {!activity && <h1 onClick={()=>setActivity(!activity)}>Activly log</h1>}
          {!activity && <Library isSelect={isSelect}
                   setSelec={setSelec}
                   visible={visible}
                   // setVisibleBlock={setVisibleBlock}
                   setVisible={setVisible}/> }
          {/*<RegulerBlocks*/}
          {/*    visibleBlock={visibleBlock}*/}
          {/*    setVisibleBlock={setVisibleBlock}/>*/}
          {activity && <ActivityLog setActivity={setActivity}/> }
      </>
  )
}
export default Home;