// Challenge 2:
// Replace the parameters below according to your preference.

// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("superhero");

// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit("blueberry");

// light, dark
favouriteMode("dark");

// sharp, soft, round
favouriteEdgeStyle("round");

////////////////////////////////////
// IGONE THE CODE BELOW THIS LINE //
////////////////////////////////////

function setProp(prop, value) {
  document.documentElement.style.setProperty(prop, value);
}

function favouriteEdgeStyle(style) {
  setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
  if (font) {
    setProp("--font", "var(--" + font + ")");
  }
}

function favouriteMode(mode) {
  if (mode === "light" || !mode) {
    setProp("--background", "var(--light)");
    setProp("--text", "var(--dark)");
  } else if (mode === "dark") {
    setProp("--background", "var(--dark)");
    setProp("--text", "var(--light)");
  }
}

function favouriteFruit(theme) {
  if (theme === "pastel") {
    setProp("--light", "#f2f6c3");
    setProp("--dark", "#68c4af");
  } else if (theme === "muted") {
    setProp("--light", "#4c5b64");
    setProp("--dark", "#45241c");
  } else if (theme === "love") {
    setProp("--light", "#f06836");
    setProp("--dark", "#ba0001");
  } else if (theme === "sky") {
    setProp("--light", "#99ccff");
    setProp("--dark", "#3366ff");
  } else if (theme === "forrest") {
    setProp("--light", "#91B247");
    setProp("--dark", "#597C2B");
  } else if (theme === "shiny") {
    setProp("--light", "#2e9afe");
    setProp("--dark", "#02197c");
  } else if (theme === "banana") {
    setProp("--light", "#fbec5d");
    setProp("--dark", "#6b3e26");
  } else if (theme === "watermelon") {
    setProp("--light", "#75b855");
    setProp("--dark", "#ad3838");
  } else if (theme === "tomato") {
    setProp("--light", "#d62e2e");
    setProp("--dark", "#600000");
  } else if (theme === "avocado") {
    setProp("--light", "#6b8c21");
    setProp("--dark", "#704012");
  } else if (theme === "orange") {
    setProp("--light", "#ffca16");
    setProp("--dark", "#f97300");
  } else if (theme === "blueberry") {
    setProp("--light", "#41a8f9");
    setProp("--dark", "#064490");
  } else {
    setProp("--light", "#f5f5f5");
    setProp("--dark", "#222222");
  }
}

/**
 * ### JavaScript Code Explanation

The provided JavaScript code dynamically sets CSS variables based on the user's preferences for movie genre, fruit, mode, and edge style. It utilizes several functions to achieve this, which interact with CSS custom properties. Below is a detailed explanation of each component of the code:

#### Function: `setProp`
```javascript
function setProp(prop, value) {
  document.documentElement.style.setProperty(prop, value);
}
```
- **Purpose**: This function sets a CSS variable (`prop`) to a specific value (`value`) on the root element (`<html>`).
- **Parameters**:
  - `prop`: The name of the CSS variable to set (e.g., `--background`, `--font`).
  - `value`: The value to assign to the CSS variable.

#### Function: `favouriteEdgeStyle`
```javascript
function favouriteEdgeStyle(style) {
  setProp("--image", "var(--" + style + ")");
}
```
- **Purpose**: Sets the CSS variable `--image` to the chosen edge style.
- **Parameters**:
  - `style`: The preferred edge style (e.g., `round`, `sharp`).

#### Function: `favouriteMovieGenre`
```javascript
function favouriteMovieGenre(font) {
  if (font) {
    setProp("--font", "var(--" + font + ")");
  }
}
```
- **Purpose**: Sets the CSS variable `--font` to the chosen movie genre.
- **Parameters**:
  - `font`: The preferred movie genre (e.g., `superhero`, `romantic`).

#### Function: `favouriteMode`
```javascript
function favouriteMode(mode) {
  if (mode === "light" || !mode) {
    setProp("--background", "var(--light)");
    setProp("--text", "var(--dark)");
  } else if (mode === "dark") {
    setProp("--background", "var(--dark)");
    setProp("--text", "var(--light)");
  }
}
```
- **Purpose**: Sets the CSS variables for background and text color based on the chosen mode.
- **Parameters**:
  - `mode`: The preferred mode (`light` or `dark`).

#### Function: `favouriteFruit`
```javascript
function favouriteFruit(theme) {
  if (theme === "pastel") {
    setProp("--light", "#f2f6c3");
    setProp("--dark", "#68c4af");
  } else if (theme === "muted") {
    setProp("--light", "#4c5b64");
    setProp("--dark", "#45241c");
  } else if (theme === "love") {
    setProp("--light", "#f06836");
    setProp("--dark", "#ba0001");
  } else if (theme === "sky") {
    setProp("--light", "#99ccff");
    setProp("--dark", "#3366ff");
  } else if (theme === "forrest") {
    setProp("--light", "#91B247");
    setProp("--dark", "#597C2B");
  } else if (theme === "shiny") {
    setProp("--light", "#2e9afe");
    setProp("--dark", "#02197c");
  } else if (theme === "banana") {
    setProp("--light", "#fbec5d");
    setProp("--dark", "#6b3e26");
  } else if (theme === "watermelon") {
    setProp("--light", "#75b855");
    setProp("--dark", "#ad3838");
  } else if (theme === "tomato") {
    setProp("--light", "#d62e2e");
    setProp("--dark", "#600000");
  } else if (theme === "avocado") {
    setProp("--light", "#6b8c21");
    setProp("--dark", "#704012");
  } else if (theme === "orange") {
    setProp("--light", "#ffca16");
    setProp("--dark", "#f97300");
  } else if (theme === "blueberry") {
    setProp("--light", "#41a8f9");
    setProp("--dark", "#064490");
  } else {
    setProp("--light", "#f5f5f5");
    setProp("--dark", "#222222");
  }
}
```
- **Purpose**: Sets the CSS variables for light and dark colors based on the chosen fruit theme.
- **Parameters**:
  - `theme`: The preferred fruit theme (e.g., `blueberry`, `tomato`).

### Explanation of Provided Parameters
```javascript
favouriteMovieGenre("superhero");
favouriteFruit("blueberry");
favouriteMode("dark");
favouriteEdgeStyle("round");
```
- **`favouriteMovieGenre("superhero")`**: Sets the movie genre preference to `superhero`, which affects the `--font` CSS variable.
- **`favouriteFruit("blueberry")`**: Sets the fruit theme to `blueberry`, which affects the `--light` and `--dark` CSS variables.
- **`favouriteMode("dark")`**: Sets the mode to `dark`, affecting the `--background` and `--text` CSS variables.
- **`favouriteEdgeStyle("round")`**: Sets the edge style preference to `round`, affecting the `--image` CSS variable.

This code snippet dynamically updates the webpage's styles based on user preferences using CSS variables. These preferences include visual themes, edge styles, and text/background color modes, enhancing the page's customization capabilities.
 */