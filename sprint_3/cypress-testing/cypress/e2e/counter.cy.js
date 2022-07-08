  ///   <reference types ="Cypress"/>

describe("Checking Counter", ()=>{
    it("should exist in the document", ()=>{
        cy.visit("http://localhost:3000/");
        cy.get("h2").should("exist");
        cy.get(".incre").should("exist");
        cy.get(".decre").should("exist");
    });
       
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
    })
    it("should increment counter", ()=>{
        cy.get("h2").should("have.text","Count is 0") 
        cy.get(".incre").click();
        cy.get("h2").should("have.text","Count is 1")  

    })

    it("should increment counter multiple",()=>{
       cy.get("h2").should("have.text","Count is 0")
       cy.get(".incre").click()
       cy.get(".incre").click()
       cy.get(".incre").click()
       cy.get(".incre").click()
       cy.get(".incre").click()
       cy.get("h2").should("have.text","Count is 5")
    })
})