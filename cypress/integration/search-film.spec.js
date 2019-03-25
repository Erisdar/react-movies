describe('Content component', () => {

    beforeEach(function () {
        cy.visit("http://localhost:8080/");
    });

    it('should find films by title', () => {
        let film = 'Kill Bill';
        cy.get('[data-cy=input]')
            .focus()
            .type(film);

        cy.get('[data-cy=title]')
            .click();

        cy.get('[data-cy=search]')
            .click();

        cy.get('[data-cy=film-info-title]')
            .each((value) => {
                expect(value).to.contain(film);
            });
    });

    it('should find films by genre', () => {
        let genre = 'Fantasy';
        cy.get('[data-cy=input]')
            .focus()
            .type(genre);

        cy.get('[data-cy=genre]')
            .click();

        cy.get('[data-cy=search]')
            .click();

        cy.get('[data-cy=film-info-genre]')
            .each((value) => {
                expect(value).to.contain(genre);
            });
    });
});