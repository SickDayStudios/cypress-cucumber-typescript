import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given("I am on the {string} page", (page: string) => {
  cy.visit(`/${page}`);
});