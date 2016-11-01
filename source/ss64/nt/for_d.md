---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FOR /D</h1>
<p>Conditionally perform a command on several Directories/Folders.</p>
<pre>Syntax
      FOR <b>/D</b> [/r] %%<i>parameter</i> IN (<i>folder_set</i>) DO <i>command</i>

Key
   <i>folder_set</i>  : A set of one or more folders. Wildcards must be used.

   <i>command</i>     : The command to carry out, including any
                 command-line parameters.

   %%<i>parameter</i> : A replaceable <a href="syntax-args.html">parameter</a>:
                 in a batch file use %%G (on the command line %G)

   /r          : <a href="for_r.html">Recurse</a> into subfolders (see notes below)</pre>
<p>In all cases<span class="code"> for /d</span> will start searching from the <i>current</i> directory.</p>
<p>Unlike  other variants of the FOR command you must include a wildcard (either * or ?) in the '<span class="code">folder_set</span>' to get consistent results returned. In many cases you can work around this by adding a single character wildcard e.g. if you are looping through multiple folders to find the exact folder <span class="code">January</span> you could instead specify <span class="code">Janu?ry</span></p>
<p>If any path in the the <span class="code"><i>folder_set</i></span> includes spaces, then surround the  path with double quotes.</p>
<p>The  option  <span class="code">/d /r</span> is undocumented, but can be a useful combination, while it will recurse through all subfolders the wildcard will only match against Folder/Directory names (not filenames).</p>
<p>An alternative command  to list folders and sub folders matching a wildcard is  <a href="dir.html">DIR</a>:<br>
<span class="code">C:\&gt; dir /b /s /a:d "C:\Work\reports*"</span></p>
<p>Wrapping that in a <a href="for_f.html">FOR /f</a> command will loop through each folder: <br>
<span class="code">C:\&gt; for /f "tokens=*" %G in ('dir /b /s /a:d "C:\Work\reports*"') do echo Found %G</span></p>
<p>or the same thing within a batch file, with the %'s doubled: <br>
<span class="code"> for /f "tokens=*" %%G in ('dir /b /s /a:d "C:\Work\reports*"') do echo Found %%G</span></p>
<p><b>Example</b></p>
<p>  List every subfolder, below the  folder C:\Work\ that has a name starting with "User":<br>
  <br>
  <span class="code">C:\&gt; CD \Work <br>
  C:\&gt; FOR /D /r %G in ("User*") DO Echo We found  %G</span></p>
<p>FOR is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote">"I knew of one little DO loop that ran for 48 hours, cost $14,000 and did
  nothing" ~ 
  Balfour and Marwick</i><br>
  <br>
  <b>Related:</b><br>
  <a href="for.html"><br>
  FOR</a> - Loop commands<br>
  <a href="for2.html">FOR</a> - Loop through a set of files in one folder<br>
  <a href="for_r.html">FOR /R</a> - Loop through files (recurse subfolders)<a href="for_d.html"> 
  </a><br>
  <a href="for_l.html">FOR /L</a> - Loop through a range of numbers<br>
  <a href="for_f.html">FOR /F</a> - Loop through items in a text file<br>
  <a href="for_cmd.html">FOR /F</a> - Loop through the output of a command<br>
  <a href="forfiles.html">FORFILES</a> - Batch process multiple files<br>
  <a href="goto.html">GOTO</a> - Direct a batch program to jump to a labelled 
    line<br>
  <a href="if.html">IF</a> - Conditionally perform a command<br>
Powershell: <a href="../ps/foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
  Equivalent bash command (Linux):<a href="../bash/cut.html"> </a>
<a href="../bash/for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="for_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

