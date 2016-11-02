---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CHECKFILEGROUP - Check the allocation and structural integrity of all tables and indexed views in a filegroup.</h1>
<pre>Syntax
      <b>DBCC CHECKFILEGROUP 
</b>         [( '<i>filegroup</i>' | <i>filegroup_id | </i>0 
               [, NOINDEX ] 
          )]
         [WITH 
              [ <b>{</b>ALL_ERRORMSGS | NO_INFOMSGS <b>}</b> ]
                   [, TABLOCK ]  [ , ESTIMATEONLY ] [ , PHYSICAL_ONLY ]
         ]
 Key:
   filegroup_name - The name of the filegroup to be checked.
                    default (or if 0 is specified) = the primary filegroup. 
   NOINDEX        - Skip intensive checks of nonclustered indexes. 
   ALL_ERRORMSGS  - Return all reported errors per object, default = first 200 errors.
   TABLOCK        - Obtain locks instead of using an internal database snapshot.
   ESTIMATEONLY   - Display the estimated amount of tempdb space that would be required.
   PHYSICAL_ONLY  - Limit checking to the integrity of the physical structure of the page,
                    record headers and the physical structure of B-trees.</pre>
<p>  Examples</p>
<pre>-- Check the primary filegroup in 'MyDatabase'
USE MyDatabase;<br>GO<br>DBCC CHECKFILEGROUP;<br>GO
</pre>
<p class="quote"><i>"One of the most important ways to manifest integrity is to be loyal to those who are not present. In doing so, we build the trust of those who<br>
are present" ~ Stephen Covey</i></p>
<p><b>Related</b></p>
<p><a href="dbcc_checktable.html">DBCC CHECKTABLE</a> - Check integrity of a table or indexed view.</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

