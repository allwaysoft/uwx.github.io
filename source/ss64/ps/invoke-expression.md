---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Invoke-Expression</h1> 
<p>Run a  PowerShell expression. Accepts a string to be executed as code. It is <a href="https://xkcd.com/327/">essential</a> that any user input is carefully validated.</p>
<pre>Syntax
      Invoke-Expression [-command] <i>string</i> [<i>CommonParameters</i>]

Key
   -command <i>string</i>
       A literal string (or variable that contains a string) that is a
       valid PowerShell expression.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Invoke-Expression:<span class="code"> <b>iex</b></span></p>
<p>Invoke-Expression accepts a <i>string</i> and treats it as PowerShell code which allows the construction of dynamic code, this means that you have to be very careful about the string input. If input is accepted from a user or any third party source, there is a possibility that they could inject unwanted additional PowerShell commands into the script with undesirable effects.</p>
<p>Invoke-Expression  performs string expansion, so for example <span class="code">iex "echo Hello World $PsHome"</span> will output<br>
<span class="code">Hello<br>
World<br>
C:\\System32\WindowsPowerShell\v1.0</span></p>
<p>If the result of the expression is an empty array, invoke-expression will output <span class="code">$null</span></p>
<p>Using <a href="invoke-expression.html">Invoke-Expression</a> to run a set of commands is similar to using the <span class="code"><a href="call.html">&amp;</a></span><a href="call.html"> call operator</a> but has a key difference in that  invoke-expression does not create an additional <a href="syntax-scopes.html">scope</a>, so any changes to variables  made by the script block will remain visible. <br>
</p>
<p><b>Example</b></p>
<p>Create variables named $sorting and $MyExpr and use them to store the text of an expression, then use invoke-expression to actually run the expression:</p>
<p><span class="code">PS C:\&gt; $sorting = "sort-object Name"<br>
PS C:\&gt; $myExpr = "get-process | $sorting"<br>
PS C:\&gt; invoke-expression $myExpr</span><br>
<br>
<i class="quote">“Innovation is the distinction between a leader and a follower” ~ Steve Jobs</i></p>
<p><b>Related:</b></p>
<p><a href="get-command.html">Get-Command</a> - Retrieve basic information about a command.<br>
<a href="invoke-command.html">Invoke-Command</a> -   Run commands on local and remote computers.<br>
<a href="invoke-item.html">Invoke-Item</a> - Invoke an executable or open a file (START)<br>
<a href="invoke-history.html">Invoke-History</a> - Invoke a previously executed Cmdlet.<br>
<a href="start-process.html">Start-Process</a> -  Start one or more processes, optionally as a specific user.<br>
<a href="trace-command.html">Trace-Command</a> - Trace an expression or command.<br>
<span class="code"><a href="stop-parsing.html">--%</a></span> - Stop parsing input as PowerShell commands.<br>
<a href="source.html">. (source)</a> - Run a command script in the current shell (persist variables and functions.)<br>
<a href="call.html">&amp; (call)</a> - Run a command script.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="invoke-expression.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
