# todomvc-code-challenge

Automated website interaction with the Polymer Todo App. The test satisfies the goals of the coding challenge:

- Load the [https://todomvc.com/](https://todomvc.com/)
- Click the Polymer link
- Add two Todo items
- Edit the content of the second Todo item

Please note: I have added some pauses between some actions in the test. I would not normally do this (unless there was a technical reason to do so). In this case it is just to show each action of the coding challenge.

## Prerequisites

- Please ensure NodeJS is installed: [https://nodejs.org/en/](https://nodejs.org/en/)
- Test Runner has been configured to use the Firefox web browser: [https://www.mozilla.org/en-US/firefox/new/](https://www.mozilla.org/en-US/firefox/new/)

## Tools & Framework

- To track my progress I used git and pushed to [https://github.com/](https://github.com/) for ease of download.
- I used [Visual Studio Code](https://code.visualstudio.com) as my editor and utilised the inbuilt bash terminal
- I am most familiar with Javascript and NodeJS so I used [NightwatchJS](https://nightwatchjs.org/) to automate the coding challenge

## Starting the Test

- Clone the project: `git clone https://github.com/russellg/todomvc-code-challenge.git`
- Ensure you are in the project directory on your local machine and type `npm install` from your command line to download the NPM dependencies (Nightwatch & Selenium Server)
- From your command line, type `npm test` to run the test file. The Firefox browser will open. The command line will output the tests being performed.

## Challenges

The hardest part of this challenge was editing the second Todo item. After double clicking the todo item to edit it, the Polymer Framework would change two elements styles (I have removed unnecessary tags):

```html
  <li is="td-item" class="style-scope td-todos"> <!-- On double click, the class name changes to: "style-scope td-todos editing" -->
    <div class="style-scope td-item"> <!-- On double click, the style is updated to style="display: none;" -->
      <input type="checkbox" class="toggle style-scope td-item" /><label
        class="style-scope td-item"
        >2nd item</label
      ><button class="destroy style-scope td-item"></button>
    </div>
    <input is="td-input" id="edit" class="edit style-scope td-item" style="display: none;"> <!-- On double click, style="display: none;" would update to: style="" -->
</ul>
```
