---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.FindRecord</h1>
<p> Find a record.</p>
<pre>Syntax
      DoCmd.FindRecord(<i>FindWhat</i>, <i>Match</i>, <i>MatchCase</i>, Search,
                 <i>SearchAsFormatted</i>, <i>OnlyCurrentField</i>, <i>FindFirst</i>)
Key
   <i>FindWhat</i>  The data to search for. 
             A text, number or date expression. 

   <i>Match</i>     Where in the field to search for the match.
             acAnywhere (0), <u>acEntire</u> (1), acStart (2)

   <i>MatchCase</i> Use True for a case-sensitive search
             or <u>False</u> for non case-sensitive.

   <i>Search</i>    The direction to search.
             acUp (0), acDown (1), <u>acSearchAll</u> (2)

   SearchAsFormatted
             Use True to search for data as it's formatted
             or <u>False</u> to search for data as it's stored in the database. 

   <i>OnlyCurrentField</i>
             Search all fields, or only the current field.
             acAll (0), <u>acCurrent</u> (-1)

   <i>FindFirst</i> Use <u>True</u> to start the search at the first record.
             or False to start the search at the record following the current record.
</pre>
<p> FindRecord searches for the specified data in the records, if found, the data is selected in the record.</p>
<p>FindRecord  does not return a value indicating its success or failure. To determine whether a value exists in a recordset, use  <a href="findfirst.html">FindFirst, FindLast, FindNext or FindPrevious</a>. These methods set the value of the <span class="code">NoMatch</span> property to True if the specified value is not found.</p>
<p><b>Example</b></p>
<p>'Find the first occurrence of the name Smith in the surname field. (not 'smith' or 'Smithson').<br>
<span class="code">Me!txtSurname.SetFocus<br>
DoCmd.FindRecord "Smith",, True,, True</span></p>
<p class="quote"><i>“Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover” ~ Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="searchforrecord.html">SearchForRecord</a> - Search for a specific record.<br>
<a href="movefirst.html">MoveFirst</a>/Last/Next/Previous Record<br>
<a href="move.html">.Move</a> - Move through a Recordset</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

