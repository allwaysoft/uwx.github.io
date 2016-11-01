---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Variables: extract part of a variable (substring)</h1>
<p>It is possible to  retrieve specific characters from a string variable.</p>
<pre>Syntax
      %variable:~<i>num_chars_to_skip</i>%
      %variable:~<i>num_chars_to_skip</i>,<i>num_chars_to_keep</i>%

This can include negative numbers:

      %variable:~<i>num_chars_to_skip</i>, <b>-</b><i>num_chars_to_keep</i>%
      %variable:~<b>-</b><i>num_chars_to_skip</i>,<i>num_chars_to_keep</i>%
      %variable:~<b>-</b><i>num_chars_to_skip</i>,<i><b>-</b>num_chars_to_keep</i>%</pre>
<p>A negative number will count backwards from the end of the string. </p>
<p> <b>Examples</b><br>
  <br>

The variable <b>_test</b> is used for all the following examples:</p>
<pre>SET _test=<span class="code">123456789abcdef0</span>

::Extract only the first 5 characters

 SET _result=%_test:~0,5%
 ECHO %_result%          =<span class="code">12345</span>

::Skip 7 characters and then extract the next 5

 SET _result=%_test:~7,5%
 ECHO %_result%          =<span class="code">89abc</span>

::Skip 7 characters and then extract everything else

 SET _result=%_test:~7%
 ECHO %_result%          =<span class="code">89abcdef0</span>

::Extract only the last 7 characters

 SET _result=%_test:~-7%
 ECHO %_result%          =<span class="code">abcdef0</span>

::Extract everything BUT the last 7 characters

 SET _result=%_test:~0,-7%
 ECHO %_result%          =<span class="code">123456789</span>

::Extract between 7 from the front and 5 from the end

 SET _result=%_test:~7,-5%
 ECHO %_result%          =<span class="code">89ab</span>

::Go back 7 from the end then extract 5 towards the end

 SET _result=%_test:~-7,5%
 ECHO %_result%          =<span class="code">abcde</span>

::Extract between 7 from the end and 5 from the end

   SET _result=%_test:~-7,-5%
   ECHO %_result%        =<span class="code">ab</span></pre>
<p>This variable substring syntax only works for CMD environment variables, like <tt>%MYVAR%</tt>, it will not work with FOR parameter variables, like <tt>%%G</tt>, however a simple workaround is to set a variable first: <tt>Set %MYVAR%=%%G</tt> and then find the substring of the new variable.</p>
<p>To discover if a given variable contains a given string: use the syntax above to remove the <i>_SearchString</i> and compare the result with the original variable before removal. If both strings are the same, then<i>_SearchString</i> was not found:</p>
<pre> <a href="if.html">IF /i</a> "%<i>_variable</i>:<i><b>_SearchString</b></i><b>=</b>%"=="%<i>_variable</i>%" (Echo String not found.) ELSE (Echo String found.) </pre>
<p>To match an exact word, pad the search string with spaces: " John " instead of "John" will avoid a match with "Johnstone"</p>
<p><b>Advanced Usage of :~</b><br><br>
You can use the :~ syntax and provide each of the parameters from other variables, for example if you have<br>
<br>
%_donor%=2539850<br>
%_digit%=4<br>
<br>
To extract digit # 4 from _donor you might try</p>
<pre> SET _substring=%_donor:~%_digit%,1%</pre>
<p> Unfortunately this will not work because the :~ syntax expects a value not a 
variable. To get around this use the CALL command like this:</p>
<pre>SET _startchar=2
SET _length=1
SET _donor=884777
CALL SET _substring=%%_donor:~%_startchar%,%_length%%%
ECHO (%_substring%) </pre>
<p>  :: Credits:<br>
  :: Clay Calvert - <a href="https://groups.google.com/forum/#!msg/alt.msdos.batch.nt/pcsZ7LcQCMM/3fxDMb8jNJIJ">alt.msdos.batch.nt</a> <br>
:: Ritchie Lawrence - <a href="https://groups.google.com/forum/#!topic/alt.msdos.batch.nt/7WIB4Fg81HE">alt.msdos.batch.nt</a></p>
<p class="quote"><i>#Substitute Me for him, Substitute My Coke for gin, Substitute You for my mum, At least I'll get my washing done# ~ The Who (Substitute)</i></p>
<p><b>Related:</b><br>
<br>
<a href="syntax-replace.html">VarSearch</a> - Search &amp; replace part of a variable.<br>
<a href="syntax-strlen.html">strlen.cmd</a> - Get string length.</p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

