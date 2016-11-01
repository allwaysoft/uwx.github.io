---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Variable Edit/Replace</h1>
<p>Use the syntax below to edit and replace the characters assigned to a string 
  variable.</p>
<pre>Syntax
      %<i>variable</i>:<i>StrToFind</i>=<i>NewStr</i>%

      %~[<i>param_ext</i>]$<i>variable</i>:<i>Param</i>

Key
   StrToFind    : The characters we are looking for
   NewStr       : The chars to replace with (if any)
   variable     : The environment variable
   param_ext    : Any filename <a href="syntax-args.html">Parameter Extension</a>
   Param        : A command line parameter (e.g. 1)</pre>
<p>This Edit/Replace syntax can be used anywhere that you would use the <span class="code">%variable%</span> such as ECHOing the variable to screen or setting one variable = another</p>
<p>param_ext cannot be<span class="code"> %* </span>which typically represents a whole set of parameters, but this is easily worked around by setting a variable<span class="code">=%*</span><br>
  <br>
"StrToFind" can <b>begin</b> with an asterisk, in which case it will replace 
  all characters to the left of "StrToFind". <br>
  By leaving <span class="code">NewStr</span> blank, you can  delete characters.<br>
  <br>
  Using both an asterisk and <span class="code">NewStr=null</span> effectively provides a left$() or right$() function.<br>
  <br>
<b>Examples:<br>
</b>The variable <span class="code">_test</span> containing <span class="code">12345abcabc</span> is
used for all the following examples: </p>
<pre>::Replace '12345' with 'Hello '
   SET _test=<span class="code">12345abcabc</span>
   SET _result=%_test:12345=Hello %
   ECHO %_result%          =<span class="code">Hello abcabc</span>

::Replace the character string 'ab' with 'xy'
   SET _test=<span class="code">12345abcabc</span>
   SET _result=%_test:ab=xy%
   ECHO %_result%          =<span class="code">12345xycxyc</span>

::Delete the character string 'ab'
   SET _test=<span class="code">12345abcabc</span>
   SET _result=%_test:ab=%
   ECHO %_result%          =<span class="code">12345cc</span>

::Delete the character string 'ab' and everything before it
   SET _test=<span class="code">12345abcabc</span>
   SET _result=%_test:*ab=% 
   ECHO %_result%          =<span class="code">cabc</span>

::Replace the character string 'ab' and everything before it with 'XY'
   SET _test=<span class="code">12345abcabc</span>
   SET _result=%_test:*ab=XY% 
   ECHO %_result%          =<span class="code">XYcabc</span>


:: To remove characters from the right hand side of a string is 
:: a two step process and requires the use of a <a href="call.html">CALL</a> statement
:: e.g.

   SET _test=<span class="code">The quick brown fox jumps over the lazy dog</span>

   :: To delete everything <i>after</i> the string 'brown'  
   :: first delete 'brown' and everything before it
   SET _endbit=%_test:<span class="code">*brown</span>=%
   Echo We dont want: [%_endbit%]

   ::Now remove this from the original string
   CALL SET _result=<b>%%</b>_test:%_endbit%=<b>%%</b>
   echo %_result% </pre>
<p>  <b>Remove spaces from a text string</b><br>
  <br>
  To delete  space characters use the same syntax as above:<br>
  <br>
  <span class="code">SET _no_spaces=%_some_var: =%</span><br>
  <br>
  <b>Boolean Test "does string exist ?"</b><br>
  <br>
  To test for the existence of a value we can use a temporary variable, delete the string we are looking for (if it exists) and then compare the two variables with <a href="if.html">EQU</a><br>
  <br>

  Example: test for the existence of the string "<span class="code">London</span>" 
  in a variable containing text (that could be in any order)  "<span class="code">Aberdeen, London, Edinburgh</span>"<br>
  <br>
  <span class="code">Set _cities="Aberdeen, London, Edinburgh"<br>

</span>
<span class="code">:: Remove London if found<br>
Set _dummy=%_cities:London=%<br>
IF NOT %_dummy% == %_cities% (ECHO London was found.) ELSE (ECHO London was not found.)</span><br>
  <br>
  <b>Finding items within the PATH environment variable</b><br>
  <br>
  The %PATH% variable contains a list of folder names.<br>
  <br>
  If you have a parameter containing a valid 'folder' this can be compared with 
  the PATH variable.<br>
  <br>
  This is done using the syntax: 
  $variable:parameter <br>
  <br>
Example</p>
<p>  %PATH% =
  <span class="code">C:\Windows\system32;C:\Windows;C:\utils\jdk\bin</span><br>
  batch parameter %1 =
  <span class="code">C:\utils\jdk\bin</span><br>
  <br>
  To get the drive and Path<br>
  <span class="code">ECHO %~dp$PATH:1</span><br>
  This will either return "C:\utils\jdk\bin" or a NULL if the item is 
  not found in the  %PATH%<br>
  <br>
  If the batch parameter was supplied as %2 then this would be:
  <span class="code">ECHO %~dp$PATH:2</span><br>
  <br>
This syntax can be applied where: </p>
<ul>
  <li> 
    <p>The parameter is any valid parameter (%1 %2 %G) but it must contain a Full 
      <a href="path.html">Path</a> (not a pathname)</p>
  </li>
  <li> 
    <p>The variable is %PATH% or any other variable that contains one or more 
      Paths or pathnames separated by semicolons ;</p>
  </li>
  <li> 
    <p>If nothing is found by the search, then this will return an empty string 
      (NULL)</p>
  </li>
</ul>
<p>Be wary of using the syntax on this page to <b>modify</b> the PATH - the User path can be edited, but the System path remains read-only for most 
users.</p>
<p><i class="quote">“A phony smile will never replace honest integrity” ~ Bob Martinelli </i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="syntax-substring.html">SUBSTRING</a> of a variable :~<br>
  <a href="syntax-args.html">PARAMETERS</a> - Filename Parameter Extensions.<br>
<a href="syntax-strlen.html">strlen.cmd</a> - Get string length.<br>
  PATHMAN - This Resource Kit utility allows quick modification of both the system 
  and user paths. Pathman can resolve many problems such as duplicate characters, 
  and can improve performance by removing duplicate paths. For details see Pathman.wri 
in the resource kit.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-replace.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

