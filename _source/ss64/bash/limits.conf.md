---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>limits.conf - configuration file for the pam_limits module,</h1> 
<p><span class="code">/etc/security/limits.conf</span></p>
<p>The syntax of the lines:
</p>
<p class="code"><i>&lt;domain&gt; &lt;type&gt; &lt;item&gt; &lt;value&gt;</i>
</p>
<p>The fields listed above should be filled as follows:
</p>
<dl compact="compact">
<dt><b>&lt;domain&gt;</b>

</dt>
<dd>* A username
<p>* A groupname, with <b>@group</b> syntax. This should not be confused with netgroups.
</p>
<p>* The wildcard <b>*</b>, for default entry.
</p>
<p>*
The wildcard <b>%</b>, for maxlogins limit only, can also be used with <i>%group</i> syntax.
</p>
</dd><dt><b>&lt;type&gt;<br>
</b><br>
</dt><dt><b>hard</b>
</dt><dd>for enforcing <b>hard</b> resource limits. These limits are set by the superuser and enforced by the Kernel. The user cannot raise his requirement of system
resources above such values.
</dd><dt><b>soft</b>
</dt><dd>for enforcing <b>soft</b> resource limits. These limits are ones that the user can move up or down within the permitted range by any pre-exisiting
<b>hard</b> limits. The values specified with this token can be thought of as <i>default</i> values, for normal system usage.
</dd><dd><b>-</b>
<p>for enforcing both <b>soft</b> and <b>hard</b> resource limits together.
</p></dd>
<dt>Note, if you specify a type of '-' but neglect to supply the item and value fields then the module will never enforce any limits on the specified
user/group etc. <br>
<br>
</dt>
<dt><b>&lt;item&gt;</b>
</dt><dt>core
</dt><dd>limits the core file size (KB)
</dd><dt>data
</dt><dd>maximum data size (KB)
</dd><dt>fsize
</dt><dd>maximum filesize (KB)
</dd><dt>memlock
</dt><dd>maximum locked-in-memory address space (KB)
</dd><dt>nofile
</dt><dd>maximum number of open files
</dd><dt>rss
</dt><dd>maximum resident set size (KB)
</dd><dt>stack
</dt><dd>maximum stack size (KB)
</dd><dt>cpu
</dt><dd>maximum CPU time (minutes)
</dd><dt>nproc
</dt><dd>maximum number of processes as address space limit
</dd><dt>maxlogins
</dt><dd>maximum number of logins for this user
</dd><dt>maxsyslogins
</dt><dd>maximum number of logins on system
</dd><dt>priority
</dt><dd>the priority to run user process with (negative values boost process priority)
</dd><dt>locks
</dt><dd>maximum locked files (Linux 2.4 and higher)
</dd><dt>sigpending
</dt><dd>maximum number of pending signals (Linux 2.6 and higher)
</dd><dt>msqqueue
</dt><dd>maximum memory used by POSIX message queues (bytes) (Linux 2.6 and higher)
</dd><dt>nice
</dt><dd>maximum nice priority allowed to raise to (Linux 2.6.12 and higher)
</dd><dt>rtprio
</dt><dd>maximum realtime priority allowed for non-privileged processes (Linux 2.6.12 and higher)</dd></dl>
<p>In general, individual limits have priority over group limits, so if you impose no limits for <i>admin</i> group, but one of the members in this group have a limits line, the user will have its limits set according to this line.</p>
<p>Also, please note that all limit settings are set <i>per login</i>. They are not global, nor are they permanent; existing only for the duration of the
session.
</p><p>In the <i>limits</i> configuration file, the '<b>#</b>' character introduces a comment - after which the rest of the line is ignored.
</p><p>The pam_limits module does its best to report configuration problems found in its configuration file via <b>syslog</b>(3).
</p>
<h2>Examples</h2>
<p>Example lines which might be specified in <i>/etc/security/limits.conf</i>.
</p><dl compact="compact">
<dt>
<pre class="code">*               soft    core            0
*               hard    rss             10000
@student        hard    nproc           20
@faculty        soft    nproc           20
@faculty        hard    nproc           50
ftp             hard    nproc           0
@student        -       maxlogins</pre></dt></dl>
<p class="quote"><i># Feel the city breakin and everybody shakin, and we're stayin alive, stayin alive # ~ The Bee Gees </i></p>
<p><b>Related:</b></p>
<p><span class="code">/etc/security/limits.conf</span><br>
<a href="quota.html">quota</a> - Display disk usage and limits<br>
<a href="ulimit.html">ulimit</a> - 
Control the resources available to a process<br>
<a href="http://en.wikipedia.org/wiki/Fork_bomb">Fork bomb</a> - Wikipedia<br>
pam_limits(8), pam.d(5), pam(8)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

