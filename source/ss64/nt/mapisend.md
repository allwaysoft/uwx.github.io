---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MAPISEND (<a href="http://www.amazon.com/dp/0735605831?tag=ss64">Back Office/Exchange Resource kit</a>)</h1>
<p>Send email from the command line.</p>
<pre>Syntax
      MAPISEND -u "<i>profile</i>" -p <i>password</i>
         -r <i>recipient</i> -s "<i>subject</i>" <b>-m</b> <i>text message</i> [<i>options</i>]

      MAPISEND -u "<i>profile</i>" -p <i>password</i>
         -r <i>recipient</i> -s "<i>subject</i>" <b>-t</b> <i>text_file</i> [<i>options</i>]

Options
      -i  interactive login (prompts for profile and password)
      -c  cc: list
      -f  File Attachment - path and file name(s)
      -v  generates verbose output (an 8 line summary of the message)

"profile" is the profile name (user mailbox) of sender
"subject" is the subject line 
"recipient" is one or more recipient(s) 
If more than one recipient - separate with ';' these must not be ambiguous in the default address book.</pre>
<p>Mapisend requires MAPI - i.e the MS Outlook client needs to be installed. </p>
<p>MAPI cannot  be used to generate HTML-formatted messages. As an alternative, consider using the Microsoft Outlook Object Model, CDONTS, CDOSYS, CDOEX, or a third-party SMTP control. </p>
<p><b>Examples</b></p>
<pre>mapisend -u "MS Exchange Settings" -p MyPassword -r billg@sun.com -s "Subject" -m "Test message text"

mapisend -u "MS Exchange Settings" -p MyPassword -r billg@hp.com -s "Subject" -t c:\MyMail.txt &gt;&gt; c:\mail.log</pre>
<p><i class="quote">“The new electronic interdependence re-creates the world in the image of a global village” ~ Marshall McLuhan </i> <br>
<b><br>
Related:</b><br>
<br>
<a href="https://support.microsoft.com/kb/290499">Q290499</a> - programmatic access to Outlook email<br>
Powershell: <a href="../ps/new-object.html">New-Object</a> Net.Mail.MailMessage - Send email via SMTP<br>
<a href="http://www.blat.net/">BLAT (freeware)</a> - Send email via SMTP (avoids the need to install MS Outlook)<br>
A command like <span class="code"><a href="start.html">START</a> mailto:billg@sun.com</span>  will send email but requires the user to press send. <br>
Equivalent bash command (Linux): sendmail</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

