---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE CERTIFICATE</h1>
<p>Add a certificate to the database.</p>
<pre>Syntax:
      CREATE CERTIFICATE <i>certificate</i> [ AUTHORIZATION <i>user_name</i> ] 
         {FROM <i>existing_keys</i> | <i>generate_new_keys</i> }
            [ACTIVE FOR BEGIN_DIALOG =  {<u>ON</u> | OFF }]
        

   existing_keys:
       ASSEMBLY <i>assembly_name</i>
       {[EXECUTABLE ] FILE = '<i>path_to_file</i>' [WITH PRIVATE KEY ( <i>private_key_options</i> )]}
        
   generate_new_keys: 
       [ENCRYPTION BY PASSWORD = '<i>password</i>'] 
           WITH SUBJECT = '<i>certificate_subject_name</i>' 
              [ , <i>date_options</i> [ ,...n ] ]

   private_key_options:
       FILE = '<i>path_to_private_key</i>'
          [, DECRYPTION BY PASSWORD = '<i>password</i>' ]
             [, ENCRYPTION BY PASSWORD = '<i>password</i>' ]  

   date_options:
       START_DATE = 'mm/dd/yyyy'
       EXPIRY_DATE = 'mm/dd/yyyy'

Key:
 user_name        The user that will own the certificate.
 assembly_name    A signed assembly already loaded into the database.
 path_to_file     The path (local or UNC) , including filename
                  to a DER-encoded file that contains the certificate.
 WITH PRIVATE KEY  Load the private key of the certificate into SQL Server. 
 START_DATE       Date the certificate becomes valid (default=current date.)
 EXPIRY_DATE      Date the certificate expires (default= 1 year after START_DATE)
 ACTIVE FOR BEGIN_DIALOG Make available to the initiator of a Service Broker dialog conversation.</pre>
<p> Users of these built-in functions for encryption and signing must decide when to check if the certificate has expired.</p>
<p><b>Example</b></p>
<pre>USE MyDb;<br>CREATE CERTIFICATE SS64 <br>   ENCRYPTION BY PASSWORD = 'pG6464qwerty247y'<br>   WITH SUBJECT = 'Demonstration certificate', <br>   EXPIRY_DATE = '02/28/2014';<br>GO</pre>
<p class="quote"><i>“The certified quality of person's actual education reflects in the degree of respect he employs in his words while talking with others” ~ Anuj Somany</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="certificate_c.html">CREATE CERTIFICATE</a><br>
  <a href="certificate_d.html">DROP CERTIFICATE</a><br>
  <a href="certificate_b.html">BACKUP CERTIFICATE</a>  <br>
  <a href="http://en.wikipedia.org/wiki/X.509">X.509 standard</a>  <br>
<a href="../pass/pass.html">Password generator</a><br>  Equivalent Oracle commands:<a href="../bash/export.html">  </a>  <a href="../ora/system_a.html">ALTER SYSTEM</a> SET ENCRYPTION KEY/SET WALLET..</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="certificate_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

