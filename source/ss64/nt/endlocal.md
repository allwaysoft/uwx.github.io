---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>ENDLOCAL</h1> 
<p> End localisation of environment changes in a batch file. Pass variables from one batch file to another.
</p><pre>Syntax
      ENDLOCAL</pre>
<p>If <a href="setlocal.html">SETLOCAL</a> is used to make variables 'local' to one batch script, then those variables will be invisible to all other batch scripts unless explicitly passed using an <span class="code">ENDLOCAL &amp; SET...</span> command.</p>
<p>If SETLOCAL is used without a corresponding ENDLOCAL then local environment variables will be discarded when the batch file ends. Ending the cmd.exe session will discard all Environment Variables both local and global.</p>
<p>If a batch script does not use SETLOCAL or ENDLOCAL then all variables will be Global, i.e. visible and modifiable from other calling scripts or on the command line after the script has completed. </p>
<h2>  Passing variables from one routine to another</h2>
<blockquote>
<p>The CMD command processor always works on a line-by-line basis, so it will convert all <span class="code">%variables%</span> into their text values before executing any of the commands.<br>
<br>
By putting <span class="code">ENDLOCAL <a href="syntax-redirection.html">&amp;</a> SET commands</span> on a single line you are able to SET a variable just before the localisation is ended by the ENDLOCAL command.</p>
<p>ENDLOCAL does not reset <span class="code">%errorlevel%</span><br>
  <br>
  <b>Examples</b>:</p>
<pre>::Sales.cmd
   
   @Echo off
   SETLOCAL
      Set _item="Ice Cream Maker"
      Set _price=450
   ENDLOCAL <b>&amp;</b> SET _return1=%_item%<b>&amp;</b> SET _return2=%_price%

::Results.cmd

   @Echo off
   SETLOCAL
   CALL Sales.cmd
   Echo [%_return1%] will cost [%_return2%]

::SubDemo.cmd
   
   @Echo off
   SETLOCAL
   CALL sub_products
   Echo [%_return1%] will cost [%_return2%]
   goto:eof

   :sub_products
   SETLOCAL
      Set _item="Coffee Grinder"
      Set _price=150
   ENDLOCAL <b>&amp;</b> SET _return1=%_item%<b>&amp;</b> SET _return2=%_price%
</pre>
<p>Multiple SET 
commands can be added  to pass multiple variables, just prefix each with an <b>&amp;</b><br>
Be aware that any trailing spaces &nbsp;&nbsp;&nbsp;will be added to the variables value. </p>
</blockquote>
<h2>Improving readability</h2>
<blockquote>
<p>The 'ENDLOCAL <b>&amp;</b> SET' technique described above can become difficult to read if you  have a lot of SET commands all on the same line. This can be made  easier to read if you use parenthesis.</p>
<p class="code">Endlocal&amp;(<br>
set _return1=%_item% <br>
set _return2=%_price%<br>
set _return3=%_discount%)</p>
<p>In these examples we have used the variable names <span class="code">_return1, _return2</span> etc, but you can use any names for the return variables, even re-use the exact same variable name inside and outside the ENDLOCAL command (<span class="code">SET _price=%_price%</span>) </p>
</blockquote>
<p>ENDLOCAL is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i>"A good place to visit, but a poor place to stay" - Josh Billings</i></p>
<p> <b>Related:</b><br>
  <br>
  <a href="setlocal.html">SETLOCAL</a> - Begin localisation of environment variables 
  in a batch file.<br>

Equivalent bash command (Linux): <a href="../bash/readonly.html">readonly</a> - Mark variables/functions 
  as readonly</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

