---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>Where (method)</h1>
<p>Filter input from a collection (or a set of properties), returning all or some of the matching items. </p>
<pre>Syntax
      <i>collection</i>.Where<b>(</b>{ <i>expression</i> } [, <i>mode</i> [, <i>numberToReturn</i>]]<b>)</b>

Key
   <i>collection</i>      A collection of objects e.g. filenames, registry keys, servernames.

   <i>expression      </i>A block of script to filter the object properties.

   <i>mode</i>            One of the following:

                     Default  Filter the collection using the expression script block (like <a href="where-object.html">Where-Object</a>)
                              to a maximum count if provided; or defaulting to all objects in the
                              collection; if no maximum count was provided in <i>numberToReturn</i>.
 
                     First    Display the First item in the filtered collection; or if a specific count
                              was requested in <i>numberToReturn</i>, return the first <i>N</i> objects. ('first', 5)

                     Last     Display the Last item in the filtered collection; or if a specific count
                              was requested in <i>numberToReturn</i>, return the last <i>N</i> objects. ('Last', 3)
 
                    SkipUntil Skip objects in the collection until an object passes the expression
                              script block filter, and then return the first <i>N</i> objects, defaulting to
                              all remaining objects if no maximum count was provided in <i>numberToReturn</i>.
                              This can include non-filtered items.

                     Until    Return the first <i>N</i> objects in a collection until an object passes the
                              expression script block filter, defaulting to all objects leading up to the
                              first object that passed if no maximum count was provided in <i>numberToReturn</i>.
                              This can include non-filtered items.

                     Split    Split a collection into two, placing all objects that pass the expression
                              script block filter into the first collection up to a maximum count if
                              one was provided in <i>numberToReturn</i>, with the rest of the filtered results
                              being dropped into the second collection regardless if they match the criteria or not.</pre>
<p>Available in PowerShell 4.0 and later, this method provides faster performance than a <a href="where-object.html">Where statement</a>.</p>

<p><b>Examples</b></p>
<p>Find all the running notepad processes:</p>
<p><span class="code">@(Get-Process)<b>.Where(</b>{ $_.Name -eq 'notepad'; }<b>)</b></span><br>
<br>
Filter a collection of services:</p>
<pre># Get a set of services
$services = Get-Service

# Display the first 3 items in the collection that have a Name starting with 'r' 
$services<b>.where(</b>{$_.Name <a href="syntax-regex.html">-match</a> '^r'},<b>'First'</b>,3<b>)</b>

# Split the services into two groups: Running and not Running 
$running,$notRunning = $services<b>.Where(</b>{$_.Status -eq 'Running'},<b>'Split')</b>

# Show the Running services<br>$running 
# Show the services that are not Running
$notRunning</pre>
<p class="quote"><i>“We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty” ~ Maya Angelou </i></p><p><b>Related:</b></p>
<p><a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline.<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property.<br>
<a href="select-object.html">Select-Object</a> - Select objects based on parameters set in the Cmdlet command string.<br>
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value.<br>
<span class="body"><a href="where-object.html">Where-Object</a> - Filter input from the pipeline (Alias = where) </span><br>
<a href="where-object.html">Where</a> statement.<br>
<a href="http://www.powershellmagazine.com/2014/10/22/foreach-and-where-magic-methods/">ForEach and Where magic methods</a> by Kirk Munro</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="where-method.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

