---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PSProvider</h1> 
<p>Get information about  a  PowerShell provider.</p>
<pre>Syntax
      Get-PSProvider [[-psProvider] <i>string</i>[]] [<i>CommonParameters</i>]

Key
   -psProvider <br>      Name(s) of the Windows PowerShell provider.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  PowerShell providers let you access a variety of data stores as though they were file system drives. For example the registry provider allows you to map drives to locations in the registry. 
For information about PowerShell providers, see about_Providers.</p>
<p><b>Examples</b></p>
<p>List all available PowerShell providers:</p>
<p><span class="code">PS C:\&gt; get-psprovider</span><br>
  <br>
List PowerShell providers with names that begin with 'f' or 'r':</p>
<p class="code">PS C:\&gt; get-psprovider f*, r* | format-list</p>
<p>Display the snap-in for each Windows PowerShell provider</p>
<p class="code">PS C:\&gt; get-psprovider | format-list name, pssnapin</p>
<p class="quote"><i>"Art is a jealous mistress, and, if a man have a genius for painting, poetry, music, architecture, or philosophy, he makes a bad husband, and ill-provider"
  ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-psdrive.html">Get-PSDrive</a> - Get drive information (DriveInfo)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

