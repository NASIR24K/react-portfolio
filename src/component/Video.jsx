import React from 'react';
import { Card, Button } from 'react-bootstrap';

const VideoItem = ({ videoUrl, title }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button href={videoUrl} target="_blank" variant="primary">
          Watch on YouTube
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VideoItem;
