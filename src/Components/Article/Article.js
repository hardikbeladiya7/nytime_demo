import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Article = ({ title, subTitle, img, description, author, url }) => {
  const imageURL = img ? img['media-metadata'][2].url : '';
  return (
    <div className='Article_card_main'>
      <Row>
        <Col lg={4}>
          <a href={url} target='_blanck'>
            <img data-img style={{ cursor: 'pointer' }} src={imageURL} alt='img' />
          </a>
        </Col>
        <Col lg={8} style={{ padding: '10px' }}>
          <a href={url} target='_blanck' style={{ textDecoration: 'none', color: '#000' }}>
            <h1 data-title style={{ cursor: 'pointer' }}>{title}</h1>
          </a>
          <h6 data-subTitle>{subTitle}</h6>
          <p data-description>{description}</p>
          <p data-author style={{ fontWeight: 'bold' }}>{author}</p>
        </Col>
      </Row>
    </div>
  )
}

export default Article
