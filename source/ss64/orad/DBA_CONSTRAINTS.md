---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_CONSTRAINTS </h1><p> Constraint definitions on all tables </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the table
   CONSTRAINT_NAME
      Name associated with constraint definition
   CONSTRAINT_TYPE
      Type of constraint definition
   TABLE_NAME
      Name associated with table with constraint definition
   SEARCH_CONDITION
      Text of search condition for table check
   R_OWNER
      Owner of table used in referential constraint
   R_CONSTRAINT_NAME
      Name of unique constraint definition for referenced table
   DELETE_RULE
      The delete rule for a referential constraint
   STATUS
      Enforcement status of constraint - ENABLED or DISABLED
   DEFERRABLE
      Is the constraint deferrable - DEFERRABLE or NOT DEFERRABLE
   DEFERRED
      Is the constraint deferred by default - DEFERRED or IMMEDIATE
   VALIDATED
      Was this constraint system validated? - VALIDATED or NOT VALIDATED
   GENERATED
      Was the constraint name system generated? - GENERATED NAME or USER NAME
   BAD
      Creating this constraint should give ORA-02436. Rewrite it before 2000 AD.
   RELY
      If set,this flag will be used in optimizer
   LAST_CHANGE
      The date when this column was last enabled or disabled
   INDEX_OWNER
      The owner of the index used by this constraint
   INDEX_NAME
      The index used by this constraint
   INVALID
      --
   VIEW_RELATED
      --

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_CONSTRAINTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

