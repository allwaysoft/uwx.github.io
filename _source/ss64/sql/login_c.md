---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE LOGIN </h1>
<p>Create a SQL Server login account (User).</p>
<pre>Syntax
      CREATE LOGIN <i>login</i> {WITH PASSWORD = '<i>password</i>'
                             [HASHED] [MUST_CHANGE]
                                [, <i>option_list</i> [ ,... ] ]}

      CREATE LOGIN <i>login</i> {FROM <i>sources</i>}

  sources:
      WINDOWS [ WITH <i>windows_options</i> [ ,... ] ]
      CERTIFICATE <i>certname</i>
      ASYMMETRIC KEY <i>asym_key</i>  

  option_list:
      SID = <i>sid</i>
      DEFAULT_DATABASE = <i>database</i>    
      DEFAULT_LANGUAGE = <i>language</i>
      CHECK_EXPIRATION = {ON | <u>OFF</u>}
      CHECK_POLICY = {<u>ON</u> | OFF}
      CREDENTIAL = <i>credential</i> 

  windows_options:
      DEFAULT_DATABASE = <i>database</i>
      DEFAULT_LANGUAGE = <i>language</i>

Key:
  login            Login: SQL Server / certificate-mapped / asymmetric key-mapped / [Windows].
  WINDOWS          Map to a Windows login.
  certname         Certificate to associate with this login.
  asym_key         Name of an asymmetric key to associate with this login. 
  password         A SQL Server login password for the login.
  HASHED           The SQL Server login is already hashed. (so don't hash again)
  MUST_CHANGE      Prompt the user for a new SQL Server password
  credential       Credential to be mapped to the new SQL Server login.
  sid              GUID of the new SQL Server login. (default=automatic)
  DEFAULT_DATABASE The default database to be assigned to the login.(default = master)
  DEFAULT_LANGUAGE The default language to be assigned to the login. 
  CHECK_EXPIRATION Enforce password expiration policy
  CHECK_POLICY     Enforce Windows password policy</pre> 
<p>Passwords are case-sensitive.</p>
<p>Prehashing of passwords is supported only when you are creating SQL Server logins.</p>
<p>If MUST_CHANGE is specified, CHECK_EXPIRATION and CHECK_POLICY must be set to ON.</p>
<p>Examples</p>
<pre>CREATE LOGIN [SERVER01\User01] FROM WINDOWS;<br>GO

CREATE LOGIN user42 WITH PASSWORD = 'pa$$word' MUST_CHANGE;<br>GO</pre>
<p class="quote"><i>"In the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move" ~ Douglas Adams, The Hitchhiker's GuideTo The Galaxy.</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="login_a.html">ALTER LOGIN</a><a href="login_d.html"><br>
</a><a href="user_c.html">CREATE USER</a><a href="login_d.html"><br>
DROP LOGIN</a><br>
EVENTDATA( )<br>
Equivalent Oracle command:  <a href="../ora/user_c.html">CREATE USER</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="login_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

