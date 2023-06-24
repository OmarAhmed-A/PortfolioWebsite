import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

import Resume from '../../assests/Resume.pdf';

const ContactData = contactPageData.contactSection;
const socialMediaLinks = contactPageData.socialMediaLinks;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="social-media-div">
                <SocialMedia theme={theme} links={socialMediaLinks}/>
              </div>
              <div className="pdf-iframe">
                <iframe
                  src={Resume}
                  allow="autoplay"
                  title="My resume"
                ></iframe>
              </div>
              
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
