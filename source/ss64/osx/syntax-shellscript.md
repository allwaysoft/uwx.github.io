---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Run a bash shell script</h1>
<p>A shell script is an ASCII text file containing one or more commands.</p>
<p class="code">#!/bin/bash<br>
# My example bash script<br>
echo "Hello World"</p>
<p>The first line contains a <a href="http://en.wikipedia.org/wiki/Shebang_%28Unix%29">shebang</a><span class="code"> #!</span> followed by the path to the shell, in this case <span class="code">bash</span> - this acts as an interpreter directive and ensures that the script is executed under the correct shell.</p>
<p>The "#" character indicates a comment, so the shebang line is ignored by bash when running the script.</p>
<p>Next you need to make the script executable with <a href="chmod.html">chmod</a> </p>
<p class="code">$ chmod u+x my_shell_script.sh</p>
<p>You can now run the script by prefixing it with ./ </p>
<p class="code">$ ./my_shell_script.sh</p>
<p>If you get an error like <span class="code">"<i>#!/bin/bash: No such file or directory"</i></span>, that  is typically an indication that the File encoding or line endings are wrong, use an editor like VI or  <a href="http://www.barebones.com/products/textwrangler/">TextWrangler</a> (shows line encodings at the bottom of the edit window) the script file should be <span class="code">Unicode (UTF-8)</span> and <span class="code">Unix (LF)</span> line endings</p>
<p>If you will be writing a few shell scripts then it's worth creating a folder, perhaps called "scripts" and adding that to the system path: </p>
<p class="code">$ mkdir -p $HOME/scripts<br>
$ export PATH="$PATH:~/scripts"</p>
<p>Even  better is to edit your <span class="code">.bash_profile </span>file to include <span class="code">export PATH="$PATH:~/scripts"</span> that will keep the "scripts" folder in your path every time you log in.</p>
<p>With the script saved in the folder, you can now run it with just:</p>
<p class="code">$ my_shell_script.sh</p>
<p> <b>Related:</b>
</p><p><a href="exec.html">exec</a> - Execute a command<br>
<a href="syntax.html">OS X Syntax</a>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --></p><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-shellscript.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
