---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Split-Path</h1> 
<p>Return part of a path.</p>
<pre>Syntax
      Split-Path [-path] <i>string</i>[] [<i>SplitLocationParam</i>]
           [-literalPath <i>string</i>[]] [-resolve] [-UseTransaction]
              [-credential <i>PSCredential</i>] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>[]
       The path(s) to be split.{may be piped}
       Wildcards are permitted.

   -LiteralPath <i>string</i>[]
       The paths to be split.
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   <i>SplitLocationParam</i>
       One of: -parent, -qualifier, -noQualifier, -leaf or -isAbsolute

          -parent      Return the parent container of the item (parent folder)
          -qualifier   Return the drive/qualifier of the specified path. (C: or HKCU:)
          -noQualifier Return the path without the drive/qualifier (\path\to\resource).
          -leaf        Return the last item or container in the path.(filename)
          -IsAbsolute  Returns TRUE if the path is absolute and FALSE if it is relative.
                       (An absolute path has a length greater than zero and does not
                        use a dot ( . ) to indicate the current path.)

   -Resolve 
       Display the items that are referenced by the resulting split path instead
       of displaying the path elements.

   -Credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User64" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
<b>Examples</b></p>
<p>Display a list of .XLS filenames in the docs folder (don't return the whole path):</p>
<p><span class="code">PS C:\&gt; split-path "C:\Docs\*.xls" -leaf -resolve</span><br><br>
Change directory to the folder containing the <a href="syntax-profile.html">PowerShell $Profile</a>:</p>
<p class="code">PS C:\&gt; Set-Location(split-path $profile -parent)</p>
<p>The above can be simplified with the 'cd' alias for set-location and relying on -parent being the default:</p>
<p class="code">PS C:\&gt; cd(split-path $profile)</p>
<p class="quote"><i>“A gentle stream can split a mountain, given enough time” </i></p>
<p><b>Related:</b><br>
<br>
<a href="convert-path.html">convert-path</a> cvpa Convert a ps path to a provider path.<br>
<a href="join-path.html">join-path</a> - Combine a path and child-path<br>
<a href="resolve-path.html">resolve-path</a> - Resolves the wildcards in a path <br>
<a href="test-path.html">test-path</a> Return true if the path exists, otherwise return false<br>
<a href="get-help.html">get-help</a> about_namespace<br>
Equivalent bash command: <a href="../bash/dirname.html">dirname</a> - Convert a full pathname to just a path</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="split-path.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

