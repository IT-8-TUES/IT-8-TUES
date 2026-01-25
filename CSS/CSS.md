# CSS Basics

## 🎨 CSS Fundamentals & Selectors

Selectors determine which HTML elements receive styles.

- Element Selector (p): Targets every instance of a specific tag across the entire page.
- ID Selector (#id): Targets a single, unique element; IDs should only be used once per page.
- Class Selector (.class): Targets any number of elements sharing the same class name.
- :nth-child(n): A pseudo-class used to target an element based on its position within a parent container (e.g., the 3rd item).
- :hover: A pseudo-class that triggers styles only when the user's cursor is over the element.

## 📦 The Box Model & Dimensions

Every element in CSS is a rectangular box. These properties control the size and spacing of those boxes.

- width & height: Set the horizontal and vertical size of the content.
- max-width: Sets a boundary to prevent elements from becoming too wide on large screens.
- margin: Creates transparent space outside the element's border.
- padding: Creates space inside the element, between the content and the border.
- border: A shorthand property to set the width, style (solid, dashed), and color of the edge.
- border-radius: Rounds the corners of the element's outer border.
- box-sizing: border-box: A crucial setting that ensures padding and borders are included in the total width/height, making layouts much easier to manage.

## 🔡 Typography & Visuals

These properties control the "look and feel" of your text and UI elements.

- color: Sets the text color (often using rgba for transparency support).
- background-color: Sets the color of the space behind the content.
- font-size: Controls text size. Using rem (root em) is preferred for adaptive, accessible designs.
- font-weight: Adjusts the thickness of the text (e.g., bold, bolder, 400, 700).
- font-style: Primarily used to make text italic.
- font-family: Defines the typeface or a stack of backup fonts.
- opacity: Sets the transparency level of the entire element (from 0 to 1).

## ⚡ Flexbox Layout

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

For the Parent (Container)

- display: flex: Activates the flex context for all direct children.
- flex-direction: Defines the main axis (usually row or column).
- flex-wrap: Allows items to move to a new line if there isn't enough space.
- justify-content: Aligns items along the main axis (e.g., center, space-between).
- align-items: Aligns items along the cross axis (perpendicular to the main axis).

For the Children (Items)

- flex-grow: Dictates how much an item should grow relative to others to fill extra space.
- align-self: Allows a single item to override the container's align-items setting.
