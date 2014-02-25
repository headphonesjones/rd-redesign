
'use strict';

angular.module('radioApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'flickr',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleController'
      })
      .when('/shows', {
        templateUrl: 'views/shows.html',
        controller: 'ShowListController'
      })
      .when('/sports', {
        templateUrl: 'views/sports.html',
        controller: 'SportsController'
      })
      .when('/shows/:showId', {
        templateUrl: 'views/show.html',
        controller: 'ShowController'
      })
      .when('/people/', {
        templateUrl: 'views/people.html',
        controller: 'PeopleListController'
      })
      .when('/people/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonController'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsListController'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaController'
      })
      .when('/webcam', {
        templateUrl: 'views/webcam.html',
        controller: 'WebcamController'
      })
      .when('/popupplayer', {
        templateUrl: 'views/popupplayer.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('radioApp').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://radiodepaul.s3.amazonaws.com/**']);


});


function loadJS(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function() {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
}

var myVideo=document.getElementById("audio-player-hidden");
var sportsPlayer=document.getElementById("sports-player");
var audioSupport = !!(myVideo.canPlayType && myVideo.canPlayType('audio/mpeg;').replace(/no/, ''));
function playVid()
  {
    if (audioSupport == false) {
      window.open('/popupplayer.html')
    } else {
      myVideo.play();
      volume: 75;
      document.getElementById("pause-icon").style.display = 'inline-block';
      document.getElementById("play-icon").style.display = 'none';
    }
  }
function pauseVid()
  {
  myVideo.pause();
  document.getElementById("play-icon").style.display = 'inline-block';
  document.getElementById("pause-icon").style.display = 'none';
  } 
function playSports()
  {
      sportsPlayer.play();
      volume: 75;
      document.getElementById("sports-pause-icon").style.display = 'inline-block';
      document.getElementById("sports-play-icon").style.display = 'none';
  }
function pauseSports()
  {
  sportsPlayer.pause();
  document.getElementById("sports-play-icon").style.display = 'inline-block';
  document.getElementById("sports-pause-icon").style.display = 'none';
  } 


  function mute()
    {
    myVideo.pause();
    document.getElementById("volume-off").style.display = 'inline-block';
    document.getElementById("volume").style.display = 'none';
    }
  function unmute()
    {
    myVideo.play();
    document.getElementById("volume-off").style.display = 'none';
    document.getElementById("volume").style.display = 'inline-block';
    } 
    function sportsMute()
    {
    myVideo.pause();
    document.getElementById("sports-volume-off").style.display = 'inline-block';
    document.getElementById("sports-volume").style.display = 'none';
    }
  function sportsUnmute()
    {
    myVideo.play();
    document.getElementById("sports-volume-off").style.display = 'none';
    document.getElementById("sports-volume").style.display = 'inline-block';
    } 

    function showChat()
    {
    var chatFrame = '<h4 class="blue-text" style="float: right; margin-right: 10px; cursor: pointer;" onClick="closeChat();">X</h4><br/><iframe id="chat-iframe" src="http://cdn.livestream.com/embed/radiodepaulchannel?layout=6&amp;height=350&amp;width=250&amp;showTimestamp=true" height="350px;"></iframe>';
    document.getElementById("chat").style.display = 'inline-block';
    document.getElementById("chat").innerHTML=chatFrame;
    }
  function closeChat()
    {
    document.getElementById("chat").style.display = 'none';
    } 

