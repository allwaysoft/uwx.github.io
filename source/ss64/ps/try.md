---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Try {...} Catch {...} Finally {...}</h1> 
<p>Handle      a terminating error (exception) within a scriptblock.</p>
<pre>Syntax
      try <b>{</b><i>statement_list</i><b>}</b>

      catch [[<i>error_type</i>][',' <i>error_type</i>]*] <b>{</b><i>statement_list</i><b>}</b>

      finally <b>{</b><i>statement_list</i><b>}</b>

Key
   <i>statement_list</i>   A scriptblock of code to be run
</pre>
<p>The <span class="code">Try</span> block defines a section of a script to be monitored for errors. If an error occurs within the <span class="code">Try</span> block, the error is first saved to the <span class="code">$Error</span> automatic variable.       
PowerShell then searches for a <span class="code">Catch</span> block to handle the error.</p>
<blockquote>
<p> If the Try      statement does not have a  matching <span class="code">Catch</span> block,  PowerShell      continues to search for an appropriate <span class="code">Catch</span> block or Trap statement in the <a href="syntax-scopes.html">parent scopes</a>. </p>
</blockquote>
<p>After a <span class="code">Catch</span> block is completed or if no appropriate <span class="code">Catch</span> block or <span class="code"><a href="trap.html">Trap</a></span> statement is found, the <span class="code">Finally</span> block is run.</p>
<p>If the error      cannot be handled, the error is written to the error stream.</p>
<p>To free resources used by a script, add a <span class="code">Finally</span> block after the <span class="code">Try</span> and        <span class="code">Catch</span> blocks. PowerShell runs the <span class="code">Finally</span> block before the script terminates or before the current block        goes out of scope. </p>
<p> The <span class="code">Finally</span> block statements will run:</p>
<ul>
<li> Regardless of whether the <span class="code">Try</span> block encounters a terminating error.  </li>
<li> If CTRL+C is used to stop the script. </li>
<li>If an <span class="code">Exit</span> keyword stops the script from within a <span class="code">Catch</span> block.</li>
</ul>
<p><b>Example</b></p>
<p>Attempt running a non existent cmdlet:</p>
<p><span class="code">try { NoSuchCmdlet }           <br>
catch { "That cmdlet does not exist." }</span><br>
<br> 
When run, the above script will return:
<span class="code">That cmdlet does not exist.</span>
</p><p class="quote"><i>"Do or do not. There is no try" ~ Yoda</i></p>
<p><b>Related:</b></p>
<p><a href="trap.html">Trap</a> - Handle a terminating error<br>
about_Try_Catch_Finally<br>
Looping commands: <a href="do.html">Do</a>, <a href="foreach.html">foreach</a>, <a href="foreach-object.html">ForEach-Object</a>, <a href="switch.html">Switch</a>, <a href="while.html">While</a></p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="try.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
