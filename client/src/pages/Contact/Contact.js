import React from "react";
import "./Contact.css";
import Swing from 'react-reveal/Swing';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ValidationError, useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xleqrkdj");
  if (state.succeeded) {
    return <>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Thanks for Contacting!</h1>
    </>;
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <Swing>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                      alt="Contact Us"
                      className="image"
                    />
                  </Swing>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Swing>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      {/* <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                      </h6> */}
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/kshitij-meshram-1b0205192" target="_blank" rel="noopener noreferrer">
                          <BsLinkedin color="blue" size={25} className="ms-2" />
                        </a>
                        <a href="https://github.com/kshitijmeshram30" target="_blank" rel="noopener noreferrer">
                          <BsGithub color="black" size={25} className="ms-2" />
                        </a>
                      </h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form onSubmit={handleSubmit} action="https://formspree.io/f/xleqrkdj" method="POST">
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          className="mb-3"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email Address"
                          className="mb-3"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your message"
                          className="mb-3"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit" disabled={state.submitting}>
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Swing>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default Contact;
