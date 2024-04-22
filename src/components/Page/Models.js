import React from 'react';
import styles from '../../styles/PageStyles/Models.module.css';

const porscheModels = [
    {
        id: 1,
        model: '911',
        image: '/911.jpg',
        description: 'The timeless icon of sports car performance.',
        link: 'https://www.porsche.com/usa/models/911/',
    },
    {
        id: 2,
        model: '718',
        image: '/718.jpg',
        description: 'The pinnacle of open-air performance.',
        link: 'https://www.porsche.com/usa/models/718/',
    },
    {
        id: 3,
        model: 'Taycan',
        image: '/taycan.jpg',
        description: 'The all-electric sports car, redefined.',
        link: 'https://www.porsche.com/usa/models/taycan/',
    },
    {
        id: 4,
        model: 'Panamera',
        image: '/panamera.jpg',
        description: 'Luxury performance that defies expectations.',
        link: 'https://www.porsche.com/usa/models/panamera/',
    },
    // Add more model objects with details
];

function Models() {
    return (
        <div className={styles.container}>
            <h1>Explore Our Models</h1>
            <p>Discover the latest Porsche models designed for performance and innovation.</p>

            <div className={styles.modelsGrid}>
                {porscheModels.map((model) => (
                    <div key={model.id} className={styles.modelCard}>
                        <img src={model.image} alt={model.model} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <div className={styles.cardInfo}>
                            <h3>{model.model}</h3>
                            <p>{model.description}</p>
                            <a href={model.link} className={styles.cardLink}>Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Models;
