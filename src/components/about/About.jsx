import React from 'react'
import './About.css'

const options = {
    rootMargin: '0px 0px 50px 0px',
    threshold: [0.25, 0.5, 0.75, 1]
};
const Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Intersectiong");
            if (entry.target.classList.contains("left")) {
                entry.target.classList.add("lazy-load-l");
            } else {
                entry.target.classList.add("lazy-load-r");
            }
        } 
    })
}, options);


const Lazy = document.querySelectorAll('.lazy');

Lazy.forEach(item => {
    Observer.observe(item);
})



const About = () => {
    return (
        <section id='About'>
            <div>
                <h2 className='lazy page-intro left'>About me</h2>
            </div>
            <div>
                <p className='lazy  page-text right'>
                    Rayyan Panja , a Web developer with a passion for creating clean, responsive websites. Skilled in HTML, CSS, JavaScript, PHP , SQL , JQuery & Laravel . Detail-oriented problem-solver with a dedication to delivering exceptional user experiences. Excited to contribute my skills to your team
                </p>
                <p className="lazy page-text right">
                    And Yes i Know How to Use InterSectionObserver
                </p>
            </div>
        </section>
    )
}

export default About
