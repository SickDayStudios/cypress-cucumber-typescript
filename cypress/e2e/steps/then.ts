import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then("I should see the {string} button", (buttonName: string) => {
  cy.get('button').contains(buttonName).should("be.visible");
});