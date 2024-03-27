it("should submit the form with the right value in the body when analyze button is clicked", () => {
  // given
  const expectedValue = "test value";
  cy.get(".languageSelector select").as("languageSelect");
  cy.get("@languageSelect").find("option").should("have.length.greaterThan", 0);
  cy.get("@languageSelect").select("EN", { force: true });
  cy.get(".query form").as("form");
  cy.get("@form").find("input[name='maxLabels']").type(expectedValue);

  // when
  cy.get(".right button").click();

  // then
  cy.get("@form").should(($form) => {
    expect($form).to.have.attr("method", "POST");
    expect($form).to.have.attr("action", "/analyze");
    expect($form).to.have.attr("enctype", "application/x-www-form-urlencoded");
    expect($form).to.contain(
      "input[name='maxLabels'][value='" + expectedValue + "']"
    );
  });
});
describe("Form", () => {
  // Before each test, we test we can access the page
  beforeEach(() => {
    cy.visit("http://localhost:7070");
  });

  it("should submit the form with the right value in the body when analyze button is clicked", () => {
    // given
    const expectedValue = "test value";
    cy.get(".languageSelector select").as("languageSelect");
    cy.get("@languageSelect")
      .find("option")
      .should("have.length.greaterThan", 0);
    cy.get("@languageSelect").select("EN", { force: true });
    cy.get(".query form").as("form");
    cy.get("@form").find("input[name='maxLabels']").type(expectedValue);

    // when
    cy.get(".right button").click();

    // then
    cy.get("@form").should(($form) => {
      expect($form).to.have.attr("method", "POST");
      expect($form).to.have.attr("action", "/analyze");
      expect($form).to.have.attr(
        "enctype",
        "application/x-www-form-urlencoded"
      );
      expect($form).to.contain(
        "input[name='maxLabels'][value='" + expectedValue + "']"
      );
    });
  });
});
it("should submit the form when the analyze button is clicked", () => {
  // given
  const expectedValue = "test value";
  cy.get(".languageSelector select").as("languageSelect");
  cy.get("@languageSelect").find("option").should("have.length.greaterThan", 0);
  cy.get("@languageSelect").select("EN", { force: true });
  cy.get(".query form").as("form");
  cy.get("@form").find("input[name='maxLabels']").type(expectedValue);

  // when
  cy.get(".right button").click();

  // then
  cy.get("@form").should(($form) => {
    expect($form).to.have.attr("method", "POST");
    expect($form).to.have.attr("action", "/analyze");
    expect($form).to.have.attr("enctype", "application/x-www-form-urlencoded");
    expect($form).to.contain(
      "input[name='maxLabels'][value='" + expectedValue + "']"
    );
  });
});