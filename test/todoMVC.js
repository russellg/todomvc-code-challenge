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
      .click("link text", "Polymer")
      .waitForElementVisible(".todoapp", "Wait for Todo page to load")
      .setValue(
        "input[id=new-todo]",
        "Write automated test" + browser.Keys.ENTER
      )
      .waitForElementVisible(
        "label[class='style-scope td-item']",
        "1st todo item has been added"
      )
      .pause(3000)
      .expect.element("label[class='style-scope td-item']")
      .text.to.contain("Write automated test");
    browser
      .setValue(
        "input[id=new-todo]",
        "And now the challenge" + browser.Keys.ENTER
      )
      .waitForElementVisible(
        "label[class='style-scope td-item']",
        "2nd todo item has been added"
      )
      .pause(3000);
    browser.expect
      .element(
        "ul[class='todo-list style-scope td-todos'] li[class='style-scope td-todos']:nth-of-type(2)"
      )
      .text.to.contain("And now the challenge");
  }
};
