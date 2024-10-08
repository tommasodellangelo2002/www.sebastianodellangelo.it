import React, { useRef } from 'react';

import Navbar from "../components/Navbar";

export default function Flow() {

    const videoRef = useRef(null);

    const scrollToText = () => {
        const targetElement = document.querySelector('.down-arrow');
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 500;
            const stepTime = 15;
            const scrollStep = distance / (duration / stepTime);
            const scrollInterval = setInterval(() => {
                if (window.scrollY < targetPosition && distance > 0) {
                    window.scrollBy(0, scrollStep);
                } else if (window.scrollY > targetPosition && distance < 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, stepTime);
        }
    }

    return (
        <>
            <Navbar/>
            <div className="presentation-flow">
                <img src={`${process.env.PUBLIC_URL}/assets/flow/flow-presentation.png`} alt="Flow"/>
            </div>
            <div className="center-content">
                <img
                    onClick={scrollToText}
                    className="down-arrow"
                    src={`${process.env.PUBLIC_URL}/assets/flow/down-arrow.png`}
                    alt="Down arrow"
                />
            </div>
            <div className="text-flow">
                <p>Flow is a monomaterial design lamp made of polycarbonate, composed of a cylinder with over one
                    hundred handcrafted modules. The lightness and transparency of polycarbonate create a fascinating
                    interplay of light and shadow, giving Flow a refined and contemporary look that makes it a versatile
                    and functional piece of furniture.</p>
                <p>June, 2023</p>
            </div>
            <img className={"flow-carousel"} src={`${process.env.PUBLIC_URL}/assets/flow/flow-carousel-1.png`}
                 alt="Flow carousel 1"/>
            <div style={{backgroundColor: "black"}} className="spacer"></div>
            <img className={"flow-carousel"} src={`${process.env.PUBLIC_URL}/assets/flow/flow-carousel-2.png`}
                 alt="Flow carousel 2"/>
            <div style={{backgroundColor: "black"}} className="spacer"></div>
            <img className={"flow-carousel"} src={`${process.env.PUBLIC_URL}/assets/flow/flow-carousel-3.png`}
                 alt="Flow carousel 3"/>
            <div style={{backgroundColor: "black"}} className="spacer"></div>
            <img className={"flow-carousel"} src={`${process.env.PUBLIC_URL}/assets/flow/flow-carousel-4.png`}
                 alt="Flow carousel 4"/>
            <div style={{backgroundColor: "black"}} className="spacer"></div>
            <video
                ref={videoRef}
                controls
                src={`${process.env.PUBLIC_URL}/assets/flow/flow-video.mp4`}
            />

        </>
    );

}