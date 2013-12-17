###### LESSON 2

### 元素 & 语义(Elements & Semantics)

With a basic understanding of HTML and CSS in hand it is time to dig a little deeper and see what actually assembles these two languages.

到现在对 HTML 和 CSS 我们已经有了一个大致的了解是时候深度挖掘并且看看这两种语言的实际构成了.

In order to start building web pages you need to learn a little about which HTML elements are used to display different types of content. You will also want to know how these different elements behave, to help ensure you achieve your desired outcome.

为了开始创建 web 页面你需要开始了解一点关于显示不同类型的内容应该使用何种 HTML 元素. 你还将知道这些元素有些什么样习惯, 以确保达到你期望的结果.

Additionally, once you begin writing code you want to make sure that you are doing so semantically. Writing semantic code includes keeping your code organized and making well informed decisions.

另外, 一旦你开始编写代码你希望确保你正在编写的是有语义的(代码). 编写语义代码包括保持你的代码有组织以及添加友好的指导信息.

### 语义概述(Semantics Overview)

Semantics have been mentioned a number of times thus far, so exactly what are semantics? [Semantics within HTML](http://boagworld.com/dev/semantic-code-what-why-how/) is the practice of giving content on the page meaning and structure. These semantics portray the **value** of content on a page, and are not **solely** used for styling purposes. Using semantic code provides a handful of benefits, including giving computers, screen readers, search engines, and other devices the ability to adequately read and understand web pages. Additionaly, semantic code is easier to manage and work with, knowing clearly what each piece of content is about.

目前为止语义被提到过多次, 关于什么是语义准确的描述? [Semantics within HTML](http://boagworld.com/dev/semantic-code-what-why-how/) 是对页面上的内容的含义和结构的实例说明. 这些语义描述页面上内容的 **value**, 而**不仅仅**是出于样式目的. (使用)语义代码会提供一大堆的好处, 包含于电脑, screen readers, 搜索引擎, 以及其它能够充分的读取和解析 web 页面的设备. 另外, 语义代码管理和工作起来更容易, 知道每一块内容是关于什么的.

### 分部 & 跨度(Divisions & Spans)

Divisions, or divs, and spans are HTML elements that act as a container for different content. As a generic container they do not come with any overarching meaning or semantic value. Paragraphs are semantic in that when content is wrapped within a `p` element it is known as a paragraph. Divs and spans do not hold such meaning and are simply containers. Both divs and spans, however, are extremely valuable when building a website in that they give you the ability to apply targeted CSS styles.

divs 以及 spans 它们是 HTML 元素, 实际作为一个包含不同内容的容器. 正如一个通常的容器它们不带有任何整体的含义或者语义值. 段落在语义上是当内容被包括在 `p` 元素中通常它们是一个段落. Divs 和 spans 不带有这样的意义仅仅是单纯的容器. divs 和 spans, 无论如何, 它们的价值只在于当创建一个网站的时候它们可以让你可以将 CSS 样式应用到目标上.

A `div` is a **block level element** commonly used to identify large sections of a website, helping build the layout and design. A `span` on the other hand, is an **inline element** commonly used to identify smaller sections of text within a block level element, such as a paragraph.

`div` 是一个**块级别的元素**通常用来区分网站上大块的(内容), 有助于构建布局和设计. `span` 在另一方面, 是一个**行内元素**通常用来区分文字小的部分到一个块级别的元素中, 就像一个段落.

  **块 vs. 行内元素(Block vs. Inline Elements)**

  All elements are either block or inline level elements. What’s the difference?

  所有的元素要么是**块**要么是**行内**级别的元素. 有什么不同?

  **Block level** elements begin on a new line on a page and occupy the full available width. Block level elements may be nested inside one another, as well as wrap inline level elements.

  **块级别** 元素在页面上开始于新的一行并且占据所有可能的宽度. 块级别的元素可能嵌套在另一个中. 就像包装行内级别的元素.

  **Inline level** elements do not begin on a new line and fall into the normal flow of a document, maintaining their necessary width. Inline level elements cannot nest a block level element, however they can nest another inline level element.

  **行内级别** 元素**不**开始于新的一行并且填充到文档的正常区域, 维持它们的宽度. 行内级别的元素不能嵌套一个块级别的元素, 然而它们可以嵌套另一个行内级别元素.

Divs and spans can have added value when given a `class` or `id`. A `class` or `id` is typically added for styling purposes and to signify the difference between another `div` or `span`. Choosing a `class` or `id` name is where semantics can come into play. When choosing a `class` or `id` attribute value it is important to choose something that has value to the actual context of that element.

Divs 和 spans 在其被给予了 `class` 和 `id` 的时候可以添加值. `class` 或 `id` 典型的被添加来用于样式以及与区别于其它的`div` 或 `span`. 选择一个 `class` 或 `id` 名称就需要语义发挥作用. 当选择一个 `class` 或 `id` 属性值时选择与实际内容相关的值相当重要.

For example, if you have a `div` with an orange background that contains social media links your first inclination might be to give the `div` a class of "orange." What happens if that orange background is later changed to blue? Having a class of "orange" no longer makes sense. A better, more semantic, choice for a `class` would be "social" as it pertains to the contents of the `div` not the style.

例如, 如果你有一个 `div` 具有黄色背景其包含社交媒体链接你的第一次倾向可能是令这个 `div` 的 `class` 为 "orange". 如果最近背景变为蓝色怎么办呢? 具有一个 "orange" 的 `class` 不再适合. 更好的, 更语义化, 选择 `class` 为 "social" 让其属于 `div` 的内容而不是样式.

```html
<!-- div -->
<div class="social">
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
</div>
<!-- span -->
<p>Lorem ipsum dolor sit amet, <span class="tooltip">consectetur</span> elit.</p>
```

### 排版(Typography)

A large amount of content online is strictly text based. Many different forms of media and context exist online, however text rules the majority. There are a number of different elements to display text on a web page within HTML. We will focus on the most popular, and more semantic, elements within this lesson. For a broader overview please see the [Typography](http://learn.shayhowe.com/html-css/typography) lesson.

大量的基于文本形式的在线内容. 许多不同的表单和在线文本, 然而大多数都有文本规则. 这里有一系列不同的元素来在 web 页面的 HTML 中显示文本. 本课程我们把目光放在最普遍的, 最有语义的元素. 更广泛的了解请看 [Typography](http://learn.shayhowe.com/html-css/typography) 课程.

#### Headings

Headings are block level elements that come in six different rankings, `h1` through `h6`, and are key identifiers for users reading a page. Headings help to quickly break up content and provide hierarchy. They are also used to help search engines index and determine the value of content on a page.

标题是一个块级别的元素有六个级别, 从 `h1` 到 `h6`, 并且是用于阅读一个页面的关键标识. 标题有助于快速的打断内容并且提供层级. 它们也用于帮助搜索引擎索引以及决定页面上内容的价值.

Headings should be used in the order relevant to the content. The primary heading of a page or section should be coded with `h1` and subsequent headings should use `h2` on as necessary. Headings should be **reserved for true classification** and not used to make text bold or big.

标题应该用于排列相应的内容. 页面主要的标题或部分应该是 `h1` 以及后续的标题使用 `h2` 作为必要的内容. 头部应该**保留于真正的分级**而不是标记文本粗或大.

```html
<h1>This is a Level 1 Heading</h1>
<h2>This is a Level 2 Heading</h2>
<h3>This is a Level 3 Heading</h3>
```

  **Headings Demo**

  <h1>This is a Level 1 Heading</h1>
  <h2>This is a Level 2 Heading</h2>
  <h3>This is a Level 3 Heading</h3>

#### 段落(Paragraphs)

Headings are often followed with supporting paragraphs. Paragraphs are defined by using the `p` block level element. Numerous paragraphs can appear one after the other, adding information to a page.

标题通常伴随着相应的段落. 段落定义使用 `p` 块级别的元素. 大量的段落可以出现在另一个后面, 添加信息到页面.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
```

  **段落示例Paragraphs Demo**

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

#### Bold Text 和 Strong(Bold Text with Strong)

To make text bold, and to note it as important, the `strong` inline level element is used. It is important to understand the [semantic difference](http://html5doctor.com/i-b-em-strong-element/) between `strong` and `b`, both of which will make text bold. `strong` is semantically used to denote text with a strong importance, as is mostly the case when wanting to bold text. `b` on the other hand semantically means stylistically offset, which isn’t always the best case for text deserving prominent attention. Gauge the significance of the text you are looking to set as bold and choose an element accordingly.

`strong` 行内元素被使用来使文本加粗, 并且备注它为重要内容. 明白 `strong` 和 `b` 之间的 [semantic difference](http://html5doctor.com/i-b-em-strong-element/) 很重要, 它们都使文本加粗. `strong` 是语义上表示文本很重要, 如同大多数希望文本加粗的情况. `b` 是另一种语言意思是风格上的偏移, 其通常适用于让文本显得醒目. 依据你打算设置为粗体文本的意义从而选择相应的元素.

```html
<p>Duis in <strong>voluptate</strong> velit esse cillum.</p>
```

#### Italicize Text with Emphasis

To italicize text and place a stressed emphasis on it the `em` inline level element is used. As with `strong`, there are two different tags used to italicize text, each with a slightly different semantic meaning. `em` semantically means to place a stressed emphasis on text and thus is the most popular option for italicizing text. The other option is `i`, which semantically values text to be rendered in an alternate voice. Again, you will need to gauge the significance of the text you want to italicize and choose an element accordingly.

`em` 行内元素被用来使文本倾斜并且将强调语气其置于它上面. 如同 `strong` 这里有两种不同的标签来倾斜文本, 每一个都有稍显不同的语义含义. `em` 语义含义是将强调语气置于文本并且这也是倾斜文本的最通常的用途. 另一个选择是 `i`, 其语义是文本作为引申含义显示. 再一次的, 你将会需要评估你需要倾斜的文本的目从而选择相应的元素.

```html
<p>Quae ars <em>putanda</em> est, expeteretur si nih.</p>
```

#### 超链接(Hyperlinks)

One of the core elements of the internet is the hyperlink, established by using an anchor. Hyperlinks are defined using the `a` inline element however they require a source to direct the link. The `href` attribute, known as hyperlink reference, is used to set the destination of a link.

互联网上的核心元素之一是超链接, 通过一个锚点建立. 超链接被定义为 `a` 行内元素然而它们需要一个直接链接的源. `href` 属性, 是超链接的引用, 其用于设定一个链接的目的地.

**By nature the `a` element is an inline element, however with the introduction of HTML5, a elements now have the ability to wrap block or inline level elements.**  This is a break from the standard convention yet permissible to turn entire blocks of content on a page into a link.

通常情况 `a` 元素是一个行内元素, 然而在 HTML5 的介绍中, 元素现在可以包含块或者行内级别的元素了. 这是于标准惯例的突变允许将一个页面的内容的全部版块包装到一个链接.

```html
<a href="http://shayhowe.com">Shay</a>
```

##### 相对 & 绝对路径(Relative & Absolute Paths)

The two most common types of links include links to other pages within a website and links to other websites. How these links are identified is by their path, also known as the value of their `href` attribute.

最通常的链接类型包含链接到一个站点的其它页面和链接到其它站点. 怎样区别这些链接是通过它们的路径, 也就是众所周知的 `href` 属性的值.

Links pointing to other pages within the same website should have a **relative path**, in which the domain is not in the `href` attribute value. Since the link is pointing to another page on the same website the href attribute value only needs to include the page being linked to, `/about.html` for example. Should the page being linked to reside within a subdirectory the `href` attribute value needs to reflect this as well. Say the `about.html` page resides within the pages directory, the relative path would then be `/pages/about.html`.

Linking to other websites outside of the current one requires an absolute path, where the href attribute value must include the full domain. A link to Google would need the href attribute value of `http://google.com`, starting with http and including the domain, `.com` in this case.

```html
<!-- Relative Path -->
<a href="/about.html">About</a>
<!-- Absolute Path -->
<a href="http://www.google.com/">Google</a>
```

##### 链接到 Email 地址(Linking to an Email Address)

Occasionally you will encounter a link to an email address. When clicked, this link opens the default email client and populates some information. At a minimum the email address where the message is being sent is populated, however other information such as a subject and body text may also be populated.

通常你将会遇到一个链接到一个 Email 地址. 当点击链接, 这个链接打开默认的 Email 客户端并且填充一些信息. 至少消息被发送的 email 地址会被填充, 然而其它信息例如主题和正文文本也可以被填充.

To create an email link the `href` attribute value needs to start with `mailto:` followed by the email address to where the email should be sent. To create an email link to `shay@awesome.com` the `href` attribute value would be `mailto:shay@awesome.com`.

要创建一个 Email 链接 `href` 属性值需要以 `mailto:` 开始跟随这封 Email 希望发送到的地址.  要创建一个到 `shay@awesome.com` 的链接 `href` 属性值应该是 `mailto:shay@awesome.com`.

Additionally, a subject and body text for the email can also be populated. To add a subject line include the `subject=` parameter following the email address. Multiple words within a subject line require spaces to be encode using `%20`. Adding body text works very similar to that of the subject, using the `body=` parameter in the `href` attribute value. Again, spaces must be encoded using `%20` and line breaks must be encoded using `%0A`.

Altogether, a link to `shay@awesome.com` with the subject of "Still Awesome" and body text of "This is awesome" would look like `mailto:shay@awesome.com?subject=Still%20Awesome&body=This%20is%20awesome`. Please notice, the first parameter requires a `?` to bind it to the email address and additional parameters require a `&` to bind them the previous parameter.

For more information on building email links, including how to add multiple email addresses, cc, and bcc parameters, please see [Joost de Valk guide](http://yoast.com/guide-mailto-links/), The Full mailto Link Syntax.

```html
<a href="mailto:shay@awesome.com?subject=Still%20Awesome&body=This%20is%20awesome">Email Me</a>
```

#### 在一个新窗口中打开链接(Opening Links in a New Window)

One feature available with hyperlinks is the ability to determine where the link is opened once clicked. Typically links open in the same window from which they are clicked, however links may open in a new window. To trigger the action of opening a link in a new window the `target` attribute is used with a value of `_blank`. The target attribute determines where the link is displayed, and the `_blank` value specifies a new window.

```html
<a href="http://shayhowe.com/" target="_blank">Shay Howe</a>
```

#### 链接到相同页面中的元素(Linking to Elements within the Same Page)

Periodically you will see links that simply link to another portion of the same page. In the case of this guide, links found within the "In this Lesson" section link down the page to the appropriate section. Perhaps more commonly found online are "Back to Top" links that return users to the top of a page.

Creating an on page link is accomplished by specifying an ID on the element you wish to link to. Then, using the ID of that element in a links `href` attribute value. As an example, putting the `main` ID on the `body` element allows you to link to the top of a page using the href `value` of `#main`.

```html
<a href="#awesome">Awesome</a>
<div id="awesome">Awesome Section</div>
```

### HTML5 Structural Elements

HTML5 provides a handful of [new elements](http://dev.opera.com/articles/view/new-structural-elements-in-html5/), all of which are focused around improving semantics. Before, if you wanted to declare a block level section of a page you were likely to use a `div`. With HTML5 you have a handful of new block level elements that allow you to write more semantic code.

HTML5 提供一系列的的 [new elements](http://dev.opera.com/articles/view/new-structural-elements-in-html5/), 所有的一切皆是为了提高语义. 以前, 如果你想要声明一个页面的块级别的部分你可能会使用一个 `div`. 通过 HTML5 你有一系列的新的块级别的元素使你写出更语义化的代码.

**Fig. 2.01**

The new HTML5 structural elements outline.

![Fig. 2.01](pr.png)

#### 头部(Header)

The `header`, just as it sounds, is used to identify the heading of a page, `article`, `section`, or other segment of a page. In general, a `header` may include a heading, introduction text, or navigation. You can use more than one `header` on a page. Depending on the website, you will ideally include a `header` at the beginning of the page. Additionally, a header may reappear as the `header` of an article or section as necessary.

`header`, 正如其名, 被用来标识一个页面, `article`, `section`, 或者页面的其他部分的头部. 通常 `header` 可能包含一个头部, 说明文字或者导航. 你可以在一个页面使用超过一个 `header`. 根据不同的网站, 你会理想的在页面的开始包含一个 `header`. 更多的, 一个 `header` 可能以一篇文章或者一个章节的 `header` 形式出现.

```html
<header>...</header>
```

  ##### 澄清 `header` 元素(Clarification on the `header` Element)

  The `header` element should not be confused with the head or headings, `h1` through `h6`.

  `header` 元素不应该与页面的 `head`, `h1` 到 `h6` 混淆.

  **The `header` element is a structural element that outlines a heading on a page, of which falls within the `body` element on a page. The `head` element is not displayed on the page and is used to outline meta data, the document title, and links to external files.**

  **Headings, `h1` through `h6`, are used to represent multiple levels of text headings throughout a page.**

#### 导航(Navigation)

The `nav` is a block level element used to denote a section of major navigational links on a page. **Not all links should be wrapped within a `nav` element**. The `nav` should be reserved for primary navigation sections including universal navigation, a table of contents, breadcrumbs, previous/next links, or other noteworthy groups of links.

`nav` 是一个块级别的元素用来在页面上表示主要的导航链接. **注意不是所有的链接都应该被包装于于 `nav` 元素中**. `nav` 应该被保留给主要的导航部分包含通常的导航栏, 一个内容列表, 面包屑, 后退/前进 链接或者其他值得一提的一组链接.

Most commonly links included within the `nav` element will link to other parts of the same website or web page. Miscellaneous one off links should not be wrapped within the `nav` element, and should only use the a element.

通常大多数被包含在 `nav` 元素的链接将会链接到其他相似的网站或者 web 页面. 杂项或者是一次性链接不应该被包含在 `nav` 元素中, 而是应该仅仅使用单个元素.

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

`atricle` 块级别元素与 `div` 或者 `section` 非常相似然而它特别的定义为一个应该包含独立的, 自包含用来独立分派或者重用的内容. 通常 `article` 将会出现在博客以及其它的出版社网站作为一个发布内容的部分. 当决定使用 `article` 元素与元素中的内容是否可以被复制或者其他没有任何混淆. 在 `article` 中的内容必须有意义, 并且能够分派到其他地方, 例如在 RSS 订阅中.

```html
<article>...</article>
```

#### Section

A `section` is more likely to get confused with a `div` than an `article`. As a block level element, `section` is defined to represent a generic document or application section. Where a `section` differentiates itself from a `div` is that a `section` is not to be used as a convenience for styling or scripting purposes.

`section` 比 `article` 与 `div` 产生混淆. 作为一个块级别的元素, `section` 被定义用来代表一个常规的文档或者应用程序部分. `section` 与 `div` 的一个不同之处是 `section` 被用于样式化和脚本化目的.

That said – you can apply styles to a `section` however you shouldn’t be using a `section` aimlessly with the sole purpose of adding styles. Reserve the `section` element for large parts of a page worthy of the element.

```html
<section>...</section>
```

  ##### 决定何时使用 `section` 或者 `div`(Deciding When to Use a `section` or `div`)

  The best way to determine when to use a `section` versus a `div` is to look at the actual content at hand. If the block of content could exist as a record within a database and isn’t explicitly needed as a CSS styling hook then the `section` element is most applicable. Sections should be used to break a page up, providing a natural hierarchy, and most commonly will have a proper heading.

  最好的方式决定使用一个 `section` 对应于 `div` 是查看实际处理的内容. 如果块内容以一条记录存在再数据库中并且不明确的需要相应的钩子用于CSS 样式那么 `section` 元素是最合适的. Sections 应该用来中断页面前部分, 提供一个自然的层级, 并且通常会有一个适当的头部.

  **A `div` on the other hand may be used to specifically tie styles to a block of content.** As an example, if a couple paragraphs need to stand out above the rest of the content on on a page they should be wrapped in a `div`. That `div` then may have the proper styles applied to it, perhaps a background, border, or the alike.

#### Aside

To accompany the `header` and `footer` elements there is also the `aside` block level element. An `aside` defines content related to the document or section surrounding it. As with `header` and `footer` elements, the `aside` can be used multiple times per page, so long as each use is practical.

Please keep in mind that the `aside` is a block level element, in which it will appear on a new line and occupy the full width of the page or any container. If you would like to get the `aside` to appear to the right or left of a block of content you will need to `float` the `aside` element. Don’t worry about floats right now, we will learn about [floating and positioning](http://learn.shayhowe.com/html-css/box-model) content in an upcoming lesson.

```html
<aside>...</aside>
```

#### Footer

The `footer` is identical to that of the `header` however for the bottom of a page, `article`, `section`, or other segment of a page. A `footer` should not stem away from the document or `section` at hand and its context should include relative information.

#### D.R.Y. – Don’t Repeat Yourself

One principle of development is **D.R.Y.**, also known as don’t repeat yourself. Within CSS this principle can speak volumes as it is easy to continually write the same styles over and over again. Don’t. CSS was designed in a way to allow you to cascade styles and use classes so that you easily apply and **inherent styles**. The end goal is to write clean and light code, of which is semantic and easily managed.

#### Resources & Links

* [Semantic code: What? Why? How?](http://boagworld.com/dev/semantic-code-what-why-how/) via Boagworld
* [HTML5 Doctor](http://html5doctor.com/)
* [The i, b, em, & strong Elements](http://html5doctor.com/i-b-em-strong-element/) via HTML5 Doctor
* [The Full mailto Link Syntax](http://yoast.com/guide-mailto-links/) via Joost de Valk
* [New Structural Elements in HTML5](http://dev.opera.com/articles/view/new-structural-elements-in-html5/) via Dev.Opera
