import User from './index'

describe('<User />', () => {
  it('renders', () => {

    const user = {
      email: 'TonyWill@gmail.com',
      id: '101',
      name: 'BigMan',
      role: 'Cool Dude'
    }


    cy.mount(<User  {...user} key={user.id} />)
    cy.contains('BigMan').should('be.visible');
    cy.get('[data-testid="user-initial"]').should('have.text', 'B');
  })
})