## JavaScript While 循环

-----------------------
JavaScript 中的循环用来将同一段代码执行指定的次数（或者当指定的条件为 true 时）。
-----------------------

### 实例

[While 循环](http://www.w3school.com.cn/tiy/t.asp?f=jseg_while)
  利用 while 循环在指定条件为 true 时来循环执行代码。
[Do while 循环](http://www.w3school.com.cn/tiy/t.asp?f=jseg_dowhiles)
  利用 do...while 循环在指定条件为 true 时来循环执行代码。在即使条件为 false 时，这种循环也会至少执行一次。这是因为在条件被验证前，这个语句就会执行。

------------------------

### while 循环

`while` 循环用于在指定条件为 `true` 时循环执行代码。

#### 语法：

<pre>
<javascript>
while (变量<=结束值)
{
    需执行的代码
}
</javascript>
</pre>

**注意：**除了<=，还可以使用其他的比较运算符。

#### 实例：

解释：下面的例子定义了一个循环程序，这个循环程序的参数 `i` 的起始值为 `0`。该程序会反复运行，直到 `i` 大于 `10` 为止。`i` 的步进值为 `1`。

<pre>
<javascript>
<html>
<body>
<script type="text/javascript">
var i=0
while (i<=10)
{
document.write("The number is " + i)
document.write("<br />")
i=i+1
}
</script>
</body>
</html>
</javascript>
</pre>

#### 结果：

<pre>
<javascript>
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
The number is 10
</javascript>
</pre>

### do...while 循环

`do...while` 循环是 `while` 循环的变种。该循环程序在初次运行时会首先执行一遍其中的代码，然后当指定的条件为 true 时，它会继续这个循环。所以可以这么说，`do...while` 循环为执行至少一遍其中的代码，即使条件为 `false`，因为其中的代码执行后才会进行条件验证。

#### 语法：

<pre>
<javascript>
do
{
    需执行的代码
}
while (变量<=结束值)
</javascript>
</pre>

#### 实例：

<pre>
<javascript>
<html>
<body>
<script type="text/javascript">
var i=0
do
{
document.write("The number is " + i)
document.write("<br />")
i=i+1
}
while (i<0)
</script>
</body>
</html>
</javascript>
</pre>

#### 结果：

  ```javascript
  The number is 0
  ```
