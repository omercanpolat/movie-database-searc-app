describe("signup-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });
  it("signup", () => {
    cy.get("[data-test='userAvatar']")
      .should("be.visible")
      .click({ force: true });
    cy.get("[data-test='registerBtn']")
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/register");
    cy.get("[data-test='signupHeader']")
      .contains("Sign Up")
      .should("be.visible");
    cy.get("[data-test='firstNameLbl']")
      .contains("First Name")
      .should("be.visible");
    cy.get("[data-test='firstNameInput']").should("be.visible").type("John");
    cy.get("[data-test='lastNameLbl']")
      .contains("Last Name")
      .should("be.visible");
    cy.get("[data-test='lastNameInput']").should("be.visible").type("Selim11");
    cy.get("[data-test='emailLbl']").contains("Email").should("be.visible");
    cy.get("[data-test='emailInput']")
      .should("be.visible")
      .type("johnselim11@gmail.com");
    cy.get("[data-test='passwordLbl']")
      .contains("Password")
      .should("be.visible");
    cy.get("[data-test='passwordInput']").should("be.visible").type("123456");
    cy.get("[data-test='registerButton']").click({ force: true });
  });
});
