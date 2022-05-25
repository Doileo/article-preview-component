# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/responsive-article-preview-component-using-flexbox-utility-classes-7VYn6tZ2rT)
- Live Site URL: [Add live site URL here](https://doileo.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Completing this project taught me how to use the share icon and display the social media icons that may be shared.
Here are some code snippets for this challenging part of the project:

```html
<div id="active" class="component-social-platforms active-state">
  <p class="share-text text-grayish-blue">Share</p>
  <img class="social-platform" src="./images/icon-facebook.svg" alt="Facebook">
  <img class="social-platform" src="./images/icon-twitter.svg" alt="Twitter">
  <img class="social-platform" src="./images/icon-pinterest.svg" alt="Pinterest">
  <div class="component-share-icon-active">
    <img id="share-icon-2" src="./images/share-solid.svg" alt="A share-icon">
  </div>
</div>
```
```js
const shareIcon = document.getElementById("share-icon");
    
const active = document.getElementById("active");
const shareIcon2  = document.getElementById("share-icon-2");

shareIcon.addEventListener("click", () => {
    active.classList.toggle("active-state");
})

shareIcon2.addEventListener("click", () => {
    active.classList.toggle("active-state");
});
```

### Continued development

The sharing icon for the social media icons is something I'd like to keep using depending on the projects.
Another crucial stage, in my opinion, is the project's meticulous planning. I'll provide some resources that I found useful in the section below.

### Useful resources

- [Resource 1](https://bradfrost.com/blog/post/atomic-web-design/) - This helped me for understanding how better to plan the project details. I really liked this approach and will use it going forward.

## Author

- Website - [Doina](https://doileo.github.io/article-preview-component/)
- Frontend Mentor - [@Doileo](https://www.frontendmentor.io/profile/Doileo)
- Twitter - [@DLeovchin](https://twitter.com/DLeovchin)

## Acknowledgments

I'd like to mention that I got some inspiration from Andrea's solution for the shareable feature of the project. Here's the live site (https://andrea-everett.github.io/Article-Preview/)

