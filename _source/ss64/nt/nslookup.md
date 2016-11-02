---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NSLOOKUP (TCP/IP)</h1>
<p> Lookup IP addresses on a NameServer.</p>
<pre><i>Syntax</i>
  Lookup the ip address of MyHost:

     NSLOOKUP [-<i>option</i>] <i>MyHost</i>
     
  Lookup ip address of MyHost on MyNameServer:
   
     NSLOOKUP [-<i>option</i>] <i>MyHost MyNameServer</i>
   
  Enter "command mode":
   
     NSLOOKUP
<i>
Command Mode options:</i>

 help or ?          - print a list of Command Mode options
 exit or ^C         - exit "command mode" 

 set all            - print options, current server and host
 finger [<i>USER</i>]      - finger the optional NAME at the current default host
 MyHost             - print ip address of MyHost
 MyHost <i>MyNameServer</i> - print ip address of MyHost on MyNameServer
 set [no]debug      - print debugging info
 set [no]d2         - print exhaustive debugging info

 set domain=<i>NAME</i>    - set default domain name to NAME
 set root=<i>NAME</i>      - set root server to NAME
 root               - set current default server to the root
 server <i>NAME</i>        - set default server to NAME, using current default server
 lserver <i>NAME</i>       - set default server to NAME, using initial server
 set srchlist=N1[/N2/.../N6] - set domain to N1 and search list to N1, N2,...

 set retry=X        - set number of retries to X
 set timeout=X      - set initial time-out interval to X seconds
 set [no]defname    - append domain name to each query
 set [no]recurse    - ask for recursive answer to query
 set [no]search     - use domain search list
 set [no]vc         - always use a virtual circuit
 set class=X        - set query class (for example, IN (Internet), ANY)
 set [no]msxfr      - use MS fast zone transfer
 set ixfrver=X      - current version to use in IXFR transfer request
 set type=X         - set query type 
 set querytype=X    - set query type
                      (e.g. A, ANY, CNAME, MX, NS, PTR, SOA, SRV)

 ls [opt] <i>DOMAIN</i> [&gt; <i>FILE</i>] - list addresses in DOMAIN
                            (and optionally output to FILE)

    -d          -  list all records
    -t TYPE     -  list records of the given Type (for example, A, CNAME, 
                   MX, NS, PTR, and so on)
    -a          -  list Aliases and canonical names.

 view FILE       - sort an 'ls' output file and view it with pg</pre>
<p><b> Example:</b></p>
<p class="code">C:\&gt; nslookup -querytype=TXT -timeout=10 porttest.dns-oarc.net</p>
<p class="quote">We are all in the gutter, but some of us are looking at the stars ~ Oscar Wilde (Lady Windermere's Fan 1892)</p>
<p><b>Related:<br>
<br>
</b><a href="nbtstat.html">NBTSTAT</a> - Display networking statistics (NetBIOS 
over TCP/IP) <br>
<a href="netstat.html">NETSTAT</a> - Display networking statistics (TCP/IP)<br>
<a href="tracert.html">TRACERT</a> - Trace route to a remote host<br>
<a href="http://viewdns.info/">ViewDNS.info</a> - IP and DNS lookups<br>
<a href="https://support.microsoft.com/kb/200525">Q200525</a> - Using nslookup<br>
<a href="http://network-tools.com/">network-tools.com</a> - nslookup</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nslookup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

