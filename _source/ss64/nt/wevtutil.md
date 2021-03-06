---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WEVTUTIL (Vista and above) </h1>
<p> Retrieve information about event logs and publishers. Archive logs in a self-contained format, Enumerate the available logs, Install and uninstall event manifests,  run queries,   
Exports events (from an event log, from a log file, or using a structured query) to a specified file,
Clear event logs.
</p><pre>Syntax
      wevtutil [{al | archive-log} <i>Logpath</i> [/l:<i>Locale</i>]]
        [{cl | clear-log} <i>Logname</i> [/bu:<i>Backup</i>]] [/r:<i>Remote</i>] [/u:<i>Username</i>] [/p:<i>Password</i>] [/a:&lt;Auth&gt;] [/uni:&lt;Unicode&gt;]
          [{el | enum-logs}] [{gl | get-log} <i>Logname</i> [/f:<i>Format</i>]]
             [{epl | export-log} <i>Path</i> <i>Exportfile</i> [/lf:<i>Logfile</i>] [/sq:<i>Structquery</i>] [/q:<i>Query</i>] [/ow:<i>Overwrite</i>]]
                [{ep | enum-publishers}]
                   [{gli | get-loginfo} <i>Logname</i> [/lf:<i>Logfile</i>]]
                      [{gp | get-publisher} <i>Publishername</i> [/ge:<i>Metadata</i>] [/gm:<i>Message</i>] [/f:<i>Format</i>]] [{im | install-manifest} <i>Manifest</i>]
                         [{qe | query-events} <i>Path </i>[/lf:<i>Logfile</i>] [/sq:<i>Structquery</i>] [/q:<i>Query</i>] [/bm:<i>Bookmark</i>]
                                  [/sbm:<i>Savebm</i>] [/rd:<i>Direction</i>] [/f:<i>Format</i>] [/l:<i>Locale</i>] [/c:<i>Count</i>] [/e:<i>Element</i>]]
                            [{sl | set-log} <i>Logname</i> [/e:<i>Enabled</i>] [/i:<i>Isolation</i>] [/lfn:<i>Logpath</i>] [/rt:<i>Retention</i>]
                                     [/ab:<i>Auto</i>] [/ms:<i>Size</i>] [/l:<i>Level</i>] [/k:<i>Keywords</i>] [/ca:<i>Channel</i>] [/c:<i>Config</i>]]
                               [{um | uninstall-manifest} <i>Manifest</i>]

