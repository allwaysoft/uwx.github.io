---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MSG.exe </h1>  
<p>Send a pop-up message to a user.</p><pre>Syntax
      MSG <i>username</i> [<i>options</i>] [<i>message</i>]

      MSG <i>sessionname</i> [<i>options</i>] [<i>message</i>]

      MSG <i>sessionid</i>   [<i>options</i>] [<i>message</i>]

      MSG  @<i>filename</i> [<i>options</i>] [<i>message</i>]

      MSG * [<i>options</i>] [<i>message</i>]

Options

   <i>username</i>            The user to send to, <span class="code">* </span>will send to all sessions on the machine.

   /SERVER:<i>servername</i>  The server to contact (default is current).

   /TIME:<i>seconds</i>       Time delay to wait for receiver to acknowledge msg.

   /V                  Verbose, display extra information.

   /W                  Wait for response from user, useful with /V.

   <i>message</i>             The message text to send, some special characters may
                       have to be escaped.</pre>
<p><span class="code"> </span>Msg is most commonly used to send Terminal Server/Citrix shutdown messages.<br>
The 'Home' editions of Windows don’t include MSG. </p>
<p>Special characters: dash (-) forward slash (/) and quote marks (")  can be escaped with a backslash (<a href="http://ss64.org/viewtopic.php?id=2075">undocumented</a>) </p>
<p>If no message text to send is specified, MSG will prompt for it (also reads from stdin)<br>
<span class="code">@filename</span> identifies a file containing a list of usernames,
sessionnames or sessionids to send the message to.<br>
</p>
<p><b>Examples</b></p>
<p class="code">C:\&gt; msg user64 "The system will shutdown at 10pm"</p>
<p class="code">C:\&gt; msg * "The \"ACME\" system is currently down."</p>
<p class="quote"><i># And these children that you spit on, As they try to change their worlds<br>
Are immune to your consultations, they're quite aware of what they're going through # - David Bowie</i></p>
<p><b>Related:</b><br>
<br>
<a href="echo.html">ECHO</a> - Display message on screen<br>
<a href="type.html">TYPE</a> - Display the contents of a text file<br>
Powershell:<br>
<span class="code">PS C:&gt; [Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")<br>
PS C:&gt; [Windows.Forms.MessageBox]::show("Hello World", "My PopUp Message Box")</span><br>
Equivalent bash command (Linux):
<a href="../bash/echo.html">echo</a> - Display message on screen</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="msg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

