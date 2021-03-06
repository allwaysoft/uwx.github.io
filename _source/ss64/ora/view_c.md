---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE VIEW</h1> 
<p>Create a view.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] [FORCE|NOFORCE] VIEW
     [<i>schema</i>.]<i>view</i> 
       [(alias,…) <a href="clause_constraint_col.html">inline_constraint(s)</a>]
       [<a href="clause_constraint_col.html">out_of_line_constraint(s)</a>]
       [<i>XMLType_view_clause</i>]
          AS subquery <i>options</i> 

Object View:
   CREATE [OR REPLACE] [FORCE|NOFORCE] VIEW
     [OF [schema.] type_name
        {WITH OBJECT IDENTIFIER {DEFAULT|(attribute,…) |
        UNDER SCHEMA.<i>superview</i> }
        ([<a href="clause_constraint_col.html">out_of_line_constraint(s)</a>]
            <i>attribute inline_constant(s)</i>)
            AS subquery <i>options</i>

<i>options</i>:
   WITH READ ONLY
   WITH CHECK OPTION [CONSTRAINT <a href="clause_constraint.html">constraint</a>]

<i>XMLType_view_clause</i>:
   OF XMLTYPE [XMLSCHEMA <i>XMLSchema_URL</i>] ELEMENT <i>element</i>
     WITH OBJECT IDENTIFIER {DEFAULT | (<i>expr</i>,…)}

   OF XMLTYPE [XMLSCHEMA <i>XMLSchema_URL</i>] ELEMENT <i>XMLSchema_URL#element</i>
     WITH OBJECT IDENTIFIER {DEFAULT | (<i>expr</i>,…)}</pre>
<p><b>Examples</b></p>
<p class="code">CREATE VIEW discography <br> 
AS 
<br>
Select t_artists.artist_name, t_albums.album_name<br>
From t_artists, t_albums <br>
Where t_artists.artist_id = 
t_albums.artist_id;</p>
<p class="code">Select artist_name, album_name from discography;</p>
<p><i>“Like tourists huffing and puffing to reach the peak we forget the view on the way up” - Friedrich Nietzsche</i><br>
  <br>
<b> Related:</b></p>
<p> <a href="view_a.html">ALTER VIEW</a> <br>
  <a href="view_d.html">DROP VIEW</a> <br>
<a href="http://www.informit.com/articles/article.asp?p=27131&amp;rl=1">Creating and Using Views</a> (book-sample chapter)<br>
  <br>
  <b>Related Views:</b></p>
<pre> <a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>            <a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>            <a href="../orad/USER_VIEWS.html">USER_VIEWS</a>
 <a href="../orad/DBA_MVIEWS.html">DBA_MVIEWS</a>           <a href="../orad/ALL_MVIEWS.html">ALL_MVIEWS</a>           <a href="../orad/USER_MVIEWS.html">USER_MVIEWS</a>

 <a href="../orav/V$FIXED_VIEW_DEFINITION.html">V$FIXED_VIEW_DEFINITION</a> 
 <a href="../orav/V$RESERVED_WORDS.html">V$RESERVED_WORDS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="view_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

