describe('Start a new game', () => {

  it('starts with an animation', () => {
    cy.visit('http://localhost:8000');
    cy.contains('Let\'s play');
    cy.contains('Diximus');
  });

  it('skips the animation after a click', () => {
    cy.get('body').click();
    cy.get('img[alt=Avatar]');
  })

  it('changes language via dropdown', () => {
    cy.get('#dropdown-basic-button').click();
    cy.contains('English').click();
    cy.contains('Create new game');
  })

  it('is not possible to create the game prematurely', () => {
    cy.get('button[type=submit]').click();
    cy.get('div[role=alert]');
    cy.get('button[class=btn-close]').click();
  })

  it('starts a new game when a name is entered', () => {
    cy.get('input').type('Test player');
    cy.get('button').contains('Create').click();
    cy.contains('Lobby');
  })

  it('is not possible to start the game if there are not enough players', () => {
    cy.get('label').contains('Diximus').click();
    cy.contains('You have enough cards');
    cy.get('button').contains('Start').should('be.disabled');
    cy.get('label').contains('Diximus').click();
  })

  it('updates the player list when new players join', () => {
    cy.get('input[type=text]').then($input => {
      const addressArray = $input.val().split('/');
      return addressArray[addressArray.length - 1];
    }).then(gameId => console.log(gameId));
  })

})