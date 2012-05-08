# MONGOID
> base on [mongoid](http://mongoid.org/)

Mongoid (pronounced mann-goyd) is an Object-Document-Mapper (ODM) for [MongoDB](http://mongodb.org/) written in Ruby. It was conceived in August, 2009 during a whiskey-induced evening at the infamous Oasis in Florida, USA by [Durran Jordan](http://github.com/durran).

The philosophy of Mongoid is to provide a familiar API to Ruby developers who have been using Active Record or Data Mapper, while leveraging the power of MongoDB's schemaless and performant document-based design, dynamic queries, and atomic modifier operations.

## SAMPLE SYNTAX

*** Note that all code samples are written in Ruby 1.9 syntax.

<pre>
<shell>
class Artist
  include Mongoid::Document
  field :name, type: String
  embeds_many :instruments
end

class Instrument
  include Mongoid::Document
  field :name, type: String
  embedded_in :artist
end

# Find the first artist named "Syd Vicious" and create an embedded bass
# document for him. Of course he'll smash it within the next few minutes,
# but no worries we can delete it later.
Artist.where(name: "Syd Vicious").first.tap do |artist|
  artist.instruments.create(name: "Bass")
end
</shell>
</pre>

*** Note that this site is tested on Firefox only and that any issues brought up around viewing on other browsers will be, to put it bluntly, ignored. We're busy trying to make the best ODM possible here, not worry about browser compatibility.

## INSTALLATION

### PREREQUISITES 先决条件

There are a few things you need to have in your toolbox before tackling a web application using Mongoid.
* **A good to advanced knowledge of Ruby**.
* Have good knowledge of your web framework if using one.
* **A thorough understanding of MongoDB**.

This may seem like a "thank you Captain Obvious" moment, however if you believe that you can just hop 踊跃 over to Mongoid because you read a blog post on how cool Ruby and MongoDB were, you are in for a world of pain pain.

Mongoid leverages 运用 many aspects 方面 of the Ruby programming language that are not for beginner use, and sending the core team into a frenzy tracking down a bug for a common Ruby mistake is a waste of our time, and all of the other users of the framework as well.

#### THE DATABASE IS NOT A BLACK BOX.

Mongoid is an abstraction 抽象概念 to make application developers' lives easier, however the internals leverage the power of MongoDB and it is truly important to know what is going on under the covers. This is why the documentation provides the exact queries that Mongoid is executing against the database when you call a persistence operation. If we took the time to tell you, you should listen. :)
