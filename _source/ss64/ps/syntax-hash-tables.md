---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Hash Tables</h1>
<p>Hash Tables (also known as Associative arrays or Dictionaries) are a type of <a href="syntax-arrays.html">array</a> that allows the storage of paired Keys and Values, rather like a simple database table.</p>
<p>  Unlike normal arrays where you refer to each element via a numeric index, the keys of a hash table can be strings. The Key values do still need to be unique, if you try to add the same key twice PowerShell will return an error ("item has already been added"). </p>
<p>The built-in properties of a hash table include <span class="code">.Keys&nbsp;</span><span class="code">.Values</span> and<span class="code"> .Count </span></p>
<p>Create an empty Hash Table:</p>
<p class="code">$<i>array_name</i> = @{}</p>
<p>Create a Hash table and immediately populate it with some values:</p>
<p class="code">$<i>array_name</i> = @{<i>key1 </i>= <i>item1</i>; <i>key2 </i>= <i>item2</i>;...} </p>
<p>Example<b>:</b></p>
<pre>$usa_states=@{ CA="California";
  "NY" = "New York";
  "IL" = "Illinois";
  "NH" = "New Hampshire"}</pre>
<h2>Add items to a Hash Table </h2>
<p>This is done using the .Add() method.</p>
<pre>$usa_states.Add("GA", "Goregia")
</pre>
<h2>Edit items in a Hash Table </h2>
<p>This is done using the .Set_Item() method.</p>
<pre>$usa_states.Set_Item("GA", "Georgia")</pre>
<h2>Combine Hash Tables</h2>
<p>This is done by adding the hash variables with the<span class="code"> + </span>method, or appending with<span class="code"> +=</span></p>
<pre>$world_states = $usa_states + $india_states
</pre>
<h2>Remove items from a Hash Table </h2>
<p>This is done using the .Remove() method.</p><pre>$usa_states.Remove("GA")</pre>
<h2>Retrieve items from a Hash Table </h2>
<p>To display all contents just use the variable name.<br>
<span class="code">$usa_states</span></p>
<p>Return just the New York key (the quotes are only needed here if the key contains spaces):<br>
  <span class="code">$usa_states.'NY'</span></p>
<h2>Searching for items</h2>
<p>This is done using the .<span class="code">ContainsKey</span> or  .<span class="code">ContainsValue</span> methods.<br>
  <span class="code">$usa_states.ContainsKey('NY')<br>
$usa_states.ContainsValue('New')</span><br>
</p>
<h2>GetEnumerator</h2>
<p>A hash table is a single PowerShell object, to sort, filter or work with the pipeline you can unwrap this object into it’s individual elements with the <span class="code">GetEnumerator()</span> method.</p>
<pre>$<span class="code">usa_states</span>.GetEnumerator() | Sort-Object Name
</pre>
<p>When unwrapped with GetEnumerator, the hash table returns a collection of (DictionaryEntry) objects, so  they must be processed by cmdlets that can accept a collection, or alternatively pass the objects individually via ForEach.</p>
<p><span class="code">$hashtable.GetEnumerator() | ForEach-Object { … }</span> <br>
or<br>
<span class="code">ForEach($item in $hashtable.GetEnumerator()) {Echo $item … }</span><br>
<span class="code">ForEach($item in $hashtable.KEYS.GetEnumerator()) {Echo $item … }</span><br>
</p>
<h2>Using @ as a <a id="splat"></a>SPLAT operator</h2>
<p>New in PowerShell 2.0 is the ability to expand a hash table into a set of command line <a href="syntax-args.html">parameters</a>.</p>
<p>First use @ to create a hashtable containing parameters to a cmdlet:<span class="code"><br>
PS C:\&gt; $params = @{path = "c:\demo"; Recurse= $true}</span></p>
<p>Then use @ to SPLAT the parameters:<span class="code"><br>
  PS C:\&gt; dir @params</span></p>
<p>That will in effect run:<span class="code"> 
  dir -Path c:\demo -Recurse:$true</span></p>
<p>The paired <span class="code">keys</span> and <span class="code">values</span> become cmdlet <span class="code">parameters</span> and <span class="code">values</span>:</p>
<p><span class="code">PS C:\&gt; $params = @{year = 1980; Month = 5; day = 31}<br>
PS C:\&gt; get-date @params</span></p>
<p>The @ character is also used to create <a href="syntax-esc.html">here strings</a>.</p>
<p class="quote"><i>“Nor shall you by your presence make afraid, The kingfisher, who looks down dreamily, At his own shadow gorgeously array'd” - Sir Edmund William Gosse</i></p>
<p><b>Related:</b></p>
<p><a href="group-object.html">Group-Object</a> -  Group objects that contain the same value.<br>
<span class="code">get-help about_array</span><br>
<a href="syntax-variables.html">Variables</a> - Create/read variables<br>
<a href="http://blogs.technet.com/b/heyscriptingguy/archive/2011/10/16/dealing-with-powershell-hash-table-quirks.aspx">Dealing with PowerShell Hash Table Quirks</a> - The Scripting Guys</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-hash-tables.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

