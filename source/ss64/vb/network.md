---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>The wscript.Network object</h1> 
<p>Provides access to the shared resources on the network to which your computer is connected.</p>
<pre>Syntax 
      Set WshNetwork = <a href="createobject.html">CreateObject</a>("Wscript.Network") 

Properties:

    UserName     The username variable, likely the SAM Account Name (the pre-Windows 2000 name)
    UserDomain   The NetBIOS domain name
    ComputerName This is the NetBIOS computer name

Methods

    <a href="addwindowsprinterconnection.html">AddWindowsPrinterConnection</a> Add a printer in Windows 2000 and higher
    <a href="addprinterconnection.html">AddPrinterConnection</a>    Add a printer in older systems
    <a href="enumnetworkdrives.html">EnumNetworkDrives</a>       List the mapped drives on the computer
    <a href="enumprinterconnections.html">EnumPrinterConnections</a>  List the installed printers
    <a href="mapnetworkdrive.html">MapNetworkDrive</a>         Map a network drive
    <a href="removenetworkdrive.html">RemoveNetworkDrive</a>      Remove a network drive
    <a href="removeprinterconnection.html">RemovePrinterConnection</a> Remove a printer connection
    <a href="setdefaultprinter.html">SetDefaultPrinter</a>       Set the default printer
</pre>
<p><b>Example<br>
</b></p>
<pre>Set WshNetwork = WScript.CreateObject("WScript.Network")
WScript.Echo "Domain = " &amp; WshNetwork.UserDomain
WScript.Echo "Computer Name = " &amp; WshNetwork.ComputerName
WScript.Echo "User Name = " &amp; WshNetwork.UserName</pre>
<p class="quote"><i>“It is possible to store the mind with a million facts and still be entirely uneducated” ~ Alec Bourne</i></p>
<p><b>Related:</b></p>
<p><a href="shell.html">Shell + Shell.Application</a> objects/methods</p>
<!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="network.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

