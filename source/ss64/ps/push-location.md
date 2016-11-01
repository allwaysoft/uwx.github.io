---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Push-Location</h1> 
<p>Push the current location onto the stack,and optionally change the current location. (<span class="code">pushd</span>) </p>
<pre>Syntax
      Push-Location { [[-path] <i>string</i>] | [-literalPath <i>string</i>] }
            [-stackName <i>string</i>] [-passThru] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -path <i>string</i>
       Change your location to <i>string</i><i> </i>after first pushing the 
       current location onto the stack. Wildcards are permitted.

   -literalPath <i>string</i>
       Like -Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks. 

   -stackName <i>string</i>
       An alternate stack. This stack now becomes the current stack.

   -passThru 
       Pass the object created through the pipeline. 
       By default, Pop-Location does not pass any objects through the pipeline.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Push-Location:<span class="code"> pushd</span></p>
<p>Push-Location  adds ("pushes") the current location to the top of a list of locations, called a "stack." <br>
This can be the default stack or a stack that you create. If a path is specified, Push-Location will push the current location onto the stack and then change the current location to  the new path.</p>
<p><b>Examples</b></p>
<p>Push the current location onto the default stack and then change location to C:\Windows\ :</p>
<p><span class="code">PS C:\&gt; push-location C:\Windows</span><br>
<br>Push the current location onto the stack and then change to the home directory (%USERPROFILE%), which can be represented by the tilde symbol (~) or $home:</p>
<p class="code">PS C:\&gt; push-location ~</p>
<p>Push the current location onto the 'myregstack' stack and change location to HKLM:\Software\Policies:</p>
<p class="code">PS HKLM:\software&gt; push-location HKLM:\Software\Policies -stackname myRegstack</p>
<p class="quote"><i>#Ah, push it - push it good<br>
Ah, push it - p-push it real good# ~ Salt 'N' Pepa</i></p>
<p><b>Related:</b><br><br>
<a href="pop-location.html">Pop-Location</a> - Set the current working location (from the stack)<br>
Equivalent bash command:<a href="../bash/export.html"> 
</a><a href="../bash/pushd.html">pushd</a> - Save and then change the current directory.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

