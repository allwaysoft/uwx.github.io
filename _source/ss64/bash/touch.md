---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>touch</h1> 
<p>Change file timestamps, change the access and/or modification 
times of the specified files.</p>
<pre>Syntax
      touch [<i>options</i>]... <i>File</i>...

Options

-a
--time=atime
--time=access
--time=use
     Change the access time only.

-c
--no-create
     Do not create files that do not exist.

-d
--date=<i>time</i>
     Use <i>time</i> instead of the current time.  It can contain month names,
     timezones, `am' and `pm', etc.

-f   Ignored; for compatibility with BSD versions of `touch'.

-m
--time=mtime
--time=modify
     Change the modification time only.

-r <i>FILE</i>
--reference=<i>FILE</i>
     Use the times of the reference <i>FILE</i> instead of the current time.

-t [[CC]YY]MMDDhhmm[.ss]
     Set to a specific time.</pre>
<p>The -t  argument will accept four-digit or two-digit years, specifying the seconds is  optional. If no digits of the year are specified, the argument is
interpreted as a date in the current year. </p>
<p>If two-digit year is specified, then CC
is 20 for years in the range 0 ... 68, and 19 for year in 69 ...
99.  </p>
<p>If the first <i>FILE</i> would be a valid argument to the `-t' 
  option and no timestamp is given with any of the `-d', `-r', or `-t' options 
  and the `--' argument is not given, that argument is interpreted as the time 
  for the other files instead of as a file name. </p>
<p>Any <i>FILE</i> that does not exist is created empty. </p>
<p>If changing both the access and modification times to the current 
  time, `touch' can change the timestamps for files that the user running it does 
  not own but has write permission for. Otherwise, the user must own the files.</p>
<p><b>Examples</b></p>
<p>Create/datestamp one file called sample.txt:</p>
<p class="code">touch sample.txt</p>
<p>Create/datestamp 10 files called file1, file2 etc:</p>
<p class="code">touch file{1,2,3,4,5,6,7,8,9,10}</p>
<p class="code"><span class="body">Create/datestamp 100 files called file1, file2 etc:</span></p>
<p class="code">for i in $(seq 1 100); do echo -n "file${i} "; touch file${i} 2&gt;&amp;1; done</p>
<p class="quote"><i>"If you play it safe you stagnate is this league. Maybe we'll 
  bust, but if we hit it, we'll hit it big" ~ Jimmy 
  Johnson, coach of the Miami Dolphins</i></p>
<p><b>Related:</b><br>
<br>
<a href="chgrp.html">chgrp</a> - Change group ownership<br>
<a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="date.html">date</a> - Display or change the date <br>
<a href="which.html">which</a> - Show full path of commands<br>
Equivalent Windows commands: 
<a href="../nt/touch.html">TOUCH</a> - Change file timestamps</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="touch.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

