/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.plter.adexample;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.DroidGap;

import com.tencent.exmobwin.MobWINManager;
import com.tencent.exmobwin.Type;

import android.os.Bundle;

public class ADExample extends DroidGap
{
	
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.ad_example);
        
        appView=(CordovaWebView) findViewById(R.id.webview);
        appView.loadUrl("file:///android_asset/www/index.html");
        
        MobWINManager.init(this,Type.MOBWIN_BANNER);
    }
    
    
    @Override
    public void onDestroy() {
    	MobWINManager.destroy();
    	super.onDestroy();
    }
}

