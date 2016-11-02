---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>osacompile</h1> 
<p>Compile AppleScripts and other OSA language scripts.</p>
<pre>Syntax
      osacompile [-l <i>language</i>] [-e <i>command</i>] [-o <i>name</i>] [-d] [-r <i>type</i>:<i>id</i>]
                   [-t <i>type</i>] [-c <i>creator</i>] [-x] [-s] [-u] [-a <i>arch</i>] [<i>file</i> ...]

Example
 $ osacompile -o myNewApp.app myScript.scpt

Options
   -l <i>language</i>
         Override the language for any plain text files. Normally, plain
         text files are compiled as AppleScript.

   -e <i>command</i>
         Enter one line of a script.  Script commands given via -e are
         prepended to the normal source, if any.  Multiple -e commands can 
         be given to build up a multi-line script.  Because most scripts use
         characters that are special to many shell programs (e.g., Apple-
         Script uses single and double quote marks, `(', `)', and
         `*'), the command will have to be correctly quoted and escaped to
         get it past the shell intact.

   -o <i>name</i>
         Place the output in the file name.  If -o is not specified, the
         resulting script is placed in the file `a.scpt'.

   -d    Place the resulting script in the data fork of the output file.

   -r <i>type</i>:<i>id</i>
         Place the resulting script in the resource fork of the output file,
         in the specified resource.

   -t <i>type</i>
         Set the output file type to type.  Type is a four-character code.
         If this option is omitted and the output file does not exist, the
         type is set to `osas', that is, a compiled script.

   -c <i>creator</i>
         Set the output file creator to creator.  Creator is a four-charac-
         ter code.  If this option is omitted and the output file does not
         exist, the creator is set to `ToyS', that is, Script Editor.

   -x    Save the resulting script as execute only.

   -s    Stay-open applet. This option is only valid when a new bundled
         applet or droplet is being created.

   -u    Use startup screen. This option is only valid when a new bundled
         applet or droplet is being created.

   -a <i>arch</i>
         Create the applet or droplet for the specified target architecture
         arch.  The allowable values are `i386' and `ppc'.  By default,
         bundled applets and droplets are created as universal binaries.
         This option is only valid when a new bundled applet or droplet is
         being created.</pre>
<p>If no options are specified, osacompile produces a classic Mac OS format script file, that is, type `osas' (compiled script), creator `ToyS' (Script Editor), with the script data in the scpt:128 resource and nothing in the data fork. This format is compatible with all Mac OS and Mac OS X systems.</p>
<p>If the -o option is specified and the file does not already exist, osacompile uses the filename extension to determine what type of file to create. If the filename ends with `.app', a bundled applet or droplet
will be created. (OS X only) </p>
<p>If the filename ends with `.scptd', a bundled compiled script will be created. Otherwise, the resulting script will be placed in the resource fork and/or data fork of the output file depending
upon what other options are specified.</p>
<p>The -d and -r options are not exclusive. If exactly one is specified, the script is written only to that fork. If both are specified, the script is written to both forks.</p>
<p><b>Example </b></p>
<p class="code">$ osacompile -o myNewApp.app myScript.scpt</p>
<p class="quote"><i>“Some painters transform the sun into a yellow spot; others transform a yellow spot into the sun” ~ Pablo Picasso</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html">osacompile man page</a> - Apple.com<br>
<a href="osascript.html">osascript</a> - Execute AppleScript<br>
<a href="defaults-show-hidden_scpt.txt">Show hidden files.scpt</a> - Toggle the display of hidden files in Finder (will restart finder) </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="osacompile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
