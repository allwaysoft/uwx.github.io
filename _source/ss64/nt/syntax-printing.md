---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>An overview of Windows Network Printing</h1>
<h2>Print Drivers and the Print$ share </h2>
<blockquote><p>Every Print Server has a hidden file share (called Print$) that is used to deliver print Drivers to Windows clients. <br>
<br>When a PC connects to a  Print Share the drivers on the server and client are compared, if the client is missing the driver; or has an older version; then it will be automatically downloaded.<br>
<br>
The achilles heel of this system is version control: consider that you have two similar printers on two different print servers. One server has a driver version 26.232 the other has version 26.234, in theory the client will download the latest driver and use it for both printers, in practice the results are less predictable - the worst case being a driver download every time the user prints.<br>
<br>Whenever a new driver is installed on a <b>print server</b>, you can force all users who have a connection to that print queue, to download the updated driver. 
This is done by changing the Print <i>Share</i> name on the server [Press Apply] Then change back to the original <i>Share</i>  Name [Press Apply again]. <br>
E.g. <br>
Change the printer <i>MyPrintShare</i> to <i>MyPrintShare</i>X [Apply] then change  back to <i>MyPrintShare</i>. </p>
<p>If you can arrange that each user connects to only one print server, management becomes much easier. If you have multiple print servers, consider duplicating queues so that no user  has to access more than one print server. </p>
</blockquote>
<h2>Printer Migration - bulk changes</h2>
<blockquote>
<p>The Microsoft Print Migrator has now <a href="http://blogs.technet.com/b/askperf/archive/2008/10/17/why-printmig-3-1-is-retired.aspx">been</a> superseded by <a href="printbrm.html">PRINTBRM</a> which can backup and restore  Print Queues.</p>
</blockquote>
<h2>Client Printer connections (Print Map) </h2>
<blockquote>
<p>To update  client printer connections, use <span class="code"><a href="../vb/syntax-qchange.html">qchange</a></span>  this    will not only  change the clients connection to  a different Print Queue but will also also preserve the user's <b>default </b>printer. </p>
<p>List all the print queues currently shared on a server with</p>
<p class="code">net view \\MyServer &gt;file_print_shares.txt</p>
</blockquote>
<h2><i>Printer </i>Name vs <i>Print Share </i>Name</h2>
<blockquote>
<p>Every shared printer has both a Printer name and a Share name - these appear in different places: </p>
<p>Browsing Network Neighborhood (NetBios UNC Name) = <i>ShareName</i><br>
Add Printer Wizard (DNS) = <i>PrinterName</i><br>
Find Printer Wizard (DNS) = <i>PrinterName</i></p>
<p>Active Directory and the Control Panel will display the  <i>PrinterName</i> in most places. </p>
<p>A key difference between these two names is what happens when you rename them: </p>
<p>Changing the <i>ShareName</i> on the server, clients stay connected.</p>
<p>Changing the <i>PrinterName</i> on the server, clients will lose their
connection.
The control panel status will display<span class="code"> "Printer not found on server, unable to connect"</span></p>
<p>For example:</p>
<blockquote>
<p>Create Printer called <b>HP1</b> and share it as <i>Share1</i></p>
<p>Connect a client to the printer</p>
<p>Now turn off the print Share on the server (set to <i>Not Shared</i>) </p>
<p>Create Printer called <b>KYO2</b> and share it as <i>Share1</i>, you might expect the client to now connect to this new queue, but it will still point to the old one (and will fail).</p>
<p>Now Rename HP1 to HPold and rename KYO2 (still shared as <i>Share1</i>) to HP1 <br>
The client will now connect to <i>Share1</i> successfully.</p>
</blockquote></blockquote>
<h2>Naming conventions</h2>
<blockquote>
<p>As you have probably figured by now; it pays to keep things simple and make the printer's SHARE Name and PRINTER Name identical. </p>
<p>I recommend short printer names (8 characters or less) with no spaces, for example a simple naming convention with 2 characters and a number (AA1, ZZ9...) will support 6,760 print queues. This is likely more than you will want to host on a single Print Server. </p>
<p class="code">\\London\RS7</p>
<p> Short Printer Names without spaces are portable and easy to script. If you choose to use long names with spaces, expect that some third party software can have problems.</p>
<p>Over time Teams tend to move around different offices and buildings. Over time Printers tend to also move around, either due to maintenance or to satisfy demand. This means that  'meaningful' printer names such as <i>HPLJ14</i> or <i>FirstFloor21 </i>or <i>FinanceTeam</i> tend to get out-of-date and become unhelpful.</p>
<p>Details  such as the printer model and features (colour/duplex etc) should be placed in the Print Queue DESCRIPTION field.</p>
<p>Filling in the LOCATION field will allow the <i>Find Printer Wizard </i>to display all the relevant printers for a team or site. </p>
<p>Attach a large physical label to the printer with it's share name, this will save on paper, user frustration and helpdesk calls.</p>
</blockquote>
<h2>Deploying Printer Location with Active Directory</h2>
<blockquote>
<p>This feature  helps users to find a printer by storing PC and Printer locations in Active Directory. <br>
For example with 500 printers you might define 10 locations with 50 printers in each. Groups of computers are then allocated to appropriate  Locations, and Windows will  pre-populate the Find Printer Wizard with the 50 nearest printers.</p>
<p>This is a good feature for large organisations following the trend to consolidate multiple print/file servers.</p>
</blockquote>
<h2>Default Printer</h2>
<blockquote>
<p>The default Printer connection is <i>per user</i>, and will travel with roaming profiles. it can be changed with Defptr, <a href="wmic.html">WMIC</a> or <a href="../vb/setdefaultprinter.html">WSH</a>.</p>
<p>If the default printer is  a local printer, then roaming to a different PC without an identical local printer, will change the default to  the next  available printer.</p>
</blockquote>
<h2>Print to File</h2>
<blockquote>
<p>In the Printers folder, click Add Printer.<br>
Click My Computer, and then  Next.<br>
Click "Local printer attached to this computer"<br>
(don’t tick automatically detect) &gt;Next<br>
Click Create a new Port. &gt;Next<br>
When prompted for a local port name, type a path and file name for the file.<br>
Choose the Generic/Text print driver. </p>
</blockquote>
<h2>  Local Printers</h2>
<blockquote>
<p>Any PC with a <i>shared</i> local printer will also setup a Print$ share - acting as a source of driver DLL's for other machines. This presents a possible security risk that needs to be understood and managed. If the printer is never accessed by other machines don’t share the printer.<br>
<br>
Printer connections are normally <i>per user</i>, and roam with roaming profiles. Local shared printers and roaming profiles are generally not a good mix. (They don’t cause problems but do confuse users who roam.) </p>
<p>It is possible to create printer connections <i>per machine</i> with <a href="rundll32.html">rundll32</a> - these will not follow a roaming profile.<br>
<br>
Windows XP Professional will support a maximum of 10 users per Share (This applies to both file and print shares) for more than this you will need a server licence.</p>
</blockquote>
<h2>New features  in Windows 7/Vista  </h2>
<blockquote>
<p>Location-aware printing - mobile computers can automatically switch default printer according to the connected network. </p>
<p>Avalon graphics  provide improved color printing.</p>
<p>The NextGen print spool file  uses human-readable XAML, an XML-based declarative programming language. <br>
This  opens up possibilities such as including multiple documents in a single print job.</p>
</blockquote>
<h2>LPR - Line Printers</h2>
<blockquote>
<p>The Line Printer protocol LPR is a useful method of printing to a character printer, typically used with monospaced fonts for printing over pre-printed stationary such as cheques.<br>
LPR print jobs are sent direct to the printer, this allows the application to manage/send printer control codes, (page feed etc).<br>
LPR can also
be used to send print jobs to a UNIX Print Server.</p>
<p>The "Microsoft TCP/IP Printing service (UNIX)" provides a TCP/IP-based printing service  using the Line Printer protocol. This is not installed by default.<br>
<br>
To create an LPR printer, Select Control Panel - Add Printer - My Computer - Add Port - LPR port.<br>
At the prompt  type the host name or IP Address of the  printer (or remote Unix host).<br>
<br>
Once installed, the LPR protocol will use the  <a href="syntax-services.html">Service</a>: LPDSVC </p>
</blockquote>
<h2>Printer Options</h2>
<blockquote>
<p><i>Priority</i>: The priority sliding bar sets the default priority for documents printed. <br>
A common approach is to create one printer for the majority of users with a default priority of 1 <br>
then create a separate 'high priority' printer that sends output to the same printing device but with a higher priority setting.<br>
<br>
<i>Spool print documents so program finishes printing faster</i><br>
(&amp; Start printing immediately) - preferred option for most applications.<br>
<br>
<i>Print directly to the printer</i> - this sends documents directly to the printer. This gives the fastest time-to-output but you lose the ability
to use the PC while the print job is in progress.<br>
<br>
<i>Print spooled documents first</i> - if you disable this option, high priority jobs will interrupt lower priority jobs that are already printing. (so the pages get mixed up)</p>
</blockquote>
<h2>Print Processor</h2>
<blockquote>
<p>The default Print Processor is WINPRINT.DLL, (this can be replaced for advanced DTP work)<br> This Print Processor supports several data formats:<br>
<br>
<i>Raw</i>: [default] This datatype indicates that the job is in a ready-to-print format in the printing device’s native language. (Good for PostScript printing).<br><br>
 <i>Raw [FF Appended]</i>: As RAW but appends a form-feed character to the end of the print job.<br>
 <br>
 <i>Text</i>: This  indicates a print job that consists of ANSI text. <br><br>
 <i>PSCRIPT</i> (PostScript support for Macintosh clients using non-PostScript printer)<br>
