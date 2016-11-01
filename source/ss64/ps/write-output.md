---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Output</h1> 
<p>Write an object to the pipeline. If the command is the last command in the pipeline, the objects are displayed in the console.</p>
<pre>Syntax
      Write-Output [-inputObject] <i>Object</i>[] [<i>CommonParameters</i>]

Key
   -inputObject <i>Object</i>
       The object(s) to send along the pipeline.
       A variable, command or expression that gets the objects.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Write-Output: <span class="code">echo, </span><b><span class="code">write</span></b></p>
<p>Write-Output writes objects to the success pipeline. To have output appear only on screen use <a href="write-host.html">write-host</a> or Write-Warning instead.</p>
<p>If an unquoted string of characters is passed to write-output, they will be implicitly treated as a string,<br>
so <span class="code">write-output hello </span>is equivalent to:<br>
<span class="code">write-output "hello"<br>
</span> and <span class="code">write-output hello world</span> is equivalent to:<br>
<span class="code">write-output "hello" "world"</span><br>
Note this is not the same as 

<span class="code">write-output "hello world"</span></p>
<p>Write-Output may be  used to display strings and other objects on the console. However, because the 
default behavior is to display the objects at the end of a pipeline, it is generally not necessary to use Write-Output. For example, <span class="code">get-process | write-output</span> is equivalent to <span class="code">get-process</span></p>
<p><span class="code">write</span> and <span class="code">echo</span> are <a href="new-alias.html">aliases</a> for write-output</p>
<p><b>Examples</b></p>
<p>Write a string to the pipeline, which by default will appear on the screen:</p>
<p><span class="code">PS C:\&gt; $myvar="The quick brown fox" <br>
PS C:\&gt; write-output $myvar</span></p>
<p class="quote"><i>"We attract hearts by the qualities we display; we retain them
by the qualities we possess" ~ Jean Baptiste Antoine Suard </i></p>
<p><b>Related:</b></p>
<p> <a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
  <a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="write-error.html">Write-Error</a> - Write an object to the error pipeline.<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface<br>
<a href="write-progress.html">Write-Progress</a> -  Display a progress bar <br>
<a href="write-verbose.html">Write-Verbose</a> - Write a string to the host’s verbose display<br>
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

