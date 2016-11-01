---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Invoke-History</h1> 
<p>Runs commands from the session history</p>
<pre>Syntax
      Invoke-History [[-id] <i>string</i>]
         [-whatIf] [-confirm] [<i>CommonParameters</i>]

Key
   -id
       The ID number, or the first few characters of a command in the
       session history.

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
Standard <a href="get-alias.html">Aliases</a> for Invoke-History:<span class="code"> r</span></p>
<p>To find the ID number of a command, use Get-History. <br>
You can pipeline commands from Get-History directly to Invoke-History. </p>
<p><b>Examples</b></p>
<p>Run the last (most recent) command:</p>
<p><span class="code">PS C:\&gt; r</span><br>
  <br>
  Run the most recent get- command in the session history:</p>
<p class="code">PS C:\&gt; invoke-history get-</p>
<p>Run commands 5 - 15 and 17: (separate multiple IDs with commas)</p>
<p class="code">PS C:\&gt; invoke-history (5..15), 17</p>
<p class="quote"><i>“Spam will be a thing of the past in two years’ time” ~ Bill Gates, 2004</i></p>
<p><b>Related:</b><br>
  <br>
<a href="add-history.html">Add-History</a> - Add entries to the session history <a href="get-history.html"><br>
Get-History</a> - Get a listing of the session history<br>
Equivalent bash command: <a href="../bash/history.html">history</a> - Command Line history</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="invoke-history.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

