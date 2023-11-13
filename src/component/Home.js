import React from "react";

import "./Home.css";

function App() {
  return (
    <>
      <div className="homemain">
        {/* <p className='text-center display-4 mt-2'>Welcome To Our Page</p> */}
        <div className=" firstdivhome-1">
          <div
            className="animate__animated animate__heartBeat animation-duration: 1s;
}"
          >
            <p className="display-4 font-weight-bold">
              Speech to Text - Voice Typing & Transcription
            </p>
          </div>
          <p className="firstdivhome-2 ">
            Take notes with your voice for free, or automatically transcribe
            audio & video recordings on the spot. Secure, accurate & super fast.
          </p>
        </div>
        <p className="h1 text-center mt-0 mb-5">Lets Try It</p>
        <div className="seconddivhome">
          <div className="seconddivhome-1">
            <img
              className="mic"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4jV_ugKjNeBsDitWlP_EySobxdmp4dMFAK5T2NHMJdJLwas0U"
              alt=""
            />
            <p className="h2 mt-1 mb-3">Speechnotes</p>
            <button className="ctn">
              {" "}
              <a href="/Tts">start transcribing </a>
            </button>
            <p className="h2 mt-4 mb-3">Dictation & Transcription</p>
            <p className="p mt-1 mb-3">
              Type with your voice for free, or automatically transcribe audio &
              video recordings
            </p>
          </div>
          <div className=" seconddivhome-2">
            <img
              className="vol"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQer76oOXjI4HW-RtUn92YoHc7Gz70mUHXkEyahW5v76TQv8UU"
              alt=""
            />
            <p className="h2 mt-1 mb-3">SpeechNinja</p>
            <button className="ctn">
              <a href="/Stt">say what i type </a>
            </button>

            <p className="h2 mt-4 mb-3">Type to speak</p>
            <p className="p mt-1 mb-3">
              SpeechNinja says what you type in real time, for people with
              speech difficulties.
            </p>
          </div>
        </div>

        <div className="homeBg">
          <h1 className="mt-1 mb-3">Text-to-speech (TTS)</h1>
          <div className="home">
            <img
              className="img-fluid"
              src="https://disabilityinsider.com/wp-content/uploads/2019/10/TTS.jpg"
            />
            <div className="content1">
              <h4 className="">
                TTS is a type of assistive technology that reads digital text
                aloud. It’s sometimes called “read aloud” technology.With a
                click of a button or the touch of a finger, TTS can take words
                on a computer or other other digital device and convert them
                into audio. TTS is very helpful for kids who struggle with
                reading. But it can also help kids with writing and editing, and
                even focusing.{" "}
              </h4>
              <div>
                <b className="h3">Test to Speech Testing Here</b>
              </div>
              <div>
                <button className="Btn mt-2">
                  <a href="/Tts">Text To Speech</a>
                </button>
              </div>
            </div>
          </div>

          <h1 className="mb-3 mt-2">Speech To Text(STT)</h1>
          <div className="home1">
            <div className="content2">
              <h4>
                Speech-to-text, also known as speech recognition, allows for the{" "}
                real-time transcription of audio streams into text. This is also
                known as computer speech recognition. When users speak clearly,
                script accuracy rates exceed 95%.STT is a direct tax levied on
                every purchase and sale of securities that are listed on the
                recognized stock exchanges in India. STT is governed{" "}
              </h4>

              <div>
                <b className="h3">Speech to text Testing Here</b>
              </div>
              <div>
                <button className="Btn mt-2">
                  <a href="/Stt"> Speech To Text</a>
                </button>
              </div>
            </div>
            <img
              className="img-fluid"
              src="https://editor.analyticsvidhya.com/uploads/75412speech-recognition-python.png"
            />
          </div>
        </div>

        <div className="thirddivhome">
          <p className="h3 mb-4 d3-1 mt-2">
            Speech Recognition and Text to Speech
          </p>
          <p>
            When choosing an app to transcribe speech to text and text to
            speech, quality is important. Our application delivers accurate text
            to speech and speech to text transcriptions that support multiple
            languages. Our transcription technology can convert speech to text
            and vice versa with a strong accuracy level and instantaneous
            result. It can produce multiple voices in multiple languages and
            recognize speech in multiple languages.
          </p>
        </div>
        <div className="fourthdivhome">
          <p className="h3 mb-4 d3-1">Different Use Cases</p>
          <p>
            This application converts speech to text nearly instantaneously.
            It's an ideal solution for long notes, essays, reports, and other
            lengthy documents. The text to speech functionality employs advanced
            deep learning techniques, turning texts into lifelike speech. It's
            excellent for narrating books or other long texts into audio. This
            application can be greatly useful for people with disabilities in
            reading and concentration. Our app is particularly useful for
            eLearning and business purposes and is used daily by writers,
            students, teachers, bloggers, news reporters, business persons, and
            people in similar situations
          </p>
        </div>
        <div className="thirddivhome">
          <p className="h3 mb-4 d3-1 mt-2">
            Why Use Speech Recognition and Text to Speech
          </p>
          <p>
            This app makes being productive easier than ever. It can help
            efficiency with your time and energy. This may be the key to
            mobility and efficiency in your work. Speech to text and text to
            speech have amazing potentials for recording ideas and saving time
            spent typing, writing, or reading at the office or school so you can
            relax, think more creatively, and get more work done. This app
            breaks language barriers, designed to reach billions of non-English
            people. It can easily transcribe on demand all your text and
            speeches using many languages.
          </p>
        </div>
        <div className="fourthdivhome">
          <p className="h3 mb-4 d3-1">Read Text To Me</p>
          <p>
            Have you ever wanted an application that could "read the text to
            me"? Well, here it is! With Smodin’s text to speech app, you can
            turn files from text to speech. You can convert word text to speech.
            You can also use our speech to word! It's a simple way to convert
            text to speech, or speech to text, that is fast and straightforward.
            Write your message directly into the box choose your favorite voice,
            choose the speed, and then use it!
          </p>
        </div>
        <div className="fifthdivhome ">
          <p className="h1">Benefits of Text to Speech</p>
          <p className="h5 mt-4 ">
            There’s a better way to read online with high fidelity speech
          </p>
          <div className="fifthdivhome-1">
            <div className="fd-1">
              <img
                src="https://speechify.com/wp-content/uploads/2022/12/reading-paper.webp"
                alt=""
              />
              <p className="h3 mt-3 mb-3">Read almost anything</p>
              <p>
                Speechify works seamlessly with Google Docs and almost anything
                you see in Chrome.{" "}
              </p>
            </div>
            <div className="fd-1">
              <img
                src="https://speechify.com/wp-content/uploads/2022/12/productivity.webp"
                alt=""
              />
              <p className="h3 mt-3 mb-3">Maximize your productivity</p>
              <p>
                Read aloud your email, lengthy documents and more in natural
                sounding voices{" "}
              </p>
            </div>
            <div className="fd-1">
              <img
                src="https://speechify.com/wp-content/uploads/2022/12/walking-the-dog.webp"
                alt=""
              />
              <p className="h3 mt-3 mb-3">Do more at once</p>
              <p>
                Listen to Chrome wherever you go. Every web page, email, or
                document is now a podcast.{" "}
              </p>
            </div>
          </div>
          <div className="fd-2">
            <button className="Btn">
              <a href="/Tts">Text to speech</a>
            </button>
            <button className="Btn">
              <a href="/Stt">Speech to text</a>
            </button>
          </div>
        </div>
        <div className="sixthdivhome">
          <p className="h1 mb-4 mt-1">Key Advantages</p>
          <div className="sixthdiv-1">
            <div className="sd-1" data-aos="flip-left" data-aos-duration="1500">
              <p className="h3">Accurate</p>
              <p>
                Speechnotes is powered by the leading most accurate speech
                recognition AI engines by Google & Microsoft. We always check -
                and make sure we still use the best. Accuracy in English is very
                good and can easily reach 95% accuracy for good quality
                dictation or recording.
              </p>
            </div>
            <div className="sd-1" data-aos="flip-left" data-aos-duration="2000">
              <p className="h3">Lightweight & fast</p>
              <p>
                Both Speechnotes dictation & transcription are
                lightweight-online no install, work out of the box anywhere you
                are. Dictation works in real time. Transcription will get you
                results in a matter of minutes to complete your work very easiy
              </p>
            </div>
            <div className="sd-1" data-aos="flip-left" data-aos-duration="2500">
              <p className="h3">Super Private & Secure!</p>
              <p>
                Super private - no human handles, sees or listens to your
                recordings! In addition, we take great measures to protect your
                privacy. For example, for transcribing your recordings - we pay
                Google's speech to text engines extra - just so they do not keep
                your audio for their own research purposes.
              </p>
            </div>
            <div className="sd-1" data-aos="flip-left" data-aos-duration="3000">
              <p className="h3">Health advantages</p>
              <p>
                Typing may result in different types of Computer Related
                Repetitive Strain Injuries (RSI). Voice typing is one of the
                main recommended ways to minimize these risks, as it enables you
                to sit back comfortably, freeing your arms, hands, shoulders and
                back altogether.
              </p>
            </div>
            <div className="sd-1" data-aos="flip-left" data-aos-duration="3500">
              <p className="h3">Saves you time</p>
              <p>
                Need to transcribe a recording? If it's an hour long,
                transcribing it yourself will take you about 6! hours of work.
                If you send it to a transcriber - you will get it back in days!
                Upload it to Speechnotes - it will take you less than a minute,
                and you will get the results in about 20 minutes to your email.
              </p>
            </div>
            <div className="sd-1" data-aos="flip-left" data-aos-duration="4000">
              <p className="h3">Saves you money</p>
              <p>
                Speechnotes dictation notepad is completely free - with ads - or
                a small fee to get it ad-free. Speechnotes transcription is only
                $0.1/minute, which is X10 times cheaper than a human
                transcriber! We offer the best deal on the market - whether it's
                the free dictation notepad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

