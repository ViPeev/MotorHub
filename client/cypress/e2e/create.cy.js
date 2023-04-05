const baseUrl = "http://127.0.0.1:3000";
const photo = "cypress/fixtures/c63.jpg";
const photo2 = "cypress/fixtures/amgc63.jpg";

describe("Testing Create", () => {
  it("testing successful login & create", () => {
    cy.intercept("POST", "**/auth/login", { fixture: "login.json" });
    cy.intercept("POST", "**/api/uploads/cars", { fixture: "image-url.json" });
    cy.intercept("POST", "**/api/cars", { fixture: "carId.json" });
    cy.intercept("GET", "**/cars/641df78698e475422f29e2b5", {
      fixture: "car.json",
    });

    cy.visit(baseUrl);
    cy.contains("Sell your car").click();
    cy.wait(500);
    cy.get('[name="username"]').type("mockuser");
    cy.get('[name="password"]').type("mockpass");
    cy.get('[data-testid="submit"]').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${baseUrl}/sell`);
    });

    cy.get('[name="make"]').select("Mercedes-Benz");
    cy.get('[name="model"]').select("C-Class");
    cy.get('[name="condition"]').select("New");
    cy.get('[name="category"]').select("Saloon / Sedan");
    cy.get('[name="fuelType"]').select("Plug-in Hybrid");
    cy.get('[name="transmission"]').select("Automatic");
    cy.get('[name="modification"]').type("C63 AMG");
    cy.get('[name="power"]').type("671");
    cy.get('[name="cubicCapacity"]').type("2000");
    cy.get('[name="price"]').type("78000");
    cy.get('[name="mileage"]').type("20");
    cy.get('[name="year"]').select("2023");
    cy.get('[name="doors"]').select("4/5");
    cy.get('[name="seats"]').select("5");
    cy.get('[name="color"]').select("Silver");
    cy.get('[name="location"]').select("Germany");
    cy.get('[name="phone"]').type("+359878123123");
    cy.get("#description").type("Smells like a new car in here");
    cy.contains("Continue").should("not.be.disabled").click();

    cy.get('[name="uploadPhoto-0"]').selectFile(photo, { force: true });
    cy.get("form button:nth-child(1)").click();
    cy.get('[name="uploadPhoto-1"]').selectFile(photo2, { force: true });
    cy.contains("Publish").click();

    cy.wait(1000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${baseUrl}/details/641df78698e475422f29e2b5`);
    });

    cy.wait(3000);
    cy.contains("Mercedes-Benz C-Class C63 AMG");
  });
});
