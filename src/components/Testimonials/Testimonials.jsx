import React from 'react'
import  TestimonialsData from './TestimonialsData'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png';
import back_btn from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {

    const sliderVar = React.useRef();
    let tx = 0;

    const slideBackward = () => {
        if(tx < 0)
        {
            tx -= -25;
        }
        sliderVar.current.style.transform = `translateX(${tx}%)`;
    }

    const slideForward = () => {
        if(tx > -50)
        {
            tx -= 25;
        }
        sliderVar.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testimonials">
            <img src={back_btn} alt='backBtn' className='back-btn' onClick={slideBackward}/>
            <img src={next_btn} alt='nextBtn' className='next-btn' onClick={slideForward}/>
            <div className="slider">
                <ul ref={sliderVar}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt=''/>
                                <div>
                                    <h3>{TestimonialsData.name +1}</h3>
                                    <span>{TestimonialsData.address}</span>
                                </div>
                            </div>
                            <p>
                                {TestimonialsData.tells}
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt=''/>
                                <div>
                                    <h3>{TestimonialsData.name +2}</h3>
                                    <span>{TestimonialsData.address}</span>
                                </div>
                            </div>
                            <p>
                                {TestimonialsData.tells}
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt=''/>
                                <div>
                                    <h3>{TestimonialsData.name +3}</h3>
                                    <span>{TestimonialsData.address}</span>
                                </div>
                            </div>
                            <p>
                                {TestimonialsData.tells}
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt=''/>
                                <div>
                                    <h3>{TestimonialsData.name +4}</h3>
                                    <span>{TestimonialsData.address}</span>
                                </div>
                            </div>
                            <p>
                                {TestimonialsData.tells}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials