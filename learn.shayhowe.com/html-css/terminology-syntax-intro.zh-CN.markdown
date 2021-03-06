###### LESSON 1

### 术语, 语法, & 说明

Before beginning our journey to learn HTML and CSS it is important to understand the differences between the two languages, their syntax, and some common terminology.

在开始我们学习 HTML 和 CSS 的旅程之前了解这两种语言在语法和一些常见的术语的不同很重要.

As an overview, **HTML** is a hyper text markup language created to give content structure and meaning. **CSS**, also known as cascading style sheets, is a presentation language created to give content style and appearance.

总的来说, **HTML** 是一种典型的文本标记语言通过给定内容结构和含义来创建. **CSS** 也叫做 `cascading style sheets`(层叠样式表), 它是一种 presentation language(呈现语言) 通过给定的内容样式和形式来创建.

To put this into laymen terms, HTML determines the structure and meaning of content on a web page while CSS determines the style and appearance of this content. The two languages are independent of one another. CSS should not reside within an HTML document and vice versa.

用外行(通常)的(话来说)就是, HTML 决定了 web 页面的结构和内容的含义而 CSS 决定了内容的样式和形式. 这两种语言是相互依存的. CSS 不应该存在于 HTML 文档中反之亦然.

Taking this concept a bit further, the HTML `p` element is used to display a paragraph of text on a web page. The `p` element is specifically used here as it is provides the most value for the content, thus being the most semantic element. CSS then uses a type selector of `p` which can determine the color, font size, font weight, and other stylistic properties of the paragraph. More on this to come.

用后面的(内容)来说明这个原则, HTML 的 `p` 元素是用来在一个 web 页面上面显示一段文本. `p` 元素在这里是专门选用的它提供了内容大多数的(属性)值, 这是大多数语义的元素. CSS 然后使用一类 `p` 的选择器它可以决定颜色, 字体尺寸, 字体粗细, 以及其它图像化的样式属性. (实际上)远超过这里提到的.

### 常见 HTML 术语(Common HTML Terms)

When getting started with HTML you are likely to hear new, and often strange, terms. Over time you will become more and more familiar with all of them but three terms you should learn today include **tags**, **elements**, and **attributes**.

当开始 HTML 之旅之前你可能会听到一些新的, 通常很奇怪的**术语(terms)**. 随着时间的推移你会变得越来越了解它们全部而今天你会学到包含 标签(tag), 元素(element) 和属性(attribute).

#### 元素(Element)

Elements are designators that define objects within a page, including structure and content. Some of the more popular elements include `h1` through `h6`, `p`, `a`, `div`, `span`, `strong`, and `em`.

元素用于开发人员在一个页面中定义对象, 包含结构和内容. 一些常见的元素包含 `h1` 到 `h6`, `p`, `a`, `div`, `span`, `strong` 以及 `em`.

```html
<a>
```

#### 标签(Tag)

Elements are often made of multiple sets of tags, identified as opening and closing tags. **Opening tags** mark the beginning of an element, such as `<div>`. **Closing tags** mark the end of an element and begin with a forward slash, such as `</div>`.

元素通常是由一组各种标签组成的, 分为开标签和闭标签. **开标签** 标志着元素的开始例如 `<div>`. **闭标签** 标志着元素的结束并且它以一个反斜杆开始, 例如 `</div>`.

```html
<a>...</a>
```

#### 属性(Attributes)

Attributes are properties used to provide additional instruction to given elements. More commonly, attributes are used to assign an `id`, `class`, or `title` to an element, to give media elements a source (`src`), or to provide a hyperlink reference (`href`).

属性也叫做特性(征)用来提供额外的说明给元素. 常见的属性用来分派一个 `id`, `class` 或 `title` 给一个元素, 用来给媒体元素提供一个源(`src`) 或者给超级链接提供一个引用(`href`).

```html
<a href="http://www.shayhowe.com/">Shay Howe</a>
```

