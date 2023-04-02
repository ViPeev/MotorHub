describe("Testing Register", () => {
    it("testing unsuccessful Rregister ", () => {
      cy.visit("http://localhost:3000/register");
      cy.get('[name="username"]').type("mockuser");
      cy.get('[name="password"]').type("mockpass");
      cy.get('[name="repass"]').type("mockpass");
      cy.get('[data-testid="submit"]').click();
      cy.contains("span.fade-in", "Invalid username / password");
      cy.wait(2000);
      cy.location().should((loc) => {
        expect(loc.href).to.eq("http://localhost:3000/login");
      });
    });
  
    it("testing successful login ", () => {
      cy.intercept("POST", "*/auth/login", { fixture: "login.json" });
      cy.visit("http://localhost:3000/login");
      cy.get('[name="username"]').type("mockuser");
      cy.get('[name="password"]').type("mockpass");
      cy.get('[data-testid="submit"]').click();
  
      cy.wait(2000);
      cy.location().should((loc) => {
        expect(loc.href).to.eq("http://localhost:3000/");
      });
    });
  });