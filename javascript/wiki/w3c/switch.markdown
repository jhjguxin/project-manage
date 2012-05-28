## JavaScript Switch 语句

------------------
**JavaScript 中的条件语句用于完成基于不同条件的行为。**
------------------

### 实例

[Switch 语句](http://www.w3school.com.cn/tiy/t.asp?f=jseg_switch)
  如何编写一个 Switch 语句。

### JavaScript Switch 语句

如果希望选择执行若干代码块中的一个，你可以使用 switch 语句：

#### 语法：

<pre>
<javascript>
switch(n)
   {
   case 1:
     执行代码块 1
     break
   case 2:
     执行代码块 2
     break
   default:
     如果n即不是1也不是2，则执行此代码
   }
</javascript>
</pre>

**工作原理：**switch 后面的 (`n`) 可以是表达式，也可以（并通常）是变量。然后表达式中的值会与 `case` 中的数字作比较，如果与某个 `case` 相匹配，那么其后的代码就会被执行。`break` 的作用是防止代码自动执行到下一行。

#### 实例：

<pre>
<javascript>
<script type="text/javascript">
//You will receive a different greeting based
//on what day it is. Note that Sunday=0,
//Monday=1, Tuesday=2, etc.

var d=new Date()
theDay=d.getDay()

switch (theDay)
   {
   case 5:
     document.write("Finally Friday")
     break
   case 6:
     document.write("Super Saturday")
     break
   case 0:
     document.write("Sleepy Sunday")
     break
   default:
     document.write("I'm looking forward to this weekend!")
}
</script>
</javascript>
</pre>
