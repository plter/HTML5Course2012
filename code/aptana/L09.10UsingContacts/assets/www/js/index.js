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
        
        showNames();
        
        $('#saveBtn').click(saveContact);
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

function saveContact(){
	
	navigator.contacts.create(
		{displayName:$('#nameInput').attr('value'),
		phoneNumbers:[{type:'home',value:$('#phoneNumberInput').attr('value')}]
		}
		).save();
	
	showNames();
}


function showNames(){
	navigator.contacts.find(["displayName","name","phoneNumbers"],
        	function(contacts){
        		var html="<ul data-role=\"listview\">",c,numbers;
        		for (var i=0; i < contacts.length; i++) {
				  c=contacts[i];
				  numbers=c.phoneNumbers;
				  html+="<li>"
				  
				  html+="用户："+c.displayName+"<br/>";
				  
				  if(numbers&&numbers.length>0){
				  	
				  	
				  	
				  	html+="号码："+numbers[0].value;
				  }
				  
				  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
// 				  
				  // console.log("displayName:"+c.displayName+",name:"+c.name+",number:"+c.phoneNumbers);
// 				  
				  // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<");
				  
				  html+="</li>";
				};
        		
        		html+="</ul>";
        		
        		$('#contactsContainer').html(html);
        		$('#contactsContainer').trigger('create');
        	},
        	function(){
        		console.log("获取联系人失败");
        	},
        	{ filter: "",multiple: true}
        );
}
