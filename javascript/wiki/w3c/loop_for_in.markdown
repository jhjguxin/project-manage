## JavaScript for...in 语句

------------------------------------
`for...in` 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
------------------------------------

### 实例
[for...in 语句](http://www.w3school.com.cn/tiy/t.asp?f=jseg_array_for_in)
  如何使用 for...in 语句来遍历数组内的元素。

-------------------------------------

### JavaScript for...in 语句

`for...in` 语句用于对数组或者对象的属性进行循环操作。
`for ... in` 循环中的代码每执行一次，就会对数组的元素或者对象的属性进行一次操作

#### 语法：

<pre>
<javascript>
for (变量 in 对象)
{
    在此执行代码
}
</javascript>
</pre>

“变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。

#### 实例：

使用 for ... in 循环遍历数组。

<pre>
<html>
<html>
<body>

<script type="text/javascript">
var x
var mycars = new Array()
mycars[0] = "Saab"
mycars[1] = "Volvo"
mycars[2] = "BMW"

for (x in mycars)
{
document.write(mycars[x] + "<br />")
}
</script>

</body>
</html>
</html>
</pre>
