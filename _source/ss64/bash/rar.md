---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>rar</h1> 
<p>Archive files with compression.</p>
<pre>Syntax
      rar <i>command</i> [-<i>switch_1</i> -<i>switch_N</i>] <i>archive </i>[<i>files</i>...]</pre>
<p>A summary of commands is  below.
Every command/switch must be separated by  whitespace.</p>
<pre>Commands:

   a      Add files to archive.

   c      Add archive comment. Comment length is limited to 62000 bytes.

   cf     Add files comment. File comments are displayed when  the  ’v’
          command is given. File comment length is limited to 32767 bytes.

   cw     Write archive comment to a specified file.

   d      Delete files from archive.

   e      Extract files to current directory. Does not create any
          subdirectories.

   f      Freshen files in archive. Updates those files changed since they
          were packed to the archive. This command will not add new to the
          archive.

   k      Lock  archive. Any command which intend to change the archive
          will be ignored.

   l[t]   List content of archive [technical]. Files are listed as the ’v’
          command with the exception of the file path. i.e.  the file name
          is displayed. Optional technical information displayed when  ’t’
          modifier is used.

   m[f]   Move to archive [files only]. Directories will not be removed if
          ’f’ modifier is used and/or ’-ed’ switch is applied.

   p      Print file to stdout.

   r      Repair archive. For further details look in rar.txt.

   rc     Reconstruct missing volumes using recovery volumes (.rev files).
          You need to specify any existing volume as the archive name, for
          example, ’rar rc backup.part03.rar’.

   rr[N]  Add data  recovery  record.  Optionally, redundant information
          (recovery record) can be added to an archive.

   rv[N]  Create recovery volumes (.rev files), which can be later used to
          reconstruct missing files in a volume set. This command has sense
          only for multivolume archives. For further details look in rar.txt

   s[name|-]
          Convert archive to or from SFX. The archive is merged with  SFX-
          module in the user’s home directory.

   t      Test archive files.

   u      Update  files  in archive. Adds files not already in the archive
          and updates files changed since they were packed to the archive.

   v[t]   Verbosely list archive [technical]

   x      Extract files with full path.


