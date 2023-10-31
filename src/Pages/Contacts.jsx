import React from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ContactHeader from './Components/ContactHeader';
import ContactText from './Components/ContactText';
import ContactForm from './Components/ContactForm';
import ContactMap from './Components/ContactMap';

function Contacts() {
    document.title = "Contacts";
    return (
      <div>
          <Navbar active={4} /> 
              <div className="fd-contact-page">
                   <ContactHeader />
                   <div className="wrapper">
                     <div className="content">
                        <ContactText/>
                        <ContactForm />
                      </div>
                   </div>
                   <ContactMap />
              </div>
          <Footer />
      </div>
    )
}

export default Contacts