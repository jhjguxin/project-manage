## 把 JavaScript 放置到何处

当页面载入时，会执行位于 body 部分的 JavaScript。

当被调用时，位于 head 部分的 JavaScript 才会被执行。

### 实例

[head 部分](http://www.w3school.com.cn/tiy/t.asp?f=jseg_headsection)
  包含函数的脚本位于文档的 head 部分。这样我们就可以确保在调用函数前，脚本已经载入了。

[body 部分](http://www.w3school.com.cn/tiy/t.asp?f=jseg_bodysection)
  执行位于 body 部分的脚本。
[外部 JavaScript](http://www.w3school.com.cn/tiy/t.asp?f=jseg_externalexample)
  如何访问外部脚本。

### 在哪里放置 JavaScript

页面中的脚本会在页面载入浏览器后立即执行。我们并不总希望这样。有时，我们希望当页面载入时执行脚本，而另外的时候，我们则希望当用户触发事件时才执行脚本。

#### 位于 head 部分的脚本：

当脚本被调用时，或者当事件被触发时，脚本就会被执行。当你把脚本放置到 head 部分后，就可以确保在需要使用脚本之前，它已经被载入了。

  ```html
  <html>
  <head>
  <script type="text/javascript">
  ....
  </script>
  </head>
  ....
  ```

#### 位于 body 部分的脚本：

在页面载入时脚本就会被执行。当你把脚本放置于 body 部分后，它就会生成页面的内容。

  ```html
  <html>
    <head>
    </head>

    <body>
      <script type="text/javascript">
        ....
      </script>
    </body>
  </html>
  ```

#### 在 body 和 head 部分的脚本：

你可以在文档中放置任何数量的脚本，因此你既可以把脚本放置到 body，又可以放置到 head 部分。

  ```html
  <html>
    <head>
      <script type="text/javascript">
        ....
      </script>
    </head>

    <body>
      <script type="text/javascript">
        ....
      </script>
    </body>
  </html>
  ```

#### 使用外部 JavaScript

有时，你也许希望在若干个页面中运行 JavaScript，同时不在每个页面中写相同的脚本。

为了达到这个目的，你可以将 JavaScript 写入一个外部文件之中。然后以 `.js` 为后缀保存这个文件。

**注意：**外部文件不能包含 `<script>` 标签。

然后把 `.js` 文件指定给 `<script>` 标签中的 "src" 属性，就可以使用这个外部文件了：

  ```html
  <html>
    <head>
      <script src="xxx.js">....</script>
    </head>
    <body>
    </body>
  </html>
  ```

**提示：**您可以把 .js 文件放到网站目录中通常存放脚本的子目录中，这样更容易管理和维护。

