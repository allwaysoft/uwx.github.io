---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Pop-Location</h1> 
<p>Set the current working location from the stack. (<span class="code">popd</span>)<br>
The new location will  either be the most recent entry from the stack (created with <a href="push-location.html">Push-Location</a>) or the default stack.</p>
<pre>Syntax
      Pop-Location [-stackName <i>string</i>] [-passThru]
        [-UseTransaction] [<i>CommonParameters</i>]

Key
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
<p>Standard <a href="get-alias.html">Aliases</a> for Pop-Location:<span class="code"> popd</span></p>
<p>Push-location  (pushd) can be used to store <i>file</i> locations, <i>certificate store</i> locations or <i>registry</i> locations. Pop-Location (popd) can be used repeatedly to move back though all the locations on the stack.</p>
<p><b>Examples</b></p>
<p>Change the current working location to the last one pushed onto the stack:</p>
<p><span class="code">PS C:\&gt; pop-location</span></p>
<p>Change  location to the most recent item on the SS64 stack:</p>
<p><span class="code">PS C:\&gt; pop-location -stackname SS64</span><br>
<br>
<i class="quote">#Get back, get back. Get back to where you once belonged. Get back loretta# ~ <a href="http://www.youtube.com/watch?v=c_gp_1qwESo">The Beatles</a></i></p>
<p><b>Related:</b></p>
<p><a href="push-location.html">Push-Location</a> - Push a location to the stack<br>
Equivalent bash command: <a href="../bash/popd.html">popd</a> - Remove the top entry from the directory stack</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

