import React, { useState, useEffect } from 'react'
import './index.scss'

const BackTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
            setIsVisible(scrollTop > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div
            className={`ashe-back-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                role="presentation"
                width={19}
                height={19}
            >
                <path
                    d="M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z"
                    fill="currentColor"
                    fillOpacity="0.9"
                ></path>
            </svg>
        </div>
    )
}

export default BackTop
