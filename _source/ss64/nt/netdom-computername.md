---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> ComputerName   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Manage the primary and alternate names for a computer, Netdom can safely rename a domain controller or a server.</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> COMPUTERNAME <i>machine</i> [/UserO:<i>user</i>] [/PasswordO:[<i>password</i> | *]]
         [/UserD:<i>user</i>] [/PasswordD:[password | *]] [/SecurePasswordPrompt]
           <b>/Add:</b><i>new_alternate_DNS_name</i> | <b>/Remove:</b><i>alternate_DNS_name</i>
              | /MakePrimary:<i>computer_dns_name</i> |
                 <b>/Enumerate</b>[:{AlternateNames | PrimaryName | <u>AllNames</u>}] | /Verify

Key:
   <i>machine</i>     The name of the computer whose names are to be managed.

   /UserO      User account used to make the connection with the Machine to be
               managed

   /PasswordO  Password of the user account specified By /UserO.
               Specifying a * will prompt for the password.

   /UserD      User account used to make the connection with the Domain of
               the machine to be managed

   /PasswordD  Password of the user account specified By /UserD.
               Specifying a * will prompt for the password.

   /Add        Add a new alternate name. The new name must be a fully qualified
               DNS name(FQDN - computer name followed by primary DNS suffix,
               such as comp1.example.com.).

   /REMove     Remove an existing alternate name. The name being removed must be
               a fully qualified DNS name (FQDN - computer name followed by
               primary DNS suffix, such as comp1.example.com.).

   /MakePrimary Make an existing alternate name into the primary name.
                The name being made primary must be a fully qualified DNS name
                (FQDN - computer name followed by primary DNS suffix, such as comp1.example.com.).

   /ENUMerate  List the specified names. It defaults to AllNames.

   /Verify     Check if there is a DNS A record and an SPN for each computer name. 

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *
</pre>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordD</span> can be supplied as just <span class="code">/PD</span> </p>
<p><i class="quote">"It's not whether you get knocked down; it's whether you get back up." ~ Vince Lombardi</i><br>
<br>
<b> Related:</b></p>
<p><a href="netdom-query.html">NETDOM QUERY</a> - Query the domain for information<br>
<a href="https://support.microsoft.com/kb/298593">Q298593</a> - Use  Netdom to rename a computer in Windows XP<br>
<a href="https://support.microsoft.com/kb/216393">Q216393</a> - Resetting computer accounts in Windows</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-computername.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

