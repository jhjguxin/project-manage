###### LESSON 3

### Box Model & Positioning

One principle necessary to fully understand HTML and CSS is the box model. The box model concept states that every element on a page is a rectangular box, and may include margins, padding, and borders.

That’s worth repeating. **Every element on a page is a rectangular box.**

Having a general understanding of the box model is crucial as websites are primarily built around it. Gaining an understanding of the box mode can be frustrating and difficult, but necessary in order to build prevalent websites. Additionally, knowing how to position elements on a page to build a layout is equally important. There are a few different ways to position elements, each of which depend on the content and circumstance.

#### Box Sizing

By now you are fully aware that every element on a page, block or inline level, is a rectangular box. These boxes can come in different sizes and may have margins, padding, and borders to alter their size. The formation of all of these properties together is referred to as the box model. Let’s take a look at the box model, along with these CSS properties to better understand what we are working with.

**Fig. 3.01**
> Looking at each element individual you can see how they are rectangular, reguardless of their actual presented shape.

![Fig. 3.01](square-elements.jpg)

### The Box Model

As we know, every element is a rectangular box, of which includes a height and width, and may consist of different margins, padding, and borders. All of these values put together build what is known as the [box model](http://css-tricks.com/the-css-box-model/).

The box starts with the `height` and `width` of an element, which may be determined by the type of element, the contents of the element, or by specified `height` and `width` properties. The `height` and `width` is then followed by the `padding` and `border`. The `margin` follows the border, however it is not technically included within the actual size of the box. Although it’s not included within the size of the box, the `margin` does help define the box model.

```css
div {
  background: #fff;
  border: 6px solid #ccc;
  height: 100px;
  margin: 20px;
  padding: 20px;
  width: 400px;
}
```

To break down the total width of an element, including the box model, use the formula:
`margin-right` + `border-right` + `padding-right` + `width` + `padding-left` + `border-left` + `margin-left`

In comparison, the total height of an element, including the box model, can be found using the formula:
`margin-top` + `border-top` + `padding-top` + `height` + `padding-bottom` + `border-bottom` + `margin-bottom`

Fig. 3.02
> The box model broken down.

![Fig. 3.02](box-model.png)

Using the formulas and box context above we can find the total height and width of our example.

Width: `492px` = `20px` + `6px` + `20px` + `400px` + `20px` + `6px` + `20px`
Height: `192px` = `20px` + `6px` + `20px` + `100px` + `20px` + `6px` + `20px`

Let’s take a close look at all of the properties that go into forming the box model.

#### Height & Width

Every element has an inherited `height` and `width`. Depending on the purpose of the element the default `height` and `width` may be adequate. If an element is key to the layout and design of a page it may require a specified `height` and `width`. In this case the default values for **block level elements** may be overridden.

#### CSS Height Property

The default `height` of an element is determined by its content. An element will expand and contract vertically as necessary to accommodate its content. To set a specific height for a **block level** element the **height** property is used.

```css
div {
  height: 100px;
}
```

#### Margin & Padding

Every browser applies a general `margin` and `padding` to elements to help with legibility and discourse. The default values for these properties differ from browser to browser and element to element. In lesson one we discussed using a [CSS reset](http://learn.shayhowe.com/html-css/terminology-syntax-intro#reset) to tune all of these default values down to zero. Using a reset allows us to work from a common ground and allows us to specify our own values.

#### CSS Margin Property

The `margin` property allows us to set the length of space surrounding an element. Margins fall outside of any border and are completely transparent. Margins can be used to help position elements within a particular place on a page or to simply provide breathing room, keeping all other elements a safe distance away.

```css
div {
  margin: 20px;
}
```

#### CSS Padding Property

The `padding` property is very similar to that of the `margin` property, however it falls within any elements border. Paddings will also inherit any backgrounds of an element. **Padding is used to provide spacing within an element, not for positioning an element like the margin property.**

```css
div {
  padding: 20px;
}
```

Fig. 3.03
> A box model breakdown using margins for spacing between elements and padding for spacing inside of an element.

![Fig. 3.03](http://learn.shayhowe.com/assets/courses/html-css-guide/box-model/margin-padding.png)

#### Margin & Padding Declarations

The values for `margin` and `padding` come in both long and short hand form. To set one value for all four sides of an element simply specify one value.

```css
div {
  margin: 20px;
}
```

To set one value for the top and bottom and another value for the left and right of an element specify two values, **top and bottom first then left and right**.

```css
div {
  margin: 10px 20px;
}
```

To set unique values for all four sides specify them in the order of **top, right, bottom, and left**

```css
div {
  margin: 10px 20px 0 15px;
}
```

Additionally, you can set the value for one side at a time using a unique property. Each property starts with `margin` or `padding` respectfully and is then followed with a dash and the side of the box to which the value is to be applied, `top`, `right`, `bottom`, or `left`. As an example, the `padding-left` property takes one value and will set the left padding for that element.

```css
div {
  margin-top: 10px;
  padding-left: 6px;
}
```

#### Borders

Borders fall between the `padding` and `margin` and provide an outline around an element. Every border needs three values, a `size`, `style`, and `color`. Shorthand values fall in the order of `size`, `style` and `color`. Longhand, these three values can be broken up into `border-size`, `border-type`, and `border-color`.

Most commonly you will see one sized, solid, single colored borders. Borders do however have the capability to come in [numerous](http://www.quackit.com/html/codes/html_borders.cfm) sizes, shapes, and colors.

```css
div {
  border: 6px solid #ccc;
}
```

  ##### Length Values

  There are a handful of [length values](https://developer.mozilla.org/en/CSS/length) available to use with margins, padding, and borders, including **relative** and **absolute** values.

  **Relative values** are correlative to the element of which the value is being applied. These values may include `em` and percentages.

  **Absolute values** are fixed units of measurement regardless of the element. These values may include pixels, points, inches, centimeters, and more.
  
#### Floating Elements

Outlining elements within the box model is only half the battle to coding a page layout. The other half involves knowing how to properly align all of the different elements on the page. One way to position elements along side one another is to use the `float` property. The `float` property allows you to take elements and float them `right` or `left`, positioning them directly next to or opposite each other.

Take the common page layout with a `section` and an `aside.` The `section` and `aside`, as block level elements, will be stacked on top of one another by default. However, we want them to sit side by side. By giving each element a specific `width` and floating one of them left and the other to the right we can position them correctly.

Fig. 3.04
> A common page layout including floats and clears.

![Fig. 3.04](floats.png)

There are a few important things to note when [floating elements](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/). The first being, when floating an element it is going to float all the way to the edge of its parent container. If there isn’t a parent element it will float all the way to the edge of the page. Additionally, when floating an element other elements will begin to line up around it within the natural flow of the page.

```css
section {
  float: left;
  margin: 10px;
  width: 600px;
}
aside {
  float: right;
  margin: 10px;
  width: 320px;
}
```

#### Clearing Floated Elements

Whenever an element is floated, it breaks the normal flow of a page and other elements will wrap around the floated one as necessary. Sometimes this is good, such as when floating an image to the side of a block of content, and sometimes this is bad.

To float an element, or handful of elements, and then return the document to its normal flow you use the `clear` property. The `clear` property acts on the element it is applied to and returns the document back to its normal flow, clearing every floated element up to that point.

In the example above, with the `section` and `aside` floated, we want to apply a clear to the `footer` to force it to fall below the two floated elements.

```css
footer {
  clear: both;
}
```

#### Positioning Elements

Apart from floating elements you can also use the `position` property to align elements. The `position` property comes with a couple of different values, all of which have [different functionalities](http://www.alistapart.com/articles/css-positioning-101/) behind them.

The default `position` value is `static`, which keeps elements within their normal flow. The `relative` value allows you to use box offset properties such as `top`, `right`, `bottom` and `left`. The `absolute` and `fixed` values work with box offset properties too, but break the element from the normal flow of a document. These values, `absolute` and `fixed`, correspond directly with an elements parent who has a `position` value of `relative`.

Fig. 3.05
> Absolutely positioning an unordered list within a header.

![Fig. 3.05](http://learn.shayhowe.com/assets/courses/html-css-guide/box-model/position.png)

Taking the example above, the `header` element has been assigned a `position` of `relative` making it function as a static element yet act as the primary container to any absolutely positioned element within it. The `ul` is then absolutely positioned `10px` way from the top right of the `header` element.

Altogether the code for this example would look as follows.

```html
<header>
  <ul>...</ul>
</header>
```

```css
header {
  position: relative;
}
ul {
  position: absolute;
  right: 10px;
  top: 10px;
}
```

#### Box Offset Properties

So long as an element’s `position` is not set to `static` the box offset properties may be used. These offset properties include `top`, `right`, `bottom` and `left`. Depending on the property, they position an element in the direction specified, `top`, `right`, `bottom` or `left`.

For example, `bottom: 32px`; will position an element 32 pixels from the bottom of its parent element with a position value of `relative`. In contrast, `bottom: -32px`; will position an element 32 pixels below its parent element with a position value of `relative`.

  ##### Grids & Frameworks

  There are numerous tools and practices to consider when building the layout of a site. Grids and frameworks have risen to the forefront.

  **Grids**, both vertical and baseline, provide a great way to add cadence to your website and keep everything aligned. There are a handful of different [recommended grids](http://vandelaydesign.com/blog/design/resources-grid-based-design/) that have become popular over the years. You can pick from one of them or implement your own, whatever works best for your project.

  **Frameworks** provide a way to rapidly build a website based on a set of predetermined standards. Depending on the project, frameworks can provide a great starting point or even a complete solution. They can also cause more trouble than they’re worth. Before getting too far over your head, research the framework and make sure you are comfortable working with it and editing it.
  
#### Resources & Links

* [CSS Length Values](https://developer.mozilla.org/en/CSS/length) via Mozilla Developer Network
* [HTML Borders](http://www.quackit.com/html/codes/html_borders.cfm) via Quackit.com
[The CSS Box Model](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/) via CSS-Tricks
[CSS Float Theory](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/) via Smashing Magazine
[CSS Positioning 101](http://www.alistapart.com/articles/css-positioning-101/) via A List Apart
[Resources for Grid-Based Design](http://vandelaydesign.com/blog/design/resources-grid-based-design/) via Vandelay Design
