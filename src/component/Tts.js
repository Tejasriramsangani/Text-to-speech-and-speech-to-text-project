import React, { useState } from 'react';

 import './Tts.css'
 

 
 
 function Tts(){
     const [text,setText] = useState('');


     const speech = new SpeechSynthesisUtterance(text);

     const speechHandler = () => {

        return speechSynthesis.speak(speech)
     }


     return(
    <>
      <div className='Tts'>
      <h1>  TEXT TO SPEECH CONVERTOR</h1>
      <div class='text'>
         {/* <div className='icons'>
         <i class=" bi-search"></i> 
         
         </div>  */}
      <textarea onChange={(e) => setText(e.target.value) }
       type='text' 
       name='text'
      value={text} 
      
      placeholder='Enter Your Text'>
       </textarea> 
       <div>
    <button onClick={speechHandler}  ><b>Click to speak</b></button><br/>
    </div>
      {/* <i class="bi bi-mic-fill"></i> */}
      </div>
      </div>
      
    </>
  );
 }
 export default Tts;