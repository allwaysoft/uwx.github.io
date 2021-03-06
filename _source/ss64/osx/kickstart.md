---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>kickstart</h1> 
<p>/System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources</p>
<p>Quickly uninstall, install, activate, configure, and/or restart
components of Apple Remote Desktop without a reboot.</p>
<pre>Syntax
      kickstart <i>option(s)</i></pre>
<p>The 7 'top level' features can be selected independently, but will always be done in the order: uninstall, install, deactivate, activate, configure, stop, restart.</p>
<pre>Options:

   -uninstall           ## Enable the "uninstall" options
   -uninstall -files    ## Uninstall all ARD-related files
   -uninstall -settings ## Remove access privileges in System Preferences
   -uninstall -prefs    ## Remove Remote Desktop administrator preferences

   -install -package <i>path</i> ##  Specify the path to an installer package to run

   -deactivate            ## Deactivate ARD agent in Sys Prefs to run at startup
   -activate              ## Activate ARD agent in Sys Prefs to run at startup

   -configure -users <i>user1,user2..</i>.  ## Specify users to set privs or access (default is all users)

   -configure -access -on             ## Grant access
   -configure -access -off            ## Deny access

   -configure -privs -all             ## Grant all privileges (default)
   -configure -privs -none            ## Disable all privileges for specified user
   -configure -privs -DeleteFiles
   -configure -privs -ControlObserve  ## Control AND observe (unless ObserveOnly is also specified)
   -configure -privs -TextMessages    ## Send a text message
   -configure -privs -ShowObserve     ## Show client when being observed or controlled
   -configure -privs -OpenQuitApps    ## Open and quit applications
   -configure -privs -GenerateReports ## Generate reports (and search hard drive)
   -configure -privs -RestartShutDown
   -configure -privs -SendFiles       ## Send *and/or* retrieve files
   -configure -privs -ChangeSettings  ## Change system settings
   -configure -privs -ObserveOnly     ## Modify ControlObserve option to allow Observe mode only
   -configure -privs -mask <i>mask_no </i>   ## Specify "naprivs" mask numerically instead (advanced)

   -configure -allowAccessFor -allUsers [-privs <i>priv_options</i>]  ## Grant access to all local users
   -configure -allowAccessFor -specifiedUsers           ## Only grant access to users with privileges

   -configure -computerinfo -set1 -1 <i>text</i>  ## Specify all four computer info fields (default for each is empty)
   -configure -computerinfo -set2 -2 <i>text</i>
   -configure -computerinfo -set3 -3 <i>text</i>
   -configure -computerinfo -set4 -4 <i>text</i>

   -configure -clientopts -setmenuextra -menuextra  yes        ## Set whether menu extra appears in menu bar
   -configure -clientopts -setdirlogins -dirlogins  yes        ## Set whether directory logins are allowed
   -configure -clientopts -setdirgroups -dirgroups  grp1,grp2  ## Set directory groups allowed
   -configure -clientopts -setreqperm   -reqperm    yes|no     ## Allow VNC guests to request permission
   -configure -clientopts -setvnclegacy -vnclegacy  yes|no     ## Allow VNC Legacy password mode
   -configure -clientopts -setvncpw     -vncpw      mynewpw    ## Set VNC Legacy PW
   -configure -clientopts -setwbem      -wbem       yes|no     ## Allow incoming WBEM requests over IP

   -stop              ## Stop the agent and/or console program (N/A if targetdisk is not /)

   -restart           ## Enable the "restart" options: (N/A if targetdisk is not /)
   -restart -agent    ## Restart the ARD Agent and helper
   -restart -console  ## Restart the console application
   -restart -menu     ## Restart the menu extra

   -targetdisk <i>mountpoint</i> ## Disk on which to operate, specified as a mountpoint in
         ## the current filesystem.  Defaults to the current boot volume: "/".
         ## NOTE: Disables the -restart options (does not affect currently
         ## running processes).

   -verbose    ## Print (non-localizable) output from installer tool (if used)
   -quiet      ## No feedback; just run.
   -help       ## Show verbose documentation
