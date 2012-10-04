## JavaScript Date（日期）对象

---------------------------------
日期对象用于处理日期和时间。
---------------------------------

### JavaScript Date（日期）对象 实例

[返回当日的日期和时间](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_date)
  如何使用 Date() 方法获得当日的日期。
[getTime()](http://www.w3school.com.cn/tiy/t.asp?f=jseg_date_gettime)
  getTime() 返回从 1970 年 1 月 1 日至今的毫秒数。
[setFullYear()](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_date_setfullyear2)
  如何使用 setFullYear() 设置具体的日期。
[toUTCString()](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_date_toutcstring)
  如何使用 toUTCString() 将当日的日期（根据 UTC）转换为字符串。
[getDay()](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_date_date_weekday)
  如何使用 getDay() 和数组来显示星期，而不仅仅是数字。
[显示一个钟表](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_date_timing_clock)
  如何在网页上显示一个钟表。

### 完整的 Date 对象参考手册

我们提供 [JavaScript Date 对象参考手册](http://www.w3school.com.cn/js/jsref_obj_date.asp)，其中包括所有可用于日期对象的属性和方法。
该手册包含了对每个属性和方法的详细描述以及相关实例。

### 定义日期

Date 对象用于处理日期和时间。
可以通过 `new` 关键词来定义 `Date` 对象。以下代码定义了名为 `myDate` 的 `Date` 对象：

```javascript
var myDate=new Date()
```

注释：`Date` 对象自动使用当前的日期和时间作为其初始值。

### 操作日期

通过使用针对日期对象的方法，我们可以很容易地对日期进行操作。
在下面的例子中，我们为日期对象设置了一个特定的日期 (2008 年 8 月 9 日)：

```javascript
var myDate=new Date()
myDate.setFullYear(2008,7,9)
```

注意：表示月份的参数介于 0 到 11 之间。也就是说，如果希望把月设置为 8 月，则参数应该是 7。

在下面的例子中，我们将日期对象设置为 `5` 天后的日期：

```javascript
var myDate=new Date()
myDate.setDate(myDate.getDate()+5)
```

注意：如果增加天数会改变月份或者年份，那么日期对象会自动完成这种转换。

### 比较日期

日期对象也可用于比较两个日期。
下面的代码将当前日期与 2008 年 8 月 9 日做了比较：

<pre>
<javascript>
var myDate=new Date();
myDate.setFullYear(2008,7,9);

var today = new Date();

if (myDate>today)
{
alert("Today is before 9th August 2008");
}
else
{
alert("Today is after 9th August 2008");
}
</javascript>
</pre>
