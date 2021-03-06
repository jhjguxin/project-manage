## JavaScript 变量

**变量是用于存储信息的容器：**

**x=5; length=66.10;**

### 还记得在学校里学过的代数吗？

当您回忆在学校学过的代数课程时，想到的很可能是：`x=5`, `y=6`, `z=x+y` 等等。

还记得吗，一个字母可以保存一个值（比如 5），并且可以使用上面的信息计算出 z 的值是 11。

您一定没有忘记，对吧。

这些字母称为**变量**，变量可用于保存值 (`x=5`) 或表达式 (`z=x+y`)。

### JavaScript 变量

正如代数一样，JavaScript 变量用于保存值或表达式。

可以给变量起一个简短名称，比如 **x**，或者更有描述性的名称，比如 **length**。

JavaScript 变量也可以保存文本值，比如 **carname="Volvo"**。

**JavaScript 变量名称的规则：**
* 变量对大小写敏感（y 和 Y 是两个不同的变量）
* 变量必须以字母或下划线开始

**注释：**由于 JavaScript 对大小写敏感，变量名也对大小写敏感。

### 实例

在脚本执行的过程中，可以改变变量的值。可以通过其名称来引用一个变量，以此显示或改变它的值。

[本例为您展示原理](http://www.w3school.com.cn/tiy/t.asp?f=jseg_variable)。

#### 声明（创建） JavaScript 变量

在 JavaScript 中创建变量经常被称为“声明”变量。

您可以通过 var 语句来声明 JavaScript 变量：

  ```javascript
  var x;
  var carname;
  ```

在以上声明之后，变量并没有值，不过您可以在声明它们时向变量赋值：

  ```javascript
  var x=5;
  var carname="Volvo";
  ```

**注释：**在为变量赋文本值时，请为该值加引号。

#### 向 JavaScript 变量赋值

通过赋值语句向 JavaScript 变量赋值：

  ```javascript
  x=5;
  carname="Volvo";
  ```

变量名在 = 符号的左边，而需要向变量赋的值在 = 的右侧。

在以上语句执行后，变量 **x** 中保存的值是 **5**，而 **carname** 的值是 **Volvo**。

#### 向未声明的 JavaScript 变量赋值

如果您所赋值的变量还未进行过声明，该变量会自动声明。

这些语句：

  ```javascript
  x=5;
  carname="Volvo"; 
  ```

与这些语句的效果相同：

  ```javascript
  var x=5;
  var carname="Volvo"; 
  ```

#### 重新声明 JavaScript 变量

如果您再次声明了 JavaScript 变量，该变量也不会丢失其原始值。

  ```javascript
  var x=5;
  var x; 
  ```

在以上语句执行后，变量 x 的值仍然是 5。在重新声明该变量时，x 的值不会被重置或清除。

#### JavaScript 算术

正如代数一样，您可以使用 JavaScript 变量来做算术：

  ```javascript
  y=x-5;
  z=y+5;
  ```

在本教程的下一节中，您将学习能够在 JavaScript 变量间使用的运算符。
