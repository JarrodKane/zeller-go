import SelectRadio from './index';

describe('<SelectRadio />', () => {
  it('renders with a list of options', () => {
    const options = ['one', 'two', 'three'];
    let selectedRole = options[1];

    const handleSelection = (selection: string) => {
      selectedRole = selection;
    }

    cy.mount(<SelectRadio list={options} handleSelection={handleSelection} selected={selectedRole} group={'test'} />);

    cy.get('input[type="radio"]').should('have.length', options.length);
    cy.get('input[type="radio"]').eq(1).should('be.checked');
    cy.get('input[type="radio"]').eq(1).should('have.attr', 'name', 'test');
  });
});
