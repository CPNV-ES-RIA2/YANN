/**
 * @fileoverview Description of file, its uses and information about its dependencies.
 * @author Yann Menoud
 * @version 1.0
 * @date 2024-02-27
 */

describe("Should display all elements correctly", () => {
  //Before each test, we test we can access the page
  beforeEach(() => {
    cy.visit("http://localhost:7070");
  });

  /**
   * Tests if the page is correctly displayed
   */
  it("should display the language selector", () => {
    cy.get(".languageSelector").should("exist");
  });

  it("should display the drag and drop component", () => {
    cy.get(".left").should("exist");
  });

  it("should display the form for request parameters", () => {
    cy.get(".query form").should("exist");
  });

  it("should display the results table", () => {
    cy.get(".results").should("exist");
  });
});

/**
 * Tests if the page is correctly translated
 */
describe("Translation tests", () => {
  //Before each test, we test we can access the page
  beforeEach(() => {
    cy.visit("http://localhost:7070");
  });

  it("should translate the label and button in french when FR is selected", () => {
    //given
    cy.get(".languageSelector select").as("languageSelect");
    cy.get("@languageSelect")
      .find("option")
      .should("have.length.greaterThan", 0);
    //when
    cy.get("@languageSelect").select("FR", { force: true });
    //then
    cy.get('[data-testid="label-maxLabels"]').should(
      "have.text",
      "Nombre maximal de labels"
    );
    cy.get(".right button").should("have.text", "Analyser");
  });

  it("should translate the label and button in deutsch when DE is selected", () => {
    //given
    cy.get(".languageSelector select").as("languageSelect");
    cy.get("@languageSelect")
      .find("option")
      .should("have.length.greaterThan", 0);
    //when
    cy.get("@languageSelect").select("DE", { force: true });
    //then
    cy.get('[data-testid="label-maxLabels"]').should(
      "have.text",
      "Maximale Anzahl von Etiketten"
    );
    cy.get(".right button").should("have.text", "Analysieren Sie");
  });
});

/**
 * Tests if the drag and drop (upload) component works correctly
 */
describe("Drag and Drop", () => {
  //Before each test, we test we can access the page
  beforeEach(() => {
    cy.visit("http://localhost:7070");
  });

  // it("should upload a file using Dragger from Ant Design", () => {
  //   cy.fixture("image.png", "base64").then((fileContent) => {
  //     cy.get(".ant-upload input").attachFile(
  //       {
  //         fileContent,
  //         fileName: "image.png",
  //         mimeType: "image/png",
  //         encoding: "base64",
  //       },
  //       {
  //         subjectType: "drag-n-drop",
  //       }
  //     );
  //   });
  //   cy.get(".ant-upload-list-item-container", { timeout: 10000 }).should(
  //     "exist"
  //   );
  // });
});

/**
 * Tests if the results are correctly displayed
 */
//TODO: Add tests for displaying the results
describe("Results Section", () => {
  it("should display the results table", () => {
    cy.visit("http://localhost:7070");
  });
});
