---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Send-MailMessage</h1>
<p>Send an email message.</p>
<pre>Syntax
      Send-MailMessage [-To] <i>string</i>[] [-Subject] <i>string</i> -From <i>string
        </i> [[-Body] <i>string</i>] [[-SmtpServer] <i>string</i>] [-Attachments <i>string</i>[]]
            [-Bcc <i>string</i>[]]  [-Cc <i>string</i>[]] [-BodyAsHtml]
               [-Credential <i>PSCredential</i>] [-DeliveryNotificationOption <i>NotifyOptions</i>]
                  [-Encoding <i>Encoding</i>] [-Priority <b>{</b>Normal <b>|</b> Low <b>|</b> High<b>}</b>]
                     [-UseSsl] [<i>CommonParameters</i>]

Key
   -Attachments <i>string</i>[]
       The path and file names of files to be attached to the email message.
       Use this parameter or pipe the path/file names.

   -Bcc <i>string</i>[]
       Email addresses that receive a copy of the mail but are not listed as recipients of the message.
       Enter names (optional) and the email address, such as "Name &lt;someone@example.com&gt;"

   -Body string
       The body (content) of the email message.

   -BodyAsHtml
       Indicates that the value of the Body parameter contains HTML.

   -Cc <i>string</i>[]
       Email addresses to which a carbon copy (CC) of the email message is sent.
       Enter names (optional) and the email address, such as "Name &lt;someone@example.com&gt;".

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action. The default is the current user.

       Type a user name, such as "User64" or "Domain64\User64". Or, enter a PSCredential object,
       such as one from the Get-Credential cmdlet.

   -DeliveryNotificationOption
       Delivery notifications (if accepted by the recipient) will be passed back to the email address
       specified in the -From parameter. The alias for this parameter is "-dno".

       <i>NotifyOptions</i>:

          <u>None</u>        No notification.
          OnSuccess   Notify if the delivery is successful.
          OnFailure   Notify if the delivery is unsuccessful.
          Delay       Notify if the delivery is delayed.
          Never       Never notify.

   -Encoding <i>Encoding</i>
       The encoding used for the body and subject. '<a href="../unicode.html">unicode</a>' will send UTF16.
       Valid values are <u><b>ASCII</b></u>, <b>UTF8</b>, UTF7, UTF32, Unicode, BigEndianUnicode, Default, and OEM.

   -From <i>string</i>
       The address from which the mail is sent.
       Enter a name (optional) and email address, such as "Name &lt;someone@example.com&gt;". This parameter is required.

   -Priority <i>MailPriority</i>
       The priority of the email message.
       The valid values for this are <u>Normal</u>, High, and Low.

   -SmtpServer <i>string</i>
       The name of the SMTP server that sends the email message.

       The default value is the value of the $PSEmailServer preference variable.
       If the preference variable is not set and this parameter is omitted, the command fails.

   -Subject <i>string</i>
       The subject of the email message. This parameter is required.

   -To <i>string</i>[]
       The addresses to which the mail is sent.
       Enter names (optional) and the email address, such as "Name &lt;someone@example.com&gt;". Required.

   -UseSsl
       Use the Secure Sockets Layer (SSL) protocol to establish a connection to the remote computer 
       to send mail. By default, SSL is not used.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Send an email (with no body) from User01 to User02:</p>
<p><span class="code">C:\PS&gt; send-mailmessage -to "User01 &lt;user01@example.com&gt;" -from "User02 &lt;user02@example.com&gt;" -subject "Test mail"</span></p>
<p>Send an email with an attachment to two users and BCC another:</p>
<p><span class="code">C:\PS&gt; send-mailmessage -from "me@example.com" -to "user01@example.com", "user02@example.com" -bcc helpdesk@example.com -subject "Hello World" -body "See attachment below." -Attachment "data.csv" -smtpServer smtp.example.com</span></p>
<p> Send an email message from User01 to the ITGroup mailing list with a copy (CC) to User02 and a blind
carbon copy (BCC) to the IT manager (ITMgr).: </p>
<p><span class="code">C:\PS&gt; send-mailmessage -to "ITGroup &lt;itdept@example.com&gt;" -from  "User01 &lt;user01@example.com&gt;" -cc "User02 &lt;user02@example.com&gt;" -bcc ITMgr &lt;itmgr@example.com&gt; -subject "Don't forget today's meeting!" -credential domain64\admin01 -useSSL</span></p>
<p>Send an HTML email: </p>
<pre> $body = "&lt;HTML&gt;&lt;HEAD&gt;&lt;META http-equiv=""Content-Type"" content=""text/html; charset=iso-8859-1"" /&gt;&lt;TITLE&gt;&lt;/TITLE&gt;&lt;/HEAD&gt;"
 $body += "&lt;BODY bgcolor=""#FFFFFF"" style=""font-size: Small; font-family: TAHOMA; color: #000000""&gt;&lt;P&gt;"
 $body += "Dear &lt;b&gt;&lt;font color=red&gt;customer&lt;/b&gt;&lt;/font&gt;&lt;br&gt;"
 $body += "This is an &lt;b&gt;HTML&lt;/b&gt; email&lt;br&gt;"
 $body += "Click &lt;a href=http://www.google.com target=""_blank""&gt;here&lt;/a&gt; to open google &lt;br&gt;"
 send-mailmessage <span class="code">user01@example.com</span> "Test email" -bodyashtml -body $body -from me@example.com -SmtpServer smtp.example.com
</pre>
<p class="quote"><i>“Learning music by reading about it is like making love by mail” ~ 
Luciano Pavarotti</i></p>
<p><b>Related:</b><br>
<br>
<a href="out-printer.html">Out-Printer</a> - Send the output to a printer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="send-mailmessage.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

