---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TITLE </h1> 
<p>Change the title displayed above the CMD window.</p>
<pre>Syntax 
      TITLE [<i>string</i>]

Key
   <i>string</i>   The title for the command prompt window, up to <a href="http://ss64.org/viewtopic.php?id=1621">243</a> characters.</pre>
<p>  The TITLE command is typically used in a batch file to give the script window a meaningful name.</p>
<p>The default title for the CMD shell is %comspec% however, since the title can  be re-defined in a program shortcut, the title is typically set to "Command Prompt".</p>
<p>In a batch file, you can set the title to match the name of the batch file with:<br>
<span class="code">TITLE <a href="syntax-args.html">%~</a>nx0</span></p>
<p>The <a href="start.html">START</a> command, used to start a program in a separate window also has an option to specify a title for the new Window.</p>
<p>If you call a batch script in a new CMD session, then any TITLE set within the batch file will revert when the second CMD session ends.</p>
<pre>  TITLE Some initial title text
  CMD /c MyBatchFile.cmd
  ...</pre>
<p>TITLE is an <a href="syntax-internal.html">internal</a> command.<br>
  <br>
  <i class="quote">"The longer the title, the less important the job" - George 
  McGovern.</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="mode.html">MODE</a> - change the size of the CMD window<br>
  <a href="color.html">COLOR</a> - change the colour of the CMD window<br>
  <a href="prompt.html">PROMPT</a> - change the CMD window prompt<br>
<a href="start.html">START</a> - start a program in a separate window<br>
QuickEdit mode - also changes the title (temporarily)<br>
Powershell: Set the <a href="http://blogs.msdn.com/b/powershell/archive/2006/07/21/setting--the-console-title-to-be-your-current-working-directory.aspx">console title </a> to current working dir (save in Profile.ps1 to make permanent)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="title.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

