## NoSQL

NoSQL，指的是非关系型的数据库。随着互联网 web2.0 网站的兴起，传统的关系数据库在应付 web2.0 网站，特别是超大规模和高并发的 SNS 类型的 web2.0 纯动态网站已经显得力不从心，暴露了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。

### 简介

NoSQL(NoSQL = Not Only SQL )，意即反 SQL 运动，是一项全新的数据库革命性运动，早期就有人提出，发展至 2009 年趋势越发高涨。NoSQL 的拥护者们提倡运用非关系型的数据存储，相对于目前铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入。

### 现今状况

现今的计算机体系结构在数据存储方面要求具备庞大的水平扩展性，而 NoSQL 致力于改变这一现状。目前 Google 的 BigTable 和 Amazon 的 Dynamo 使用的就是 NoSQL 型数据库。

NoSQL 项目的名字上看不出什么相同之处，但是，它们通常在某些方面相同：它们可以处理超大量的数据。

这场革命目前仍然需要等待。的确，NoSQL 对大型企业来说还不是主流，但是，一两年之后很可能就会变个样子。在 NoSQL 运动的最新一次聚会中，来自世界各地的 150 人挤满了 CBS Interactive 的一间会议室。分享他们如何推翻缓慢而昂贵的关系数据库的暴政，怎样使用更有效和更便宜的方法来管理数据。

“关系型数据库给你强加了太多东西。它们要你强行修改对象数据，以满足 RDBMS （relational database management system，关系型数据库管理系统）的需要。” 在 NoSQL 拥护者们看来，基于 NoSQL 的替代方案 “只是给你所需要的”。

  1. 水平扩展性(horizontal scalability)指能够连接多个软硬件的特性,这样可以将多个服务器从逻辑上看成一个实体。

### 我们为什么要使用NOSQL非关系数据库?

随着互联网 web2.0 网站的兴起，非关系型的数据库现在成了一个极其热门的新领域，非关系数据库产品的发展非常迅速。而传统的关系数据库在应付 web2.0 网站，特别是超大规模和高并发的 SNS 类型的 web2.0 纯动态网站已经显得力不从心，暴露了很多难以克服的问题，**例如**： 

1. High performance - 对数据库高并发读写的需求
   web2.0 网站要根据用户个性化信息来实时生成动态页面和提供动态信息，所以基本上无法使用动态页面静态化技术，因此数据库并发负载非常高，往往要达到每秒上万次读写请求。关系数据库应付上万次 SQL 查询还勉强顶得住，但是应付上万次 SQL 写数据请求，硬盘 IO 就已经无法承受了。其实对于普通的 BBS 网站，往往也存在对高并发写请求的需求。
1. Huge Storage - 对海量数据的高效率存储和访问的需求
   对于大型的 SNS 网站，每天用户产生海量的用户动态，以国外的 Friendfeed 为例，一个月就达到了 2.5 亿条用户动态，对于关系数据库来说，在一张 2.5 亿条记录的表里面进行 SQL 查询，效率是极其低下乃至不可忍受的。再例如大型 web 网站的用户登录系统，**例如**腾讯，盛大，动辄数以亿计的帐号，关系数据库也很难应付。
1. High Scalability && High Availability- 对数据库的高可扩展性和高可用性的需求
   在基于 web 的架构当中，数据库是最难进行横向扩展的，当一个应用系统的用户量和访问量与日俱增的时候，你的数据库却没有办法像 web server 和 app server 那样简单的通过添加更多的硬件和服务节点来扩展性能和负载能力。对于很多需要提供 24 小时不间断服务的网站来说，对数据库系统进行升级和扩展是非常痛苦的事情，往往需要停机维护和数据迁移，为什么数据库不能通过不断的添加服务器节点来实现扩展呢？

在上面提到的 “三高” 需求面前，关系数据库遇到了难以克服的障碍，而对于 web2.0 网站来说，关系数据库的很多主要特性却往往无用武之地，**例如**： 

1. 数据库事务一致性需求
   很多 web 实时系统并不要求严格的数据库事务，对读一致性的要求很低，有些场合对写一致性要求也不高。因此数据库事务管理成了数据库高负载下一个沉重的负担。
1. 数据库的写实时性和读实时性需求 
   对关系数据库来说，插入一条数据之后立刻查询，是肯定可以读出来这条数据的，但是对于很多 web 应用来说，并不要求这么高的实时性。
