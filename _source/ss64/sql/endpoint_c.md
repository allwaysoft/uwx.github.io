---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> CREATE ENDPOINT</h1>
<p>Create an endpoint and set properties.</p>
<pre>Syntax
      CREATE ENDPOINT <i>endPoint</i> [AUTHORIZATION <i>login</i>]
         [STATE = {STARTED | <u>STOPPED</u> | DISABLED} ]
            AS {HTTP | TCP } (<i>protocol_specific_arguments</i>)
               FOR {SOAP | TSQL | SERVICE_BROKER | DATABASE_MIRRORING} (<i>language_specific_arguments</i>)

<i>AS HTTP_protocol_specific_arguments</i> 
  AS HTTP (
    PATH = 'url'
    [[ , ] AUTHENTICATION = ( { BASIC | DIGEST | INTEGRATED | NTLM | KERBEROS } [ ,...<i>n</i> ] )
    [[ , ] PORTS = ( { CLEAR | SSL} [ ,...<i>n</i> ] )
    [[ , ] [SITE = {'*' | '+' | '<i>webSite</i>' },]
    [[ , ] CLEAR_PORT = clearPort ]
    [[ , ] SSL_PORT = SSLPort ]
    [[ , ] AUTH_REALM = { 'realm' | <u>NONE</u> } ]
    [[ , ] DEFAULT_LOGON_DOMAIN = { 'domain' | <u>NONE</u> } ]
    [[ , ] COMPRESSION = { ENABLED | <u>DISABLED</u> } ]
    )
<i>
AS TCP_protocol_specific_arguments</i>
  AS TCP (
    LISTENER_PORT = listenerPort
    [[ , ] LISTENER_IP = <u>ALL</u> | ( 4-part-ip ) | ( "ip_address_v6" ) ]
  )
<i>
FOR SOAP_language_specific_arguments</i>
  FOR SOAP(
    [{ WEBMETHOD [ '<i>namespace</i>' .] '<i>method_alias</i>' 
      (   NAME = '<i>database.schema.name</i>'
        [[ , ] SCHEMA = { NONE | STANDARD | DEFAULT } ]
        [[ , ] FORMAT = { <u>ALL_RESULTS</u> | ROWSETS_ONLY | NONE } ]
      )  
    }[ ,...<i>n</i> ] ]
    [[ , ] BATCHES = { ENABLED | <u>DISABLED</u> } ]
    [[ , ] WSDL = { NONE | DEFAULT | 'sp_name' } ]
    [[ , ] SESSIONS = { ENABLED | <u>DISABLED</u> } ]
    [[ , ] LOGIN_TYPE = { MIXED | <u>WINDOWS</u> } ]
    [[ , ] SESSION_TIMEOUT = <i>timeoutInterval</i> | NEVER ]
    [[ , ] DATABASE = { '<i>database</i>' | DEFAULT }
    [[ , ] NAMESPACE = { '<i>namespace</i>' | DEFAULT } ]
    [[ , ] SCHEMA = { NONE | STANDARD } ]
    [[ , ] CHARACTER_SET = { SQL | <u>XML</u> } ]
    [[ , ] HEADER_LIMIT = <i>int</i> ]
  )

<i>
FOR SERVICE_BROKER_language_specific_arguments</i>
  FOR SERVICE_BROKER (
     [AUTHENTICATION = { 
              WINDOWS [ { NTLM | KERBEROS | <u>NEGOTIATE</u> } ] 
        | CERTIFICATE <i>certificate</i> 
        | WINDOWS [ { NTLM | KERBEROS | <u>NEGOTIATE</u> } ] CERTIFICATE <i>certificate</i> 
        | CERTIFICATE <i>certificate</i> WINDOWS [ { NTLM | KERBEROS | <u>NEGOTIATE</u> } ] 
      }]
     [[ , ] ENCRYPTION = { DISABLED | { { SUPPORTED | <u>REQUIRED</u> } 
         [ ALGORITHM { <u>RC4</u> | AES | AES RC4 | RC4 AES } ] } 
     ]
     [[ , ] MESSAGE_FORWARDING = { ENABLED | DISABLED* } ]
     [[ , ] MESSAGE_FORWARD_SIZE = <i>forward_size</i> ]
  )
<i>
FOR DATABASE_MIRRORING_language_specific_arguments</i>
FOR DATABASE_MIRRORING (
   [ AUTHENTICATION = { 
            WINDOWS [ { NTLM | KERBEROS | NEGOTIATE } ] 
      | CERTIFICATE <i>certificate</i> 
      | WINDOWS [ { NTLM | KERBEROS | NEGOTIATE } ] CERTIFICATE <i>certificate</i> 
      | CERTIFICATE <i>certificate</i> WINDOWS [ { NTLM | KERBEROS | NEGOTIATE } ] 
   [ [ [ , ] ] ENCRYPTION = { DISABLED | { { SUPPORTED | REQUIRED } 
       [ ALGORITHM { RC4 | AES | AES RC4 | RC4 AES } ] } 

    ] 
   [ , ] ROLE = { WITNESS | PARTNER | ALL }
)
</pre>
<p>The options above allow a choice of transport protocol - either TCP or HTTP &amp; listening port number,<br>
and the payload language - SOAP, Transact-SQL, service broker or database mirroring.</p>
<p>Key:</p>
<p> AUTHORIZATION - A valid SQL Server or Windows login that is assigned ownership of the newly created endpoint object.</p>
<p>STATE - The state of the endpoint when it is created, to change, use ALTER ENDPOINT</p>
<p>PATH = 'url' - For a URL like http://Server01/Folder02, The Path URL is /Folder02</p>
<p>SITE = <i>webSite</i> a specific host name for the computer.<br>
  SITE = + all possible host names for the computer.<br>
SITE = * all possible host names for the computer that are not otherwise explicitly reserved.</p>
<p>COMPRESSION - If  enabled, SQL Server will honor requests where gzip encoding is accepted.</p>
<p>BATCHES - Support for ad hoc SQL requests on the endpoint.</p>
<p>LOGIN_TYPE - SQL or WINDOWS authentication.</p>
<p>SESSIONS -  If ENABLED, multiple SOAP request/response message pairs can be identified as part of a single SOAP session.</p>
<p>SESSION_TIMEOUT - Time in Seconds before a SOAP session expires.</p>
<p>NAMESPACE - The namespace for the endpoint. The default is http://tempuri.org</p>
<p>HEADER_LIMIT - Max size, in bytes, of the SOAP envelope header.</p>
<p>ENCRYPTION - Negotiate for an encryption algorithm, AES RC4 = give preference to AES while RC4 AES = give preference to RC4.</p>
<p> The default clear port number is 80, the default SSL port number is 443. <br>
Listener port = any number between 1024 and 32767, by convention, 4022.</p>
<p class="quote"><i>"La vie est vaine:
Un peu d'amour,
Un peu de haine,
Et puis - Bonjour!" ~ Leon Montenaeken</i></p>
<p><b>Related:</b></p>
<p>  <a href="endpoint_a.html">ALTER ENDPOINT</a><br>
  <a href="endpoint_d.html">DROP ENDPOINT </a><br>
  EVENTDATA</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="endpoint_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

