---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PowerCFG (Vista/Windows7/Server 2008) </h1>
<p>Control power settings,  configure Hibernate/Standby modes. See also the Windows <a href="powercfg-xp.html">XP SP2 version of PowerCfg</a>. </p>
<pre>Syntax
      powercfg [<i>Options</i>]

Options

   -l
   -list
            List the current user's power schemes (GUIDs)

   -query [<i>Scheme_GUID</i>] [<i>Sub_GUID</i>]
   -q [<i>Scheme_GUID</i>] [<i>Sub_GUID</i>]
            Display the contents of a power scheme.

   -change <i>settingvalue</i>
   -x <i>setting value</i>
            Modify one of the following settings in the current power scheme:
              -monitor-timeout-ac <i>minutes</i>
              -monitor-timeout-dc <i>minutes</i>
              -disk-timeout-ac <i>minutes</i>
              -disk-timeout-dc <i>minutes</i>
              -standby-timeout-ac <i>minutes</i>
              -standby-timeout-dc <i>minutes</i>
              -hibernate-timeout-ac <i>minutes</i>
              -hibernate-timeout-dc <i>minutes</i>
            Setting any value to 0 will set the timeout=Never
            AC settings are used when the system is on AC power. DC settings on battery power.

   -changename <i>GUID PowerSchemeName </i>[<i>scheme_description</i>]
            Modify the name of a power scheme and, optionally, the scheme description.

   -duplicatescheme <i>GUID [DestinationGUID]</i>
            Duplicate a power scheme. The GUID of the new scheme will be displayed.
            If DestinationGUID is omitted, then a new GUID will be created for the duplicated scheme.

   -delete <i>GUID</i>
   -d <i>GUID</i>
            Delete the power scheme with the specified GUID.

   -deletesetting <i>Sub_GUID Setting_GUID</i>
            Delete a power setting.

   -setactive <i>Scheme_GUID</i>
   -s <i>Scheme_GUID</i>
            Make the specified power scheme active on the computer.

   -getactivescheme
            Retrieve the currently active power scheme.

   -setacvalueindex <i>Scheme_GUID Sub_GUID Setting_GUID SettingIndex</i>
            Set a value associated with a specified power setting while the
            computer is powered by AC power. Use the -l and -q options to discover the GUIDs
            <i>SettingIndex</i> Specifies which value in the list to set, so 3 = 3rd in the list

   -setdcvalueindex <i>Scheme_GUID Sub_GUID Setting_GUID SettingIndex</i>
            Set a value associated with a specified power setting while the
            computer is powered by DC power.
            <i>SettingIndex</i> Specifies which value in the list to set, so 3 = 3rd in the list

   -hibernate [on|off]
   -h [on|off]
            Enable or disable the hibernate feature. Hibernate timeout is not supported on all computers.

   -availablesleepstates
   -a
            Report the sleep states available on the computer.
            Will also attempt to report reasons why sleep states are unavailable.

   -devicequery <i>query_flags</i>
            Return a list of devices that meet the specified flags:
               wake_from_S1_supported – Waking the computer from a light sleep state.
               wake_from_S2_supported – Waking the computer from a deeper sleep state.
               wake_from_S3_supported – Waking the computer from the deepest sleep state.
               wake_from_any   – Support waking the computer from any sleep state.
               S1_supported    – Light sleep.
               S2_supported    – Deeper sleep.
               S3_supported    – Deepest sleep.
               S4_supported    – Hibernation.
               wake_programmable – User-configurable to wake the computer from a sleep state.
               wake_armed      – Currently configured to wake the computer from any sleep state.
               all_devices     – Present in the computer.
               all_devices_verbose – Verbose list of devices.

   -deviceEnableWake <i>devicename</i>
            Enable the device to wake the computer from a sleep state.
	
   -deviceDisableWake <i>devicename</i>
            Disable the device from waking the computer from a sleep state.

   -import <i>filename</i> [<i>GUID</i>]
            Import all power settings from the specified file.
            <i>filename</i> is the path to a file generated with powercfg -export

   -export <i>filename GUID</i>
            Export a power scheme, represented by <i>GUID</i>, into <i>filename</i>.

   -lastwake
            Report information about the last event that woke the computer.

   -energy
            Create energy-report.html in the current directory, Windows7 only.

   -help
   -?
            Display help

   -aliases
            Display all aliases and their corresponding GUIDs.
            These can be used in place of a GUID at the command prompt

   -setsecruitydescriptor [<i>GUID</i>|<i>Action</i>] <i>SDDL</i>
            Set a security descriptor associated with a specified power setting, power scheme, or action.
            <i>Action</i> Is one of: ActionSetActive, ActionCreate, ActionDefault
            <i>SDDL </i>is a valid security descriptor string in SDD format.
            Call powercfg -getsecuritydescriptor to see an example SDDL STRING.

   -getsecuritydescriptor [<i>GUID</i>|<i>Action</i>]
            Get a security descriptor associated with a specified power setting, power scheme, or action.
            <i>Action </i>is one of: ActionSetActive, ActionCreate, ActionDefault
