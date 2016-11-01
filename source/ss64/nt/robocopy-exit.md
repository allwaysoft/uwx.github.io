---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="robocopy.html">ROBOCOPY</a> Exit Codes</h1>
<p>The return code from Robocopy is a bitmap, defined as follows:</p>
<pre>    Hex   <i>Decimal</i>  Meaning if set

    0×00   0       No errors occurred, and no copying was done.
                   The source and destination directory trees are completely synchronized. 

    0×01   1       One or more files were copied successfully (that is, new files have arrived).

    0×02   2       Some Extra files or directories were detected. No files were copied
                   Examine the output log for details. 

    0×04   4       Some Mismatched files or directories were detected.
                   Examine the output log. Housekeeping might be required.

    0×08   8       Some files or directories could not be copied
                   (copy errors occurred and the retry limit was exceeded).
                   Check these errors further.

    0×10  16       Serious error. Robocopy did not copy any files.
                   Either a usage error or an error due to insufficient access privileges
                   on the source or destination directories.</pre>
<p>These  can be combined, giving a few extra exit codes:</p>
<pre>    0×03   3       (2+1) Some files were copied. Additional files were present. No failure was encountered.

    0×05   5       (4+1) Some files were copied. Some files were mismatched. No failure was encountered.

    0×06   6       (4+2) Additional files and mismatched files exist. No files were copied and no failures were encountered.
                   This means that the files already exist in the destination directory

    0×07   7       (4+1+2) Files were copied, a file mismatch was present, and additional files were present.</pre>
<p>Any value greater than 7 indicates that there was at least one failure during the copy operation.</p>
<p>You can use this in a batch file to report anomalies, as follows:</p>
<pre>    if %ERRORLEVEL% EQU 16 echo ***<b>FATAL ERROR</b>*** &amp; goto end
    if %ERRORLEVEL% EQU 15 echo OKCOPY + FAIL + MISMATCHES + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 14 echo FAIL + MISMATCHES + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 13 echo OKCOPY + FAIL + MISMATCHES &amp; goto end
    if %ERRORLEVEL% EQU 12 echo FAIL + MISMATCHES&amp; goto end
    if %ERRORLEVEL% EQU 11 echo OKCOPY + FAIL + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 10 echo FAIL + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 9 echo OKCOPY + FAIL &amp; goto end
    if %ERRORLEVEL% EQU 8 echo <b>FAIL</b> &amp; goto end
    if %ERRORLEVEL% EQU 7 echo OKCOPY + MISMATCHES + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 6 echo MISMATCHES + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 5 echo OKCOPY + MISMATCHES &amp; goto end
    if %ERRORLEVEL% EQU 4 echo <b>MISMATCHES</b> &amp; goto end
    if %ERRORLEVEL% EQU 3 echo OKCOPY + XTRA &amp; goto end
    if %ERRORLEVEL% EQU 2 echo XTRA &amp; goto end
    if %ERRORLEVEL% EQU 1 echo <b>OKCOPY</b> &amp; goto end
    if %ERRORLEVEL% EQU 0 echo <b>No Change</b> &amp; goto end
    :end  </pre>
<p><b>Example:</b></p>
<p>Copy files from one server to another</p>
<pre>ROBOCOPY \\Server1\reports \\Server2\backup *.*<br><span class="code">IF %ERRORLEVEL% LSS 8 goto finish</span><br>
Echo Something failed &amp; goto :eof
<br>:finish<br>Echo All done, no fatal errors.</pre>
<p>Bugs<br>
Version XP026 returns a success errorlevel even when it fails. </p>
<p class="quote"><i>“Few men of action have been able to make a graceful exit at the appropriate time” ~ Malcolm Muggeridge</i></p>
<p><b>Related:</b><br>
  <br>
<a href="robocopy.html">Robocopy </a> -
Robust File and Folder Copy<br>
<a href="https://support.microsoft.com/kb/954404">Q954404</a> - Robocopy Return codes in Windows 2008.<br>
<a href="http://blogs.msdn.com/adioltean/archive/2005/01/05/346793.aspx">Copy Open files</a> - with VShadow.exe (Shadow copies) <br>
  Equivalent bash command:
  <a href="../bash/rsync.html">rsync</a> - Remote file copy (Synchronize file trees)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="robocopy-exit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

