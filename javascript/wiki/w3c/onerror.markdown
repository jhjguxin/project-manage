## JavaScript onerror 事件

--------------------------
使用 onerror 事件是一种老式的标准的在网页中捕获 Javascript 错误的方法。
--------------------------

### 实例
[onerror 事件](http://www.w3school.com.cn/tiy/t.asp?f=jseg_onerror)
  如何使用 onerror 事件捕获网页中的错误。（chrome、opera、safari 浏览器不支持）

### onerror 事件

我们刚讲过如何使用 `try...catch` 声明来捕获网页中的错误。现在，我们继续讲解如何使用 `onerror` 事件来达到相同的目的。
只要页面中出现脚本错误，就会产生 `onerror` 事件。
如果需要利用 `onerror` 事件，就必须创建一个处理错误的函数。你可以把这个函数叫作 `onerror` 事件处理器 (onerror event handler)。这个事件处理器使用三个参数来调用：`msg`（错误消息）、`url`（发生错误的页面的 url）、`line`（发生错误的代码行）。

### 语法：

<pre>
<javascript>
onerror=handleErrfunction handleErr(msg,url,l)
{
//Handle the error here
return true or false
}
</javascript>
</pre>

浏览器是否显示标准的错误消息，取决于 onerror 的返回值。如果返回值为 false，则在控制台 (JavaScript console) 中显示错误消息。反之则不会。

### 实例：

下面的例子展示如何使用 onerror 事件来捕获错误：

<pre>
<html>
<html>
<head>
<script type="text/javascript">
onerror=handleErr
var txt=""

function handleErr(msg,url,l)
{
txt="There was an error on this page.\n\n"
txt+="Error: " + msg + "\n"
txt+="URL: " + url + "\n"
txt+="Line: " + l + "\n\n"
txt+="Click OK to continue.\n\n"
alert(txt)
return true
}

function message()
{
adddlert("Welcome guest!")
}
</script>
</head>

<body>
<input type="button" value="View message" onclick="message()" />
</body>

</html>
</html>
</pre>

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_onerror)
