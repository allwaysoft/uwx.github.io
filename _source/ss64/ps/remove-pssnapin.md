---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-PSSnapin</h1> 
<p>Remove PowerShell snap-ins from the current console.</p>
<pre>Syntax
      Remove-PSSnapin [-name] <i>string</i>[] [-passThru]
              [-whatIf] [-confirm] [<i>CommonParameters</i>]

key
   -name <i>string[]</i>
       Name of each PowerShell snap-in to remove from the current console
       e.g. Microsoft.Exchange or MyCompany.User. 

   -passThru 
       Pass the object created by this cmdlet through the pipeline.

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.
        
   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  Standard <a href="get-alias.html">Aliases</a> for Remove-PSSnapin:<span class="code"> <b>rsnp</b></span></p>
<p>Changing the available cmdlets and providers by adding or removing snap-ins will only affect the current console, unless <a href="export-console.html">Export-Console</a> is used to save the console. Built-in snap-ins that are installed with  PowerShell cannnot be removed. </p>
<p><b>Examples</b></p>
<p>Remove the Micrsoft.Exchange snap-in from the current console:</p>
<pre>PS C:&gt; remove-pssnapinn -name Microsoft.Exchange
</pre>
<p>Remove all the PowerShell snap-ins that have names beginning with "smp" from the current session:</p>
<pre>PS C:&gt; get-PSSnapIn smp* | remove-PSSnapIn</pre>
<p class="quote"><i>“All good things are wild and free” ~ Henry David Thoreau</i></p>
<p><b>Related:</b><br>
<br>
<a href="add-pssnapin.html">add-PSSnapIn</a> - Add snap-ins to the console<br>
<a href="get-pssnapin.html">get-PSSnapin</a> - List PowerShell snap-ins on this computer <br>
<a href="export-console.html">Export-Console</a> - Export console configuration to a file</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

