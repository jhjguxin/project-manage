## JavaScript If...Else 语句

----------------
**JavaScript 中的条件语句用于完成不同条件下的行为。**
----------------

### 实例

[If 语句](http://www.w3school.com.cn/tiy/t.asp?f=jseg_ifthen)
  如何编写一个 If 语句。
[If...else 语句](http://www.w3school.com.cn/tiy/t.asp?f=jseg_ifthenelse)
  如何编写 if...else 语句。
[If..else if...else 语句](http://www.w3school.com.cn/tiy/t.asp?f=jseg_elseif)
  如何编写 if..else if...else 语句
[随机链接](http://www.w3school.com.cn/tiy/t.asp?f=jseg_randomlink)
  本例演示一个随机的链接，当您单击这个链接时，会打开某个随机的网站。

### 条件语句

在您编写代码时，经常需要根据不同的条件完成不同的行为。可以在代码中使用条件语句来完成这个任务。

在 JavaScript 中，我们可以使用下面几种条件语句：

* if 语句
    在一个指定的条件成立时执行代码。
* if...else 语句
    在指定的条件成立时执行代码，当条件不成立时执行另外的代码。
* if...else if....else 语句
    使用这个语句可以选择执行若干块代码中的一个。
* switch 语句
    使用这个语句可以选择执行若干块代码中的一个。

### If 语句

如果希望指定的条件成立时执行代码，就可以使用这个语句。

语法：

  ```javascript
  if (条件)
  {
  条件成立时执行代码
  }
  ```

**注意：**请使用小写字母。使用大写的 IF 会出错！

#### 实例 1

<pre>
<javascript>
<script type="text/javascript">
//Write a "Good morning" greeting if
//the time is less than 10

var d=new Date()
var time=d.getHours()

if (time<10) 
{
document.write("<b>Good morning</b>")
}
</script>
</javascript>
</pre>

#### 实例 2

<pre>
<javascript>
<script type="text/javascript">
<script type="text/javascript">
//Write "Lunch-time!" if the time is 11

var d=new Date()
var time=d.getHours()

if (time==11) 
{
document.write("<b>Lunch-time!</b>")
}
</script>
</script>
</javascript>
</pre>

**注意：**请使用双等号 (`==`) 来**比较**变量！

**注意：**在语法中没有 else。**仅仅当条件为 true 时**，代码才会执行。

### If...else 语句

如果希望条件成立时执行一段代码，而条件不成立时执行另一段代码，那么可以使用 if....else 语句。

#### 语法：

<pre>
<javascript>
if (条件)
{
条件成立时执行此代码
}
else
{
条件不成立时执行此代码
}
</javascript>
</pre>

#### 实例

<pre>
<javascript>
<script type="text/javascript">
//If the time is less than 10,
//you will get a "Good morning" greeting.
//Otherwise you will get a "Good day" greeting.

var d = new Date()
var time = d.getHours()

if (time < 10) 
{
document.write("Good morning!")
}
else
{
document.write("Good day!")
}
</script>
</javascript>
</pre>

### If...else if...else 语句

当需要选择多套代码中的一套来运行时，请使用 if....else if...else 语句。

#### 语法：

<pre>
<javascript>
if (条件1)
{
条件1成立时执行代码
}
else if (条件2)
{
条件2成立时执行代码
}
else
{
条件1和条件2均不成立时执行代码
}
</javascript>
</pre>

#### 实例：

<pre>
<javascript>
<script type="text/javascript">

var d = new Date()
var time = d.getHours()

if (time<10)
{
document.write("<b>Good morning</b>")
}
else if (time>10 && time<16)
{
document.write("<b>Good day</b>")
}
else
{
document.write("<b>Hello World!</b>")
}
</script>
</javascript>
</pre>
