import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("I am on the {string} page", (page: string) => {
  cy.visit(`/${page}`);
});

When("I click the {string} button", (buttonText: string) => {
  cy.get('button').contains(buttonText).click();
});

When("I click the {string} link", (linkText: string) => {
  cy.get('a').contains(linkText).click();
});

When("I fill in the {string} field with {string}", (field: string, value: string) => {
  cy.get(`input[name="${field}"]`).type(value);
});

When("I select {string} from the {string} dropdown", (option: string, dropdown:string) => {
  cy.get(`select[name="${dropdown}"]`).select(option);
});

When("I check the {string} checkbox", (checkboxLabel: string) => {
  cy.get(`input[type="checkbox"][name="${checkboxLabel}"]`).check();
});

When("I uncheck the {string} checkbox", (checkboxLabel: string) => {
  cy.get(`input[type="checkbox"][name="${checkboxLabel}"]`).uncheck();
});

Then("I should see the {string} button", (buttonName: string) => {
  cy.get('button').contains(buttonName).should("be.visible");
});
