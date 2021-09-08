# Start Bootstrap Sb-Admin-2 In [Ruby On Rails](https://rubyonrails.org/)

[StartBootstrap Sb-Admin-2](https://startbootstrap.com/theme/sb-admin-2) is an open source admin dashboard theme for [Bootstrap](https://getbootstrap.com/) created by [Start Bootstrap](https://startbootstrap.com/).

A free Bootstrap 4 admin theme built with HTML/CSS and a modern development workflow environment ready to use to build your next dashboard or web application

In this project I add the [startbootstrap-sb-admin-2](https://startbootstrap.com/theme/sb-admin-2) theme in my [ruby on rails project](https://rubyonrails.org/).

## Preview

## Status
[Dependencies_Status](https://david-dm.org/StartBootstrap/startbootstrap-sb-admin-2)

* **ruby-3.0.2**

* **popper.js-1.16.1** : ``` yarn add popper.js ```
 
## Download and Installation
* Install via yarn : ``` yarn add startbootstrap-sb-admin-2 ```
* Install via npm : ``` npm i startbootstrap-sb-admin-2 ```
* Clone the repo : ``` git clone https://github.com/StartBootstrap/startbootstrap-sb-admin-2.git ```
* [download_the_latest_relase_on_startbootstrap](https://startbootstrap.com/theme/sb-admin-2)
* [Fork, Clone or Download On GitHub](https://github.com/StartBootstrap/startbootstrap-sb-admin-2)

## Configuration
After installation, you can see the startbootstrap-sb-admin-2 folder in your node modules. Then you might add the following.

**application.js**
``` ruby
require("bootstrap");
require("jquery.easing");
require("chart.js");
$(()=>{
    require("startbootstrap-sb-admin-2/js/sb-admin-2");
}) 

```
Create the dashboard controller and index in your project.
``` rails
rails g controller dashboard index
```

**dashboard.scss**
``` ruby
@import "startbootstrap-sb-admin-2/scss/sb-admin-2";
@import "bootstrap/scss/bootstrap";
$fa-font-path: "@fortawesome/fontawesome-free/webfonts";
@import "@fortawesome/fontawesome-free/scss/fontawesome";
@import "@fortawesome/fontawesome-free/scss/solid";
@import "@fortawesome/fontawesome-free/scss/regular";
@import "@fortawesome/fontawesome-free/scss/brands";

```

**dashboard/index.html.erb**

Add html code from node_modules/startbootstrap-sb-admin-2/index.html. 

## Usage
``` ruby
rails s
```
Then you can see a preview of the template in your browser at url **localhost:3000/dashboard/index**.


## About 
Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

[https://startbootstrap.com](https://startbootstrap.com)

[https://twitter.com/SBootstrap](https://twitter.com/SBootstrap)

Start Bootstrap was created by and is maintained by David Miller.

[https://davidmiller.io](https://davidmiller.io)

[https://twitter.com/davidmillerhere](https://twitter.com/davidmillerhere)

[https://github.com/davidtmiller](https://github.com/davidtmiller)

Start Bootstrap is based on the Bootstrap framework created by Mark Otto and Jacob Thorton.

## Copyright and License
Copyright 2013-2021 Start Bootstrap LLC. Code released under the MIT license.
