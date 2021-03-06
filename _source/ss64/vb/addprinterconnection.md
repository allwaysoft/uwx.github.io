---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.AddPrinterConnection</h1> 
<p>Add a printer connection.</p>
<pre>Syntax 
      objNetwork.AddPrinterConnection(<i>strLocalName</i>, 
                     <i>strRemoteName</i>[,<i>bUpdateProfile</i>][,<i>strUser</i>][,<i>strPassword</i>]

Key
   objNetwork    : A <a href="network.html">WScript.network</a> object

   strLocalName  : Local printer Name (String value) 
   
   strRemoteName : Remote printer Name (String value) 

   
   bUpdateProfile : Indicate whether the printer mapping 
                    is stored in the current user's profile.
                    Boolean value  
                    If TRUE the mapping is stored in the user profile. 
                    default = false.
   
   strUser       : The user name. (if using a different profile)
                   Optional. 
   
   strPassword   : The user password. (if using a different profile)
                   Optional.   </pre>
<p>The AddPrinterConnection method adds a network printer to an MS-DOS printer port, such as LPT1.<br>
To add a remote Windows-based printer connection, use the <a href="addwindowsprinterconnection.html">AddWindowsPrinterConnection</a> method.</p>
<p><b>Example</b></p>
<pre>' Connect a network printer to LPT1.

Set objNetwork = WScript.CreateObject("WScript.Network") 
objNetwork.AddPrinterConnection "LPT1", "\\Server\Print1"</pre>
<p class="quote"><i>“Pay attention. It's all about paying attention. attention is vitality.<br>
It connects you with others. It makes you eager. stay eager” ~ Susan Sontag</i></p>
<p><b>Related:</b></p>
<p> Add Network printer - <a href="addwindowsprinterconnection.html">.AddWindowsPrinterConnection</a><br>
<a href="../nt/syntax-printing.html">printcon.vbs</a> - change a Print connection to  a different Queue/Server<br>
<a href="../nt/net_share.html">NET VIEW</a> - to view a list of printers<br>
<a href="../nt/net_print.html">NET PRINT</a> - View and Delete print jobs <br>
<a href="../nt/prncnfg.html">PRNCNFG</a> - Display, configure or rename a printer 
<br>
PRNDRVR - Add, delete or list printer drivers<br>
PRNMNGR - Add, delete, or list printers / connections, set the default printer<br>
<span class="body"><a href="../nt/syntax-printing.html">Network Printing</a> - Advice &amp; Tips</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="addprinterconnection.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

