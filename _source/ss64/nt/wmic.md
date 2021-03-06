---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WMIC.exe</h1> 
<p> Windows Management Instrumentation Command. <br>
Read a huge range of information about local or remote computers. Also provides a way to make configuration changes to multiple remote machines. WMIC is available on Vista/Windows 7, Windows XP Professional, but not Windows XP Home.</p>
<pre>Syntax
   Retrieve information about <i>&lt;Alias&gt;</i>:
      WMIC [<a href="wmicglobal.html"><i>global_switches</i></a>] [<a href="wmicglobal.html">/locale</a>:ms_409] &lt;<i>alias</i>&gt; [<i><a href="#alias_options">options</a></i>] [<a href="#format_specifiers">format</a>]

   Interactive mode:
      WMIC

Aliases:
 ALIAS               - Access local system aliases [CALL]

 BASEBOARD           - Base board management (motherboard or system board) 
 BIOS                - BIOS management (Basic input/output services) 
 BOOTCONFIG          - Boot configuration

 CDROM               - CD-ROM
 COMPUTERSYSTEM      - Computer system [CALL/SET]
 CPU                 - CPU
 CSPRODUCT           - Computer system product information from SMBIOS. 

 DATAFILE            - DataFiles [CALL]
 DCOMAPP             - DCOM Applications.
 DESKTOP             - User's Desktop
 DESKTOPMONITOR      - Desktop Monitor
 DEVICEMEMORYADDRESS - Device memory addresses
 DISKDRIVE           - Physical disk drive
 DISKQUOTA           - Disk space usage for NTFS volumes.[SET]
 DMACHANNEL          - Direct memory access (DMA) channel

 ENVIRONMENT         - System environment settings [SET]
 FSDIR               - Filesystem directory entry [CALL]

 GROUP               - Group account [CALL]

 IDECONTROLLER       - IDE Controller
 IRQ                 - Interrupt request line

 JOB                 - Jobs scheduled using the schedule service.[CALL]

 LOADORDER           - System services that define execution dependencies. 
 LOGICALDISK         - Local storage devices [CALL/SET]
 LOGON               - LOGON Sessions.

 MEMCACHE            - Cache memory
 MEMLOGICAL          - System memory, layout and availability
 MEMPHYSICAL         - Physical memory management

 NETCLIENT           - Network Client management.
 NETLOGIN            - Network login information for a particular user. 
 NETPROTOCOL         - Protocols (and their network characteristics).
 NETUSE              - Active network connection.
 NIC                 - Network Interface Controller (NIC)
 NICCONFIG           - Network adapter. [CALL] 
 NTDOMAIN            - NT Domain. [SET]  
 NTEVENT             - NT Event Log.  
 NTEVENTLOG          - NT eventlog file [CALL/SET]

 ONBOARDDEVICE       - Common adapter devices built into the motherboard.
 OS                  - Operating System/s [CALL/SET]

 PAGEFILE            - Virtual memory file swapping
 PAGEFILESET         - Page file settings [SET]
 PARTITION           - Partitioned areas of a physical disk.
 PORT                - I/O ports
 PORTCONNECTOR       - Physical connection ports
 PRINTER             - Printer device [CALL/SET]
 PRINTERCONFIG       - Printer device configuration  
 PRINTJOB            - Print job [CALL]
 PROCESS             - Processes [CALL]*
 PRODUCT             - Windows Installer [CALL]

 QFE                 - Quick Fix Engineering (patches)
 QUOTASETTING        - Setting information for disk quotas on a volume. [SET]

 REGISTRY            - Computer system registry [SET]

 SCSICONTROLLER      - SCSI Controller [CALL]
 SERVER              - Server information 
 SERVICE             - Service application [CALL]
 SHARE               - Shared resourcees [CALL]
 SOFTWAREELEMENT     - Elements of a software product*
 SOFTWAREFEATURE     - Subsets of SoftwareElement. [CALL]*
 SOUNDDEV            - Sound Devices 
 STARTUP             - Commands that run automatically when users logon
 SYSACCOUNT          - System account  
 SYSDRIVER           - System driver for a base service. [CALL]
 SYSTEMENCLOSURE     - Physical system enclosure
 SYSTEMSLOT          - Physical connection points including ports,
                       slots and peripherals, and proprietary connections points.

 TAPEDRIVE           - Tape drives  
 TEMPERATURE         - Temperature sensor (electronic thermometer).
 TIMEZONE            - Time zone data 

 UPS                 - Uninterruptible power supply (UPS) 
 USERACCOUNT         - User accounts [CALL/SET]

 VOLTAGE             - Voltage sensor (electronic voltmeter) data
 VOLUME              - Local storage volume [CALL/SET]
 VOLUMEQUOTASETTING  - Associates the disk quota setting with a specific disk volume. [SET]

 WMISET              - WMI service operational parameters [SET]

