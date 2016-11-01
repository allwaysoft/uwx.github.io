---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_TCP</h1> 
<p>Initiate ommunication with external TCP/IP-based servers using 
  TCP/IP (Internet protocol).</p>
<pre>Subprocedures:

connection 
          A PL/SQL record type used to represent a TCP/IP connection. 

CRLF      The character sequence carriage-return line-feed. 
          It is the newline sequence commonly used many communication standards. 

open_connection Function 
          Open a TCP/IP connection to a specified service. 

available Function 
          Determine the number of bytes available for reading from a TCP/IP connection. 

read_raw Function 
          Receive binary data from a service on an open connection. 

write_raw Function 
          Transmit a binary message to a service on an open connection. 

read_text Function 
          Receive text data from a service on an open connection. 

write_text Function 
          Transmit a text message to a service on an open connection. 

read_line Function 
          Receive a text line from a service on an open connection.  

write_line Function 
          Transmit a text line to a service on an open connection.  

get_raw(), get_text(), get_line() Functions 
          Convenient forms of the read functions, which return
          the data read instead of the amount of data read. 

flush     Transmit all data in the output buffer, if a buffer is used,
          to the server immediately. 

close_connection 
          Close an open TCP/IP connection. 

close_all_connections 
          Close all open TCP/IP connections. </pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b><i><br>
  "Computer Science is no more about computers than astronomy is about telescopes." 
  - E. W. Dijkstra</i><b> <br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="UTL_TCP.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