</pre>
<p> 
The default location of kickstart is shown at the top of this page, copy it to any location you prefer (e.g. /usr/bin/local/)<br>Use kickstart at your own risk.  Read and understand the help first!<br>
Log in as an administrator (you must have sudo privileges)<br>
Avoid running multiple instances of kickstart at the same time.<br>
kickstart will start and stop Apple Remote Desktop (ARD) components: Agent &amp; daemons as needed.<br>
kickstart can be used to grant very permissive incoming access permissions. Do not use the -activate and -configure features unless you know exactly what you're doing. </p>
<p>Standard Apple Remote Desktop groups:</p>
<p class="code">ard_admin<br>
ard_manage<br>
ard_interact<br>
ard_reports</p>
<p>ard_admin is equivalent to ard_manage + ard_interact </p>
<p>On many versions of OSX you will need to create ard_admin as
a <b>local</b> group, you will then be able  to nest any Active Directory  group in
the local ard_admin group.</p>
<p><b>Examples</b></p>
<p>- Uninstall program files (but not preferences and settings), install the given package, and then restart the service.<br>  
<span class="code">kickstart -uninstall -files -install -package RD_Admin_Install.pkg -restart -console</span><br>
<br>
- Install the given package and then restart the ARD agent.<br>  
<span class="code">kickstart -install -package RD_Client_Install.pkg -restart -agent</span><br>
<br>
- On 10.4 and earlier, stop the Remote Management service but, if activated, it will start after the next computer restart.<br>
- On 10.5 and later, use kickstart -deactivate instead.<br>  
<span class="code">kickstart -stop</span><br>
<br>
- Stop the Remote Management service and deactivate it so it will not start after the next computer restart.<br>  
<span class="code">kickstart -deactivate -stop</span> <br>
<br>
- Restart the agent.<br>  
<span class="code">kickstart -restart -agent -console</span><br>
<br>
- Activate the Remote Management service and then restart the agent.<br>  
<span class="code">kickstart -activate -restart -agent -console</span><br>
<br>
- Activate the Remote Management service, enable access, and restart the agent.<br>  
<span class="code">kickstart -activate -configure -access -on -restart -agent</span><br>
<br>
- Disable user access.<br>  
<span class="code">kickstart -configure -access -off</span><br>
<br>
- Give admin and bob all access.<br>  
<span class="code">kickstart -configure -access -on -privs -all -users admin,bob</span><br>
<br>
- Use Directory Server accounts for authentication. Users must be a member of one of the directory<br>
- groups to authenticate.<br>  
<span class="code">kickstart -configure -clientopts -setdirlogins -dirlogins yes -setdirgroups -dirgroups ardadmin,ardcontrol</span><br>
<br>
- Disable the Remote Management menu extra.<br>  
<span class="code">kickstart -configure -clientopts -setmenuextra -menuextra no</span><br>
<br>
The following examples are only for Mac OS X 10.5 and later.<br>
<br>
- Allow access for only these users (the users must be specified in a separate command).<br>  
<span class="code">kickstart -configure -allowAccessFor -specifiedUsers</span><br>
<br>
- Allow access for all users and give all users full access.<br>  
<span class="code">kickstart -configure -allowAccessFor -allUsers -privs -all</span><br>
<br>
- Start the Remote Management service.<br>  
<span class="code">kickstart -activate</span></p>
<p class="quote"><i>“And I thought how unpleasant it is to be locked out; and I thought how it is worse, perhaps, to be locked in” ~ Virginia Woolf</i></p>
<p><b>Related:</b></p>
<p><a href="screen.html">screen</a> - Multiplex terminal, run remote shells via ssh<br>
<a href="http://docs.info.apple.com/article.html?path=RemoteDesktop/3.0/en/ARDC56.html">Enabling Directory Services Group Authorization</a> </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="kickstart.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
