---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="for.html">FOR</a> /R</h1>
<p>Loop through files (Recurse subfolders)</p>
<pre>Syntax
      FOR <b>/R </b>[[<i>drive</i>:]<i>path</i>] %%<i>parameter</i> IN (<i>set</i>) DO <i>command</i>

Key
   <i>drive</i>:<i>path</i>  : The folder tree where the files are located.

   <i>set</i>         : A set of one or more files. Wildcards must be used.
                 If (set) is a period character (.) then FOR will
                 loop through every folder.

 <i>  command</i>     : The command(s) to carry out, including any
                 command-line parameters.

   %%<i>parameter</i> : A replaceable parameter:
                 in a batch file use %%G (on the command line %G)</pre>
<p>  This command walks down the folder tree starting at [drive:]path, 
  and executes the DO statement against each matching file.<br>
  <br>
If the [drive:]path are not specified they will default to the current drive:path.</p>
<p>Unlike some other variants of the FOR command you must include a wildcard (either * or ?) in the 'set' to get consistent results returned. In many cases you can work around this by adding a single character wildcard e.g. if you are looping through multiple folders to find the exact filename <span class="code">myfile.txt</span> you could instead specify <span class="code">myfile.t?t</span><br>
  <br>
  <b>Examples:</b></p>
<p>Delete every .bak file in every subfolder starting at C:\temp<br>
<span class="code">For /R C:\temp\ %%G IN (*.bak) do <b>Echo</b> del "%%G</span>"</p>
<p>A batch file to <a href="ren.html">rename</a> all .LOG files to .TXT in the 'demo' folder and all sub-folders:<span class="code"><br>
CD C:\demo\<br>
For /R %%G in (*.LOG) do <b>Echo</b> REN "%%G" "%~nG.TXT"</span></p>
<p> Remove the <b>echo</b> from these commands to run them for real </p>
<p>Change directory to each subfolder under C:\Work in turn:</p>
<p><span class="code">FOR /R "C:\Work\" %%G in (.) DO <b>(</b><br>
&nbsp;Pushd %%G<br>
&nbsp;Echo now in %%G<br>
&nbsp;Popd 
<b>)</b><br>
Echo "back home"</span></p>
<p>FOR is an <a href="syntax-internal.html">internal</a> command.<br>
  <span class="body"><br>
  </span><span class="quote"><i>“Just think how happy you would be if you lost everything you have right now, and then got it back again” - Frances Rodman</i></span></p>
<p><span class="body">  <b>Related:</b><br>
  <a href="for.html"><br>
  </a><a href="for.html">FOR</a> - Loop commands<br>
  <a href="for2.html">FOR</a> - Loop through a set of files in one folder <a href="for_d.html"><br>
  FOR /D</a> - Loop through several folders<br>
  <a href="for_l.html">FOR /L</a> - Loop through a range of numbers<br>
  <a href="for_f.html">FOR /F</a> - Loop through items in a text file<br>
  <a href="for_cmd.html">FOR /F</a> - Loop through the output of a command<br>
  <a href="forfiles.html">FORFILES</a> - Batch process multiple files<br>
  <a href="if.html">IF</a> - Conditionally perform a command<br>
Powershell: <a href="../ps/foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
  Equivalent bash command (Linux): <a href="../bash/for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var></span></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="for_r.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

