---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Undo-Transaction</h1> 
<p>Roll back the active transaction.</p>
<pre>Syntax
       Undo-Transaction [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Undo-Transaction  rolls back the active transaction. When a transaction is rolled back , the changes made by  commands within the transaction are discarded and the data is restored to its original form.<br>
<br>
If the transaction includes multiple subscribers, an Undo-Transaction command rolls back the entire transaction for
all subscribers.<br>
<br>
By default, transactions are rolled back automatically if any command in the transaction generates an error. However, transactions can be started with a different rollback preference and you can use this cmdlet to roll back the active transaction at any time. </p>
<p><b>Examples</b></p>
<p>Start a transaction and then roll it back (undo) so that no changes are made:</p>
<p><span class="code">PS C:\&gt; cd hkcu:\software<br>

PS HKCU:\Software&gt; start-transaction<br>
PS HKCU:\Software&gt; new-item SS64 -usetransaction<br>
PS HKCU:\Software&gt; undo-transaction</span></p>
<p class="quote"><i>“That glittering hope is immemorial and beckons many men to their undoing” ~ Euripides</i></p>
<p><b>Related:</b></p>
<p> <a href="start-transaction.html">Start-Transaction</a>        - Start a new transaction 
<a href="complete-transaction.html"><br>
Complete-Transaction</a> - Commit the transaction<br> 
<a href="get-transaction.html">Get-Transaction</a> - Get information about the active transaction</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

