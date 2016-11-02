---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Lightweight Directory Access Protocol (LDAP) queries</h1>
<p>Some basic examples of LDAP queries. Each entire LDAP statement must be encompassed in a set of parentheses( ).</p>
<pre>Syntax
      =  (EQUAL TO - The attribute must be equal to a certain value to be true.)
         e.g. find all objects that have the first name of Alice
         <b>(</b>givenName=Alice<b>)</b>

      &amp;  (logical AND - More than one condition must be true.) 
         e.g. find all of the people that have the first name of Alice and live in Venice:
         <b>(</b>&amp;(givenName=Alice)(l=Venice)<b>)</b>

      !  (logical NOT - Exclude objects with a certain attribute.) 
         e.g. find all objects except those eith the first name of Alice:
         <b>(</b>!givenName=Alice<b>)</b>

      *  (wildcard - match anything)
         e.g. find all objects that have a value (any value) for title
         <b>(</b>title=*<b>)</b>
         find a given name that starts with Al
         <b>(</b>givenName=Al*<b>)</b>

      |  (Logical OR - either comdition must be true)
         e.g. find all objects that are in Venice or in Milan:
         <b>(</b>|(l=Venice)(l=Milan)<b>)</b></pre>
<p>This LDAP query syntax can be combined for more complex questions<br>
Find all objects that are in Venice or Milan, and that have the first name of Alice: <br>
</p>
<pre>   <b>(</b>&amp;(givenName=Alice)(|(l=Venice)(l=Milan))<b>)</b>
</pre>
<p>The ! operator in conjunction with the wildcard operator will look for objects where that attribute is <b>not</b> set to anything.</p>
<p><span class="quote"><i>“We learn more by looking for the answer to a question and not finding it than we do from learning the answer itself” ~ Lloyd Alexander</i></span></p><p><b>Related:</b></p>
<p><a href="get-adgroup.html">Get-adGroup</a> - Get one or more AD groups.<br>
<a href="get-aduser.html">Get-adUser</a> - Get one or more AD users.<br>
Active Directory Users and Computers - custom search<br>
<a href="../nt/csvde.html">CSVDE / <abbr title="LDAP Data Interchange Format">LDIF</abbr>DE</a> - Create, modify or delete directory objects.<br>
<a href="https://admodify.codeplex.com/">ADModify.NET</a> - A GUI tool to facilitate making bulk user attribute modifications.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

