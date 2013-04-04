/*
* Notify Bar - $ plugin
*
* Copyright (c) 2009-2013 Dmitri Smirnov
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
* Version: 1.3
*
* Project home:
* http://www.whoop.ee/ (Isn't ready yet)
*/
 
/**
 * param Object
 */
(function ($) {

    $.notifyBar = function(options) {

        var bar = settings = {};
        var rand = parseInt(Math.random() * 100000000);

        var settings = $.extend({
            html           : 'Your message here',
            delay          : 2000,
            animationSpeed : 200,
            jqObject       : "",
            close          : false,
            closeText      : 'Close [X]',
            closeOnClick   : true,
            closeOnOver    : false
        }, options);
       

        if( settings.jqObject) {
            bar = settings.jqObject;
            settings.html = bar.html();
        } else {
            bar = $("<div></div>")
                   .addClass("jquery-notify-bar")
                   .addClass(settings.cssClass)
                   .attr("id", "__notifyBar" + rand);
        }
        var text_wrapper = $("<span></span>")
                            .addClass("notify-bar-text-wrapper")
                            .html(settings.html);

        bar.html(text_wrapper).hide();

        var id = bar.attr("id");
        switch (settings.animationSpeed) {
            case "slow":
                asTime = 600;
                break;
            case "default":
            case "normal":
                asTime = 400;
                break;
            case "fast":
                 asTime = 200;
                 break;
            default:
                 asTime = settings.animationSpeed;
        }
        if( bar != 'object'); {
            $("body").prepend(bar);
        }
        
        // Style close button in CSS file
        if(settings.close) {
            bar.append($("<a href='#' class='notify-bar-close'>" + settings.closeText + "</a>"));
            $(".notify-bar-close").click(function() {
                if( bar.attr("id") == "__notifyBar" + rand) {
                    $("#" + id).slideUp(asTime, function() { $("#" + id).remove() });
                } else {
                    $("#" + id).slideUp(asTime);
                }
                return false;
            });
        }
            
        // Check if we've got any visible bars and if we have,
        // slide them up before showing the new one
        if($('.jquery-notify-bar:visible').length > 0) {
            $('.jquery-notify-bar:visible').stop().slideUp(asTime, function() {
                bar.stop().slideDown(asTime);
            });
        } else {
            bar.slideDown(asTime);
        }
        
        // Allow the user to click on the bar to close it
        if(settings.closeOnClick) {
            bar.click(function () {
                $(this).slideUp(asTime, function () {
                    $(this).remove();
                });
            });
        }

        // Allow the user to move mouse on the bar to close it
        if(settings.closeOnOver) {
            bar.mouseover(function () {
                 $(this).slideUp(asTime, function () {
                    $(this).remove();
                });
            });
        }
             
        // If taken from DOM dot not remove just hide
        if( bar.attr("id") == "__notifyBar" + rand) {
            setTimeout(function () {
                $("#" + id).stop().slideUp(asTime, function () {
                    $(this).remove();
                });
            }, settings.delay + asTime);
        } else {
            setTimeout(function () {
                $("#" + id).stop().slideUp(asTime, function () {
                    $(this).remove();
                });
            }, settings.delay + asTime);
        }
    };
})( jQuery );