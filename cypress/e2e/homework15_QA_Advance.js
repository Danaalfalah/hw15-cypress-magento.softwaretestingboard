// https://magento.softwaretestingboard.com/
/// <reference types="Cypress"/>

describe('homework 15', () => {
    it.only('first test for Hoodies & Sweatshirts for check i have 13 items and total of sum the price', () => {
        //open webpage
        cy.visit("https://magento.softwaretestingboard.com/")

        //this tips to select from navbar menu
        cy.get("a[href='https://magento.softwaretestingboard.com/men.html']").trigger('mouseover') 
        cy.get('#ui-id-17').trigger('mouseover',{force: true}).should('be.visible')
        cy.get('#ui-id-20').trigger('mouseover',{force: true}).click()

        //
        cy.get(':nth-child(5) > .field > .control > #limiter').select("24")

        //to check i have 13 items  using wrap using each and for loop 
        //   let itemTotal=0
        // cy.get(".wrapper .product-item .product-item-info").each((element,index,list)=>{
          
        //    for(let i=0 ; i<element.length ; i++){
        //    cy.wrap(element)
        //    }
         

        // })

        //to check the total price 
        cy.get(".wrapper .product-item .product-item-info .product-item-details").as("items")
        cy.get("@items").find(".price").invoke('text').as("itemPrice")
        cy.get("@itemPrice").then((pricetext)=>{
            let myListOfPrices= pricetext.split("$")
            let totalPrice=0
            for(let y=0 ; y< myListOfPrices.length ; y++){
                totalPrice+=Number(myListOfPrices[y])
            }
            cy.log("the total price for items = "+totalPrice +"  $ the length item = "+myListOfPrices.length )
        })



      
        
    });


    it('the second test for bags to calculate the total of price ', () => {
        //open webpage
        cy.visit("https://magento.softwaretestingboard.com/")

         //this tips to select from navbar menu
         cy.get("#ui-id-6").trigger('mouseover')
         cy.get("#ui-id-25").click()


         //total of price 
         cy.get(".wrapper .product-item .product-item-info .product-item-details").as("items")
         cy.get("@items").find(".price").invoke('text').as("itemPrice")
         cy.get("@itemPrice").then((priceitem)=>{
            let totalBag=priceitem.split("$")
            let totalpriceBag=0
            for(let o=0 ; o<totalBag.length ;o++)
            {
                totalpriceBag+=Number(totalBag[o])
            }
            cy.log("total price bags = "+totalpriceBag)
         })

        
    });
    
});

