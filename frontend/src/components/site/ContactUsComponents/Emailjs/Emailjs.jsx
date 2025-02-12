import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Emailjs.css'

const Emailjs = () => {

    const form = useRef();
    const [errors, setErrors] = useState({})

    const requiredField = (name, value) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() === '' ? 'This field is required!' : ''
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault()

        const formData = new FormData(form.current)

        let newErrors = {}
        let hasError = false

        formData.forEach((value, key) => {
            if (value.trim() === '') {
                newErrors[key] = 'This field is required!'
                hasError = true
            }
        })

        const email = formData.get('userEmail')
        const confirmEmail = formData.get('confirmUserEmail')

        if (email !== confirmEmail) {
            newErrors.confirmUserEmail = 'Emails do not match!'
            hasError = true
        }

        if (!formData.get('enquiry')) {
            newErrors.enquiry = 'This field is required!'
            hasError = true
        }

        if (hasError) {
            setErrors(newErrors)
            return
        }

        emailjs
            .sendForm('service_poljskb', 'template_8o1w1mu', form.current, {
                publicKey: 'c2k611t-6IPYN2Ef6',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                    form.current.reset()
                    form.current.enquiry.selectedIndex = 0
                },
                (error) => {
                    console.log('FAILED...', error.text)
                },
            )
    }

    return (
        <div className="emailjs">
            <div className="custom-container emailjs__cont">
                <div className="row emailjs__row">
                    <div className="col-4 emailjs__left"></div>
                    <div className="col-8 emailjs__right">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="field">
                                <label>Name *</label>
                                <input placeholder='Your name' type="text" name="userName" onBlur={(e) => { requiredField(e.target.name, e.target.value) }} />
                                {errors.userName && <p className='alert'>{errors.userName}</p>}
                            </div>
                            <div className="field">
                                <label>Your email *</label>
                                <input placeholder='Your email adress' type="email" name="userEmail" onBlur={(e) => { requiredField(e.target.name, e.target.value) }} />
                                {errors.userEmail && <p className='alert'>{errors.userEmail}</p>}
                            </div>
                            <div className="field">
                                <label>Confirm your email *</label>
                                <input placeholder='Your email adress' type="email" name="confirmUserEmail" onBlur={(e) => { requiredField(e.target.name, e.target.value) }} />
                                {errors.confirmUserEmail && <p className='alert'>{errors.confirmUserEmail}</p>}
                            </div>
                            <div className="field">
                                <label>What is your enquiry about? *</label>
                                <select class="form-select" id="inputGroupSelect02" name='enquiry'
                                    onBlur={(e) => { requiredField(e.target.name, e.target.value) }}>
                                    <option value='' disabled selected >- Select -</option>
                                    <option value="Tickets">Tickets</option>
                                    <option value="Lost property">Lost property</option>
                                    <option value="Press">Press</option>
                                    <option value="Filming">Filming</option>
                                    <option value="Image licensing">Image licensing</option>
                                    <option value="Archives">Archives</option>
                                    <option value="Shop customer services">Shop customer services</option>
                                    <option value="Website support">Website support</option>
                                    <option value="Museum feedback">Museum feedback</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.enquiry && <p className='alert'>{errors.enquiry}</p>}
                            </div>
                            <div className="field">
                                <label>Enquiry subject *</label>
                                <input placeholder='A short description of your enquiry' type="text" name="subject" onBlur={(e) => { requiredField(e.target.name, e.target.value) }} />
                                {errors.subject && <p className='alert'>{errors.subject}</p>}
                            </div>
                            <div className="field">
                                <label>Your message *</label>
                                <textarea placeholder='Please provide a complete description of your enquiry' name="message" onBlur={(e) => { requiredField(e.target.name, e.target.value) }} />
                                {errors.message && <p className='alert'>{errors.message}</p>}
                            </div>
                            <h2>Privacy notice</h2>
                            <p className='privacy__notice'>
                                We will process your personal data because we need to in order to provide you with the information you have requested from us. Your personal data will only be used by us to communicate with you about your request for information and we will only share it for the purpose set out above (for example, with the relevant Museum department involved in provision of information). We will keep your personal data just for as long as we need it to process your request and we will delete it following the completion of the response.
                            </p>
                            <button type='submit' value='Send'>
                                <span>Submit</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emailjs
