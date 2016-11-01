---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Oracle error ORA-12154</h1>
<pre>ORA-12154 TNS:could not resolve service name</pre>

<p>12154 is probably the most common Oracle error message, it indicates that the Oracle client attempted to communicate with the listener on the specified server but either failed to contact the server or did not find a matching service name on that server.</p>
<p>TNS or 'Transparent Network Substrate' is a transport protocol that allows Oracle sessions to communicate across a network.</p>
<p class="code">DB Server &lt;=&gt; <b>Listener &lt;=&gt; Network connection &lt;=&gt; Client (SQL*Net)</b> &lt;=&gt; Application.</p>
<p>In the path above, <a href="tnsping.html">tnsping</a> can be used to test the parts in <b>bold</b> and should be the first troubleshooting step.</p>
<p>If  tnsping fails, that generally indicates a problem finding the server connection - if TNSNAMES specifies an IP address, is it correct?, if it's a DNS name, is that resolving correctly? (try switching for an IP address to find out.)</p>
<p>If  tnsping succeeds, that can indicate a problem with the client configuration but could equally be that the connection is working as far as the listener but the database is down. Try comparing with another PC - if multiple machines are failing that usually points towards a server issue. </p>
<p>Ora-12154 can be a tricky problem to nail down because there are many possible causes,  try making a connection directly on the server or  completely <a href="syntax-tnsnames.html">regenerate the TNSNAMES.ORA</a> file on the client.</p>
<p> <b>ORA-12154 description: </b></p>
<p>Cause: A connection to a database or other service was requested using a connect identifier, and the connect identifier specified could not be resolved into a connect descriptor using one of the naming methods configured. </p>
<p>For example, if the type of connect identifier used was a net service name then the net service name could not be found in a naming method repository, or the repository could not be located or reached.</p>
<p>Action: </p>
<p>Local naming (TNSNAMES.ORA file):</p>
<blockquote>
<p>- Make sure that "TNSNAMES" is listed as one of the values of the NAMES.DIRECTORY_PATH parameter in the Oracle Net profile (SQLNET.ORA)</p>
<p>- Verify that a TNSNAMES.ORA file exists and is in the proper directory and is accessible.</p>
<p>- Check that the net service name used as the connect identifier exists in the TNSNAMES.ORA file.</p>
<p>- Make sure there are no syntax errors anywhere in the TNSNAMES.ORA file. Look for unmatched parentheses or stray characters. Errors in a TNSNAMES.ORA file can make it unusable.</p>
</blockquote>
<p>Directory Naming:</p>
<blockquote>
<p>- Verify that "LDAP" is listed as one of the values of the NAMES.DIRETORY_PATH parameter in the Oracle Net profile (SQLNET.ORA).</p>
<p>- Verify that the LDAP directory server is up and that it is accessible.</p>
<p>- Verify that the net service name or database name used as the connect identifier is configured in the directory.</p>
<p>- Verify that the default context being used is correct by specifying a fully qualified net service name or a full LDAP DN as the connect identifier</p>
</blockquote>
<p>Easy connect naming:</p>
<blockquote>
<p>- Verify that "EZCONNECT" is listed as one of the values of the NAMES.DIRETORY_PATH parameter in the Oracle Net profile (SQLNET.ORA).</p>
<p>- Make sure the host, port and service name specified are correct.</p>
<p>- Try enclosing the connect identifier in quote marks. See the Oracle Net Services Administrators Guide or the Oracle operating system specific guide for more information on naming.</p>
</blockquote>
<p class="quote"><i>“A man of genius makes no mistakes, his errors are volitional and are the portals to discovery” ~ James Joyce, Ulysses</i></p>
<p>   <b>Related</b></p>
<p><a href="http://orafaq.com/wiki/ORA-12154">OraFAQ - ORA-12154</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-ora-12154.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

