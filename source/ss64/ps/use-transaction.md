---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Use-Transaction</h1> 
<p>Add a script block to the active transaction.</p>
<pre>Syntax
      Use-Transaction [-TransactedScript] <i>scriptblock</i> 
         [-UseTransaction] [<i>CommonParameters</i>]

Key
   -TransactedScript <i>scriptblock</i>
      The script block that is run in the transaction.
      Enter any valid script block enclosed in braces {  }
      This parameter is required.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Show the effect of rolling back a transaction that includes Use-Transaction commands. When the transaction is rolled back, the transacted changes are discarded and the data is unchanged:</p>
<p><span class="code">PS C:\&gt; Start-transaction<br>

PS C:\&gt; $myTxString = New-Object Microsoft.PowerShell.Commands.Management.TransactedString<br>

PS C:\&gt; $myTxString.Append("Hello")<br>
PS C:\&gt; use-transaction -TransactedScript { $myTxString.Append(", World") } -UseTransaction<br>

PS C:\&gt; Undo-transaction<br>

PS C:\&gt; $myTxString.ToString()<br>
Hello</span></p>
<p class="quote"><i>“Two roads diverged in a wood, and I, I took the one less traveled by, And that has made all the difference” ~ Robert Frost (The Road Not Taken)</i></p>
<p><b>Related:</b></p>
<p> <a href="start-transaction.html">Start-Transaction</a>        - Start a new transaction 
<a href="complete-transaction.html"><br>
Complete-Transaction</a> - Commit the transaction<br> 
<a href="get-transaction.html">Get-Transaction</a> - Get information about the active transaction<br> 
<a href="undo-transaction.html">Undo-Transaction</a> - Roll back a transaction</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

