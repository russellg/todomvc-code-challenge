module.exports = {
  "TodoMVC Coding Challenge - Polymer"(browser) {
    browser
      .url("http://todomvc.com")
      .waitForElementVisible(
        ".js-app-list",
        1000,
        "Open the TodoMVC.com homepage"
      )
      .waitForElementVisible(
        "a[data-source='http://polymer-project.org']",
        "Locate and click the Polymer Link"
      )
      .click("link text", "Polymer");
  }
};
