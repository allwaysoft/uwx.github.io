---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>MsgBox</h1> 
<p>Display a dialogue box message.</p>
<pre>Syntax 
      MsgBox(<i>prompt</i> [, <i>buttons</i>][, <i>title</i>]
         [, <i>helpfile</i>, <i>context</i>])

Key
   <i>prompt</i>    The dialogue box text.
 
   <i>buttons</i>   The sum of the constants for button, icon, default button and modality

   <i>title</i>     Title bar text

   <i>helpfile</i>  A helpfile to link to the help button

   <i>context</i>   Helpfile context number

Constants

  Buttons: vbOKOnly (0), vbOKCancel(1), vbAbortRetryIgnore (2), vbYesNoCancel(3)
           vbYesNo (4), vbRetryCancel (5)

  Icon: vbCritical (16),vbQuestion (32),vbExclamation (48), vbInformation (64) 

  Default button: vbDefaultButton1 (0),vbDefaultButton2 (256),vbDefaultButton3 (512),vbDefaultButton4(768)

  Modality: vbApplicationModal, vbSystemModal
</pre>
<p>The MsgBox function will return one of the following:</p>
<p> <span class="code">1</span> =  OK was clicked (vbOK) <br>
 <span class="code">2</span> =  Cancel was clicked (vbCancel ) <br>
 <span class="code">3</span> =   Abort was clicked (vbAbort) <br>
 <span class="code">4</span> =  Retry was clicked (vbRetry) <br>
 <span class="code">5</span> =  Ignore was clicked (vbIgnore) <br>
 <span class="code">6</span> =  Yes was clicked (vbYes) <br>
<span class="code">7</span> =  No was clicked (vbNo) </p>
<p>Examples</p>
<p>'Display a message:</p>
<pre>result=Msgbox("Are you sure?",vbYesNo+vbInformation, "")
WScript<a href="echo.html">.Echo</a> result</pre>

<p class="quote"><i>“Everyone has an invisible sign hanging from their neck saying, Make me feel important. Never forget this message when working with people” ~ Mary Kay Ash</i></p>
<p><b>Related:</b></p>
<p><a href="inputbox.html">InputBox</a> - Prompt for user input</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="msgbox.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

