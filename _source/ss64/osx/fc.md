---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>fc</h1> 
<p>Fix Command.  <br>
Edit  and re-execute previous commands from your command <a href="history.html">history</a>.</p>
<pre>Syntax
      fc [-e <i>ename</i>] [-nlr] [<i>first</i>] [<i>last</i>]
<br>      fc -s [<i>pat</i>=<i>rep</i>] [<i>cmd</i>]

Key
   -e   Editor_Name

   -n   Suppress the command numbers when listing.
   -l   List the commands to standard output.
   -r   Reverse the order of the commands.

  <i>first</i> String (or number) representing the first command to retrieve from history
  <i>last</i>  String (or number) representing the last command to retrieve from history

   <i>pat</i>  Pattern (string to find)
   <i>rep</i>  Replace (new string)
   <i>cmd</i>  command to retrieve from history (string or number)
</pre>
<p><i>First</i> , <i>last</i> and <i>cmd</i> can be specified as a string to locate any command(s) in the history list that begin with that string.<br>
Alternatively they can be given as  a number,  a numeric index into the <a href="history.html">history</a> list.<br>
If  a negative number is given, this will be used as an offset from the current command -1= last command, -3= third last command etc.</p>
<p>In the first form (<span class="code">fc  [-nlr]</span>) a range of commands from <i>first</i> to <i>last</i> is selected from the <a href="history.html">history</a> list.</p>
<p>In the second form (<span class="code">fc -s</span>) command <i>cmd </i>from the history is re-executed, optionally after each instance of <i>pat</i> is replaced by <i>rep</i>. </p>
<p>Repeat = r </p>
<p>A
useful <a href="alias.html">alias</a> to use with fc is this:<br> 
<span class="code">Alias r="fc -s"</span><br>
 With that alias in place, typing <span class="code">r <i>cc</i></span> will run the last command
beginning with <span class="code"><i>cc</i></span> <br>
typing <span class="code">r</span> will repeat (re-execute) the last command.<br>
typing <span class="code">r ssh</span> will repeat  the last ssh command.<br>
typing <span class="code">r -3 </span> will repeat the third last command.</p>
<p>Defaults</p>
<p>If <i>last</i> is not specified it is set to the current command for listing (so that <span class="code">fc -l -10</span> prints the last 10 commands) and to <i>first</i> otherwise. <br>
If <i>first</i> is not specified it is set to the previous command for editing and -16 for listing.</p>
<p> If the -l option is not given, the editor given by <i>ename</i> is invoked on a file containing those commands. If <i>ename</i> is not given, the value of the FCEDIT variable is used, and the value of EDITOR if FCEDIT is not set. If neither variable is set, <a href="vi.html">vi</a> is used. When editing is complete, the edited commands are echoed and executed.</p>
<p>Return values</p>
<p>If the first form is used, the return value is <span class="code">0</span> unless an invalid option is encountered or first or last specify history lines out of range. <br>
If the -e option is supplied, the return value is the value of the last command executed or failure if an error occurs with the temporary file of commands. <br>
If the second form is used, the return status is that of the command
re-executed, unless <i>cmd</i> does not specify a valid history line, in which case fc returns  failure.</p>
<p> Examples</p>
<p>Move the files <span class="code">Song-1a.mp3</span> and <span class="code">Song-2b.mp3</span> to the Archive directory:</p>
<p class="code"> $ mv Song-1a.mp3 Archive<br>
$ fc -s 1a=2b</p>
<p>Execute an <span class="code">ls Green</span> after fixing the typo on the seond line:</p>
<p class="code">$ Alias r="fc -s"<br>
$ 
ls Greeen <br>
$ r Greeen=green ls gre </p>
<p>fc is a bash built in command.</p>
<p class="quote"><i>"Power tends to corrupt, absolute power corrupts absolutely" ~ Lord 
  Acton</i></p>
<p><b>Related:</b></p>
<p>  
<a href="history.html">history</a> - Command History</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
