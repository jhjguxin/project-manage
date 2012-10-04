## JavaScript 对象简介

-----------------------------
JavaScript 是面向对象的编程语言 (OOP)。
OOP 语言使我们有能力自定义对象和变量类型。
-----------------------------


### 面向对象编程

JavaScript 是面向对象的编程语言 (OOP)。OOP 语言使我们有能力定义自己的对象和变量类型。
别着急，我们会在高级 JavaScript 的部分讲解如何创建自己的对象。现在，我们要开始学习内建的 JavaScript 对象，以及如何使用它们。从下一节开始，我们将具体地依次讲解的这些内建的 JavaScript 对象。
注意：对象只是一种特殊的数据。对象拥有属性和方法。

### 属性

**属性指与对象有关的值。**
在下面的例子中，我们使用字符串对象的长度属性来计算字符串中的字符数目。

<pre>
<javascript>
<script type="text/javascript">

var txt="Hello World!"
document.write(txt.length)

</script>
</javascript>
</pre>

上面的代码输出为：

```javascript
12
```

### 方法

**方法指对象可以执行的行为（或者可以完成的功能）。**
在下面的例子中，我们使用字符串对象的 toUpperCase() 方法来显示大写字母文本。

<pre>
<javascript>
<script type="text/javascript">

var str="Hello world!"
document.write(str.toUpperCase())

</script>
</javascript>
</pre>

上面的代码输出为：

```javascript
HELLO WORLD!
```
