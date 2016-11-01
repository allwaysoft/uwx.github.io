---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="admodcmd.html">ADmodcmd</a> custom attributes </h1> 
<p>The -custom switch allows you to name the attribute you wish to modify.  This
operation is only supported against attributes of the following types:<br>

Boolean, 
Case Insensitive String, 
Distinguished Name, 
DN Binary, 
IA5-String, 
Integer, 
Numerical String, 
Unicode String.</p>
<pre><i>Syntax</i>: 
      [-custom <i>attributeName attributeValue</i> [-multi] | [-remove] ]

Key

   <i>attributeName</i>   The name of the attribute you wish to modify.

   <i>attributeValue</i>  The value to give the attribute.

   -multi (optional)
                   Specifies a multi-valued append.  If the attribute
                   being modified is multi-valued this switch needs to be used.
                   Otherwise, the value will be overwritten, not appended.

   -remove (optional)
                   Specifies a multi-valued remove.  If the attribute being
                   modified is multi-valued and -remove is used, then only
                   the specified value will get removed.

Example 
Set the description attribute:

  -custom description "IT Department"</pre>
<h1>Variables</h1>
<p>Variable usage is allowed when building attributes.  Variables can be based on almost any <a href="../vb/syntax-userinfo.html">current Active Directory attribute</a>, as long as it has a value.  Variables are seperated from literal values using the <span class="code">%</span> sign. 
Variables must also be enclosed within a pair of single ticks (<span class="code">'</span>).<br>
<br>
This example shows how to set homeDirectory to the path c:\test\username, where username is the users sAMAccountName:<br>
<br>
<span class="code">-custom homeDirectory c:\test\%'sAMAccountName'%</span><br>
<br>
It is also possible to pull only a specified number of characters from the attribute as well.  Just specify the number of characters you want to use after the %, and before the <span class="code">'</span>  The following example shows how to add 
an SMTP address of FirstInitial.LastName@example.com:<br>
<span class="code"><br>
-addsmtp %1'givenName'%.%'sn'%@example.com</span><br>
<br>
If a % or ' is needed as a literal value, simply use the forward slash (/)
as an escape character:</p>
<p>Example:<br>
<span class="code">This is a percent sign: /%</span><br>
<br>
The above line will display as:  <span class="code">This is a percent sign: %</span><br>
<br>
If you need a literal forward slash before the
percentage or single tick characters, usually when the forward slash
needs to be followed by a variable.  The syntax for this is<span class="code"> //%</span> or<span class="code"> //'</span><br>
An example would be adding an MS Mail address:<br>
<span class="code">ms:PO/SERVER//%'mailNickName'</span></p>
<p class="quote"><i>“Seek not every quality in one individual ” - Confucius</i></p>
<p><b>Related:</b><br>
<br><a href="admodcmd.html">ADmodcmd</a> - Active Directory Bulk Modify Tool<br>
<a href="admodcmd-ts.html">Terminal Server Attributes</a> | <a href="admodcmd-ex.html">Exchange Related Attributes</a> | <a href="admodcmd-mail.html">Mailbox Rights</a> | <a href="admodcmd-user.html">User Account Settings</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="admodcmd-custom.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

