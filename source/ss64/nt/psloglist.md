---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsLogList (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Event log records</p>
<pre>Syntax
      psloglist [- ] [\\<i>computer</i>[,<i>computer</i>[,...] | @<i>file</i>
         [-u <i>user</i> [-p <i>passwd</i>]]] [-s [-t <i>delim</i>]]
            [-m #|-n #|-h #|-d #|-w]
               [-c][-x][-r][-a mm/dd/yy][-b mm/dd/yy]
                  [-f <i>filter</i>] [-i <i>ID</i>[,<i>ID</i>[,...] | -e ID[,ID[,...]]]
                     [-o <i>event source</i>[,<i>event source</i>][,..]]]
                        [-q <i>event source</i>[,<i>event source</i>][,..]]]
                           [-l <i>event_log_file</i>] &lt;<i>eventlog</i>&gt;

Options:

   computer   The computer on which the log resides. Default=local system 

   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   @file      Execute the command on each of the computers listed in the file.

   -a         Dump records timestamped after specified date.

   -b         Dump records timestamped before specified date.

   -c         Clear the event log after displaying.

   -d #       Only display records from previous # days.

   -e <i>ID</i>      Exclude events with the specified ID or IDs (up to 10).

   -f <i>filter</i>  Filter event types with filter string (e.g. "-f w" to filter warnings).

   -h #       Only display records from previous # hours.

   -i <i>ID</i>      Show only events with the specified <i>ID</i> or <i>ID</i>s (up to 10).

   -l <i>event_log_file</i>  Dump records from the specified event log file.

   -m #       Only display records from previous <i>#</i> minutes.

   -n #       Only display # number of most recent entries.

   -o <i>event source</i>
              Show only records from the specified event source (e.g. \"-o cdrom\").

   -q <i>event source</i>
              Omit records from the specified event source or sources (e.g. \"-q cdrom\").

   -r         Dump log from least recent to most recent.

   -s         Print Event Log records one-per-line, with comma delimited fields.
              This format is convenient for text searches, e.g. psloglist | findstr /i text
              and for importing the output into a spreadsheet.

   -t <i>delim</i>   The default delimeter is a comma, but can be overriden with the specified character.

   -w         Wait for new events, dumping them as they generate (local system only).

   -x         Dump extended data.

   <i>eventlog</i>   application, system or security, only the first few letters need be used.
              default=system log.

   -accepteula Suppress the display of the license dialog.</pre>
<p>If your current  security credentials would not permit access to the Event Log, specify a different username ( -u user ).</p>
<p>When launched for the first time, PsLogList will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsLogList\EulaAccepted=0x01</span></p>
<p><b>Examples:</b><br>
<br>List everything in the application event log on \\workstation64 from the last 24 hours:</p>
<p class="code">psloglist \\workstation64 -h 24 application</p>
<p class="quote"><i>“Events, dear boy, events” ~ British Prime Minister Harold Macmillan (answer to 'what is the biggest problem in politics'?)</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
elogdump - Resource Kit event log dump (local machine only) <br>
Equivalent  bash command (Linux):  Logs are in plain ascii text </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

