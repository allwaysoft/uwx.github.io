---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SERVERPROPERTY</h1>
<p>Display  information about the server instance.</p>
<pre>Syntax:
      SERVERPROPERTY ( <i>propertyname</i> )
</pre>
<p>    For boolean values ServerProperty will return 1 for True or 0 for false.</p>
<p>Examples</p>
<pre>SELECT CONVERT(char(20), SERVERPROPERTY('BuildClrVersion'));
SELECT CONVERT(char(20), SERVERPROPERTY('Collation'));
SELECT CONVERT(char(20), SERVERPROPERTY('CollationID'));
SELECT CONVERT(char(20), SERVERPROPERTY('ComparisonStyle'));
SELECT CONVERT(char(20), SERVERPROPERTY('ComputerNamePhysicalNetBIOS'));
SELECT CONVERT(char(20), SERVERPROPERTY('Edition'));
SELECT CONVERT(char(20), SERVERPROPERTY('EditionID'));
SELECT CONVERT(char(20), SERVERPROPERTY('EngineEdition'));
SELECT CONVERT(char(20), SERVERPROPERTY('InstanceName'));
SELECT CONVERT(char(20), SERVERPROPERTY('IsClustered'));
SELECT CONVERT(char(20), SERVERPROPERTY('IsFullTextInstalled'));
SELECT CONVERT(char(20), SERVERPROPERTY('IsIntegratedSecurityOnly'));
SELECT CONVERT(char(20), SERVERPROPERTY('IsSingleUser'));
SELECT CONVERT(char(20), SERVERPROPERTY('LCID'));
SELECT CONVERT(char(20), SERVERPROPERTY('LicenseType'));
SELECT CONVERT(char(20), SERVERPROPERTY('MachineName'));
SELECT CONVERT(char(20), SERVERPROPERTY('NumLicenses'));
SELECT CONVERT(char(20), SERVERPROPERTY('ProcessID'));
SELECT CONVERT(char(20), SERVERPROPERTY('ProductVersion'));
SELECT CONVERT(char(20), SERVERPROPERTY('ProductLevel'));
SELECT CONVERT(char(20), SERVERPROPERTY('ResourceLastUpdateDateTime'));
SELECT CONVERT(char(20), SERVERPROPERTY('ResourceVersion'));
SELECT CONVERT(char(20), SERVERPROPERTY('ServerName'));
SELECT CONVERT(char(20), SERVERPROPERTY('SqlCharSet'));
SELECT CONVERT(char(20), SERVERPROPERTY('SqlCharSetName'));
SELECT CONVERT(char(20), SERVERPROPERTY('SqlSortOrder'));
SELECT CONVERT(char(20), SERVERPROPERTY('SqlSortOrderName'));
</pre>
<p class="quote"><i>"Riches do not consist in the possession of treasures, but in the use made
of them" ~ Napoleon Bonaparte</i></p>
<p><b>Related commands:</b></p>
<p>  @@SERVERNAME</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="serverproperty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

