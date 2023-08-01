// https://magento.softwaretestingboard.com/
/// <reference types="Cypress"/>

describe('Homework for lesson 16 in QA automation ', () => {

    it.skip('test for discount 10% for all item price', () => {

        cy.visit("https://magento.softwaretestingboard.com/")
        //this tips to select from navbar menu
        cy.get("a[href='https://magento.softwaretestingboard.com/men.html']").trigger('mouseover') 
        cy.get('#ui-id-17').trigger('mouseover',{force: true}).should('be.visible')
        cy.get('#ui-id-20').trigger('mouseover',{force: true}).click()

        //
        cy.get(':nth-child(5) > .field > .control > #limiter').select("24")

        cy.get('.main .product-item .product-item-info .product-item-details .price').as("item")
        cy.get("@item").invoke('text').as("itemPrice")
        cy.get("@itemPrice").then((pricetext)=>{
            
            let total=0
            let prices=pricetext.split("$")

            for (let i = 1; i < prices.length; i++) {
             
                cy.log("Price before discount = "+prices[i])
                cy.log("Price after disccount = "+ (Number(prices[i])*0.9))
                cy.log("******************************\n******************************")
                
            }

        })

        
        
    });


    it.only('second test for print first 3 letter in string ', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        //this tips to select from navbar menu
        cy.get("a[href='https://magento.softwaretestingboard.com/men.html']").trigger('mouseover') 
        cy.get('#ui-id-17').trigger('mouseover',{force: true}).should('be.visible')
        cy.get('#ui-id-20').trigger('mouseover',{force: true}).click()

        //
        // cy.get(':nth-child(5) > .field > .control > #limiter').select("24")

        // cy.get('.main .product-item .product-item-details .product-item-name').as("items")
        // cy.get('@items').invoke('text').as("itemName")
         // Using each to iterate through all product names and print first three letters
    cy.get('.main .product-item .product-item-details .product-item-name').each(($item) => {
        const productName = $item.text();
        const final = productName.substring(0,5);
        cy.log(final);
    });
        // cy.get('@itemName').then((productName)=>{
        //   let subProductName=productName
        //   let final=subProductName.substring(0,3)
        //     for (let i = 0; i < subProductName.length; i++) {
        //         // cy.wrap(subProductName[i])
        //         cy.log(final[i])

                
                
        //     }
        // })
        
    });
    
});