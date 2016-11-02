---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>RunCommand</h1>
<p> Run an Access menu or toolbar command.</p>
<pre>Syntax
      <i>expression</i> .RunCommand(<i><a href="syntax-runcommands.html">Command</a></i>)

Key
   <i>expression  </i>A variable that represents a built-in command.</pre>
<p>The RunCommand method runs the specified menu command. If the menu brings up a dialog box, the dialog box appears.<br>
In many cases a DoCmd method will offer better automation with no user input required e.g. <span class="code">RunCommand acCmdPrint</span> vs <span class="code">DoCmd.PrintOut acSelection</span></p>
<p>Newer versions of Microsoft Access support a larger set of RunCommand constants corresponding to new Access features. </p>
<p><span class="code">RunCommand</span>  replaces the <span class="code">DoCmd.DoMenuItem</span> method from Access 2.0, <span class="code">DoMenuItem</span> is still provided for backwards compatibility only.</p>
<p>To save the current record, the preferred syntax is</p>
<p> <span class="code">If Me.Dirty = True Then Me.Dirty = False </span><br>
or <br>
<span class="code">If Me.Dirty Then Me.Dirty = False</span></p>
<p>Which means "if the record has changes that can be saved, then save them." Setting the me.dirty property will work even if the form does not have focus, so it is slightly more robust than calling the menu command <span class="code">acCmdSaveRecord</span>.</p>
<p><b>Examples</b></p>
<p class="code">Application.RunCommand CmdUndo</p>
<p class="code">RunCommand acCmdSelectRecord</p>
<p class="code">RunCommand acCmdPrint</p>
<p>Example function that launches the <span class="code">Tools | Options</span> dialog box:</p>
<pre>Function OpenOptionsDialog() As Boolean
   On Error GoTo Error_OpenOptionsDialog
   <b>DoCmd.RunCommand Options</b>
   OpenOptionsDialog = True</pre>
<pre>Exit_OpenOptionsDialog:
   Exit Function</pre>
<pre>Error_OpenOptionsDialog:
  MsgBox Err &amp; ": " &amp; Err.Description
  OpenOptionsDialog = False
  Resume Exit_OpenOptionsDialog
End Function</pre>
<p class="quote"><i>“You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving” ~ Anatole France</i></p>
<p><b>Related:</b><br>
<br>
<a href="syntax-runcommands.html">AccessRunCommands</a> - List of all the Access run commands </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="runcommand.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

