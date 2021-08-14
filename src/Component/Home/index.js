import React,{useEffect,useState} from "react"
import Library from "../Library/index"

const Home =()=>{
    const [isSelect, setSelec] = useState('');
    // useEffect(()=>{
    //     setVisible(true);
    // },[]);
    const [visible,setVisible] = useState(false);

  return(
      <>
          <h1 onClick={()=>setVisible(true)}>Hiii</h1>
          <Library isSelect={isSelect}
                   setSelec={setSelec}
                   visible={visible}
                   setVisible={setVisible}/>
      </>
  )
}
export default Home;