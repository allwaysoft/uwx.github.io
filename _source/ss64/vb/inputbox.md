---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>InputBox</h1> 
<p>Prompt for user input.</p>
<pre>Syntax 
      InputBox(<i>prompt</i>[, <i>title</i>][, <i>default</i>]
         [, <i>xpos</i>][, <i>ypos</i>][, <i>helpfile</i>, <i>context</i>])

Key
   <i>prompt</i>   The dialogue box prompt text.
 
   <i>title</i>     Title bar text

   <i>default</i>   A default string to display 

   <i>xpos</i>      Distance from the left

   <i>ypos</i>      Distance from the top

   <i>helpfile</i>  A helpfile to link to the help button

   <i>context</i>   Helpfile context number
</pre>
<p>Input box returns a string containing the text entered </p>
<p>Examples</p>
<p>'Prompt for a message and then display it:</p>
<pre>strMessage =Inputbox("Enter your message","Input Required")
WScript<a href="echo.html">.Echo</a> strMessage

</pre>
<p>:: Get user input from a CMD script and store in a variable:</p>
<pre>@echo off
SETLOCAL

SET _prompt=%1

::Create the VBS script with an echo statement:
ECHO Wscript.Echo Inputbox("Enter %_prompt%","Input Required")&gt;%TEMP%\~input.vbs

:s_GetInput
:: Run the vbScript and save the output
FOR /f "delims=/" %%G IN ('cscript //nologo %TEMP%\~input.vbs') DO set _string=%%G

:: Delete the VBS file
DEL %TEMP%\~input.vbs

:: Display the result
SET _string
ENDLOCAL &amp; SET _input=%_string%
</pre>
<p class="quote"><i>“Everyone has an invisible sign hanging from their neck saying, Make me feel important. Never forget this message when working with people” ~ Mary Kay Ash</i></p>
<p><b>Related:</b></p>
<p><a href="msgbox.html">MsgBox</a> - Display a dialogue box message <br>
Equivalent PowerShell cmdlet: <a href="../ps/read-host.html">Read-Host</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="inputbox.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

