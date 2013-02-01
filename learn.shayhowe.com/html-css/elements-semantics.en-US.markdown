###### LESSON 2

### Elements & Semantics

With a basic understanding of HTML and CSS in hand it is time to dig a little deeper and see what actually assembles these two languages.

In order to start building web pages you need to learn a little about which HTML elements are used to display different types of content. You will also want to know how these different elements behave, to help ensure you achieve your desired outcome.

Additionally, once you begin writing code you want to make sure that you are doing so semantically. Writing semantic code includes keeping your code organized and making well informed decisions.

### Semantics Overview

Semantics have been mentioned a number of times thus far, so exactly what are semantics? [Semantics within HTML](http://boagworld.com/dev/semantic-code-what-why-how/) is the practice of giving content on the page meaning and structure. These semantics portray the **value** of content on a page, and are not **solely** used for styling purposes. Using semantic code provides a handful of benefits, including giving computers, screen readers, search engines, and other devices the ability to adequately read and understand web pages. Additionaly, semantic code is easier to manage and work with, knowing clearly what each piece of content is about.

### Divisions & Spans

Divisions, or divs, and spans are HTML elements that act as a container for different content. As a generic container they do not come with any overarching meaning or semantic value. Paragraphs are semantic in that when content is wrapped within a `p` element it is known as a paragraph. Divs and spans do not hold such meaning and are simply containers. Both divs and spans, however, are extremely valuable when building a website in that they give you the ability to apply targeted CSS styles.

A `div` is a block level element commonly used to identify large sections of a website, helping build the layout and design. A `span` on the other hand, is an inline element commonly used to identify smaller sections of text within a block level element, such as a paragraph.

  **Block vs. Inline Elements**

  All elements are either block or inline level elements. What’s the difference?

  **Block level** elements begin on a new line on a page and occupy the full available width. Block level elements may be nested inside one another, as well as wrap inline level elements.

  **Inline level** elements do not begin on a new line and fall into the normal flow of a document, maintaining their necessary width. Inline level elements cannot nest a block level element, however they can nest another inline level element.
  
Divs and spans can have added value when given a `class` or `id`. A `class` or `id` is typically added for styling purposes and to signify the difference between another `div` or `span`. Choosing a `class` or `id` name is where semantics can come into play. When choosing a `class` or `id` attribute value it is important to choose something that has value to the actual context of that element.

For example, if you have a `div` with an orange background that contains social media links your first inclination might be to give the `div` a class of “orange.” What happens if that orange background is later changed to blue? Having a class of “orange” no longer makes sense. A better, more semantic, choice for a class would be “social” as it pertains to the contents of the `div` not the style.

```html
<!-- div -->
<div class="social">
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
</div>
<!-- span -->
<p>Lorem ipsum dolor sit amet, <span class="tooltip">consectetur</span> elit.</p>
```

### Typography

A large amount of content online is strictly text based. Many different forms of media and context exist online, however text rules the majority. There are a number of different elements to display text on a web page within HTML. We will focus on the most popular, and more semantic, elements within this lesson. For a broader overview please see the [Typography](http://learn.shayhowe.com/html-css/typography) lesson.

#### Headings

Headings are block level elements that come in six different rankings, `h1` through `h6`, and are key identifiers for users reading a page. Headings help to quickly break up content and provide hierarchy. They are also used to help search engines index and determine the value of content on a page.

Headings should be used in the order relevant to the content. The primary heading of a page or section should be coded with `h1` and subsequent headings should use `h2` on as necessary. Headings should be reserved for true classification and not used to make text bold or big.

```html
<h1>This is a Level 1 Heading</h1>
<h2>This is a Level 2 Heading</h2>
<h3>This is a Level 3 Heading</h3>
```

  **Headings Demo**

  <h1>This is a Level 1 Heading</h1>
  <h2>This is a Level 2 Heading</h2>
  <h3>This is a Level 3 Heading</h3>
  
#### Paragraphs

Headings are often followed with supporting paragraphs. Paragraphs are defined by using the `p` block level element. Numerous paragraphs can appear one after the other, adding information to a page.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
```

  **Paragraphs Demo**
  
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  
#### Bold Text with Strong

To make text bold, and to note it as important, the `strong` inline level element is used. It is important to understand the [semantic difference](http://html5doctor.com/i-b-em-strong-element/) between `strong` and `b`, both of which will make text bold. `strong` is semantically used to denote text with a strong importance, as is mostly the case when wanting to bold text. `b` on the other hand semantically means stylistically offset, which isn’t always the best case for text deserving prominent attention. Gauge the significance of the text you are looking to set as bold and choose an element accordingly.

```html
<p>Duis in <strong>voluptate</strong> velit esse cillum.</p>
```

#### Italicize Text with Emphasis

To italicize text and place a stressed emphasis on it the `em` inline level element is used. As with strong, there are two different tags used to italicize text, each with a slightly different semantic meaning. `em` semantically means to place a stressed emphasis on text and thus is the most popular option for italicizing text. The other option is `i`, which semantically values text to be rendered in an alternate voice. Again, you will need to gauge the significance of the text you want to italicize and choose an element accordingly.

```html
<p>Quae ars <em>putanda</em> est, expeteretur si nih.</p>
```

#### Hyperlinks

One of the core elements of the internet is the hyperlink, established by using an anchor. Hyperlinks are defined using the `a` inline element however they require a source to direct the link. The `href` attribute, known as hyperlink reference, is used to set the destination of a link.

By nature the a element is an inline element, however with the introduction of HTML5, a elements now have the ability to wrap block or inline level elements. This is a break from the standard convention yet permissible to turn entire blocks of content on a page into a link.

```html
<a href="http://shayhowe.com">Shay</a>
```

##### Relative & Absolute Paths

The two most common types of links include links to other pages within a website and links to other websites. How these links are identified is by their path, also known as the value of their `href` attribute.

Links pointing to other pages within the same website should have a **relative path**, in which the domain is not in the href attribute value. Since the link is pointing to another page on the same website the href attribute value only needs to include the page being linked to, `/about.html` for example. Should the page being linked to reside within a subdirectory the `href` attribute value needs to reflect this as well. Say the `about.html` page resides within the pages directory, the relative path would then be `/pages/about.html`.

Linking to other websites outside of the current one requires an absolute path, where the href attribute value must include the full domain. A link to Google would need the href attribute value of `http://google.com`, starting with http and including the domain, `.com` in this case.

```html
<!-- Relative Path -->
<a href="/about.html">About</a>
<!-- Absolute Path -->
<a href="http://www.google.com/">Google</a>
```

##### Linking to an Email Address

Occasionally you will encounter a link to an email address. When clicked, this link opens the default email client and populates some information. At a minimum the email address where the message is being sent is populated, however other information such as a subject and body text may also be populated.

To create an email link the `href` attribute value needs to start with `mailto:` followed by the email address to where the email should be sent. To create an email link to `shay@awesome.com` the href attribute value would be `mailto:shay@awesome.com`.

Additionally, a subject and body text for the email can also be populated. To add a subject line include the `subject=` parameter following the email address. Multiple words within a subject line require spaces to be encode using `%20`. Adding body text works very similar to that of the subject, using the `body=` parameter in the `href` attribute value. Again, spaces must be encoded using `%20` and line breaks must be encoded using `%0A`.

Altogether, a link to `shay@awesome.com` with the subject of “Still Awesome” and body text of “This is awesome” would look like `mailto:shay@awesome.com?subject=Still%20Awesome&body=This%20is%20awesome`. Please notice, the first parameter requires a `?` to bind it to the email address and additional parameters require a `&` to bind them the previous parameter.

For more information on building email links, including how to add multiple email addresses, cc, and bcc parameters, please see [Joost de Valk guide](http://yoast.com/guide-mailto-links/), The Full mailto Link Syntax.

```html
<a href="mailto:shay@awesome.com?subject=Still%20Awesome&body=This%20is%20awesome">Email Me</a>
```

#### Opening Links in a New Window

One feature available with hyperlinks is the ability to determine where the link is opened once clicked. Typically links open in the same window from which they are clicked, however links may open in a new window. To trigger the action of opening a link in a new window the `target` attribute is used with a value of `_blank`. The target attribute determines where the link is displayed, and the `_blank` value specifies a new window.

```html
<a href="http://shayhowe.com/" target="_blank">Shay Howe</a>
```

#### Linking to Elements within the Same Page

Periodically you will see links that simply link to another portion of the same page. In the case of this guide, links found within the “In this Lesson” section link down the page to the appropriate section. Perhaps more commonly found online are “Back to Top” links that return users to the top of a page.

Creating an on page link is accomplished by specifying an ID on the element you wish to link to. Then, using the ID of that element in a links `href` attribute value. As an example, putting the `main` ID on the `body` element allows you to link to the top of a page using the href `value` of `#main`.

```html
<a href="#awesome">Awesome</a>
<div id="awesome">Awesome Section</div>
```

### HTML5 Structural Elements

HTML5 provides a handful of [new elements](http://dev.opera.com/articles/view/new-structural-elements-in-html5/), all of which are focused around improving semantics. Before, if you wanted to declare a block level section of a page you were likely to use a `div`. With HTML5 you have a handful of new block level elements that allow you to write more semantic code.

**Fig. 2.01**

The new HTML5 structural elements outline.

![Fig. 2.01](pr.png)

#### Header

The `header`, just as it sounds, is used to identify the heading of a page, `article`, `section`, or other segment of a page. In general, a `header` may include a heading, introduction text, or navigation. You can use more than one `header` on a page. Depending on the website, you will ideally include a `header` at the beginning of the page. Additionally, a header may reappear as the `header` of an article or section as necessary.

```html
<header>...</header>
```

  ##### Clarification on the header Element

  The `header` element should not be confused with the head or headings, `h1` through `h6`.

  The `header` element is a structural element that outlines a heading on a page, of which falls within the `body` element on a page. The `head` element is not displayed on the page and is used to outline meta data, the document title, and links to external files.

  Headings, `h1` through `h6`, are used to represent multiple levels of text headings throughout a page.
  
#### Navigation

The `nav` is a block level element used to denote a section of major navigational links on a page. Not all links should be wrapped within a `nav` element. The `nav` should be reserved for primary navigation sections including universal navigation, a table of contents, breadcrumbs, previous/next links, or other noteworthy groups of links.

Most commonly links included within the `nav` element will link to other parts of the same website or web page. Miscellaneous one off links should not be wrapped within the `nav` element, and should only use the a element.

```html
<nav>
  <ul>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a></li>
  </ul>
</nav>
```

#### Article

The `article` block level element is very similar to that of a `div` or `section` however it is specifically defined as an element which should include independent, self-contained content that may be independently distributable or reusable. Most often `article` will fall within blogs and other publishing websites as a block of published content. When deciding to use the `article` element determine if the content within the element could be replicated elsewhere without any confusion. The content within the `article` alone must make sense, and be able to be distrbuted elsewhere, such as within an RSS feed.

```html
<article>...</article>
```

#### Section

A `section` is more likely to get confused with a `div` than an `article`. As a block level element, `section` is defined to represent a generic document or application section. Where a `section` differentiates itself from a `div` is that a `section` is not to be used as a convenience for styling or scripting purposes.

That said – you can apply styles to a `section` however you shouldn’t be using a `section` aimlessly with the sole purpose of adding styles. Reserve the `section` element for large parts of a page worthy of the element.

```html
<section>...</section>
```

  ##### Deciding When to Use a section or div

  The best way to determine when to use a `section` versus a `div` is to look at the actual content at hand. If the block of content could exist as a record within a database and isn’t explicitly needed as a CSS styling hook then the `section` element is most applicable. Sections should be used to break a page up, providing a natural hierarchy, and most commonly will have a proper heading.

  A `div` on the other hand may be used to specifically tie styles to a block of content. As an example, if a couple paragraphs need to stand out above the rest of the content on on a page they should be wrapped in a `div`. That `div` then may have the proper styles applied to it, perhaps a background, border, or the alike.
  
#### Aside

To accompany the `header` and `footer` elements there is also the `aside` block level element. An `aside` defines content related to the document or section surrounding it. As with `header` and `footer` elements, the `aside` can be used multiple times per page, so long as each use is practical.

Please keep in mind that the `aside` is a block level element, in which it will appear on a new line and occupy the full width of the page or any container. If you would like to get the `aside` to appear to the right or left of a block of content you will need to `float` the `aside` element. Don’t worry about floats right now, we will learn about [floating and positioning](http://learn.shayhowe.com/html-css/box-model) content in an upcoming lesson.

```html
<aside>...</aside>
```

#### Footer

The `footer` is identical to that of the `header` however for the bottom of a page, `article`, `section`, or other segment of a page. A `footer` should not stem away from the document or `section` at hand and its context should include relative information.

#### D.R.Y. – Don’t Repeat Yourself

One principle of development is **D.R.Y.**, also known as don’t repeat yourself. Within CSS this principle can speak volumes as it is easy to continually write the same styles over and over again. Don’t. CSS was designed in a way to allow you to cascade styles and use classes so that you easily apply and inherent styles. The end goal is to write clean and light code, of which is semantic and easily managed.

#### Resources & Links

* [Semantic code: What? Why? How?](http://boagworld.com/dev/semantic-code-what-why-how/) via Boagworld
* [HTML5 Doctor](http://html5doctor.com/)
* [The i, b, em, & strong Elements](http://html5doctor.com/i-b-em-strong-element/) via HTML5 Doctor
* [The Full mailto Link Syntax](http://yoast.com/guide-mailto-links/) via Joost de Valk
* [New Structural Elements in HTML5](http://dev.opera.com/articles/view/new-structural-elements-in-html5/) via Dev.Opera

