//
//  TracePlugin.m
//  iOSPlugin
//
//  Created by plter on 12-12-9.
//
//

#import "TracePlugin.h"

@implementation TracePlugin



-(void)trace:(CDVInvokedUrlCommand *)command{
    
    NSLog(@"%@",[command.arguments objectAtIndex:0]);
    
    
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
    
}

@end
