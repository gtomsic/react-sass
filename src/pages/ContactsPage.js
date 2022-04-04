import * as React from 'react';
import contactsImg from '../assets/images/contacts.jpg';

const ContactsPage = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <div className="container contacts">
      <div className="contacts-twoside">
        <div className="contacts-twoside_1">
          <img src={contactsImg} alt="Contacts" />
        </div>
        <div className="contacts-twoside_2">
          <form onSubmit={formHandler} className="form">
            <div className="form-input">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="text" placeholder="Your Email" />
            </div>
            <div className="form-input">
              <label htmlFor="option">Select Option</label>
              <select name="option" id="option">
                <option value="job-offer">Job Offer</option>
                <option value="inquiries">Inquiries</option>
                <option value="testing">Testing</option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="textarea">Message</label>
              <textarea
                id="story"
                name="story"
                rows="5"
                cols="33"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="form-input">
              <label htmlFor="salary">Best Salary Offer</label>
              <input id="salary" type="text" placeholder="0.00" />
            </div>
            <div className="form-input">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
