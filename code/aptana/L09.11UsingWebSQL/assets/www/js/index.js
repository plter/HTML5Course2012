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
        
        
        createOrConnectUserTable();
        $('#addBtn').click(addUser);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};


function addUser(){
	var name=$('#nameInput').attr('value');
	var sex=$('#sexInput').attr('value');
	var age=$('#ageInput').attr('value');
	
	openDb().transaction(function(ta){
		
		ta.executeSql("INSERT INTO user(name,sex,age) VALUES(\""+name+"\",\""+sex+"\",\""+age+"\")");
		
	},function(){
		console.log("添加用户失败");
	},function(){
		console.log("添加用户成功");
		
		showAllUser();
	});
}

function createOrConnectUserTable(){
	openDb().transaction(function(ta){
        	ta.executeSql("CREATE TABLE IF NOT EXISTS user(name,sex,age)");
        	
        },function(){
        	console.log("创建或者连接用户表错误");
        },function(){
        	console.log("创建或者连接用户表成功");
        	
        	showAllUser();
        });
}

function showAllUser(){
	
	openDb().transaction(function(ta){
		
		ta.executeSql("SELECT * FROM user",[],function(ta,result){
			if (result.rows.length) {
				
				var html="<ul data-role=\"listview\">";
				var row;
				
				for (var i=0; i < result.rows.length; i++) {
				  row=result.rows.item(i);
				  html+="<li>";
				  html+="用户："+row.name+"<br/>";
				  html+="性别："+row.sex+"<br/>";
				  html+="年龄："+row.age+"<br/>";
				  html+="</li>";
				};
				
				html+="</ul>";
				
				$('#userListContainer').html(html);
				$('#userListContainer').trigger('create');
			};
			
		},function(){
			console.log("执行查找用户的SQL语句时出现错误");
		});
		
	},function(){
		console.log("呈现用户失败");
	},function(){
		console.log("呈现用户成功");
	});
	
}


function openDb(){
	return window.openDatabase("UsingWebSQL","1.0","Using Web SQL",1000000);
}
