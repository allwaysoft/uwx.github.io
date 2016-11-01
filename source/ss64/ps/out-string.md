---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Out-String</h1> 
<p>Send objects to the host as a series of strings.</p>
<pre>Syntax
      Out-String [-inputObject <i>psobject</i>] [-width <i>int</i>]
            [-stream] [<i>CommonParameters</i>]
Key
   -inputObject <i>psobject</i>
       The object to be written to file. {may be piped}
       A command, expression or variabale that contains the objects.

   -width <i>int</i>
       The number of characters in each line of output. 
       Any additional characters are truncated, not wrapped.
       The default is determined by the host, for PowerShell.exe
       this is 80 (characters).
        
   -stream 
       Send the strings for each object separately. 
       By default, the strings for each object are accumulated
       and sent as a single string.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Out-String enables searching and manipulating string output as you would 
in traditional shells where object manipulation is less convenient than in PowerShell.</p>
<p>The final part of displaying PowerShell output is a hidden background call to an Output cmdlet, by default as the last part of the execution process PowerShell calls the default output cmdlet which is typically Out-Host.</p>
<h2>Base64</h2>
<blockquote>
<p> Converting to <a href="https://en.wikipedia.org/wiki/Base64">base64</a>, allows representing a unicode string as an <a href="../ascii.html">ASCII</a> compatible  string (for obfuscation or ease of export). 
There is no built in cmdlet for this but we can call the a .Net method <a href="https://msdn.microsoft.com/en-us/library/system.convert.tobase64string%28v=vs.110%29.aspx">ToBase64String</a>:</p>
<pre>$text = 'Hello World' 
$result = [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes($text), 'InsertLineBreaks')
$result

# To reverse the above:
$base64 = 'SABlAGwAbABvACAAVwBvAHIAbABkAA=='
$text = [Text.Encoding]::Unicode.GetString([Convert]::FromBase64String($base64))
$text</pre>
</blockquote>
<p><b>Examples</b></p>
<p>Send the content of Test1.txt to the console as a single string:</p>
<p><span class="code">PS C:\&gt; get-content C:\docs\test1.txt | out-string</span><br>
  <br>
  Get   the regional settings for the current user and convert the data to strings:
</p>
<p class="code">PS C:\&gt; $cult = get-culture | select-object *
    <br>
out-string -inputobject $cult -width 100</p>
<p>Display all aliases that include the phrase "Get-"</p>
<p class="code">PS C:\&gt; get-alias | out-string -stream | select-string "Get-"</p>
<p>Piping into   <span class="code">Select-String</span> demonstrates the difference between working with objects and working with strings. The <span class="code">-stream</span> parameter  sends each string individually, as without this <span class="code">Select-String</span> would  simply match and return the entire single string containing all of the aliases.</p>
<p class="quote"><i>#Brown paper packages tied up with strings, these are a few of my favorite things# ~ Oscar Hammerstein III</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="out-default.html">Out-Default</a> - Send output to default<br>
<a href="out-file.html">Out-File</a> - Send command output to a file <br>
<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host <br>
<a href="out-null.html">Out-Null</a> - Send output to null <br>
<a href="out-printer.html">Out-Printer</a> - Send the output to a printer <br>

<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
Equivalent bash command: <a href="../bash/syntax-redirection.html">redirection</a> - Redirection and Process Substitution</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="out-string.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

