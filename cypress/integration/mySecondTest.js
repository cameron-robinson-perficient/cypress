/// <reference types="cypress" />

import jsonJson from '../fixtures/json.json'

describe('JSON Placeholder Testing', () => {
  it('responds with OK, has attributes, number of comments is 500', () => {
    cy.request('GET', jsonJson.url).as('comments')
    cy.get('@comments').should((response) => {
      expect(response.status).to.eq(200) // OK

      const firstComment = response.body[0]
      expect(firstComment.postId).to.eq(jsonJson.postId)
      expect(firstComment.id).to.eq(jsonJson.id)
      expect(firstComment.name).to.eq(jsonJson.name)
      expect(firstComment.email).to.eq(jsonJson.email)
      expect(firstComment.body).to.eq(jsonJson.body)

      expect(response.body).to.have.length(500)
    })
  })
})

