describe("Go to profile", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("cypress-testing");
        cy.get("#name").type("newUser");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });
  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.wait(5000);
      cy.get(".gh-user-avatar").click({ force: true, multiple: true });
      cy.get("#ember51").click({ force: true });
    });
  });
  it("Then I expect to be in my profile", () => {
    cy.url().then((url) => {
      expect(url).to.contain("http://localhost:2368/ghost/#/settings/staff");
    });
  });
});

describe("Edit full name in profile", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("cypress-testing");
        cy.get("#name").type("newUser");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });
  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get(".gh-user-avatar").click({ force: true, multiple: true });
      cy.get("#ember51").click({ force: true });
    });
  });
  it("And I try to set fullname to new-name", () => {
    cy.get("#user-name").clear();
    cy.get("#user-name").type("new-name");
  });
  it("I expect new-name is my fullname profile", () => {
    cy.get("#user-name").should("have.value", "new-name");
  });
});

describe("Edit slug in profile", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("cypress-testing");
        cy.get("#name").type("newUser");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });
  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get(".gh-user-avatar").click({ force: true, multiple: true });
      cy.get("#ember51").click({ force: true });
    });
  });
  it("And I try to set slug to new-slug", () => {
    cy.get("#user-slug").clear();
    cy.get("#user-slug").type("new-slug");
  });
  it("I expect new-slug is my slug profile", () => {
    cy.get("#user-slug").should("have.value", "new-slug");
  });
});

describe("Edit location in profile", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("cypress-testing");
        cy.get("#name").type("newUser");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });
  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get(".gh-user-avatar").click({ force: true, multiple: true });
      cy.get("#ember51").click({ force: true });
    });
  });
  it("And I try to set location to new-location", () => {
    cy.get("#user-location").clear();
    cy.get("#user-location").type("new-location");
  });
  it("I expect new-location is my location profile", () => {
    cy.get("#user-location").should("have.value", "new-location");
  });
});

describe("Edit Bio in profile", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("cypress-testing");
        cy.get("#name").type("newUser");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });
  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get(".gh-user-avatar").click({ force: true, multiple: true });
      cy.get("#ember51").click({ force: true });
    });
  });
  it("And I try to set bio to new-bio", () => {
    cy.get("#user-bio").clear();
    cy.get("#user-bio").type("new-bio");
  });
  it("I expect new-bio is my bio profile", () => {
    cy.get("#user-bio").should("have.value", "new-bio");
  });
});
