---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Bash startup files in OS X</h1>
<p>From the bash man page:</p>
<blockquote>
<p>When bash is invoked as an interactive login shell, or as a non-interactive shell with the --login option, it first reads and executes commands from the file <span class="code">/etc/profile</span>, if that file exists. After reading that file, it looks for <span class="code">~/.bash_profile</span>, <span class="code">~/.bash_login</span>, and <span class="code">~/.profile</span>, in that order, and reads and executes commands from the first one that exists and is readable. The --noprofile option may be used when the shell is started to inhibit this behavior.</p>
<p> When an interactive shell that is not a login shell is started, bash reads and executes commands from <span class="code">~/.bashrc</span>, if that file exists. This may be inhibited by using the --norc option. The --rcfile file option will force bash to read and execute commands from file instead of ~/.bashrc.</p>
</blockquote>
<p>Mac OS X is unusual in that it runs each terminal session as a login shell, most other versions of unix, linux and many GUI terminal emulators do not run as login shells.</p>
<p>Commands you will typically want to include in .bashrc include: <a href="history.html">history variables</a> to increase the history available and <a href="bind.html">bind keymappings</a>.</p>
<p>If you want to put startup PATH and common settings in<span class="code"> ~/.bashrc</span> either because you have a GUI terminal, or just to be consistent with other OS's, then  source (load) .bashrc from  .bash_profile by  adding the <a href="http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html">following lines</a> to .bash_profile:</p>
<p class="code"> if [ -f ~/.bashrc ]; then<br>
source ~/.bashrc<br>
fi</p>
<p>Now when you login to your machine from a console <span class="code">.bashrc</span> will be called.</p>
<p>The alternative is simply to put everything into <span class="code">.bash_profile</span> if you are only running the OS X terminal then every new window/tab that you open will load <span class="code">.bash_profile</span></p>
<p>On a brand new user account, none of these files will exist, they can be created with any suitable text editor (BBedit/Text Wrangler) that is capable of creating plain text files with unix style (LF) line endings. Save them into your home folder (<span class="code">~/</span>) </p>
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
</p><p><a href="http://dotfiles.org/.bashrc">dotfiles.org/.bashrc</a><br>
<a href="http://dotfiles.org/.bash_aliases">dotfiles.org/.bash_aliases</a><br>
<a href="http://hayne.net/MacDev/Bash/aliases.bash">Hanye</a> - 
example  .bash_aliases<br>
<a href="https://github.com/gioele/bashrc_dispatch">bashrc_dispatch</a> - use symlinks to reorganise .bashrc, .bash_profile and .profile<br>
<a href="alias.html">alias</a> - Create an alias<br>
  <a href="syntax.html">OS X Syntax</a><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --></p><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-bashrc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
