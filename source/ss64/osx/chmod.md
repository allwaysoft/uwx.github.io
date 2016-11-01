---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>chmod</h1> 
<p>Change access permissions, <b>ch</b>ange <b>mod</b>e.</p>
<pre>Syntax

      chmod [-fv] [-R [-H | -L | -P]] <i>mode file</i> ...
<br>      chmod [-fv] [-R [-H | -L | -P]] [-a | +a | =a] <i>ACE file</i> ...<br>
      chmod [-fhv] [-R [-H | -L | -P]] [<i>ACL_Option</i>] <i>file</i> ...<br>
Options
   -R         Recurse: Change the mode of file hierarchies rooted in the files
              instead of just the files themselves.

   -R -H      Follow symbolic links on the command line
              (by default Symbolic links within the tree are not followed.)         
   -R -L      All symbolic links are followed.
   -R -P      No symbolic links are followed. (default)
       
   -f         Do not display a diagnostic message if chmod could not modify the
              mode for <i>file</i>.

   -h         If the file is a symbolic link, change the mode of the link
              itself rather than the file that the link points to.

   -v         Verbose, show filenames as the mode is modified *

   -v -v      Very Verbose: display both old and new modes of the file
              in both octal and symbolic notation *

<i>ACL_Option</i>s
   -E         Read the ACL information from stdin, as a sequential list of ACEs,
              separated by newlines.  If the information parses correctly,
              the existing information is replaced.

   -C         Returns false if any of the named files have ACLs in non-canonical
              order.

   -N         Remove the ACL from the named file(s).<i>

ACL_manipulation_options</i>
   +a <i>mode</i>    Insert a new ACL entry 
   +a# <i>mode</i>   Insert a new ACL entry with specific ordering
   -a <i>mode</i>    Delete an ACL entry
   =a# <i>mode</i>   Rewrite an Individual entry
   -i         Remove the 'inherited' bit from all entries in the named file(s) ACLs.
   -I         Remove all inherited entries from the named file(s) ACL(s).</pre>
<form name="chmod">
<table style="font:normal 12px Verdana; border: none;">
<tbody><tr>
<td>Permissions: </td>
<td><input type="text" name="t_total" value="751" size="4" onkeyup="octalchange()"> </td>
<td><input type="text" name="sym_total" value="" size="12" readonly="" style="border: 0px none; font-family: &quot;Courier New&quot;, Courier, monospace; ">
</td>
</tr>
</tbody></table>
<br>
<table style="font:normal 12px Verdana;border: none;border-spacing: 0; padding: 2px;">
<tbody><tr style="background: #333333;">
<td> </td>
<td class="chmod">Owner</td>
<td class="chmod">Group</td>
<td class="chmod">Other</td>
</tr>
<tr>
<td class="ch2">Read</td>
<td class="ch3"><input type="checkbox" name="owner4" value="4" onclick="calc_chmod()"></td>
<td class="ch4"><input type="checkbox" name="group4" value="4" onclick="calc_chmod()"></td>
<td class="ch3"><input type="checkbox" name="other4" value="4" onclick="calc_chmod()"></td>
</tr>
<tr>
<td class="ch2">Write</td>
<td class="ch3"><input type="checkbox" name="owner2" value="2" onclick="calc_chmod()"></td>
<td class="ch4"><input type="checkbox" name="group2" value="2" onclick="calc_chmod()"></td>
<td class="ch3"><input type="checkbox" name="other2" value="2" onclick="calc_chmod()"></td>
</tr>
<tr>
<td class="ch2">Execute</td>
<td class="ch3"><input type="checkbox" name="owner1" value="1" onclick="calc_chmod()"></td>
<td class="ch4"><input type="checkbox" name="group1" value="1" onclick="calc_chmod()"></td>
<td class="ch3"><input type="checkbox" name="other1" value="1" onclick="calc_chmod()"></td>
</tr>
</tbody></table>
</form><p> chmod changes the permissions of each given <i>file</i> according 
to <i>mode</i>, which can be either an octal number representing the bit pattern for the new permissions or a symbolic representation of changes to make, (<span class="code">+-= rwxXstugoa</span>)</p>
<p><span class="code">* </span>The -v option is non-standard and its use in scripts is not recommended.</p>
<p><b>Numeric (absolute) mode:</b></p>
<p> From one to four octal digits<br>
  Any omitted digits are assumed to be leading zeros. <br>
  <br>
