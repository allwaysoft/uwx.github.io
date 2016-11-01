---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>VBScript Looping statements</h1> 
<p>Looping Through Code, Looping allows you to run a group of statements 
  repeatedly. </p>
<pre><b><a href="do.html">Do Loop</a></b>
Do...Loop to run a block of statements <b>While</b> a Condition is True

   Do <b>While</b> IntMyInteger &gt; 10
      IntMyInteger = IntMyInteger - 1
   Loop
or
   Do
      IntMyInteger = IntMyInteger - 1
   Loop <b>While</b> IntMyInteger &gt; 10

Do...Loop to run a block of statements <b>Until</b> a Condition Becomes True

   Do <b>Until</b> IntMyInteger = 10
      IntMyInteger = IntMyInteger - 1
   Loop
or
   Do
      IntMyInteger = IntMyInteger + 1
   Loop <b>Until</b> IntMyInteger = 10

Exit a Do...Loop  from inside the Loop with the <b>Exit Do</b> statement.


<b><a href="for.html">For...Next</a></b>
For...Next to run statements a specific number of times. 

   For IntMyInteger = 1 To 50
      MyProcedure
   Next

This can be modified with a positive or negative Step value

   For IntMyInteger = 50 To 1 step -5
      MyProcedure
   Next

Exit a For...Next statement prematurely with the <b>Exit For</b> statement.


<b><a href="foreach.html">For Each...Next</a>
</b>A For Each...Next loop repeats a group of statements for each item
in a collection of <i>objects</i> or for each element of an <i>array</i>.

<a href="while.html"><b>While...Wend</b></a>   Conditionally repeat a block of statements:

While second(Time()) &gt; 30 
   WScript<a href="echo.html">.Echo</a> "This line will repeat for 30 seconds"
Wend
</pre>
<p class="quote"><i>“It's a good rule to follow the first law of holes: If you are in one, stop digging” ~ Denis Healey</i></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-loops.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

