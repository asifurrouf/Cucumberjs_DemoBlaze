import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 

const locator= new locatorsPage();
const data= new Data(); 


// <------------------------------------------------------------------->
// <----------------------- Login Steps ------------------------------->
// <------------------------------------------------------------------->
Given('open demoblaze website',function(){ 
    cy.visit(data.URL);
    cy.wait(3000)
})
When('click on Home Button',()=>{ 
    cy.xpath(locator.home).click({force: true});
})
And('click on Phone Button',()=>{ 
    cy.xpath(locator.phone).click({force: true});
})
And('click on Laptop Button',()=>{ 
    cy.xpath(locator.laptop).click({force: true});
})
And('click on Monitors Button',()=>{ 
    cy.xpath(locator.monitors).click({force: true});
})
And('click on first mobile from list',()=>{ 
    cy.xpath(locator.firstProduct).click({force: true});
})
And('click on add to card',()=>{ 
    cy.xpath(locator.addToCard).click({force: true});
})
And('click on card',()=>{ 
    cy.xpath(locator.cart).click({force: true});
})
And('click on place order',()=>{ 
    cy.xpath(locator.placeOrder).click({force: true});
    cy.wait(2000)
})
And('enter username',()=>{ 
    cy.xpath(locator.nameTextBox).type(data.USERNAME);
})
And('enter country name',()=>{ 
    cy.xpath(locator.countryTextBox).type(data.COUNTRYNAME);
})
And('enter city name',()=>{ 
    cy.xpath(locator.cityTextBox).type(data.CITYNAME);
})
And('enter credit card number',()=>{ 
    cy.xpath(locator.creditCardTextBox).type(data.CREDITCARD);
})
And('enter month name',()=>{ 
    cy.xpath(locator.monthTextBox).type(data.MONTH);
})
And('enter year name',()=>{ 
    cy.xpath(locator.yearTextBox).type(data.YEAR);
})
And('click on purchase button',()=>{ 
    cy.xpath(locator.purchaseButton).click({force: true});
})

// Message
And('click on contacts',()=>{ 
    cy.xpath(locator.contact).click({force: true});
    cy.wait(2000)
})
And('type email address',()=>{ 
    cy.xpath(locator.contactEmailTextBox).type(data.USERNAME);
})
And('type contact name',()=>{ 
    cy.xpath(locator.contactNameTextBox).type(data.USERNAME);
})
And('type message',()=>{ 
    cy.xpath(locator.messageTextBox).type(data.MESSAGE);
})
And('click on send message',()=>{ 
    cy.xpath(locator.sendMessage).click({force: true});
})
And('click on close message',()=>{ 
    cy.xpath(locator.closeMessage).click({force: true});
})

// About us
And('click on about us',()=>{ 
    cy.xpath(locator.aboutUs).click({force: true});
    cy.wait(2000)
})
And('click on play',()=>{ 
    cy.xpath(locator.play).click({force: true});
    cy.wait(3000)
})
And('click on pause',()=>{ 
    cy.xpath(locator.pause).click({force: true});
})
And('click on close about us',()=>{ 
    cy.xpath(locator.aboutUsClose).click({force: true});
})

// Log in
And('click on log in',()=>{ 
    cy.xpath(locator.login).click({force: true});
    cy.wait(2000)
})
And('type login user name',()=>{ 
    cy.xpath(locator.userName).type(data.USERNAME);
})
And('type login password',()=>{ 
    cy.xpath(locator.password).type(data.PASSWORD);
})
And('click on log close',()=>{ 
    cy.xpath(locator.loginClose).click({force: true});
})

// Sign up
And('click on sign up',()=>{ 
    cy.xpath(locator.signup).click({force: true});
    cy.wait(2000)
})
And('type sign up user name',()=>{ 
    cy.xpath(locator.signupUsername).type(data.USERNAME);
})
And('type sign up password',()=>{ 
    cy.xpath(locator.signupPassword).type(data.PASSWORD);
})
And('click on sign up close',()=>{ 
    cy.xpath(locator.signupClose).click({force: true});
})





  