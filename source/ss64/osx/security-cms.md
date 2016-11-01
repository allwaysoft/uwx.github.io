---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> cms </h1> 
<pre>   cms [-C|-D|-E|-S] [<i>options</i>...]
            Encode or decode CMS messages.
            -C              create a CMS encrypted message
            -D              decode a CMS message
            -E              create a CMS enveloped message
            -S              create a CMS signed message

            Decoding options:
            -c <i>content</i>      use this detached content file
            -h <i>level</i>        generate email headers with info about CMS message (output level &gt;= 0)
            -n              suppress output of content

            Encoding options:
            -r id,...       create envelope for comma-delimited list of recipients, where id can be a certificate
                            nickname or email address
            -G              include a signing time attribute
            -H <i>hash</i>         hash = MD2|MD4|MD5|SHA1|SHA256|SHA384|SHA512 (default: SHA1)
            -N <i>nick</i>         use certificate named "nick" for signing
            -P              include a SMIMECapabilities attribute
            -T              do not include content in CMS message
            -Y <i>nick</i>         include an EncryptionKeyPreference attribute with certificate (use "NONE" to
                            omit)
            -Z <i>hash</i>         find a certificate by subject key ID

            Common options:
            -e <i>envelope</i>     specify envelope file (valid with -D or -E)
            -k <i>keychain</i>     specify keychain to use
            -i <i>infile</i>       use infile as source of data (default: stdin)
            -o <i>outfile</i>      use outfile as destination of data (default: stdout)
            -p <i>password</i>     use password as key db password (default: prompt)
            -s              pass data a single byte at a time to CMS
            -u <i>certusage</i>    set type of certificate usage (default: certUsageEmailSigner)
            -v              print debugging information

            Cert usage codes:
                              0 - certUsageSSLClient
                              1 - certUsageSSLServer
                              2 - certUsageSSLServerWithStepUp
                              3 - certUsageSSLCA
                              4 - certUsageEmailSigner
                              5 - certUsageEmailRecipient
                              6 - certUsageObjectSigner
                              7 - certUsageUserCertImport
                              8 - certUsageVerifyCA
                              9 - certUsageProtectedObjectSigner
                             10 - certUsageStatusResponder
                             11 - certUsageAnyCA


     install-mds
            Install (or re-install) the Module Directory Services (MDS) database. This is a system tool
            which is not normally used by users. There are no options.</pre>
<p class="quote"><i>“The man who looks for security, even in the mind, is like a man who would chop off his limbs in order to have artificial ones which will give him no pain or trouble</i><i>” ~ Henry Miller (The Rosy Crucifixion I )</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security-cms.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
