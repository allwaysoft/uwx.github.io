---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disable-ComputerRestore</h1> 
<p>Disable System Restore on a specified file system drive.</p>
<pre>Syntax
      Disable-ComputerRestore [-Drive] <i>string</i>[]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -drive <i>string</i>
       The file system drive, one or more drive letters, each followed by :\ and
       enclosed in quotation marks, such as "C:\" or "D:\"

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  You cannot use Disable-ComputerRestore to disable System Restore on a remote network drive, even if the drive is mapped to 
the local computer, and you cannot disable System Restore on drives that are not eligible for System Restore, such as external drives.<br>
<br>
To disable System Restore on any drive, System Restore must be disabled on the system drive, either before or concurrently.</p>
<p><b>Examples</b></p>
<p>Disable System Restore on the C: drive: </p>
<pre>PS C:&gt; disable-computerrestore -drive "C:\"
</pre>
<p>Disable System Restore on the C: and D: drives:</p>
<pre>PS C:&gt; disable-computerrestore "C:\", "D:\"</pre>
<p class="quote"><i>“Don't simply retire from something; have something to retire to” ~ Harry Emerson Fosdick</i></p>
<p><b>Related:</b></p>
<p>  <a href="enable-computerrestore.html">Enable-ComputerRestore</a>     - Enable System Restore on a drive</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="disable-computerrestore.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

