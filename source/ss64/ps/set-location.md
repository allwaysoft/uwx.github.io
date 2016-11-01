---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-Location</h1> 
<p>Set the current PowerShell working location.</p>
<pre>Syntax
      Set-Location [[-path] <i>string</i>] [-passThru]
         [-UseTransaction] [<i>CommonParameters</i>]

      Set-Location [-literalPath] <i>string</i>] [-passThru]
         [-UseTransaction] [<i>CommonParameters</i>]

      Set-Location [-stackName <i>string</i>] [-passThru]
         [-UseTransaction] [<i>CommonParameters</i>]

Key
   -path <i>string</i>
       The path to a new working location.

   -literalPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.
       
   -stackName 
       The stack to which the location is being set.

   -passThru 
       Pass the object created by this cmdlet through the pipeline.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Set-Location:<span class="code"> cd, chdir, <b>sl</b></span></p>
<h2>Non-PowerShell utilities</h2>
<blockquote>
<p>PowerShell Location is <b>not</b> the same as the Current Directory, used by 
Non-PowerShell utilities such as <a href="../nt/robocopy.html">RoboCopy</a>.<br>
However Current Directory 
is available as a   static <a href="syntax-env.html">environment</a> variable:</p>
<p>Read the System.Environment's  CurrentDirectory property:<br>
<span class="code">[environment]::CurrentDirectory</span></p>
<p>Set the System.Environment's  CurrentDirectory property:<br>
<span class="code">[environment]::CurrentDirectory = "C:\music\mp3"</span></p>
<p>The CMD shell's working directory does not automatically  follow the current location of PowerShell for security reasons, older command-line applications may try  to load  certain DLLs from the current directory.
</p>
</blockquote>
<p><b>Examples</b></p>
<p>Set the current location to HKLM in the registry provider:</p>
<p class="code">PS C:\&gt; set-location HKLM:</p>
<p>  Set the current location to the <a href="syntax-env.html">environment variable</a> provider:</p>
<p class="code">PS C:\&gt; set-location env: -passthru</p>
<p>Set the current location to the C:\ drive in the FileSystem provider:</p>
<p class="code">PS C:\&gt; set-location C:</p>
<p class="quote"><i>“The three most important factors in buying a home are, location, location, location!”</i></p>
<p><b>Related:</b><br>
<br>
<a href="get-location.html">Get-Location</a> - Get and display the current location <a href="pop-location.html"><br>
Pop-Location</a> - Set the current working location (from the stack) <a href="push-location.html"><br>
Push-Location</a> - Push a location to the stack<br>
Equivalent bash command: <a href="../bash/cd.html">cd</a> - Change Directory</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-location.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

