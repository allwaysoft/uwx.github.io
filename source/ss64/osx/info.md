---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>info</h1> 
<p>Display Help information. </p>
<pre>Syntax
      info [<i>OPTION</i>]... [<i>MENU-ITEM</i>...]

Options
       --apropos=<i>STRING</i>
        look up STRING in all indices of all manuals.

       -d, --directory=<i>DIR</i>
        add DIR to INFOPATH.

       --dribble=<i>FILENAME</i>
        remember user keystrokes in FILENAME.

       -f, --file=<i>FILENAME</i>
        specify Info file to visit.

       -h, --help
        display this help and exit.

       --index-search=<i>STRING</i>
        go to node pointed by index entry STRING.

       -n, --node=<i>NODENAME</i>
        specify nodes in first visited Info file.

       -o, --output=<i>FILENAME</i>
        output selected nodes to FILENAME.

       -R, --raw-escapes
        don't remove ANSI escapes from man pages.

       --restore=<i>FILENAME</i>
        read initial keystrokes from FILENAME.

       -O, --show-options, --usage
        go to command-line options node.

       --subnodes
        recursively output menu items.

       --vi-keys
        use vi-like and less-like key bindings.

       --version
        display version information and exit.</pre>
<p>The first non-option argument, if present, is the menu entry to start from; 
  it is searched for in all `dir' files along INFOPATH. If it is not present, 
  info merges all `dir' files and shows the result. Any remaining arguments are 
  treated as the names of menu items relative to the initial node visited. </p>
<p><b>Examples</b> </p>
<pre>   info       Help Menu

   info emacs
        List the emacs node

   info emacs buffers
        List the buffers node within emacs manual

   info --show-options emacs
        start at node with emacs' command line options

   info -f ./foo.info
        show file ./foo.info, not searching dir</pre>
<p class="quote"><i>“Effective management always means asking the right question” ~ Robert Heller </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/info.1.html">info man page</a> - Apple.com<br>
man - Display manual pages</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="info.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
