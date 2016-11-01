---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem -->
<h1>fuser</h1> 
<p>List process IDs of all processes that have one or more files        open.</p>
<pre>Syntax
      fuser [ -cfu ] file ...

Options:
       -c     The file is treated as a  mount  point  and  the  utility  shall
              report on any files open in the file system.

       -f     The report shall be only for the named files.

       -u     The  user  name, in parentheses, associated with each process ID
              written to standard output shall be written to standard error.

       <i>file</i>   A pathname on which the file or file system is to be reported.</pre>
<p>The fuser utility  writes to standard output  the  process  IDs  of        processes running on the local system that have one or more named files        open. For block special devices, all processes using any file  on  that        device are listed.        </p>
<p>The  fuser utility  writes to standard error additional information        about the named files indicating how the file is being used.        Any output for processes running on remote systems that  have  a  named        file open is unspecified.        </p>
<p>A user may need appropriate privilege to invoke  fuser.</p>
<p><b>Examples</b></p>
<p>writes  to  standard output the process IDs of processes that are using        the current directory and writes to standard error an indication of how        those  processes  are using the directory and the user names associated        with the processes that are using the current directory.:<br>
<span class="code">$ 
fuser -fu .</span></p>
<p>List the process (or processes) that are locking a file, preventing the trash from being emptied:<br>
<span class="code">$ 
fuser -f <i>drag_file_here_from_finder</i></span></p>
<p class="quote"><i>"A bank is a place where they lend you an umbrella in fair weather and ask for it back  when it begins to rain" ~ Robert Frost</i></p>
<p><b>Related:</b></p>
<p><a href="fs_usage.html">fs_usage</a> - Filesystem usage (process/pathname)<br>
<a href="ps.html">ps</a> - List running processes (returns PID)<br>
<a href="kill.html">kill</a> - Stop a process from running<br>
<a href="killall.html">killall</a> - Kill processes by name<br>
<a href="lsof.html">lsof</a> - List open files<br>
<a href="top.html">top</a> - display Linux tasks <br>
Equivalent Windows command: <a href="../nt/openfiles.html">OPENFILES</a> - List or disconnect open files</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fuser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
