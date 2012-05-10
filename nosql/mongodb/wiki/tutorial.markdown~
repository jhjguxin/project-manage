# Quickstart

* [Quickstart OS X](http://www.mongodb.org/display/DOCS/Quickstart+OS+X)
* [Quickstart Unix](http://www.mongodb.org/display/DOCS/Quickstart+Unix)
* [Quickstart Windows](http://www.mongodb.org/display/DOCS/Quickstart+Windows)

NOTICE: For an even quicker start go to [http://try.mongodb.org/](http://try.mongodb.org/)

## Installation Guides

Consider the [installation guides from the MongoDB Manual]:

* [Install MongoDB on RedHat Enterprise Linux, CentOS, or Fedora Linux](http://docs.mongodb.org/master/tutorial/install-mongodb-on-redhat-centos-or-fedora-linux/)
* [Install MongoDB on Debian, Ubuntu or other Linux Systems](http://docs.mongodb.org/master/tutorial/install-mongodb-on-debian-or-ubuntu-linux/)
* [Install MongoDB on other Unix/Linux Systems](http://docs.mongodb.org/master/tutorial/install-mongodb-on-linux/)
* [Install MongoDB on OS X](http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/)

## See Also

* [SQL to Mongo Mapping Chart](http://www.mongodb.org/display/DOCS/SQL+to+Mongo+Mapping+Chart)
* [Tutorial](http://www.mongodb.org/display/DOCS/Tutorial)
* [Tutorials in the MongoDB Manual](http://docs.mongodb.org/manual/applications/#tutorials)
* The [MongoDB Manual](http://docs.mongodb.org/manual)

# Quickstart Unix

Consider one of the following installation tutorials from the new Manual for more specific instructions for getting started with MongoDB.

* [Install MongoDB on RedHat Enterprise Linux, CentOS, or Fedora Linux](http://docs.mongodb.org/master/tutorial/install-mongodb-on-redhat-centos-or-fedora-linux/)
* [Install MongoDB on Debian, Ubuntu or other Linux Systems](http://docs.mongodb.org/master/tutorial/install-mongodb-on-debian-or-ubuntu-linux/)
* [Install MongoDB on other Unix/Linux Systems](http://docs.mongodb.org/master/tutorial/install-mongodb-on-linux/)
* [Install MongoDB on OS X](http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/)

Alternately, you may continue reading this document for installation instructions.

## Download

NOTICE: If you are running an old version of Linux and the database doesn't start, or gives a floating point exception, try the "legacy static" version on the [Downloads](http://www.mongodb.org/display/DOCS/Downloads) page instead of the versions listed below.

### Via package manager

Ubuntu and Debian users can now install nightly snapshots via apt. See [Ubuntu and Debian packages](http://www.mongodb.org/display/DOCS/Ubuntu+and+Debian+packages) for details.

CentOS and Fedora users should head to the [CentOS and Fedora Packages](http://www.mongodb.org/display/DOCS/CentOS+and+Fedora+Packages) page.

#### 32-bit Linux binaries
Note: 64 bit is recommended.

<pre>
<shell>
$ # replace "1.6.4" in the url below with the version you want
$ curl http://downloads.mongodb.org/linux/mongodb-linux-i686-1.6.4.tgz > mongo.tgz
$ tar xzf mongo.tgz
</shell>
</pre>

#### 64-bit Linux binaries

<pre>
<shell>
$ # replace "1.6.4" in the url below with the version you want
$ curl http://downloads.mongodb.org/linux/mongodb-linux-x86_64-1.6.4.tgz > mongo.tgz
$ tar xzf mongo.tgz
</shell>
</pre>

#### Other Unixes

See the [Downloads](http://www.mongodb.org/display/DOCS/Downloads) page for some binaries, and also the Building page for information on [building](http://www.mongodb.org/display/DOCS/Building) from source.

## Create a data directory

By default MongoDB will store data in /data/db, but it won't automatically create that directory. To create it, do:

  ```shell
  $ sudo mkdir -p /data/db/
  $ sudo chown `id -u` /data/db
  ```

You can also tell MongoDB to use a different data directory, with the --dbpath option.

## Run and connect to the server

First, start the MongoDB server in one terminal:

  ```shell
  $ ./mongodb-xxxxxxx/bin/mongod
  ```

In a separate terminal, start the shell, which will connect to localhost by default:

<pre>
<shell>
$ ./mongodb-xxxxxxx/bin/mongo
> db.foo.save( { a : 1 } )
> db.foo.find()
</shell>
</pre>

Congratulations, you've just saved and retrieved your first document with MongoDB!

# Tutorial

* [Running MongoDB](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-RunningMongoDB)
* [Getting A Database Connection](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-GettingADatabaseConnection)
* [Dynamic Schema ("Schema Free")](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-DynamicSchema%28%22SchemaFree%22%29)
* [Inserting Data into A Collection](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-InsertingDataintoACollection)
* [Accessing Data From a Query](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-AccessingDataFromaQuery)
* [Specifying What the Query Returns](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-SpecifyingWhattheQueryReturns)
* [findOne() - Syntactic Sugar](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-%7B%7BfindOne%28%29%7D%7D%5CSyntacticSugar)
* [Limiting the Result Set via limit()](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-LimitingtheResultSetvia%7B%7Blimit%28%29%7D%7D)
* [More Help](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-MoreHelp)
* [What Next](http://www.mongodb.org/display/DOCS/Tutorial#Tutorial-WhatNext)

## Running MongoDB

First, run through the [Quickstart](http://www.mongodb.org/display/DOCS/Quickstart) guide for your platform to get Mongo installed.

## Getting A Database Connection

Let's now try manipulating the database with the database [shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell) . (We could perform similar operations from any programming language using an appropriate [driver](http://www.mongodb.org/display/DOCS/Drivers).  The shell is convenient for interactive and administrative use.)

Start the MongoDB JavaScript shell with:

<pre>
<shell>
# 'mongo' is shell binary. exact location might vary depending on
# installation method and platform
$ bin/mongo
# on Ubuntu 12.04
$ mongo
MongoDB shell version: 2.0.4
connecting to: test
</shell>
</pre>

By default the shell connects to database "test" on localhost.  You then see:

<pre>
<shell>
MongoDB shell version: <whatever>
url: test
connecting to: test
type "help" for help
>
</shell>
</pre>

"connecting to:" tells you the name of the database the shell is using. To switch databases, type:

<pre>
<shell>
> use mydb
switched to db mydb
</shell>
</pre>

**Switching to a database with the `use` command won't immediately create the database - the database is created lazily the first time data is inserted. This means that if you use a database for the first time it won't show up in the list provided by `show dbs` until data is inserted.

To see a list of handy commands, type help.

TIP: **Tip for Developers with Experience in Other Databases**
You may notice, in the examples below, that we never create a database or collection. MongoDB does not require that you do so. As soon as you insert something, MongoDB creates the underlying collection and database. If you query a collection that does not exist, MongoDB treats it as an empty collection.

## Dynamic Schema ("Schema Free")

MongoDB has databases, collections, and indexes much like a traditional RDBMS(__relational database management system__). In some cases (databases and collections) these objects can be implicitly created, however once created they exist in a system catalog (db.systems.collections, db.system.indexes).

Collections contain ([BSON](http://www.mongodb.org/display/DOCS/BSON)) documents. Within these documents are fields. In MongoDB there is no predefinition of fields (what would be columns in an RDBMS). There is no schema for fields within documents – the fields and their value datatypes can vary 变化. Thus there is no notion 概念 of an "alter 更 table" operation which adds a "column". In practice, it is highly common for a collection to have a homogenous 均匀的 structure across documents; however this is not a requirement. **This flexibility means that schema migration and augmentation 扩充 are very easy in practice** - rarely 很少 will you need to write scripts which perform "alter table" type operations. In addition to making schema migration flexible, this facility makes iterative 迭代 software development atop 顶部 the database easier.

## Inserting Data into A Collection

Let's create a test collection and insert some data into it. We will create two objects, `j` and `t`, and then save them in the collection things.

In the following examples, '>' indicates commands typed at the shell prompt.

<pre>
<shell>
> j = { name : "mongo" };
{"name" : "mongo"}
> t = { x : 3 };
{ "x" : 3  }
> db.things.save(j);
> db.things.save(t);
> db.things.find();
{ "_id" : ObjectId("4c2209f9f3924d31102bd84a"), "name" : "mongo" }
{ "_id" : ObjectId("4c2209fef3924d31102bd84b"), "x" : 3 }
>
</shell>
</pre>

A few things to note :

* We did not predefine the collection. The database creates it automatically on the first insert.
* The documents we store can have different fields - in fact in this example, the documents have no common data elements at all. In practice, one usually stores documents of the same structure within collections.
* Upon being inserted into the database, objects are assigned an [object ID](http://www.mongodb.org/display/DOCS/Object+IDs) (if they do not already have one) in the field _id.
* When you run the above example, your ObjectID values will be different.

Let's add some more records to this collection:

<pre>
<shell>
> for (var i = 1; i <= 20; i++) db.things.save({x : 4, j : i});
> db.things.find()
{ "_id" : ObjectId("4fab61f92d81f483b08d245a"), "name" : "mongo" }
{ "_id" : ObjectId("4fab62002d81f483b08d245b"), "x" : 3 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245c"), "x" : 4, "j" : 1 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245d"), "x" : 4, "j" : 2 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245e"), "x" : 4, "j" : 3 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245f"), "x" : 4, "j" : 4 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2460"), "x" : 4, "j" : 5 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2461"), "x" : 4, "j" : 6 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2462"), "x" : 4, "j" : 7 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2463"), "x" : 4, "j" : 8 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2464"), "x" : 4, "j" : 9 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2465"), "x" : 4, "j" : 10 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2466"), "x" : 4, "j" : 11 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2467"), "x" : 4, "j" : 12 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2468"), "x" : 4, "j" : 13 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2469"), "x" : 4, "j" : 14 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246a"), "x" : 4, "j" : 15 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246b"), "x" : 4, "j" : 16 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246c"), "x" : 4, "j" : 17 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246d"), "x" : 4, "j" : 18 }
has more
</shell>
</pre>

NOTICE: Note that not all documents were shown - **the shell limits the number to 20 when automatically iterating a cursor**. Since we already had 2 documents in the collection, we only see the first 18 of the newly-inserted documents.

If we want to return the next set of results, there's the `it` shortcut. Continuing from the code above:

<pre>
<shell>
{ "_id" : ObjectId("4fab64c02d81f483b08d246c"), "x" : 4, "j" : 17 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246d"), "x" : 4, "j" : 18 }
has more
> it
{ "_id" : ObjectId("4fab64c02d81f483b08d246e"), "x" : 4, "j" : 19 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246f"), "x" : 4, "j" : 20 }
</shell>
</pre>

Technically, `find()` returns a **cursor object**. But in the cases above, we haven't assigned that cursor to a variable. So, the shell automatically iterates over the cursor, giving us an initial result set, and allowing us to continue iterating with the `it` command.

But we can also work with the cursor directly; just how that's done is discussed in the next section.

## Accessing Data From a Query

Before we discuss queries in any depth, lets talk about how to work with the results of a query - a cursor object. We'll use the simple `find()` query method, which returns everything in a collection, and talk about how to create specific queries later on.

In order to see all the elements in the collection when using the [mongo shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell), we need to explicitly use the cursor returned from the `find()` operation.

Lets repeat the same query, but this time use the cursor that `find()` returns, and iterate over it in a while loop :

<pre>
<shell>
> var cursor = db.things.find();
> while (cursor.hasNext()) printjson(cursor.next());
{ "_id" : ObjectId("4c2209f9f3924d31102bd84a"), "name" : "mongo" }
{ "_id" : ObjectId("4c2209fef3924d31102bd84b"), "x" : 3 }
{ "_id" : ObjectId("4c220a42f3924d31102bd856"), "x" : 4, "j" : 1 }
{ "_id" : ObjectId("4c220a42f3924d31102bd857"), "x" : 4, "j" : 2 }
{ "_id" : ObjectId("4c220a42f3924d31102bd858"), "x" : 4, "j" : 3 }
{ "_id" : ObjectId("4c220a42f3924d31102bd859"), "x" : 4, "j" : 4 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85a"), "x" : 4, "j" : 5 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85b"), "x" : 4, "j" : 6 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85c"), "x" : 4, "j" : 7 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85d"), "x" : 4, "j" : 8 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85e"), "x" : 4, "j" : 9 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85f"), "x" : 4, "j" : 10 }
{ "_id" : ObjectId("4c220a42f3924d31102bd860"), "x" : 4, "j" : 11 }
{ "_id" : ObjectId("4c220a42f3924d31102bd861"), "x" : 4, "j" : 12 }
{ "_id" : ObjectId("4c220a42f3924d31102bd862"), "x" : 4, "j" : 13 }
{ "_id" : ObjectId("4c220a42f3924d31102bd863"), "x" : 4, "j" : 14 }
{ "_id" : ObjectId("4c220a42f3924d31102bd864"), "x" : 4, "j" : 15 }
{ "_id" : ObjectId("4c220a42f3924d31102bd865"), "x" : 4, "j" : 16 }
{ "_id" : ObjectId("4c220a42f3924d31102bd866"), "x" : 4, "j" : 17 }
{ "_id" : ObjectId("4c220a42f3924d31102bd867"), "x" : 4, "j" : 18 }
{ "_id" : ObjectId("4c220a42f3924d31102bd868"), "x" : 4, "j" : 19 }
{ "_id" : ObjectId("4c220a42f3924d31102bd869"), "x" : 4, "j" : 20 }
</shell>
</pre>

The above example shows cursor-style iteration. The `hasNext()` function tells if there are any more documents to return, and the `next()` function returns the next document. We also used the built-in `printjson()` method to render the document in a pretty JSON-style format.

When working in the JavaScript [shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell), we can also use the functional features of the language, and just call `forEach` on the cursor. Repeating the example above, but using `forEach()` directly on the cursor rather than the while loop:

<pre>
<shell>
> db.things.find().forEach(printjson);
{ "_id" : ObjectId("4fab61f92d81f483b08d245a"), "name" : "mongo" }
{ "_id" : ObjectId("4fab62002d81f483b08d245b"), "x" : 3 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245c"), "x" : 4, "j" : 1 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245d"), "x" : 4, "j" : 2 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245e"), "x" : 4, "j" : 3 }
{ "_id" : ObjectId("4fab64c02d81f483b08d245f"), "x" : 4, "j" : 4 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2460"), "x" : 4, "j" : 5 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2461"), "x" : 4, "j" : 6 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2462"), "x" : 4, "j" : 7 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2463"), "x" : 4, "j" : 8 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2464"), "x" : 4, "j" : 9 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2465"), "x" : 4, "j" : 10 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2466"), "x" : 4, "j" : 11 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2467"), "x" : 4, "j" : 12 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2468"), "x" : 4, "j" : 13 }
{ "_id" : ObjectId("4fab64c02d81f483b08d2469"), "x" : 4, "j" : 14 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246a"), "x" : 4, "j" : 15 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246b"), "x" : 4, "j" : 16 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246c"), "x" : 4, "j" : 17 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246d"), "x" : 4, "j" : 18 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246e"), "x" : 4, "j" : 19 }
{ "_id" : ObjectId("4fab64c02d81f483b08d246f"), "x" : 4, "j" : 20 }
</shell>
</pre>

In the case of a `forEach()` we must define a function that is called for each document in the cursor.

In the [mongo shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell), you can also treat cursors like an array:

<pre>
<shell>
> var cursor = db.things.find();
> printjson(cursor[4]);
{ "_id" : ObjectId("4c220a42f3924d31102bd858"), "x" : 4, "j" : 3 }
</shell>
</pre>

When using a cursor this way, note that all values up to the highest accessed (`cursor[4]` above) are loaded into RAM at the same time. This is inappropriate 不当 for large result sets, as you will run out of memory. Cursors should be used as an iterator with any query which returns a large number of elements.

In addition to array-style access to a cursor, you may also convert the cursor to a true array:

<pre>
<shell>
> var arr = db.things.find().toArray();
> arr[5];
{ "_id" : ObjectId("4c220a42f3924d31102bd859"), "x" : 4, "j" : 4 }
</shell>
</pre>

Please note that these array features are specific to [mongo - The Interactive Shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell), and not offered by all drivers.

MongoDB cursors are not snapshots 快照 - operations performed by you or other users on the collection being queried between the first and last call to `next()` of your cursor may or may not be returned by the cursor. Use explicit locking to perform a snapshotted query.

## Specifying What the Query Returns

Now that we know how to work with the cursor objects that are returned from queries, **lets now focus on how to tailor queries to return specific things**.

In general, the way to do this is to create "query documents", which are documents that indicate 表明 the pattern of keys and values that are to be matched.

These are easier to demonstrate 演示 than explain. In the following examples, we'll give example SQL queries, and demonstrate how to represent the same query using MongoDB via the [mongo shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell). This way of specifying queries is fundamental to MongoDB, so you'll find the same general facility in any driver or language.

<pre>
<shell>
#SQL SELECT * FROM things WHERE name="mongo"
> db.things.find({name:"mongo"}).forEach(printjson);
{ "_id" : ObjectId("4c2209f9f3924d31102bd84a"), "name" : "mongo" }
</shell>
</pre>

<pre>
<shell>
#SQL SELECT * FROM things WHERE x=4
> db.things.find({x:4}).forEach(printjson);
{ "_id" : ObjectId("4c220a42f3924d31102bd856"), "x" : 4, "j" : 1 }
{ "_id" : ObjectId("4c220a42f3924d31102bd857"), "x" : 4, "j" : 2 }
{ "_id" : ObjectId("4c220a42f3924d31102bd858"), "x" : 4, "j" : 3 }
{ "_id" : ObjectId("4c220a42f3924d31102bd859"), "x" : 4, "j" : 4 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85a"), "x" : 4, "j" : 5 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85b"), "x" : 4, "j" : 6 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85c"), "x" : 4, "j" : 7 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85d"), "x" : 4, "j" : 8 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85e"), "x" : 4, "j" : 9 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85f"), "x" : 4, "j" : 10 }
{ "_id" : ObjectId("4c220a42f3924d31102bd860"), "x" : 4, "j" : 11 }
{ "_id" : ObjectId("4c220a42f3924d31102bd861"), "x" : 4, "j" : 12 }
{ "_id" : ObjectId("4c220a42f3924d31102bd862"), "x" : 4, "j" : 13 }
{ "_id" : ObjectId("4c220a42f3924d31102bd863"), "x" : 4, "j" : 14 }
{ "_id" : ObjectId("4c220a42f3924d31102bd864"), "x" : 4, "j" : 15 }
{ "_id" : ObjectId("4c220a42f3924d31102bd865"), "x" : 4, "j" : 16 }
{ "_id" : ObjectId("4c220a42f3924d31102bd866"), "x" : 4, "j" : 17 }
{ "_id" : ObjectId("4c220a42f3924d31102bd867"), "x" : 4, "j" : 18 }
{ "_id" : ObjectId("4c220a42f3924d31102bd868"), "x" : 4, "j" : 19 }
{ "_id" : ObjectId("4c220a42f3924d31102bd869"), "x" : 4, "j" : 20 }
</shell>
</pre>

The query expression is an document itself. A query document of the form { a:A, b:B, ... } means "where a==A and b==B and ...". More information on query capabilities may be found in the [Queries and Cursors](http://www.mongodb.org/display/DOCS/Queries+and+Cursors) section of the [Mongo Developers' Guide](http://www.mongodb.org/display/DOCS/Mongo+Developers%27+Guide).

MongoDB also lets you return "partial documents" - documents that have only a subset of the elements of the document stored in the database. To do this, you add a second argument to the `find()` query, supplying a document that lists the elements to be returned.

To illustrate 说明, lets repeat the last example `find({x:4})` with an additional argument that limits the returned document to just the "j" elements:

<pre>
<shell>
#SQL SELECT j FROM things WHERE x=4
> db.things.find({x:4}, {j:true}).forEach(printjson);
{ "_id" : ObjectId("4c220a42f3924d31102bd856"), "j" : 1 }
{ "_id" : ObjectId("4c220a42f3924d31102bd857"), "j" : 2 }
{ "_id" : ObjectId("4c220a42f3924d31102bd858"), "j" : 3 }
{ "_id" : ObjectId("4c220a42f3924d31102bd859"), "j" : 4 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85a"), "j" : 5 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85b"), "j" : 6 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85c"), "j" : 7 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85d"), "j" : 8 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85e"), "j" : 9 }
{ "_id" : ObjectId("4c220a42f3924d31102bd85f"), "j" : 10 }
{ "_id" : ObjectId("4c220a42f3924d31102bd860"), "j" : 11 }
{ "_id" : ObjectId("4c220a42f3924d31102bd861"), "j" : 12 }
{ "_id" : ObjectId("4c220a42f3924d31102bd862"), "j" : 13 }
{ "_id" : ObjectId("4c220a42f3924d31102bd863"), "j" : 14 }
{ "_id" : ObjectId("4c220a42f3924d31102bd864"), "j" : 15 }
{ "_id" : ObjectId("4c220a42f3924d31102bd865"), "j" : 16 }
{ "_id" : ObjectId("4c220a42f3924d31102bd866"), "j" : 17 }
{ "_id" : ObjectId("4c220a42f3924d31102bd867"), "j" : 18 }
{ "_id" : ObjectId("4c220a42f3924d31102bd868"), "j" : 19 }
{ "_id" : ObjectId("4c220a42f3924d31102bd869"), "j" : 20 }
</shell>
</pre>

Note that the "_id" field is always returned.

## findOne() - Syntactic Sugar

For convenience, the [mongo shell](http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell) (and other drivers) lets you avoid the programming overhead of dealing with the cursor, and just lets you retrieve one document via the `findOne()` function. `findOne()` takes all the same parameters of the `find()` function, but instead of returning a cursor, it will return either the first document returned from the database, or null if no document is found that matches the specified query.

As an example, lets retrieve the one document with `name=='mongo'`. There are many ways to do it, including just calling `next()` on the cursor (after checking for null, of course), or treating the cursor as an array and accessing the 0th element.

However, the `findOne()` method is both convenient and efficient:

<pre>
<shell>
> printjson(db.things.findOne({name:"mongo"}));
{ "_id" : ObjectId("4c2209f9f3924d31102bd84a"), "name" : "mongo" }
</shell>
</pre>

This is more efficient because the client requests a single object from the database, so less work is done by the database and the network. This is the equivalent of `db.things.find({name:"mongo"}).limit(1)`.

Another example of finding a single document `by _id`:

<pre>
<shell>
> var doc = db.things.findOne({_id:ObjectId("4c2209f9f3924d31102bd84a")});
> doc
{ "_id" : ObjectId("4c2209f9f3924d31102bd84a"), "name" : "mongo" }
</shell>
</pre>

## Limiting the Result Set via limit()

You may limit the size of a query's result set by specifing a maximum number of results to be returned via the `limit()` method.

This is highly recommended for performance reasons, as it limits the work the database does, and limits the amount of data returned over the network. For example:

<pre>
<shell>
> db.things.find().limit(3);
{ "_id" : ObjectId("4c2209f9f3924d31102bd84a"), "name" : "mongo" }
{ "_id" : ObjectId("4c2209fef3924d31102bd84b"), "x" : 3 }
{ "_id" : ObjectId("4c220a42f3924d31102bd856"), "x" : 4, "j" : 1 }
</shell>
</pre>

## More Help

In addition to the general "help" command, you can call `help` on `db` and `db.collection` (**where "collection" is the name of a collection**) to see a summary of methods available.

If you are curious about what a function is doing, you can type it without the `()`s and the shell will print the source, for example:

<pre>
<shell>
> printjson
function (x) {
    print(tojson(x));
}
</shell>
</pre>

mongo is a full JavaScript shell, so any JavaScript function, syntax, or class can be used in the shell. In addition, MongoDB defines some of its own classes and globals (e.g., db). You can see the full API at [http://api.mongodb.org/js/](http://api.mongodb.org/js/).

## What Next

* After completing this tutorial the next step to learning MongoDB is to dive into the rest of the documentation for more details, you can see the new [Manual](http://docs.mongodb.org/manual) for additional documentation.
* See also [SQL to Mongo Mapping Chart](http://www.mongodb.org/display/DOCS/SQL+to+Mongo+Mapping+Chart)
* The [MongoDB Manual](http://docs.mongodb.org/manual)
* [Tutorials in the MongoDB Manual](http://docs.mongodb.org/manual/applications/#tutorials)
