---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>df</h1> 
<p>Display free disk space.<br>
  With no arguments, `df' reports the space used and available on all currently 
  mounted filesystems (of all types). Otherwise, `df' reports on the filesystem 
containing each argument <i>file</i>. </p>
<pre>Syntax
      df [-b | -h | -H | -k | -m | -P] [-ailn] [-t <i>type</i>]
           [<i>file</i> | <i>filesystem</i> ...]

Options
     -a    Show all mount points, including those that were mounted with the
           MNT_IGNORE flag.

     -b    Use 512-byte blocks rather than the default.  Note that this
           overrides the BLOCKSIZE specification from the environment.

     -g    Use 1073741824-byte (1-Gbyte) blocks rather than the default.
           Note that this overrides the BLOCKSIZE specification from the
           environment.

     -H    "Human-readable" output.  Use unit suffixes: Byte, Kilobyte,
           Megabyte, Gigabyte, Terabyte and Petabyte in order to reduce the
           number of digits to three or less using base 10 for sizes.

     -h    "Human-readable" output.  Use unit suffixes: Byte, Kilobyte,
           Megabyte, Gigabyte, Terabyte and Petabyte in order to reduce the
           number of digits to three or less using base 2 for sizes.

     -i    Include statistics on the number of free inodes.

     -k    Use 1024-byte (1-Kbyte) blocks rather than the default.  Note
           that this overrides the BLOCKSIZE specification from the environment.

     -l    Only display information about locally-mounted filesystems.

     -m    Use 1048576-byte (1-Mbyte) blocks rather than the default.   Note
           that this overrides the BLOCKSIZE specification from the environment.

     -n    Print out the previously obtained statistics from the filesystems.
           This option should be used if it is possible that one or
           more filesystems are in a state such that they will not be able
           to provide statistics without a long delay.  When this option is
           specified, df will not request new statistics from the filesystems,
           but will respond with the possibly stale statistics that
           were previously obtained.

     -P    Use POSIX compliant output of 512-byte blocks rather than the
           default.  Note that this overrides the BLOCKSIZE specification
           from the environment.

     -t    Only print out statistics for filesystems of the specified types.
           More than one type can be specified in a comma separated list.
           The list of filesystem types can be prefixed with `no' to specify
           the filesystem types for which action should not be taken.
           For example, the df command:

           df -t nonfs,mfs

           lists all filesystems except those of type NFS and MFS.  The
           lsvfs(1) command can be used to find out the types of filesystems
           that are available on the system.</pre>
<p class="quote"><i>“A prediction is worth twenty explanations” - K. Brecher</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/df.1.html">df man page</a> - Apple.com<br>
<a href="quota.html">quota</a> - Display disk usage and limits</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="df.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
