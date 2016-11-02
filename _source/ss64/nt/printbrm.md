---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PRINTBRM.exe</h1> 
<p>Print queue Backup/Recovery/Migration.</p>
<pre>Syntax
      PRINTBRM -b -s <i>\\server_name</i> -f <i>file_name</i> <i>options</i>

      PRINTBRM -r -s <i>\\server_name</i> -f <i>file_name</i> <i>options</i>

      PRINTBRM -q <i>options</i>

Key
   -s <i>server_name</i> The unc path to the print server.
   -b             Back up the server to the specified file.
   -r             Restore the configuration in the file to the server.
   -q             Query the server or the backup file.
   -f <i>file_name   </i>The backup file.
   -d <i>directory</i>   Unpack the backup file to the directory (with -r),
                  or repack a backup file from the directory (with -b).
   -o force       Forces overwriting of existing objects.
   -p all         Publish all printers in the directory, or
   -p org         Publish the printers that were originally published.
   -nobin         Omit binary files from the backup.
   -lpr2tcp       Convert LPR ports to standard TCP/IP ports on restore.
   -c <i>file_name</i>   Use the specified configuration file.
   -noacl         Remove ACLs from print queues on restore.
   -?             Help</pre>
<p>PrintBRM is not be included in the Windows <a href="path.html">PATH</a> but will be found at <span class="code">%Windir%\System32\spool\tools\brintbrm.exe</span></p>
<p>In Windows 2008 PrintBRM  replaces the old Win 2003 PrintMig utility, it is backwards compatible with 2003.<br>
in Windows Server 2012 PrintBRM supports both v3 and v4 print drivers and can backup to .CAB files greater than 2 GB .</p>
<p>Get a list of all printer share names for a print server: <span class="code">net view \\printserv1</span></p>
<p>PrintBRM can be run over the network to remote servers, but the Print$ share must exist on both the source and target server and the Remote Registry Service must be running.</p>
<p>If you move printers to a different domain, use the <span class="code">-NoACL</span> parameter  to prevent the restoration of  print queue’s ACLs.</p>
<p>A backup or export operation using PrintBRM produces a compressed file that is used for the restore or import operation. This includes XML files for drivers, forms, port monitors, ports, printers, spooler directories. These details can be edited by using the<span class="code"> -d </span>option to unpack the file to XML, edit the files and then repack into a modified export file.</p>
<p><b>Example</b></p>
<p> Backup your printer queues:</p>
<p class="code">C:\&gt; Printbrm.exe –b –nobin –s \\PrintServer64 –f C:\scripts\backup.printerExport</p>
<p> On the new print server computer, manually install the updated printer drivers. <br>
Create a BrmConfig.xml configuration file to map the old drivers to the new drivers:</p>
<pre>&lt;BrmConfig&gt;
  &lt;PLUGINS&gt;
  &lt;/PLUGINS&gt;

  &lt;LanguageMonitors&gt;
  &lt;/LanguageMonitors&gt;

  &lt;DriverMap&gt;
    &lt;DRV old="OldDriverName1" new="NewDriverName1"/&gt;
    &lt;DRV old="OldDrverName2" new="NewDriverName2"/&gt;
  &lt;/DriverMap&gt;
&lt;/BrmConfig&gt;</pre>
<p>Restore the printers specifying your configuration file using your configuration file:<br>
<span class="code">C:\&gt; PrintBrm.exe –r –c BrmConfig.xml –f D:\scripts\backup.printerExport –o force</span></p>
<p class="quote"><i>“Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down” ~ Oprah Winfrey</i></p>
<p><b>Related:</b></p>
<p><a href="run.html">PrintBRMui.exe</a> - GUI for Printer management<br>
<a href="net_share.html">NET PRINT</a> - View and Delete print jobs<br>
<a href="print.html">PRINT</a> - Print a text file<br>
<a href="../vb/syntax-printsave.html">PrintSave.vbs</a> - Save and Restore Windows Printer Connections<br>
<a href="http://support.microsoft.com/?id=938923">Q938923</a> - Back up and  restore printers from Win Server 2003 to Win Server 2008<br>
Equivalent bash command (Linux):<a href="../bash/printf.html"> printf</a> - Format and print data</p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="printbrm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

