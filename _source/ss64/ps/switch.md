---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Switch</h1> 
<p>Handle multiple if statements</p>
<pre>Brief Syntax

      Switch ($<i>item</i>)
      {
       <i>value</i> { <i>expression</i> }
       <i>value</i> { <i>expression</i> }
      }

Full Syntax

      Switch [ -regex | -wildcard | -exact ] [-casesensitive ] ( <b><i>pipeline</i></b> )
      { 
        "<i>string</i>"|<i>number</i>|<i>variable</i>| { <i>expression</i> } { <i>statementlist</i> }
        default { <i>statementlist</i> } 
      }

      Switch [ -regex | -wildcard | -exact ] [-casesensitive ] <b>-file <i>filename</i></b>
      { 
        "<i>string</i>" | <i>number</i> | <i>variable </i>| { <i>expression</i> } { <i>statementlist</i> }
        default { <i>statementlist</i> } 
      }
Key

   <b>-r</b>egex       Treat the match clause, if a string, as a <a href="syntax-regex.html">Regex</a>.

   <b>-w</b>ildcard    Treat the match clause, if a string, as a wildcard string
                Wildcard characters:
                    ?   = Any single unspecified character.
                    *   = Zero or more unspecified chars.
                  [a-b] = Any character in the range a-b
                  [ab]  = The specified characters.
                The wildcard match is case in-sensitive 

   <b>-e</b>xact       Match strings exactly (disable wildcards)

 <b>-c</b>asesensitive Modify the match clause, if a string, to be case sensitive

   <b>-f</b>ile        Take input from a file (or representative)</pre>
<p>
  The switch options can be given in abbreviated format using the first letter, so <span class="code">-e</span> is equivalent to <span class="code">-exact</span></p>
<p>The keyword <span class="code">break</span> indicates that no more processing will occur and the switch statement will exit. </p>
<p> The keyword <span class="code">continue</span> indicates that no processing will continue against the current token and the next token in the conditional will be evaluated. If no tokens are available, the switch statement will exit.</p>
<p>If <b><i>pipeline</i></b> results in an array, each element of the array will be evaluated in ascending offset order (starting at 0). At least one element must be present that meets at least one condition or an error will result.</p>
<p><b>Examples</b></p>
<p>Compare a string, this is effectively just a string of IF statements:</p>
<pre> PS&gt; $my_variable = "ss64"
 PS&gt; switch ($my_variable){
     ss61 {"First result"; break}
     ss62 {"Second"; break}
     ss63 {"Third"; break}
     ss64 {"Fourth"; break}
     ss65 {"Fifth"; break}
     default {"Something else happened"; break}
     }</pre>
<p>The break at the end of each condition tells the switch to stop looking further, if you omit this, the switch statement can match more than one clause and perform more than one action.</p>
<p class="quote"><i>"History teaches us that men and nations behave
wisely once they have exhausted all other
alternatives" ~ Abba Eban </i></p>
<p><b>Related:</b></p>
<p>  <a href="break.html">Break statement </a><br>
<a href="continue.html">Continue statement</a><br>

<a href="foreach-object.html">ForEach-Object</a> - (foreach) Loop for each object in the pipeline<br>
<a href="foreach.html">ForEach</a> - Loop through values in the pipeline<br> 
<a href="for.html">For</a> - Loop through items that match a condition<br>
<a href="if.html">IF</a> - Conditionally perform a command<br>
<a href="while.html">While</a> - Loop while a condition is True</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="switch.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

