---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>email function</h1>
<p>A PowerShell 1.0 function for sending email, in PowerShell 2.0 and above, you can use <a href="send-mailmessage.html">send-mailmessage</a> instead.</p>
<pre>Function SS64Mail($strSubject, $strBody, $strSenderemail, $strRecipientemail, $AttachFile)
   {
      $strSMTP = "<b>ExchangeServer01</b>"  #Change this to your SMTP/Exchange server
     
      $MailMessage = New-Object System.Net.Mail.MailMessage
      $SMTPClient = New-Object System.Net.Mail.smtpClient
      $SMTPClient.host = $strSMTP
      $Recipient = New-Object System.Net.Mail.MailAddress($strRecipientemail, "Recipient")
      $Sender = New-Object System.Net.Mail.MailAddress($strSenderemail, "Sender")
     
      $MailMessage.Sender = $Sender
      $MailMessage.From = $Sender
      $MailMessage.Subject = $strSubject
      $MailMessage.To.add($Recipient)
      $MailMessage.Body = $strBody
      if ($AttachFile -ne $null) {$MailMessage.attachments.add($AttachFile) }
      $SMTPClient.Send($MailMessage)
   }
</pre>
<p>Example:</p>
<pre>$dtmToday = ((Get-Date).dateTime).tostring()
$strSubjectLine = "Daily Report - $dtmToday"    
$strBodyText = "report attached."
$strSender = "your.name@example.com"
$strRecipient = "their.name@example.com"
$Attachment = "C:\scripts\results.doc"
# Call the function to send the email
SS64Mail $strSubjectLine $strBodyText $strSender $strRecipient $Attachment</pre>
<p class="quote"><i>“In most companies, you don't get too much mail where people are saying, 'Hey, we lost this account.' But that's what you really need to know about, because it might change what you're doing. You need to know about competitive activity. You need to know about customer feedback that says things should be better” ~ Bill Gates </i></p>
<p><b>Related:</b></p>
<p> <a href="syntax-functions.html">PowerShell Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-email.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

