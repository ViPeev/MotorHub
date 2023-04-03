const baseUrl = "http://localhost:3000";

describe("Testing Login", () => {
  it("testing unsuccessful login ", () => {
    cy.intercept("POST", "**/auth/login", {
      statusCode: 400,
      body: {
        ok: false,
        message: "Invalid username / password",
      },
    });

    cy.visit(`${baseUrl}/login`);
    cy.get('[name="username"]').type("mockuser");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[data-testid="submit"]').click();
    cy.contains("span.fade-in", "Invalid username / password");
    cy.wait(2000);

    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${baseUrl}/login`);
    });
  });

  it("testing successful login ", () => {
    cy.intercept("POST", "**/auth/login", { fixture: "login.json" });
    cy.visit(`${baseUrl}/login`);
    cy.get('[name="username"]').type("mockuser");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[data-testid="submit"]').click();
    cy.wait(2000);

    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${baseUrl}/`);
    });
  });
});
