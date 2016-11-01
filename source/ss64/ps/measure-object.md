---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Measure-Object</h1> 
<p>Measure the numeric or string properties of objects</p>
<pre>Syntax
      Measure-Object [ [-property] <i>string</i>[] ]  [-inputObject <i>psobject</i>]
         [-average] [-sum] [-minimum] [-maximum]
            [<i>CommonParameters</i>]

      Measure-Object [ [-property] <i>string</i>[] ]  [-inputObject <i>psobject</i>]
         [-character] [-line] [-word] [-ignoreWhiteSpace]
            [<i>CommonParameters</i>]

Key
   -inputObject 
       The objects to be measured. 
       A command, expression or variable that contains the objects.

   -property string[]
       The property to measure.

   -average 
       Average the values in the designated property.

   -character
       Count the number of characters in the input object.

   -ignoreWhiteSpace 
       Ignore white space in word counts and character counts.

   -line 
       Count the number of lines in the input object.

   -minimum 
       Determine the minimum value of the properties.

   -maximum 
       Determine the maximum value of the properties.

   -sum
       Sum the values of the properties.

   -word 
       Count the number of words in the input object.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Measure-Object:<span class="code"> <b>measure</b></span></p>
<p>In PowerShell 3.0 it is possible to measure Date/Time properties such as <span class="code">LastWriteTime</span> of a file or <span class="code">StartTime</span> of a process.</p>
<p><b>Examples</b></p>
<p>Count the number of files and folders in the current  directory:</p>
<p><span class="code">PS C:\&gt; get-childitem | measure-object</span><br>
<br>Display the size of the largest and the size of the smallest file in the current  directory:</p>
<p class="code">PS C:\&gt; get-childitem | measure-object -property length -minimum -maximum</p>
<p>Count the number of words in the file SS64.txt</p>
<p class="code">PS C:\&gt; get-content C:\SS64.txt | measure-object  -word</p>
<p class="quote"><i>“The advantage of living is not measured by length, but by use; some men have lived long, and lived little; attend to it while you are in it” ~ Michel Eyquem de Montaigne</i></p>
<p><b>Related:</b></p>
<p><span class="body"><a href="compare-object.html">Compare-Object</a> - Compare the properties of objects<br>
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>

<a href="new-object.html">New-Object</a> - Create a new .Net object<br>
<a href="select-object.html">Select-Object</a> - Select objects based on parameters set in the Cmdlet command string<br>
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
<a href="where-object.html">Where-Object</a> - Filter input from the pipeline allowing operation on only certain objects<br>
</span>Equivalent bash command: <a href="../bash/expr.html">expr</a> - Evaluate expressions</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="measure-object.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

