---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_SMTP</h1> 
<p>Send e-mail via Simple Mail Transfer Protocol (SMTP).</p>
<pre>Subprocedures:

connection Record Type 
           A PL/SQL record type used to represent a SMTP connection. 

reply, replies Record Types 
           Record types used to represent an SMTP reply line.  

open_connection Function 
           Open a connection to an SMTP server. 

command(), command_replies() Functions 
           Perform a generic SMTP command. 

helo Function 
           Perform initial handshaking with SMTP server after connecting. 

ehlo Function 
           Perform initial handshaking with SMTP server after connecting,
           with extended information returned. 

mail Function 
           Initiate a mail transaction with the server.
           The destination is a mailbox. 

rcpt Function 
           Specify the recipient of an e-mail message. 

data Function 
           Specify the body of an e-mail message. 

open_data(), write_data(), write_raw_data(), close_data() Functions 
           Provide more fine-grain control to the data() API. 

rset Function 
           Abort the current mail transaction. 

vrfy Function 
           Verify the validity of a destination e-mail address. 

noop() Function 
           The null command. 

quit Function 
           Terminate an SMTP session and disconnect from the server.</pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related:<br><br></b><a href="DBMS_AQELM.html">DBMS_AQELM</a><br><a href="http://java.sun.com/products/javamail/">JavaMail</a> from Sun has more functionality: royalty-free binary for JavaMail, IMAP, POP3 and SMTP</span></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="UTL_SMTP.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

