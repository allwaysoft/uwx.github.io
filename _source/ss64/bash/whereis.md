---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>whereis</h1> 
<p>Search $path, man pages and source files for an application file.</p>
<p>The supplied filenames are first stripped of leading pathname 
  components and any (single) trailing extension of the form .ext (for example, 
  .c). Prefixes of s. resulting from use of source code control are also dealt 
  with. whereis then attempts to locate the desired program in a list of standard 
Linux directories (e.g., /bin, /etc, /usr/bin, /usr/local/bin/, etc.).</p>
<pre>Syntax
      whereis [<i>options</i>] <i>files</i>

Options
   -b    Search only for binaries.

   -B <i>directories</i>
         Change or otherwise limit the <i>directories</i> to search for
         binaries.

   -f    Terminate the last directory list and signal the
         start of filenames;
         Required when any of the -B, -M, or -S options are used.

   -m    Search only for manual sections.

   -M <i>directory</i>
         Change or otherwise limit the directories to search for
         manual sections.

   -s    Search only for sources.

   -S <i>directory</i>
         Change or otherwise limit the directories to search for
         sources.

   -u    Search for unusual entries, that is, files that do <b>not</b>
         have one entry of each requested type.
         Thus, the command whereis -m -u * asks for those files
         in the current directory that have no documentation.</pre>
<p> <b>Examples</b><br>
</p>
<p>Find all files in /usr/bin that are not documented in <span class="code">/usr/man/man1</span> but that have source in <span class="code">/usr/src</span>:<br>
</p>
<pre>% cd /usr/bin
% whereis -u -M /usr/man/man1 -S /usr/src -f *</pre>
<p><i class="quote">"If I am not for myself, Who will be for me? <br>
And if I am only for myself, What am I? <br>
And if not now, When?" ~ Rabbi Hillel</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="pwd.html">pwd</a> - Print Working Directory <br>
<a href="hash.html">hash</a> - Remember the full pathname of a name argument 
<br>
<a href="type.html">type</a> - Describe a command  <br>
<a href="which.html">which</a> - Search the user's $path for a program file<br>
Equivalent Windows commands: <a href="../nt/where.html">WHERE</a> - Locate and display files in a directory 
tree. </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="whereis.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

