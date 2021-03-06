---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>nslookup</h1> 
<p>Query Internet name servers </p>
<pre>Syntax:
       nslookup

       nslookup <i>host-to-find</i> 

       nslookup <i>server</i> 

interactive mode:

       nslookup -<i>server</i> 

       nslookup [-<i>options</i>] [<i>host-to-find</i> ]

Options:

   host [<i>server</i> ]
         Look up information for host using the current default server or using server,
         if specified. If <i>host </i>is an Internet address and the query type is A or PTR ,
         the name of the host is returned. If host is a name and does not have a trailing
         period, the default domain name is appended to the name. (This behavior depends
         on the state of the set options domain , srchlist , defname , and search.

         To look up a host not in the current domain, append a period to the name.

   server <i>domain
</i>   lserver <i>domain</i>
         Change the default server to <i>domain</i> ; lserver uses the initial server to look up
         information about <i>domain</i> while server uses the current default server.
         If an authoritative answer can't be found, the names of servers that might have 
         the answer are returned. 
   root
         Change the default server to the server for the root of the domain name space.
         Currently, the host ns.internic.net is used. (This command is a synonym for
          `lserver ns.internic.net' The name of the root server can be changed with
         the `set root ' command. 

   finger [name ] [&gt; filename ] 
   finger [name ] [&gt;&gt; filename ]
          Connects with the finger server on the current host. The current host is
          defined when a previous lookup for a host was successful and returned address
          information (see the `set querytype=A ' command). The name is optional. &gt; and
          &gt;&gt; can be used to redirect output in the usual manner.

   ls [option ] domain [&gt; filename ]
   ls [option ] domain [&gt;&gt; filename ]
          List the information available for domain , optionally creating or appending
          to <i>filename</i> The default output contains host names and their Internet addresses.
          <i>Option</i> can be one of the following:

             -t <i>querytype</i>  list all records of the specified type (see querytype below). 
             -a            list aliases of hosts in the domain; synonym for `-t CNAME ' 
             -d            list all records for the domain; synonym for `-t ANY' 
             -h            list CPU and operating system information for the domain; synonym for `-t HINFO' 
             -s            list well-known services of hosts in the domain; synonym for `-t WKS'

          When output is directed to a file, hash marks are printed for every 50 records
          received from the server. 

   view <i>filename</i>
          Sort and lists the output of previous ls command(s) with more(1). 

   set <i>keyword</i> [= <i>value</i> ]<br>          This command is used to change state information that affects the lookups.
          run <b>man nslookup</b> for a full list of valid keywords.

   set all   Print the current value of the frequently-used options
             to set Information about the current default server and host is also printed.

   help
   ?      Print a brief summary of commands. 

   exit   Exit the program.
</pre>
<p>Nslookup has two modes: interactive and non-interactive.</p>
<p> Interactive mode allows the user to query name servers for information about various hosts and domains or to print a list of hosts in a domain. </p>
<p>Non-interactive mode is used to print just the name and requested information for a host or domain.</p>
<p>The options listed under the `set ' command  can be specified in the .nslookuprc file in the user's home directory (listed one per line). Options can also be specified on the command line if they precede the arguments and are prefixed with a hyphen. </p>
<p class="quote">  <i>"He who listens to truth is not less
than he who utters truth" ~  Kahlil Gibran</i></p>
<p><b>Related:</b></p>
<p> named(8), resolver(3), resolver(5)<br>
Equivalent Windows command: 
<a href="../nt/nslookup.html">NSLOOKUP</a> - Lookup IP addresses on a NameServer.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

