---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Out-Null</h1> 
<p>Send output to null, delete output instead of sending it to the console.</p>
<pre>Syntax
      Out-Null [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]

Key

   -inputObject <i>psobject</i>
       The object that will be sent to null (deleted). {may be piped}
       A command, expression or variabale that contains the objects.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  The final part of displaying PowerShell output is a hidden background call to an Output cmdlet, by default as the last part of the execution process PowerShell calls the default output cmdlet which is typically Out-Host.</p>
<p><b>Example</b></p>
<p>Discarding output that you don't need:</p>
<p><span class="code">PS C:\&gt; get-childitem | out-null</span></p>
<p>An alternative method, which runs much faster is to use the <span class="code">$null</span> <a href="syntax-automatic-variables.html">automatic variable</a>:</p>
<p><span class="code">PS C:\&gt; get-childitem &gt; $null</span><br>
or<br>
<span class="code">PS C:\&gt; $null = get-childitem </span></p>
<p>Another alternative, which also runs much faster is to use the <a href="syntax-datatypes.html">[void]</a> cast: </p>
<p class="code">PS C:\&gt; [void] (get-childitem)</p>
<p class="quote"><i>“Being unwanted, unloved, uncared for, forgotten by everybody, I think that is a much greater hunger, a much greater poverty than the person who
has nothing to eat . . . . We must find each other” ~ Mother Teresa</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="out-default.html">Out-Default</a> - Send output to default<br>
<a href="out-file.html">Out-File</a> - Send command output to a file <br>
<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host <br>

<a href="out-printer.html">Out-Printer</a> - Send the output to a printer <br>
<a href="out-string.html">Out-String</a> - Send output to the pipleline as strings<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
Equivalent bash command: <a href="../bash/syntax-redirection.html">redirection</a> - Redirection and Process Substitution</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="out-null.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

