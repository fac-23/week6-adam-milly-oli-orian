"use strict";

beforeEach(() => {
  cy.task("resetDb");
});

describe("homepage tests", () => {
  it("can find homepage", () => {
    cy.visit("/");
  });

  it("can find title on home page", () => {
    cy.visit("/");
    cy.get("h1").contains("Cupcake Store");
  });

  // can see cupcake images on home page
  it("can see cupcake images on home page", () => {
    cy.visit("/");
    cy.get("img").first().should("have.attr", "alt");
    // test expects alt to be '' and not cupcake
    // assertion below for image url
    // .should("have.attr", "src")
    // .should(
    //   "include",
    //   "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
    // );
  });

  // can see cupcake name, description and price
  it("contains info about cupcake", () => {
    cy.visit("/");
    cy.get("p").contains("Red Velvet");
    cy.get("p").contains("A delicious red cupcake ♥️");
    cy.get("p").contains("3");
  });

  // can add cupcakes to basket from homepage
  it("can add cupcakes to basket from homepage", () => {
    cy.visit("/");
    cy.get("button").contains("Add to basket").click();
    cy.url().should("include", "/basket");
  });

  // can click on product card to view individual product page
  it("can navigate to product page from home", () => {
    cy.visit("/");
    cy.get("li").first().click();
    // redirect to dynamic route based on product id
    cy.url().should("include", "/products/1");
  });
});

// can add cupcakes to basket from product page
it("can add cupcakes to basket from product page", () => {
  cy.visit("/");
  cy.get("li").first().click();
  // redirect to dynamic route based on product id
  cy.url().should("include", "/products/1");
  cy.get("button").contains("Add to basket").click();
  cy.url().should("include", "/basket");
});

// DRAFT - OAuth test
// can click sign up button and sign up with oAuth social login
it("can sign up", () => {
  cy.visit("/");
  cy.get("button").contains("Sign Up").click();
  // test github OAuth login
  cy.url().should(
    "include",
    "https://github.com/login/oauth/authorize?client_id=1e976f1fb7a5e8d0d0ce"
  );
});
