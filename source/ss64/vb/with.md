---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>With</h1> 
<p>Assign multiple properties of an object.</p>
<pre>Syntax 
      With <i>object</i> 
         [<i>Statements</i>]
      End with

Key
   <i>object</i>      A previously defined object variable<span class="code"></span>

   <i>Statements</i>  Program code to be executed against <i>object</i></pre>
<p>Example</p>
<pre>Msg =  "First line" &amp; vbCrLf &amp; "Second line"<br>Set objWord = CreateObject("Word.Application")<br>objWord.Visible = True<br>With objWord<br>    .Documents.Add<br>    .Selection.TypeText Msg<br>    .Selection.WholeStory<br>End With </pre>
<p class="quote"><i>“We could have made beautiful music together” ~ Clifford Odets (movie: The General Died at Dawn)</i></p>
<p><b>Related:</b></p>
<p><a href="createobject.html">CreateObject</a> - Create a WSH automation object</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="with.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

