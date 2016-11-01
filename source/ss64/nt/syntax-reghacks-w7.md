---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Windows 7 registry - user interface settings </h1>
<p>Registry settings for user interface settings and options under Windows 7.<br>
These per-user options 
are all found in the registry under HKEY_CURRENT_USER   (the Windows 10 version of this page is <a href="syntax-reghacks.html">here</a>)</p>
<pre>Windows Registry Editor Version 5.00
; Sanity.REG
; Windows 7 per user settings

; Usual disclaimers apply - don't edit the registry unless you know what you are doing and
; BACKUP THE REGISTRY FIRST

; If you edit this file ensure all comment lines are prefixed with ; so that REGEDIT will ignore them



; - - - Section1 - - - - MS Explorer  - - - - - - - - - - - - - - - - - - - - - - - - - - 
;
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]

; When opening files with an unknown extension, dont prompt to search the internet
"NoInternetOpenWith"=dword:00000001

; Use the classic Start Menu
"NoSimpleStartMenu"=dword:00000001

; Dont display Balloon Tips on Start Menu items
"NoSMBalloonTip"=dword:00000001

; This does <a href="https://technet.microsoft.com/en-us/magazine/hh304572.aspx">nothing</a> 
;NoBalloonFeatureAdvertisements

; Don't tie new shortcuts to a specific PC
"LinkResolveIgnoreLinkInfo"=dword:00000001

; Don't use Windows NTFS link tracking to resolve existing shortcuts.
"NoResolveTrack"=dword:00000001

; Don't hide any local Drives
"<a href="syntax-nodrives.html">NoDrives</a>"=dword:00000000

; Don't hide icons in the Notification Area
"NoTrayItemsDisplay"=dword:00000000

; Don't hide the clock
"HideClock"=dword:00000000

; Don't disable right click context menu for taskbar and System Tray items
"NoTrayContextMenu"=dword:00000000 

; don't lock the  Taskbar and Start Menu Properties
"NoSetTaskbar"=dword:00000000

; ============ Taskbar ===========

;UnLock the Taskbar and allow the User to move/resize it 
"TaskbarSizeMove"=dword:00000001
"LockTaskbar"=-

;or Lock the Taskbar and prevent the User from moving or resizing it 
; "TaskbarSizeMove"=dword:00000000
; "LockTaskbar"=-
; you might also need to delete 'LockTaskbar' from HKLM, on Windows 7/8 the
; GUI control will be greyed out if this key exists.

; No Glomming (keep every icon on the taskbar separate)
; "TaskbarGlomming"=dword:00000000

; Glomming enabled
"TaskbarGlomming"=dword:00000001

; TaskBar Glomming level: Combine when full (default)
"TaskbarGlomLevel"=dword:00000001
; or Never combine
; "TaskbarGlomLevel"=dword:00000002

; TaskBar left/right grouping by age (oldest first) this is the default.
"TaskbarGroupSize"=dword:00000000

; or group by size largest first
; "TaskbarGroupSize"=dword:00000001

; or group all with 2 or more, or 3 or more:
; "TaskbarGroupSize"=dword:00000002
; "TaskbarGroupSize"=dword:00000003

; or prevent grouping altogether
; "NoTaskGrouping"=dword:00000001

; ===============================

; Don't hide any custom toolbars on the taskbar
"NoToolbarsOnTaskbar"=dword:00000000

; Don't display a welcome screen
"NoWelcomeScreen"=dword:00000001

; Don't automatically create shortcuts within My Network Places 
"<a href="slow_browsing.html">NoRecentDocsNetHood</a>"=dword:00000001

; Don't hide the log-off option from the Classic Start Menu
"ForceStartMenuLogOff"=dword:00000001

; Don't hide the log-off option from the Start Menu
"StartMenuLogOff"=dword:00000001

; Don't clutter start menu with My Network Places
"NoStartMenuNetworkPlaces"=dword:00000001

; Don't add a Music shortcut to the start menu
"NoStartMenuMyMusic"=dword:00000001

; Don't Remove Pinned Programs list from the Start Menu 
"NoStartMenuPinnedList"=dword:00000000

; Don't Remove 'All Programs' list from the Start menu
"NoStartMenuMorePrograms"=dword:00000000

; Don't hide the Themes tab in Control Panel Personalisation
"NoThemesTab"=dword:00000000

; Remember my Explorer views
"NoSaveSettings"=dword:00000000

;
; - - - Section2 - - - -  Explorer\Advanced  - - - - - - - - - - - - - - - - - - 

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]

; Show hidden files and folders
; "Hidden"=dword:00000001
; or Don't show hidden files and folders:
; "Hidden"=dword:00000002

; Don't Hide file extensions
"HideFileExt"=dword:00000000

; Dont hide recently opened Programs from the Start menu /Start Run
"Start_TrackProgs"=dword:00000001

