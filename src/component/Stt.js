import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import "./Stt.css";
function Stt() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      {/*     
      <div className='stt'>
      <h2 className='s'>Speech To Text Convertor</h2>
      <div className='speech'>
      
      <p text-white>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}><i class="bi bi-mic-fill"></i></button>
      <button onClick={SpeechRecognition.stopListening}><i class="bi bi-stop-circle"></i></button>
      <button onClick={resetTranscript}><i class="bi bi-arrow-clockwise"></i></button>
      <p>{transcript}</p>

      <input type='text' placeholder='Output Text'/>
      </div>
     </div>
       */}
       
      <div className="body">
        <div className="contain">
          <h2>Speech to Text Converter</h2>
          <br />
          <p>
            A React hook that converts speech from the microphone to text and
            makes it available to your React components.
          </p>

          <div
            className="main-content"
            onClick={() => setTextToCopy(transcript)}
          >
            {transcript}
          </div>

          <div className="btn-style">
            <button onClick={setCopied}> <ContentCopyIcon/>
              {isCopied ? "Copied!" : "Copy to clipboard"}
            </button>
            <button onClick={startListening}><KeyboardVoiceIcon/>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}><StopCircleIcon/>
              Stop Listening
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Stt;




















































// import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// import ChatIcon from '@mui/icons-material/Chat';
// import './Stt.css'; 

//  function Stt(){
//   return(
    
 

    
//     <>
    
//       <div className='stt'>
//       <h2 className='s'>Speech To Text Convertor</h2>
//       <div className='speech'>
//         <div className='speechicon'>
//       <i class="bi bi-mic-fill"></i>
//       </div>
//       <input type='text' placeholder='Output Text'/>
//       </div>
//      </div>
     

//     </>
//   );
//  }
//  export default Stt;









