describe("navbar test", () => {
  it("navbar", () => {
    cy.pause();
    cy.visit("http://localhost:3000/");
    cy.get("[data-test='movieHeader']").contains("React Movie App");
    cy.get("[data-test='switchMode']").should("be.visible").dblclick();
    cy.get("[data-test='userAvatar']").should("be.visible").click();
    cy.get("[data-test='registerBtn']").should("be.visible").click();
    cy.go("back");
    cy.get("[data-test='userAvatar']").should("be.visible").click();
    cy.get("[data-test='loginBtn']").should("be.visible").click();
    cy.go("back");
    cy.get("[data-test='userAvatar']").should("be.visible").click();
    cy.get("[data-test='logoutBtn']").should("be.visible").click();
  });
});
