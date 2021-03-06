###### LESSON 4

### 排版(Typography)

Typography on the web has grown substantially over the last few years. There are a couple of different reasons for this rise in popularity, however none more recognized than the ability to embed your own web fonts on a website.

最近几年 web 排版有显著的增长. 人气的增长有几个不同的原因, 但是公认的 (原因是) 能够在你的 web 站点中 嵌入你自己的 web 字体.

In the past designers were limited to a small number of typefaces they could use on a website. These typefaces were based off what were the most commonly installed fonts on a computer, thus most likely to render properly on screen. Now with the ability to embed fonts designers have a much larger palette of typefaces to choose from.

过去的设计者限制于在 web 只能使用很少的字体. 这些字体来自基于电脑上通常安装的, 很容易在屏幕上渲染的字体. 现在通过嵌入字体设计者有了很多字体供选择.

While the ability to embed fonts opens up a door to all new typefaces it also requires designers to know the basic principles of typography. Translating these basic principles of typography into HTML and CSS helped build the core of online typography and [text styling](http://dev.opera.com/articles/view/29-text-styling-with-css/).


在通过嵌入字体敲开所有新字体的大门的时候它也需要设计者知道排版的基本原则. 转换这些排版的基础原则到 HTML 和 CSS 有助于构建在线排版和文本样式的核心.

  ##### Typeface vs. Font

  The terms typeface and font are often interchanged, causing confusion. Below is a breakdown of exactly what each term stands for, hopefully adding context to how the two terms should be used.
  
  术语 typeface 和 font 经常互换, 产生混淆. 下面是指出了每个术语的标准含义, 添加了内容希望能够说明如何使用这个两个术语.

  A **typeface** is what you see. It is the artistic impression of how text looks, feels, and reads.
  
  **typeface** 是你所看到的. 它是艺术家所实现的文字的外形, 感受和阅读性.

  A **font** is a file that includes a typeface. Using a font on a computer allows that computer to access the typeface.
  
  **font** 是包含字体的文件. 在一台电脑使用一个字体允许电脑访问这个字体.

  One way to help distinguish the difference between a typeface and font is to compare them to a song and MP3. A typeface is very similar to a song in that it is a work of art. It is created by an artist, or artists, and is open to interpretation. A font on the other hand is very similar to an MP3 in that it is not the artistic impression, only a method of delivering the artistic value.

#### Formatting Content

Within the previous lesson, [Elements & Semantics](http://learn.shayhowe.com/html-css/elements-semantics/), we talked about how to semantically add content to a page. This lesson is worth reviewing as it will play a part in our discussion on typography. As a brief review let’s recap headings, paragraphs, and how to bold or italicize text.

在先前的课程中, [Elements & Semantics](http://learn.shayhowe.com/html-css/elements-semantics/), 我们讨论了关于怎样语义化的添加内容到页面. 这节课程值得回顾的因为它的一部分也是我们的在排版中需要讨论的内容. 在一个简要的回顾后我们来概述 headings, paragraphs, 以及怎样加粗和倾斜文字.

##### Headings

Heading elements come in six different levels, `h1` through `h6`, each of which act as a supplementary heading to the one above it. The `h1` heading should be reserved for larger, more important headings while the other headings should support the `h1` above it. Using the HTML5 document structure elements we have the ability to reuse these headings, however we must use proper judgement in doing so.

```html
<h1>Lorem ipsum dolor sit amet...</h1>
<h2>Pellentesque habitant morb...</h2>
```

##### Paragraphs

The paragraph element, simply put, is the preferred way to add paragraphs of content to a page. Each individual paragraph should be wrapped with an opening and a closing `p` tag.

```html
<p>Id quil una virtute ponunt...</p>
```

##### Bolding Text

To bold text the `strong` element is used. The `strong` element not only makes text bold but it also semantically notes it as important text on a page.

```html
<p>Duis in <strong>voluptate</strong> velit cillum.</p>
```

##### Italicizing Text

Italicizing text is accomplished using the `em` element. The `em` element is also known to semantically mean that the text should include a stressed emphasis.

```html
<p>Quae vivendi <em>putanda</em> est, expeteretur nih.</p>
```

##### Text Color

Typically one of the first things a designer or developer will do when building a website is choose the text color and typeface. While there are a number of other properties that could be changed, these two have the largest impact on the look of a page in the smallest amount of time. Getting rid of the browser defaults and using your own text color and typeface immediately begins setting the tone of the page.

The only item needed to set the color of text is the `color` property. The `color` property accepts one value, however in many different formats. You can use keywords, hexadecimal values, RGB, RGBa, HSL, and HSLa. Most commonly seen are [hexadecimal](http://www.quackit.com/css/css_color_codes.cfm) values as they provide the most control with the least amount of effort. RGBa values are on the rise with CSS3 to provide transparent colors, however they are not fully supported within all browsers and should be used with a hexadecimal fallback accordingly.

```css
body {
  color: #555;
}
```

  ###### Shorthand Hexadecimal Color Values

  Hexadecimal color values, like many other property values, allow us to use shorthand values. Hexadecimal colors are declared using the pound sign (#) followed by six characters. **These characters identify the specific color to be used and often come in patterns of pairs, the first two characters, the middle two characters, and the last two characters.** These patterns can then be compressed down from six numbers into three for the color value. For example, the color value `#555555` can be shortened to `#555`, `#ff6600` can be shortened to `#f60`, `#ffff00` can be shortened to `#ff0`, and so on.

##### Font Properties

CSS provides a lot of different properties to edit the look and feel of text on a page. The properties to do so are broken down into two categories, `font` based properties and `text` based properties. Most properties corresponding to these categories will be prefaced with either `font-*` or `text-*`. To begin we’ll discuss the `font` based properties.

##### 字体家族(Font Family)

The `font-family` property is used to declare which font, and fallback fonts, should be used to display text. The value of the `font-family` property contains multiple font names, all comma separated. The first font declared, all the way to the left, is the primary font choice. Should the first font not be available alternative fallback fonts are declared from left to right. Font names including two or more words need to be wrapped in quotation marks. Additionally, the last font should be a keyword value, which will pick the system default font in the specified type.

```css
p {
  font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
```

##### 字体尺寸(Font Size)

Using the `font-size` property provides the ability to set the size of text using common [length values](http://css-tricks.com/css-font-size/), including pixels, em, percents, points, and `font-size` keywords. More and more often the pixel value is used as it provides the most control over a font’s size. Previously, em and percentage values used to be fairly popular because they allow the text to scale relatively when a user would zoom in on a page within the browser. Now most browsers are able to scale pixels as well, eliminating a large need for em and percentage values.


##### 字体样式(Font Style)

To change text to italicized and vice versa the `font-style` property is utilized. The font-style property accepts four keyword values, including `normal`, `italic`, `oblique`, and `inherit`. Of these four, most commonly used are normal and `italic`. `italic` being used to set text to italic and `normal` being used to return text to its normal style.

##### 字体变形(Font Variant)

It isn’t often but occasionally text will need to be set in small capitals, or small caps. For this specific case the `font-variant` property has been created. The `font-variant` property accepts three values, including `normal`, `small-caps`, and `inherit`. The most typically seen values are `normal` and `small-caps` to switch between `normal` and `small-caps`, and vice versa. If the typeface being used does not support small caps the variant of the font will not change. Always double check support for a typeface before using this property.

```css
p {
  font-variant: small-caps;
}
```

##### Font Weight

Ever so often the need to set text as bold or set the specific weight of bold text appears, for this case we can use the `font-weight` property. Generally speaking, the `font-weight` property is used with the keyword values normal, `bold`, `bolder`, `lighter`, and `inherit`. Of these keyword values, it is recommended to primarly use `normal` and `bold` to change text from normal to bold, and vice versa.

On top of keywords the numeral values `100`, `200`, `300`, `400`, `500`, `600,` `700`, `800`, and `900` exist. The order of these weights start with the thinnest weight, `100`, and scale up to the thickest weight, `900`. These values pertain specifically to typefaces that have multiple weights, more than normal (keyword for `400`) and bold (keyword for `700`). Before using numeral values check to see exactly what weights the typeface you are using comes in. Attempting to use thin weight of `100` might sound like a good idea, however that weight might not exist within your typeface, thus it will not work.

```css
p {
  font-weight: bold;
}
```

##### 行高(Line Height)

Line height, the distance between two lines of text known as leading, is declared using the `line-height` property. The `line-height` takes all general length and numeral values, as mentioned above within `font-size`. The best practice for legibility is to set the `line-height` to around one and half times that of your `font-size`. This could be quickly accomplished by setting the `line-height` to `150%`. However, if you are working with a baseline grid having a little more control over your `line-height` using pixels may be preferred.

行高, 按照字面意思就是两行间的距离, 被声明使用 `line-height` 属性. `line-height` 接收所有通常的长度和数量值, 如同上面提到的 `font-size`. 为了易读性是设定 `line-height` 为你的 `font-size` 的一倍半. 这可以通过设定 `line-height` 为 `150%` 快速达成. 然而如果你基于基线网格为了便于控制使用像素是首选.

**Line height may also be used to vertical center single lines of text within an element**. Setting an element’s `line-height` to the same value as the element’s `height` will vertically center the text. This technique is commonly seen within buttons, alert messages, and other single line text blocks.

```css
p {
  line-height: 20px;
}
```

##### 字体属性短操作(Shorthand Font Properties)

All of the font based properties listed above may be combined and rolled into one `font` property and [shorthand value](http://www.impressivewebs.com/css-font-shorthand-property-cheat-sheet/). The order of these properties should fall as follows from left to right: `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. As a shorthand value these property values can be stacked from `left` to `right` without the use of a comma, except for font names. A forward slash, `/`, separator is needed between the `font-size` and `line-height` property values.

It is also worth noting that every property value is optional **except** the `font-siz`e and `font-family` property values. That said, you can often find the font property and shorthand value to include only the `font-size` and `font-family` values.

```css
p {
  font: italic small-caps bold 13px/20px 'Helvetica Neue',
  Arial, Helvetica, sans-serif;
}
```

  ###### Font Properties Example
  
  ```html
<h2><a href="#" title="Sample Blog Post Title">Sample Blog Post Title</a></h2>
<p class="byline">Posted by Shay Howe on February 5th, 2012</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla vehicula nisi vitae rutrum. Donec laoreet, arcu in elementum, dui mi auctor tortor, et lorem massa orci… <a href="#" title="Sample Blog Post Title">Continue reading →</a></p>
  ```
  
  ```css
  h2, p {
  color: #555;
  font: 13px/20px Arial, 'Helvetica Neue', 'Lucida Grande', sans-serif;
}
a {
  color: #8ec63f;
}
a:hover {
  color: #f7941d;
}
h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
}
.byline {
  color: #8c8c8c;
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-style: italic;
}
  ```
  
#### 文本属性(Text Properties)

Knowing how to set the family, size, style, variant, weight, and line height of a font is only half the battle. Additionally you can decide how to align, decorate, indent, transform, and space text.

##### 文本对齐(Text Align)

Aligning text is an important part of building a rhythm and flow to a page, using the `text-align` property such alignment can be set. The `text-align` property has five values, `comprising` of `left`, `right`, `center`, `justify`, and `inherit`. All of these values are fairly straightforward and behave as expected. The `text-align` property, however should not be confused with the float property. The `text-align` values `left` and `right` will align text within an element, where the `float` values `left` and `right` will move the entire element. More information on the `float` property can be found in the [Box Model & Positioning](http://learn.shayhowe.com/html-css/box-model) lesson.

```css
p {
  text-align: center;
}
```

##### 文本修饰(Text Decoration)

The `text-decoration` property provides a handful of ways to spruce up text, accepting the following keyword values: `none`, `underline`, `overline`, `line-through`, `blink`, and `inherit`. Use of the `text-decoration` property varies but the most popular use case is to underline links. The `blink` value exists, however is not recommended to be used as it can be extremely distracting. Depending on the semantic state, the `line-though` value may be substituted with the del element (used to note text to be removed from a document) or the `s` element (used to note text no longer accurate or relevant). All other values can be utilized accordingly.

##### 文本缩进(Text Indent)

The `text-indent` property can be used to indent text like seen within printed books. The `text-indent` property can be used to indent text both inward and outward, all depending on the set value. The values available for this property are the common length values used within other properties, including pixels, points, percentages, and so forth.

```css
p {
  text-indent: 20px;
}
```

##### 文本阴影(Text Shadow)

The `text-shadow` property allows you to add a shadow, or multiple shadows, to text. The property requires four values all listed one after the other from left to right. The first three values are all lengths while the last value is a color. Within the three length values the **first value determines the shadow’s horizontal offset**, the **second value determines the shadow’s vertical offset**, and the **third value determines the shadow’s blur radius**. **The fourth, and last, value is the shadow’s color**, which can be any of the color values used within the color property.

```css
p {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
```

##### 文本转换(Text Transform)

Similar to the `font-variant` property is the `text-transform` property. While the `font-variant` property looks for an alternate variant of small capitals within a typeface the `text-transform` property will change the text inline. The `text-transform` property accepts five values: `none`, `capitalize`, `uppercase`, `lowercase`, and `inherit`.

The `capitalize` value will `capitalize` the first letter of each word, the `uppercase` value will capitalize all letters, and the `lowercase` property will make every letter lowercase. Using `none` will take any of these inherited values and roll them back to the text default.

```css
p {
  text-transform: uppercase;
}
```

##### 字间距(Letter Spacing)

Using the `letter-spacing` property you can adjust the tracking between letters on a page. Using positive or negative length values you can adjust the spacing between letters, pushing them further apart or pulling them closer together. Using the keyword value `none` will return the space between letters back to their normal distance. Using relative length values with `letter-spacing` will help ensure you are obtaining the correct amount of spacing, however it is recommended to always double check the text.

```css
p {
  letter-spacing: -.5em;
}
```

##### 此间距(Word Spacing)

Much like the `letter-spacing` property you can also adjust the spacing between words using the `word-spacing` property. The `word-spacing` property accepts the same length values and keywords and applies those values to spacing apart words, not letters.

```css
p {
  word-spacing: .25em;
}
```

  ###### Text Properties Example
  
  ```html
<h2><a href="#" title="Sample Blog Post Title">Sample Blog Post Title</a></h2>
<p class="byline">Posted by Shay Howe on February 5th, 2012</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla vehicula nisi vitae rutrum. Donec laoreet, arcu in elementum, dui mi auctor tortor, et lorem massa orci… <a href="#" title="Sample Blog Post Title">Continue reading →</a></p>
  ```
  
  ```css
h2, p {
  color: #555;
  font: 13px/20px Arial, 'Helvetica Neue', 'Lucida Grande', sans-serif;
}
a {
  color: #8ec63f;
}
a:hover {
  color: #f7941d;
}
h2 {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -.9px;
  margin-bottom: 6px;
}
h2 a {
  text-shadow: 1px 1px 0 #75a334;
}
h2 a:hover {
  text-shadow: 1px 1px 0 #d48019;
}
p {
  text-indent: 15px;
}
.byline {
  color: #8c8c8c;
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-style: italic;
  text-indent: 0;
}
p a {
  font-size: 11px;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
}
  ```


#### 网络安全字体(Web Safe Fonts)

By default there a few specific fonts that are pre-installed on every computer, tablet, cell phone, or other browsing capable device. Being installed on every device allows these fonts to be used freely online knowing that no matter what device is browsing the site, the font will render properly. These fonts have become known as “web safe fonts.” There are only a handful of web safe fonts, of which the safest ones to use are listed below.

* Arial
* Courier New, Courier
* GaramondGeorgia
* Lucida Sans, Lucida Grande, Lucida
* Palatino Linotype
* TahomaTimes New Roman ,Times
* Trebuchet
* Verdana

#### 嵌入字体(Embedding Web Fonts)

In recent years an alternative to web safe fonts has arisen. Now the ability exists to upload fonts to a server and include them on a website via the CSS `@font-face` property. This ability has done wonders to online typography. Now, more than ever, type is coming to life online.

```css
@font-face {
  font-family: 'Bryant Normal';
  src: url('bryant-normal.eot');
  src: url('bryant-normal.eot') format('embedded-opentype'),
       url('bryant-normal.woff') format('woff'),
       url('bryant-normal.ttf') format('truetype'),
       url('bryant-normal.svg') format('svg');
}
body {
  font-family: 'Bryant Normal', 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
```

There are, however, some minor pitfalls. Having the ability to use any typefaces on a website does not mean you legally have the authority to do so. Typefaces are a work of art and posting them on your server may allow free reign for others to steal them. The authority to use a typeface all depends on the licensing you have been warranted.

Fortunately, the value for new typefaces has been recognized and companies have begun developing ways to license and include new fonts on websites. Some of these companies, [Typekit](https://typekit.com/) and [Fontdeck](http://fontdeck.com/), work off a subscription model for licensing fonts, while others, [Google Fonts](http://www.google.com/webfonts), license the fonts for free. Before uploading any fonts make sure you have the correct permission to do so. If not, look into one of the companies mentioned to see if they might be able to help you find the same font or a suitable alternative.

Another minor pitfall is browser support. Although the `@font-face` property has been around for a while its support within older browsers is nothing to cheer about. Recent browsers will handle these fonts without any issues while some of the older browsers will not. Luckily, we are able to use these new fonts and specify other fonts to fall back on. These fallbacks come in the way of the `font-family` property discussed above.

#### 参考 & 引用(Citations & Quotes)

Writing online may lead to citing different titles of work or quotations. Additional quotations, including dialog, prose, and quotations from external sources may also exist within a page. There are a mix of different citation and quotation cases, all of which can be covered semantically with HTML using the `cite`, `q`, and `blockquote` elements.

Knowing when to use which elements and attributes to properly markup citations and quotes takes a bit of practice. In general remember, the `cite` element is used to reference a title of work, the `q` element is used for short, inline quotations, and the `blockquote` is used for longer, external quotations.

##### Citing a Title of Work

The `cite` element is used within HTML to specifically cite a title of work. The `cite` element **should not** be confused with the cite attribute. The **element** provides semantic context to the title of work, where the **attribute** has a URI value that serves as a reference source. The `cite` element should be specifically reserved for a title of work and shouldn’t include any other context about the source. A title of work may include a book, movie, song, or so forth. For additional reference, it helps to include a hyperlink to the original source if relevant.

```html
<p><cite><a href="http://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537" title="Steve Jobs">Steve Jobs</a></cite> by Walter Isaacson is truly inspirational.</p>
```

##### Dialog & Prose Quotation

Quoting dialog or prose happens quite often inline amongst other text. For this particular case the `q` inline element, better known as quote, should be applied. The `q` element is used to semantically note dialog or prose and shouldn’t be used for any other quotation purposes.

```html
<p>Steve Jobs once said, <q>“One home run is much better than two doubles.”</q></p>
```

##### Dialog & Prose Citation

An optional attribute to include on the `q` element is the `cite` attribute. The `cite` attribute acts as a citation to the quote in the form of a URI. This attribute doesn’t alter the appearance of the element, it simply adds value to screen readers and other devices. Since the attribute isn’t viewable within the browser it is recommended to provide a hyperlink including this source next to the actual quotation if available.


```html
<p><a href="http://www.businessweek.com/magazine/content/06_06/b3970001.htm" title="Steve Jobs' Magic Kingdom">Steve Jobs</a> once said, <q cite="http://www.businessweek.com/magazine/content/06_06/b3970001.htm">“One home run is much better than two doubles.”</q></p>
```

##### External Quotation

To quote a large block of text, most commonly from an external source and spanning several lines, the `blockquote` element is used. The `blockquote` is a block level element that may include other block level elements nested inside of it including headings and paragraphs.

```html
<blockquote>
  <p>“In most people’s vocabularies, design is a veneer. It’s interior decorating. It’s the fabric of the curtains, of the sofa. But to me, nothing could be further from the meaning of design. Design is the fundamental soul of a human-made creation that ends up expressing itself in successive outer layers of the product.”</p>
  <p>— Steve Jobs in Fortune Magazine</p>
</blockquote>
```

##### External Citation

Longer quotes used within the `blockquote` element should always include a citation. This citation may be extremely simple, such as an author or source, however there may also be fairly more information including multiple citations and links to additional references.

A longer quotation may include a mix of both the `cite` attribute and `cite` element. The `cite` attribute can be included within the `blockquote` element the same as used within the `q` element above. The `cite` element can fall after the actual quote itself and help specify the title of work from which the quote comes from if relevant.

Since the `cite` attribute and `cite` element are purely semantic and don’t add any visual reference for users hyperlinks are also preferred when available. These hyperlinks should highlight both the origin of the quote (author, artist, etcetera) and the title of work in which it first appeared.

```html
<blockquote cite="http://money.cnn.com/magazines/fortune/
fortune_archive/2000/01/24/272277/index.htm">
  <p>“In most people’s vocabularies, design is a veneer. It’s interior decorating. It’s the fabric of the curtains, of the sofa. But to me, nothing could be further from the meaning of design. Design is the fundamental soul of a human-made creation that ends up expressing itself in successive outer layers of the product.”</p>
  <p>— <a href="http://en.wikipedia.org/wiki/Steve_Jobs" title="Steve Jobs">Steve Jobs</a> in <cite><a href="http://money.cnn.com/magazines/fortune/fortune_archive/2000/01/24/272277/index.htm" title="Apple's One-Dollar-a-Year Man">Fortune Magazine</a></cite></p>
</blockquote>
```

  ###### Automating Quotation Marks with CSS

  Rather than adding in your own quotation marks in HTML there is the ability to add them in automatically with CSS. In the past support to get quotation marks to display properly with CSS has been weak, due to browser language support, however with more modern browsers language support is getting better.

  To automatically add quotation marks within CSS the `before` and `after` pseudo-elements are used. These pseudo-elements use the `quotes` and `content` properties to dynamically add quotation marks as necessary.

  Below is an example how these pseudo-elements and properties work to add quotation marks to the `q` element. For more information please take a deeper look into both [pseudo-elements](http://css-tricks.com/pseudo-element-roundup/) and [how to use quotation marks](http://html5doctor.com/blockquote-q-cite/).
  
```css
q {
  quotes: '“' '”' '‘' '’';
}
q:before {
  content: '“';
  content: open-quote;
}
q:after {
  content: '”';
  content: close-quote;
}
```

### Resources & Links

* [Text styling with CSS](http://dev.opera.com/articles/view/29-text-styling-with-css/) via Dev.Opera
* [Quoting and citing with blockquote, q, cite, and the cite attribute](http://html5doctor.com/blockquote-q-cite/) via HTML5 Doctor
* [CSS Font Shorthand Property Cheat Sheet](http://www.impressivewebs.com/css-font-shorthand-property-cheat-sheet/) via Impressive Webs
* [The Elements of Typographic Style](http://www.amazon.com/Elements-Typographic-Style-Robert-Bringhurst/dp/0881791326) by Robert Bringhurst
