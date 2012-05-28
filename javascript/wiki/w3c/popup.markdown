## JavaScript 消息框

--------------------
**可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。**
--------------------

### 实例

[警告框](http://www.w3school.com.cn/tiy/t.asp?f=jseg_alert)
[带有折行的警告框](http://www.w3school.com.cn/tiy/t.asp?f=jseg_alert2)
[确认框](http://www.w3school.com.cn/tiy/t.asp?f=jseg_confirm)
[提示框](http://www.w3school.com.cn/tiy/t.asp?f=jseg_prompt)

### 警告框

警告框经常用于确保用户可以得到某些信息。

当警告框出现后，用户需要点击确定按钮才能继续进行操作。

#### 语法：

<pre>
<javascript>
alert("文本")
</javascript>
</pre>

### 确认框

确认框用于使用户可以验证或者接受某些信息。

当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。

如果用户点击**确认**，那么返回值为 `true`。如果用户点击**取消**，那么返回值为 `false`。

#### 语法：

<pre>
<javascript>
confirm("文本")
</javascript>
</pre>

### 提示框

提示框经常用于提示用户在进入页面前输入某个值。

当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。
语法：

<pre>
<javascript>
prompt("文本","默认值")
</javascript>
</pre>
