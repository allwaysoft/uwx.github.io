---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>chmod</h1> 
<p>Change access permissions,  <b>ch</b>ange <b>mod</b>e.</p>
<pre>Syntax
       chmod [<i>Options</i>]... <i>Mode</i> [,<i>Mode</i>]... <i>file</i>...

       chmod [<i>Options</i>]... <i>Numeric_Mode </i><i>file</i>...

       chmod [<i>Options</i>]... --reference=<i>RFile</i> <i>file</i>...

Options
  -f, --silent, --quiet   suppress most error messages

  -v, --verbose           output a diagnostic for every file processed
  -c, --changes           like verbose but report only when a change is made

      --reference=<i>RFile</i>   use <i>RFile</i>'s mode instead of MODE values

  -R, --recursive         change files and directories recursively

      --help              display help and exit

      --version           output version information and exit</pre>
<p> chmod changes the permissions of each given <i>file</i> according 
to <i>mode</i>, where <i>mode</i> describes the permissions to modify. <i>Mode</i> can be specified with octal numbers or with letters. Using letters is easier to understand for most people.</p>
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
</form>
<p>When chmod is applied to a directory: </p>
<ul>
<li> read = list files in the directory</li>
<li> write = add new files to the directory </li>
<li>execute = access files in the directory</li>
</ul>
<p> chmod never changes the permissions of symbolic links. This is not a problem since the permissions of symbolic links are never used. However, for each symbolic link listed on the command line, chmod changes the permissions of the pointed-to file. In contrast, chmod ignores symbolic links encountered during recursive directory traversals. </p>
<h2>Numeric mode:</h2>
<blockquote>
<p>From one to four octal digits<br>
  Any omitted digits are assumed to be leading zeros. <br>
  <br>The first digit = selects attributes for the set user 
  ID (4) and set group ID (2) and save text image (1)S<br>
The second digit = permissions for the user who owns the file: read (4), write (2), and execute (1)<br>
The third digit = permissions for other users in the file's group: read (4), write (2), and execute (1)<br>
The fourth digit = permissions for other users NOT in the file's group: read (4), write (2), and execute (1)</p>
<p> The octal (0-7) value is calculated by adding up the values for each digit<br>
  User (rwx) = 4+2+1 = <b>7</b><br>
  Group(rx) = 4+1 = <b>5</b><br>
  World (rx) = 4+1 =<b> 5</b><br>
  chmode mode = 0755 </p>
<p><b>Examples</b><br>
<br>
<span class="code">chmod 400     <i>file</i></span> - Read by owner<br>
<span class="code">chmod 040 <i>file</i></span> - Read by group<br>
<span class="code">chmod 004 <i>file</i></span> - Read by world <br>
<br>
<span class="code">chmod 200 <i>file</i></span> - Write by owner<br>
<span class="code">chmod 020 <i>file</i></span> - Write by group<br>
<span class="code">chmod 002 <i>file</i></span> - Write by world<br>
<br>
<span class="code">chmod 100 <i>file</i></span> - execute by owner<br>
<span class="code">chmod 010 <i>file</i></span> - execute by group<br>
<span class="code">chmod 001 <i>file</i></span> - execute by world</p>
<p>To combine these, just add the numbers together:<br>
<span class="code">chmod 444 <i>file</i></span> - Allow read permission to owner and group and world<br>
 <span class="code">chmod 777 <i>file</i></span> - Allow everyone to read, write, and execute <i> file</i></p>
</blockquote>
<h2>Symbolic Mode
</h2>
<blockquote>
<p>The format of a symbolic mode is a combination of the letters <span class="code">+-= rwxXstugoa</span><br>
Multiple symbolic operations can be given, separated by commas. <br>
The full syntax is <span class="code">[ugoa...][[+-=][rwxXstugo...]...][,...]</span> but this is explained below. <br>
<br>
A combination of the letters <span class="code">ugoa</span> controls which <b>users</b>' access to the file will be changed:</p>
<table class="tab1">
<tbody><tr>  <td><i> User</i></td>
  <td><i>letter</i></td>
</tr>
<tr>  <td>The user who owns it</td>
  <td class="code">u</td>
</tr>
<tr>  <td>Other users in the file's Group</td>
  <td class="code">g</td>
</tr>
<tr>  <td>Other users not in the file's group</td>
  <td class="code">o</td>
</tr>
<tr>
<td>All users</td>
<td class="code">a</td>
</tr>
</tbody></table>
<p>If none of these are given, the effect is as if <span class="code">a</span> were given, but bits that are set in the umask are not affected.<br>
<br>
All users <span class="code">a</span> is effectively user + group + others<br>
<br>
The operator '<span class="code">+</span>' causes the permissions selected to be added to the existing permissions of each file; '<span class="code">-</span>' causes them to be removed; and '<span class="code">=</span>' causes them to be the only permissions that the file has.<br>
<br>
The letters '<span class="code">rwxXstugo</span>' select the new <b>permissions</b> for the affected users: </p>
</blockquote>
<blockquote>
<table class="tab1"><tbody><tr>  <td><i> Permission</i></td>
  <td><i>letter</i></td>
</tr>
<tr>  <td>Read</td>
  <td class="code">r</td>
</tr>
<tr>  <td>Write</td>
  <td class="code">w</td>
</tr>
<tr>  <td>Execute (or access for directories)</td>
  <td class="code">x</td>
</tr>
<tr>
<td>Execute only if the file is a directory <br>
(or already has execute permission for some user)</td>
<td class="code">X</td>
</tr>
<tr>
<td>Set user or group ID on execution</td>
<td class="code">s</td>
</tr>
<tr>
<td>Save program text on swap device</td>
<td class="code">t</td>
</tr>
<tr>
<td>The permissions that the User who owns the file currently has for it</td>
<td class="code">u</td>
</tr>
<tr>
<td>The permissions that other users in the file's Group have for it</td>
<td class="code">g</td>
</tr>
<tr>
<td>Permissions that Other users not in the file's group have for it</td>
<td class="code">o</td>
</tr>
</tbody></table>
</blockquote>
<blockquote>
<p><b>Examples</b><br>
  Deny execute permission to everyone: <br>
  <span class="code">chmod a-x <i>file</i></span><br>
  <br>
  Allow read permission to everyone:<br>
  <span class="code">chmod a+r <i>file</i></span><br>
  <br>
  Make a file readable and writable by the group and others: <br>
  <span class="code">chmod go+rw <i>file</i></span></p>
<p>Make a shell script executable by the user/owner <br>
<span class="code">$ chmod u+x myscript.sh</span><br>
  <br>
  Allow everyone to read, write, and execute the file and turn on the set group-ID: 
  <br>
  <span class="code">chmod =rwx,g+s <i>file</i> </span><br>
</p>
</blockquote>
<p>This page documents the GNU version of chmod.</p>
<p class="quote"><i>“It's easier to ask forgiveness than it is to get permission” ~ Rear Admiral Grace Hopper</i></p>
<p><b>Related:</b><br>
<br>
access - Determine whether a file can be accessed <br>
<a href="ls.html">ls -l</a> - List current permissions:  -- 
u (owner)  -- g (group)  -- O (Other)<br>
<a href="chgrp.html">chgrp</a> - Change group ownership<br>
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="stat.html">stat</a> - Display file or file system status<br>
<a href="syntax-permissions.html">bash syntax - Permissions</a><br>
Equivalent Windows command: <a href="../nt/cacls.html">CACLS</a> - Change file permissions</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chmod.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

