---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.SendObject</h1>
<p> Send an email with a database object attached.</p>
<pre>Syntax
      DoCmd.SendObject(<i>ObjectType, ObjectName, OutputFormat,
                       To, Cc, Bcc, Subject, MessageText,
                       EditMessage, TemplateFile</i>)

Key
   <i>ObjectType</i> An <a href="acsendobjecttype.html">AcSendObjectType</a> constant that specifies
              the type of object to send.<i>

   ObjectName</i> The name of an object to email, of the type selected by
              the <i>objecttype</i> argument. To include the active
              object in the email, specify the object's type
              with <i>ObjectType</i> and leave this argument blank.
              If both <i>ObjectType</i> and <i>ObjectName</i> are blank
              Access will send an email without an included database object.

   <i>OutputFormat
         </i>     An <a href="acformattype.html">AcFormatType </a>constant that specifies the 
              The output format of the object being sent.

   <i>To    </i>     Names to put in the To line of the email.

   <i>CC</i>         Names to put in the CC line of the email.

   <i>Bcc</i>        Names to put in the BCC line of the email.

   <i>Subject</i>    The email subject line.

  <i>MessageText</i> Text to include in the body of the email

  <i>EditMessage</i>  Use <u>True</u> (-1) to open an email application
               so the message can be edited.
               Use False (0) to send immediately without editing.

   <i>TemplateFile
            </i>  The full pathname of an HTML file to
              use as a template for the email.
</pre>
<p> Use SendObject() to include the specified Access datasheet, form, report, or module in an email.</p>
<p>Access will change much of the formatting when converting to email, forms will display as if in datasheet view, Yes no fields will appear as -1 or 0. When you send a datasheet, form, or data access page in HTML format, one .html file is created. When you send a report in HTML format, one .html file is created for each page in the report.</p>
<p>If you send a report, the only controls that are included in the object are text boxes (for .xls files), or text boxes and labels (for .rtf, .txt, and .html files). All other controls are ignored. Header and footer information is also not included. The only exception to this is sending a report in Excel format, a text box in a <i>group footer</i> containing an expression with the <span class="code">Sum</span> function will be included in the object.</p>
<p>The message text of the email will be in plain text, in many email clients this will by default, render in the <a href="http://en.wikipedia.org/wiki/Courier_%28typeface%29#Courier_New">Courier New</a> font but the choice of font for plain text emails can be configured under<span class="code"> Tools | Options</span>. </p>
<p><b>Example</b></p>
<p>'email the table T_Sales to two people in a spreadsheet format:<br>
<span class="code">DoCmd.SendObject acSendTable, "T_Sales", acFormatXLS, _<br>
"Sergio Buzio; fiona@example.com", , ,_<br>
"Spreadsheet of sales"</span></p>
<p class="quote"><i>“Email is a wonderful thing for people whose role in life is to be on top of things. But not for me; my role is to be on the bottom of things. What I do takes long hours of studying and uninterruptible concentration” ~ Donald Knuth (<a href="http://www-cs-faculty.stanford.edu/%7Eknuth/email.html">Knuth versus Email</a>)</i></p>
<p><b>Related:</b></p>
<p><a href="http://www.fmsinc.com/microsoftaccess/email/sendobject.html">Total Access Emailer</a> - Utility from FMSinc that extends the functionality of SendObject() </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

