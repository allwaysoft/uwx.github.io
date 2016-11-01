---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.AddMenu</h1>
<p>  Add a custom menu bar/shortcut bar.</p>
<pre>Syntax
      DoCmd.AddMenu(<i>MenuName</i>, <i>MenuMacroName</i>, <i>StatusBarText</i>)

Key
   <i>MenuName</i>       The name of a drop-down menu to add to the
                  custom menu bar or global menu bar. (string)
                  To create an <u>a</u>ccess key so that you can use the
                  keyboard to choose the menu, type an ampersand (&amp;)
                  before the letter you want to be the access key.

   <i>MenuMacroName</i>  Name of the macro group that contains the macros
                  for the menu's commands. This is a required argument.

   <i>StatusBarText</i>  Text to display in the status bar when the menu is selected.</pre>
<p>Use AddMenu action to create:</p>
<ul>
<li> A custom menu bar for a form or report. This will replace the built-in menu bar for the form or report.</li>
<li> A custom shortcut menu for a form, form control, or report. This will replace the built-in shortcut menu for the form, form control, or report.</li>
<li> A global menu bar. This will replace the built-in menu bar for all Microsoft Access windows, except where a custom menu bar for a form or report has been added.</li>
<li> A global shortcut menu. This replaces the built-in shortcut menu for fields in table and query datasheets, forms in Form view, Datasheet view, and Print Preview, and reports in Print Preview, except where a custom shortcut menu for a form, form control, or report has been added.</li>
</ul>
<p>menuname and menumacroname are required for custom menu bars and global menu bars. </p>
<p>The menuname argument is not required and will be ignored for custom shortcut menus and global shortcut menus.</p>
<p>The statusbartext argument is optional, this argument is ignored for custom shortcut menus and global shortcut menus.</p>
<p><b>Example</b></p>
<p class="code">DoCmd.AddMenu, "CustomMenu1", mcrMenu1 </p>
<p class="quote"><i>“One of the main causes of the fall of the Roman Empire was that, lacking zero, they had no way to indicate successful termination of their C programs” ~ Robert Firt</i></p>
<p><b>Related:</b></p>
<p>.<a href="runcommand.html">DoMenuItem</a> (DoCmd) - Display a menu or toolbar command.<br>
<a href="runcommand.html">.RunCommand</a> (DoCmd) - Run an Access menu or toolbar command.<br>
SetMenuItem (DoCmd) - Set the state of menubar items (enabled /checked)</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="addmenu.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

