## JavaScript 比较和逻辑运算符

----------
比较和逻辑运算符用于测试 true 或 false。
----------

比较运算符

比较运算符在逻辑语句中使用，以测定变量或值是否相等。

给定 x=5，下面的表格解释了比较运算符：

<table>
  <tr>
    <th>运算符</th><th>描述</th><th>例子</th>
  </tr>
  <tr>
    <td>==</td><td>等于</td><td>x==8 为 false</td>
  </tr>
  <tr>
    <td>===</td><td>全等（值和类型）</td><td>x===5 为 true；x==="5" 为 false</td>
  </tr>
  <tr>
    <td>!=</td><td>不等于</td><td>x!=8 为 true</td>
  </tr>
  <tr>
    <td>></td><td>大于</td><td>x>8 为 false</td>
  </tr>
  <tr>
    <td><</td><td>小于</td><td>x<8 为 true</td>
  </tr>
  <tr>
    <td>>=</td><td>大于或等于</td><td>x>=8 为 false</td>
  </tr>
  <tr>
    <td><=</td><td>小于或等于</td><td>x<=8 为 true</td>
  </tr>
</table>

### 如何使用

可以在条件语句中使用比较运算符对值进行比较，然后根据结果来采取行动：

  ```javascript
  if (age<18) document.write("Too young");
  ```

您将在本教程的下一节中学习更多有关条件语句的知识。

### 逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑。

给定 `x=6` 以及 `y=3`，下表解释了逻辑运算符：

<table>
  <tr>
    <th>运算符</th><th>描述</th><th>例子</th>
  </tr>
  <tr>
    <td>&&</td><td>and</td><td>(x < 10 && y > 1) 为 true</td>
  </tr>
  <tr>
    <td>||</td><td>or</td><td>(x==5 || y==5) 为 false</td>
  </tr>
  <tr>
    <td>!</td><td>not</td><td>!(x==y) 为 true</td>
  </tr>
</table>

### 条件运算符

JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符。

#### 语法

  ```javascript
  variablename=(condition)?value1:value2 
  ```

#### 例子

  ```javascript
  greeting=(visitor=="PRES")?"Dear President ":"Dear ";
  ```

如果变量 visitor 中的值是 "PRES"，则向变量 greeting 赋值 "Dear President "，否则赋值 "Dear"。

