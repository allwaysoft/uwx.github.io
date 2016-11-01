---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>'Format_String' clause</code></h1> 
<p>The formatting of this information varies by platform.<br>
  <br>
  Syntax:</p>
<pre>  %c  The copy <i>number</i> of the backup piece within a set of duplexed
      backup pieces. If you did not duplex a backup, then this variable
      is 1 for backup sets and 0 for proxy copies.
      If one of these commands is enabled, then the variable shows the
      copy number. The maximum value for %c is 256. 

  %d  The name of the database. 

  %D  The current day of the month (in format DD)

  %F  Combination of DBID, day, month, year, and sequence into a unique
      and repeatable generated name. 

  %M  The month (format MM)

  %n  The name of the database, padded on the right with x characters
      to a total length of eight characters. (AKA: Porn star alias name)
      For example, if the scott is the database name, %n= scottxxx. 

  %p  The piece number within the backup set. This value starts at 1
      for each backup set and is incremented by 1 as each backup piece
      is created. <i>Note:</i> If you specify PROXY, then the %p variable must
      be included in the FORMAT string either explicitly or implicitly within %U. 

  %s  The backup set number. This number is a counter in the control file that
      is incremented for each backup set. The counter value starts at 1 and is
      unique for the lifetime of the control file. If you restore a backup
      control file, then duplicate values can result.
      Also, CREATE CONTROLFILE initializes the counter back to 1. 

  %t  The backup set time stamp, which is a 4-byte value derived as the
      number of seconds elapsed since a fixed reference time.
      The combination of %s and %t can be used to form a unique name for
      the backup set. 

  %T  The year, month, and day (YYYYMMDD)

  %u  An 8-character name constituted by compressed representations of
      the backup set number and the time the backup set was created. 

  <b>%U </b> A convenient shorthand for %u_%p_%c that guarantees uniqueness in
      generated backup filenames.
      If you do not specify a format, <b>RMAN uses %U by default. </b>

  %Y  The year (YYYY)

  %%  Specifies the '%' character. e.g. %%Y translates to %Y. </pre>
<p><i><br>
<span class="quote">"God has arrived. I met him on the 5:15 train" ~ John Maynard Keynes, reporting Wittgenstein’s return to Cambridge in 1929.</span></i><br>
    <br>
<b>Related Commands:</b><br>
<a href="rman_backup.html"><br>
BACKUP</a> - Back up database files, archive logs, backups, or copies. <b><br>
</b> <a href="rman_configure.html">CONFIGURE</a> - Persistent RMAN settings.</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_format_string.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

