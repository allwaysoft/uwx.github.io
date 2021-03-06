---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PowerCFG (Windows XP SP2/2003) </h1>
<p>Control power settings,  configure Hibernate/Standby modes. See also the <a href="powercfg.html">Vista/Windows7/Server 2008 version of PowerCfg</a>. </p>
<pre>Syntax
      powercfg [<i>Options</i>]

Options

   /l
   /list
            List the current user's power schemes.

   /query [<i>Scheme_name</i>]
   /q [<i>Scheme_name</i>]
            Display the contents of a power scheme.

   /create <i>Scheme_Name</i>
   /c <i>Scheme_Name
</i>            Create a power scheme with the specified <i>Scheme_Name</i>.

   /delete <i>Scheme_Name</i>
   /d <i>Scheme_Name</i>
            Delete the power scheme with the specified <i>Scheme_Name</i>.

   /setactive <i>Scheme_Name</i>
   /s <i>Scheme_Name</i>
            Make the specified power scheme active on the computer.

   /change <i>setting value</i>
   /x <i>setting value</i>
           Modify one of the following settings in the current power scheme:
              /monitor-timeout-ac <i>minutes</i>
              /monitor-timeout-dc <i>minutes</i>
              /disk-timeout-ac <i>minutes</i>
              /disk-timeout-dc <i>minutes</i>
              /standby-timeout-ac <i>minutes</i>
              /standby-timeout-dc <i>minutes</i>
              /hibernate-timeout-ac <i>minutes</i>
              /hibernate-timeout-dc <i>minutes</i>
              /processor-throttle-ac <i>throttle</i>
              /processor-throttle-dc <i>throttle</i>
            AC settings are used when the system is on AC power. DC settings on battery power.
            Setting any value to 0 will set the timeout=Never 
            <i>throttle </i>= NONE CONSTANT, DEGRADE, or ADAPTIVE.

   /export <i>Scheme_Name </i>[/FILE <i>filename</i>]
            Export a power scheme, represented by <i>Scheme_Name</i>, into <i>filename</i>. (default filename: Scheme.pow)

   /import <i>Scheme_Name </i>[/FILE <i>filename</i>]
            Import all power settings from the specified file.
            <i>filename</i> is the path to a file generated with powercfg /export

   /hibernate [on|off]
   /h [on|off]
            Enable or disable the hibernate feature. Hibernate timeout is not supported on all computers.

   /numerical
   /n
            Specify the power scheme to be operated upon with a numerical identifier.
            This switch allows a number to be used in place of the <i>Scheme_Name</i> in the following
            commands: /QUERY, /DELETE, /SETACTIVE, /CHANGE, /EXPORT, and /IMPORT

   /globalpowerflag {ON|OFF} /OPTION: <i>flag</i>
   /g {ON|OFF} /OPTION <i>flag</i>
            Turn one of the following global power flags on or off:
               BatteryIcon    Turn the battery meter icon in the system tray on/off.
               MultiBattery   Turns on/off multiple battery display in system Power Meter.
               ResumePassword Prompt for password on resuming the system.
               WakeOnRing     Turn on/off wake on ring support.
               VideoDim       Turn on/off support for dimming video display on battery power.
                                         
   /availablesleepstates
   /a
            Report the sleep states available on the computer.
            Will also attempt to report reasons why sleep states are unavailable.

   /batteryalarm {LOW|CRITICAL} [settings]
   /b {LOW|CRITICAL} [settings]
            Configure the battery alarm.
            Settings:
               /activate &lt;on|off&gt;
                   Enable or disable the alarm.
               /level &lt;percentage (0 – 100)&gt;
                   The alarm will be activated when the power level reaches this percentage.
               /text &lt;on|off&gt;
                   Turns the text notification on or off.
               /sound &lt;on|off&gt;
                   Turns the audible notification on or off.
               /action &lt;none|shutdown|hibernate|standby&gt;
                   Specifies the action to take when this alarm goes off.
                   Not all actions are always available.
               /forceaction &lt;on|off&gt;
                   Force stand by or shutdown even if a program stops responding.
               /program &lt;on|off&gt;
                   Specifies a program to run.  schtasks.exe /change can be used to configure the program.
                          
   /devicequery <i>query_flags</i>
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

   /deviceEnableWake <i>devicename</i>
            Enable the device to wake the computer from a sleep state.
      
   /deviceDisableWake <i>devicename</i>
            Disable the device from waking the computer from a sleep state.

   /help
   /?
            Display help
</pre>
<p>Power Schemes are configured on a per-user basis and (under Windows XP) PowerCfg requires workstation Administrator or Power User rights. <br>
Alternatively grant rights to the following registry keys (from <a href="http://blogs.msdn.com/b/aaron_margosis/archive/2005/02/09/370263.aspx">Aaron Margosis</a>): <span class="code"><br>
HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Controls Folder\PowerCfg\GlobalPowerPolicy<br>
HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Controls Folder\PowerCfg\PowerPolicies<br>
KEY_USERS\.DEFAULT\Control Panel\PowerCfg</span></p>
<p>The most common cause of problems with power saving/hibernation is an incompatible device driver, diagnose this by disabling each device in turn (with <span class="code">/deviceDisableWake</span>) </p>
<p>When activating Power Saving across an organisation, it is important to ensure that software updates (security patches and antivirus) are not disrupted.<br>
<a href="http://technet.microsoft.com/en-us/windowsserver/bb332157.aspx">WSUS</a> can be configured to install updates when workstations are available and <a href="schtasks.html">Scheduled Tasks</a> can be set to Wake the machine when needed. </p>
<p><b>Examples</b></p>
<p class="code">Powercfg /devicequery wake_armed<br>
Powercfg /h on<br>
Powercfg /deviceEnableWake "Microsoft USB IntelliMouse Explorer"<br>
<br>
Powercfg /CREATE SS64 <br>
Powercfg /CHANGE SS64 /monitor-timeout-ac 15<br>
Powercfg /CHANGE SS64 /disk-timeout-ac 30<br>
Powercfg /CHANGE SS64 /standby-timeout-ac 60<br>
Powercfg /CHANGE SS64 /hibernate-timeout-ac 0<br>
Powercfg /SETACTIVE SS64 </p>
<p> <span class="quote"><i>“The fact that you have to choose between nine different ways of turning off your computer... produces just a little bit of unhappiness every time” - <a href="http://www.joelonsoftware.com/items/2006/11/21.html">Joel on Software</a></i></span> <br>
<br>
<b> Related:</b></p>
<p><a href="powercfg.html">PowerCfg</a> for  Vista/Windows7/Server 2008<br>
<a href="https://support.microsoft.com/kb/915160">Q915160</a> - Create a Group Policy object for power schemes.<br>
<a href="https://support.microsoft.com/kb/913622">Q913622</a> - Power scheme options are unavailable (XP)<br>
<a href="https://support.microsoft.com/kb/324347">Q324347</a> - How to use Powercfg.exe in Windows Server 2003<br>
<a href="http://ask.metafilter.com/189659/Why-does-powercfg-not-do-what-I-want-in-Windows-7#2740762">Configure ' Sleep' key</a> - for XP
<br>
<a href="http://www.energystar.gov/index.cfm?c=power_mgt.pr_power_mgt_comm_packages">3rd party Power Management tools</a> - EnergyStar.gov</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="powercfg-xp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

