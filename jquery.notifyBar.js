/*
*  Notify Bar - jQuery plugin
*
*  Copyright (c) 2009 Dmitri Smirnov
*
*  Licensed under the MIT license:
*  http://www.opensource.org/licenses/mit-license.php
*  
*  Version: 1.0.2
*
*  Project home:
*  http://www.dmitri.me/blog/notify-bar
*/

/**
 *  param object
 */
$.notifyBar = function(settings)
{
  var bar = {};
  
  this.shown = false;
  
  if( !settings) {
    settings = {};
  }
  // HTML inside bar
  this.html           = settings.html || "Your message here";
  
  //How long bar will be delayed, doesn't count animation time.
  this.delay          = settings.delay || 2500;
  
  //How long this bar will be slided up and down
  this.animationSpeed = settings.animationSpeed || "normal";
  
  //Use own jquery object usually DIV, or use default
  this.jqObject       = settings.jqObject;

  if( this.jqObject) {
    bar = this.jqObject;
  } else {
    bar = $("<div></div>")
                  //basic css rules
                  .attr("id", "notifyBar")
                  .css("width", "100%")
                  .css("position", "fixed")
                  .css("top", "0px")
                  .css("left", "0px")
                  .css("z-index", "32768")
                  //additional css rules, which you can modify as you wish.
                  .css("background-color", "#dfdfdf")
                  .css("font-size", "18px")
                  .css("color", "#000")
                  .css("text-align", "center")
                  .css("font-family", "Arial, Helvetica, serif")
                  .css("padding", "30px 0px")
                  .css("border-bottom", "1px solid #bbb");
  }
  
  bar.html(this.html).hide();
  var id =  bar.attr("id");
  switch (this.animationSpeed) {
    case "slow":
      asTime = 600;
      break;
    case "normal":
      asTime = 400;
      break;
    case "fast":
      asTime = 200;
      break;
    default:
      asTime = this.animationSpeed;
  }
  $("body").prepend(bar);
  bar.slideDown(asTime);
  setTimeout("$('#" + id + "').slideUp(" + asTime +");", this.delay + asTime);
};
    