<b>Switches</b><span class="body"></span>:

   -ac    Clear Archive attribute after compression or extraction (Windows
          version only).

   -ag[format]
          Generate archive name using the current date and time. Appends
          the current date string to an  archive name when creating  an
          archive. Useful for daily backups. For further details look in
          rar.txt.

   -ao    Add files with Archive attribute set (Windows version only).

   -ap    Set path inside archive. This path is merged to file names  when
          adding  files to an archive and removed from file names when
          extracting.

   -as    Synchronize archive contents. If this switch is used  when
          archiving, those archived files which are not present in the
          list of the currently added files, will be deleted from archive.
          It is convenient to use this switch in combination with -u
          (update) to synchronize contents of an archive and an  archiving
          directory.

   -av    Put authenticity verification (registered  versions  only).
          Details in register.txt.

   -av-   Disable AV checking or adding.

   -cfg-  Disable read configuration and environment.

   -cl    Convert file names to lower case.

   -cu    Convert file names to upper case.

   -c-    Disable comments show.

   -df    Delete files after archiving. This switch  in  combination  with
          the command "A" performs the same action as the command "M".

   -dh    Open shared files. Allows to process files opened by other
          applications for writing.

   -ds    Do not sort files while adding to a solid archive.

   -ed    Do not add empty directories.

   -ee    Do not process extended attributes. Only for OS/2 versions.

   -en    Do not add "end of archive" block.

          This switch cannot be used with volumes, because the end of
          archive  block contains information important for correct volume
          processing.

   -ep    Exclude paths from names.

   -ep1   Exclude base dir from names.

   -ep2   Expand paths to full. Store full file paths (except a drive
          letter and leading path separator) when archiving.

   -e<b>A<i>ttr</i></b>
          Specifies file exclude attributes mask.

   -f     Freshen files. Can be used with archive extraction or creation.

   -hp<b><i>password</i></b>
          Encrypt both file data and headers. The password is case sensitive.
          If you omit the password on the command line, you will be prompted
          with message "Enter password".

   -idp   Disable percentage indicator.

   -ieml[.][addr]
          Send archive by email. Win32 version only.

   -ierr  Send all messages to stderr.

   -ilog  Log errors to file (registered versions only).

   -inul  Disable all messages.

   -isnd  Enable sound.

   -k     Lock archive. Any command which intends to change the archive
          will be ignored.

   -kb    Keep broken extracted files.

   -m 0..5
          Set compression level (0-store...3-default...5-best). By default
          rar uses -m3 method (Normal compression).

   -mc<b><i>par</i></b>
          Set advanced compression parameters. For further details look
          in rar.txt.

   -md<b><i>size</i></b>
          Set dictionary size in Kb (64,128,256,512,1024,2048,4097 or
          a,b,c,d,e,f,g)

   -ms[list]
          Specify file types to store.

   -o+    Overwrite existing files.

   -o-    Do not overwrite existing files.

   -ol    Save symbolic links as the link instead of the file.

   -os    Save NTFS streams. Win32 version only.

   -ow    Save file owner and group.

   -p<b><i>password</i></b>
          Encrypt files with the string <i>password</i> as password while
          archiving.   The password  is  case-sensitive. If you omit the
          password on the command line, you will be prompted with message
          "Enter password".

   -p-    Do not query password.

   -r     Recurse subdirectories.

   -r0    Similar to -r, but when used with the commands ’a’, ’u’, ’f’,

   -ri<i>p</i>[:<i>s</i>]
          Set  priority and sleep time. Available only in RAR for Windows.

   -rr[N] Add data recovery record.

   -rv[N] Create recovery volumes.

   -s     Create solid archive.

   -s<i><b>N</b></i>    Create solid groups using file count. Similar to -s, but reset
          solid statistics after compressing <i><b>N</b></i> files.

   -se    Create solid groups using extension. Similar to -s, but reset
          solid statistics if file extension is changed.

   -sv    Create independent solid volumes. Similar to -s, but reset solid
          statistics as soon as possible when starting a new volume.

   -sv-   Create dependent solid volumes. Similar to -s, but reset of
          solid statistics is disabled.

   -s-    Disable solid archiving.

   -sfx[name]
          Create SFX archives. The archive is merged with SFX-module in
          the user’s home directory.

   -t     Test  files after archiving. This switch is especially useful in
          combination with the move command, so files will be deleted only
          if archive had been successfully tested.

   -tk    Keep  original  archive  time.  Prevents  rar from modifying the
          archive date when changing an archive.

   -tl    Set archive time to latest file. Forces rar to set the date of a
          changed archive to the date of the newest file in the archive.

   -u     Update files.

   -v<b><i>size</i></b>[M|k|b|f]
          Create volumes with size=<i>size</i>*1000 [*1024, *1].

   -vd    Erase disk contents before creating  volume. All files and
          directories on the target disk will be erased when ’-vd’ is
          used. The switch applies only to removable media, the hard disk
          cannot be erased using this switch.

   -w<b><i>path</i></b>
          Assign work directory.

   -x<b><i>file</i></b>
          Exclude specified file.  Wildcards can be used and you may
          specify the switch ’-x’ several times.

   -x@<b><i>list</i></b>
          Exclude files in specified list file.

   -x@    Read file names to exclude from stdin.

   -y     Assume Yes on all queries.

   -z<b><i>file</i></b>
          Read archive comment from file.

   -?     Display help on commands and switches. The same as when none  or
          an illegal command line option is entered.

   --     This switch tells RAR that there are no more switches in the
          command line. This can be useful if either archive or file name
          starts  from  a ’-’ character. Using the ’--’ switch will ensure
          that the name is not treated as switch.</pre>
<p>For a complete description, run <span class="code">rar</span> without options. </p>
<p><b>Examples</b></p>
<p>Create a new rar archive archive.rar containing file1.dat, file2.dat, file3.dat:</p>
<p class="code"> $ rar a archive.rar file1.dat file2.dat file3.dat</p>
<p>Create a new rar archive ss64.rar containing the directory music:</p>
<p class="code">$ rar a ss64.rar music/</p>
<p>Create  a rar archive that splits the file/files into multiple parts of equal size (50MB):</p>
<p class="code">$ rar a -v<b>50M</b> -R ss64.rar music/</p>
<p><i class="quote">“Talent is hitting a target no-one else can hit, genius is hitting a target no-one else can see” - Schopenhauer</i><br>
<br>
<b>Related:</b></p>
<p><a href="bzip2.html">bzip2</a> - Compress or decompress named file(s)<br>
<a href="gzip.html">gzip</a> - Compress or decompress named file(s)<br>
<a href="tar.html">tar</a> - Store, list or extract files in an archive<br>
<a href="unrar.html">unrar</a> - Extract files from a rar archive<br>
Alternative free unrar programme <a href="http://home.gna.org/unrar/">http://home.gna.org/unrar/</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

