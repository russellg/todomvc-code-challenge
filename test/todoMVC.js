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
      .waitForElementVisible(".todoapp", "Wait for Todo page to load");
    browser.pause(3000);
    browser
      .setValue(
        "input[id=new-todo]",
        "Write automated test" + browser.Keys.ENTER
      )
      .waitForElementVisible(
        "label[class='style-scope td-item']",
        "1st todo item has been added"
      )
      .expect.element("label[class='style-scope td-item']")
      .text.to.contain("Write automated test");
    browser.pause(3000);
    browser
      .setValue(
        "input[id=new-todo]",
        "And now the challenge" + browser.Keys.ENTER
      )
      .waitForElementVisible(
        "label[class='style-scope td-item']",
        "2nd todo item has been added"
      );
    browser.expect
      .element(
        "ul[class='todo-list style-scope td-todos'] li[class='style-scope td-todos']:nth-of-type(2)"
      )
      .text.to.contain("And now the challenge");
    browser.pause(3000);
    browser.moveToElement(
      "ul[class='todo-list style-scope td-todos'] li[class='style-scope td-todos']:nth-of-type(2)",
      100,
      20
    );
    browser
      .doubleClick()
      .pause(3000)
      .setValue(
        "li[class='style-scope td-todos editing'] input[class='edit style-scope td-item']",
        [" is complete!", browser.Keys.ENTER]
      );
    browser.expect
      .element(
        "ul[class='todo-list style-scope td-todos'] li[class='style-scope td-todos']:nth-of-type(2)"
      )
      .text.to.contain("And now the challenge is complete!");
    browser.waitForElementVisible(
      "ul[class='todo-list style-scope td-todos'] li[class='style-scope td-todos']:nth-of-type(2)",
      "2nd todo item has been edited"
    );
    browser.pause(10000);
  }
};
