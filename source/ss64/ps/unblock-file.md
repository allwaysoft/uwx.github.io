---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>Unblock-File (PowerShell 3.0+)</h1> 
<p>Unblock files that were downloaded from the Internet.</p>
<pre>Syntax
      Unblock-File [ [-path] | -literalPath ] <i>string</i>[]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -path <i>string</i>[]
       The files to unblock. Wildcard characters are supported.

   -literalPath <i>string</i>[]
       The files to unblock, like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -confirm
       Prompt for confirmation before executing the cmdlet.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction,
        -WarningVariable, -OutBuffer and -OutVariable</pre>
<p>Unblock-File unblocks  PowerShell      script files that have been downloaded from the Internet so you can run them, even when the  PowerShell      <a href="set-executionpolicy.html">execution policy</a> is RemoteSigned. By default, these files are blocked to protect the computer from untrusted files.          Before using Unblock-File, review the file and its source and verify that it is safe to open.          </p>
<p>Internally, Unblock-File  removes the <span class="code">Zone.Identifier</span> alternate data stream, which has a value of "3" to      indicate that it was downloaded from the Internet.<span class="code"><b></b></span></p>
<p><b>Examples</b></p>
<p>Unblock a file:</p>
<pre>PS C:&gt; Unblock-File -Path C:\Downloads\cryptovirus.xls
</pre>
<p>Unblock multiple .XLS files:</p>
<pre>PS C:&gt; dir C:\Downloads\*.xls | Unblock-File
</pre>
<p>The -Stream parameter of <a href="get-item.html">Get-Item</a> can be used to get all currently blocked files by searching for the <span class="code">Zone.Identifier</span> stream:</p>
<pre>PS C:&gt; Get-Item C:\Downloads\* -Stream "Zone.Identifier" -ErrorAction SilentlyContinue</pre>
<p class="quote"><i>“The block of granite which was an obstacle in the pathway of the weak becomes a stepping-stone in the pathway of the strong”  ~ Thomas Carlyle</i></p>
<p><b>Related:</b></p>
<p><a href="clear-itemproperty.html">Clear-ItemProperty</a> - Remove the property value from a property<br>
<a href="clear-variable.html">Clear-Variable</a> -   Remove the value from a variable</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="unblock-file.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

