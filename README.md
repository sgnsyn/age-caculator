# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Using data-attribute in html, css, and javascript to display error different errors smoothly.

```html
<div class="label-wrapper" id="day-wrapper" data-error="no"></div>
```

```css
#day-wrapper[data-error="yes"] input {
  color: var(--Light-red);
}
```

```js
if (error_message.dayErr) dayWrapper.dataset.error = "yes";
```

### Useful resources

- [ resource 1]CSS Style with Data Attributes - This youtube video helped me on using data-attribute in css
- [ resource 2]How to use the DATA attribute with JavaScript, HTML and CSS.- This youtube video helped me on using data-attribute in js

## Author

- Frontend Mentor - [@sgnsyn](https://www.frontendmentor.io/profile/sgnsyn)
- GitHub - [@sgnsyn](https://github.com/sgnsyn)
