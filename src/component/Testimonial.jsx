import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../css/Testimonial.css'; // Import your custom styling

import image1 from '../assets/Images/images.jpeg'; // Import your client images
import image2 from '../assets/Images/food4.jpg'; // Import your client images
import image3 from '../assets/Images/download.jpeg'; // Import your client images

const testimonials = [
    {
      id: 1,
      name: 'Jane Smith',
      title: 'CEO, Tech Innovators',
      commendation: 'Our collaboration with this talented software engineer has been truly outstanding. Their expertise and dedication have led to remarkable improvements in our projects, and we look forward to continued success together.',
      image: image1, // Use the imported image
      socialMedia: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/janesmith' },
        { name: 'Twitter', url: 'https://www.twitter.com/janesmith' },
      ],
    },
    {
      id: 2,
      name: 'Michael Johnson',
      title: 'Colleague, Developer at ABC Corp.',
      commendation: 'I had the pleasure of working alongside this software engineer on a complex project. Their problem-solving skills and attention to detail were truly impressive. Their contributions were invaluable, and I would highly recommend them to anyone seeking a skilled developer.',
      image: image2, // Use the imported image
      socialMedia: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/michaeljohnson' },
        { name: 'GitHub', url: 'https://www.github.com/michaeljohnson' },
      ],
    },
    {
      id: 3,
      name: 'Alexandra Carter',
      title: 'Client, E-commerce Entrepreneur',
      commendation: 'As a client, I was fortunate to have this software engineer bring my vision to life. Their ability to translate complex ideas into practical solutions was remarkable. They were responsive, communicative, and exceeded my expectations. Im thrilled with the results.',
      image: image3, // Use the imported image
      socialMedia: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandracarter' },
        { name: 'Instagram', url: 'https://www.instagram.com/alexandracarter' },
      ],
    },
    // Add more testimonials
  ];
  

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Container>
        <h2 className="section-title">Testimonials</h2>
        <Carousel controls indicators pauseOnHover={false} interval={4000} fade>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="testimonial">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h3>{testimonial.name}</h3>
                <p className="title">{testimonial.title}</p>
                <p className="commendation">{testimonial.commendation}</p>
                <div className="social-media">
                  {testimonial.socialMedia.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                      <i className={`fa fa-${social.name.toLowerCase()}`} />
                    </a>
                  ))}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Testimonials;