</pre>
<p>Powercfg must be run from an elevated command prompt.</p>
<p>The most common cause of problems with power saving/hibernation is an incompatible device driver, diagnose this by disabling each device in turn (with <span class="code">-deviceDisableWake</span>) </p>
<p>When activating Power Saving across an organisation, it is important to ensure that software updates (security patches and antivirus) are not disrupted.<br>
<a href="http://technet.microsoft.com/en-us/windowsserver/bb332157.aspx">WSUS</a> can be configured to install updates when workstations are available and <a href="schtasks.html">Scheduled Tasks</a> can be set to Wake the machine when needed. </p>
<h2>Power scheme GUIDs</h2>
<blockquote>
<p>The use of <a href="http://en.wikipedia.org/wiki/Globally_Unique_Identifier">GUIDs</a> avoids any problems with internationalisation when applying Power Saving to non-english versions of Windows. The three built-in power schemes have the  GUIDs listed below: </p>
<p>SCHEME_MAX = Power saver (Max power saving) <br>
SCHEME_BALANCED = Balanced (Typical)<br>
SCHEME_MIN = High performance (Min power saving) </p>
</blockquote>
<p><b>Examples</b></p>
<p>List all Aliases:</p>
<p class="code">C:\&gt; powercfg -aliases<br>a1841308-3541-4fab-bc81-f71556f20b4a SCHEME_MAX<br>
8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c SCHEME_MIN<br>
381b4222-f694-41f0-9685-ff5bb260df2e SCHEME_BALANCED<br>
fea3413e-7e05-4911-9a71-700331f1c294 SUB_NONE<br>
238c9fa8-0aad-41ed-83f4-97be242c8f20 SUB_SLEEP<br>
29f6c1db-86da-48c5-9fdb-f2b67b1f44da STANDBYIDLE<br>
9d7815a6-7ee4-497e-8888-515a05f02364 HIBERNATEIDLE<br>
94ac6d29-73ce-41a6-809f-6363ba21b47e HYBRIDSLEEP<br>
d4c1d4c8-d5cc-43d3-b83e-fc51215cb04d REMOTEFILESLEEP<br>
7516b95f-f776-4464-8c53-06167f40cc99 SUB_VIDEO</p>
<p>Retrieve the currently active power scheme<br>
<span class="code">C:\&gt; Powercfg -getactivescheme</span><br>
<br>
Set the Monitor and disc timeouts for the current Power saver scheme<span class="code"><br>
C:\&gt; Powercfg -Change -monitor-timeout-ac 20<br>
C:\&gt; Powercfg -Change -disk-timeout-ac 30</span></p>
<p>Enable the mouse to wake from sleep<span class="code"> <br>
C:\&gt; Powercfg -deviceEnableWake "Microsoft USB IntelliMouse Explorer"</span><br><br>
Set the 'Power saver' scheme<br>
<span class="code">C:\&gt; Powercfg -SETACTIVE SCHEME_MAX<br>
<br>
</span>Create a Custom Power  scheme and set it as active<span class="code"> <br>
Set _Custom_Power=B1234567-SS64-SS64-SS64-F00000111AAA<br>
Powercfg -DUPLICATESCHEME SCHEME_MAX
%_Custom_Power%<br>
Powercfg -CHANGENAME %_Custom_Power% "SS64 Power Scheme "<br>
Powercfg -SETACTIVE %_Custom_Power%</span></p>
<p>Disable the sleep button (for the users current power scheme) <span class="code"><br>
For /f "tokens=2 delims=:(" %%G in ('powercfg -getActiveScheme') do (<br>
Powercfg -setAcValueIndex %%G sub_buttons sButtonAction 0<br>
Powercfg -setActive %%G<br>
)</span></p>
<p>Disable the sleep button (for all available power 
schemes):<br>
<span class="code">For /f "skip=2 tokens=2,4 delims=:()" %%G in ('powercfg -list') do (<br>
Powercfg -setAcValueIndex %%G sub_buttons sButtonAction 0<br>
if "%%H" == " *" Powercfg -setActive %%G<br>
)</span></p>
<p><i class="quote">“The fact that you have to choose between nine different ways of turning off your computer... produces just a little bit of unhappiness every time” - <a href="http://www.joelonsoftware.com/items/2006/11/21.html">Joel on Software</a> </i><br>
<br>
<b> Related:</b></p>
<p><a href="powercfg-xp.html">PowerCfg</a> for 
Windows XP SP2<br>
<a href="https://support.microsoft.com/kb/915160">Q915160</a> - Create a Group Policy object for power schemes<br>
<a href="https://support.microsoft.com/kb/324347">Q324347</a> - How to use Powercfg.exe in Windows Server 2003<br>
<a href="http://www.energystar.gov/index.cfm?c=power_mgt.pr_power_mgt_comm_packages">3rd party Power Management tools</a> - EnergyStar.gov</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="powercfg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

