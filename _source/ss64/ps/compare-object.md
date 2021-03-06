---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Compare-Object</h1>
<p>Compare two sets of objects e.g. compare the content within two files, one object is the reference set, one is the difference set. The result indicates where a property value appears:<br>
only in the Reference set (<span class="code">&lt;=</span>), only in the Difference set (<span class="code">=&gt;</span>), or in both  (<span class="code">==</span>) when -IncludeEqual is specified.</p>
<pre>Syntax
      Compare-Object [-referenceObject] <i>PSObject</i>[] [-differenceObject] <i>PSObject</i>[] 
        [-syncWindow <i>int</i>] [-property <i>Object</i>[]] [-caseSensitive]
            [-culture <i>string</i>] [-excludeDifferent] [-includeEqual]
               [-passThru] [<i>CommonParameters</i>]

Key
   -referenceObject <i>PSObject</i>[]
       Object(s) used as a reference for comparison.
        
   -differenceObject <i>PSObject</i>[]
       Object(s) to compare to the reference object(s).
        
   -syncWindow <i>int</i>
       The search region where an attempt is made to re-sync the order if there is no match.
       The Default=[Int32]::MaxValue
       (In PowerShell 1.0 this default was just 5 which is often too low)

   -property <i>Object</i>[]
       Properties of the objects to compare.
        
   -caseSensitive
       Make comparisons case-sensitive.
        
   -culture <i>string</i>
       The culture to use for comparisons.
        
   -excludeDifferent
       Display only the characteristics of compared objects that are equal.
        
   -includeEqual 
       Displays characteristics of compared objects that are equal.
       By default only differences are displayed.
        
   -passThru
       Pass the object created by this cmdlet through the pipeline. 

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Compare-Object: <span class="code"> <b>diff</b></span></p>
<p>Compare-Object compares two sets of objects, one  the 'reference' set and the 'difference' set. </p>
<p>The results indicate a property value appears only in the Reference set (indicated by <span class="code">&lt;=</span> ), only in the Difference set (indicated by  <span class="code">=&gt;</span> ) or in both objects (indicated by  <span class="code">==</span>  when  -IncludeEqual parameter is specified.)</p>
<p><b>Examples</b></p>
<p>Compare the content of two text files:</p>
<pre>PS C:\&gt; "Hello World" &gt; C:\temp\apples.txt
PS C:\&gt; "Hello World" &gt; C:\temp\oranges.txt
PS C:\&gt; "More Information" &gt;&gt; C:\temp\oranges.txt
PS C:\&gt; $apples = Get-Content C:\temp\apples.txt
PS C:\&gt; $oranges = Get-Content C:\temp\oranges.txt
PS C:\&gt; Compare-Object $apples $oranges

InputObject             SideIndicator
----------------              ------------------
More Information       =&gt;</pre>
<p>Compare the processes running before and after starting a copy of notepad.exe, using Get-Process to retrieve the processes running and store them in a variable:</p>
<pre>PS C:\&gt; $proc_before = get-process
PS C:\&gt; notepad
PS C:\&gt; $proc_after = get-process
PS C:\&gt; compare-object -referenceobject $proc_before -differenceobject $proc_after -SyncWindow 1000</pre>
<p>Compare the services running on 2 machines (from the <a href="http://powershell.com/cs/blogs/tips/archive/2010/12/31/comparing-services.aspx">powershell.com</a> blog):</p>
<pre>PS C:\&gt; $machine1 = Get-Service -ComputerName Server64<br>PS C:\&gt; $machine2 = Get-Service -ComputerName Server65<br>PS C:\&gt; Compare-Object -ReferenceObject $machine1 -DifferenceObject $machine2 -Property Name,Status `<br>-passThru | Sort-Object Name | Select-Object Name, Status, MachineName</pre>
<p class="quote"><i>“With the greater part of rich people, the chief enjoyment of riches consists in the parade of riches” ~ Adam Smith</i></p>
<p><b>Related:</b></p>
<p>  
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>
<a href="measure-object.html">Measure-Object</a> - Measure aspects of object properties and create objects from those values<br> 
<a href="new-object.html">New-Object</a> - Create a new .Net object<br> 
<a href="select-object.html">Select-Object</a> - Select objects based on parameters set in the Cmdlet command string<br> 
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br> 
<a href="where-object.html">Where-Object</a> - Filter input from the pipeline allowing operation on only certain objects<br>
Equivalent bash commands: <a href="../bash/diff3.html">diff3</a> - Show differences among three files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="compare-object.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

