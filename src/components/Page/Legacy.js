import React from 'react';
import styles from '../../styles/PageStyles/Legacy.module.css';

function Legacy() {
    const cars = [
        {
            id: 1,
            model: '356',
            image: '/356.jpg',
            year: 1950,
            wins: 1,
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',
            // Add more statistics as needed
        },
        {
            id: 2,
            model: '917',
            image: '/917.jpg',
            year: 1969,
            wins: 3,
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',

            // Add more statistics as needed
        },
        {
            id: 3,
            model: '956',
            image: '/956.jpg',
            year: 1982,
            wins: 11,
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',

            // Add more statistics as needed
        },
        {
            id: 4,
            model: '919',
            image: '/919.jpg',
            year: 2016,
            wins: 29,
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',

            // Add more statistics as needed
        },
        {
            id: 5,
            model: 'Carrera',
            image: '/carrera.jpg',
            year: 2010,
            wins: 12,
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',

            // Add more statistics as needed
        },
        {
            id: 6,
            model: '911',
            image: '/911.jpg',
            year: 2020,
            wins: 150,
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',

            // Add more statistics as needed
        },
        // Add more car objects with details
    ];

    return (
        <div className={styles.container}>
            <h1>Our Motorsport Legacy</h1>
            <p>Discover the rich history and achievements of Porsche Motorsport.</p>

            <ul className={styles.carGrid}>

                {cars.map((car) => (
                    <li key={car.id} className={styles.carItem}>
                        <img src={car.image} alt={car.model} />
                        <div className={styles.carInfo}>

                            <p>{car.model}</p>
                            <span className={styles.separator}>|</span>
                            <p>Year: {car.year}</p>
                            <span className={styles.separator}>|</span>
                            <p>Wins: {car.wins}</p>
                            {/* Add more statistics as needed */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Legacy;
