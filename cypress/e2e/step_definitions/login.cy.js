
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const login = require('../pages/login.js');

Given("The user enters DemoBlaze", () => {
    login.visit();
})

When("The user log in with username {string} and password {string}", (username, password) => {
    login.openLoginModal();
    login.fillLoginForm(username, password);
    login.submitLogin();
    cy.wait(2000);
})


Then("The user should be logged in successfully", () => {
    login.checkUserLoggedIn();
})

When("The user log in without username and password", () => {
    login.openLoginModal();
    login.submitLogin();
})

Then("A message should be displayed with the text {string}", (text) => {
    login.checkAlertMessage(text);
})

When("The user log in with an inexistent username and password" , () => {
    let randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
    login.openLoginModal();
    login.fillLoginForm(randomNumber.toString(), randomNumber.toString());
    login.submitLogin();
    cy.wait(2000);
})

When("The user logs out", () => {
    login.logout();
})

Then("The user should be logged out", () => {
    login.checkUserLoggedOut();
})