describe('Template Viewer', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('displays the initial main image and metadata', () => {
      cy.get('#large img')
        .should('have.attr', 'src', 'http://localhost:3001/images/large/7111-b.jpg')
        .and('have.attr', 'alt', 'Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis');
  
      cy.get('.details')
        .should('contain', 'Title Business Site Template - 7111')
        .and('contain', 'Description Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis')
        .and('contain', 'Cost $45.00')
        .and('contain', 'ID # 7111')
        .and('contain', 'Thumbnail File 7111-m.jpg')
        .and('contain', 'Large Image File 7111-b.jpg');
    });
  
    it('displays the correct thumbnails', () => {
      const thumbnails = [
        '7111-m.jpg',
        '7112-m.jpg',
        '7118-m.jpg',
        '7124-m.jpg'
      ];
  
      cy.get('.thumbnails img')
        .should('have.length', 4)
        .each(($img, index) => {
          cy.wrap($img)
            .should('have.attr', 'src')
            .and('match', new RegExp(`http://localhost:3001/images/thumbnails/${thumbnails[index]}`));
        });
    });
  
    it('navigates through thumbnails', () => {
      cy.get('.next').click();
  
      cy.get('.thumbnails img')
        .first()
        .should('have.attr', 'src', 'http://localhost:3001/images/thumbnails/7130-m.jpg');
    });
  
    it('displays the correct main image and metadata when a thumbnail is clicked', () => {
      cy.get('.thumbnails a').first().click();
  
      cy.get('#large img')
        .should('have.attr', 'src', 'http://localhost:3001/images/large/7111-b.jpg');
  
      cy.get('.details')
        .should('contain', 'ID # 7111');
    });
  
    it('disables the previous button at the beginning and the next button at the end', () => {
      cy.get('.previous').should('have.class', 'disabled');
      
      cy.get('.next').click().click().click();
  
      cy.get('.next').should('have.class', 'disabled');
    });
  });
  