New aliases in Windows 2003: 
 MEMORYCHIP          - Memory chip information.
 RDACCOUNT           - Remote Desktop connection permission [CALL]
 RDNIC               - Remote Desktop connection on a specific network adapter [CALL/SET]
 RDPERMISSIONS       - Permissions to a specific Remote Desktop connection [CALL]
 RDTOGGLE            - Turn Remote Desktop listener on or off remotely[CALL]
 RECOVEROS           - Blue Screen Information [SET]
 SHADOWCOPY          - Shadow copy management [CALL]
 SHADOWSTORAGE       - Shadow copy storage areas [CALL/SET]
 VOLUMEUSERQUOTA     - Per user storage volume quotas  [SET]
</pre>
<p><span class="code"><b>Options</b></span><b><a id="alias_options"></a></b>  </p>
<p> By default an alias will return a standard LIST of information, you can also choose to GET one or more specific properties.</p>
<p>Configuration changes can be made, where indicated above with: [CALL or SET ]</p>
<p>The CREATE and DELETE options allow you to change the WMI schema itself.</p>
<pre>   <i>alias</i> 
   <i>alias</i> <u>LIST</u> [BRIEF | <u>FULL</u> | INSTANCE | STATUS |SYSTEM | WRITEABLE]
                [/TRANSLATE:BasicXml<i>|</i>NoComma ]
                   [/EVERY:<i>no_secs</i>] [/FORMAT:<i>format</i>]
   <i>alias</i> GET [<i>property list</i>]
                [/VALUE ] [/<u>ALL</u> ] [/TRANSLATE:BasicXml<i>|</i>NoComma<i> </i>]
                   [/EVERY:<i>no_secs</i>] [/FORMAT:<i>format</i>]
   <i>alias</i> CALL <i>method_name</i> [<i>parameters</i>]
   <i>alias</i> SET [<i>assignments</i>]
   <i>alias</i> CREATE 
   <i>alias</i> DELETE
   <i>alias</i> ASSOC [/RESULTCLASS:<i>classname</i>] [/RESULTROLE:<i>rolename</i>][/ASSOCCLASS:<i>assocclass</i>]

For more help
   WMIC /<i>alias</i> /?
   WMIC /<i>alias option</i> /?
   e.g.
   WMIC /BIOS /CALL /?
   WMIC /MEMLOGICAL /SET /?</pre>
<p>The order of the /FORMAT and /TRANSLATE switches is significant: if /TRANSLATE follows /FORMAT, the output is formatted first and then translated. </p>
<h2>Where</h2>
<blockquote>
<p>The options above can  be extended with a WHERE clause:</p>
<p><span class="code">Where <i>item</i>='<i>string value</i>' </span># Test if Equal<br>
<span class="code">Where <i>item</i>!='<i>string value</i>' </span>#
NOT EQUAL </p>
<p>Use single quotes to delimit spaces or special characters, do not add spaces to either side of the<span class="code"> = </span>or<span class="code"> != </span><br>
See further examples below.</p>
</blockquote>
<pre><b>Format</b><a id="format_specifiers"></a>:</pre>
<p>Format defines the layout of the information, XML output is automatically formatted using a default style sheet, while other formats (HTML, Table, MOF, Raw XML etc) can be  specified  using <span class="code"><a href="wmicstylesheets.html">/FORMAT: <i>stylesheet_name</i></a></span></p>
<p>Stylesheets supplied with WMIC: </p>
<pre>    csv.xsl, hform.xsl, htable-sortby.xsl, htable.xsl<br>    texttable.xsl, textvaluelist.xsl, xml.xsl
</pre>
<p>All output files are unicode text (convert to ASCII with <a href="type.html">TYPE</a>)  
Tab Separated Values (.tsv) can be opened in excel </p>
<p>  The PROCESS alias can be used to start a new installation process, if doing this across the network, place the installer files on a share with permissions EVERYONE : Read Only. This is because network credentials will be dropped when jumping from one remote machine to another (unless you have kerberos configured).</p>
<h2>Notes</h2>
<blockquote>
<p>To run WMIC requires administrator rights.</p>
<p>The last element returned by WMIC is  a single <span class="code">&lt;CR&gt;</span> character (an empty line), when running WMIC in a FOR loop you might need to <a href="http://stackoverflow.com/questions/8015489/why-is-the-for-f-loop-in-this-batch-script-evaluating-a-blank-line">remove</a> this, particularly if <a href="delayedexpansion.html">delayed expansion</a> is involved.</p>
<p>The number of WMI properties that can be monitored (and the number of WMI providers) has increased with every new version of Windows.</p>
<p>When you type WMIC for the first time  all the aliases are compiled. The second, and subsequent times you run WMIC, it will start  immediately. </p>
<p>Running WMIC within a batch file it can sometimes hang, possible workarounds for this:<br>
<span class="code">START "" /W CMD /C WMIC <i>options</i>...<br>
WMIC <i>options</i>... &lt;NUL</span></p>
<p> The WMI information  for installed software packages (PACKAGE and SOFTWAREFEATURE) is often incomplete  and inconsistent for a variety of historical reasons. A more reliable method is to retrieve a list of installed programs directly
from the Add/Remove list in the registry, with a WSH script like <a href="installed.txt">this</a> from Torgeir Bakken.</p>
</blockquote>
<p><b>Examples</b></p>
<pre>WMIC <b>OS</b> 

