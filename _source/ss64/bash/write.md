---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>write</h1> 
<p>Send a message to another user.</p>
<pre>Syntax:

      write <i>user</i> [<i>ttyname</i>]</pre>
<p>Write allows you to communicate with other users, by copying lines from your terminal to theirs.</p>
<p>When you run the write command, the user you are writing to gets a message of the form:</p>
<p> Message from yourname@yourhost on yourtty at hh:mm ...</p>
<p>Any further lines you enter will be copied to the specified user's terminal. If the other user wants to reply, they must run write as well.</p>
<p>When you are done, type an end-of-file or interrupt character. The other user will see the message EOF indicating that the conversation is over.</p>
<p>You can prevent people (other than the super-user) from writing to you with the mesg(1) command. Some commands, for example nroff(1) and pr(1), can disallow writing automatically, so that your output isn't overwritten.</p>
<p>If the user you want to write to is logged in on more than one terminal, you can specify which terminal to write to by specifying the terminal name as the second operand to the write command. Alternatively, you can let write select one of the terminals - it will pick the one with the shortest idle time. This is so that if the user is logged in at work and also dialed up from home, the message will go to the right place.</p>
<p>The traditional protocol for writing to someone is that the string '-o', either at the end of a line or on a line by itself, means that it's the other person's turn to talk. The string 'oo' means that the person believes the conversation to be over. </p>
<p><b>Example</b></p>
<p class="code">$ Write maude <br>
This is a test message
<span class="code"> &lt;CTRL-D&gt; </span> </p>
<p class="quote"><i>“We do not write because we want to; we write because we have to” ~  W. Somerset Maugham</i></p>
<p><b>Related:</b></p>
<p>mesg y - Allow  
write access to your terminal <br>
mesg n - Disallow  
write access to your terminal <br> 
talk - Talk to another user <br> 
<a href="who.html">who</a> - Print all usernames currently logged in</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="write.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
