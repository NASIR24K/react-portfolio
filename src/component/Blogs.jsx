import React,  { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/Blogs.css'; // Import your custom styling

import Image1 from '../assets/Images/download.jpeg';
import Image2 from '../assets/Images/download (9).jpeg';
import Image3 from '../assets/Images/food4.jpg';
import Image4 from '../assets/Images/food4.jpg';
import Image5 from '../assets/Images/food4.jpg';
import Image6 from '../assets/Images/food4.jpg';
import Image7 from '../assets/Images/food4.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image1,
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image2,
  },
  {
    id: 3,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image3,
  },
  {
    id: 4,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image4,
  },
  {
    id: 5,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image5,
  },
  {
    id: 6,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image6,
  },

    {
    id: 7,
    title: 'Understanding React Hooks',
    content: 'In this blog post, we explore the concept of React hooks and how they can improve your component architecture...',
    image: Image7,
  }
  // Add more blog posts
];

const Blog = () => {
  const itemsPerPage = 6; // Number of blog posts to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visiblePosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);
  return (
    
    <Container fluid className="blog-section">
      <h2 className="section-title">Blog</h2>
      <Row>
      {visiblePosts.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="primary" className='text-center'>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="pagination d-grid gap-2 d-md-flex justify-content-md-center">
        <Button
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button variant="primary" onClick={() => handlePageChange(1)}>
          1
        </Button>
        <Button
          variant="secondary"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
  
    </Container>
  );
}

export default Blog;
