---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Out-Host</h1> 
<p>Send output to the host (typically the console screen).</p>
<pre>Syntax
      Out-Host [-inputObject <i>psobject</i>] [-paging] [<i>CommonParameters</i>]

Key
   -inputObject <i>psobject</i>
       The object(s) to be written to the console. {may be piped}
       A command, expression or variabale that contains the objects.

   -paging 
       Display one page of output at a time, and wait for user input before 
       displaying more. By default, all output is displayed on a single page. 
       The page size is determined by the characteristics of the host.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Out-GridView:<span class="code"> <b>oh</b></span></p>
<p>Out-Host  sends output to the  PowerShell host for display.</p>
<p>The final part of displaying PowerShell output is a hidden background call to an Output cmdlet, by default as the last part of the execution process PowerShell calls the default output cmdlet which is typically Out-Host.</p>
<p><b>Examples</b></p>
<p>Display system processes one page at a time:</p>
<p><span class="code">PS C:\&gt; get-process | out-host -paging</span><br>
<br>Display a snapshot of the session history at the command line:</p>
<p class="code">PS C:\&gt; $a = get-history<br>
PS C:\&gt; out-host -InputObject $a</p>
<p class="quote"><i>“less is more” ~ <a href="http://www.greatbuildings.com/cgi-bin/gbi.cgi/Lake_Shore_Drive_Apts.html/cid_lake_shore_001.gbi">Ludwig Mies van der Rohe </a></i></p>
<p><b>Related:</b></p>
<p>  <a href="out-default.html">Out-Default</a> - Send output to default<br>
<a href="out-file.html">Out-File</a> - Send command output to a file <br>
<a href="out-null.html">Out-Null</a> - Send output to null <br>
<a href="out-printer.html">Out-Printer</a> - Send the output to a printer <br>
<a href="out-string.html">Out-String</a> - Send output to the pipleline as strings<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
Clear-Host - Clear the screen <a href="write-host.html"><br>
Write-Host</a> - Display objects through the host user interface<br>  
Equivalent bash command: <a href="../bash/less.html">less</a> - Display output one screen at a time</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

