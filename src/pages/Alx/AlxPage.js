import React, { Component, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import Greeting from "../../containers/greeting/Greeting";
import { greeting, contactPageData } from "../../portfolio.js";
import "./Alx.css";
import Slides from "../../assests/Slides.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import cmuSerifRomanFont from "../../assests/fonts/cmunrm.ttf";
import "../contact/ContactComponent.css";
// the pdf worker is used to render the pdf in the browser
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.fontExtraPropertiesUrl = cmuSerifRomanFont;
const socialMediaLinks = contactPageData.socialMediaLinks;

window.addEventListener("orientationchange", () => {
  window.location.reload();
});

function PDFViewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }

  return (
    <div className="pdf">
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <br />
        </div>
      <Document
        onLoadSuccess={onDocumentLoadSuccess}
        file={Slides}
        font={cmuSerifRomanFont}
      >
          <Page
            pageNumber={pageNumber}
            width={
              window.innerWidth > 700
                ? window.innerWidth - 200
                : window.innerWidth - 20
            }
          />
      </Document>

        
        <button
          type="button"
          className="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          className="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        
      </div>
      
  );
}

class Alx extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">

              <div className="resume-btn-div">
                <Button
                  text="Go to Home Page to check the rest of the site (Only current page has milestone requirements) "
                  href="/home"
                  theme={theme}
                />
              </div>

              <h1 className="Bio-Head" style={{ color: theme.text }}>
                Bio of Omar Ahmed Elsayed (Please Scroll all the way down):
              </h1>

              <p className="Bio" style={{ color: theme.text }}>
                Omar Ahmed Elsayed is a skilled computer engineer and co-founder
                of Mokbel with a passion for machine learning and deep learning.
                He is currently pursuing a Bachelor of Science in Computer
                Engineering at the Arab Academy for Science, Technology and
                Maritime Transport, where he has achieved ninety credit hours.
                Omar is also a proud recipient of the Fundamentals of Deep
                Learning Certificate from the NVIDIA Deep Learning Institute and
                the Machine Learning Cross-Skilling Nanodegree Certificate from
                Udacity.
              </p>
              <p className="Bio" style={{ color: theme.text }}>
                Omar’s technical skills include proficiency in languages such as
                VHDL, C, C++, Python, JavaScript, SQL, C#, Golang, Dart,
                Markdown, and LaTeX. He is also experienced in using developer
                tools such as Git, SSH, Linux, Google Cloud Platform, VS Code,
                and Visual Studio. Omar has worked on several impressive
                projects, including experiments in deep learning and transfer
                learning using Python and TensorFlow: Keras. He has also
                developed a portfolio website using Node.js and JavaScript and
                hosted it on GitHub Pages.
              </p>
              <p className="Bio" style={{ color: theme.text }}>
                Omar’s goals and aspirations include continuing to expand his
                knowledge and skills in the field of machine learning and deep
                learning. He hopes to use his expertise to make a positive
                impact on the world through his work. Some of Omar’s most
                impressive achievements include volunteering with IEEE Aast
                Cairo Student Branch to help organize a worldwide programming
                competition and developing a Python teaching program for IEEE
                Women in Engineering (WIE) to teach Python to high school
                students. Omar also collaborated with a team to develop an
                intelligent agent for a maze problem using Deep Q-Networks
                algorithm during the Dell Hacktrick Hackathon.
              </p>
              <p className="Bio" style={{ color: theme.text }}>
                Overall, Omar Ahmed Elsayed is a talented and driven individual
                with a bright future ahead of him in the field of computer
                engineering and machine learning. His technical skills,
                impressive achievements, and dedication to his goals make him an
                asset to any team or project.
              </p>
              <p className="Bio" style={{ color: theme.text }}>
                In addition to his technical skills, Omar is also a strong
                communicator and team player. He is able to clearly articulate
                his ideas and work effectively with others to achieve common
                goals. Omar is also a creative thinker and is always looking for
                new ways to improve his skills and knowledge.
              </p>

              <div className="buttons-container">
                <div className="resume-btn-div">
                  <Button text="Elevator Pitch (Placeholder)" theme={theme} herf="*" />
                </div>
                <div className="resume-btn-div">
                  <Button
                    text="Slide Deck Link (Click Here)"
                    newTab={true}
                    href={Slides}
                    download="Omar-Ahmed-Month2-Project-Slides.pdf"
                    theme={theme}
                  />
                </div>
                <div className="resume-btn-div">
                  <Button
                    text="Video Presentation (Click Here)"
                    newTab={true}
                    href="https://youtu.be/o0ds4HM9L4g"
                    theme={theme}
                  />
                </div>
              </div>
              <PDFViewer />
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Alx;
