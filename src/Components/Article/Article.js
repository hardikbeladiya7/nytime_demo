import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Article = ({ title, subTitle, img, description, author, url }) => {
  return (
    <div className='Article_card_main'>
      <Row>
        <Col lg={4}>
          <a href={url} target='_blanck'>
            <img style={{ cursor: 'pointer' }} src={img ? img['media-metadata'][2].url : ''} alt='img' />
          </a>
        </Col>
        <Col lg={8} style={{ padding: '10px' }}>
          <a href={url} target='_blanck' style={{ textDecoration: 'none', color: '#000' }}>
            <h1 style={{ cursor: 'pointer' }}>{title}</h1>
          </a>
          <h6>{subTitle}</h6>
          <p>{description}</p>
          <p>{author}</p>
        </Col>
      </Row>
    </div>
  )
}

export default Article
