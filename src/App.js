import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faPhone, faEnvelope, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons'

import logo from './assets/images/logo.png'
import video1 from './assets/Videos/man_-_54251 (720p).mp4'

import reel1 from './assets/Videos/reel1.mp4'
import reel2 from './assets/Videos/reel2.mp4'
import reel3 from './assets/Videos/reel3.mp4'
import reel4 from './assets/Videos/reel4.mp4'

import handlogo from './assets/images/hand.png'
import image6 from './assets/images/arrow.png'
import image5 from './assets/images/discount.JPG'
import boyprofile from './assets/images/profile.jpg'
import girlprofile from './assets/images/girlprofile.png'
import image3 from './assets/images/jakob-owens-MctEgCk1Dm0-unsplash.jpg'
import image2 from './assets/images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg'
import image1 from './assets/images/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg'

import goa from './assets/images/goa.jpg'
import auli from './assets/images/auli.jpeg'
import kerela from './assets/images/kerela.jpg'
import shimla from './assets/images/shimla.jpg'
import kashmir from './assets/images/kashmir.jpg'
import manali from './assets/images/Manali_City.jpg'
import lonavala from './assets/images/Lonavalamh.jpg'
import rannofkutch from './assets/images/Great Rann Of Kutchjpg.jpg'

function App() {

    const [state, handleSubmit] = useForm("maygynld");

    const [popup, setPopup] = useState(false)
    const [model, setModel] = useState(false)
    const [messagecontainer, setMessagecontainer] = useState(false)

    const [contactname, setContactname] = useState('')
    const [contactnumber, setContactnumber] = useState('')
    const [contactemail, setContactemail] = useState('')
    const [contactmessage, setContactmessage] = useState('')

    const [modelname, setModelname] = useState('')
    const [modelnumber, setModelnumber] = useState('')
    const [modelemail, setModelemail] = useState('')
    const [modelpersons, setModelpersons] = useState('')
    const [modeldays, setModeldays] = useState('')
    const [modeldestination, setModeldestination] = useState('')

    const openPopup = () => {
        const timer = setTimeout(() => setPopup(true), 8000);
        return () => clearInterval(timer);
    }

    const openmessagecontainer = () => {
        const timer = setTimeout(() => setMessagecontainer(true), 3000);
        return () => clearInterval(timer);
    }

    const closePopup = () => {
        setPopup(false)
    }

    const openModel = () => {
        setModel(true)
        setPopup(false)
    }

    const closeModel = () => {
        setModel(false)
        setPopup(false)
    }

    const closemessagecontainer = () => {
        setMessagecontainer(false)
    }

    useEffect(() => {
        openPopup();
        openmessagecontainer()
    }, [])

    useEffect(() => {
        if (state.succeeded) {
            setContactname('')
            setContactemail('')
            setContactnumber('')
            setContactmessage('')
            
            setModelemail('')
            setModelname('')
            setModeldestination('')
            setModeldays('')
            setModelnumber('')
            setModelpersons('')
        }
    }, [state.succeeded])

    return (
        <>
            <div className="home">
                {messagecontainer && <div className='home__messagecontainer typo__heading--1'>
                    <button onClick={closemessagecontainer} className='home__messagecontainer__cross'><FontAwesomeIcon icon={faXmark} /></button>
                    <h1><img src={handlogo} /> Hi There!</h1>
                    <p className='typo__color--green'>We are here to help!</p>
                    <button onClick={openModel} className='home__messagecontainer__query'>Send Your Plan</button>
                </div>}
                {popup && <div className='home__popupcontainer'>
                    <div>
                        <img src={image6} />
                        <button onClick={closePopup} ><FontAwesomeIcon icon={faXmark} /></button>
                        <h1>Do you want to go with us?</h1>
                        <p onClick={openModel} >Let's Go</p>
                    </div>
                </div>}
                {model && <div className='home__modelcontainer'>
                    <div>
                        <h1>Where do you want to go?</h1>
                        <button onClick={closeModel}><FontAwesomeIcon icon={faXmark} /></button>
                        <form onSubmit={handleSubmit}>
                            <input value={modelname} onChange={(e) => setModelname(e.target.value)} type='text' name='name' placeholder='Your Name'/>
                            <input value={modelemail} onChange={(e) => setModelemail(e.target.value)} type='email' name='email' placeholder='Your Email'/>
                            <input value={modelnumber} onChange={(e) => setModelnumber(e.target.value)} type='number' name='number' placeholder='Phone Number'/>
                            <input value={modeldays} onChange={(e) => setModeldays(e.target.value)} type='number' name='days' placeholder='Tour Duration(in Days)'/>
                            <input value={modelpersons} onChange={(e) => setModelpersons(e.target.value)} type='number' name='persons' placeholder='No. Of Persons'/>
                            <input value={modeldestination} onChange={(e) => setModeldestination(e.target.value)} type='text' name='destination' placeholder='Destination' />
                            <button type='submit' disabled={state.submitting}>Submit</button>
                            {state.succeeded && <p>Thanks For Contacting<br/>Our Representative will call you soon!</p>}
                        </form>
                    </div>
                </div>}
                <div className='home__videocontainer ' id='home'>
                    <video className='home__videocontainer__video' autoPlay loop muted>
                        <source src={video1} type='video/mp4' />
                    </video>
                    <div className='home__videocontainer__content'>
                        <navbar>
                            <ul>
                                <li className='typo__heading--1 u-m-h-m'><a href='#home'>Home</a></li>
                                <li className='typo__heading--1 u-m-h-m'><a href='#about'>About</a></li>
                                <li className='typo__heading--1 u-m-h-m'><a href='#tour'>Tours</a></li>
                            </ul>
                            <img src={logo} />
                            <ul>
                                <li className='typo__heading--1 u-m-h-m'><a href='#review'>Reviews</a></li>
                                <li className='typo__heading--1 u-m-h-m'><a href='#contact'>Contact</a></li>
                            </ul>
                        </navbar>
                        <div>
                            <h1 className='typo__display--4 u-m-b-s typo__color--green'>Bored with your daily life?</h1>
                            <p className='typo__heading--5'> "Unleash your inner adventurer and explore the hidden gems of the world with our trusted travel partners."</p>
                        </div>
                    </div>
                </div>
                <div className='home__aboutcontainer home__aboutcontainer--1' id='about'>
                    <div className='home__aboutcontainer__imgcontainer'>
                        <img src={image1} />
                    </div>
                    <div className='home__aboutcontainer__content home__aboutcontainer__content--1 u-p-h-l'>
                        <h1 className='typo__display--2'>About</h1>
                        <p className='typo__heading--3 u-m-v-m'>Welcome to KnP Travels! We are passionate travel enthusiasts dedicated to creating unforgettable journeys for our valued clients.</p>
                        <p className='typo__heading--3 u-m-v-m'>With years of experience in the travel industry, our team of expert travel advisors possesses an in-depth knowledge of various destinations around the globe. We pride ourselves on being well-traveled and continuously exploring new places to ensure that we offer you the latest insights and recommendations.</p>
                        <p className='typo__heading--3 u-m-v-m'>We believe in building lasting relationships with our clients, and our commitment to exceptional customer service is unwavering. Our friendly and knowledgeable team is always available to assist you at every step of the way, from the initial planning phase to post-trip support.</p>
                    </div>
                </div>
                <div className='home__aboutcontainer home__aboutcontainer--reverse'>
                    <div className='home__aboutcontainer__content u-p-h-l'>
                        <h1 className='typo__display--2'>Hotel Rooms</h1>
                        <p className='typo__heading--3 u-m-v-m'>Experience comfort and luxury at our handpicked selection of hotels. Whether you're looking for a cozy boutique hotel, a lavish five-star resort, or a budget-friendly accommodation, we offer a wide range of options to suit every traveler's needs. Enjoy well-appointed rooms, modern amenities, and exceptional service, ensuring a restful and enjoyable stay during your travels.</p>
                        <h1 className='typo__display--2 u-m-t-m'>Traveling Vehicals</h1>
                        <p className='typo__heading--3 u-m-v-m'>Discover the freedom of exploring your destination at your own pace with our travel vehicle services. We provide a fleet of well-maintained cars, vans, and SUVs to cater to your transportation needs. Whether you're embarking on a road trip, navigating through city streets, or venturing into remote areas, our reliable vehicles will take you wherever you desire, ensuring a convenient and hassle-free journey.</p>
                        <a className='typo__heading--3 u-m-v-m' href="tel:+91 9926201520"><FontAwesomeIcon className='u-m-r-s' icon={faPhone} /> Book Now</a>
                    </div>
                    <div className='home__aboutcontainer__imgcontainer'>
                        <img src={image2} />
                    </div>
                </div>
                <div className='home__aboutcontainer home__aboutcontainer--1'>
                    <div className='home__aboutcontainer__imgcontainer'>
                        <img src={image3} />
                    </div>
                    <div className='home__aboutcontainer__content home__aboutcontainer__content--1 u-p-h-l'>
                        <h1 className='typo__display--2'>Homestays / Resorts</h1>
                        <p className='typo__heading--3 u-m-v-m'>Immerse yourself in local culture and hospitality by choosing one of our carefully curated homestays. Experience the warmth and authenticity of staying with local hosts who open their homes to travelers. Indulge in luxury and relaxation at our stunning resort properties. Nestled in breathtaking locations, our resorts provide a serene retreat from the everyday hustle and bustle. </p>
                        <h1 className='typo__display--2 u-m-t-m'>Travel Packages</h1>
                        <p className='typo__heading--3 u-m-v-m'>Maximize your travel experience with our thoughtfully crafted vacation packages. We combine hotel accommodations, travel vehicles, and curated itineraries to create comprehensive packages tailored to your preferences. Whether you're seeking an adventurous outdoor expedition, a romantic honeymoon, or a family-friendly holiday, our vacation packages offer convenience, value, and unforgettable memories.</p>
                        <a className='typo__heading--3 u-m-v-m' href="tel:+91 9926201520"><FontAwesomeIcon className='u-m-r-s' icon={faPhone} /> Book Now</a>
                    </div>
                </div>
                <div className='home__reviewsection' id='review'>
                    <h1 className='typo__display--2'>Reviews</h1>
                    <div className='home__reviewsection__review'>
                        <div className='home__reviewsection__review--1'>
                            <h4>Experienced Staff</h4>
                            <p>The travel agency's staff was exceptionally friendly, making us feel welcome and well-cared for. Their commitment to hygiene was evident, ensuring a safe and enjoyable trip. They went above and beyond to accommodate our requests.</p>
                            <div>
                                <img src={boyprofile} />
                                <div>
                                    <h6>Ritesh Dhote</h6>
                                    <h6>Sikkim</h6>
                                </div>
                            </div>
                        </div>
                        <div className='home__reviewsection__review--1'>
                            <h4>Hygiene Standards</h4>
                            <p>We were impressed by the travel agency's impeccable hygiene standards, ensuring a safe and worry-free journey. The friendly nature of their staff added a personal touch to our trip, making us feel welcome and well-cared for throughout.</p>
                            <div>
                                <img src={girlprofile} />
                                <div>
                                    <h6>Radhika Agrawal</h6>
                                    <h6>Jammu & Kashmir</h6>
                                </div>
                            </div>
                        </div>
                        <div className='home__reviewsection__review--1'>
                            <h4>Customizable Packages</h4>
                            <p>The travel agency's customizable tour packages provided us with the perfect balance of structure and freedom. We appreciated having a well-planned itinerary that allowed us to explore at our own pace. The option to customize certain aspects of the tour made it feel tailored to our preferences, resulting in an unforgettable adventure.</p>
                            <div>
                                <img src={boyprofile} />
                                <div>
                                    <h6>Anuj Gupta</h6>
                                    <h6>Uttrakhand</h6>
                                </div>
                            </div>
                        </div>
                        <div className='home__reviewsection__review--1'>
                            <h4>Friendly Nature of Staff</h4>
                            <p>Hygiene and friendly service were the hallmarks of our experience with the travel agency. Their attention to cleanliness and sanitization, combined with the warm and welcoming nature of their staff, created a memorable and comfortable journey.</p>
                            <div>
                                <img src={boyprofile} />
                                <div>
                                    <h6>Ashish Chawla</h6>
                                    <h6>Rajasthan</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__tourcontainer' id='tour'>
                    <h1 className='typo__display--2 u-p-v-m2'>Tour Packages <span className='typo__heading--1' >(customizable)</span></h1>
                    <div className='home__tourcontainer__tours'>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={auli} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Auli, Uttrakhand</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 14,999<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={kerela} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Kochi, Kerela</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 19,000<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={goa} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Goa, Goa</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 22,599<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={lonavala} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Lonavala, Maharastra</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 13,999<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={rannofkutch} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Rann Of Kutch, Gujrat</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 24,200<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={kashmir} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Kashmir, J&K</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 26,500<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={manali} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Manali, Himachal Pradesh</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 11,900<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                        <div className='home__tourcontainer__tours__tour'>
                            <img src={shimla} />
                            <div>
                                <div className='home__tourcontainer__tours__tour__content'>
                                    <h1 className='typo__heading--1 u-m-b-xs'>Shimla, Himachal Pradesh</h1>
                                    <p className='typo__body--6 typo__bold--1'>No. Of Days : 4N/5D</p>
                                </div>
                                <div className='home__tourcontainer__tours__tour__icon'>
                                    <span className='typo__heading--3'>Rs. 9,999<br/>(per person)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__discountcontainer u-m-t-b' >
                    <h1 className='typo__display--2'>Discount</h1>
                    <img className='u-m-t-m' src={image5}/>
                </div>
                <div className='home__instacontainer u-m-b-m2'>
                    <h1 className='typo__display--2 u-p-b-m2'>Instagram</h1>
                    <div className='home__instacontainer__collage' >
                        <div className='home__instacontainer__collage__video'>
                            <video controls loop>
                                <source src={reel1} type='video/mp4' />
                            </video>
                            <span className='typo__heading--2'><FontAwesomeIcon icon={faInstagram} /></span>
                            <p className='typo__heading--2 u-p-h-m typo__color--green typo__bold--1'>Auli, Uttrakhand <br/> <span className='typo__lighter--1 typo__color--white typo__body--2 u-m-t-m'>Auli is a Himalayan ski resort and hill station in the north Indian state of Uttarakhand. It’s surrounded by coniferous and oak forests, plus the Nanda Devi and Nar Parvat mountains. A long cable car links Auli to the town of Joshimath. North of Auli are the colorful Badrinath Temple, a Hindu pilgrimage site, and the Valley of Flowers National Park.</span><br/><span className='home__instacontainer__collage__video__watch'>Watch Now</span></p>
                        </div>
                        <div className='home__instacontainer__collage__video'>
                            <video controls loop>
                                <source src={reel2} type='video/mp4' />
                            </video>
                            <span className='typo__heading--2'><FontAwesomeIcon icon={faInstagram} /></span>
                            <p className='typo__heading--2 u-p-h-m typo__color--green typo__bold--1'>Gangtok, J&K <br/> <span className='typo__lighter--1 typo__color--white typo__body--2 u-m-t-m'>Gangtok is a city, municipality, the capital and the most populous city of the Indian state of Sikkim and also the headquarters of Gangtok District.</span><br/><span className='home__instacontainer__collage__video__watch'>Watch Now</span></p>
                        </div>
                        <div className='home__instacontainer__collage__video'>
                            <video controls loop>
                                <source src={reel3} type='video/mp4' />
                            </video>
                            <span className='typo__heading--2'><FontAwesomeIcon icon={faInstagram} /></span>
                            <p className='typo__heading--2 u-p-h-m typo__color--green typo__bold--1'>Manali, Himachal Pradesh <br/> <span className='typo__lighter--1 typo__color--white typo__body--2 u-m-t-m'>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.</span><br/><span className='home__instacontainer__collage__video__watch'>Watch Now</span></p>
                        </div>
                        <div className='home__instacontainer__collage__video'>
                            <video controls loop>
                                <source src={reel4} type='video/mp4' />
                            </video>
                            <span className='typo__heading--2'><FontAwesomeIcon icon={faInstagram} /></span>
                            <p className='typo__heading--2 u-p-h-m typo__color--green typo__bold--1'>Auli, Uttrakhand <br/> <span className='typo__lighter--1 typo__color--white typo__body--2 u-m-t-m'>Auli is a Himalayan ski resort and hill station in the north Indian state of Uttarakhand. It’s surrounded by coniferous and oak forests, plus the Nanda Devi and Nar Parvat mountains. A long cable car links Auli to the town of Joshimath. North of Auli are the colorful Badrinath Temple, a Hindu pilgrimage site, and the Valley of Flowers National Park.</span><br/><span className='home__instacontainer__collage__video__watch'>Watch Now</span></p>
                        </div>
                    </div>
                    <a className='u-m-t-m2 typo__heading--1' target='__blank' href='https://www.instagram.com/knp.travels/' >Follow Us @knp.travels</a>
                </div>
                <div className='home__footercontainer u-p-b-b u-p-t-xl' id='contact'>
                    <div className='home__footercontainer__formcontainer'>
                        <div className='home__footercontainer__formcontainer__content'>
                            <h1 className='typo__heading--2'>Contact Us Today</h1>
                            <p className='typo__body--6 u-m-t-s'>Feel free to contact us for any inqueries, if you want to plan a trip with friends and family or just say hello!</p>
                        </div>
                        <form onSubmit={handleSubmit} className='home__footercontainer__formcontainer__form'>
                            <input value={contactname} onChange={(e) => setContactname(e.target.value)} type='text' name='name' required placeholder='Your Name'/>
                            <input value={contactemail} onChange={(e) => setContactemail(e.target.value)} type='email' name='email' required placeholder='Email Address'/>
                            <input value={contactnumber} onChange={(e) => setContactnumber(e.target.value)} type='number' name='number' required placeholder='Phone Number'/>
                            <input value={contactmessage} onChange={(e) => setContactmessage(e.target.value)} type='text' name='message' required placeholder='Message' />
                            <button type='submit' disabled={state.submitting}>Send Now</button>
                            { state.succeeded&&
                                <p>Thanks for Contacting!</p>
                            }
                        </form>
                    </div>
                    <div className='home__footercontainer__content'>
                        <div className='home__footercontainer__content__address'>
                            <h1 className='typo__display--2 u-m-b-m'>KnP <span>Travels</span></h1>
                            <p className='typo__heading--3'>10, Unity Society</p>
                            <p className='typo__heading--3'>Surya nagar Thana 462003</p>
                            <p className='typo__heading--3'>Bhopal, Madhya Pradesh India</p>
                            <p className='typo__heading--3 u-m-v-m'><span><FontAwesomeIcon className='u-m-r-xs' icon={faPhone} /></span>+91 9926201520, 8269866601</p>
                            <p className='typo__heading--3'><a href="https://www.instagram.com/knp.travels/"><FontAwesomeIcon className='u-m-r-m' icon={faInstagram} /></a><a href="mailTo:info@knptravels.com"><FontAwesomeIcon className='u-m-r-xs' icon={faEnvelope} /></a></p>
                        </div>
                        <div className='home__footercontainer__content__links'>
                            <h2 className='typo__display--3 u-m-b-m'>Useful Links</h2>
                            <ul>
                                <li className='typo__heading--3 u-m-b-s'><span className='u-m-r-s'><FontAwesomeIcon icon={faChevronRight} /></span><a href='#home'>Home</a></li>
                                <li className='typo__heading--3 u-m-b-s'><span className='u-m-r-s'><FontAwesomeIcon icon={faChevronRight} /></span><a href='#about'>About</a></li>
                                <li className='typo__heading--3 u-m-b-s'><span className='u-m-r-s'><FontAwesomeIcon icon={faChevronRight} /></span><a href='#review'>Reviews</a></li>
                                <li className='typo__heading--3 u-m-b-s'><span className='u-m-r-s'><FontAwesomeIcon icon={faChevronRight} /></span><a href='#tour'>Tours</a></li>
                                <li className='typo__heading--3 u-m-b-s'><span className='u-m-r-s'><FontAwesomeIcon icon={faChevronRight} /></span><a href='#contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='home__footercontainer__image'>
                        <img src={logo} />
                    </div>
                </div>
                <div className='home__copyright u-p-v-m'>
                        <p className='typo__heading--3 u-p-t-s'>© Copyright KnP<span>Travels</span>.  All Rights Reserved</p>
                        <p className='typo__heading--3 u-p-v-s'>Designed By <a target='_blank' href='https://pranamjain.in'>Pranam</a>.</p>
                </div>
            </div>
        </>
    );
}

export default App;