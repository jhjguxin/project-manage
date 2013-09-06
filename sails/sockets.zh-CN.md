# Sockets / Pubsub

## Contents

Sails 使得 HTTP 和 Socket.io 互通, 进而添加 `realtime/pubsub/comet` 功能到你的应用中更加容易.

1\) 使用标准的 controller

2\) 使用 [blueprints](http://en.wikipedia.org/wiki/Blueprint)

3\) 使用内建的 realtime **sync** methods (e.g. `User.publishCreate()`)

4\) 使用 Sails 内建的底层的 **pubsub/socket** 方法 (e.g. `req.listen`, `User.subscribers`)

5\) 通过`req.io` 和 `sails.io` 来获取原生的 `sockect.io`

## Using standard controllers

值得一提的是, Sails 处理 Socket.io 请求与其处理 HTTP 请求的方式相同 -- 通过 Express 接口. 为此它创建一个 fake Express 请求并且自动的路由 socket 请求到合适的 controller 和 action. 例如, 这是一个简单的 controller.

```js
// api/controllers/EchoController.js

module.exports = {
  index: function (req,res) {
    // Get the value of a parameter
    var param = req.param('message');

    // Send a JSON response
    res.json({
      success: true,
      message: param
    });
  }
};
```

From an HTML page, we can access our controller like so:

```js
// socket is globalized by sails
socket.get('/echo',{
  message: 'hi there!'
}, function (response) {
  // response === {success: true, message: 'hi there!'}
  // console.log(response)
});
```

在 controllers 中, 当处理一个 sockect 请求, `req` 以及 `res` 自动获取适当的 actions 使用 `Socket.io` 替代 Express. 如果你需要, `req.socket` 包含一个原生的引用到相应的 `socket.io` socket. 如果你甚至需要直接访问它, 也是可以的. 但是对于主要的应用场景, 使用 Sails 内置的习惯将会保持简洁的语法和通用性.

## Using CRUD Blueprints

The default API blueprint supports pubsub for socket requests out of the box. So for instance if you create a model called User, then send a `socket.io` message to the server from the client requesting a list of users, the client will be automatically subscribed to changes to the users collection for the remainder of the connection:

值得一提的是默认的 API blueprint 具有 socket 请求的 pubsub 支持. 因此在真实场景中如果你创建一个 `User` model, 然后从客户端发送一个 `socket.io` 消息到服务器请求一个用户的列表, 客户端将会自动的订阅用户集合保留的链接:

```js
socket.get('/user', function (response) {
  // response contains a list of all users
});
socket.post('/user',{name: 'foo'}, function (response) {
  // create a new user
});
socket.put('/user/1',{name: 'foobar'}, function (response) {
  // update the user
});
socket.delete('/user/1', function (response) {
  // delete the user
});
```

这些调用将会让你订阅 model 的变更, 翻看你的 `assets/js/app.js` 的文件检查默认的 socket 设定.

## 使用内建的 pubsub 方法

Sails 暴露了一些常用的存取方法来执行通用 `publish/subscribe` 操作. 随后的方法可能将会在你定制的 controller 来给予你在 blueprints 中看到的一些 realtime 的功能的底层访问.

综上, Sails blueprints 通过自动为 model 装载一个集合范围的 `class room` 以及 `instance room` 到每个实例的来完成 reatime 魔法.

### Model.subscribe( req.socket )

#### The "class room"

如果你有一个访客其 sokcet 订阅到 `class room` (e.g. `User.subscribe( req.socket ))`), 当 `User.publishCreate()` 被调用的任何时候它将会收到消息.

Subscribe the request object's socket (`req.socket`) to this model's class room. Your subscribed socket on the client will receive a message every time a new instance of the specified model is created. Any time `publishCreate` is called, sockets subscribed to the class room are automatically subscribed to newly created models' instance rooms (more on that below).

订阅请求对象的 socket (`req.socket`) 到这个 model 的 class room. 当这个 model 的实例被创建的时候你通过 sokect 订阅的客户端将会收到一个消息. 任何时候 `publishCreate` 被调用, 订阅到 class room 的 sockets (客户端) 会自动订阅到 最新创建的 model instances rooms (更多如下).

