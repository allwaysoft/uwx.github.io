---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Tee-Object</h1> 
<p>Send the input object(s) to two places, an input object is piped  to a file or variable, and then also passed along the pipeline.</p>
<pre>Syntax
      Tee-Object [-filePath] <i>string</i>
         [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]

      Tee-Object -variable <i>string</i>
         [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]

Key
   -inputObject <i>psobject</i>
       The object to tee.
       Enter a variable, command or expression that gets the objects.

   -filePath <i>string</i>
       Save the input object(s) to a file named <i>string</i>.

   -variable <i>string</i>
       Assign the input object(s) to a variable named <i>string</i>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Tee-Object:<span class="code"> <b>tee</b></span></p>
<p><b>Examples</b></p>
<p>Get a list of the processes running and send to a file and also the console:</p>
<p><span class="code">PS C:\&gt; get-process | tee-object -filepath C:\fileA.txt</span><br>
<br>Get a list of the processes running and send to two files at once:</p>
<p><span class="code">PS C:\&gt; get-process | tee-object -filepath C:\fileA.txt | out-file C:\fileB.txt</span></p>
<p>Save a list of processes to a variable (myprocs) then use Tee-Object to save the myprocs to file and also display on the console:</p>
<p class="code">PS C:\&gt; $myprocs = Get-Process |Select-Object processname,handles<br>
PS C:\&gt; Tee-Object -inputObject $myprocs -filepath C:\fileC.txt</p>
<p>Save all the properties of the notepad process to a variable and then select and display just the ProcessName and Handles:</p>
<p><span class="code">PS C:\&gt; get-process notepad | tee-object -variable proc | select-object processname,handles </span></p>
<p class="quote"><i>“Two roads diverged in a wood, and I, I took the one less traveled by,And that has made all the difference” ~ Robert Frost (The Road Not Taken) </i></p>
<p><b>Related:</b></p>
<p> <a href="out-file.html">Out-File</a> - Send command output to a file<br>
<span class="body">
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>
<a href="select-object.html">Select-Object</a> - Select objects based on parameters set in the Cmdlet command string<br>
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value<br>
<a href="where-object.html">Where-Object</a> - Filter input from the pipeline allowing operation on only certain objects</span><br>
<a href="write-output.html">Write-Output</a> - Write an object to the pipeline<br>
Equivalent bash command: <a href="../bash/tee.html">tee</a> - Redirect output to multiple files</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

