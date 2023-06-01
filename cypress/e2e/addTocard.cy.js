/ <reference types="cypress" />
after(() =>{
    cy.screenshot()

});
describe('Add to cart', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('connection', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    });
    it('addProduct', () => {
        var nbPrd = 0;
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        if (cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()) nbPrd++;
        cy.log(nbPrd);
        if (cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()) nbPrd++;
        cy.log(nbPrd);
        if (cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()) nbPrd++;
        cy.log(nbPrd);
        cy.get('.shopping_cart_badge').should('have.length.of.at.most', 2)
        cy.get('.shopping_cart_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('houssem eddine')
        cy.get('[data-test="lastName"]').type('hedfi')
        cy.get('[data-test="postalCode"]').type ('33130')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        

        


    })
});