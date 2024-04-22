import React from 'react';
import styles from '../../styles/PageStyles/Home.module.css';

const carImages = [
    // Replace with paths to your car images
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpeg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg"
    // ... add more image paths
];

function Home() {
    return (

        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Welcome to Porsche Motorsport</h1>
                <p>Porsche Motorsport embodies the very essence of Porsche engineering, encapsulating our relentless pursuit of excellence and passion for performance. From the demanding circuits of the racetrack to the exhilarating challenges of the open road, our motorsport heritage is deeply ingrained in every fiber of our being.</p>
                <p>For decades, Porsche has stood at the forefront of motorsport innovation, pushing the boundaries of technology and performance to new heights. Our racing endeavors have not only shaped the evolution of automotive engineering but have also inspired generations of enthusiasts and drivers worldwide.</p>
                <p>Our motorsport heritage is more than a legacy—it's a living, breathing testament to our enduring spirit of innovation and excellence. It's a celebration of the victories, the challenges, and the triumphs that have defined Porsche's journey from the racetrack to the street.

                    As we continue to write the next chapter in our motorsport legacy, we invite you to join us on this exhilarating journey. Experience the thrill of Porsche firsthand and discover the true essence of performance, innovation, and passion that defines us as a brand.</p>
            </div>

            <div className={styles.carScroller}>

                {/* Loop through car images and render them */}
                {carImages.map((image, index) => (
                    <img key={index} src={image} alt={`Porsche ${index + 1}`} className={styles.carImage}/>
                ))}
            </div>

        </div>
    );
}

export default Home;
