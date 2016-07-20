// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            var push = new Ionic.Push({
                "onNotification": function(notification) {
                    alert('Received push notification!');
                }
            });

            push.register(function (token) {
                console.log("Device token:", token.token);
                push.saveToken(token);  // persist the token in the Ionic Platform
                alert("Device token: " + token);
            });

        });
    })