<pre>
常见 HTML 术语示例(Common HTML Terms Example)

[Shay Howe](http://www.shayhowe.com/)
</pre>

### HTML 文档结构 & 语法(HTML Document Structure & Syntax)

All HTML documents have a required structure that includes the following declaration and tags: `doctype`, `html`, `head`, and `body`.

所有的 HTML 文档都有一个必须的结构它包含如下的声明和标签: `doctype`, `html`, `head`, 以及 `body`.

The `doctype` declaration is used to instruct web browsers which version of HTML is being used and is placed at the very beginning of the HTML document. Following the `doctype` declaration, `html` tags signify the beginning and end of the document.

`doctype` 声明用来告诉 web 浏览器 HTML 使用了哪个版本并且放在 HTML 文档的开始. 在 `doctype` 之后 `html` 标签象征着文档的开始和结束.

The `head` of the document is used to outline any `meta` data, the document `title`, and links to any external files. Any context included within the `head` tags is not visible within the actual web page itself. All of the content visible within the web page will fall within the body tags.

文档的 `head` 用来突出所有的 `meta`(`元`) 数据, 文档的 `title` 以及链接到任何外部文件的链接,包含在 `head` 标签里面的任何内容在实际 web 页面中都是不可见的. 所有在 web 页面中可见的内容都填充在 `body` 标签中.

A general HTML document structure looks like the following:

常见的 HTML 文档结构看起来像这样:

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

### 常用 CSS 术语(Common CSS Terms)

In addition to HTML terms, there are some common **CSS terms** you will want to familiarize yourself with. The more you work with HTML and CSS the more these terms will become second nature.

除了 HTML 术语, 这里有一些你希望了解的常用的 **CSS 术语**. 你使用 HTML 和 CSS 越多越多的术语将成为第二语言.

#### 选择器(Selectors)

A selector determines exactly which element, or elements, the corresponding styles will be applied. Selectors can include a combination of different IDs, classes, types, and other attributes – all depending on how specific you wish to be. Selectors can be identified as everything that comes before the first curly brace, `{`.

选择器准确决定了某个元素, 或者元素集合, 与之对应的样式将会被应用. 选择器可以包含一个由不同的 IDs, 类s, 类型s 以及其它的属性 - 它们都取决于你具体的需要. 选择器可以和其它的任何事情在第一个大括号之前区分开来, `{`.
```css
p { ... }
```

#### 属性(Properties)

A property determines the style that will be applied to an element. Properties can be identified as the text coming immediately before a colon (`:`). There are an abundance number of properties you can use, and new ones are continually being added.

属性决定了样式将会被应用于一个元素. 属性可以被认为是冒号 (`:`) 之前的文字. 这里有丰富的属性供你使用, 并且还有新的不断在添加.

```css
p {
  color: #ff0;
  font-size: 16px;
}
```

#### 值(Values)

A value determines the behavior of a property. Values can be identified as the text in-between the colon (`:`) and semicolon (`;`).

值决定了一个属性的行为(具体呈现). 值可以被认为是在冒号(`:`)和分号(`;`)之间的文字.

```css
p {
  color: #ff0;
  font-size: 16px;
}
```

### CSS Structure & Syntax

CSS works by using selectors to apply styles to HTML elements. All CSS styles cascade, allowing different styles to be inherited by multiple elements.

CSS 工作方式为通过使用选择器来应用样式到 HTML 元素. 所有的 CSS 层次样式允许不同的样式被多个元素继承.

As an example, it is possible to set one style for all of the text on a page to be of a specific color, size, and weight. Then by using a more targeted selector that style can be overwritten for a unique element.

例如, 它可以设置一系列的样式给页面上的所有(段落)文字使之有指定的颜色, 大小, 和粗细. 然后通过使用一种更具有针对性的选择器这些样式可以被覆写.

```code
Selector -> p {
  Declaration-> color: #ff0;
                font-size: 16px;
              }    |        |
                Property    Value
```

The following syntax demonstrates how styles would be applied to every paragraph.

下面的语法演示了怎样应用样式到所有的段落.

```css
p {
  color: #ff0;
  font-size: 16px;
}
```

#### Long vs. Short Hand

In CSS there are multiple different ways to declare values for a property. With long hand CSS you stack multiple declarations, one after the other for each property and value. With short hand CSS you use one property and list multiple values. It is best to use short hand CSS as it requires less code. Not all properties support short hand CSS so make sure you are using the correct property and value structure.

在 CSS 中有多种不同的方式来给一个属性声明值. 通过 long hand CSS 你会堆砌多个声明, 每个属性后接一个值. 通过 short hand CSS 它需要更少的代码. 不是所有的属性都支持 short hand CSS 因此确保你使用的正确的属性和值结构.

```css
/* Long Hand */
/* 顺时针方向 */
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

#### HTML & CSS 中的注释(Comments within HTML & CSS)

<pre>
HTML and CSS give you the ability to leave comments within the code. These comments can be used to help with organization, set reminders, and manage code more effectively. Comments become especially useful when there are multiple people working on the same code. Any content wrapped within comments will not be rendered on the page.

HTML 和 CSS 让你可以在代码中留下注释. 这些注释可以有助于提高组织性, 可读性 以及管理代码更加方便. 当多个人在同一份代码上工作的时候注释变得尤为重要. 包装在注释里面的任何内容都不会在页面上被渲染.

HTML comments wrap the content starting with `<!--` and end with `-->`. CSS comments wrap the content starting with `/*` and end with `*/`.

HTML 注释包含的内容开始于 `<!--` 结束于 `-->`. CSS 注释包含内容开始于 `/*`并且结束于 `*/`.
</pre>

### Selectors

Selectors, as mentioned earlier, are the determining factor as to which elements are to be stylized. In so, it is important to fully understand how to use selectors and how they can be leveraged. Some of the most common selectors include elements, IDs, and classes, or some combination of the three.

选择器, 正如前面提到的, 是哪个元素样式化的决定因素. 正如这样, 明白怎样使用选择器以及怎样利用它们非常重要. 一些常用的选择器包含元素, IDs, 以及 类s 或者由这三个组合而成的选择器.

#### 类型选择器(Type Selectors)

Type selectors are the most basic selector. Simply enough, elements without any necessary attributes are targeted to apply styles. Type selectors are preferred whenever possible as they require less code and are easy to manage.

类型选择器是最基本的选择器. 足够简单, 元素不需要任何必须的属性被标记来应用样式. 无论如何只要有可能类型选择器是首选(因为)它们需要更少的代码并且方便管理.

```html
<p>...</p>
```

```css
p { ... }
```

#### 类选择器(Class Selectors)

Class selectors allow you to apply the same style to an array of elements by giving them all the same class attribute. Classes are denoted in CSS by identifying the class with a leading period. It is permissible to use the same class attribute on multiple elements on a page.

类选择器使得你应用相同的样式给一系列的元素通过为它们提供相同的类属性. 类属性会被 CSS 记住用来区别先前导入的样式. 它允许在一个页面上对多个元素使用相同的类.

```html
<div class="awesome">...</div>
```

```css
.awesome { ... }
```

#### ID Selectors

ID selectors are similar to class selectors however they are used to target only one unique element at a time. Instead of using the class attribute, IDs naturally use the ID attribute. In place of a period, as with classes, IDs are denoted by identifying the ID with a leading hash sign. IDs are only allowed to be used once per page and should ideally be reserved for significant elements.

ID 选择器与类选择器类似然而一次仅限于唯一的元素. 就像使用类属性, IDs 自然使用 ID 属性. 如同先前所述 IDs 会被 CSS 记住用来区别先前导入的样式. IDs 在一个页面只允许使用一次并且理论上应该预留给独特的元素.

```html
<div id="shayhowe">...</div>
```

```css
#shayhowe { ... }
```

#### 组合选择器(Combining Selectors)

A beauty of CSS is the ability to combine selectors and inherit styles. This allows you to start with a more generic selector and work your way to being more specific as necessary. In addition, you can combine different selectors to be as specific as you wish.

CSS 的一个优美之处就是可以使用组合选择器并且继承样式. 这允许你可以从选择大多数元素开始以及按照你的方式工作去选择更特殊的元素. 除此之外, 你可以按照你所想的方式来组合不同的选择器.

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

#### 其它的选择器(Additional Selectors)

Selectors can be extremely powerful and the selectors outlined above are only the beginning. Many more [advanced selectors](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/) exist and are readily available. Before dropping classes or IDs on random elements check and see if there might be a better selector to do the job for you. It is also worth mentioning that not all advance selectors work in every browser, particularly with new selectors introduced in CSS3. If a selector doesn’t seem to be working properly check its browser support.

选择器可以极其强大, 选择器上面的概述仅仅是个开始. 更多 [高级选择器](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/) 已经可以准备好了. 在确定类或者 IDs 为随机元素之前看看这里可能有选择器能更好工作. 值得一提的是不是所有的高级选择器在每个浏览器都能工作, 尤其在 CSS3 中介绍到的选择器. 如果选择器看起来不能正确的工作检查浏览器是否支持.

### 引用 CSS(Referencing CSS)

Once content is in place you may begin to style the HTML with CSS. There are a handful of different ways to reference CSS, some of which are better than others.

一旦内容已经就位了你可能从 CSS 开始 HTML 的样式. 这里有写不同的方式来引用 CSS, 其中一些会更好一些.

The best practice for referencing CSS is to include all of your styles within a single external stylesheet, referenced within the heading of a page. Using an external stylesheet allows you to use the same styles across an entire website and quickly make changes site wide.

引用 CSS 的最佳实践是包含你所有的样式到一个单个外部样式表, 在一个页面的头部引用. 使用一个外部样式表允许你在整个站点中使用相同的样式并且快速的改变站点风格.

Other options include internal and inline styles. These options are generally frowned upon as they make updating websites cumbersome and unwieldy.

其它的选择是包含内部和行间样式. 这些选项通常在更新网站的时候显得很笨重和繁琐让人头大.

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

#### 使用外部 CSS 样式表(Using External CSS Stylesheets)

As mentioned above, the best way to reference CSS is with an extrenal stylesheet. Doing so allows you to use one set of styles across an entire website. Making changes to the style of a website becomes painless, and users download less data overall to properly render the styles.

正如上面提到的, 引用 CSS 的最好方式是使用一个外部样式表. 这样允许你将一种样式在整个站点中使用. 修改网站样式变得十分轻松, 并且用户下载少量的数据便可以合适的渲染整个样式.

Within the `head` of the HTML document, the `link` element is used to define the relationship between the HTML file and the CSS file. Since you are linking to CSS the `rel` attribute with a value of `stylesheet` is used to specify the relationship. Furthermore, the `href` attribute is used to identify the location, or path, of the CSS file.

在 HTML 文档的 `head` 中, `link` 元素用来定义 CSS 文件和 HTML 文件的关系. 此外, `href` 属性用于表示的 CSS 文件的 location 或者 path.

In order for the CSS to render, the path of the `href` attribute value must directly correlate to where the CSS file is stored. In the example above the `file.css` is stored within the root directory, the same location as the HTML file.

为了渲染 CSS, `href` 属性的值必须直接关联到 CSS 文件的存放位置. 在上面例子中 `file.css` 被存放在(站点)根目录, 与 HTML 文件的位置相同.

Should the CSS be within a subdirectory, the `href` attribute value would need to correlate this path accordingly. For example, if the `file.css` is stored within a subdirectory call `styles` the `href` attribute value would be `styles/file.css`, using a forward shash to indicate different directories.

CSS 应该放在一个子目录中, 于是 `href` 属性值应该关联到相应位置. 例如, 如果 `file.css` 被存放在一个名叫 `styles` 的子目录中属性 `href` 的值应该为 `styles/file.css`, 使用一个斜线来分割不同的目录.

### 重置(Reset)

By default every web browser has it’s own interpretation on how different elements are to be stylized. How Chrome decides to render an input field is likely going to be much different than how Internet Explorer renders an input field. To combat for **cross browser compatibility** CSS resets have become widely used.

默认情况下每个浏览器对不同的元素附加样式都有着它自己的解释. Chrome 渲染的的输入框和 Internet Explorer 渲染的输入框有很大的不同. 与 **跨浏览器兼容** 作战 CSS 重置被广泛的使用.

  **跨浏览器兼容 & 测试(Cross Browser Compatibility & Testing)**

  As mentioned, different browsers render pages in different ways. Its important to recognize the value in cross browser compatibility and testing. Websites don’t need to look the same in every browser but they should be close. What browsers you wish to support and to what degree is a decisions you will need to make in accordance with what is best for your website.

  正如上面提到的, 不同浏览器渲染页面的方式并不相同的. 认识到跨浏览器兼容和测试的价值十分重要. 网站不需要在每个浏览器中看起来完全相同但是它们应该接近. 你希望支持哪种浏览器并且到何种程度对你的网站最合适是你需要商榷的事情.

CSS resets include a handful of rule sets that take every common HTML element and scale them down to one unified style. These resets involve removing any sizing, margins, paddings, or additional styles. Resets need to be the very first CSS styles to be rendered to ensure that all the styles there after are being applied to the skeleton of a page.

CSS 重置包含一系列的规则和设定它会对所有的公共的 HTML 元素缩减它们的样式为统一的样式. 这些重置包括移除任何 sizing, margins, paddings. 重置需要作为首要 CSS 渲染, 以确保所有的样式在其之后, 被应用到一个页面的骨架.

There are a ton of different resets available to use, all of which have their own forte. My personal favorite is [Eric Meyers reset](http://meyerweb.com/eric/tools/css/reset/), which has been adapted to include a reset for the new HTML5 elements. Eric’s reset is short and to the point, but feel free to research your own resets and find what you’re comfortable using.

这里有一大堆的重置 CSS 方法, 每个都有其长处. 我个人喜欢的是 [Eric Meyers reset](http://meyerweb.com/eric/tools/css/reset/), 其适用于包含新 HTML5 元素的 CSS 重置. Eric’s reset 短小精悍, 但是你可以自由的寻找你自己的重置方法并且找到你习惯使用的重置方法.

  ## 代码检测(Code Validation)

  As proficient as we all are, we do make mistakes. Thankfully when writing HTML and CSS we have a validator that can check our work. The W3C has built both [HTML](http://validator.w3.org/) and [CSS](http://jigsaw.w3.org/css-validator/) validators that will scan your code looking for mistakes. Validating your code not only helps it render properly across all browsers, it also teaches you the best practices for writing code.

  在我们逐渐称为高手的期间, 我们也犯错误, 在编写 HTML 和 CSS 的时候感激有一个检测器来检查我们的工作. W3C 以及创建了它们 [HTML](http://validator.w3.org/) 和 [CSS](http://jigsaw.w3.org/css-validator/) 检测器会浏览你的代码查找错误. 检测你的代码不仅有助于它在所有的浏览器中适当的渲染, 它还教授你编写代码的最佳实践.

### Resources & Links

* [Common HTML Terms](http://www.scriptingmaster.com/html/HTML-terms-glossary.asp) via Scripting Master
* [CSS Glossary](http://www.codestyle.org/css/Glossary.shtml) via Code Style
* [Taming Advanced CSS Selectors](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/) via Smashing Magazine
* [CSS Tools: Reset CSS](http://meyerweb.com/eric/tools/css/reset/) via Eric Meyer
* [An Intro to HTML & CSS](http://www.shayhowe.com/web-design/intro-to-html-css/) via Shay Howe
