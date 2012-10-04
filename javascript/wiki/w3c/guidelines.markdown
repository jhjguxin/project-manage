## JavaScript 指导方针

------------------------
本节的内容是：在使用 JavaScript 进行编码的过程中，其他一些需要了解的重要事项。
------------------------

### JavaScript 对大小写敏感

名为 "myfunction" 的函数和名为 "myFunction" 的函数是两个不同的函数，同样，变量 "myVar" 和变量 "myvar" 也是不同的。
JavaScript 对大小写敏感 - 所以当您创建或使用变量、对象及函数时，请注意字符的大小写。

### 空格

JavaScript 会忽略多余的空格。所以您可以在代码中添加适当的空格，使得代码的可读性更强。下面的两行是等效的：

```javascript
name="Hege"
name = "Hege"
```

### 换行

您可以在文本字符串内部使用反斜杠对代码进行折行。下面的例子是正确的：

```javascript
document.write("Hello \
World!")
```

### 但是不能像这样折行：

```javascript
document.write \
("Hello World!")
```