; Dont hide recently opened Documents from the Start menu /Start Run
"Start_TrackDocs"=dword:00000001

; Don't add a Documents shortcut to the start menu (in Win8 this is hidden by default)
"Start_ShowMyDocs"=dword:00000000

; Don't add a Games shortcut to the start menu
"Start_ShowMyGames"=dword:00000000

; Don't slow down search by including all public folders
"Start_SearchFiles"=dword:00000001

; Don't change the upper/lower case of filenames
"DontPrettyPath"=dword:00000001

; Don't randomly open copies of windows explorer when I login
"PersistBrowsers"=dword:00000000

;
; - - - Section 3 - - - - Policy settings  - - - - - - - - - - - - - - - - - - - -
;

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System]

; Display verbose messages during login (Group policy, profile loading etc)
"verbosestatus"=dword:00000001

; Don't hide any of the following options (normally under Control Panel, Personalization)

; Allow changing Windows Color
"NoDispAppearancePage"=dword:00000000

; Allow Color scheme changes
"NoColorChoice"=dword:00000000

; Allow changing the font size
"NoSizeChoice"=dword:00000000

;Change desktop background (any wallpaper will override this)
"NoDispBackgroundPage"=dword:00000000

; Allow changing the Screen Saver 
"NoDispScrSavPage"=dword:00000000

; Allow changing the Display
"NoDispCPL"=dword:00000000

; Allow changing the Display Settings
"NoDispSettingsPage"=dword:00000000

; Allow changing the Screen Saver
"NoDispScrSavPage"=dword:00000000

; Allow a choice of visual style Aero/Classic
"SetVisualStyle"=-

; Allow changing the wallpaper
; If a wallpaper value is set here (or via policy) it will override the users choice
; in the control panel (HKCU\Control Panel\Desktop) so delete the key to allow changes:
"Wallpaper"=-

;
; - - - Section 4 - - - - Policy - Add-Remove Programs restrictions   - - - - - - 
;
; These keys make sure you can install or uninstall programs:
;

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Programs]
; Allow access to Programmes and Features
"NoProgramsAndFeatures"=-
"NoProgramsCPL"=-

; or disallow access:
;  "NoProgramsAndFeatures"=dword:00000001


;
; - - - Section 5 - - - -  Control Panel + Console- - - - - - - - - - - - - - -
;
; Dont hide any Control Panel applets see <a href="https://support.microsoft.com/kb/207750/">Q207750</a>
[HKEY_CURRENT_USER\Control Panel\don't load]
"appwiz.cpl"=-

; Start menu speed
[HKEY_CURRENT_USER\Control Panel\Desktop]
"MenuShowDelay"="50"
; (the default of 400 is a bit slow)


[HKEY_CURRENT_USER\Console]
; Allow copy and paste from the command line.
"QuickEdit"=dword:00000001


;
; - - - Section 6 - - - -  Windows Update [<b>HKLM</b>] - - - - - - - - - - - - - - - - - - -

; These affect all users [HKLM] and would typically be set via Group Policy
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update]

; Download and install
;"AUOptions"=dword:00000004

; Download but don't install 
;"AUOptions"=dword:00000003

; Check but don't download 
;"AUOptions"=dword:00000002

; Don't check
;"AUOptions"=dword:00000001

; Dont reboot to install updates if a user is currently logged in
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"NoAutoRebootWithLoggedOnUsers"=dword:00000001

;
; - - - Section 7 - - - -  Misc [<b>HKLM</b>] All users - - - - - - - - - - - - - - - - - - -
;
; Set the Screen Saver grace period (this only works if a valid screensaver is set)
; an alternative is adjusting the power / hibernate settings for the display.
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon]
"ScreenSaverGracePeriod"="5"</pre>
<p>Many of the On/Off registry values above can be toggled between TRUE (<span class="code">00000001</span>) and FALSE (<span class="code">00000000</span>)</p>
<p>If any of the above setting could have been modified by Group Policy, use <span class="code">RSOP.msc</span> (GUI utility) to see the policy settings that have been applied to the current user, or run <a href="gpresult.html">GPRESULT /z</a> to see the full details of registry keys set.</p>
<p>If you are running DISM then equivalent settings for All Users can be found under <span class="code">[HKEY_LOCAL_MACHINE\<b>WIM_Default</b>\Software\Microsoft\Windows\CurrentVersion\Explorer\</span></p>
<p>Windows 10 Themes can be found under:<br>
<span class="code">%userprofile%\AppData\Local\Microsoft\Windows\Themes</span><br>
</p>
<p><i class="quote">"It's not like I let people do things for me, so I guess you can call me a control freak, or you can call me passionate" ~ Courteney Cox</i><br>
<br>
<b>Related:</b>
</p><p><a href="http://www.sevenforums.com/tutorials/?filter[2]=Appearance Personalize">SevenForums</a> - Tutorials on Windows 7 personalization<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-reghacks-w7.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

