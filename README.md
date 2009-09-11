### General ###

All this is built for [CouchDB](http://couchdb.org).
Thanks to Damien KATZ ([http://damienkatz.net](http://damienkatz.net)).

All this is built on top of [CouchApp](http://github.com/jchris/couchapp).
Thanks to Benoit CHESNEAU ([http://benoitc.org](http://benoitc.org)).


### Forms ###

In good old days everything was centered around forms: all the specs were
centered by forms and I believe that this approach is still practical.


### Meta-form - a complete JSON description of form ###

"Meta" - because it is a simple, DRY, and readable description.
Here is a simple form field description:

    title: {
      type: "textbox",
      label: "The title"
    }

Here you can add validation rulles and messages:

    title: {
      type: "textbox",
      label: "The title",
      validation: {
        rules: {
          required: true,
          maxlen: 50, 
          minlen: 5
        },  
        messages: {
          required: "The title is required."
        }   
      }   
    }

The meta-form is a collection o such fields:

    mata.form = {
      title: {
        ...
      },
      description: {
        ...
      },
      ...
    }

This is the most part of the logic in the application. No doubt there will
come more, let us ee it and we will figuire out a way to encode.
From this structure a simple 92 sloc handmade script generates HTML.
With CouchApp jQuery plugin the form saves the data in CoudhDB.

An interestng and useful thing is that the validation data is going to be used
on both sides: on the client and on the server.


### Technical details ###

(almost) All the code is written using TDD. Tests are included:

- tests.(js|sh)
- tests/*

To test the entire source tree run the tests.sh in the application root.
To test any module run tests.(js|sh) at any level.

Acceptance (functional) tests use jQuery and its testing framework QUnit.
Adding a new page to the app should start with writing an acceptance test
that would define the page components and functionality.


### Less code ###

Generally the tool is trying to capture as much as possible in JSON description
and use as less code as possible. Compared to code, metadata is easier to
test without considerable amounts of computational power.


### Code structure ###

Most of the CouchApp initial app structure is left untouched. Besides that:

- "./meta/" - I keep most of the application logic;
- "./lib/" - added a couple of good things in the "lib" like JsonHtml parser,
  a test runner for the server-side Javascript code, and a tiny library of
  useful Javascript functions that I use myself;
- "./vendor/" - added the JSON2 Javascript library;


### Notes ###

- this is a work in progress, good ideas are welcome;
- shell scripts are Bourne Shell scripts written on FreeBSD that
  may need some tweaking before they will run on other *NIX-es;
- Javascript scripts expect /usr/local/bin/js as interpretter.