The first digit = selects attributes for the set user 
  ID (<span class="code">4</span>) and set group ID (<span class="code">2</span>) and save text image (<span class="code">1</span>)<br>
The second digit = permissions for the user who <b>owns</b> the file: read (<span class="code">4</span>), write 
(<span class="code">2</span>), and execute (<span class="code">1</span>)<br>
The third digit = permissions for other users in the file's <b>group</b>: read (<span class="code">4</span>), 
write (<span class="code">2</span>), and execute (<span class="code">1</span>)<br>
The fourth digit = permissions for other users NOT in the file's group: read 
(<span class="code">4</span>), write (<span class="code">2</span>), and execute (<span class="code">1</span>)</p>
<p> The octal (0-7) value is calculated by adding up the values 
  for each digit<br>
  User (rwx) = 4+2+1 = <b>7</b><br>
  Group(rx) = 4+1 = <b>5</b><br>
  World (rx) = 4+1 =<b> 5</b><br>
  chmod mode = <span class="code">0755 </span></p>
<p>Numeric Mode Examples:</p>
<blockquote>
<p>  Allow read permission to everyone:<br>
  <span class="code">$ chmod 444 <i>file</i></span><br>
  <br>
  Allow everyone to read, and execute the file: <br>
<span class="code">$ chmod 755 <i>file</i> </span></p>
<p>Make a file readable and writable by the group and others:<br>
  <span class="code">$ chmod 066 <i>file</i> </span></p>
