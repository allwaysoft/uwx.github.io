---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>RunMacro</h1>
<p> Run an Access Macro from Access VBA.</p>
<pre>Syntax
      DoCmd.RunMacro(<i>MacroName, RepeatCount, RepeatExpression</i>)

Key
   <i>MacroName</i>    The name of a macro in the current database. 

   <i>RepeatCount</i>  The number of times to run the macro.

   <i>RepeatExpression</i>
                A numeric expression that's evaluated each
                time the macro runsM. When it evaluates to False(0),
                the macro will stop running.</pre>
<p> Use <i>macrogroupname.MacroName</i> syntax for the <i>MacroName</i> argument to run a particular macro in a macro group.</p>
<p><b>Examples</b></p>
<p>'run the macro mcrPrintAppointments <br>
<span class="code">DoCmd.RunMacro "mcrPrintAppointments"</span></p>
<p class="quote"><i>“Run rabbit – run rabbit – Run! Run! Run!” ~ Flanagan and Allen.</i></p>
<p><b>Related:</b></p>
<p>RunDataMacro - Run a named data macro.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="runmacro.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

