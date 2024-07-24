import React, { useEffect, useRef, useState } from 'react'
import styles from './Recommendations.module.css'

const Recommendations = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recommendations') // Adjust the path if necessary
            .then(response => response.json())
            .then(data => setRecommendations(data)) // Adjust based on the JSON structure
            .catch(error => console.error('Error fetching recommendations:', error));
    }, []);

    const handleSlideTo = (index) => {
        const carouselElement = carouselRef.current;
        if (carouselElement) {
            const bsCarousel = new window.bootstrap.Carousel(carouselElement);
            bsCarousel.to(index);
        }
        setActiveIndex(index);
    };

    return (
        <div className={`container py-5 ${styles.container}`} id='recommendations'>
            <h2 className="text-center mb-4"><b>Recommendations</b></h2>
            <p className="text-center mb-5">Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum</p>
            <div id="recommendationCarousel" className="carousel slide" ref={carouselRef} data-bs-ride="carousel">
                <div className={`carousel-inner ${styles.carousel_inner}`}>
                    {recommendations.map((group, groupIndex) => (
                        <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? 'active' : ''} ${styles.active}`}>
                            <div className={`row ${styles.row}`}>
                                {group.map((rec, index) => (
                                    <div key={rec.id || index} className={`col-md-4 mb-4 ${styles.col_md_4}`}>
                                        <div className={`card recommendation-card ${styles.card} ${styles.recommendation_card}`}>
                                            <div className={`card-body ${styles.card_body}`}>
                                                <div className={`recommendation-rating ${styles.recommendation_rating}`}>
                                                    {rec.rating}
                                                </div>
                                                <p className={`recommendation-text ${styles.Recommendation_text}`}>
                                                    {rec.recommendation_text}
                                                </p>
                                                <div className={`recommendation-auther ${styles.recommendation_auther}`}>
                                                    <img
                                                        src={`/${rec.imgurl}`}
                                                        alt={rec.name}
                                                    />
                                                    <div>
                                                        <strong>{rec.name}</strong><br />
                                                        {rec.designation}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`d-flex justify-content-center ${styles.d_flex}`}>
                    {recommendations.map((_, groupIndex) => (
                        <button
                            key={groupIndex}
                            type="button"
                            data-bs-target="#recommendationCarousel"
                            data-bs-slide-to={groupIndex}
                            className={`${activeIndex === groupIndex ? styles.active : ''}`}
                            aria-current={activeIndex === groupIndex ? 'true' : 'false'}
                            aria-label={`Slide ${groupIndex + 1}`}
                            onClick={() => handleSlideTo(groupIndex)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommendations
