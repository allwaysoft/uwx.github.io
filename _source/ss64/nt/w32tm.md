---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>W32TM.exe</h1>
<p> Time Service Utility.</p>
<pre>Syntax

  Register the time service, and add default config to the registry
      W32TM <b>/register</b>

  Unregister the time service, and remove config from the registry
      W32TM <b>/unregister</b>

  The domain/computers to monitor
      W32TM <b>/monitor</b> [/domain:<i>domain_name</i>] [/computers:<i>name</i>[,<i>name</i>[,<i>name</i>...]]] [/threads:<i>num</i>]

  Convert a Windows NT system time, in (10^-7)s intervals from 0h 1-Jan 1601, into a readable format.
      W32TM <b>/ntte</b> <i>NT_Time_Epoch</i>

  Converts a Network Time Protocol (<a href="http://en.wikipedia.org/wiki/Network_Time_Protocol">NTP</a>) time, in (2^-32)s intervals from 0h 1-Jan 1900, into a readable format
      W32TM <b>/ntpte</b> <i>Network_Time</i>

  Tell a computer that it should resynchronize its clock as soon as possible, discarding all accumulated error stats
      W32TM <b>/resync</b> [/computer:<i>computer</i>] [/nowait] [/rediscover] [/soft]

  Display a strip chart of the offset between this computer and another computer
      W32TM <b>/stripchart</b> /computer:<i>target</i> [/period:<i>refresh</i>] [/dataonly]
              [/samples:<i>count</i>] [/packetinfo] [/ipprotocol:&lt;4|6&gt;

  Adjust the configuration of <i>target
</i>      W32TM <b>/config</b> [/computer:<i>target</i>] [/update] [/manualpeerlist:<i>peers</i>]
              [/syncfromflags:<i>source</i>] [/LocalClockDispersion:<i>seconds</i>]
                 [/reliable:(YES|NO)] [/largephaseoffset:<i>milliseconds</i>]

  Display the current time zone settings.
      W32TM <b>/tz</b>

  Display the values that are associated with a given registry key.
      (default/root key is HKLM\System\CurrentControlSet\Services\W32Time)
      W32TM <b>/dumpreg</b> [/subkey:<i>key</i>] [/computer:<i>target</i>]

  Display a computer's Windows Time service information.
      W32TM <b>/query</b> [/computer:<i>target</i>] {/source | /configuration | /peers | /status} [/verbose]

  Enable or disable a local computer Windows Time service private log.
      W32TM <b>/debug</b> {<b>/disable</b> | {<b>/enable</b> /file:<i>name</i> /size:<i>bytes</i> /entries:<i>value</i> [/truncate]{% raw %}}}{% endraw %}


Options:

   <i>Domain</i>  The domain to monitor. If no domain name is specified, or neither the domain nor
            computers option is specified, the default domain is used.
            This option might be used more than once.

   <i>computers</i> Monitor the given list of computers. Computer names are separated by commas, with
            no spaces. If a name has a prefix of a ‘*’, it is treated as a primary domain
            controller (PDC). You can use this option more than once.

   <i>computer</i> The computer to act upon, by default the local computer.

   <i>threads</i>  The number of computers to analyze simultaneously. 1-50, default=3.

   <i>NT_Time_Epoch</i>
            A hex value representing a 64 bit integer that represents the number of seconds
            elapsed since 1900-01-01 00:00:00 (can be supplied as either Hex or integer)
            In reverse byte order, the first hex byte is the least significant:
            (1900-01-01 00:00:<b>01</b> is encoded as 0x<b>01</b>000000)

   <i>/</i>nowait  Do not wait for the resynchronization to occur; return immediately.
            Otherwise, wait for the resynchronization to complete before returning.

   <i>/</i>rediscover  Redetect the network configuration and rediscover network sources;
            then, resynchronize.

   <i>/</i>soft    This option is only provided for compatibility with older time servers and will
            resynchronize using existing error statistics..

   /period:<i>refresh</i>
            The time between samples, in seconds. The default value is 2 seconds.

   /Dataonly<i> </i>Display only the data, without graphics.

   /samples:<i>count</i>
            Collect <i>count</i> samples; then, stop.
            If a value is not specified, samples will be collected until Ctrl+C is pressed.

   /packetinfo
            Print out NTP packet response message.

   /Ipprotocol 4|6
            Specify the IP protocol to use. Default = use whatever is available.

   /update  Notify the time service that the configuration has changed, causing the changes
            to take effect.

   /manualpeerlist:<i>peers</i>
            Set the manual peer list to <i>peers</i>, which is a space-delimited list of Domain Name
            System (DNS) and/or IP addresses. When you are specifying multiple peers, this option
            must be enclosed in quotation marks (").

   /syncfromflags:<i>source</i>
            Sets what sources the NTP client should synchronize from. <i>source</i> should be a
            comma-separated list of these keywords (not case sensitive):
              MANUAL — Include peers from the manual peer list.
              DOMHIER — Synchronize from a domain controller in the domain hierarchy.
              NO     — Do not synchronize from any server.
              ALL    — Synchronize from both manual and domain peers.

   /LocalClockDispersion:<i>seconds</i>
            Configures the accuracy of the internal clock that W32time will assume when
            it cannot acquire time from its configured sources.

   /reliable:(YES|NO)
            Set whether this computer is a reliable time source. This setting is meaningful only on domain controllers.

   /largephaseoffset:<i>milliseconds</i>
            Sets the time difference between local time and network time that W32time will consider to be a spike. 

   /source  Display the time source.

   /configuration
            Display the configuration of run time and where the setting comes from.
            In verbose mode, display the undefined or unused setting also.

   /peers   Display a list of peers and their status.

   /status  Display Windows Time service status.

   /verbose Set the verbose mode to display more information.

   /disable Disable the private log.

   /enable  Enable the private log.
              file:<i>name</i>   The absolute file name.
              size:<i>bytes</i>  The maximum size for circular logging.
              entries:<i>value</i>  Contains a list of flags, specified by number and separated by commas, that specify
                             the types of information that should be logged. Valid numbers are 0 to 300.
                             A range of numbers is valid, in addition to single numbers, such as 0 through 100,103,106.
                             Value 0-300 is for logging all information.
   /truncate Truncate the file if it exists.

   /?       Display help.</pre>
<p>The W32Time service is not a full-featured <a href="https://en.wikipedia.org/wiki/Network_Time_Protocol">Network Time Protocol</a> (NTP) solution that meets time-sensitive  needs.</p>
<p> By default the Windows Time <a href="syntax-services.html">service</a> (<span class="code">w32time</span>) will synchronize its time once per week.<br>
This can be extended to daily by setting a Scheduled Task to <a href="http://www.pretentiousname.com/timesync/">start the service and run <span class="code">w32tm /resync</span></a>.</p>
<p>The options <span class="code">/debug, /packetinfo</span> and <span class="code">/ipprotocol</span> are available from Windows Vista and above.</p>
<p><span class="code">/stripchart  /packetinfo</span> - will output three timestamps - The first hex number is  byte order reversed <abbr title="Network Time Protocol">NTP</abbr>  date, followed by the ANSI date (number of days since 1st Jan 1601) followed by the date/time in readable/local format.</p>
<p>The option <span class="code">/ntpte  </span> - will output three timestamps - The first hex number is  an <abbr title="NT Time Epoch / Win32 FILETIME">NTTE</abbr> date (as also understood by <span class="code">w32tm.exe /ntte</span> ), followed by the ANSI date (number of days since 1st Jan 1601) followed by the date/time in readable/local format.</p>
<p>The option <span class="code">/ntte </span> - will output two timestamps - first the ANSI date (number of days since 1st Jan 1601) followed by the date/time in readable/local format.</p>
<p>A computer that is a member of a domain is configured by default to synchronize from the domain hierarchy, manually-specified synchronization is most useful for the forest root of the domain or for computers that are not joined to a domain. </p>
<p>Public NTP servers:</p>
<ul>
<li> <a href="http://www.nist.gov/pml/div688/grp40/its.cfm">NIST Internet Time Service</a> <span class="code">time.nist.gov</span> - part of the NIST Physical Measurement Laboratory, maintains the standard for frequency and time interval for the United States.</li>
<li><a href="http://www.pool.ntp.org/en/use.html">NTP Pool project</a> <span class="code">pool.ntp.org</span> (or "0.pool.ntp.org 1.pool.ntp.org 2.pool.ntp.org 3.pool.ntp.org")  a big virtual cluster of timeservers.</li>
<li><span class="code">time.windows.com</span> - Microsoft's own time server (not particularly reliable).</li>
</ul>
<p><b>Examples:</b><br>
<br>
Set the local Windows Time client to point to two different time servers, one named <span class="code">time.nist.gov</span> and another named <span class="code">pool.ntp.org</span></p>
<pre class="code">W32TM.exe /config /manualpeerlist:"time.nist.gov pool.ntp.org" /syncfromflags:manual /update</pre>
<p>Check the Windows Time client configuration from a client computer running Windows 7 that has a host name of PC64</p>
<p><span class="code">W32TM.exe /query /computer:PC64 /configuration</span></p>
<p>Convert an <abbr title="NT Time Epoch / Win32 FILETIME">NTTE</abbr> formatted date into a readable format, if using hex, prefix with <b>0x</b>:</p>
<p><span class="code">W32TM.exe /ntte 0x01cf070000000000</span></p>
<p><span class="code">W32TM.exe /ntte 130330610798428160</span></p>
<p>Convert an <abbr title="Network Time Protocol">NTP</abbr> formatted date into a readable format, if using hex, prefix with <b>0x</b>:</p>
<p><span class="code">W32TM.exe /ntpte 0x72386aa6917c63d8</span><span class="code"><br>
<br>
<i class="quote">“We have a normal. As you move outside of your comfort zone, what was once the unknown and frightening becomes your new normal” ~Robin S. Sharma</i><br>
<br>
</span><b>Related:</b></p>
<p><a href="tzutil.html">TZUTIL</a> - Time Zone Utility<br>
<a href="time.html">TIME</a> - Display or set the system time<br>
<a href="../convert.html">Convert Hex</a> - Convert between Hex and Integer numbers<br>
<a href="http://blogs.msdn.com/b/oldnewthing/archive/2003/09/05/54806.aspx">Old New Thing</a> - How to recognize date/time stamps (<span class="code">0x01</span>=NTTE/Win32 FILETIME, <span class="code">0x08</span>=CLR System.DateTime)<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="w32tm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

