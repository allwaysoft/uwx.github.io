---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Join-Path</h1> 
<p>Combine a path and child-path into a single path.</p>
<pre>Syntax
      Join-Path [-path] <i>string</i>[] [-childPath] <i>string</i> [-resolve]
          [-credential <i>PSCredential</i>] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>[]
       The main path (or paths) to which the child-path is appended.
       Wildcards are permitted. {may be piped}

   -childPath <i>string</i>
       The elements to append to the value of Path.
       Wildcards are permitted. {may be piped}

   -resolve 
       Display the items that are referenced by the joined path.

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>The appropriate path delimiters will be supplied by the provider.</p>
<p><b>Examples</b></p>
<p>Join two paths:</p>
<p><span class="code">PS C:\&gt; join-path -path c:\win* -childpath system*</span></p>
<p>The above will resolve to: <span class="code">C:\windows\System</span><br><br>
Join 2 paths and display the files and folders, -resolve will display the full pathname:</p>
<p class="code">PS C:\&gt; join-path -path c:\win* system* -resolve </p>
<p>Display the registry keys in the HKLM\System hive that include "ControlSet":</p>
<p class="code">PS C:\&gt; set-location HKLM: <br>
PS HKLM:\&gt; join-path System *ControlSet* -resolve<br>
HKLM:\System\ControlSet001<br>
HKLM:\System\ControlSet002<br>
HKLM:\System\CurrentControlSet</p>
<p class="quote"><i>#Here come old flattop, he come grooving up slowly, He got joo-joo eyeball, he one holy roller# ~ The Beatles (Come Together) </i></p>
<p><b>Related:</b></p>
<p>  <a href="convert-path.html">convert-path</a> - Convert a ps path to a provider path.<br>
<a href="resolve-path.html">
resolve-path</a> - Resolves the wildcards in a path <br>
<a href="split-path.html">split-path</a> - Return part of a path.<br>
<a href="test-path.html">test-path</a> - Return true if the path exists, otherwise return false<br>
<a href="get-help.html">get-help</a>  about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="join-path.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

