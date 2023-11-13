import React from "react";
import "./About.css";
// import Navbar from './Navbar';
import { Height } from "@mui/icons-material";
import { width } from "@mui/system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import 'animate.css';


const About = () => {
  return (
    <div className="container1">
      <div className="container2">
        <div className="about">
          <h1> WELCOME TO OUR PAGE</h1>
         {/* <div className="arro"><ArrowDownwardIcon /></div>  */}
        </div>
      </div>
      <div className="about7">
        <div className="about2">
          <button>
            <a href="https://murf.ai/resources/tags/text-to-speech/">
             
              Text To Speech
            </a>
          </button>

          <h3 className="text-center"
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-offset="300"
          >
            Text to Speech vs. Speech to Text
          </h3>

          <div className="imgedit">
            <img
              
              src="https://static.thenounproject.com/png/1435843-200.png"
            ></img>
            <img src="https://cdn.shopify.com/s/files/1/0025/5888/5997/files/Rainbow_Soundwave_mobile_750x600_optimised_x800.gif?v=1655295517" />
          </div>

        </div>

        <div className="about4" data-aos="slide-up">
          <p>
            Have you ever used a voice search assistant for a query on your
            browser or a phone? If yes, then there's no better instance of
            speech to text in action in your daily life. Along the same lines,
            if you've used the "pronunciation" tool on Google to learn how a
            word is spoken, you now understand what text to speech is.
            </p>
            <p>
            Text to speech (TTS) and Speech to text (STT) are two entirely
            different technologies, although they do work on the same
            concept—the use of graphemes, phonemes, and Mel-spectrograms—for
            converting one form of language into another. TTS has been received
            quite well all over the world over and is set to reach a market
            capital value of $6.52 billion by 2027.
            </p>
            <p>
            Similarly, speech to text is also prominently noticeable today in
            the form of dictation tools on software like MS Word. In fact, the
            market for speech to text is growing at a CAGR of over 15% (2022 to
            2030).
            </p>
            <p>
            There's so much more to these tools than their market performance.
            There is a detailed process that happens behind the scenes—within
            seconds—that produces the output. Here is a deeper insight into text
            to speech vs speech to text.
          </p>
        </div>

        <div className="about3" data-aos="slide-up">

          <div
            class="car text-white bg-warning mb-3 p-3"
            style={{ height: 320, width: 300 }}
            data-aos="fade-right"
            data-aos-offset="350"
          >
            <div class="card-header">
              <h4>What is Text to Speech?</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">TTS</h5>
              <p class="card-text">
                Text to speech is a noble technology that reads text aloud. You
                may also know this tool as "Read Aloud" on products like eBooks
                and reader.Text to speech also enables businesses to drastically
                expand their audience outreach to previously inaccessible
                demographics.
              </p>
            </div>
          </div>

          <div
            class="car text-white bg-info mb-3 p-3"
            style={{ height: 320, width: 300 }}
            data-aos="fade-right"
            data-aos-offset="350"
          >
            <div class="card-header">
              <h4>What is Speech to Text?</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">STT</h5>
              <p class="card-text">
                Speech to text is a computational linguistics technology that
                uses speech recognition or an audio file to convert spoken
                language into text. Its best example is the Dictate tool in
                Microsoft Word, which allows users to dictate or spell instead
                of typing it in their documents.
              </p>
            </div>
          </div>

        </div>

        <div className="about5" data-aos="fade-up-right">
          <h1 className="text-center">
            <br />
            How do Text to Speech and Speech to Text Work?
          </h1>
          <h5 className="text-center">
            The working of text to speech and STT is fairly simple to
            understand.
          </h5>
          <h3>
            <br />
            <b >TTS Technology: How it Works</b>
          </h3>
          <p>
            The conversion of text to speech is a four-step process. It begins
            with pre-processing:
          </p>
          <ul style={{paddingLeft:"100px"}}>
            <li>
              The text you input is input into the pre-processor, which breaks
              it up into phonemes. Each phoneme has its own specific duration in
              the audio.
            </li>
            <br />
            <li>
              The phonemes, which are the latent features of the input, are then
              sent to the encoder, which embeds them with the “Speaker” before
              sending them to the decoder.
            </li>
            <br />

            <li>
              The decoder then processes these latent features and determines
              the energy, duration, and pitch to convert them into
              Mel-spectrograms.
            </li>
          </ul>
        </div>

        <div className="about6" data-aos="fade-up">
          <h3>
            <br />
            <b >STT Technology: How it Works</b>
          </h3>
          <p>
            The conversion of speech to text online relies on ASR technology.
            Here's how it works:
          </p>
          <ul style={{paddingLeft:"100px"}}>
            <li>
              When you “speak,” the sound waves you produce are analog signals
              of sound. In order to be computed by software for conversion,
              these analog signals are first digitized. This digitization
              happens by breaking down the acoustics into segments.
            </li>
            <br />
            <li>
              Once all the phonemes are matched, the software then locates the
              respective grapheme for each phoneme. Graphemes are words,
              phrases, or symbols that correspond to linguistic phonetics.
            </li>
            <br />

            <li>
              The decoder then processes these latent features and determines
              the energy, duration, and pitch to convert them into
              Mel-spectrograms.
            </li>
          </ul>
        </div>
      </div>
      <div className="about8">
        

        <img src="https://addons.mozilla.org/user-media/previews/thumbs/261/261161.jpg?modified=1631513313" />
        {/* <img src='https://i0.wp.com/c1ctech.com/wp-content/uploads/2021/01/Screenshot_1611838103.png?fit=1080%2C1920&ssl=1'/>
  <img src="https://www.hearinglikeme.com/wp-content/uploads/2020/05/STT-apps.jpg"/> */}
        <img src="images/speech.jpeg" />
      </div>

    </div>
  );
};

export default About;