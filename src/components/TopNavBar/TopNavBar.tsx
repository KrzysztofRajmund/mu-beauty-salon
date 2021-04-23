import React from 'react';


const TopNavBar: React.FC = () => {

    const handleUpClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section>
            TopNavBar
        </section>
    )
}

export default TopNavBar