---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1># comment</h1>
<p>In PowerShell single line comments start with a hash symbol, everything to the right of the # will be ignored.</p>
<p><span class="code"># <i>comment</i></span></p>
<p>In PowerShell 2.0 and above multi-line block comments can be used:</p>
<p><span class="code">&lt;# <i>comment</i> #&gt; </span></p>
<p> Multi-line comments are typically used to  add descriptive help at the start of a script, but also work to embed comment text within a command.</p>
<p><b>Examples</b></p>
<p class="code">Copy-Item demo.msi C:\install\demo.msi #copy the installer</p>
<pre>&lt;#
   Running this script will make your computer catch fire!
   Last updated: 1666-09-02
#&gt;

<span class="code">Get-Content -Path &lt;#configuration file#&gt; C:\app64.ini</span>
</pre>
<p> By using embedded comments you can  document the arguments for a cmdlet:<span class="code"><br>
</span></p>
<pre>PS C:\&gt; Get-ChildItem    &lt;# list the items               #&gt; `
    -Path   $env:windir  &lt;# of the Windows system folder #&gt; `
    -Filter *.dll        &lt;# that are DLLs                #&gt; `
    -Recurse             &lt;# and search all subfolders    #&gt;</pre>
<h2>Copy and Paste</h2>
<p> Because PowerShell supports <a href="syntax-tab-completion.html">Tab Completion</a> you need to be careful about copying and pasting Space + TAB characters (which most often sneak in before comments).</p>
<p>Example:</p>
<p class="code">Function demo() { <br>
}  # comment</p>
<p>^ That line is <span class="code">}&lt;space&gt;&lt;tab&gt; #</span> <br>
when copied/pasted onto the PowerShell command line:</p>
<p><span class="code">PS C:\batch&gt; Function demo() { <br>
  &gt;&gt; } .\aaardvaark.cmd# comment <br>
  &gt;&gt; <br>
  The term '.\aaardvaark.cmd#' is not recognized as the name of a cmdlet, function, script file...</span><br>
  <br>
  What is happening is that the space-tab gets expanded to match the first file in the current directory, in this case aaardvaark.cmd. If the sequence had been <span class="code">&lt;space&gt;&lt;tab&gt;&lt;space&gt;</span> and the first file had been a PowerShell script or an executable then it would actually be run.</p>
<p>If your white space consists of nothing but <span class="code">&lt;space&gt;</span> characters (or nothing but <span class="code">&lt;tab&gt;</span> characters) then this will never occur.</p>
<p class="quote"><i>#Now stand in the place where you work, Now face West<br>
Think about the place where you live, Wonder why you haven't before# - REM 'Stand' </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-esc.html">Escape characters</a> - double \\ to escape them </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-comments.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

