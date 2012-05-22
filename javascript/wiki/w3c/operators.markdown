## JavaScript 运算符

------------
**运算符 = 用于赋值。**

**运算符 + 用于加值。**
------------

运算符 = 用于给 JavaScript 变量赋值。

算术运算符 + 用于把值加起来。

  ```javascripts
  y=5;
  z=2;
  x=y+z; 
  ```

在以上语句执行后，x 的值是 7。

### JavaScript 算术运算符

算术运算符用于执行变量与/或值之间的算术运算。

给定 **y=5**，下面的表格解释了这些算术运算符：

<table>
  <thead>
    <tr>
    <th>运算符</th><th>描述</th><th>例子</th><th>结果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>+</td><td>加</td><td>x=y+2</td><td>x=7</td>
    </tr>
    <tr>
    <td>-</td><td>减</td><td>x</td><td>=y-2</td><td>x=3</td>
    </tr>
    <tr>
    <td>*</td><td>乘</td><td>x=y*2</td><td>x=10</td>
    </tr>
    <tr>
    <td>/</td><td>除</td><td>x=y/2</td><td>x=2.5</td>
    </tr>
    <tr>
    <td>%</td><td>求余数 (保留整数)</td><td>x=y%2</td><td>x=1</td>
    </tr>
    <tr>
    <td>++</td><td>累加</td><td>x=++y</td><td>x=6</td>
    </tr>
    <tr>
    <td>--</td><td>递减</td><td>x=--y</td><td>x=4</td> 
    </tr>
  </tbody>
</table>

JavaScript 赋值运算符

赋值运算符用于给 JavaScript 变量赋值。

给定 x=10 和 y=5，下面的表格解释了赋值运算符：
<table>
  <thead>
    <tr>
      <th>运算符 </th><th>例子 </th><th>等价于 </th><th>结果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>= </td><td>x=y </td><td>  </td><td>x=5</td>
    </tr>
    <tr>
      <td>+= </td><td>x+=y </td><td>x=x+y </td><td>x=15</td>
    </tr>
    <tr>
      <td>-= </td><td>x-=y </td><td>x=x-y </td><td>x=5</td>
    </tr>
    <tr>
      <td>*= </td><td>x*=y </td><td>x=x*y </td><td>x=50</td>
    </tr>
    <tr>
      <td>/= </td><td>x/=y </td><td>x=x/y </td><td>x=2</td>
    </tr>
    <tr>
      <td>%= </td><td>x%=y </td><td>x=x%y </td><td>x=0</td>
    </tr>
  </tbody>
</table>

### 用于字符串的 + 运算符

`+` 运算符用于把文本值或字符串变量加起来（连接起来）。

如需把两个或多个字符串变量连接起来，请使用 `+` 运算符。

  ```javascript
  txt1="What a very";
  txt2="nice day";
  txt3=txt1+txt2;
  ```

在以上语句执行后，变量 `txt3` 包含的值是 `"What a verynice day"`。

要想在两个字符串之间增加空格，需要把空格插入一个字符串之中：

  ```javascript
  txt1="What a very ";
  txt2="nice day";
  txt3=txt1+txt2;
  ```

或者把空格插入表达式中：

  ```javascript
  txt1="What a very";
  txt2="nice day";
  txt3=txt1+" "+txt2;
  ```

在以上语句执行后，变量 `txt3` 包含的值是：

"What a very nice day"

### 对字符串和数字进行加法运算

请看这些例子：

  ```html
  x=5+5;
  document.write(x);

  x="5"+"5";
  document.write(x);

  x=5+"5";
  document.write(x);

  x="5"+5;
  document.write(x);
  ```

[TIY](http://www.w3school.com.cn/tiy/t.asp?f=jseg_variables)

**规则是：**

**如果把数字与字符串相加，结果将成为字符串。**

