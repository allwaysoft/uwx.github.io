---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-BitsFile</h1> 
<p>Add one or more files to an existing Background Intelligent Transfer Service (BITS) transfer job.</p>
<pre>Syntax
      Add-BitsFile [-BitsJob] <i>BitsJob</i>[] [-Source] <i>string</i>[] [[-Destination] <i>string</i>[]]
               [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -BitsJob <i>BitsJob</i>[]
       The BITS transfer job(s) to which you want to add files.
       Pipe a value to this parameter from other cmdlets that return BitsJob objects, such as Get-BitsTransfer.

   -Destination <i>string</i>[]
       The destination location and the names of the files to be transferred.
       The destination names are paired with the corresponding source file names.
       For example, the first file name specified in the -Source parameter corresponds to the first
       file name in the -Destination parameter, and the second file name in the -Source parameter
       corresponds to the second file name in the -Destination parameter.
       The -Source and -Destination parameters must have the same number of elements.

   -Source <i>string</i>[]
       The source location and the names of the files to be transferred.
       The source file names are paired with the corresponding destination file names.
       For example, the first file name specified in the -Source parameter corresponds to the first
       file name in the -Destination parameter, and the second file name in the -Source parameter
       corresponds to the second file name in the -Destination parameter.
       The -Source and -Destination parameters must have the same number of elements. You can use standard wildcard characters such as the asterisk (*) and the question mark (?), or you can use a range operator such as "[a-r]".

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Add-BitsFile  adds files to a BITS transfer job. Specify the files to add to the BITS transfer job by name at the command prompt or in a comma-separated value (CSV) file. <br>
An upload job can contain only one file. To upload more than one file, use <a href="import-csv.html">Import-CSV</a>, and pipe the output to Add-BitsFile.</p>
<p><b>Examples</b></p>
<p>Append a file to the transfer queue of an existing BITS transfer job:</p>
<p><span class="code">PS C:\&gt; Get-BitsTransfer -JobId 10648CFA-C1D7-4A82-8A9D-80B19224879C | Add-BitsFile -Source http://server64/shared/testfile1.txt -Destination c:\demo\testfile1.txt</span></p>
<p>Append a set of files to the transfer queue of an existing BITS transfer job:</p>
<p><span class="code">PS C:\&gt; $myJob = Get-BitsTransfer -JobId 10648CFA-C1D7-4A82-8A9D-80B16224879C<br>
PS C:\&gt; Add-BitsFile -BitsJob $myJob -Source http://server64/shared/testfile1.txt, http://server64/shared/testfile2.txt -Destination c:\demo\testfile1.txt, c:\demo\testfile2.txt</span></p>
<p>Add a set of files to the transfer queue of a new BITS transfer job:</p>
<p><span class="code">PS C:\&gt; $myJob = Start-BitsTransfer -Suspended<br>
PS C:\&gt; Import-CSV filelist.txt | Add-BitsFile -BitsJob $myJob<br>
PS C:\&gt; Resume-BitsTransfer -BitsJob $myJob</span></p>
<p><i>“Nothing can add more power to your life than concentrating all your energies on a limited set of targets” - Nido Qubein</i></p>
<p><b>Related:</b></p>
<p><a href="remove-bitstransfer.html">Remove-BitsTransfer</a> - Delete a BITS transfer.<br>
<a href="bits.html">BITS PowerShell cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="add-bitsfile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

