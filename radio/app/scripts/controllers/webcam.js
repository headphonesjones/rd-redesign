'use strict';

angular.module('radioApp')

.controller('WebcamController', function($scope){
    
        loadJS('http://jwpsrv.com/library/GgcroA5wEeOwaBIxOUCPzg.js', function() { 
                jwplayer('webcam-player').setup({
                //
                //image: 'Enter a JPG or PNG preview image URL',
                title: 'Radio DePaul Webcam',
                width: '100%',
                aspectratio: '16:9',
                playlist: [{
                        image: 'http://i.imgur.com/6O6jzqI.jpg',
                        sources: [{ 
                            file: 'http://ec2-67-202-3-106.compute-1.amazonaws.com/rtplive/mp4:camera.stream/playlist.m3u8',
                                },{
                            file: 'rtmp://ec2-67-202-3-106.compute-1.amazonaws.com/rtplive/mp4:camera.stream',
                        }]
                    }],
                primary: "html5"

            });
    });
});