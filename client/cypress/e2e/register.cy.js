describe("Testing Register", () => {
  it("testing unsuccessful register ", () => {
    cy.intercept("POST", "*/auth/register", (req) => {
      req.reply((res) => {
        res.send({ fixture: "false-register.json" });
      });
    });

    cy.visit("http://localhost:3000/register");
    cy.get('[name="firstName"]').type("Mocky");
    cy.get('[name="lastName"]').type("McMockerson");
    cy.get('[name="userName"]').type("mockuser");
    cy.get('[name="email"]').type("mockuser@gmail.com");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[name="repass"]').type("mockpass");
    cy.get('#agree').click();
    cy.get('[data-testid="submit"]').click();
    cy.contains("span.fade-in", "Username / E-mail is already taken");
    cy.wait(2000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/register");
    });
  });

  it("testing successful register ", () => {
    cy.intercept("POST", "*/auth/register", { fixture: "login.json" });

    cy.visit("http://localhost:3000/register");
    cy.get('[name="firstName"]').type("Mocky");
    cy.get('[name="lastName"]').type("McMockerson");
    cy.get('[name="userName"]').type("mockuser");
    cy.get('[name="email"]').type("mockuser@gmail.com");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[name="repass"]').type("mockpass");
    cy.get('#agree').click();
    cy.get('[data-testid="submit"]').click();
    cy.wait(2000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/");
    });
  });
});