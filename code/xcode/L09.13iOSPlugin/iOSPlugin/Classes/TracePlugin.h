//
//  TracePlugin.h
//  iOSPlugin
//
//  Created by plter on 12-12-9.
//
//

#import <Cordova/CDV.h>

@interface TracePlugin : CDVPlugin

-(void)trace:(CDVInvokedUrlCommand*)command;

@end
