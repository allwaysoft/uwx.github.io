---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Resolve-Path</h1> 
<p>Resolve the wildcard characters in a path and display the path contents.</p>
<pre>Syntax
      Resolve-Path <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>
         [-credential <i>PSCredential</i>] [-Relative]
            [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>[]
       The PowerShell path (or paths) to resolve
       Wildcards are permitted. {may be piped}

   -literalPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.

   -Relative
       Return a relative path.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Resolve-Path:<span class="code"> <b>rvpa</b></span></p>
<p><b>Examples</b></p>
<p>  Resolve the full home path represented by the tilde character (<span class="code">~</span>):</p>
<p><span class="code">PS C:\&gt; resolve-path ~ | format-list</span><br><br>
Return the pathnames of everything in the C:\windows\ folder:</p>
<p class="code">PS C:\&gt; resolve-path "C:\windows\*"| format-list</p>
<p>Resolve the path to the <span class="code">Test[xml]</span> subdirectory of the current directory. It uses the -LiteralPath parameter to indicate that the brackets are not regular expression characters:</p>
<p class="code">PS C:\&gt; resolve-path -literalPath test[xml]</p>
<p class="quote"><i>"Obstacles cannot crush me. Every obstacle yields to stern resolve. He who is fixed to a star does not change his mind" ~ Leonardo da Vinci </i></p>
<p><b>Related:</b><br><br>
<a href="convert-path.html">convert-path</a> - Convert a ps path to a provider path.<br>
<a href="join-path.html">join-path</a> - Combine a path and child-path<br>
<a href="split-path.html">split-path</a> - Return part of a path.<br>
<a href="test-path.html">test-path</a> - Return true if the path exists, otherwise return false<br>
<a href="get-help.html">get-help</a> about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="resolve-path.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

