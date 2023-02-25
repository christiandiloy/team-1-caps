import React, { useState } from "react";
import './styles.css';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        padding: '1px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const leftArrowStyles = {
        position: 'absolute',
        top: '35%',
        transform: 'translate (0, -50%)',
        left: '32px',
        fontSize: '100px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
        fontWeight: 'bold',
    }
    const rightArrowStyles = {
        position: 'absolute',
        top: '35%',
        transform: 'translate (0, -50%)',
        right: '32px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '100px'
    }
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }
    const dotStyles = {
        padding: '700px 6px 0 6px',
        cursor: 'pointer',
        fontSize: '50px'
    }
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    // const activeFunction = () => {


    //     document.querySelector(".active")?.classList.remove("active");
    //     dots.classList.add("active");
    // }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>&#60;</div>
            <div style={rightArrowStyles} onClick={goToNext}>&#62;</div>
            <div style={slideStyles}>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div id="dots" key={slideIndex} style={dotStyles} 
                    onClick={() => {
                        goToSlide(slideIndex);
                        
                        // const activeDot = document.querySelector(".dots");
                        // document.querySelector(".active")?.classList.remove("active");
                        // activeDot.classList.add("active");

                        // const activeDots = document.querySelectorAll("dots");
                        // activeDots.forEach(dotsEl => {activeFunction})
                        

                    }}>&#8226;</div>
                ))}
            </div>
            </div>
        </div>
        )
}

export default ImageSlider;