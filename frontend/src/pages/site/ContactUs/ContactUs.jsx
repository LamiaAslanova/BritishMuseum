import React from 'react'
import { Helmet } from 'react-helmet';
import Emailjs from '../../../components/site/ContactUsComponents/Emailjs/Emailjs';
import ContactHero from '../../../components/site/ContactUsComponents/ContactHero/ContactHero';
import Faqs from '../../../components/site/ContactUsComponents/Faqs/Faqs';

const ContactUs = () => {

    return (
        <main>
            <Helmet>
                <title>Contact us | British Museum</title>
            </Helmet>
            <ContactHero />
            <Faqs />
            <Emailjs />
        </main>
    )
}

export default ContactUs