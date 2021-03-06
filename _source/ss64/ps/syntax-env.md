---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Environment Variables</h1> 
<p>Windows environment variables are visible as a PS drive called <span class="code">Env:</span></p>
<p>To list all the environment variables use:<span class="code"> Get-Childitem env:</span> (or just <span class="code">dir env:</span>)</p>
<p> Each environment variable is an object that can be retrieved with <a href="get-childitem.html">Get-Childitem</a> (or Get-Item) and enumerated with <a href="get-member.html">Get-Member </a></p>
<h2>Display  Environment Variables</h2>
<blockquote>
<p>Display the value of the COMPUTERNAME environment variable: </p>
<p class="code">Get-Childitem env:computername </p>
<p>Display the values of all environment variables: </p>
<p class="code">Get-Childitem env:</p>
<p class="code">gci env: | sort name</p>
<p>Enumerate all the environment variables: </p>
<p class="code">get-childitem -path env:* | get-member </p>
<p>This is easier if you first set-location (cd) to the Env: Drive </p>
<p class="code">cd env:</p>
<p>Then to display a variable: <span class="code">get-childitem computername</span></p>
<p> Returning a string value with<span class="code"> $env:</span><br>
PowerShell  can also address environment variables using the syntax <span class="code">$env:<i>variable-name</i></span> this had the advantage of returning a sytem.string rather than the DictionaryEntry object returned by get-item or gci.</p>
<p><span class="code">$env:computername</span></p>
<p class="code">$Computer = <b>$env:</b>computername<br>
$AppDataFolder = "<b>$env:</b>appdata"<br>
"The application data folder on computer $Computer is $AppDataFolder"</p>
<p>Similarly:</p>
<p><span class="code">$windows_path = $env:Path<br>
$windows_path -split ';'<br>
<br>
$powershell_path = $env:PSModulePath</span><br>
(PSModulePath lists all the paths that PowerShell searches for modules and includes in its module auto-loading.)</p>
</blockquote>
<h2>Set   Environment Variables</h2>
<blockquote>
<p>In an expression use this syntax: <span class="code">$env:<i>VariableName</i> = '<i>new-value</i>'</span></p>
<p> For example, to append "finance" to the value of the TEAMS environment variable:</p>
<p class="code"> $env:TEAMS = $env:TEAMS + "finance"</p>
<p> You can also change  environment variables with <a href="set-item.html">Set-Item</a>, <a href="remove-item.html">Remove-Item</a>, and <a href="copy-item.html">Copy-Item</a>.</p>
<p class="code">Set-Item -path env:TEAMS -value ($env:TEAMS + 'finance') </p>
<p>Note the use of  parentheses.</p>
<p>When you change environment variables, the change affects <b>only the current session</b>, much like using the SET command in Windows. To make the changes permanent, you can change them in the registry or with a utility like <a href="../nt/setx.html">SETX</a> or with a <a href="http://powershell.com/cs/blogs/tips/archive/2014/02/07/setting-and-deleting-environment-variables.aspx">.Net function</a>. You must also have permission to change the values. Permanent changes will only affect future sessions.</p>
<p>Add C:\Batch to the current <a href="../nt/path.html">PATH</a> (for the current session only)</p>
<p class="code">$env:path <a href="syntax-variables.html">+=</a>';c:\Batch'</p>
</blockquote>
<h2>Delete   Environment Variables</h2>
<blockquote>
<p>Setting a variable = an empty string will remove it completely:<br>
<br>
<span class="code">$env:<i>VariableName</i> = ''</span></p>
<p><br>
<b>SET command </b> (PowerShell function)</p>
<p>Here is a <a href="syntax-functions.html">function</a> to quickly list and set environment variables, like the Windows CMD <a href="../nt/set.html">SET</a> command (by <a href="http://weblogs.asp.net/whaggard/archive/2007/02/08/powershell-version-of-cmd-set.aspx">Wes Haggard</a>) </p>
<pre> # remove the SET alias (normally used for set-variable)
 if (test-path alias:set) { remove-item alias:set &gt; $null }
<b> function</b> set
<b> {</b>
  [string]$var = $args
  if ($var -eq "")
    {get-childitem env: | sort-object name}
   else
    {
    if ($var <a href="syntax-regex.html">-match</a> "^(\S*?)\s*=\s*(.*)$")
    {set-item -force -path "env:$($matches[1])" -value $matches[2];}
    else
    {write-error "ERROR Usage: VAR=VALUE"}
   } 
<b> }</b>

PS C:\&gt; Set testing=abc</pre>
</blockquote>
<h2>PowerShell Providers</h2>
<blockquote>
<p>In addition to environment variables,  PowerShell <i>providers</i> also provide access to other data and components in a similar way - resembling a file system drive. This allows you to access many different types of data in a consistent way.</p>
<p>Built-in Providers</p>
<blockquote>
<p>Alias - Windows PowerShell aliases {<span class="code">Alias</span>}<br>
Certificate - X509 certificates for digital signatures {<span class="code">cert</span>}<br>
Environment - Windows environment variables {<span class="code">Env</span>}<br>
FileSystem - File system drives, directories and files {<span class="code">filesystem</span>} <br>
Function - Windows PowerShell functions {<span class="code">Function</span>}<br>
Registry - Windows registry {<span class="code">HKLM, HKCU</span>}<br>
Variable - Windows PowerShell variables {<span class="code">Variable</span>}</p>
</blockquote>
<p> In PowerShell a fully qualified path name takes this form:</p>
<p class="code">filesystem::c:\windows\system32\shell.dll</p>
<p>Additional providers may also be created and installed - <a href="get-psprovider.html">Get-PsProvider</a> will list them all.<br>
Enumerate the properties of a provider with Get-psdrive:<span class="code"> Get-psdrive Function | format-list *</span></p>
<p>e.g. to list all certificates use: <span class="code">Get-Childitem cert:</span> </p>
<p class="code">cd cert:<br>
gci 
</p>
</blockquote>
<p class="quote"><i>“Most variables can show either an upward trend or a downward trend, depending on the base year chosen” ~ Thomas Sowell</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-automatic-variables.html">Automatic variables</a> -  Variables  created and maintained by  PowerShell $_, $Args, $Error, $Home etc<br>
<a href="syntax-variables.html">Variables and Operators</a> - Create, add, subtract, divide.<br>
<a href="get-psdrive.html">Get-PSDrive</a> - Get drive information (DriveInfo)<b><br>
</b>class: <span class="code">System.Collections.DictionaryEntry<br>
[system.environment]::Is64BitOperatingSystem </span>(PowerShell 3.0)<span class="code"><br>
[system.environment]::Is64BitProcess</span> (PowerShell 3.0) </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-env.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

