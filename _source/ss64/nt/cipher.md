---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CIPHER.exe</h1> 
<p>Encrypt or Decrypt files and folders.<br>  
Without parameters cipher will display the encryption state of the current folder and files.<br>
NTFS volumes only.</p>
<pre>Syntax:

 <i>Encrypt/Decrypt</i>:
    CIPHER [{/e | /d}] [/s:<i>Folder</i>] [<i>options</i>] [/u[/n]] [{<i>PathName</i> [...]] 

 <i>New recovery agent certificate</i>:
    CIPHER /r:PathNameWithoutExtension

 <i>Remove data:</i>
    CIPHER /w:<i>PathName

 Backup Keys:</i>
    CIPHER /x[:<i>PathName</i>]<i>

<b>options</b></i>:

   /e    Encrypt the folders.
         Folders are marked so that files that are added to the folder later
         are encrypted too.

   /d    Decrypt the folders.
         Folders are marked so that files that are added to the folder later
         are encrypted too.

   /s:<i>Folder</i>
         Performs the operation in the folder and all subfolders.

   /a    Perform the operation for files and directories.

   /i    Continue even after errors occur.
         By default, cipher stops when it encounters an error.

   /f    Force the encryption or decryption of all specified objects.
         By default, cipher skips files that have been encrypted or decrypted already.

   /q    Quiet - Report only essential information.

   /h    Display files with hidden or system attributes.
         By default, these files are not encrypted or decrypted.

   /k    Create a new file encryption key for the user running cipher.

   /u    Update the user's file encryption key or recovery agent's key
         to the current ones in all of the encrypted files on local drives
         (that is, if the keys have been changed).
         This option only works with /n.
   /n    Prevent keys from being updated.
         Use this option to find all of the encrypted files on the local drives.
         This option only works with /u. 

  <i>PathName</i>
         A pattern, file, or folder.

   /r:<i>PathNameWithoutExtension</i>
         Generate a new recovery agent certificate and private key, and 
         then write them to files with the filename <i>PathNameWithoutExtension</i>.

   /w:<i>PathName</i>
         Remove data from unused portions of a volume.
         <i>PathName </i>can indicate any directory on the desired volume.
         Cipher does not obtain an exclusive lock on the drive.
         This option can take a long time to complete and should only be used when necessary.

   /x[:<i>PathName</i>] <i>PathNameWithoutExtension</i>
         Identifies the certificates and private keys used by EFS for the
         currently logged on user and backs them up to a file.
         If PathName is provided, the certificate used to encrypt the files
         is backed up. Otherwise, the user's current EFS certificate and keys
         will be backed up.
         The certificates and private keys are written to a file name
         PathNameWithoutExtension plus the file extension .pfx.</pre>
<p>It is recommended that you always encrypt both the file and the folder in which it resides, this prevents an encrypted file from becoming decrypted when it is modified.</p>
<p>Cipher cannot encrypt files that are marked as <a href="attrib.html">read-only</a>.<br>
Cipher will accept multiple folder names and wildcard characters. <br>
You must separate multiple parameters with at least one space.</p>
<p>The <span class="code">/W</span> option will remove data on unused portions of a volume, effectively erasing data that  still resides on a hard drive after deletion. See <a href="https://support.microsoft.com/kb/814599">Q814599</a> for a description of this.<br>
<b><br>
Examples
</b></p>
<p>List  encrypted files in the reports folder:</p>
<p class="code">CIPHER c:\reports\* </p>
<p>Encrypt the Reports folder and all subfolders:</p>
<p class="code">CIPHER /e /s:C:\reports</p>
<p>Back up the certificate and private key currently used to
encrypt and decrypt EFS files to a file:</p>
<p class="code">CIPHER /x c:\myefsbackup</p>
<p><i class="quote">“He that would make his own liberty secure must guard even his enemy from oppression; for if he violates this duty he establishes a precedent that will reach to himself” ~ Thomas
Paine</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="fsutil.html">FSUTIL</a> - File and Volume utilities<br>
<a href="cmdkey.html">CMDKEY</a> - Manage stored usernames/passwords<br>
Powershell:   <a href="../ps/convertto-securestring.html">ConvertTo-SecureString</a> - Convert to a secure string</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cipher.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

