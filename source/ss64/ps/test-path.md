---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Test-Path</h1> 
<p>Return true if the path exists, otherwise return false, determines whether all elements of the path exist.</p>
<pre>Syntax
      Test-Path <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>
            [-pathType <i>TestPathType</i> ] [-isValid]
               [-include <i>string</i>[]] [-exclude <i>string</i>[]] [-Filter <i>string</i>]
                  [-credential <i>PSCredential</i>] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>[]
       The PowerShell path (or paths) to test
       Wildcards are permitted. {may be piped}

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -PathType <i>TestPathType</i>
       One of: Container, Leaf or Any
          Container  = The parent container of the item (parent folder)
          Leaf    = The last item or container in the path.(filename)
          Any     = Either a container or a leaf.

   -isValid
       Return TRUE if the path syntax is valid, even if elements of the path
       don't exist.

   -include <i>string</i>
       Test only the specified items from the Path. e.g. "May*"
       this only works when the path includes a wildcard character.

   -Exclude <i>string</i>
       Omit the specified items from the Path e.g. "*SS64*"
       this only works when the path includes a wildcard character.

   -Filter <i>string</i>
       A filter in the provider's format or language.
       The value of this parameter qualifies the Path parameter.
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

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
<p>Test-Path will either return $true or $false.</p>
<p> Test-Path will correctly test for the presence or absence of a valid path string, but if you ask it to test a path which is <span class="code">$null</span> or a Zero Length String it will return an error. You capture such null/empty variables with a <span class="code"><a href="try.html">Try</a></span> statement like this:</p>
<pre>$TestPath = $null

if ( $<b>(</b>Try { Test-Path $TestPath.trim() } Catch { $false }<b>)</b> ) {
   write-host "Path OK"
 }
Else {
   write-host "Path not found"
 }</pre>
<h2>Bugs</h2>
<p>The current version of Test-Path will always return <span class="code">$true</span> for a path that consists of a single space " "<br>
To prevent this <span class="code">trim()</span> the string you pass to Test-Path.</p>
<p>Test-Path does not work correctly with all PowerShell providers. For example, you can use Test-Path to test the path to a registry <b>key</b>, but if you use it to test the path to a registry <b>entry</b>, it always returns FALSE, even if the registry entry is present.</p>
<p><b>Examples</b></p>
<p>Determine whether all elements (folders) in the path exist:</p>
<p><span class="code">PS C:\&gt; test-path "F:\MSSQL\BACKUP</span>"<br><br>
Determine whether  there are any files in the Spreadsheets folder other than .xlsx files:</p>
<p class="code">PS C:\&gt; test-path C:\Spreadsheets\* -exclude *.xlsx</p>
<p>Determine whether the path stored in the <a href="syntax-profile.html">$profile</a> variable leads to a directory or a file:</p>
<p class="code">PS C:\&gt; test-path $profile -pathtype leaf</p>
<p>If a folder does not exist, then create it:</p>
<p><span class="code"> $folder = </span><span class="code">"F:\BACKUP"</span></p>
<p><span class="code">if ( -Not <b>(</b>Test-Path $folder.trim() <b>)</b>)<br>
{<br>
&nbsp;<a href="new-item.html">New-Item</a> -Path $folder -ItemType Directory<br>
}</span></p>
<p><i class="quote">“I don't want to sound like I'm bragging but I think I've finally managed to play the record at the right speed” ~ John Peel</i></p>
<p><b>Related:</b><br>
<br>
<a href="convert-path.html">Convert-Path</a> - Convert a ps path to a provider path.<br>
<a href="join-path.html">join-path</a> - Combine a path and child-path<br>
<a href="resolve-path.html">Resolve-Path</a> - Resolves the wildcards in a path <br>
<a href="split-path.html">Split-Path</a> - Return part of a path.<br>
<a href="get-help.html">Get-Help</a> about_namespace<br>
Equivalent bash command: <a href="../bash/test.html">test</a> - Evaluate a conditional expression</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="test-path.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

