---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> ALTER  APPLICATION ROLE </h1>
<p>Change the name, password, or default schema of an application role.</p>
<pre>Syntax
      ALTER APPLICATION ROLE <i>application_role_name</i> 
         WITH &lt;<i>set_item</i>&gt; [ ,...<i>n</i> ]

      &lt;<i>set_item</i>&gt; ::= 
          NAME = <i>new_application_role_name</i> 
          | PASSWORD = '<i>password</i>'
          | DEFAULT_SCHEMA = <i>schema_name
</i>Key:
   NAME           Unique name of the application role. <br>   PASSWORD       The password for the application role. Password complexity will be checked.<br>   DEFAULT_SCHEMA The first schema to be used to resolve object names.
                  can be a schema that does not exist in the database. </pre>


<p><b>Example</b><b>s  </b></p>
<pre>ALTER APPLICATION ROLE Vincentio 
    WITH PASSWORD = 'some897long_random64string';
GO


ALTER APPLICATION ROLE Vincentio
    WITH NAME = Petruchio;
GO</pre>
<p class="quote"><i>"People think modelling's mindless, that you just stand there and pose,  but it doesn't have to be that way. I like to have a lot of input. I know how to wear a dress, whether it should be shot with me standing up or sitting" ~ Linda Evangelista </i></p>
<p><b>Related:</b><br>
<br>
<a href="app_role_c.html">CREATE APPLICATION ROLE</a><br>
<a href="app_role_d.html">DROP APPLICATION ROLE</a>  <br>
<a href="/pass/pass.html">Password generator</a><br>
Equivalent Oracle command: <a href="../ora/session_a.html">ALTER SESSION</a> SET CURRENT SCHEMA </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

