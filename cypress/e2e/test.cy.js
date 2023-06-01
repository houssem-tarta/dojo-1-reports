import data from '../fixtures/swag.json'

describe('Add to cart', () => {
    beforeEach (() => {
        cy.fixture("swag").then(function(data){
            
        })
    })

    it('connection', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type(data.Username)
        cy.get('[data-test="password"]').type(data.Password)
        cy.get('[data-test="login-button"]').click()
        });
    
    });

    