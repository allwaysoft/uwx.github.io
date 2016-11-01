---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Function</h1> 
<p>Define a function procedure.</p>
<pre>Syntax 
      [Public [Default] | Private ] Function <b><i>name</i></b>([<i>arg_List</i>]) 
         [<i>statements</i>]
         [<b><i>name</i></b>=<i>expression</i>]
         <a href="exit.html">Exit</a> Function
            [<i>statements</i>]
            [<b><i>name</i></b>=<i>expression</i>]
      End Function

Key
   Public          Extend the scope of this function to all procedures in the project.

   Public Default  Define a method as the default member of a class
                   (Only for public functions defined within a class.)

   Private         Restrict the scope of this function to procedures within the same module.

   <i>name</i>            The name of the function.
 
   <i>arg_List</i>        Argument variabless passed to the function, comma separated.
                   By default, each local variable=argument (<b>ByRef</b>)
                   To have each local variable=value of the argument prefix the 
                   argument with '<b>ByValue</b>'.

   <i>statements</i>      Program code

   <i>expression</i>      The value to return.
</pre>
<p>In VBScript, functions can be defined before or after the code that calls it. In many other languages (e.g. PowerShell) it is required to define the function before it is called, that has the advantage that the finished code can be read from top to bottom without having to jump up and down the page.</p>
<p>Examples</p>
<pre>Function DemoFunc(Arg1, ByRef Arg2)
    ' Return the two arguments in a single string
    DemoFunc = "First: " &amp; Arg1 &amp; " second: " &amp; Arg2
End Function

'Now call the function above
myDemo = DemoFunc("Hello","World")
wscript.echo myDemo</pre>
<p class="quote"><i>“The most important thing in an argument, next to being right, is to leave an escape hatch for your opponent, so that he can gracefully swing over to your side without too much apparent loss of face” ~ Sydney J. Harris </i></p>
<p><b>Related:</b></p>
<p><a href="sub.html">Sub</a> - Start a subprocedure<br>
<a href="syntax-ismember.html">IsMember.vbs</a> - <span class="body">Function to determine group membership</span><br>
Equivalent in PowerShell: <a href="../ps/syntax-functions.html">Functions</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