WMIC <b>OS</b> LIST BRIEF

WMIC <b>OS</b> GET csname, locale, bootdevice

WMIC <b>OS</b> GET osarchitecture /value

WMIC <b>OS</b> GET localdatetime

WMIC <b>LOGICALDISK</b> where drivetype!=4 get deviceid, description

WMIC <b>LOGICALDISK</b> where description='Local Fixed Disk' get deviceid, volumename

WMIC <b>NTEVENT</b> where LogFile='system'

WMIC <b>NTEVENT</b> where "LogFile='system' and Type&gt;'0'" 

WMIC <b>SERVICE</b> where (state=”running”) GET caption, name, state &gt; services.tsv

WMIC <b>SERVICE</b> where caption='TELNET' CALL STARTSERVICE

WMIC <b>PRINTER</b> LIST STATUS

WMIC <b>PRINTER</b> where PortName="LPT1:" GET PortName, Name, ShareName
 
WMIC <a href="wmicglobal.html">/INTERACTIVE</a>:ON <b>PRINTER</b> where PortName="LPT1:" DELETE

WMIC <b>PROCESS</b> where name='evil.exe' delete

WMIC <a href="wmicglobal.html">/output</a>:"%computername%.txt" <b>MEMORYCHIP</b> where "memorytype=17" get Capacity

WMIC <a href="wmicglobal.html">/node</a>:remote_computer <b>PROCESS</b> call create <b>"</b>netstat.exe -ano &gt; C:\output.txt<b>"</b>

WMIC <a href="wmicglobal.html">/node</a>:@workstns.txt <a href="wmicglobal.html">/failfast</a>:on <b>PROCESS</b> call create <b>"</b>\\server\share\installer.cmd<b>"</b>

Interactive mode:
<span class="prompt">C:&gt;</span> WMIC
<span class="prompt"></span><span class="prompt">wmic:root\cli&gt;</span><b> OS</b> get csname
<span class="prompt">wmic:root\cli&gt; </span>quit</pre>
<p><br>
<br>
<i class="quote">“Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will” ~ Jawaharial Nehru</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="systeminfo.html">SYSTEMINFO</a> - List system configuration<br>
<a href="http://isc.sans.edu/diary.html?storyid=2376">The Grammar of WMIC</a> - ISC<br>
<a href="http://www.microsoft.com/en-us/download/details.aspx?id=7684">WMI Diagnosis Utility</a> - Microsoft<br>
<a href="../ps/get-wmiobject.html">Get-WMIobject</a> - Get WMI class information (Powershell)<br>
MOF (Managed Object Format) - A language that describes management information.<br>
<a href="https://support.microsoft.com/kb/824223">Q824223</a> - WMIC command runs slowly with /FAILFAST switch.<br>
<a href="https://support.microsoft.com/kb/875605">Q875605 </a>- Troubleshoot WMI-related issues<br>
<a href="http://support.microsoft.com/servicedesks/webcasts/wc072402/listofsampleusage.asp">Sample commands</a> - Windows 2003<br>
<a href="http://msdn.microsoft.com/en-us/library/Aa394572">MSDN full WMI reference</a> - Classes, providers etc</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

