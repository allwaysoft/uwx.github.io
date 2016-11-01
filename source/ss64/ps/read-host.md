---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Read-Host</h1> 
<p>Read a line of input from the console. Prompt the user for input. </p>
<pre>Syntax
      Read-Host [[-prompt] <i>Object</i>] [-asSecureString] [<i>CommonParameters</i>]

Key
   -prompt <i>Object</i>
       The string that will become the prompt object. If the prompt 
       string includes spaces, it must be surrounded by quotes.
        
   -asSecureString 
       If set to true, the input will be echoed as star characters (*). 
       The output will then be a Securestring object.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Password data should never be stored as a regular string, as it would be visible in memory.<br>
A SecureString is a type of string that PowerShell
(and .Net) keep encrypted in memory.</p>
<p>An alternative method is to call some Visual Basic that will popup a graphical <a href="https://gallery.technet.microsoft.com/scriptcenter/4b2eedbb-d1b8-43e1-b042-1b38e36d3ab9">input box</a>:</p>
<pre>$input = $(
      Add-Type -AssemblyName Microsoft.VisualBasic
      [Microsoft.VisualBasic.Interaction]::InputBox('Enter your city','Titlebar Text', 'Default new york')
     )
$input</pre>
<p><b>Examples</b></p>
<p>Present the string "Please enter your name:" as a prompt. When a value is entered and the Enter key is pressed, that value is stored in the $myname variable:</p>
<p><span class="code">PS C:\&gt; $myname = read-host "Please enter your name:"</span><br>
  <br>
  Presents the string "Enter a Password:" as a prompt. When a password is entered and the Enter key is pressed, the value is   stored as a SecureString:</p>
<p class="code">PS C:\&gt; $secure_password = read-host "Enter a Password:" -assecurestring</p>
<p> Now convert the Secure password into a string (that is still encrypted) but can be easily saved:</p>
<p class="code">$SecureStringAsPlainText = $secure_password | <a href="convertfrom-securestring.html">ConvertFrom-SecureString</a></p>
<p>Convert a 'SecureString saved as Text' back into a SecureString:</p>
<p class="code"> $secure_password = $SecureStringAsPlainText  | <a href="convertto-securestring.html">ConvertTo-SecureString</a></p>
<p>Extracting a plain text password from a SecureString is possible, but should rarely be required:
</p>
<p class="code"> $BSTR = `<br>
[System.Runtime.InteropServices.Marshal]::SecureStringToBSTR(<b>$secure_password</b>) $PlainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR) </p>
<p>A function to prompt for a user name (using '<a href="syntax-datatypes.html">[string]</a>'  guarantees the function will return a string even if '123' is entered): </p>
<p class="code">function getUsername {<br>
Param ([string]$name=(<b>Read-Host</b> "Enter a user name"))<br>
write-host "You entered $name"<br>
}</p>
<p class="quote"><i>“There is no off position on the genius switch” -  David Letterman</i></p>
<p><b>Related:</b></p>
<p>Clear-Host - Clear the screen<br>
<a href="convertfrom-securestring.html">ConvertFrom-SecureString</a> - Convert a secure string into an encrypted standard string.<br>
<a href="get-host.html">Get-Host</a> - Get host information.<br>
<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host.<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface.<br>
Equivalent bash command:<a href="../bash/read.html"> read</a> - Read a line from standard input.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="read-host.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
