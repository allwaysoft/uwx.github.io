---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>mdfind</h1> 
<p>Spotlight search </p>
<pre>Syntax
      mdfind [-live] [-count] [-onlyin <i>directory</i>] <i>query</i>

Key
    <i>query</i>       A string or query expression.

    -0          Print an ASCII NUL character after each result path.
                This is useful when used in conjunction with xargs -0.

    -live       Causes the mdfind command to provide live-updates to the 
                number of files matching the query.  When an update causes the
                query results to change the number of matches is updated.
                The find can be cancelled by typing ctrl-C.

    -count      Output the total number of matches, instead of the path 
                to the matching items.

    -onlyin <i>dir</i>
                Limit the scope of the search to the directory specified.

    -literal    Force the provided query string to be taken as a literal
                query string, without interpretation.

    -interpret  Force the provided query string to be interpreted as if the
                user had typed the string into the Spotlight menu.
                For example, the string "search" would produce the following 
                query string:
                       (* = search* cdw || kMDItemTextContent = search* cdw)</pre>
<h2>Spotlight Keywords.</h2>
<blockquote>
<p>These can be included in the <i>query</i> expression to limit the type of documents returned: </p>
<p>Applications <span class="code">kind:application, kind:applications, kind:app</span><br>
Audio/Music <span class="code">kind:audio, kind:music</span><br>
Bookmarks <span class="code">kind:bookmark, kind:bookmarks</span><br>
Contacts <span class="code">kind:contact, kind:contacts</span><br>
Email <span class="code">kind:email, kind:emails, kind:mail message, kind:mail messages</span><br>
Folders <span class="code">kind:folder, kind:folders</span><br>
Fonts <span class="code">kind:font, kind:fonts</span><br>
iCal Events <span class="code">kind:event, kind:events</span><br>
iCal To Dos <span class="code">kind:todo, kind:todos, kind:to do, kind:to dos</span><br>
Images<span class="code"> kind:image, kind:images</span><br>
Movies <span class="code">kind:movie, kind:movies</span><br>

PDF <span class="code">kind:pdf, kind:pdfs</span><br>
Preferences <span class="code">kind:system preferences, kind:preferences</span><br>
Presentations <span class="code">kind:presentations, kind:presentation</span></p>
</blockquote>
<h2>Date Keywords.</h2>
<blockquote>
<p>These can be included in the <i>query</i> expression to limit the age of documents returned: </p>
<p class="code">date:today &nbsp;&nbsp;&nbsp;$time.today()<br>
date:yesterday .yesterday()<br>
date:this week &nbsp;.this_week()<br>
date:this month .this_month()<br>

date:this year &nbsp;.this_year()<br>
<br>
date:tomorrow &nbsp;.tomorrow()<br>
date:next month &nbsp;.next_month()<br>
date:next week &nbsp;.next_week()<br>
date:next year &nbsp;.next_year()</p>
</blockquote>
<h2>Boolean Operators</h2>
<blockquote>
<p>By default  mdfind will AND together elements of the query string. <br>
<span class="code">| </span> (OR) To return items that match either word, use the pipe character: <span class="code"> stringA|stringB <br>
-</span>  (NOT) To exclude documents that match a string <span class="code">-string<br>
</span>

<span class="code">== </span>“equal”<br> 
<span class="code">!= </span>“not equal”<br>
<span class="code">&lt; and &gt;</span>  “less” or “more than”<br>
<span class="code">&lt;= and &gt;=</span>  “less than or equal” or “more than or equal”<br>
Whitespace is significant when building a query, use parenthesis <span class="code">()</span> to create groups.</p>
</blockquote>
<p>To get a list of the available attributes for use in constructing queries, see mdimport(1), particularly the -X switch. Not all files are indexed by spotlight and not all file attributes are present on all files, image files, iCal files and music files all support different attributes. </p>
<p><b>Examples</b></p>
<p>Returns all files with any metadata attribute value matching the 
string "image":</p>
<p class="code"> $ mdfind image</p>
<p> Return all files that contain "Len Deighton" in the kMDItemAuthor metadata attribute:</p>
<p class="code"> $ mdfind "kMDItemAuthor == '*Len Deighton*'"</p>
<p> Return all files with any metadata attribute value matching the
string "skateboard". The find continues to run after gathering the initial results, providing a count of the number of files that match the
query.</p>
<p class="code"> $ mdfind -live skateboard</p>
<p>Return all Microsoft.Word document files:</p>
<p class="code">$ mdfind "kMDItemContentType == 'com.microsoft.word.doc'"</p>
<p>Return  files where the composer name includes 'Eno' (non <b>c</b>ase sensitive search):</p>
<p class="code">$ mdfind 'kMDItemComposer = "*ENO*"c'</p>
<p>Return all image files matching the words 'maude' and 'paris':</p>
<p class="code">$ mdfind "kind:images maude paris"</p>
<p>Return all image files last edited yesterday:</p>
<p class="code">$ mdfind "kind:image date:yesterday"</p>
<p>Return all  files in the users home folder (~) that have been modified in the last 3 days:</p>
<p class="code">$ mdfind -onlyin ~ 'kMDItemFSContentChangeDate &gt;= $time.today(-3)'</p>
<p class="quote"><i>“The real voyage of discovery consists not in seeking new landscapes but in having new eyes” ~ Marcel Proust</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mdfind.1.html">mdfind man page</a> - Apple.com<br>
<a href="https://developer.apple.com/library/mac/#documentation/Carbon/Reference/MetadataAttributesRef/Reference/CommonAttrs.html#//apple_ref/doc/uid/TP40001694-SW1">Spotlight Metadata Attributes</a> - List of all the <span class="code">kDM*</span> attributes (or just use <span class="code">mdls</span> to list the attributes of a file) <br>
mdls - List the Spotlight metadata attributes for a specified file<br>
<a href="mdutil.html">mdutil</a> - Manage Spotlight metadata store<br>
mdimport - Import file hierarchies into the Spotlight datastore<br>
<a href="find.html">find</a> - Search for files that meet a desired criteria</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mdfind.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

