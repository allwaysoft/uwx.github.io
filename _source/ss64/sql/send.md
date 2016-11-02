---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SEND</h1>
<p>Send a message, using an existing conversation.</p>
<pre>Syntax:
      SEND ON CONVERSATION <i>conversation_handle</i>
         [MESSAGE TYPE <i>message_type</i> ]  [( <i>message_body</i>) ] [;]

Key
   conversation_handle  Conversation the message belongs to.
   message_type         As defined in the service contract for this conversation.
   message_body         An expression that can be converted to varbinary(max).</pre>
<p>    This statement will lock the conversation group (of the given handle).</p>
<p>Examples</p>
<pre>SEND ON CONVERSATION @MyDialog_handle<br>    MESSAGE TYPE [//ss64.com/MyService/MyContract]<br>    (@variable_containing_message_body) ;</pre>
<p class="quote"><i>#..then they send me away to teach me how to be sensible,
logical, responsible, practical# - Supertramp </i></p>
<p><b>Related commands:</b></p>
<p>  BEGIN DIALOG CONVERSATION<br>
  BEGIN CONVERSATION TIMER<br>
END CONVERSATION</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="send.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

