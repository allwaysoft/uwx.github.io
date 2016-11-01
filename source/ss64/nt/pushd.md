---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PUSHD</h1> 
<p> Change the current directory/folder and store the previous folder/path 
  for use by the <a href="popd.html">POPD</a> command.</p>
<pre>Syntax
      PUSHD [<i>drive</i>]<i>path</i>

      PUSHD

Key
   drive  The drive to switch to
   <i>path</i>   The folder to make 'current' (UNC names accepted)</pre>
<p>If the <span class="code">drive</span> is not specified, the current drive will be assumed.<br>
If neither <span class="code">drive</span> nor <span class="code">path</span> are specified PUSHD will just display a list of previous pathnames, you can switch back to any of these by using <a href="popd.html">POPD</a> one or more times.<br>
The number of pushed directories can be displayed on the command line with <a href="prompt.html"><span class="code">PROMPT $+</span></a><br>
If the path specified does not exist, PUSHD will return %errorlevel% =1
</p>
<h2>Run as Admin</h2>
<blockquote>
<p>When a batch script is  '<a href="syntax-elevate.html">Run as Admin</a>', the current directory will be  set to <span class="code">C:\windows\system32\</span>. <br>
  Using the following pushd command at the start of the script
will restore the normal current directory.</p>
<p>This works by setting the current directory to the location of the batch script, using the %0 <a href="syntax-args.html">parameter</a><br>
  <br>
<span class="code">pushd "%~dp0"</span></p>
</blockquote>
<h2>UNC Network paths</h2>
<blockquote>
<p>  When a UNC <span class="code">path</span> is specified, PUSHD will create a temporary drive map and will then use that new drive. <br>
  The temporary drive letters are allocated in reverse alphabetical order, so if <span class="code">Z:</span> is free it will be used first.</p>
</blockquote>
<h2>Errorlevels</h2>
<blockquote>
<p>Current directory was changed = 0<br>
Directory does not exist or is not accessible or bad switch given = 1</p>
</blockquote>
<p><b>Examples</b></p>
<pre><b>C:\demo&gt;</b> pushd \work 
<b>C:\work&gt; </b>popd<br><b>C:\demo&gt;</b> pushd "F:\monthly reports"
<b>F:\monthly reports&gt; </b>popd<br><b>C:\demo&gt;</b>
</pre>
<p>  PUSHD is an <a href="syntax-internal.html">internal</a> command. If <a href="cmd.html">Command Extensions</a> are disabled the PUSHD command 
  will not accept a network (UNC) path.</p>
<p class="quote"><i>#Ah, push it - push it good<br>
Ah, push it - p-push it real good# ~ Salt 'N' Pepa</i></p>
<p>  <b>Related:</b></p>
<p>  <a href="cd.html">CD</a> - Change directory<br>
<a href="cmd.html">CMD</a> - UNC  options <br>
<a href="prompt.html">PROMPT</a> - Display the level of the PUSHD stack (<span class="code">$+</span>) <br>
Powershell: 
<a href="../ps/push-location.html">Push-Location</a> - Push a location to the stack (pushd) <br>
Powershell:<a href="../ps/syntax-cd.html"> cd -</a> Jump to the previous working directory<br>
Equivalent bash command (Linux):<a href="../bash/pushd.html"> pushd</a> - Save and then change the current directory</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pushd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
