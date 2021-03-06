---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>start </h1> 
<p> Run the commands in an SQL script. The script can contain <a href="index.html">SQL</a> commands, <a href="../oraplsql/index.html">PL/SQL</a> blocks, and <a href="syntax-sqlplus.html">SQL*Plus commands</a>. </p>
<pre>     START <i>file_name</i></pre>
<p>By default SQL*Plus will assume the file has a .SQL extension.</p>
<p><b>Example</b></p>
<p>To  run SS64.SQL:</p>
<p><span class="code">SQL&gt; START SS64<br>
</span>or<span class="code"><br>
SQL&gt; @SS64</span></p>
<p>Run SQL*Plus and start an SQL script:</p>
<p><span class="code"> SQL&gt; <a href="connect.html">SQLPLUS</a> Username/ @SS64.sql<br>
</span>or<br>
<span class="code">SQL&gt; SQLPLUS @SS64.sql</span> Include your username as the first line of the .sql file.<br>
or<br>
<span class="code">SQL&gt; SQLPLUS @SS64.sql /nolog </span> Include a <a href="connect.html">connect</a> statement as the first line of the file.</p>
<p>When SQL*Plus starts, it will prompt for your password and will run the script, note that embedding a password in the script presents a security risk.</p>
<p>Nesting Scripts</p>
<p>To run a series of scripts in sequence, first create a script containing several START commands, each followed by the name of a script in the sequence. Then run the script containing the START commands. For example, you could include the following START commands in a script named UPGRADE.sql:</p>
<p class="code">START Part1.sql <br>
START Part2.sql <br>
START Part3.sql<br>
START Part4.sql <br>
START last.sql </p>
<p><span class="code">@@<i>File_name</i></span> will also run a script, this  is almost identical to  <span class="code">@<i>File_name</i></span> the difference being that <span class="code">@@</span> looks for nested scripts in the same path or url as the calling script.</p>
<p><b>Substitution Variables in SQL*Plus</b></p>
<p>Enter your script using <span class="code">&amp;</span> and <span class="code">&amp;&amp;</span> as the prefix for variables. </p>
<pre>SQL&gt; @MyScript.sql parameter1 parameter2 parameter3 
<span class="body">or </span><br>SQL&gt; START MyScript.sql parameter1 parameter2 parameter3 
      <span class="body">In the SQL-Script, refer to the parameters as</span> &amp;1  &amp;2  &amp;3</pre>
<p>For example <span class="code">@MyScript.sql 1234 FinanceDept </span></p>
<p>Substitution variables can be used anywhere in SQL and SQL*Plus commands, except as the first word entered. </p>
<p>If you wish to append characters (other than a space) immediately after a substitution variable, use a period to separate the variable from the character. <br>
For example <span class="code">WHERE PART_ID='&amp;A.64'</span> now if &amp;A is set to 100 the expression becomes <span class="code">WHERE PART_ID='10064' </span>(see also <span class="code"><a href="syntax-sqlplus-set.html">SET</a> CONCAT</span>)</p>
<p>When SQL*Plus encounters an undefined substitution variable it will prompt you for the value. With single ampersand substitution variables (<span class="code">&amp;B</span>) you are prompted to substitute a value for each occurrence of that substitution variable, so if the undefined variable is used 10 times in the script you will get 10 prompts. </p>
<p>Double ampersand substitution variables (<span class="code">&amp;&amp;C</span>) will remain defined. You will  not be prompted to enter values for those variables again until they have been undefined, or you log out of SQL*Plus. </p>
<p>To customise the substitution prompt use ACCEPT like this: <span class="code">ACCEPT ss64 NUMBER PROMPT 'Enter the code number:' </span>This will create the variable <span class="code">&amp;ss64</span> </p>
<p>If you use <a href="syntax-sqlplus.html">DEFINE</a> to define variables in a script, the defined values will take precedence.<br>If you enter a substitution value at the prompt, SQL*Plus will list the line with and without your substituted value. You can suppress this with <a href="syntax-sqlplus-set.html">SET VERIFY  OFF</a>.<br>
  <br>
<b>Related</b></p>
<p><a href="syntax-sqlplus-set.html">SET</a> DEFINE - Define the substitution character (by default the ampersand "&amp;") and turn substitution on and off.<br>
<a href="syntax-sqlplus-set.html">SET</a> ESCAPE - Define an escape character you can use before the substitution character. ignore variable substitution.  default =\<br>
<a href="syntax-sqlplus-set.html">SET</a> NUMFORMAT - Set the default format for displaying numbers, including numeric substitution variables.<br>
<a href="syntax-sqlplus-set.html">SET</a> NUMWIDTH - Set the default width for displaying numbers, including numeric substitution variables.<br>
<a href="syntax-sqlplus.html">SQL*Plus</a><br>
<a href="syntax-sqlplus-edit.html">Editing SQL scripts in SQL*Plus</a><br>
<a href="syntax-sqlplus.html">CONNECT</a> - Connect to a database instance.</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-sqlplus-start.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

