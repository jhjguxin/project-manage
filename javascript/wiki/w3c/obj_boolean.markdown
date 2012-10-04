## JavaScript Boolean（逻辑）对象

--------------------------------
Boolean（逻辑）对象用于将非逻辑值转换为逻辑值（true 或者 false）。
--------------------------------

### 实例

[检查逻辑值](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_boolean)
  检查逻辑对象是 true 还是 false。

### 完整的 Boolean 对象参考手册

我们提供 [JavaScript Boolean 对象参考手册](http://www.w3school.com.cn/js/jsref_obj_boolean.asp)，其中包括所有可用于逻辑对象的属性和方法。
该手册包含了对每个属性和方法的详细描述以及相关实例。

### Boolean 对象

您可以将 `Boolean` 对象理解为一个产生逻辑值的对象包装器。
`Boolean`（逻辑）对象用于将非逻辑值转换为逻辑值（`true` 或者 `false`）。

#### 创建 Boolean 对象

使用关键词 `new` 来定义 `Boolean` 对象。下面的代码定义了一个名为 `myBoolean` 的逻辑对象：

```javascript
var myBoolean=new Boolean()
```

**注释：**如果逻辑对象无初始值或者其值为 `0`、`-0`、`null`、`""`、`false`、`undefined` 或者 `NaN`，那么对象的值为 `false`。否则，其值为 `true`（即使当自变量为字符串 `"false"` 时）！

下面的所有的代码行均会创建初始值为 false 的 Boolean 对象。

```javascript
var myBoolean=new Boolean();
var myBoolean=new Boolean(0);
var myBoolean=new Boolean(null);
var myBoolean=new Boolean("");
var myBoolean=new Boolean(false);
var myBoolean=new Boolean(NaN);
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jseg_obj_boolean_create_false)

下面的所有的代码行均会创初始值为 `true` 的 `Boolean` 对象：

```javascript
var myBoolean=new Boolean(1);
var myBoolean=new Boolean(true);
var myBoolean=new Boolean("true");
var myBoolean=new Boolean("false");
var myBoolean=new Boolean("Bill Gates");
```

[亲自试一试](http://www.w3school.com.cn/tiy/t.asp?f=jseg_obj_boolean_create_true)
