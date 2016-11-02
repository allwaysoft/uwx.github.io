---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Checkpoint-Computer</h1> 
<p>Create a system restore point on the local computer.</p>
<pre>Syntax
      Checkpoint-Computer [-Description] <i>string</i> 
        [[-RestorePointType] <i>string</i>] [<i>CommonParameters</i>]

Key
   -Description <i>string</i>
       A descriptive name for the restore point. [required]
        
   -RestorePointType <i>string</i>
       The type of restore point:
        
         <u>APPLICATION_INSTALL</u>, APPLICATION_UNINSTALL, DEVICE_DRIVER_INSTALL,
         MODIFY_SETTINGS, or CANCELLED_OPERATION.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>System restore points and the Checkpoint-Computer cmdlet are supported only on <b>client</b> operating systems, such as      Windows 8, Windows 7, Windows Vista, and Windows XP.          Beginning in Windows 8, Checkpoint-Computer cannot create more than one checkpoint each day.</p>
<p><b>Examples</b></p>
<p>Create a system restore point called "SS64". Use the default <span class="code">APPLICATION_INSTALL</span> restore
point type:</p>
<p><span class="code">PS C:\&gt; checkpoint-computer -description "SS64"</span></p>
<p>  Create a <span class="code">MODIFY_SETTINGS</span> system restore point called "OntheDomain":</p>
<p class="code">PS C:\&gt; checkpoint-computer -description "OntheDomain" -RestorePointType MODIFY_SETTINGS</p>
<p class="quote"><i>“If you're not making mistakes, then you're not doing anything. I'm positive that a doer makes mistakes” ~ John Wooden</i></p>
<p><b>Related:</b><br>
<br><a href="add-computer.html">Add-Computer</a> - Add a computer to the domain</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

