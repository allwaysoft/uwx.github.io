---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-History</h1> 
<p>Add entries to the end of the session history (the commands entered during the current session). </p>
<pre>Syntax
      Add-History [[-inputObject] <i>PSObject</i>[]] [-passthru] [<a href="common.html"><i>CommonParameters</i></a>]

key
    -inputObject <i>PSObject</i>[]
        Adds the specified HistoryInfo objects to the session history. You can 
        use this parameter to submit a HistoryInfo object from <a href="get-history.html">Get-History</a>, <a href="import-clixml.html">Imp
        ort-Clixml</a>, or <a href="import-csv.html">Import-Csv</a> to Add-History.

    -passthru <i>SwitchParameter</i>
        Passes the object created by this cmdlet through the pipeline. 
        By default, this cmdlet does not pass any objects through the pipeline.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Export session history to a file :</p>
<p><span class="code">C:\PS&gt; get-history | export-csv E:\SessionHist.csv</span></p>
<p>Import session history from a file (this could be a different session on a different machine):</p>
<p><span class="code"> C:\PS&gt; import-csv SessionHist.csv | add-history</span><br>
<br>You can also pipe commands directly from <span class="code">get-history</span> to <span class="code">add-history</span> which will re-arrange the order of items in the command line history. Piping history command (either from file or from get-history) to <span class="code">invoke-history</span> will actullly run the commands.</p>
<p class="quote"><i>“History teaches us that men and nations behave wisely once they have exhausted all other alternatives” ~ Abba Eban </i></p>
<p><b>Related:</b><br>
<br>
<a href="get-history.html">Get-History</a><br>
<a href="invoke-history.html">invoke-history</a><br>
Equivalent bash command: <a href="../bash/history.html">history</a> - Command Line history</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="add-history.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

