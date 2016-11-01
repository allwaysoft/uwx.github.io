---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="admodcmd.html">ADmodcmd</a> Mailbox Rights </h1> 
<p>Mailbox related Attributes:</p>
<pre>   -<i>setmailboxrights</i>
               Set msExchMailboxSecurityDescriptor (<a href="https://support.microsoft.com/kb/324353">Q324353</a>)

   -fixsendas  Grant Send-As rights to users with Full Mailbox Access and Read.

   -removefixsendas
               Remove Send-As rights from users with Full Mailbox Access and Read.
               (Undo for -fixsendas)

   -grantselfaea
               Grant Associated External Account privileges to SELF (<a href="https://support.microsoft.com/kb/278966">Q278966</a>)

   -removeaeafromself
               Remove Associated External Account from SELF. (Undo for <a href="https://support.microsoft.com/kb/278966">Q278966</a>)

   -grantselffullandread
               Grant Full Mailbox Access and Read to SELF.  (<a href="https://support.microsoft.com/kb/304935">Q304935</a>)

   -removefullandread
               Remove Full Mailbox Access and Read from SELF.  (Undo for <a href="https://support.microsoft.com/kb/304935">Q304935</a>)

   -dumpmailboxrights
               Dump all permissions in Mailbox Rights to a file called mbxrights.xml.

   -importmailboxrights overwrite|append
               Import mailbox rights from the mbxrights.xml created by -dumpmailboxrights
               When using this switch, the -dn switch is not required.
               Overwrite will remove all non-inherited ACE's before importing,
               append will not.  This switch only imports non-inherited mailbox rights.

   -addtomailboxrights DOMAIN\USER ACCESS_MASK -deny (Optional)
               Add an account to mailbox rights with the specified permissions masks.
               The optional -deny switch specfies a deny entry, default is an allow entry.
               Valid Access Masks:

                  ACE_MB_FULL_ACCESS
                  ACE_MB_DELETE_MB_STORAGE
                  ACE_MB_READ_PERMISSIONS
                  ACE_MB_CHANGE_PERMISSION
                  ACE_MB_TAKE_OWNERSHIP

   -removefrommailboxrights DOMAIN\USER ACCESS_MASK -deny (optional)
               Remove the specified mask from DOMAIN\USER in mailbox rights.
               The -deny switch specifies a deny entry, default is an allow entry.
               Valid Access Masks:

                  ACE_MB_FULL_ACCESS
                  ACE_MB_DELETE_MB_STORAGE
                  ACE_MB_READ_PERMISSIONS
                  ACE_MB_CHANGE_PERMISSION
                  ACE_MB_TAKE_OWNERSHIP
                  ALL

                  The ALL Mask will remove all permissions for the specified user.</pre>
<p class="quote"><i>“Learning music by reading about it is like making love by mail” - Luciano Pavarotti</i></p>
<p><b>Related:</b><br>
<br>
<a href="admodcmd.html">ADmodcmd</a> - Active Directory Bulk Modify Tool<br>
<a href="http://technet.microsoft.com/en-us/library/cc755399%28WS.10%29.aspx">How Terminal Services Works</a> - Technet<br>
<a href="admodcmd-ts.html">Terminal Server Attributes</a> | <a href="admodcmd-ex.html">Exchange Related Attributes</a> | <a href="admodcmd-user.html">User Account Settings</a> |<a href="admodcmd-custom.html"> Custom Attributes</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="admodcmd-mail.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
