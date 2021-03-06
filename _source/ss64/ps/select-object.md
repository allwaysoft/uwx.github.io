---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Select-Object</h1> 
<p>Select properties of an object or set of objects. Select objects from an array.</p>
<pre>Syntax
      Select-Object [[-property] <i>Object</i>[]] [-excludeProperty <i>string</i>[]]
              [-expandProperty <i>string</i>] [-first <i>int</i>] [-last <i>int</i>]
                 [-Skip <i>int</i>] [-unique] [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]

      Select-Object [-Index <i>Int32</i>[]] [-InputObject <i>psobject</i>] [-Unique] [<i>CommonParameters</i>]

Key
   -Property <i>Object</i>[]
       The property or properties to select.

   -ExcludeProperty <i>string</i>
       Properties that will not be selected.
 
   -ExpandProperty <i>string</i>
       Select and expand the specified property. If the specified property is  
       an array, for example, each value of the array should be included.

   -First <i>int</i>
       Select <i>int</i> number of objects from the beginning of an array of input objects.
        
   -Last <i>int</i>
       Select <i>int</i> number of objects from the end of an array of input objects.

   -Skip <i>int</i>
       Skip (do not select) the specified number of items.
       By default, the Skip parameter counts from the beginning of the array
       or list of objects, but if the command uses the Last parameter, it
       counts from the end of the list or array.

       Unlike the Index parameter, which starts counting from 0, the Skip parameter begins at 1.

   -Unique 
       Select unique objects only, (identical properties and values)

   -InputObject <i>psobject</i>
       An object or objects to input to Select-Object. May be pipelined.

   -Index <i>Int32</i>[]
       Select objects from an array based on their index values.
       Enter the indexes in a comma-separated list.

       Indexes in an array begin with 0, where 0 represents the first value
       and (n-1) represents the last value.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Select-Object:<span class="code"> <b>select</b></span></p>
<p>Select-Object will create new objects by copying the values of the selected properties from the input objects.</p>
<p>If the input object is an array, the<span class="code"> -First, -Last</span> and <span class="code">-Unique</span> parameters may be used to select particular objects, for more powerful object filtering, use <a href="where-object.html">Where-Object</a>.</p>
<p> To add a calculated property to an object,  specify a <a href="syntax-hash-tables.html">hash table</a> as a value of the <span class="code">-Property</span> parameter. The hash table must include two keys: <b>Name</b> and <b>Expression</b> with the Expression key  assigned a script block that will determine the value of the property.</p>
<p><b>Examples</b></p>
<p>Display only the name, ID and Working Set(WS) properties of Get-Process:</p>
<p><span class="code">PS C:\&gt; get-process | select-object ProcessName,Id,WS</span><br><br>
Display only the Name and modules properties  of Get-Process, use -ExpandProperty to display the details contained within the modules property:</p>
<p class="code">PS C:\&gt; get-process | select-object ProcessName -expandproperty modules | format-list</p>
<p>Display the 5 processes that are using the most memory (WS=Working Set):</p>
<p class="code">PS C:\&gt; get-process | sort-object -property WS | select-object -Last 5</p>
<p>Display  the name and claculate the start day of the processes running:</p>
<p class="code">PS C:\&gt; get-process | select-object ProcessName,@{<b>Name</b>="Start Day"; <b>Expression</b>={$_.StartTime.DayOfWeek{% raw %}}}{% endraw %}</p>
<p>Get the first (newest) and last (oldest) events in the Windows PowerShell event log:</p>
<p><span class="code">PS C:\&gt; $evts = get-eventlog -log "Windows PowerShell" <br>
PS C:\&gt; $evts | select-object -index 0, ($evts.count - 1)</span></p>
<p>Retrieve all the names listed in the Servers.txt file, except for the first
one:</p>
<p><span class="code">PS C:\&gt; get-content servers.txt | select-object -skip 1</span></p>
<p class="quote"><i>“A select committee expires on completion of its assigned duties” ~ <a href="http://en.wikipedia.org/wiki/Select_or_special_committee_(United_States)">Wikipedia</a> </i></p>
<p><b>Related:</b><br>
<br>
<a href="select-string.html">Select-String</a> - Search through strings or files for patterns<br>
<span class="body"><a href="compare-object.html">Compare-Object</a> Compare the properties of objects<br>
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>
<a href="measure-object.html">Measure-Object</a> - Measure aspects of object properties and create objects from those values<br>
<a href="new-object.html">New-Object</a> - Create a new .Net object<br>
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
<a href="where-object.html">Where-Object</a> - Filter input from the pipeline allowing operation on only certain objects</span><br>
<a href="get-unique.html">Get-Unique</a> - Get the unique items in a collection<br>
Equivalent bash command: <a href="../bash/awk.html">gawk</a> - Find and Replace text</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="select-object.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

