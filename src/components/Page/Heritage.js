import React from 'react';
import styles from '../../styles/PageStyles/Heritage.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
function Heritage() {
    const races = [
        {
            year: 1951,
            title: '24 Hours of Le Mans - Class Win (356)',
            description: 'Porsche achieves its first major motorsport victory.',
            link: 'https://en.wikipedia.org/wiki/1951_24_Hours_of_Le_Mans',
            icon: 'fas fa-car'// Add links here
        },
        {
            year: 1971,
            title: '24 Hours of Le Mans Back to Back',
            description: 'Porsche achieves consecutive victories 1970-1971',
            link: 'https://en.wikipedia.org/wiki/1971_24_Hours_of_Le_Mans',
            icon: 'fas fa-car'// Add links here
        },
        {
            year: 1973,
            title: 'World Rally Championship - Manufacturer Champion',
            description: 'Porsche achieves its first major Rallying victory.',
            link: 'https://en.wikipedia.org/wiki/1973_World_Rally_Championship',
            icon: 'fas fa-car'// Add links here
        },
        {
            year: 2016,
            title: '24 Hours of Le Mans - Overall Win (919 Hybrid))',
            description: 'Porsche attains Dominance in the LMP1 Hybrid Era',
            link: 'https://en.wikipedia.org/wiki/Porsche_919_Hybrid#:~:text=Later%2C%20Porsche%20inherited%20the%20victory,consecutive%20World%20Endurance%20Drivers\'%20Championship.',
            icon: 'fas fa-car'// Add links here
        },

        // ... add more timeline data objects with links
    ];

    return (
        <div className={styles.container}>
            <h1>Our Motorsport Heritage: A Legacy of Performance</h1>
            <p>
                Porsche's motorsport heritage is deeply woven into the fabric of the brand.
                For over 70 years, Porsche has pushed boundaries on the track, constantly
                innovating and refining its vehicles. This dedication to racing excellence
                translates directly into the performance and engineering that define every
                Porsche on the road.
            </p>


            <p>
                From the early victories of the 356 to the dominance of the 917 and the
                unmatched success of the 911, Porsche has consistently proven its
                engineering prowess and captured the hearts of racing enthusiasts
                worldwide. This rich heritage continues to inspire future generations of
                engineers and drivers, ensuring that the Porsche spirit of innovation and
                performance lives on.
            </p>

            <div className={styles.keyRaces}>
                <h2>Key Races and Victories</h2>
                <ul>
                    {races.map((race) => (
                        <li key={race.year}>
                            <a href={race.link} target="_blank" rel="noopener noreferrer">
                                <i className={race.icon}></i> {/* Add icon before title */}
                                {race.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Heritage;
