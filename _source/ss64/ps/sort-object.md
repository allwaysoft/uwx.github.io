---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Sort-Object</h1> 
<p>Sort objects by property value.</p>
<pre>Syntax
      Sort-Object [[-property] <i>Object</i>[]] [-inputObject <i>psobject</i>] [-culture <i>string</i>]
            [-caseSensitive] [-unique] [-descending] [<i>CommonParameters</i>]

Key
   -Property <i>Object</i>
       A property or properties to use when sorting. Wildcards are permitted. 
       Objects are sorted based on the values of these properties.

       Multiple properties may be specified, the objects will be sorted by 
       each property in turn. i.e Surname and then FirstName

       If not property is specified, sort-object will sort using the default
       property for the object type.

   -InputObject <i>psobject</i>
       The objects to be sorted.

       When the -InputObject parameter is used to submit a collection of items,
       Sort-Object receives one object that represents the collection.
       Because one object cannot be sorted, Sort-Object returns the entire collection unchanged.

       To sort objects, pipe them to Sort-Object.

   -Culture <i>string</i>
       The cultural/country configuration to use when sorting.

   -CaseSensitive
       Sort UPPER and lower case letters separately.

   -Unique 
       Return only the unique values.

   -Descending 
       Sort in descending order. The Descending parameter applies to all properties.
       To sort by some properties in ascending order and others in descending order, 
       specify their property values with a hash table.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Set-Alias:<span class="code"> <b>sort</b></span></p>
<p>The -Descending parameter applies to all properties. To sort some properties in ascending order and others in decending order, specify the property values with a hashtable like this: <br>
<span class="code">-property @{expression={$_.PropName};Descending=$true}</span></p>
<p><b>Examples</b></p>
<p>List the files in the current directory and sort using the default order (alphabetical by Name):</p>
<p><span class="code">PS C:\&gt; get-childitem | sort-object</span><br>
<br>List the files in the current directory and sort by date/time:</p>
<p class="code">PS C:\&gt; get-childitem | sort -property LastWriteTime</p>
<p>List the files in the current directory and sort by file length (size):</p>
<p class="code">PS C:\&gt; get-childitem | sort -property length</p>
<p>List the files in the current directory and sort in descending order by the time span between CreationTime and LastWriteTime:</p>
<p class="code">PS C:\&gt; get-childitem *.* | sort @{Expression={$_.LastWriteTime-$_.CreationTime}; Ascending=$false} | select-object LastWriteTime, CreationTime</p>
<p>Display the services on the computer in descending Status order and ascending DisplayName order:</p>
<p class="code">PS C:\&gt; get-service | sort-object -property `<br>
@{Expression="Status";Descending=$true}, `<br>
@{Expression="DisplayName";Descending=$false} </p>
<p>Sort a string of characters </p>
<p class="code">$mystring = "12ÇdfDd²4a5617F89aªábCåÅæÆbDecBcCçeEéàâAäÄaÉ33èEêëAdfF"<br>
$mySortedString = $mystring -split '(.{1})' | Where-object{$_} | sort -casesensitive -unique<br>
"$mySortedString"</p>
<p class="quote"><i>"We never sit anything out. We are cups, constantly and quietly being filled. The trick is, knowing how to tip ourselves over and let the Beautiful Stuff out" ~ Ray Bradbury</i></p>
<p><b>Related:</b><br>
<br>
<span class="body"><a href="get-unique.html">Get-Unique</a> - Get the unique items in a collection<br>
<a href="compare-object.html">Compare-Object</a> - Compare the properties of objects<br>
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>
<a href="select-object.html">Select-Object</a> - Select properties of objects.<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
<a href="where-object.html">Where-Object</a> - </span>Filter the objects passed along the command pipeline.<br>
Equivalent bash command: <a href="../bash/sort.html">sort</a> - Sort text files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

