## JavaScript For 循环

-------------------
**JavaScript 中的循环用来将同一段代码执行指定的次数（或者当指定的条件为 true 时）。**
-------------------

### 实例

[For 循环](http://www.w3school.com.cn/tiy/t.asp?f=jseg_fornext)
  如何编写 loop 循环来按照指定的次数执行相同的代码。
[循环产生 HTML 标题](http://www.w3school.com.cn/tiy/t.asp?f=jseg_fornext_header)
  如何使用Loop循环来产生不同的HTML标题。

-------------------
### JavaScript 循环

在编写代码时，你常常希望反复执行同一段代码。我们可以使用循环来完成这个功能，这样就用不着重复地写若干行相同的代码。

#### JavaScript 有两种不同种类的循环：

**for**
  将一段代码循环执行指定的次数
**while**
  当指定的条件为 true 时循环执行代码

----------------------

#### for 循环

在脚本的运行次数已确定的情况下使用 for 循环。

##### 语法：

<pre>
<javascript>
for (变量=开始值;变量<=结束值;变量=变量+步进值)
{
    需执行的代码
}
</javascript>
</pre>

##### 实例：

解释：下面的例子定义了一个循环程序，这个程序中 `i` 的起始值为 `0`。每执行一次循环，`i` 的值就会累加一次 `1`，循环会一直运行下去，直到 `i` 等于 `10` 为止。

**注释：**步进值可以为负。如果步进值为负，需要调整 **for** 声明中的比较运算符。

<pre>
<javascript>
<html>
<body>

<script type="text/javascript">
var i=0
for (i=0;i<=10;i++)
{
document.write("The number is " + i)
document.write("<br />")
}
</script>

</body>
</html>
</javascript>
</pre>

##### 结果：

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

### while 循环

我们将在下一节中学习 while 循环。
