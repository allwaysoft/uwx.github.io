---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Bash startup files</h1> 
<p><span class="code">~/.bashrc</span></p>
<p>From the bash man page:</p>
<blockquote>
<p>When bash is invoked as an interactive login shell, or as a non-interactive shell with the --login option, it first reads and executes commands from the file <span class="code">/etc/profile</span>, if that file exists. After reading that file, it looks for <span class="code">~/.bash_profile</span>, <span class="code">~/.bash_login</span>, and <span class="code">~/.profile</span>, in that order, and reads and executes commands from the first one that exists and is readable. The --noprofile option can be used when the shell is started to inhibit this behavior.</p>
<p> When an interactive shell that is not a login shell is started, bash reads and executes commands from <span class="code">~/.bashrc</span>, if that file exists. This can be inhibited by using the --norc option. The <span class="code">--rcfile <i>file</i></span> option will force bash to read and execute commands from <span class="code"><i>file</i></span> instead of <span class="code">~/.bashrc</span></p>
</blockquote>
<p>Every new terminal window/tab that you open will load <span class="code">.bashrc</span> </p>
<p>On a brand new user account, none of these files will exist, they can be created with any suitable text editor that is capable of creating plain text files with unix style (LF) line endings. Save them into your home folder (<span class="code">~/</span>) </p>
<p>Commands you will typically want to include in .bashrc include: <a href="history.html">history variables</a> to increase the history available and <a href="bind.html">bind keymappings</a>.</p>
<h2>Sourcing files</h2>
<blockquote>
<p>If you have a lot of  shell configurations, you may want to split them out into several subfiles and use the <a href="source.html">source</a> builtin  to load them from .bashrc:<br>
<span class="code">source ~/.bash-options <br>
source ~/.bash-aliases <br>
source ~/.bash-functions</span></p>
<p>Alternatively, to ensure the files actually exist before loading</p>
<p><span class="code">if [ <a href="syntax-file-operators.html">-f</a> ~/.bash-aliases ]; then<br>
. ~/.bash-aliases<br>
fi</span></p>
<p>The command<span class="code"> . ~/.bash-aliases</span> will <a href="source.html">source</a> ~/.bash-aliases in the context of the currently running shell.</p>
<p>This is particularly useful for adding <a href="alias.html">aliases,</a> the  separate file makes it easier to re-load them when you make changes.</p>
</blockquote>
<p> <b>Related:</b>
</p><p><a href="syntax-prompt.html">bash prompt</a> - PS1<br>
<a href="https://github.com/gioele/bashrc_dispatch">bashrc_dispatch</a> - use symlinks to reorganise .bashrc, .bash_profile and .profile  <br>
<a href="syntax-inputrc.html">.inputrc</a> - Startup files (Set Key bindings and Tab completion)<br>
<a href="http://dotfiles.org/.bashrc">dotfiles.org/.bashrc</a><br>
<a href="http://dotfiles.org/.bash_aliases">dotfiles.org/.bash_aliases</a><br>
<a href="https://github.com/tejr/dotfiles/blob/master/bash/bashrc">bashrc example</a> - Tom Ryder<br>
<a href="alias.html">alias</a> - Create an alias
<!-- #BeginLibraryItem "/Library/foot_bash.lbi" --></p><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-bashrc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
