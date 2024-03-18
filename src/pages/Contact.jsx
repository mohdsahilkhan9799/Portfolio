import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import contact_me_img from '../Image/contact_me_img.png';
import Spinner from './components/Spinner';
import { BiLogInCircle } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = (props) => {
  const [state, handleSubmit] = useForm("mrgnklkk");

  const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section className="contact_page_section" id="contact_page">
      <div className="contact_section">
        <div className="contact_container">
          <div className="form_container_left">
            <div className="user_form">
              <ToastContainer />
              <form className="user_message_form" onSubmit={handleSubmit}>
                <h3>
                  Get in <span> Touch </span>
                </h3>
                <p>We're open for any suggestions</p>
                <div className="name_val">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" name="email" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="user_msg">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" cols="30" rows="6"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="user_send_msg_button">
                  <button type="submit" disabled={state.submitting}>
                    {state.submitting ? (
                      <Spinner id="your_spinner_d" style={state.submitting ? 'flex' : 'none'} />
                    ) : (
                      <BiLogInCircle />
                    )}
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img src={contact_me_img} className="form_container_right" alt="contact images" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
