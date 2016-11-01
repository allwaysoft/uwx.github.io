---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>op</h1> 
<p>Operator access. A flexible means for system administrators to grant trusted users access to certain root operations without having to give them full superuser privileges.</p>
<pre>Syntax 
      op <i>mnemonic</i> [arg] 

Key
    -V   Show version number.
   
    -l   List available commands.
         Note that this will only display commands you are permitted to run.
</pre>
<p><b> Configuration</b></p>
<p>Configuration entries are read from <span class="code">/etc/op.conf</span> and all files in lexical order from <span class="code">/etc/op.d</span> with the extension .conf. Files must be owned by root and not have group or other permissions set.</p>
<p>The fields of the entries in the configuration files are separated by white space. Each entry can span several lines and continues until the next alphanumeric string is found at the beginning of a lines (which is taken to be the next mnemonic or variable definition, and thus the beginning of a new entry). Comments can be embedded beginning with a # character. Each entry in the configuration files has the following form:</p>
<blockquote>
<p> <span class="code">mnemonic</span></p>
<p><span class="code"> command [ arg ... ] ; [ option ... ]</span></p>
<p>or</p>
<p><span class="code">var=value </span></p>
</blockquote>
<p>Key:<br>
<span class="code">var</span> a variable name, which must be an upper case alphanumeric identifier. Variables are expanded when reading options.</p>
<p><span class="code">value</span> the remainder of the line is taken to be the value of the variable.</p>
<p><span class="code">mnemonic</span> a unique, alphanumeric identifier for each operator function. </p>
<p><span class="code">command</span> the full pathname of the executable to be run by op when the associated mnemonic is chosen. </p>
<p><span class="code">arg(s) </span>any arguments, either literal or variable, needed by command. Literal arguments are simply specified directly, like specific command options (0Gun) or files (/dev/rmt20). Variable arguments are specified here as $1, $2 ... $n; <br>
For a full list look in the options section of the op man page( <span class="code">man op</span> ).</p>
<p> <span class="code">$*</span> indicates any number trailing arguments. </p>
<p><b>Examples</b><br>
Example /etc/op.conf:</p>
<blockquote>
<p> <span class="code"># Define some users<br>
OPERATORS=(fred|barry)<br>
# Define hosts that Fred is restricted to<br>
FRED_HOSTS=(alpha|beta)<br>
# Define hosts that Barry is restricted to<br>
BARRY_HOSTS=(theta|gamma)<br>
# Define user/host access list<br>
ACCESS_LIST=fred@FRED_HOSTS|barry@BARRY_HOSTS</span></p>
<p class="code"> # 'op shell' - gives user a root shell<br>
shell<br>
/bin/su -; <br>
users=ACCESS_LIST</p>
<p class="code"> environment</p>
<p class="code"> password <br>
help="Root shell"</p>
<p class="code"> # 'op reboot' - reboot system<br>
reboot<br>
/sbin/reboot; <br>
users=ACCESS_LIST</p>
<p class="code"> password <br>
help="Reboot system"</p>
<p class="code"> # 'op shutdown &lt;time&gt;' - shutdown at a<br>
# certain time. Restricts argument to<br>
# valid values only<br>
shutdown<br>
/sbin/shutdown -h $1;<br>
users=ACCESS_LIST<br>
$1=(now|[0-1]?[0-9]:[0-9][0-9]|2[0-3]:[0-5][0-9]|+[0-9]+)<br>
help="Shutdown system"</p>
<p class="code"> # Switch inetd on and off, shows complex<br>
# shell example and 'string' arguments. $1<br>
# in this example is expanded by op<br>
inetd /bin/sh -c '<br>
case $1 in<br>
on) /usr/sbin/inetd -s ;;<br>
off) /usr/bin/pkill inetd ;;<br>
esac<br>
';<br>
users=ACCESS_LIST<br>
$1=on|off </p>
</blockquote>
<p> <i class="quote">“He who reigns within himself, and rules passions, desires, and fears, is more than a king” ~ Milton </i><br>
<br>
<b> Related:</b></p>
<p><a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="sudo.html">sudo</a> - Execute a command as another user<br>
<a href="su.html">su</a> - Substitute user identity<br>
Equivalent Windows  command: <a href="../nt/runas.html">runas</a> - Execute a program under a different user account.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="op.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

