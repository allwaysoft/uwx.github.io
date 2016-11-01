---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE JAVA</h1> 
<p>Create Java source.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] [AND {RESOLVE|COMPILE}] [NOFORCE] 
      <b>JAVA </b>[<b>RE]SOURCE</b> NAMED [<i>schema</i>.]<i>primary_name</i>
         [AUTHID {CURRENT_USER|DEFINER}]
             [RESOLVER (( <i>match_string</i>, <i>schema_name</i> )…)]
                <i>source_option</i>;

   CREATE [OR REPLACE] [AND {RESOLVE|COMPILE}] [NOFORCE] 
      <b>JAVA CLASS</b> [SCHEMA <i>schema</i>]
         [AUTHID {CURRENT_USER|DEFINER}]
             [RESOLVER (( <i>match_string</i>, <i>schema_name</i> )…)]
                <i>source_option</i>;

<i>source_option</i>s:
   USING BFILE (<i>directory</i>, '<i>class_filename</i>')
   USING {CLOB|BLOB|BFILE} <i>subquery</i>
   USING '<i>key_for_blob</i>'
   AS <i>source_text</i></pre>
<p><b>Examples</b><br>
<br>
CREATE JAVA CLASS USING BFILE (MyFolder, 'foo.class');<br>
<br>
CREATE JAVA SOURCE NAMED "Hello" AS<br>
public class Hello {<br>
public static String hello() { <br>
return "Hello World"; } }; <br>
<br><b>Related:</b><br>
<br>
 JAVA - <a href="java_a.html">ALTER JAVA</a> <br>
JAVA - <a href="java_d.html">DROP JAVA</a></p>
<p class="code">  <a href="../orad/DBA_JAVA_POLICY.html">DBA_JAVA_POLICY</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="../orad/USER_JAVA_POLICY.html">USER_JAVA_POLICY</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="java_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

