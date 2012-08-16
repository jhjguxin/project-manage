## JavaScript Throw 声明

---------------------------------
`throw` 声明的作用是创建 `exception`（异常或错误）。
---------------------------------

### 实例

[throw 声明](http://www.w3school.com.cn/tiy/t.asp?f=jseg_throw)
  如何使用 throw 声明。

### Throw 声明

`throw` 声明的作用是创建 `exception`（异常）。你可以把这个声明与 `try...catch` 声明配合使用，以达到控制程序流并产生精确错误消息的目的。

### 语法：

```javascript
throw(exception)
```

`exception` 可以是字符串、整数、逻辑值或者对象。
**注意：**使用小写字母编写 `throw`。使用大写字母会出错！

#### 实例 1
下面的实例的作用是测定变量 x 的值。如果 x 的值大于 10 或者小于 0，错误就会被抛出 (throw)。这个错误被 catch 的参数捕获后，就会显示出自定义的出错信息。

<pre>
<html>
<html>
<body>
<script type="text/javascript">
var x=prompt("Enter a number between 0 and 10:","")
try
{
if(x>10)
throw "Err1"
else if(x<0)
throw "Err2"
}
catch(er)
{
if(er=="Err1")
alert("Error! The value is too high")
if(er == "Err2")
alert("Error! The value is too low")
}
</script>
</body>
</html>
</html>
</pre>