1. 对复杂的SQL查询，特别是多表关联查询的需求
   任何大数据量的 web 系统，都非常忌讳多个大表的关联查询，以及复杂的数据分析类型的复杂 SQL 报表查询，特别是 SNS 类型的网站，从需求以及产品设计角度，就避免了这种情况的产生。往往更多的只是单表的主键查询，以及单表的简单条件分页查询，SQL 的功能被极大的弱化了。

因此，关系数据库在这些越来越多的应用场景下显得不那么合适了，为了解决这类问题的非关系数据库应运而生。

NoSQL 是非关系型数据存储的广义定义。它打破了长久以来关系型数据库与 ACID 理论大一统的局面。NoSQL 数据存储不需要固定的表结构，通常也不存在连接操作。在大数据存取上具备关系型数据库无法比拟的性能优势。该术语在 2009 年初得到了广泛认同。

当今的应用体系结构需要数据存储在横向伸缩性上能够满足需求。而 NoSQL 存储就是为了实现这个需求。Google 的 BigTable 与 Amazon 的 Dynamo 是非常成功的商业 NoSQL 实现。一些开源的 NoSQL 体系，如 Facebook 的 Cassandra， Apache 的 HBase，也得到了广泛认同。从这些 NoSQL 项目的名字上看不出什么相同之处：Hadoop、Voldemort、Dynomite，还有其它很多。

### NoSQL 与关系型数据库设计理念比较

关系型数据库中的表都是存储一些格式化的数据结构，每个元组字段的组成都一样，即使不是每个元组都需要所有的字段，但数据库会为每个元组分配所有的字段，这样的结构可以便于表与表之间进行连接等操作，但从另一个角度来说它也是关系型数据库性能瓶颈的一个因素。而非关系型数据库以键值对存储，它的结构不固定，每一个元组可以有不一样的字段，每个元组可以根据需要增加一些自己的键值对，这样就不会局限于固定的结构，可以减少一些时间和空间的开销。

### 特点

* **它们可以处理超大量的数据。**
* **它们运行在便宜的PC服务器集群上。**
* PC集群扩充起来非常方便并且成本很低，避免了“sharding”操作的复杂性和成本。
* **它们击碎了性能瓶颈。**
* NoSQL的支持者称，通过NoSQL架构可以省去将Web或Java应用和数据转换成SQL友好格式的时间，执行速度变得更快。
* “SQL并非适用于所有的程序代码，” 对于那些繁重的重复操作的数据，SQL值得花钱。但是当数据库结构非常简单时，SQL可能没有太大用处。
* **没有过多的操作。**
* 虽然NoSQL的支持者也承认关系数据库提供了无可比拟的功能集合，而且在数据完整性上也发挥绝对稳定，他们同时也表示，企业的具体需求可能没有那么多。
* **Bootstrap支持**
* 因为NoSQL项目都是开源的，因此它们缺乏供应商提供的正式支持。这一点它们与大多数开源项目一样，不得不从社区中寻求支持。

### 缺点

但是一些人承认，没有正式的官方支持，万一出了差错会是可怕的，至少很多管理人员是这样看。

“我们确实需要做一些说服工作，但基本在他们看到我们的第一个原型运行良好之后，我们就能够说服他们，这是条正确的道路。”

此外，nosql并未形成一定标准，各种产品层出不穷，内部混乱，各种项目还需时间来检验

