---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE CONTRACT</h1>
<p>Create a contract in the database.</p>
<pre>Syntax:
      CREATE CONTRACT <i>contract</i>  [AUTHORIZATION <i>owner</i> ]
         ( {% raw %}{{{% endraw %}<i>message_type_name </i>| [DEFAULT ] }
           SENT BY { INITIATOR | TARGET | ANY }
            } [ ,...n] )  [;]

Key:<i>
   contract</i>          Name of the contract
   <i>owner</i>        Owner of the contract(database user or role)
   message_type_name Name of a message type to be included as part of the contract. 
</pre>
<p>A contract must allow the initiator to send a message, the statement will fail if the contract does not contain at least one message type that is SENT BY ANY or SENT BY INITIATOR.</p>
<p>Example</p>
<pre>CREATE CONTRACT          
    [//ss64.com/Sales/ContractSale]         
    ( [//ss64.com/Sales/SubmitOrder]         
          SENT BY INITIATOR,                 
      [//ss64.com/Sales/ApproveOrder]         
          SENT BY TARGET         
    ) ;</pre>
<p class="quote"><i>"Love seems the swiftest, but it is the slowest of growths. No man or woman really knows what perfect love is until they have been married a
quarter of a century" ~ Mark Twain </i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="contract_d.html">DROP CONTRACT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="contract_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

