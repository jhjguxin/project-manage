## 如何实现 JavaScript

HTML 的 `<script>` 标签用于把 JavaScript 插入 HTML 页面当中。

### 实例

[生成文本](http://www.w3school.com.cn/tiy/t.asp?f=jseg_text)
  如何在页面中写文本

[生成普通文本和标签](http://www.w3school.com.cn/tiy/t.asp?f=jseg_formattext)
  如何使用 JavaScript 在页面中写入普通文本和标签。

### 如何把 JavaScript 放入 HTML 页面

<pre>
<html>
  <html>
    <body><!--have the same result when use 'head' tag-->
      <script type="text/javascript">
        document.write("Hello World!");
      </script>
    </body>
  </html>
</html>
</pre>

上面的代码会在 HTML 页面中产生这样的输出：

  ```html
  Hello World! 
  ```

#### 实例解释：

如果需要把一段 JavaScript 插入 HTML 页面，我们需要使用 `<script>` 标签（同时使用 type 属性来定义脚本语言）。

这样，`<script type="text/javascript">` 和 `</script>` 就可以告诉浏览器 JavaScript 从何处开始，到何处结束。

  ```html
  <html>
    <body>
      <script type="text/javascript">
        ...
    </script>
    </body>
  </html>
  ```

`document.write` 字段是标准的 JavaScript 命令，用来向页面写入输出。

把 `document.write` 命令输入到 `<script type="text/javascript">`与`</script>`之间后，浏览器就会把它当作一条 JavaScript 命令来执行。这样浏览器就会向页面写入 "Hello World!"。

### 如何与老的浏览器打交道

那些不支持 JavaScript 的浏览器会把脚本作为页面的内容来显示。为了防止这种情况发生，我们可以使用这样的 HTML 注释标签：

  ```html
  <html>
    <body>
      <script type="text/javascript">
      <!--
        document.write("Hello World!");
      //-->
      </script>
    </body>
  </html>
  ```

注释行末尾的两个正斜杠是 JavaScript 的注释符号，它会阻止 JavaScript 编译器对这一行的编译。

