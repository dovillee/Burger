
describe('Test1', () => {
  beforeEach(() => {
    cy.visit('https://wolt.com/lt/')
    cy.acceptCookies()
  })
  it('Order burger to Kauno Dokas', () => {
    //Click on address field and type Kauno D
    cy.get('#front-page-input')
      .click()
      .type('Kauno D')

    //Make sure that results show 'Kauno Dokas' and click on it
    cy.contains("Kauno Dokas")
      .should('be.visible')
      .click()

    //Click on 'Burgeriai' section
    cy.get('[aria-label="Burgeriai, "]')
      .scrollIntoView()
      .should('be.visible')
      .click()

    //Click on 'Peledine' restaurant
    cy.get('[data-test-id="venueCard.peledine"]')
      .scrollIntoView()
      .should('be.visible')
      .click()

    //Click on 'Burgeriai' tab
    cy.get('[href="#burgeriai-1"]')
      .should('be.visible')
      .click()

    //Click on 'Peledziukas burgeris'
    cy.get('.IZPUj')
      .contains('.ftiIVe', 'Pelėdžiukas burgeris')
      .scrollIntoView()
      .should('be.visible')
      .click()

    //Add selected burger to cart
    cy.get('[data-localization-key="product-modal.submit.add"]')
      .contains('Į krepšelį')
      .should('be.visible')
      .click()

    //Find view cart button and click on it
    cy.get('[data-test-id="cart-view-button"]')
      .contains('Peržiūrėti užsakymą')
      .should('be.visible')
      .click()

    //Make sure that selected burges is added to cart
    cy.get('[data-test-id="CartItemName"]')
      .contains('Pelėdžiukas burgeris')
      .should('be.visible')

    //Click on 'Eiti i apmokejima'
    cy.get('[data-test-id="CartViewNextStepButton"]')
      .contains('Eiti į apmokėjimą')
      .should('be.visible')
      .click()

    //Input email address in order to proceed.
    cy.get('[data-test-id="MethodSelect.EmailInput"]')
      .should('be.visible')
      .click()
      .type('randomtestemail@randomemailtest.com')

    // //Click on next step button
    // cy.get('[data-test-id="StepMethodSelect.NextButton"]')
    //   .should('be.visible')
    //   .contains('Kitas')
    //   .click()
  })
})

Cypress.Commands.add('acceptCookies', () => {
  cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]')
      .contains('Sutinku')
      .click()
});