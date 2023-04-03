const baseUrl = "http://localhost:3000";

describe("Testing Register", () => {
  it("testing unsuccessful register ", () => {
    cy.intercept("POST", "**/auth/register", {
      statusCode: 400,
      body: {
        ok: false,
        message: "Username / E-mail is already taken",
      },
    });

    cy.visit(`${baseUrl}/register`);
    cy.get('[name="firstName"]').type("Mocky");
    cy.get('[name="lastName"]').type("McMockerson");
    cy.get('[name="userName"]').type("mockuser");
    cy.get('[name="email"]').type("mockuser@gmail.com");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[name="repass"]').type("mockpass");
    cy.get("#agree").click();
    cy.get('[data-testid="submit"]').click();
    cy.contains("span.fade-in", "Username / E-mail is already taken");
    cy.wait(2000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${baseUrl}/register`);
    });
  });

  it("testing successful register ", () => {
    cy.intercept("POST", "**/auth/register", { fixture: "login.json" });

    cy.visit(`${baseUrl}/register`);
    cy.get('[name="firstName"]').type("Mocky");
    cy.get('[name="lastName"]').type("McMockerson");
    cy.get('[name="userName"]').type("mockuser");
    cy.get('[name="email"]').type("mockuser@gmail.com");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[name="repass"]').type("mockpass");
    cy.get("#agree").click();
    cy.get('[data-testid="submit"]').click();
    cy.wait(2000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${baseUrl}/`);
    });
  });
});
