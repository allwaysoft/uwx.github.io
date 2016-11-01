---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Return</h1> 
<p>Exit the current <a href="syntax-scopes.html">scope</a>, which can be a function, script, or script block.</p>
<pre>Syntax
      return
      return <i>expression</i></pre>
<p>In PowerShell, the result of each statement is returned as      output, even without an explicit Return keyword. </p>
<p>So <br>
<span class="code">&nbsp;$price<br>
&nbsp;return<br>
</span>has exactly the same effect as:<br>
<span class="code"> &nbsp;return</span><span class="code"> $price</span></p>
<p><b>Example</b></p>
<p>Add the number 5 and return the value:</p>

<pre>function demoadd {
   param ($value)

   "Adding five"
   $value += 5
   return $value
   }

C:\PS&gt; $result = demoadd 2<br>C:\PS&gt;
C:\PS&gt; $result
Adding five
7</pre>
<p> The key point to note in the above example  is that the "Adding 5" string is not displayed, but is instead assigned to the $result variable and returned along with the number.<br>
</p>
<p class="quote"><i>“It hurts to love someone and not be loved in return, but what is the most painful is to love someone and never find the courage to let the person know how you feel” ~ Anon</i></p>
<p><b>Related:</b><br>
  <br>
<a href="break.html">Break</a> - Exit a program loop<br>
<a href="continue.html">Continue</a> - Skip just this iteration of a loop<br>
<a href="exit-pssession.html">Exit-PSSession</a> - 
Exit PowerShell (or exit a script)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="return.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
