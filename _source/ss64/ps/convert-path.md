---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Convert-Path</h1> 
<p>Convert a path from a Windows PowerShell path to a Windows PowerShell provider path.</p>
<pre>Syntax
      Convert-Path [-path] <i>string</i>[] [-UseTransaction] [<i>CommonParameters</i>]

      Convert-Path [-literalPath] <i>string</i>[] [-UseTransaction] [<i>CommonParameters</i>]

key
   -Path <i>path</i>      The path to be converted

   -literalPath <i>string</i>
       The path to be converted. The value of -LiteralPath is used exactly
       as typed. No characters are interpreted as wildcards.
       If the path includes escape characters, enclose them in single quotes. 

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Convert-Path: <span class="code"> <b>cvpa</b></span></p>
<p><b>Examples</b></p>
<p>Expand the current working directory:</p>
<p><span class="code">PS C:\&gt;convert-path ~</span><br>
  <br>
  Convert a PowerShell provider path to a standard registry path:</p>
<p class="code">PS C:\&gt;convert-path HKLM:\software\microsoft<br>
HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT</p>
<p class="quote"><i>"Being the richest man in the cemetery doesn't
matter to me... Going to bed at night saying
we've done something wonderful... that's what
matters to me" ~ Steve Jobs</i></p>
<p><b>Related:</b></p>
<p><a href="join-path.html">join-path</a> - Combine a path and child-path<br>
<a href="resolve-path.html">resolve-path</a> - Resolves the wildcards in a path <br>
<a href="split-path.html">split-path</a> - Return part of a path.<br> 
<a href="test-path.html">test-path</a> - Return true if the path exists, otherwise return false<br>
<a href="get-help.html">get-help</a> about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="convert-path.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

