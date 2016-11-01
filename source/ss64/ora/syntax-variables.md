---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Oracle Variables</h1> 
<p>Variables can be  defined in several places:</p>
<table>
  <tbody><tr>
    <td>&nbsp;</td>
    <td>Substitution<br>
      SQL*Plus </td>
    <td>Host/Bind<br>
      SQL*Plus or other Host Program</td>
    <td>PL/SQL<br>
      Stored Procedure</td>
  </tr>
  <tr>
    <td>Where to use</td>
    <td>For passing values into an SQL script.</td>
    <td>In SQL Plus and in PL/SQL blocks</td>
    <td>Used only within a PL/SQL block</td>
  </tr>
  <tr>
    <td>How to initialise and assign</td>
    <td><a href="syntax-sqlplus.html">DEFINE</a> MyVar=15000 <br>
      <a href="syntax-sqlplus.html">ACCEPT</a> MyVar PROMPT Enter Var.<br>
      <br>
      &amp;&amp; MyVar<br>
      &amp; MyVar</td>
    <td> 
      <p><a href="syntax-sqlplus.html">VARIABLE</a> MyVar NUMBER<br>
        <br>
        :MyVar := 15000</p>
  </td>
    <td><a href="../oraplsql/declare.html">DECLARE</a><br>
      <br>
      := </td>
  </tr>
  <tr>
    <td>Prefix</td>
    <td>&amp;</td>
    <td>:</td>
    <td>none</td>
  </tr>
  <tr>
    <td>How to Examine</td>
    <td>DEFINE MyVar</td>
    <td>PRINT MyVar</td>
    <td>DBMS_OUTPUT.put_line<br>
      or assign to a bind variable<br>
      or simply write values into a table.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</tbody></table>
<p> To avoid being re-prompted for substitution variables use a double ampersand 
  - this will DEFINE the variable and you won't be re-prompted when Sql*Plus encounters 
  the same value again (within the same session.)</p>
<p>SET CONCAT - This defines the concatenation character (default= . ) For characters 
  that immediately follow the variable.</p>
<p>Example - Passing values to a SQL Plus script with the <a href="syntax-sqlplus-start.html">START</a> (or @) command:<br>
  <br>
<span class="code">SQL&gt; @MyScript.sql Finance 15</span></p>
<p>Within the script <span class="code">&amp;1</span> will now evaluate as <span class="code">finance</span> and <span class="code">&amp;2</span> 
  as <span class="code">15</span></p>
<p><span class="code">SQL&gt; @MyScript.sql Sales 25</span></p>
<p>This time the same script will run and substitute <span class="code">&amp;1</span> as <span class="code">sales</span> and <span class="code">&amp;2</span> as <span class="code">25</span></p>
<p>  <b>Related commands</b><br>
  <br>
  If you are using Java stored procedures then you can add Java variables to the 
  above.<br>
  defined as:<br>
  <br>
  <i>datatype </i> variable_name;<br>
  <br>
  where <i>datatype </i>is: string, char, boolean, byte, short, int, long, float, 
  double, or a class variable.</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-variables.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

