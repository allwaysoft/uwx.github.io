---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.ClearMacroError</h1>
<p> Remove information about an error that is stored in the MacroError object. (Access 2010) </p>
<pre>Syntax
      DoCmd.ClearMacroError
</pre>
<p> If the OnError action has been used to suppress error messages, you can use the information stored in the MacroError object in a condition or a custom error message.</p>
<p>By default, when an error occurs in a macro, information about the error is stored in the MacroError object, the macro stops and the error information is displayed in a standard error message.</p>
<p>After an error has been handled, the information in the MacroError object is out of date, so it is a good idea to clear the object (error no, description, macro name, action name, condition, and arguments) using the ClearMacroError action. </p>
<p><b>Example</b></p>
<p class="code">Docmd.ClearMacroError</p>
<p class="quote"><i>“Always assume incompetence before looking for conspiracy” ~ Niccolo Machiavelli</i></p>
<p><b>Related:</b></p>
<p>OnError macro action</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="clearmacroerror.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