e.g. `User.subscribe( req.socket )`

### Model.subscribe( req.socket, model[s] )

#### "instance rooms"

如果访问者订阅到一个或者多个 "instance room" (e.g. `User.subscribe( req.socket, listOfUserInstances )`), 她将会收到消息当 `User.publishUpdate()` 或者 `User.publishDestroy()` 被调用的其包含她关注的 (消息).

Subscribe the request object's socket (`req.socket`) to the specified model, id OR array of `models` or ids. Subscribed sockets will receive a message every time the specified model(s) are updated or destroyed from here on out.

订阅请求请求

e.g. + `User.subscribe(req.socket , [7, 3] )` + `Player.subscribe(req.socket , todaysLuckyGuests )` + `User.subscribe(req.socket , req.session.userId )` + `Product.subscribe(req.socket, saleItems )`

<blockquote>IMPORTANT NOTE: `Model.subscribe( req.socket, [])` is not the same as `Model.subscribe( req.socket )`. The latter usage will subscribe to the "class room." The former will subscribe to nothing! This is because the presence of the second argument (in this case the empty list `[]`) signals to Sails that you're subscribing to instances, but in this case you've specified none!</blockquote>

#### Model.publishCreate( values, [socketToOmit] )

Inform all sockets who are members of the "class room" for `Model` that a new instance has been created. Those sockets will also be automatically subscribed to the new instance's room.

Optionally, if `socket` argument is specified, it will be omitted from the broadcast.

```js
// For example
User.publishCreate(newUser)
```

Inform all sockets who are subscribed to the specified `id`'s instance room for `Model` that the instance has been updated.

Optionally, if `socket` argument is specified, it will be omitted from the broadcast.

```js
// For example
User.publishUpdate( 7, {
  name: req.param('name')
});
```

#### Model.publishDestroy( id, [socketToOmit] )

Inform all sockets who are subscribed to the specified `id`'s instance room for `Model` that the instance has been destroyed.

Optionally, if `socket` argument is specified, it will be omitted from the broadcast.

```js
// For example
User.publishDestroy(7);
```

### Using low-level pubsub/socket methods

#### Model.unsubscribe( req.socket, model[s] )

Unsubscribe the request object's socket (`req`) from the specified `models` e.g. `User.unsubscribe(req.socket,[{id: 7}, {id: 2}])`

#### Model.introduce( req.socket, id )

Take all of the class room models and 'introduce' them to a new instance room (good for when a new instance is created-- connecting sockets must subscribe to it) e.g. `User.introduce(req.socket,3)`

#### Model.publish( req.socket, models, message )

Broadcast a `message` to sockets connected to the specified `models` using the request object (`req`). e.g. `User.publish(req,[{id: 7},{id: 2}], {latitude: 31.2325, longitude: 22.1135})`

#### Model.room( id )

Return the room name for the instance in this collection with the given id If id is null, return the name of the "class" or collection-wide room (for listening to `creates`) e.g. `User.room(3)`

#### Model.subscribers( id )

Return the set of sockets subscribed to this instance (if id or) specified class room (if it's not) e.g. `User.subscribers(7)`

See https://github.com/balderdashy/sails/blob/master/lib/pubsub.js for implementation details.

##### req.listen(room)

Subscribe the current socket to broadcasts from the specified room e.g. `req.listen('off the wall chats')`

### Still need more control?

If you need more precise functionality, the raw Socket.io API is pretty straightforward to figure out. You can read more here: http://socket.io/#how-to-use

The root `Socket.io` object is available globally in Sails via sails.io. You can also access the currently connected socket in the request object, via `req.socket` in your controllers.

### FAQ

#### 500 error: "handshake error" returned from socket.io request

This is most likely because you don't have any express cookies yet in your current session and are requesting from a domain other than your server. To alleviate this and prevent the error from cropping back up, you should build in some kind of request to your server BEFORE you initialize your `socket.io` connection. So, if you're using Mast, something like this on your client side:

```js
// location of your server
url = "http://localhost:1337/"
// dummy request to the server, retrieves cookie. using jQuery, you can use whatever
$.get(url, function() {})
// NOW setup socket.io
Mast.raise({ baseurl : url })
```
