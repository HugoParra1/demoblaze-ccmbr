import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const signUp = require('../pages/singUp.js');

Given("The user opens DemoBlaze", () => {
    signUp.visit();
})

When("The user signs up with username {string} and password {string}", (username, password) => {
    signUp.openSignUpModal();
    signUp.fillSignUpForm(username, password);
    signUp.submitSignUp();
    signUp.checkAlertMessage('Sign up successful.');
    cy.wait(2000);
})

When("The user logs in with username {string} and password {string}", (username, password) => {
    signUp.openLoginModal();
    signUp.fillLoginForm(username, password);
    signUp.submitLogin();
    cy.wait(2000); // wait for the login to complete
})

Then("The user should be logged in", () => {
    signUp.checkUserLoggedIn();
})

When("The user tries to sign up without username and password", () => {
    signUp.openSignUpModal();
    signUp.submitSignUp();
})

Then("A message should be displayed with the error {string}", (text) => {
    signUp.checkAlertMessage(text);
})

When("The user tries to sign up with username {string} and password {string}", (username, password) => { 
    signUp.openSignUpModal();
    signUp.fillSignUpForm(username, password);
    signUp.submitSignUp();
})
