---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Complete-Transaction</h1>
<p>Commit the active transaction. All commands in the transaction are finalized and the data affected by the commands is changed.</p>
<pre>Syntax
      Complete-Transaction [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
 
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>If the transaction includes multiple subscribers, to commit the transaction, you must enter one Complete-Transaction command for every Start-Transaction command.</p>
<p><b>Example</b></p>
<p>Adding a new registry key:</p>
<p><span class="code">PS C:\&gt; cd hkcu:\software<br>
PS HKCU:\software&gt; start-transaction<br>
PS HKCU:\software&gt; new-item SS64 -UseTransaction<br>    
<br>
PS HKCU:\software&gt; dir SS*</span><br>
^ returns nothing as it is not part of the transaction<br>
<br>
<span class="code">PS HKCU:\software&gt; dir SS* -UseTransaction</span><br>
^ displays the new key<br> 
<br>
<span class="code"> PS HKCU:\software&gt; complete-transaction</span></p>
<p><i>“With the greater part of rich people, the chief enjoyment of riches consists in the parade of riches” - Adam Smith</i></p>
<p><b>Related:</b></p>
<p>  
<a href="start-transaction.html">Start-Transaction</a> - Start a new transaction <br>
<a href="get-transaction.html">Get-Transaction</a> - Get information about the active transaction <a href="use-transaction.html"><br>
Use-Transaction</a> - Add a command or expression to the transaction <a href="undo-transaction.html"><br>
Undo-Transaction</a> - Roll back a transaction</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="complete-transaction.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

