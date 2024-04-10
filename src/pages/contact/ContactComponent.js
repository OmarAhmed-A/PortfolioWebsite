import React, { Component, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";


import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import CM6 from "../../assests/fonts/CM6.woff";

// the pdf worker is used to render the pdf in the browser
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.fontExtraPropertiesUrl = CM6;

const socialMediaLinks = contactPageData.socialMediaLinks;

// const Resume = "https://cdn.jsdelivr.net/gh/OmarAhmed-A/Resume/Current-Full/Omar-Ahmed-Elsayed-Resume.pdf";
const Resume = "https://raw.githubusercontent.com/OmarAhmed-A/Resume/master/Current-Full/Omar-Ahmed-Elsayed-Resume.pdf";

window.addEventListener("orientationchange", () => {
  window.location.reload();
});

function PDFViewer() {
  return (
    <div className="pdf">
      <Document file={Resume} /*font={CM6}*/>
        <Page
          pageNumber={1}
          // renderTextLayer={true}
          renderMode="svg"
          width={
            window.innerWidth > 700
              ? window.innerWidth - 200
              : window.innerWidth - 20
          }
        />
      </Document>
    </div>
  );
}

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className={["social-media-div", "centerit"]}>
                <SocialMedia theme={theme} links={socialMediaLinks} />
              </div>

              <div className="resume-btn-div">
                <Button
                  text="Download My Resume"
                  newTab={true}
                  href={Resume}
                  download="Omar-Ahmed-Elsayed-Resume.pdf"
                  theme={theme}
                />
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

export default Contact;
