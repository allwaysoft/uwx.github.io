---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Hybrid Batch and VBscript</h1> 
<p> If you need to run both a batch file and a VBScript, the most simple method is to have, two separate files and <a href="syntax-run.html">run one from another</a>, but that does require both the scripts to be in the same folder (or in some known location)</p>
<p>A hybrid script is a single script containing both batch commands and VBscript commands, the way this normally works is to use redirection to create a temporary vbscript file.</p>
<p>For example to generate a one line VBScript containing <span class="code">wscript.echo "Hello world"</span>, you can do<br>
<span class="code"><b>Echo  </b>wscript.echo "Hello world" <b>&gt; %temp%\~hi.vbs</b><br>
cscript //nologo %temp%\~hi.vbs
</span></p>
<p>The variable <span class="code">%temp%</span> will expand to the users temporary files folder.</p>
<p>Writing  longer hybrid scripts can involve a lot of Echo and redirection commands, one for every line, so there are several techniques which can be used to make this less verbose, using variables to hold the repeated commands/options, or as below using a comment (<span class="code">'VBS</span>) at the end of every VBScript line and then using Findstr to extract the VBScript. <br>
The expression <span class="code">%~f0</span> resolves to the full path of the batch file, so this allows the script to search itself:</p>
<pre>@Echo off
Setlocal
Echo This is a Batch file
FINDSTR /E "<b>'VBS</b>" "%~f0 &gt;%temp%\~temp.vbs
cscript //nologo %temp%\~temp.vbs
Del %temp%\~temp.vbs
Echo All Done.
EXIT

Sub Demo <b>'VBS</b>
   wscript.echo "Welcome to VBScript" <b>'VBS</b>
End Sub <b>'VBS</b>

demo <b>'VBS</b>
wscript.quit 0 <b>'VBS</b></pre>
<p><span class="quote">“I've actually made a prediction that within 30 years a majority of new cars made in the United States will be electric. And I don't mean hybrid, I mean fully electric” ~ Elon Musk</span></p>
<p><b>Related</b></p>
<p> <a href="http://stackoverflow.com/questions/9074476/is-it-possible-to-embed-and-execute-vbscript-within-a-batch-file-without-using-a">Hybrid scripts <i>without</i> a temporary file</a> - StackOverflow<br>
<a href="syntax-run.html">Run a script from VBScript</a><br>
<a href="../ps/syntax-run.html">Run a script from PowerShell </a><br>
<a href="../nt/syntax-run.html">Run a script from the CMD shell</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-hybrid.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

