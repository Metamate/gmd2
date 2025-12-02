---
comments: true
_disableTocFilter: false
---

# CSS

In this session, we'll take our first steps into the world of CSS – Cascading Style Sheets. You'll learn how CSS helps us style and design web pages, from changing colors and fonts to adjusting alignments and spacing. Let's make the web look good!

## Preparation :books:

### CSS Basics

In the first video, we'll explore the different ways you can apply CSS to your HTML, understand how inheritance works, and get familiar with some of the most common styling properties.

<iframe class="video" src="https://drive.google.com/file/d/1XvC8BMbY9lt2ZNJ-97nsWfANW2v4p-zW/preview" allow="autoplay" allowfullscreen></iframe>

You can read about the concepts in depth here:

[Adding CSS to our document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#adding_css_to_our_document){:target="\_blank"} <br>
[Using common selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#using_common_selectors){:target="\_blank"} <br>
[Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Inheritance){:target="\_blank"} <br>

### Colors

Next we'll look at how to work with colors in CSS. We'll cover three popular color formats: RGB, hex and HSL. You'll also get a quick intro to hexadecimal numbers along the way.

<iframe class="video" src="https://drive.google.com/file/d/1fimNcpaDhcWL5bdxnCWXbR1ozwEkdjKD/preview" allow="autoplay" allowfullscreen></iframe>

If you want to know more, web.dev has [a good resource on colors](https://web.dev/learn/css/color){:target="\_blank"}. <br>

### The Box Model

Let's explore the CSS box model — a core concept for understanding how elements are sized and spaced on a web page. You'll learn how content, padding, borders, and margins all fit together to shape every element on the screen.

<iframe class="video" src="https://drive.google.com/file/d/1jcLiZk18M21mjsUDfqBDMOYZrwh8Qunv/preview" allow="autoplay" allowfullscreen></iframe>

Web.dev also has [a good resource on the box model](https://web.dev/learn/css/box-model){:target="\_blank"} that you can check out.

### CSS Selectors & Specificity

Lastly, we'll look at CSS selectors and how they let you target specific elements on your page. You'll also learn about specificity and the cascade — the rules CSS uses to decide which styles win when there's a conflict.

<iframe class="video" src="https://drive.google.com/file/d/1a9kIszPbCU5wx7ZjStNavVKGzGz1o3Ir/preview" allow="autoplay" allowfullscreen></iframe>

The concepts are also covered on web.dev:

[Selectors](https://web.dev/learn/css/selectors){:target="\_blank"} <br>
[The Cascade](https://web.dev/learn/css/the-cascade){:target="\_blank"} <br>
[Specificity](https://web.dev/learn/css/specificity){:target="\_blank"} <br>

## Exercises

### Even More You

Make your personal website from last session truly your own by styling it:

1. Set a background color for the entire page.
2. Change the text color of specific elements (e.g., headings or paragraphs).
3. Choose a different font by updating the font-family and adjusting the font-size for better readability.
4. Center some of the content, such as the main heading or introduction text.
5. Style the included tables.
6. Include margin, padding and borders on relevant boxes.
7. Use custom properties for your websites colors.
8. Come up with more styling improvements to your site!
9. Share your updated work in the comment section below.

### Box Sizing

The HTML below contains two boxes. Change the width of the second box to match that of the first box.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Box Sizing</title>
        <style>
            .box {
                text-align: center;
                border: 10px solid;
                padding: 50px;
                margin: 20px;
                width: 400px;
            }

            .alternate {
                box-sizing: border-box;
            }

        </style>
    </head>
    <body>
        <div class="box">I use content-box box-sizing</div>
        <div class="box alternate">I use border-box box-sizing</div>
    </body>
</html>
```

??? note "Solution"
    ```css
    .alternate {
        box-sizing: border-box;
        width: 520px;
    }
    ```

### Sizing Units

CSS gives you many ways to size elements. The most common are:

- `px` → absolute size in pixels
- `%` → relative to the size of the parent element
- `rem` → relative to the font size of the root (html)
- `em` → relative to the font size of the element

Experiment with the website below, answering the following questions:

- What happens when you change the font size for the html element? Why?
- Change the width of the inner box to 200 pixels. How is this different from 50% here?
- Change the font-size unit of the inner element from rem to em. What happens? Why?
- Which unit scales when resizing the browser window?
- Why might rem be better for consistent typography across the site?
- What would be the issue of using pixel units across the site?
- When would you use pixels instead of relative units?

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            html {
                font-size: 16px;
            }

            .outer {
                width: 400px;
                height: 200px;
                background-color: lightblue;
                padding: 20px;
                font-size: 2em; 
            }

            .inner {
                width: 50%;
                height: 50%; 
                background-color: coral;
                font-size: 2rem; 
            }
        </style>
    </head>
    <body>
        <div class="outer">
            <div class="inner">Inner box</div>
        </div>
    </body>
</html>
```

### A Taste For Selectors

To practice your CSS selector skills, try out [CSS Diner](https://flukeout.github.io/){:target="\_blank"} — a game where you have to select the right elements on a dining table using CSS!

### A Navigation Bar

A navigation bar should be a list of links! Build a horizontal navigation bar using the list below. Style the bar with background color, spacing, and hover effects, and create a style that highlights the active page link.

```html
<nav>
    <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

Here is an example of what the navigation bar could look like:

<img style="display: block; margin: auto;" src="https://github.com/KasperKnop/WEB1/blob/main/resources/navbar.png?raw=true">

It might be worth noting that you can use the `display` property to set whether an element is treated as a block or inline box. List items do not have markers when they are treated as inline elements.

??? note "Example Solution"
    ```css
    nav {
        text-align: center;
        font-family: sans-serif;
        font-weight: bold;
        background: #2196f3;
        padding-block: 1rem;
    }

    nav ul {
        margin: 0;
        padding: 0;
    }

    nav li {
        display: inline;
        margin: 0;
        padding: 0;
    }

    nav a {
        text-decoration: none;
        color: white;
        padding: 1rem;
    }

    nav a:hover {
        background: #1976d275;
    }

    nav a.active {
        background: #1976d2;
    }
    ```

### CSS Zen Garden

In this exercise, you'll use CSS to redesign the [CSS Zen Garden](https://csszengarden.com/){:target="\_blank"} webpage. [The HTML](https://csszengarden.com/examples/index){:target="\_blank"} stays the same — your task is to transform the look entirely through styling. We haven't covered everything yet (like layout techniques), so don't worry if your version isn't as elaborate as the examples on the site. Focus on practicing what you know and exploring what's possible with CSS!

When you're done, host your site and share the link in the comment section below!

### Nice Work

Take a few minutes to browse the work of your classmates. Leave a comment if something catches your attention :slight_smile:
