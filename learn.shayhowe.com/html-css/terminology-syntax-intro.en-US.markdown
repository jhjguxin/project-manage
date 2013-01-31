###### LESSON 1

### Terminology, Syntax, & Introduction

Before beginning our journey to learn HTML and CSS it is important to understand the differences between the two languages, their syntax, and some common terminology.

As an overview, **HTML** is a hyper text markup language created to give content structure and meaning. **CSS**, also known as cascading style sheets, is a presentation language created to give content style and appearance.

To put this into laymen terms, HTML determines the structure and meaning of content on a web page while CSS determines the style and appearance of this content. The two languages are independent of one another. CSS should not reside within an HTML document and vice versa.

Taking this concept a bit further, the HTML `p` element is used to display a paragraph of text on a web page. The `p` element is specifically used here as it is provides the most value for the content, thus being the most semantic element. CSS then uses a type selector of p which can determine the color, font size, font weight, and other stylistic properties of the paragraph. More on this to come.

### Common HTML Terms

When getting started with HTML you are likely to hear new, and often strange, terms. Over time you will become more and more familiar with all of them but three terms you should learn today include tags, elements, and attributes.

#### Elements

Elements are designators that define objects within a page, including structure and content. Some of the more popular elements include `h1` through `h6`, `p`, `a`, `div`, `span`, `strong`, and `em`.

```html
<a>
```

#### Tags

Elements are often made of multiple sets of tags, identified as opening and closing tags. **Opening tags** mark the beginning of an element, such as `<div>`. **Closing tags** mark the end of an element and begin with a forward slash, such as `</div>`.

```html
<a>...</a>
```

#### Attributes

Attributes are properties used to provide additional instruction to given elements. More commonly, attributes are used to assign an `id`, `class`, or `title` to an element, to give media elements a source (`src`), or to provide a hyperlink reference (`href`).


```html
<a href="http://www.shayhowe.com/">Shay Howe</a>
```

<pre>
Common HTML Terms Example

[Shay Howe](http://www.shayhowe.com/)
</pre>

### HTML Document Structure & Syntax

All HTML documents have a required structure that includes the following declaration and tags: `doctype`, `html`, `head`, and `body`.

The `doctype` declaration is used to instruct web browsers which version of HTML is being used and is placed at the very beginning of the HTML document. Following the `doctype` declaration, `html` tags signify the beginning and end of the document.

The `head of` the document is used to outline any `meta` data, the document `title`, and links to any external files. Any context included within the `head` tags is not visible within the actual web page itself. All of the content visible within the web page will fall within the `body` tags.

A general HTML document structure looks like the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a website.</p>
  </body>
</html>
```

### Common CSS Terms

In addition to HTML terms, there are some common **CSS terms** you will want to familiarize yourself with. The more you work with HTML and CSS the more these terms will become second nature.

#### Selectors

A selector determines exactly which element, or elements, the corresponding styles will be applied. Selectors can include a combination of different IDs, classes, types, and other attributes – all depending on how specific you wish to be. Selectors can be identified as everything that comes before the first curly brace, `{`.

```css
p { ... }
```

#### Properties

A property determines the style that will be applied to an element. Properties can be identified as the text coming immediately before a colon. There are an abundance number of properties you can use, and new ones are continually being added.

```css
p {
  color: #ff0;
  font-size: 16px;
}
```

#### Values

A value determines the behavior of a property. Values can be identified as the text in-between the colon and semicolon.

```css
p {
  color: #ff0;
  font-size: 16px;
}
```

### CSS Structure & Syntax

CSS works by using selectors to apply styles to HTML elements. All CSS styles cascade, allowing different styles to be inherited by multiple elements.

As an example, it is possible to set one style for all of the text on a page to be of a specific color, size, and weight. Then by using a more targeted selector that style can be overwritten for a unique element.

```code
Selector -> p {
  Declaration-> color: #ff0;
                font-size: 16px;
              }    |        |
                Property    Value
```

The following syntax demonstrates how styles would be applied to every paragraph.

```css
p {
  color: #ff0;
  font-size: 16px;
}
```

#### Long vs. Short Hand

In CSS there are multiple different ways to declare values for a property. With long hand CSS you stack multiple declarations, one after the other for each property and value. With short hand CSS you use one property and list multiple values. It is best to use short hand CSS as it requires less code. Not all properties support short hand CSS so make sure you are using the correct property and value structure.

```css
/* Long Hand */
p {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
/* Short Hand */
p {
  padding: 10px 20px;
}
/* Short Hand */
p {
  padding: 10px;
}
```

#### Comments within HTML & CSS
<pre>

HTML and CSS give you the ability to leave comments within the code. These comments can be used to help with organization, set reminders, and manage code more effectively. Comments become especially useful when there are multiple people working on the same code. Any content wrapped within comments will not be rendered on the page.

HTML comments wrap the content starting with <!-- and end with -->. CSS comments wrap the content starting with /* and end with */.
</pre>

### Selectors

Selectors, as mentioned earlier, are the determining factor as to which elements are to be stylized. In so, it is important to fully understand how to use selectors and how they can be leveraged. Some of the most common selectors include elements, IDs, and classes, or some combination of the three.

#### Type Selectors

Type selectors are the most basic selector. Simply enough, elements without any necessary attributes are targeted to apply styles. Type selectors are preferred whenever possible as they require less code and are easy to manage.

```html
<p>...</p>
```

```css
p { ... }
```

#### Class Selectors

Class selectors allow you to apply the same style to an array of elements by giving them all the same class attribute. Classes are denoted in CSS by identifying the class with a leading period. It is permissible to use the same class attribute on multiple elements on a page.

```html
<div class="awesome">...</div>
```

```css
.awesome { ... }
```

#### ID Selectors

ID selectors are similar to class selectors however they are used to target only one unique element at a time. Instead of using the class attribute, IDs naturally use the ID attribute. In place of a period, as with classes, IDs are denoted by identifying the ID with a leading hash sign. IDs are only allowed to be used once per page and should ideally be reserved for significant elements.

```html
<div id="shayhowe">...</div>
```

```css
#shayhowe { ... }
```

#### Combining Selectors

A beauty of CSS is the ability to combine selectors and inherit styles. This allows you to start with a more generic selector and work your way to being more specific as necessary. In addition, you can combine different selectors to be as specific as you wish.

```css
ul#social li {
  padding: 0 3px;
}
ul#social li a {
  height: 17px;
  width: 16px;
}
ul#social li.tumblr a {
  background: url('tumblr.png') 0 0 no-repeat;
}
```

#### Additional Selectors

Selectors can be extremely powerful and the selectors outlined above are only the beginning. Many more [advanced selectors](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/) exist and are readily available. Before dropping classes or IDs on random elements check and see if there might be a better selector to do the job for you. It is also worth mentioning that not all advance selectors work in every browser, particularly with new selectors introduced in CSS3. If a selector doesn’t seem to be working properly check its browser support.

### Referencing CSS

Once content is in place you may begin to style the HTML with CSS. There are a handful of different ways to reference CSS, some of which are better than others.

The best practice for referencing CSS is to include all of your styles within a single external stylesheet, referenced within the heading of a page. Using an external stylesheet allows you to use the same styles across an entire website and quickly make changes site wide.

Other options include internal and inline styles. These options are generally frowned upon as they make updating websites cumbersome and unwieldy.

```html
<!-- External CSS File -->
<link rel="stylesheet" href="file.css">
<!-- Internal CSS -->
<style type="text/css">
p {
  color: #f60;
  font-size: 16px;
}
</style>
<!-- Inline CSS -->
<p style="color: #f60; font-size: 16px;">Lorem ipsum dolor sit amet...</p>
```

#### Using External CSS Stylesheets

As mentioned above, the best way to reference CSS is with an extrenal stylesheet. Doing so allows you to use one set of styles across an entire website. Making changes to the style of a website becomes painless, and users download less data overall to properly render the styles.

Within the `head` of the HTML document, the `link` element is used to define the relationship between the HTML file and the CSS file. Since you are linking to CSS the `rel` attribute with a value of `stylesheet` is used to specify the relationship. Furthermore, the `href` attribute is used to identify the location, or path, of the CSS file.

In order for the CSS to render, the path of the `href` attribute value must directly correlate to where the CSS file is stored. In the example above the `file.css` is stored within the root directory, the same location as the HTML file.

Should the CSS be within a subdirectory, the `href` attribute value would need to correlate this path accordingly. For example, if the `file.css` is stored within a subdirectory call `styles` the `href` attribute value would be `styles/file.css`, using a forward shash to indicate different directories.

### Reset

By default every web browser has it’s own interpretation on how different elements are to be stylized. How Chrome decides to render an input field is likely going to be much different than how Internet Explorer renders an input field. To combat for **cross browser compatibility** CSS resets have become widely used.

  **Cross Browser Compatibility & Testing**

  As mentioned, different browsers render pages in different ways. Its important to recognize the value in cross browser compatibility and testing. Websites don’t need to look the same in every browser but they should be close. What browsers you wish to support and to what degree is a decisions you will need to make in accordance with what is best for your website.
  
CSS resets include a handful of rule sets that take every common HTML element and scale them down to one unified style. These resets involve removing any sizing, margins, paddings, or additional styles. Resets need to be the very first CSS styles to be rendered to ensure that all the styles there after are being applied to the skeleton of a page.

There are a ton of different resets available to use, all of which have their own forte. My personal favorite is [Eric Meyers reset](http://meyerweb.com/eric/tools/css/reset/), which has been adapted to include a reset for the new HTML5 elements. Eric’s reset is short and to the point, but feel free to research your own resets and find what you’re comfortable using.

  ## Code Validation

  As proficient as we all are, we do make mistakes. Thankfully when writing HTML and CSS we have a validator that can check our work. The W3C has built both [HTML](http://validator.w3.org/) and [CSS](http://jigsaw.w3.org/css-validator/) validators that will scan your code looking for mistakes. Validating your code not only helps it render properly across all browsers, it also teaches you the best practices for writing code.
  
### Resources & Links

* [Common HTML Terms](http://www.scriptingmaster.com/html/HTML-terms-glossary.asp) via Scripting Master
* [CSS Glossary](http://www.codestyle.org/css/Glossary.shtml) via Code Style
* [Taming Advanced CSS Selectors](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/) via Smashing Magazine
* [CSS Tools: Reset CSS](http://meyerweb.com/eric/tools/css/reset/) via Eric Meyer
* [An Intro to HTML & CSS](http://www.shayhowe.com/web-design/intro-to-html-css/) via Shay Howe
