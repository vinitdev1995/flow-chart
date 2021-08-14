import React,{useEffect,useState} from "react"
import Library from "../Library/index"
import RegulerBlocks from "../RegulerBlocks/index"

const Home =()=>{
    const [isSelect, setSelec] = useState('');
    const [visible,setVisible] = useState(false);
    const [visibleBlock,setVisibleBlock] = useState(false);
    // useEffect(()=>{
    //     setVisible(true);
    // },[]);

  return(
      <>
          <h1 onClick={()=>setVisible(true)}>Hiii</h1>
          <Library isSelect={isSelect}
                   setSelec={setSelec}
                   visible={visible}
                   setVisibleBlock={setVisibleBlock}
                   setVisible={setVisible}/>
          <RegulerBlocks
              visibleBlock={visibleBlock}
              setVisibleBlock={setVisibleBlock}/>
      </>
  )
}
export default Home;