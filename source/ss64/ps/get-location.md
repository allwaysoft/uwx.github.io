---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Location</h1> 
<p>Get and display the current location.</p>
<pre>Syntax
      Get-Location [-psDrive <i>string</i>[]] [-psProvider <i>string</i>[]]
         [-UseTransaction] [<i>CommonParameters</i>]

      Get-Location [-stack] [-stackName <i>string</i>[]]
         [-UseTransaction] [<i>CommonParameters</i>]

Key
   -psDrive
       Get the current location in the specified PowerShell drive. 

       For example, if you are in the Certificate: drive, find the current location in 
       the C: drive.

   -psProvider 
       Get the current location in the drive supported by the specified PowerShell provider. 
       For example, if you are in the C: drive, find the current location in
       the Registry via the PowerShell Registry provider.

       If the specified provider supports more than one drive, Get-Location will 
       returns the location on the most recently accessed drive.
        
   -stack
       Display locations in the default path stack
       To add paths to the default stack, use Push-Location.

   -stackName
       Display locations in the specified path stacks. <br>       To create path stacks, use Push-Location.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Location:<span class="code"> pwd, <b>gl</b></span></p>
<p>Get-Location  gets an object that represents the current directory, much like the pwd (print working directory) command. <br>
<br>
When you move between  PowerShell drives,  PowerShell will retain your location in each drive. Get-Location can be used to find your location in each drive.</p>
<p>PowerShell Location is <b>not</b> the same as the process Current Directory. This means that non PowerShell utilities such as <a href="../nt/robocopy.html">RoboCopy</a> will default to the old style Current Directory, which is held as a static <a href="syntax-env.html">environment</a> variable <span class="code">[environment]::CurrentDirectory</span></p>
<p>Read the System.Environment's static CurrentDirectory property:<br>
<span class="code">[environment]::CurrentDirectory</span></p>
<p>Set the System.Environment's static CurrentDirectory property:<br>
<span class="code">[environment]::CurrentDirectory = "C:\music\mp3"</span></p>
<p><b>Examples</b></p>
<p>Display the current working location:</p>
<p><span class="code">PS C:\&gt; get-location</span><br>
<br>Display the current directory for drive C: even when working in the registry:</p>
<p class="code">PS C:\&gt; set-location C:\Windows<br>
PS C:\&gt; set-location HKLM:\Software\Microsoft<br>
PS C:\&gt; get-location -psdrive c</p>
<p class="quote"><i>#Home! Home! sweet, sweet Home! There's no place like Home! # ~ John Howard Payne</i></p>
<p><b>Related:</b><br>
<br><a href="pop-location.html">Pop-Location</a> - Change the current working location to the last pushed onto the stack (popd) <br> 
<a href="push-location.html">Push-Location</a> - Push a location to the stack (pushd)<br>
<a href="set-location.html">Set-Location</a> - Set the current working location (cd) <br>
Equivalent bash command: <a href="../bash/pwd.html">pwd</a> - Print Working Directory</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-location.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

