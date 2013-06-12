## Sails Tutorial

> sources: [sailsjs](http://sailsjs.org/)
> author: [francis](https://github.com/jhjguxin) </br>
> date: Tue Jun 11 21:48:19 CST 2013

### What is Sails.js?

Sails.js make it easy to build custom, enterprise-grade Node.js apps. It is designed to mimic the MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with scalable, service-oriented architecture. It's especially good for building chat, realtime dashboards, or multiplayer games.

### Features

Using Sails.js cuts development time into a fraction of what it used to be. You can build production-ready, realtime apps in a matter of weeks - not months!

Sails.js does a few things other Node.js MVC frameworks can't do:

- Sails.js is database agnostic. Its ORM, Waterline, provides a simple data access layer that works, no matter what database you're using. All you have to do is plug in one of the adapters written by our community. If you're plugging into an unusual or proprietary system, it's easy to write your own adapter!

- Sails.js automatically generates a RESTful JSON API for your app. That means you don't have to write any backend code to build simple database apps.

- Realtime Socket.io requests are routed to your controllers the same way as everything else: with resourceful conventions and URL mappings. You shouldn't have to rewrite your entire app when you go realtime.

- Sails.js provides basic security and role-based access control by default, and you can add as many custom policies as you like. These flexible mappings make it simple to control access to various controllers and actions, and to apply parameter validation. That way, before you even start writing business logic, you know the user is authorized and you have all the data you need.

- Because Express and Socket.io share the same configurable session store, all of your secuity policies are reused for realtime WebSocket requests as well.

- Sails.js has automatic asset minification. In the past, you had to manually link to the CSS and JavaScript for your UI. Not anymore. With Sails, you just put your files in the proper folder and they are automatically included in your layout. Then, when you're ready to go into production, they are minified and gzipped to preserve as much bandwidth as possible. That makes it easy to push your assets out to a CDN like CloudFront and make things load even faster.

### Get Started

We've worked really hard to make this as simple as possible.

Just install Sails.js, create a new project, and then lift your server.

#### Installation

To install the latest stable release with the command-line tool:

    sudo npm -g install sails
    
Creating a New Sails Project

Create a new app:

    # Create the app sails new testProject
    sails new testProject
    
It will has tree bellow

```shell
~/testProject$ tree
.
├── api
│   ├── adapters
│   ├── controllers
│   ├── models
│   ├── policies
│   │   └── authenticated.js
│   └── services
├── app.js
├── assets
│   ├── js
│   ├── mixins
│   │   ├── reset.css
│   │   └── sails.io.js
│   ├── styles
│   └── templates
├── config
│   ├── adapters.js
│   ├── application.js
│   ├── assets.js
│   ├── bootstrap.js
│   ├── locales
│   │   └── english.js
│   ├── local.ex.js
│   ├── local.js
│   ├── policies.js
│   ├── routes.js
│   └── views.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   └── robots.txt
├── README.md
└── views
    ├── 404.ejs
    ├── 500.ejs
    ├── home
    │   └── index.ejs
    └── layout.ejs

17 directories, 22 files
```

Now lift the server:

    # cd into the new folder cd test Project# Fire up the server sails lift
    sails lift
					
At this point, if you visit http://localhost:1337/ you will see the default home page.

Now, let's get Sails to do cool stuff.
