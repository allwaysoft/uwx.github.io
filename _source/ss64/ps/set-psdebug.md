---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-PSDebug</h1> 
<p>Turns script debugging features on and off.</p>
<pre>Syntax
      Set-PSDebug [-trace <i>int</i>] [-step] [-strict] [<i>CommonParameters</i>]

      Set-PSDebug [-off] [<i>CommonParameters</i>]

Key
   -trace <i>int</i>
       Set the trace level:
          0 - Off
          1 - trace script lines as they are executed
          2 - trace script lines, variable assignments, function calls and scripts.

   -step 
       Turn on script stepping. Before each line is run, PowerShell will prompt
       to stop, continue or enter a new interpreter level to inspect the state
       of the script. (Step automatically sets Trace =1)

   -strict 
       Throw an exception if a variable is referenced before being assigned a value.

   -off 
       Turn off all debugging features.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Set the trace level to 2:</p>
<p><span class="code">PS C:\&gt; set-psdebug -trace 2;</span><br><br>
Turns  stepping on:</p>
<p class="code">PS C:\&gt; set-psdebug -step</p>
<p>Turn off all debugging features:</p>
<p class="code">PS C:\&gt; set-psdebug -off</p>
<p class="quote"><i>"Debugging is twice as hard as writing the code in the first place.
Therefore, if you write the code as cleverly as possible, you are,
by definition, not smart enough to debug it" ~ Brian W. Kernighan</i></p>
<p><b>Related:</b><br><br>
<a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="set-strictmode.html">Set-StrictMode</a> - Enforce coding rules in expressions &amp; scripts<br>
Equivalent bash command: <a href="../bash/set.html">set -x / +x</a> - turn debug on/off, or bash -x myscript.sh</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-psdebug.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

