package com.plter.toastplugin;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.widget.Toast;

public class MyToast extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		
		if ("show".equals(action)) {
			show(args, callbackContext);
		}
		
		return super.execute(action, args, callbackContext);
	}
	
	
	
	public void show(JSONArray args,CallbackContext callbackContext){
		
		try {
			Toast.makeText(cordova.getActivity(), args.getString(0), Toast.LENGTH_SHORT).show();
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		callbackContext.success();
	}
}
