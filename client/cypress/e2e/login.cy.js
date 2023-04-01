describe("Testing Login", () => {
  it("testing successful login ", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="username"]').type("mockuser");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[data-testid="submit"]').click();
    cy.wait(2000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/");
    });
  });

  it("testing unsuccessful login ", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="username"]').type("mockuser");
    cy.get('[name="password"]').type("mockpass2");
    cy.get('[data-testid="submit"]').click();
    cy.contains("span.fade-in", "Invalid username / password");
    cy.wait(2000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/login");
    });
  });
});

