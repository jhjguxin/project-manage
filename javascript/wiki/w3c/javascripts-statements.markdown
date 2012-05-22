## JavaScript 语句

**JavaScript 是由浏览器执行的语句序列。**

### JavaScript 语句

JavaScript 语句是发给浏览器的命令。这些命令的作用是告诉浏览器要做的事情。

这个 JavaScript 语句告诉浏览器向网页输出 "Hello world"：

  ```javascript
  document.write("Hello world");
  ```

通常要在每行语句的结尾加上一个分号。大多数人都认为这是一个好的编程习惯，而且在 web 上的 JavaScript 案例中也常常会看到这种情况。

**分号是可选的**（根据 JavaScript 标准），浏览器把行末作为语句的结尾。正因如此，常常会看到一些结尾没有分号的例子。

**注释：**通过使用分号，可以在一行中写多条语句。

### JavaScript 代码

JavaScript 代码是 JavaScript 语句的序列。

浏览器按照编写顺序依次执行每条语句。

本例向网页输出一个标题和两个段落：

  ```javascript
  <script type="text/javascript">
  document.write("<h1>This is a header</h1>");
  document.write("<p>This is a paragraph</p>");
  document.write("<p>This is another paragraph</p>");
  </script>
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_statements)

#### JavaScript 代码块

JavaScript 可以分批地组合起来。

代码块以左花括号开始，以右花括号结束。

代码块的作用是一并地执行语句序列。

本例向网页输出一个标题和两个段落：

  ```html
  <script type="text/javascript">
  {
    document.write("<h1>This is a header</h1>");
    document.write("<p>This is a paragraph</p>");
    document.write("<p>This is another paragraph</p>");
    }
  </script>
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_blocks)

上例的用处不大。仅仅演示了代码块的使用而已。通常，代码块用于在函数或条件语句中把若干语句组合起来（比方说如果条件满足，就可以执行这个语句分组了）。

您会在稍后的章节学习到更多有关函数和条件的知识。