## 8 种 Nosql 数据库系统对比
> [resources from](http://blog.jobbole.com/1344/),[english resources](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis)

虽然 SQL 数据库是非常有用的工具，但经历了 15 年的一支独秀之后垄断即将被打破。这只是时间问题：被迫使用关系数据库，但最终发现不能适应需求的情况不胜枚举。

但是 NoSQL 数据库之间的不同，远超过两 SQL 数据库之间的差别。这意味着软件架构师更应该在项目开始时就选择好一个适合的 NoSQL 数据库。针对这种情况，这里对 [Cassandra](http://cassandra.apache.org/)、 [Mongodb](http://www.mongodb.org/)、[CouchDB](http://couchdb.apache.org/)、[Redis](http://redis.io/)、 [Riak](http://www.basho.com/Riak.html)、 [Membase](http://www.couchbase.org/membase)、[Neo4j](http://neo4j.org/)和 [HBase](http://hbase.apache.org/) 进行了比较：

1. CouchDB

   * 所用语言： Erlang
   * 特点：DB一致性，易于使用
   * 使用许可： Apache
   * 协议： HTTP/REST
   * 双向数据复制，
   * 持续进行或临时处理，
   * 处理时带冲突检查，
   * 因此，采用的是master-master复制（见编注2）
   * MVCC – 写操作不阻塞读操作
   * 可保存文件之前的版本
   * Crash-only（可靠的）设计
   * 需要不时地进行数据压缩
   * 视图：嵌入式 映射/减少
   * 格式化视图：列表显示
   * 支持进行服务器端文档验证
   * 支持认证
   * 根据变化实时更新
   * 支持附件处理
   * 因此，[CouchApps](http://couchapp.org/)（独立的 js应用程序）
   * 需要 jQuery程序库

   **最佳应用场景**：适用于数据变化较少，执行预定义查询，进行数据统计的应用程序。适用于需要提供数据版本支持的应用程序。

   **例如**： CRM、CMS 系统。 master-master 复制对于多站点部署是非常有用的。

  （编注2：master-master复制：是一种数据库同步方法，允许数据在一组计算机之间共享数据，并且可以通过小组中任意成员在组内进行数据更新。）

1. Redis

   * 所用语言：C/C++
   * 特点：运行异常快
   * 使用许可： BSD
   * 协议：类 Telnet
   * 有硬盘存储支持的内存数据库，
   * 但自2.0版本以后可以将数据交换到硬盘（注意， 2.4以后版本不支持该特性！）
   * Master-slave复制（见编注3）
   * 虽然采用简单数据或以键值索引的哈希表，但也支持复杂操作，例如 ZREVRANGEBYSCORE。
   * INCR & co （适合计算极限值或统计数据）
   * 支持 sets（同时也支持 union/diff/inter）
   * 支持列表（同时也支持队列；阻塞式 pop操作）
   * 支持哈希表（带有多个域的对象）
   * 支持排序 sets（高得分表，适用于范围查询）
   * Redis支持事务
   * 支持将数据设置成过期数据（类似快速缓冲区设计）
   * Pub/Sub允许用户实现消息机制

   **最佳应用场景**：适用于数据变化快且数据库大小可遇见（适合内存容量）的应用程序。

   **例如**：股票价格、数据分析、实时数据搜集、实时通讯。

  （编注3：Master-slave 复制：如果同一时刻只有一台服务器处理所有的复制请求，这被称为 Master-slave 复制，通常应用在需要提供高可用性的服务器集群。）

1. MongoDB

   * 所用语言：C++
   * 特点：保留了 SQL 一些友好的特性（查询，索引）。
   * 使用许可： AGPL（发起者： Apache）
   * 协议： Custom, binary（BSON）
   * Master/slave复制（支持自动错误恢复，使用 sets 复制）
   * 内建分片机制
   * 支持 javascript表达式查询
   * 可在服务器端执行任意的 javascript函数
   * update-in-place 支持比 CouchDB 更好
   * 在数据存储时采用内存到文件映射
   * 对性能的关注超过对功能的要求
   * 建议最好打开日志功能（参数 –journal）
   * 在 32 位操作系统上，数据库大小限制在约2.5Gb
   * 空数据库大约占 192Mb
   * 采用 GridFS存储大数据或元数据（不是真正的文件系统）

   **最佳应用场景**：适用于需要动态查询支持；需要使用索引而不是 map/reduce功能；需要对大数据库有性能要求；需要使用 CouchDB但因为数据改变太频繁而占满内存的应用程序。

   **例如**：你本打算采用 MySQL或 PostgreSQL，但因为它们本身自带的预定义栏让你望而却步。

1. Riak
   * 所用语言：Erlang 和 C，以及一些 Javascript
   * 特点：具备容错能力
   * 使用许可： Apache
   * 协议： HTTP/REST 或者 custom binary
   * 可调节的分发及复制(N, R, W)
   * 用 JavaScript or Erlang 在操作前或操作后进行验证和安全支持。
   * 使用 JavaScript 或 Erlang 进行 Map/reduce
   * 连接及连接遍历：可作为图形数据库使用
   * 索引：输入元数据进行搜索（1.0版本即将支持）
   * 大数据对象支持（ Luwak）
   * 提供“开源”和“企业”两个版本
   * 全文本搜索，索引，通过 Riak搜索服务器查询（ beta版）
   * 支持Masterless多站点复制及商业许可的 SNMP 监控

   **最佳应用场景**：适用于想使用类似 Cassandra（类似Dynamo）数据库但无法处理 bloat及复杂性的情况。适用于你打算做多站点复制，但又需要对单个站点的扩展性，可用性及出错处理有要求的情况。

   **例如**：销售数据搜集，工厂控制系统；对宕机时间有严格要求；可以作为易于更新的 web服务器使用。

1. Membase
   * 所用语言： Erlang和C
   * 特点：兼容 Memcache，但同时兼具持久化和支持集群
   * 使用许可： Apache 2.0
   * 协议：分布式缓存及扩展
   * 非常快速（200k+/秒），通过键值索引数据
   * 可持久化存储到硬盘
   * 所有节点都是唯一的（ master-master复制）
   * 在内存中同样支持类似分布式缓存的缓存单元
   * 写数据时通过去除重复数据来减少 IO
   * 提供非常好的集群管理 web界面
   * 更新软件时软无需停止数据库服务
   * 支持连接池和多路复用的连接代理

   **最佳应用场景**：适用于需要低延迟数据访问，高并发支持以及高可用性的应用程序

   **例如**：低延迟数据访问比如以广告为目标的应用，高并发的 web 应用比如网络游戏（例如 Zynga）

1. Neo4j
   * 所用语言： Java
   * 特点：基于关系的图形数据库
   * 使用许可： GPL，其中一些特性使用 AGPL/商业许可
   * 协议： HTTP/REST（或嵌入在 Java中）
   * 可独立使用或嵌入到 Java应用程序
   * 图形的节点和边都可以带有元数据
   * 很好的自带web管理功能
   * 使用多种算法支持路径搜索
   * 使用键值和关系进行索引
   * 为读操作进行优化
   * 支持事务（用 Java api）
   * 使用 Gremlin图形遍历语言
   * 支持 Groovy脚本
   * 支持在线备份，高级监控及高可靠性支持使用 AGPL/商业许可

   **最佳应用场景**：适用于图形一类数据。这是 Neo4j与其他nosql数据库的最显著区别

   **例如**：社会关系，公共交通网络，地图及网络拓谱

1. Cassandra
   * 所用语言： Java
   * 特点：对大型表格和 Dynamo支持得最好
   * 使用许可： Apache
   * 协议： Custom, binary (节约型)
   * 可调节的分发及复制(N, R, W)
   * 支持以某个范围的键值通过列查询
   * 类似大表格的功能：列，某个特性的列集合
   * 写操作比读操作更快
   * 基于 Apache分布式平台尽可能地 Map/reduce
   * 我承认对 Cassandra有偏见，一部分是因为它本身的臃肿和复杂性，也因为 Java的问题（配置，出现异常，等等）

   **最佳应用场景**：当使用写操作多过读操作（记录日志）如果每个系统组建都必须用 Java编写（没有人因为选用 Apache的软件被解雇）

   **例如**：银行业，金融业（虽然对于金融交易不是必须的，但这些产业对数据库的要求会比它们更大）写比读更快，所以一个自然的特性就是实时数据分析

   **最佳应用场景**：当使用写操作多过读操作（记录日志）如果每个系统组建都必须用 Java编写（没有人因为选用 Apache的软件被解雇）

   **例如**：银行业，金融业（虽然对于金融交易不是必须的，但这些产业对数据库的要求会比它们更大）写比读更快，所以一个自然的特性就是实时数据分析

1. HBase
   >（配合 ghshephard 使用）
   * 所用语言： Java
   * 特点：支持数十亿行X上百万列
   * 使用许可： Apache
   * 协议：HTTP/REST （支持 Thrift，见编注4）
   * 在 BigTable之后建模
   * 采用分布式架构 Map/reduce
   * 对实时查询进行优化
   * 高性能 Thrift网关
   * 通过在server端扫描及过滤实现对查询操作预判
   * 支持 XML, Protobuf, 和binary的HTTP
   * Cascading, hive, and pig source and sink modules
   * 基于 Jruby（ JIRB）的shell
   * 对配置改变和较小的升级都会重新回滚
   * 不会出现单点故障
   * 堪比MySQL的随机访问性能

   **最佳应用场景**：适用于偏好BigTable:)并且需要对大数据进行随机、实时访问的场合。

   **例如**： Facebook消息数据库（更多通用的用例即将出现）

   编注4：Thrift 是一种接口定义语言，为多种其他语言提供定义和创建服务，由Facebook开发并开源。

   当然，所有的系统都不只具有上面列出的这些特性。这里我仅仅根据自己的观点列出一些我认为的重要特性。与此同时，技术进步是飞速的，所以上述的内容肯定需要不断更新。我会尽我所能地更新这个列表。
