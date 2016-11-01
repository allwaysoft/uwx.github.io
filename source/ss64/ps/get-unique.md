---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Unique</h1> 
<p>Return the unique items from a <b>sorted</b> list.</p>
<pre>Syntax
      Get-Unique [-inputObject <i>psobject</i>] [-asString] [<i>CommonParameters</i>]
    
      Get-Unique [-inputObject <i>psobject</i>] [-onType] [<i>CommonParameters</i>]

Key
   -inputObject 
       A command/expression/variable that returns the object(s)
      (will treat as a single collection)
        
   -asString 
       Treat the data as a string, not an object.
       Use this parameter to find the unique values of object properties
       e.g. file names.
       For a collection of objects of the same type, Get-Unique will
       returns just one (the first). 
        
   -onType 
       Return only one object of each type.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Unique:<span class="code"> <b>gu</b></span></p>
<p><b>Examples</b></p>
<p>Sort an array of integers, and display the unique values:</p>
<p><span class="code">PS C:\&gt; 2,4,6,8,2,64,4,2,99,3 | sort-object | Get-Unique</span><br>
<br>List every folder on the C: drive that contains one or more .xls files:</p>
<p class="code">PS C:\&gt; gci C:\ -include *.xls -recurse |foreach {$_.directoryName} | get-unique</p>
<p>Get the names of processes running on the computer with duplicates eliminated:</p>
<p class="code">PS C:\&gt; get-process | sort-object | select processname | get-unique -asstring</p>
<p>Find the number of unique words in a text file:</p>
<p class="code">PS C:\&gt; $a = $(foreach ($line in get-content C:\docs\File1.txt) {$line.tolower().split(" ")}) | sort | get-unique<br>
PS C:\&gt; $a.count</p>
<p class="quote"><i>"An Englishman, even if he is alone, forms an orderly queue of one" ~ George Mikes</i></p>
<p><b>Related:</b><br>
<br><a href="get-random.html">Get-Random</a> - Get a random number</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-unique.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

