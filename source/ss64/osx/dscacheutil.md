---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dscacheutil</h1> 
<p>Directory Service  cache - Gather information, statistics, initiate queries, flush the cache.<br>
dscacheutil replaces most of the functionality of the<span class="code">lookupd</span> tool provided prior to OS X Leopard.</p>
<pre>Syntax

      dscacheutil -q <i>category</i> [-a <i>key value</i>]

      dscacheutil -cachedump [-buckets] [-entries [category]]

      dscacheutil -configuration

      dscacheutil -flushcache

      dscacheutil -statistics

      dscacheutil -h

Options

     -h      List the options for calling dscacheutil

     -q <i>category</i>
             Initiate a query using standard calls.  These calls will either
             return results from the cache or go fetch live data and place
             them in the cache.  By default if no specific query is requested
             via -a then all results within that category will be returned.

     -a key <i>value</i>
             Optional flag to -q for a specific key with a value.

     -cachedump
             Dump an overview of the cache by default.  Additional flags will
             provide more detailed information.

     -buckets
             Use in conjunction with -cachedump to also print hash bucket
             usage of the current cache.

     -entries [<i>category</i>]
             Use in conjunction with -cachedump to dump detailed information
             about cache entries.  An optional category can be supplied to
             only see types of interest.

     -configuration
             Print current configuration information, such as the search pol-
             icy from Directory Service and cache parameters.

     -flushcache
             Flush the entire cache. This should only be used in extreme cases.
             Validation information is used within the cache along with other 
             techniques to ensure the OS has valid information
             available to it.

     -statistics
             Print statistics from the cache including an overview and
             detailed call statistics.  Some calls are not cached but are
             derived from other calls internally.  Cache hits and cache misses
             are not always be equal to external calls.  For example getad-
             drinfo is actually a combination of gethostbyname with other
             calls internally to the cache to maximize cache hit rate.

     Available categories and associated keys:

     <u>group</u>       name or gid

     <u>host</u>        name or ip_address (used for both IPv6 and IPv4)

     <u>mount</u>       name

     <u>protocol</u>    name or number

     <u>rpc</u>         name or number

     <u>service</u>     name or port

     <u>user</u>        name or uid
</pre>
<p><br><b>Examples</b><br>
<br>
Lookup a user:</p>
<pre>$ dscacheutil -q user -a name jdoe
      name: jdoe
      password: ********
      uid: 501
      gid: 501
      dir: /Users/jdoe
      shell: /bin/csh
      gecos: John Doe</pre>
<p>Lookup all users:</p>
<pre>$ dscacheutil -q user</pre>
<p>Dump cache overview:</p>
<pre>$ dscacheutil -cachedump</pre>
<p>Dump cache details with user entries:</p>
<pre>$ dscacheutil -cachedump -entries user</pre>
<p>Flush the DNS cache (OSX Leopard)</p>
<pre>$ sudo dscacheutil -flushcache</pre>
<p>Flush the DNS cache (OSX Snow Leopard 10.6 or greater) The mDNSResponder will automatically restart.</p>
<pre>$ sudo killall -HUP mDNSResponder
</pre>
<p> Tip: You can use an <a href="alias.html">alias</a> to save  remembering long commands:<br>
</p>
<pre>$ alias flushdns='sudo killall -HUP mDNSResponder'</pre>
<p>In normal operation, there should be no need to flush DNS entries, if your ISP provided DNS is unreliable, consider using Open DNS (     <span class="code">208.67.222.222</span> and <span class="code">208.67.220.220</span>) and/or Google DNS (<span class="code">8.8.8.8</span> and <span class="code">4.4.4.4</span>) as an alternative.</p>
<p class="quote"><i>“Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean” ~ John Muir</i></p><p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/dscacheutil.1.html">dscacheutil man page</a> - Apple.com<br>
<span class="code">/private/etc/hosts</span> - OS X Hosts file <br>
<a href="hostname.html">hostname</a> - Print or set system name<br>
dsmemberutil(1)<br>
Windows equivalent: <a href="../nt/ipconfig.html">ipconfig </a>/ flushdns</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dscacheutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
