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
var rootEntry,rootEntryReader,currentDirPath;

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
        
        window.requestFileSystem(1,0,function(fs){
        	showFilesInDir(fs.root);
        },function(){
        	console.log("请求使用文件系统出错");
        });
        
        $('#addFileBtn').click(addFile);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};


function addFile(){
	var fileName = $('#fileNameInput').attr('value');
	var fileContent = $('#fileContentInput').attr('value');
	
	window.requestFileSystem(1,0,function(fs){
		
		fs.root.getFile(getCurrentDirWithoutHeader()+"/"+fileName,{create:true},function(entry){
			entry.createWriter(function(fw){
				fw.onwrite=function(){
					showDirContent(true,currentDirPath);
				}
				fw.write(fileContent);
			},function(){
				console.log("获取文件写入工具出错");
			});
		},function(){
			console.log("创建文件失败");
		});
		
	},function(){
		console.log("请求使用文件系统失败");
	});
}

function getCurrentDirWithoutHeader(){
	if (currentDirPath.substr(0,7)=="file://") {
		return currentDirPath.substr(7);
	}else{
		return currentDirPath;
	};
}


function showDirContent(isDir,dirPath){
	
	window.requestFileSystem(1,0,function(fs){
		
		dirPath=dirPath.substr(7);
		
			
		if (isDir) {

			fs.root.getDirectory(dirPath, {}, function(entry) {
				showFilesInDir(entry);
			}, function() {
				console.log("获取文件夹内容失败" + dirPath);
			});

		} else {
			
			fs.root.getFile(dirPath, {}, function(entry) {

				entry.file(function(file) {
					var fr = new FileReader();
					fr.onload = function() {
						alert(fr.result);
					}
					fr.readAsText(file);
				}, function() {
					console.log("读取文件信息失败");
				});
			}, function() {
				console.log("获取文件失败");
			});

		};
	},function(){
		console.log("请求使用文件系统出错");
	});
}


function showFilesInDir(dirEntry){
	
	currentDirPath=dirEntry.fullPath;
	
	dirEntry.createReader().readEntries(function(entries){
        		var entry,html="<ul data-role=\"listview\">";
        		
        		for (var i=0; i < entries.length; i++) {
				  entry=entries[i];
				  
				  html+="<li><a id=\"listBtn"+i+"\" href=\"#\">";
				  if (entry.isFile) {
				  	html+="[File]";
				  }else if(entry.isDirectory){
				  	html+="[DIR]";
				  };
				  html+=entry.name;
				  
				  html+="</a></li>";
				};
				
				html+="</ul>";
				
				$('#filesContainer').html(html);
				$('#filesContainer').trigger('create');
				
				for (var i=0; i < entries.length; i++) {
					entry=entries[i];
				  $('#listBtn'+i).bind('click', 
				  		{isDir:entry.isDirectory,path:entry.fullPath},
				  		function(event) {
							showDirContent(event.data.isDir,event.data.path);
				  		}
				  );
				};
        	},function(){
        		$('#filesContainer').empty();
        		
        		console.log("读取文件夹内容出错"+dirEntry.fullPath);
        	});
}
