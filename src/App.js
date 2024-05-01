import {useState} from "react";
import './App.css';
 const App =()=>
 {
  const[ selectColor,setSeletedColor] = useState("ffffff");
  const handleColorChange = (e) =>
  {
    setSeletedColor(e.target.value);
  };
 const handleBgColorChanger=()=> {
  document.body.style.backgroundColor =selectColor;
 };
   
  return(
    <div>
      <input type="color" value ={selectColor} onChange={handleColorChange}/>
      <br/>
      <button onClick={handleBgColorChanger}>change background Color</button>
    </div>
  ) ;
 };
    
export default App;
