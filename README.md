# Takehome Interview Practice App

This is a basic React app for practice interviews. In the interview, you'll be asked to add a new feature to the application.

## Preparing for the interview
1. Fork this repo and clone your fork to your computer.
1. Make sure that `npm install` and `npm start` work, and that you can view and edit the site.
1. Familiarize yourself with the application.
1. Think about the possible features below and how you'd implement them. (Don't code them up yet.)

## During the interview
1. The interviewer will ask you to walk them through the app and answer your questions about it. This will make sure you both agree on how the application works.
1. The interviewer will tell you a feature to implement. Ask lots of questions and make sure you understand what you need to build.
1. Before writing code, come up with a plan. Some things to think about:
    
    - What parts of the app need to be refactored?
    - What will you need to create from scratch?
    - Where will you need to add props?
    - Where will you need to add state? What is the best data type for your state?
    - Where will you need to add user interactions? How do these interactions work with your state?
    - What unexpected states or other edge cases will you need to handle?
    - How can you break up the work into stages? How can you test or verify your code as you go?
1. Write the code. This is a pair programming exercise, so be sure to vocalize your thoughts.

## Overview of the base application
The application is an online menu for a pizza place. It displays the items on the restaurant's menu but currently has no other functionality.

### Components
The components are rendered in the following hierarchy:
```
<App />
    <Menu />
        <MenuItem />
        <MenuItem />
        ...
        <MenuItem />
```

### Data
The menu items are pulled from `./data.js` by the `<Menu />` component. The data is a list of objects. Each object represents a menu item. Not all of the item properties are currently displayed on the site.

Each menu item also has a list of `tags`. Notice that the same tag may appear in more than one item's tag list.

## Possible features
You may be asked to build one or more of these features (or a feature not on the list).

1. **Expand / Collapse**: Add a `Show more` button on each menu item. When clicked:
    - the menu item expands (no animation necessary)
    - the user can see the item's long description and/or toppings
    - the button now says `Show less` and will collapse the item when it is cicked
    - **Bonus**: At the top of the list add a `Expand / Collapse All` button that will expand or collapse all of the items.
1. **Search**: Add a search input at the top of the menu. As the user types in the input:
    
    - the list will show only menu items whose name or short description include the search term
    - the search should be case-insensitive
    - **Bonus**: Show a "No results for {search term}" message when needed.
1. **Filter**: Create a list of **distinct** tags from the data. For each tag:
    - Add a button at the top of the list with the name of the tag as the button text
    - When the user clicks on the button, the menu should display only the items that have that tag.
    - When the user clicks on the button again, the filter should clear (display all items again)
    - If one filter is selected and the user clicks a different filter button, the menu should filter on the new button's tag.
    - **Bonus 1**: Change the button color when a filter is active.
    - **Bonus 2**: Allow the user to select multiple tags to filter. Example: If the user clicks `thick crust` and `vegetarian`, display only the items that are thick crust _and_ vegetarian.

## Tips and tricks
- **Testing and verifying**: You can use the React Dev tools to check that your state is working before you wire up buttons and user interactions.
- **Managing state**: Try to keep all of your state together and lift it as high in the app as possible (but not too high)
- **State, display, and CSS**: When do we need to use CSS to properly show a user a state change? When can we do this without CSS?