<br>
<i>EMF</i>: A Windows application  will  partially rendered the job and the print driver then completes the rendering process. EMF takes  advantage of print server CPU resources, EMF files sizes are smaller than RAW which reduces network congestion. <br>
(Good formost PCL-based laser printers)</p>
</blockquote>
<h2>Printer Pools</h2>
<blockquote>
<p>A printer pool allows multiple physical printing devices to appear as a single'virtual' printer. When print jobs are sent to a printer pool, Windows routes
the job to the first availabledevice.<br>
<br>In a busy printing environment pooling will allow more efficent and faster printing but does not provide any failure resilience e.g. Windows cannot redirect
a job from a failed port, so when a printer is offline the printer pool will continue to send jobs to that port.<br>
<br>To enable Printer pooling, go to Printer properties - Ports, check the 'Enable printer pooling' tickbox<br>
 Note: it's quite possible to have individual print queues in addition to the printer pool queue.</p>
</blockquote>
<p> <i>Printing requires the Spooler service to be running</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="net_share.html">NET PRINT</a> - View and Delete print jobs<br>
<a href="net_share.html">NET SHARE</a> - Create file share<br>
<a href="../vb/syntax-qchange.html">qchange.vbs</a> - 
Connect to a different Printer Queue.<br>
<a href="prncnfg.html">PRNCNFG</a> - Configure or rename a printer.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
<a href="rmtshare.html">RMTSHARE</a> - List or edit a file share or print share<br>
<a href="rundll32.html">RUNDLL32</a> - Add/remove print <i>connections</i><br>
<a href="share.html">SHARE</a> - List or edit a file share or print share<br>
<a href="wmic.html">WMIC PRINTER</a> - Set printing options through WMI<br>
<a href="http://technet.microsoft.com/en-us/library/cc731058.aspx">Print Management Snap-in</a> - TechNet<br>
<a href="https://support.microsoft.com/kb/234270">Q234270</a> - Group Policies to Control Printers<br>
<a href="https://support.microsoft.com/kb/888744">Q888744</a> - Printer driver  not  updated on the client <br>
Print Notification - this is set under Control Panel, Printers, File, Server Properties, Advanced <br>
Equivalent bash command (Linux): <a href="../bash/printf.html">printf</a> - Format and print data</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-printing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

