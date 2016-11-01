---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>rm</h1> 
<p>Delete files and folders.</p>
<pre>Syntax
     rm [<i>options</i>] <i>file</i> ...

     unlink <i>file</i>

Options
   -d   Attempt to remove folders.

   -f   Attempt to remove the files without prompting for confirmation,
        regardless of the file's permissions.  If the file does not exist,
        do not display a diagnostic message or modify the exit status
        to reflect an error.

   -i   Request confirmation before attempting to remove each file.

   -P   Overwrite regular files before deleting them.  Files are
        overwritten three times, first with the byte pattern 0xff,
        then 0x00, and then 0xff again, before they are deleted.

   -R   Remove the entire file hierarchy rooted in each file argument.
        (implies the -d  Delete folders).
        If the -i option is specified, the user is prompted for confirmation
        before each directory's contents are processed (as well as before
        the attempt is made to remove the directory).  If the user does not
        respond affirmatively, the file hierarchy rooted in that directory
        is skipped.

   -r   Equivalent to -R.

   -v   Be verbose when deleting files, showing them as they are removed.

   -W   Attempt to undelete the named files.  Currently, this option
        can only be used to recover files covered by whiteouts.

   unlink   Unlink a file, only one argument, which must not be a directory
        can be supplied. Calls the unlink() function which removes the link
        named by path from its directory and decrements the link count of
        the file which was referenced by the link.</pre>
<p> The rm utility removes symbolic links, not the files referenced 
  by the links.</p>
<p>If an error occurs, rm exits with a value &gt;0. </p>
<p><b>Examples</b></p>
<p>Delete all .jpg files in the current folder:<br>
<span class="code">$ rm *.jpg</span><br>
<br>
 Delete the folder named "temp", and all its contents:<br>
<span class="code">$ rm -R temp</span><br>
<br>
Delete a protected folder:<br>
<span class="code">$ sudo rm -r NAME_OF_FOLDER_TO_DELETE</span><br>  you will be prompted for your password. hit return.</p>
<p class="quote"><i>“The erase function in Disk Utility can erase an entire partition”</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/rm.1.html">rm man page</a> - Apple.com<br>  
<a href="cp.html">cp</a> - Copy files<br>
<a href="find.html">find</a> - Find and optionally Delete files <br>
<a href="ls.html">ls</a> - List information about files <br>
<a href="rmdir.html">rmdir</a> - Remove empty folder<br>
<a href="srm.html">srm</a> - Securely remove files or directories<br>
<a href="http://support.apple.com/kb/ht1526">HT1526</a> - You can't empty the Trash or move a file to the Trash</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
