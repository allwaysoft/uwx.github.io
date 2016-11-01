---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Format-Custom</h1> 
<p>Use a customized view to format  PowerShell output.</p>
<pre>Syntax
      Format-Custom [[-property] <i>Object</i>[]] [-inputObject <i>psobject</i>]
         [-view <i>string</i>] [-groupBy <i>Object</i>] [-force] [-expand <i>string</i>]
            [-displayError] [-showError]
               [-depth <i>int</i>] [<a href="common.html">CommonParameters</a>]

Key
   -property <i>Object</i>[]
       The object properties to display (in order)
       Wildcards are permitted.
       You cannot use -Property and -View in the same command.
        
   -inputObject <i>psobject</i>
       The objects to format. (a variable, command or expression that gets the objects)
        
   -view <i>string</i>
       The name of an alternate format or "view." 
        
   -groupBy <i>Object</i>
       Format the output in groups based on a shared property or value.
        
   -force 
       Override restrictions that prevent the command from succeeding, 
       without compromising security. Force will override read-only
       attributes but will not change file permissions.
        
   -expand <i>string</i>
       Where string is either "EnumOnly" (the default), "CoreOnly" or "Both"
       'CoreOnly' will format and display properties of the collection object itself, 
       while 'emumOnly' will enumerate and display the object properties. 
       (designed around the ICollection (System.Collections) interface.)

   -displayError 
       Display errors at the command line.
        
   -showError 
       Send errors through the pipeline.
        
   -depth <i>int</i>
       The number of columns in the display.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Format-Custom:<span class="code"> <b>fc</b></span></p>
<p>The value of -Property  can be a new calculated property. To create a calculated property, use a hash table. Valid keys are:</p>
<blockquote>
<p><span class="code">-- Expression <i>string</i> or <i>script block</i><br>
-- Depth <i>int32</i></span></p>
</blockquote>
<p>If the Format-Custom command does not include -View,  a default custom view will be used to format the data.</p>
<p><b>Examples</b></p>
<p>List the Winlogon process using a custom view called MyCustomView :</p>
<p><span class="code">PS C:\&gt; get-process Winlogon | format-custom -view MyCustomView</span></p>
<p class="quote"><i>“You must do the thing you think you cannot do” ~ Eleanor Roosevelt</i></p>
<p><b>Related:</b><br>
<br>
<a href="format-table.html">format-table</a> - Format the output as a table<br> 
<a href="format-wide.html">format-wide</a> - Format objects as a table of their properties<br>
<a href="out-file.html">out-file</a> - Send command output to a file</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
