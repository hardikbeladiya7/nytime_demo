import React from 'react'
import Article from '../../src/Components/Article/Article'

describe('Article Component', () => {
  it('should render the Article component', () => {

    // Object represet API response from NY Times API
    const articleProps = {
      title: 'Test Article Title',
      description: 'This is the content of the test article.',
      subTitle: 'Ny Times',
      author: 'Author Name',
      img: {
        'media-metadata': [{}, {}, {
          url: 'https://images.pexels.com/photos/18501328/pexels-photo-18501328/free-photo-of-giraffe-in-savannah.jpeg'
        }] 
      }
    }

    cy.mount(<Article {...articleProps} />)

    cy.get('[data-title]').should('contain.text', articleProps.title)
    cy.get('[data-description]').should('contain.text', articleProps.description)
    cy.get('[data-subTitle]').should('contain.text', articleProps.subTitle)
    cy.get('[data-author]').should('contain.text', articleProps.author)
    cy.get('[data-img]').should('have.attr', 'src', articleProps.img['media-metadata'][2].url)
  })
})
