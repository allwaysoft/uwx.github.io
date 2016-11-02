---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Start-Sleep</h1> 
<p>Suspend shell, script, or runspace activity for a specified period of time.</p>
<pre>Syntax
      Start-Sleep [-seconds] <i>int</i> [<i>CommonParameters</i>]

      Start-Sleep -milliseconds <i>int</i> [<i>CommonParameters</i>]
Key
   -seconds <i>int</i>
       How long to sleep, can be abbreviated to -s
       {can be piped}

   -milliseconds<i> int</i>
       How long to sleep in Milliseconds, can be abbreviated as -m

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Start-Sleep:<b><span class="code"> sleep</span></b></p>
<p><b>Example</b></p>
<p>Sleep for 60 seconds:</p>
<p><span class="code">PS C:\&gt; Start-Sleep -s 60 </span></p>
<p>An alternative is to pause execution until the user presses a key. This can be done with the following:</p>
<p><span class="code">PS C:\&gt; $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")|out-null </span><br>
  <br>
  <i class="quote">“Many things--such as loving, going to sleep, or behaving unaffectedly--are done worst when we try hardest to do them” ~ C.S. Lewis</i></p>
<p><b>Related:</b></p>
<p>Equivalent bash command:<a href="../bash/sleep.html"> sleep</a> - Delay for a specified time</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

