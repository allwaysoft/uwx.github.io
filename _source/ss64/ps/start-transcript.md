---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Start-Transcript</h1> 
<p>Start a transcript of a command shell session, record the session to a text file.</p>
<pre>Syntax
      Start-Transcript [-Path] <i>string</i>] [-Force] [-noClobber]
              [-Append] [-WhatIf] [-Confirm] [<i>CommonParameters</i>]
Key
   -Path <i>string</i>
       The path to the transcript file. 

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. override a files read-only attribute.

   -NoClobber 
       Do not overwrite an existing file.

   -Append 
       Add the new transcript to the end of an existing file.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Start-Transcript  creates a record of a PowerShell session in a text file. The transcript file includes all commands typed and all the console output.</p>
<p>If no path is specified, Start-Transcript will use the path in the value of the $Transcript global variable. If this variable has not been set, Start-Transcript will store the transcripts in <span class="code">$Home\My Documents\PowerShell_transcript.&lt;time-stamp&gt;.txt</span></p>
<p><b>Examples</b></p>
<p>Start a transcript:</p>
<p><span class="code">PS C:\&gt; start-transcript -path c:\docs\MyTranscript.txt</span><br>
  <br>
<i class="quote">“Scholars who contemplate on their thoughts and translate them into actions are the ones who are really great and noble” ~ Rig Veda</i></p>
<p><b>Related:</b></p>
<p><a href="stop-transcript.html">Stop-Transcript</a> - Stop the transcription process<br>
Equivalent bash command: <span class="code">Script</span> - Start a transcript of a  shell session</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="start-transcript.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

