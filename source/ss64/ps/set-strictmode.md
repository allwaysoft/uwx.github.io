---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-StrictMode</h1> 
<p>Establish and enforce coding rules in expressions, scripts, and script blocks.</p>
<pre>Syntax
      Set-StrictMode -Off [<i>CommonParameters</i>]

      Set-StrictMode -Version <i>Version</i> [<i>CommonParameters</i>]

Key
   -Off
       Turn strict mode off.
       This parameter also turns off "<a href="set-psdebug.html">Set-PSDebug</a> -Strict".

    -Version <i>Version</i>
       The conditions that cause an error in strict mode. (Required)

       valid values:

        1.0        Prohibit references to uninitialized variables,
                   except for uninitialized variables in strings.

        2.0        Prohibit references to uninitialized variables (including uninitialized variables in strings).
                   Prohibit references to non-existent properties of an object.
                   Prohibit function calls that use the syntax for calling methods.
                   Prohibit a variable without a name (${}).
        
        Latest     Select the latest (most strict) version available.
                   Use this value to assure that scripts use the strictest
                   available version, even when new versions are added to PowerShell.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>With strictmode set to 2.0 calling a <a href="syntax-functions.html">function</a> with <span class="code">myfunct(2,4)</span> instead of the correct <span class="code">myfunct 2 4</span> will throw an error "<i>The function or command was called like a method. Parameters should be separated by spaces</i>"</p>
<p><b>Examples</b></p>
<p>Turn strict mode on and set it to version 1.0:</p>
<p><span class="code">PS C:\&gt; set-strictmode -version 1.0<br>
<br>
C:\PS&gt; $a -gt 5<br>
False<br>
The variable $a cannot be retrieved because it has not been set yet.<br>
At line:1 char:3</span></p>
<p>  Turn off strictmode (this is the default):</p>
<p class="code">PS C:\&gt; set-strictmode -off</p>
<p class="quote"><i>“You are already of consequence in the world if you are known as a man of strict integrity” ~ Grenville Kleiser</i></p>
<p><b>Related:</b></p>
<p> <a href="set-psdebug.html">Set-PSdebug</a> - Turn script debugging on or off<br>
Equivalent bash command: <a href="../bash/cd.html">cd</a> - Change Directory</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-strictmode.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

