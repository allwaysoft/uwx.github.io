---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>ln, link</h1> 
<p>Make hard links and symbolic links.<br>
  `ln' creates a new directory entry (linked file) with the same modes as the 
  original file. It is useful for maintaining multiple copies of a file in many 
  places at once without using up storage for the copies; instead, a link 'points' 
  to the original copy. How a link 'points' to a file is one of the differences 
between a hard and symbolic link. </p>
<pre>Syntax
      ln [-fhinsv] <i>OriginalSourceFile</i> [<i>NewLinkFile</i>]

      ln [-fhinsv]<i> OriginalSourceFile</i>... <i>NewLinkFile</i>

      link  <i>OriginalSourceFile  NewLinkFile</i>

Options

     -f     If the target file already exists, then unlink it so that the link
            can occur.  (The -f option overrides any previous -i options.)

     -h     If the <i>NewLinkFile</i> (or directory) is a symbolic link, do not follow
            it.  This is most useful with the -f option, to replace a symlink
            which can point to a directory.

     -i     Cause ln to write a prompt to standard error if <i>NewLinkFile</i>
            exists.  If the response from the standard input begins with the
            character 'y' or 'Y', then unlink the <i>NewLinkFile</i> file so that the link
            can occur.  Otherwise, do not attempt the link.  (The -i option
            overrides any previous -f options.)

     -n     Same as -h, for compatibility with other ln implementations.

     -s     Create a symbolic link.

     -v     Cause ln to be verbose, showing files as they are processed.</pre>
<p>By default, <span class="code">ln</span> makes hard links. A hard link to a file is indistinguishable 
  from the original directory entry; any changes to a file are effectively independent 
  of the name used to reference the file. Hard links can not normally refer to 
  directories and can not span file systems. </p>
<p>A symbolic link contains the name of the file to which it is linked. 
  The referenced file is used when an open(2) operation is performed on the link. 
  A stat(2) on a symbolic link will return the linked-to file; an lstat(2) must 
  be done to obtain information about the link. The readlink(2) call can be used 
  to read the contents of a symbolic link. Symbolic links can span file systems 
  and can refer to directories. </p>
<p>Given one or two arguments, <span class="code">ln</span> creates a link to an existing file <i>OriginalSourceFile</i>. If <i>NewLinkFile</i> is given, the link has that name.</p>
<p> <i>NewLinkFile</i> can 
  also be a directory in which to place the link; otherwise it is placed in the 
  current directory. If only the directory is specified, the link will be made 
  to the last component of <i>OriginalSourceFile</i>. </p>
<p>Given more than two arguments, <span class="code">ln</span> makes links in <i>NewLinkFile</i>  to 
  all the named source files. The links made will have the same name as the files 
  being linked to.</p>
<p><b>Examples</b></p>
<p>N.b. these assume you have the <a href="http://osxdaily.com/2012/08/22/turn-off-auto-save-os-x/">OSX Auto-Save</a> feature turned off.</p>
<p>1) Hard Link to a file while it is open:</p>
<p>Create a new file called cake.jpg<br>
Open the file <span class="code">cake.jpg</span> in Preview.app<br>
In Terminal, make a hard-link: <span class="code">ln cake.jpg link.jpg</span><br>
In Preview, rotate the image and then Save and Close - the changes will now be visible in both cake.jpg and link.jpg<br>
Delete cake.jpg : <span class="code">rm cake.jpg</span><br>
The data will be automatically copied into link.jpg and will still be readable.</p>
<p>2) Delete a  file, while hard links to it are still open:</p>
<p>Create a new file called flower.jpg<br>
In Terminal, make a hard-link: <span class="code">ln flower.jpg link.jpg<br>
</span>Open the file <span class="code">link.jpg</span> in Preview.app<span class="code"><br>
</span>In Terminal, delete the original file: <span class="code">rm flower.jpg</span><br>
In Preview, rotate the image and then Save - the changes <i>should</i> be saved to link.jpg<br>
Note that many applications will in fact fail to save the data in the above scenario, because they opened the original file which has since been deleted. </p>
<p>3) Create a Symbolic Link to a file while it is open:</p>
<p>Create a new file called cake.jpg<br>
Open the file <span class="code">cake.jpg</span> in Preview.app<br>
In Terminal, make a symbolic-link: <span class="code">ln -s cake.jpg sybm.jpg</span><br>
In Preview, rotate the image and then Save and Close - the changes will now be visible in both cake.jpg and symb.jpg<br>
Delete cake.jpg : <span class="code">rm cake.jpg</span><br>
The symbolic link symb.jpg now points to a nonexistent file, attempting to open it will give an error. </p>
<p>4) Delete a file, while Symbolic links to it are still open:</p>
<p>Create a new file called flower.jpg<br>
In Terminal, make a symbolic-link: <span class="code">ln -s flower.jpg symb.jpg<br>
</span>Open the file <span class="code">symb.jpg</span> in Preview.app<span class="code"><br>
</span>In Terminal, delete the original file: <span class="code">rm flower.jpg</span><br>
In Preview, rotate the image and then Save - you will be prompted to save under a new name </p>
<p class="quote"><i>"God shows his contempt for wealth by the kind of person he 
  selects to receive it" ~ Austin 
  O'Malley</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/ln.1.html">ln man page</a> - Apple.com<br>
  pathchk - Check file name portability<br>
man symlink<br>
Equivalent Windows command: <a href="../nt/mklink.html">MKLink</a> - Create a symbolic link to a directory or a file</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ln.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