</blockquote>
<p><b>Symbolic Mode</b>
</p><p> The format of a symbolic mode is [<span class="code"><i>who</i>...][[+-=][<i>perm</i>...]...][,...]</span><br>
  <br>
  Multiple symbolic operations can be given, separated by commas.<br>
  <br>
  <span class="code"><i>who </i></span>- a combination of the letters `ugoa' controls which <b>users</b>' access to the 
  file will be changed: </p>
<blockquote> 
  <p><span class="code">u </span>The User who owns it <br>
<span class="code">g </span>other users in the file's Group <br>
<span class="code">o </span>Other users not in the file's group <br>
<span class="code">a </span>All users,  this is equivalent to (<span class="code">ugo</span>) <br>
If none of these are given, the effect is as if (<span class="code">a</span>) were 
  given, but bits that are set in the umask are not affected.</p>
</blockquote>
<p>  <span class="code">+-=</span>  <br>
The operator '<span class="code">+</span>' causes the permissions selected to be added to the existing 
  permissions of each file;<br> 
'<span class="code">-</span>' causes them to be removed; and '<span class="code">=</span>' causes them 
  to be the only permissions that the file has.<br>
if <span class="code">=</span> is specified with no <span class="code"><i>who</i></span> then all (owner, group and other) will be cleared.<br>
  <br>
<span class="code"><i>perm</i></span><br>The letters 'rwxXstugo' select the new <b>permissions</b> for the affected users: </p>
<blockquote>
<p><span class="code">r </span>Read <br>
  <span class="code">w </span>Write<br>
  <span class="code">x </span>Execute/search (or access for directories) <br>
  <span class="code">X </span>Execute/search only if the file is a directory or already has execute permission 
  for some user <br>
  <span class="code">s </span>Set user or group ID on execution<br>
  <span class="code">t </span>The sticky bit<br>
  <span class="code">u </span>User permission<br>
  <span class="code">g </span>Group permission<br>
  <span class="code">o </span>Other permission (users not in the file's group)</p>
</blockquote>
<p>Symbolic Mode Examples:</p>
<blockquote>
<p>Deny execute permission to everyone: <br>
  <span class="code">$ chmod a-x <i>file</i></span><br>
  <br>
  Allow read permission to everyone:<br>
  <span class="code">$ chmod a+r <i>file</i></span><br>
  <br>
  Make a file readable and writable by the group and others: <br>
<span class="code">$ chmod go+rw <i>file</i></span></p>
<p>Make a shell script executable by the user/owner <br>
<span class="code">$ chmod u+x myscript.sh</span><br>
  <br>
  Allow everyone to read, write, and execute the file and turn on the set group-ID: 
  <br>
  <span class="code">$ chmod =rwx,g+s <i>file</i> </span></p>
</blockquote>
<p><b>ACL - Access Control List manipulation</b></p>
<p>Each
file has one ACL, containing an ordered list of entries. Each entry
refers to a user or group, and grants or denies a set of permissions. </p>
<p> Filesystem object permissions:</p>
<p> <span class="code">delete</span> Delete the item. Deletion can be granted by either this
permission on an object or the delete_child right on the
containing directory.<br>
<span class="code">readattr</span> 
Read an objects basic attributes. This is implicitly
granted if the object can be looked up and not explicitly
denied.<br>
<span class="code">writeattr </span> Write an object's basic attributes.<br>
<span class="code">readextattr </span>Read extended attributes.<br>
<span class="code">writeextattr </span>Write extended attributes.<br>
<span class="code">readsecurity </span>Read an object's extended security information (ACL).<br>
<span class="code">writesecurity </span>Write an object's security information (ownership, mode,ACL).<br>
<span class="code">chown </span> Change an object's ownership.</p>
<p>Directory  permissions:</p>
<p> <span class="code">list </span> List entries.<br>
<span class="code">search </span> Look up files by name.<br>
<span class="code">add_file </span>Add a file.<br>
<span class="code">add_subdirectory </span>Add a subdirectory.<br>
<span class="code">delete_child </span>Delete a contained object. See the file delete permission
above.</p>
<p>Non-directory filesystem object permissions:<br>
<br>
<span class="code">read </span> Open for reading.<br>
<span class="code">write </span> Open for writing.<br>
<span class="code">append </span> Open for writing, but in a fashion that only allows writes into areas of the file not previously written.<br>
<span class="code">execute </span>Execute the file as a script or program.</p>
<p> Directory ACL inheritance permissions:</p>
<p><span class="code">file_inherit </span> 
Inherit to files.<br>
<span class="code">directory_inherit </span>Inherit to directories.<br>
<span class="code">limit_inherit </span>for  subdirectory inheritance; this causes the directory_inherit flag to be
cleared, preventing further
 subdirectories from also inheriting the entry.<br>
<span class="code">only_inherit </span>The entry is inherited by created items but not considered
when processing the ACL.</p>
<p>In cases where a user and a group exist with the same name, the user/group name can be prefixed with "user:" or "group:" in order to specify the type of name.</p>
<p>ACL Examples</p>
<blockquote>
<p class="code">$ chmod +a "admin allow write" myfile.txt<br>
$ chmod +a "guest deny read" myfile.txt<br>
$ chmod +a "admin allow delete" myfile.txt<br>
$ chmod +ai "others allow read" myfile.txt<br>
$ chmod +a# 2 "others deny read" myfile.txt<br>
$ chmod -a# 1 myfile.txt<br>
$ chmod -a "admin allow write" myfile.txt<br>
$ chmod =a# 1 "admin allow write,chown"</p>
</blockquote>
<p>Notes:</p>
<p>Only the owner of a file or the super-user is permitted to change the mode of a file. </p>
<p>The return status is zero if the mode is successfully changed, non-zero otherwise.</p>
<p>When chmod is applied to a directory: <br>
read = list files in the directory<br>
write = add new files to the directory <br>
execute = access files in the directory <br>
<br>
chmod never changes the permissions of symbolic links. This is not a problem since the permissions of symbolic links are never used. However, for each symbolic 
  link listed on the command line, chmod changes the permissions of the pointed-to file. In contrast, chmod ignores symbolic links encountered during recursive 
directory traversals.</p>
<p class="quote"><i>“It's easier to ask forgiveness than it is to get permission” ~ Rear Admiral Grace Hopper</i></p>
<p><b> Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/chmod.1.html">chmod man page</a> - Apple.com<br> 
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="chflags.html">chflags</a> - Change a file or folder's flags. <br>
<a href="install.html">install</a> - Copy files and set attributes <br>
<a href="mount.html">mount</a> - Mount a file system<br>
<a href="sharing.html">sharing</a> - Create share points for afp, ftp and smb services<br>
<a href="stat.html">stat</a> - Display file or file system status<br>
<a href="umask.html">umask</a> - Users file creation mask</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chmod.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
