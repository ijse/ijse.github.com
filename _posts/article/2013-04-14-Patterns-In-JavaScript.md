---
title: "JavaScript的设计模式"
layout: post
tags: [JavaScript, pattern]
category: article
published: false
---

{% include JB/setup %}


# Singleton 单例模式

    var bird = {
        type: "Red",
        fly: function() {
            console.log( "Weeeee!" );
        },
        destroy: function() {
            console.log( "Hasta la vista, baby!" );
        }
    };
    
# Factory 工厂模式

工厂模式是一种不使用`new`关键字创建对象的方式，抽象出了创建对象这一动作。

    var Bird = function() {};
    Bird.factory = function( type ) {
        var bird;
        if ( typeof Bird[ type ] === "function" ) {
            bird = new Bird[ type ]();
        }
        return bird;
    };
     
    Bird.Red = function() {};
    Bird.Blue = function() {};
     
    var redBird = Bird.factory( "Red" );
    var blueBird = Bird.factor( "Blue" );
    
# Bridge 桥接模式
这个模式可以大大方便代码的单元测试。

    // Not Bridged
    var getUrl = function() {
        var url = $( this ).attr( "href" );
        
        $.ajax({
            url: url,
            success: function( data ) {
                console.log( data );
            }
        });
    };
    $( "a.ajax" ).on( "click", getUrl );
     
    // Bridged
    var getUrl = function( url, callback ) {
        $.ajax({
            url: url,
            success: function( data ) {
                if ( callback ) { callback( data ); }
            }
        });
    };
    var getUrlBridge = function() {
        var url = $( this ).attr( "href" );
        
        getUrl( url, function( data ) {
            console.log( data );
        });
    }
    $( "a.ajax" ).on( "click", getUrlBridge );
    
# Facade 门面模式
这种模式可以将一些多个版本的方法封装成一个版本来使用，简化调用过程。

    // Facade
    var addEvent = function( element, type, eventHandler ) {
        if ( element.addEventListener ) {
            element.addEventListener( type, eventHandler, false );
        } else if ( elemement.attachEvent ) {
            element.attachEvent( "on" + type, eventHandler );    
        }
    };
    
# Adapter 适配器模式
    /*!
     * jquery-win8-deferred - jQuery $.when that understands WinJS.promise
     * version: 0.1
     * author: appendTo, LLC
     * copyright: 2012
     * license: MIT (http://www.opensource.org/licenses/mit-license)
     * date: Thu, 01 Nov 2012 07:38:13 GMT
     */
     (function () {
        var $when = $.when;
        $.when = function () {
            var args = Array.prototype.slice.call(arguments);
     
            args = $.map(args, function (arg) {
                if (arg instanceof WinJS.Promise) {
                    arg = $.Deferred(function (dfd) {
                        arg.then(
                            function complete() {
                                dfd.resolveWith(this, arguments);
                            }, function error() {
                                dfd.rejectWith(this, arguments);
                            }, function progress() {
                                dfd.notifyWith(this, arguments);
                            }
                        );
                    }).promise();
                }
     
                return arg;
            });
     
            return $when.apply(this, args);
        };
    }());


# Observer 观察者模式
    
这种模式非常有用，可以用它来与其它组件解耦，比较不错的有[postal.js](https://github.com/postaljs/postal.js) 库
    
    var channel = postal.channel( "game" );
     
    channel.subscribe( "bird.attack", function( data ) {
        console.log( "Geronimo!" );
    });
     
    channel.subscribe( "pig.collide", function( impact ) {
        if ( impact > 100 ) {
            console.log( "AHHHHHHH!" );
        }
    });
     
    channel.publish( "bird.attack", { angle: 45 } );
        
    
    
    
