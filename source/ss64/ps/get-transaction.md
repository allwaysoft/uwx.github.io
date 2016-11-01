---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Transaction</h1>
<p>Get the current (active) transaction.</p>
<pre>Syntax
      Get-Transaction [<i>CommonParameters</i>]

Key
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Get-Transaction  gets an object that represents the current transaction in the session.<br>
<br>
This cmdlet never returns more than one object, because only one transaction is active at a time. If one
or more independent transactions are started (using Start-Transaction -Independent), the most recently started transaction is active, and that will be returned by Get-Transaction.<br>
<br>
When all active transactions have either been rolled back or committed, Get-Transaction shows the transaction that 
was most recently active in the session.</p>
<p><b>Example</b></p>
<p>Show the properties and methods of the transaction object:</p>
<p><span class="code">PS C:\&gt; get-transaction | get-member</span></p>
<p>Show  the property values of a transaction object for a transaction that has been committed:</p>
<p><span class="code">PS C:\&gt; cd hklm:\software<br>
HKLM:\SOFTWARE&gt; Start-Transaction<br>
HKLM:\SOFTWARE&gt; New-Item SS64 -UseTransaction<br>
HKLM:\SOFTWARE&gt; Complete-Transaction<br>
HKLM:\SOFTWARE&gt; Get-Transaction</span></p>
<p class="quote"><i>“A single arrow is easily broken, but not ten in a bundle” - Japanese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="start-transaction.html">Start-Transaction</a> - Start a new transaction <a href="complete-transaction.html"><br>
Complete-Transaction</a> - Commit the transaction<a href="use-transaction.html"><br>
Use-Transaction</a> - Add a command or expression to the transaction <a href="undo-transaction.html"><br>
Undo-Transaction</a> - Roll back a transaction</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-transaction.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

