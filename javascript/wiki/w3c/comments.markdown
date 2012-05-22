## JavaScript 注释

**JavaScript 注释可用于增强代码的可读性。**

### JavaScript 注释

可以添加注释来对 JavaScript 进行解释，或者提高其可读性。

单行的注释以 `//` 开始。

本例用单行注释来解释代码：

  ```javascripts
  <script type="text/javascript">
    // 这行代码输出标题：
    document.write("<h1>This is a header</h1>");
    // 这行代码输出段落：
    document.write("<p>This is a paragraph</p>");
    document.write("<p>This is another paragraph</p>");
  </script>
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_comments_1)

### JavaScript 多行注释

多行注释以 `/*` 开头，以 `*/` 结尾。

本例使用多行注释来解释代码：

  ```javascripts
  <script type="text/javascript">
    /*
    下面的代码将输出
    一个标题和两个段落
    */
    document.write("<h1>This is a header</h1>");
    document.write("<p>This is a paragraph</p>");
    document.write("<p>This is another paragraph</p>");
  </script>
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_comments_2)

### 使用注释来防止执行

在本例中，我们用注释来阻止一行代码的执行：

  ```html
  <script type="text/javascript">
  document.write("<h1>This is a header</h1>");
  document.write("<p>This is a paragraph</p>");
  //document.write("<p>This is another paragraph</p>");
  </script>
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_comments_3)

在本例中，我们用注释来阻止若干行代码的执行：

  ```html
  <script type="text/javascript">
    /*
    document.write("<h1>This is a header</h1>");
    document.write("<p>This is a paragraph</p>");
    document.write("<p>This is another paragraph</p>");
    */
  </script>
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_comments_4)

### 在行末使用注释

在本例中，注释放置在语句的行末：

  ```html
  <script type="text/javascript">
    document.write("Hello"); // 输出 "Hello" 
    document.write("World"); // 输出 "World" 
  </script>
  ```

