//
//  AppInfoPlugin.m
//  iOSPlugin
//
//  Created by plter on 12-12-9.
//
//

#import "AppInfoPlugin.h"
#import "AppInfoVC.h"

@implementation AppInfoPlugin


-(void)show:(CDVInvokedUrlCommand *)command{
    
    
    AppInfoVC * appInfo = [[AppInfoVC alloc] initWithNibName:@"AppInfoVC" bundle:nil];
    appInfo.modalTransitionStyle=UIModalTransitionStyleFlipHorizontal;
    
    [self.viewController presentModalViewController:appInfo animated:YES];
    
    
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
    
}

@end