Key
   /f:<i>Format</i>     The output format, either XML or text format. If &lt;Format&gt; is XML,
                 the output is displayed in XML format. If &lt;Format&gt; is Text, the output is
                 displayed without XML tags. The default is Text.
   /e:<i>Enabled</i>    Enable or disable a log. <i>Enabled</i> can be true or false. 
   /i:<i>Isolation</i>  Set the log isolation mode. <i>Isolation</i> can be system, application or custom.
                 The isolation mode of a log determines whether a log shares a session with other
                 logs in the same isolation class. If you specify system isolation, the target log
                 will share at least write permissions with the System log. If you specify application
                 isolation, the target log will share at least write permissions with the Application log.
                 If you specify custom isolation, you must also provide a security descriptor
                 by using the /ca option.
   /lfn:<i>Logpath  </i>Define the log file name. <i>Logpath</i> is a full path to the file where the Event
                 Log service stores events for this log. 
   /rt:<i>Retention</i> Set the log retention mode. <i>Retention</i> can be true or false.
                 The log retention mode determines the behavior of the Event Log service when a log
                 reaches its maximum size. If an event log reaches its maximum size and the log retention
                 mode is true, existing events are retained and incoming events are discarded.
                 If the log retention mode is false, incoming events overwrite the oldest events in the log. 
   /ab:<i>Auto</i>      The log auto-backup policy. <i>Auto</i> can be true or false. If this value is true,
                 the log will be backed up automatically when it reaches the maximum size.
                 If this value is true, the retention (specified with the /rt option)
                 must also be set to true.
   /ms:<i>Size</i>      Set the maximum size of the log in bytes.
                 The minimum log size is 1048576 bytes (1024KB) and log files are always multiples of 64KB,
                 so the value you enter will be rounded off accordingly. 
   /l:<i>Level</i>      Define the level filter of the log. <i>Level</i> can be any valid level value.
                 This option is only applicable to logs with a dedicated session.
                 You can remove a level filter by setting <i>Level</i> to 0. 
   /k:<i>Keywords</i>   Add a keyword filter to the log. <i>Keywords</i> can be any valid 64 bit keyword mask.
                 This option is only applicable to logs with a dedicated session. 
   /ca:<i>Channel   </i>Set the access permission for an event log. <i>Channel</i> is a security descriptor
                 that uses the Security Descriptor Definition Language (SDDL).
   /c:<i>Config</i>     The path to a configuration file.
                 This option will cause log properties to be read from the configuration file
                 defined in <i>Config</i>. If you use this option, you must not specify a &lt;Logname&gt; parameter.
                 The log name will be read from the configuration file. 
   /ge:<i>Metadata</i>  Get metadata information for events that can be raised by this publisher.
                 <i>Metadata</i> can be true or false. 
   /gm:<i>Message</i>   Display the actual message instead of the numeric message ID.
                 <i>Message</i> can be true or false. 
   /lf:<i>Logfile</i>   Read the events from a log or from a log file.
                 <i>Logfile</i> can be true or false. If true, the parameter to the command is the path
                 to a log file. 
   /sq:<i>Structquery</i> Specifies that events should be obtained with a structured query. 
                 <i>Structquery</i> can be true or false. If true, &lt;Path&gt; is the path to a file that
                 contains a structured query. 
   /q:<i>Query</i>      Define the XPath query to filter the events that are read or exported.
                 If this option is not specified, all events will be returned or exported.
                 This option is not available when /sq is true. 
   /bm:<i>Bookmark</i>  The path to a file that contains a bookmark from a previous query. 
   /sbm:<i>Savebm</i>   The path to a file that is used to save a bookmark of this query.
                 The file name extension should be .xml. 
   /rd:<i>Direction</i> The direction in which events are read. <i>Direction</i> can be true or false.
                 If true, the most recent events are returned first. 
   /l:<i>Locale</i>     Define a locale string that is used to print event text in a specific locale.
                 Only available when printing events in text format using the /f option. 
   /c:<i>Count</i>      Sets the maximum number of events to read. 
   /e:<i>Element</i>    Includes a root element when displaying events in XML. &lt;Element&gt; is the string
                 that you want within the root element. For example, /e:root would result
                 in XML that contains the root element pair &lt;root&gt;&lt;/root&gt;. 
   /ow:<i>Overwrite</i> Specifies that the export file should be overwritten. <i>Overwrite</i> can
                 be true or false. If true, and the export file specified in <i>Exportfile</i> already exists,
                 it will be overwritten without confirmation. 
   /bu:<i>Backup</i>    The path to a file where the cleared events will be stored.
                 Include the .evtx extension in the name of the backup file. 
   /r:<i>Remote</i>     Run the command on a remote computer. <i>Remote</i> is the name of the
                 remote computer. The im and um parameters do not support remote operation. 
   /u:<i>Username</i>   A different user to log on to a remote computer. &lt;Username&gt; is a
                 user name in the form domain\user or user. This option is only applicable when
                 the /r option is specified. 
   /p:<i>Password</i>   The password for the user. If the /u option is used and
                 this option is not specified or <i>Password</i> is "*", the user will be prompted to enter
                 a password. This option is only applicable when the /u option is specified. 
   /a:<i>Auth</i>       The authentication type for connecting to a remote computer.
                 <i>Auth</i> can be Default, <u>Negotiate</u>, Kerberos or NTLM. The default is Negotiate. 
   /uni:<i>Unicode</i>  Displays the output in Unicode. <i>Unicode</i> can be true or false.
                 If <i>Unicode</i> is true then the output is in Unicode.
</pre>
<p>The primary focus of WEVTUTIL is the configuration and setup of event logs,  to retrieve event log data  the PowerShell cmdlet <a href="../ps/get-winevent.html">Get-WinEvent</a> is easier to use and more flexible.</p>
<p><b>Examples</b></p>
<p>Clear all the events from the Application log:<br>
<span class="code">C:\&gt; WEVTUtil.exe clear-log Application</span></p>
<p>Export events from the System log to C:\backup\ss64.evtx<br>
<span class="code">C:\&gt; WEVTUtil export-log System C:\backup\ss64.evtx</span></p>
<p>List the event publishers on the current computer.<br>
<span class="code">C:\&gt; WEVTUtil enum-publishers</span></p>
<p>Uninstall publishers and logs from the SS64.man manifest file:<br>
<span class="code">C:\&gt; WEVTUtil uninstall-manifest SS64.man</span></p>
<p>Find the last 20 startup events in the System log:<br>
</p>
<pre>C:\&gt; WEVTUtil query-events System /count:20 /rd:true /format:text /q:"Event[System[(EventID=12)]]" 
</pre>
<p class="quote"><i>"The Statesman who yields to war fever must realize that once the signal is given, he is no longer the master of policy but the slave of unforeseeable and uncontrollable events" ~ Sir Winston Spencer Churchill</i></p>
<p><b>Related:<br>
<br>
</b><a href="eventcreate.html">EVENTCREATE</a> - Add a message to the Windows event log<br>
<a href="sysmon.html">SYSMON</a> - Monitor and log system activity to the Windows event log<br>
PowerShell: <a href="../ps/get-winevent.html">Get-WinEvent</a> -  Get event log data (Vista+)<br>
Powershell: <a href="../ps/get-eventlog.html">Get-Eventlog</a> - Get event log data (XP/2003)<br>
<a href="../ps/syntax-eventids.html">List of Windows Event IDs.</a><br>
<a href="wmic.html">WMIC NTEVENTLOG</a> - WMI access to the event log</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wevtutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
