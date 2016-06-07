/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        $('#showAlertBtn').click(function(){
        	navigator.notification.alert("这是一个对话框",function(){
        		console.log("对话框已关闭");
        	},"你好","关闭");
        });
        $('#showConfirmBtn').click(function(){
        	
        	navigator.notification.confirm(
        		"你今天早上吃饭了吗？",
        		function(btn){
        			console.log(btn);
        			
        			if (btn==1) {
        				alert("他已经吃饭了");
        			}else{
        				alert("他还没有吃饭");
        			}
        		},
        		"你好",
        		"吃了,没有");
        });
        
        $('#beepBtn').click(function(){
        	navigator.notification.beep(1);
        });
        $('#vibrateBtn').click(function(){
        	navigator.notification.vibrate(1000);
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};
