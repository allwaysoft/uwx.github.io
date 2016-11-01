---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Exit</h1> 
<p>Exit a block of <a href="do.html">Do...Loop</a>, <a href="for.html">For...Next</a>, <a href="function.html">Function</a>, or <a href="sub.html">Sub</a> code. </p>
<pre>Syntax
      Exit Do
      Exit For
      Exit Function
      Exit Property
      Exit Sub</pre>
<p>Exit will immediately exit the  procedure or loop in which it appears. Execution will continue with the next statement/command.</p>
<p><span class="code">Exit Do</span> can be used only inside a <span class="code">Do...Loop</span> statement. </p>
<p>When used within nested  loops, <span class="code">Exit</span> will only exit the current loop.</p>
<p> Example</p>
<pre>Dim indexA, indexB

For indexA = 1 to 2
    For indexB = 5 to 50
        If indexB &gt; 9 Then
            <b>Exit For</b>
        End If
        document.write (indexA &amp; "~" &amp; indexB)
    Next
Next

' Output: 1~5 1~6 1~7 1~8 1~9 <b>2~5 2~6 2~7 2~8 2~9</b></pre>
<p class="quote"><i>“Affairs are easier of entrance than of exit; and it is but common prudence to see our way out before we venture in” ~ Aesop</i></p><p><b>Related:</b></p>
<p> <a href="do.html">Do..Loop</a> - Repeat a block of statements</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

