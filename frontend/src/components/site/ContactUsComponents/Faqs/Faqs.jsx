import React from 'react'
import './Faqs.css'

const Faqs = () => {
    return (
        <div className="faqs">
            <div className="custom-container faqs__intro">
                <div className="row faqs__intro__row">
                    <div className="col-12 faqs__intro__col">
                        <p>
                            Take a look at our FAQs for answers to our most common queries, or get in touch using the contact form below.
                        </p>
                    </div>
                </div>
            </div>
            <div className="custom-container faqs__title">
                <div className="row faqs__title__row">
                    <div className="col-12 faqs__title__col">
                        <h2>FAQs</h2>
                    </div>
                </div>
            </div>
            <div className="custom-container faqs__cont">
                <div className="row faqs__row">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    <span>Is admission free?</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <p>
                                        Yes, entry to the Museum to view the permanent collection is free. All visitors (except Members) are advised to book a timed slot in advance.
                                    </p>
                                    <p>
                                        Self-led groups of 10 or more people will need to book a group ticket. Please see the Group visits page for more details.
                                    </p>
                                    <p>
                                        We also have special exhibitions and events, both free and paid, which require booking in advance.
                                    </p>
                                    <p>
                                        In line with current government and NHS guidance, face masks are not mandatory but visitors are welcome to wear them if they wish. The Museum maintains a robust cleaning schedule and hand sanitiser stations are available across the site.
                                    </p>
                                    <p>
                                        For the latest updates about booking tickets and what's happening at the Museum, sign up to our newsletter.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    <span>How do I book tickets?</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <p>
                                        All tickets for the permanent collection can be booked online in advance. Walk-up visits are available each day for those who arrive at the Museum without advance bookings. But this does depend on capacity, as walk-up entry cannot be guaranteed. Please speak to staff on your arrival to enquire about availability. Find out more on our Visit page.
                                    </p>
                                    <p>
                                        You can book tickets for up to nine people.
                                    </p>
                                    <p>
                                        Self-led groups of 10 or more people will need to book a group ticket. Please see the Group visits page for more details.
                                    </p>
                                    <p>
                                        Please see our Exhibitions and events page to see what's on and to book tickets.
                                    </p>
                                    <p>
                                        For access assistance with your booking, please see our Accessibility page.
                                    </p>
                                    <p>
                                        For the latest updates about booking tickets and what's happening at the Museum, sign up to our newsletter.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    <span>When is the museum open?</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <p>
                                        The Museum is open daily, 10.00-17.00 (last entry at 16.45). On Fridays the Museum is open until 20.30 (last entry at 20.15). Find out about upcoming late opening on Fridays.
                                    </p>
                                    <p>
                                        Please note that galleries start closing up to 10 minutes before the stated closing time. See full opening hours.
                                    </p>
                                    <p>
                                        Special exhibitions will be open Fridays until 20.30 (last entry at 19.30). Silk Roads will have additional late night hours available until 20.30 on Saturday 8 and 15 February.
                                    </p>
                                    <p>
                                        The Museum is closed on 24, 25 and 26 December.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
