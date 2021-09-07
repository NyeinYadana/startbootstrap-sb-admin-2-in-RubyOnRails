// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// import Rails from "@rails/ujs";
// import Turbolinks from "turbolinks";
// import * as ActiveStorage from "@rails/activestorage";
// import "channels";

// Rails.start();
// Turbolinks.start();
// ActiveStorage.start();

// var jQuery = require("jquery");
// global.$ = global.jQuery = jQuery;
// window.$ = window.jQuery = jQuery;
// // require("popperjs/core");
// require("bootstrap");
// require("jquery.easing")
// require("chart.js");

// $(() =>{
//     require("startbootstrap-sb-admin-2/js/sb-admin-2");
// });


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start();
Turbolinks.start();
ActiveStorage.start();

var jQuery = require("jquery");

// import jQuery from "jquery";
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

require("bootstrap");
require("jquery.easing");
require("chart.js");

$(()=>{
    require("startbootstrap-sb-admin-2/js/sb-admin-2");
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
