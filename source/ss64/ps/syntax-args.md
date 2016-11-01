---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> Parameters</h1> 
<p><b>Script Parameters / Arguments</b> (for scripts, <a href="syntax-functions.html">functions</a> and <a href="syntax-scriptblock.html">script blocks</a>) </p>
<p>Pass  arguments to a script or cmdlet by separating them with spaces:</p>
<p class="code">PS C:\&gt; Get-ChildItem -Path $env:windir -Filter *.dll -Recurse </p>
<p>This can be made a little more readable by breaking up long lines with PowerShell’s <a href="syntax-esc.html">escape</a> character: <br>
<span class="code">PS C:\&gt; Get-ChildItem `<br>
&nbsp;&nbsp;-Path   $env:windir `<br>
&nbsp;&nbsp;-Filter *.dll `<br>
&nbsp;&nbsp;-Recurse</span></p>
<p>To pass multiple arguments to a script you can <a href="syntax-hash-tables.html#splat">splat</a> them:</p>
<p class="code">$myargs = @{<br>
&nbsp;&nbsp;Path = "$env:windir"<br>
&nbsp;&nbsp;filter = '*.dll<br>
&nbsp;&nbsp;Recurse = $true<br>
}<br>
<span class="code">Get-ChildItem @myargs</span></p>
<p><span class="code"></span> The above will be expanded to: <span class="code">Get-ChildItem -Path $env:windir -Filter *.dll -Recurse</span></p>
<p>Within a script  or function you can refer to unnamed arguments using the <span class="code">$args</span> array, for example passing all the arguments through to a cmdlet. You can also refer to specific arguments by their position:</p>
<p><span class="code">"First argument is " + $Args[0]"<br>
"Second argument is " + $Args[1]"</span></p>
<h2>Param</h2>
<blockquote>
<p>To define arguments by name, use a <span class="code">param</span> statement, which is simply a comma separated list of variables optionally with default values and data types:</p>
<pre class="code">param (
    [string]$price = 100, 
    [string]$ComputerName = $env:computername,    
    [string]$username = $(throw "-username is required."),
    [string]$password = $( <a href="read-host.html">Read-Host</a> -asSecureString "Input password" )
    [<b>switch</b>]$SaveData = $false
)</pre>
<p class="code">write-output "First argument is $price"<br>
write-output "Second argument is $ComputerName"<br>
write-output "The True/False switch argument is $SaveData"</p>
<p>Calling this script, and setting the switch parameter -SaveData to $TRUE:<br>
<span class="code">.\demo.ps1 -ComputerName "\\server64" -SaveData</span></p>
<p> or   setting -SaveData to $FALSE<span class="code">:</span><br>
<span class="code"> .\demo.ps1 -ComputerName "\\server64" -SaveData<b>:$false</b></span></p>
</blockquote>
<h2>Parameter Attributes</h2>
<blockquote>
<p>The <span class="code">params</span> statement block can also optionally define <span class="code">parameter</span> attributes:</p>
<pre>[Parameter(<b>Mandatory</b> = $true, <b>ValueFromPipeline</b> = $true, <b>ValueFromPipelineByPropertyName</b> = $true)] </pre>
<p>These  affect the function parameters as follows:</p>
<blockquote>
<p><span class="code">Mandatory</span> - Whether the parameter is mandatory or optional (the default)</p>
<p> <span class="code">ValueFromPipeline</span> - Accept values via the pipeline, of the same type expected by the parameter or that can be converted to the type that the parameter is expecting.</p>
<p> <span class="code">ValueFromPipelineByPropertyName</span> - Accept values via the pipeline of the same type expected by the parameter and which also must have the same name as the parameter accepting pipeline input.</p>
</blockquote>
</blockquote>
<h2>Defaults in PowerShell 3.0 and above</h2>
<blockquote>
<p>In PowerShell 3.0 if an arguments default value is omitted, there is an implied default value of <span class="code">$true</span> you can use this to shorten both params and parameter attributes,  (n.b. leaving out the<span class="code"> = $true</span> in this way will prevent the script from running in PowerShell 1.0 or 2.0)</p>
<pre>Param (
   [Parameter(ValueFromPipelineByPropertyName)]
   [string] $DemoParamater
)</pre>
</blockquote>
<h2>Cmdlet Parameters</h2>
<blockquote>
<p>Almost every PowerShell cmdlet can accept one or more optional parameters which can be supplied on the command line in the form <span class="code"><i>-Parameter_Name Parameter_Value</i></span> </p>
<p>The name of the parameter is always preceded by a hyphen (-)<br>
<br>
The <span class="code">Parameter_value</span> often needs to be provided in a specific data type (e.g. string or integer) <br>
To find these details use <span class="code"><a href="get-help.html">Get-Help</a> -detailed cmdletName</span> </p>
<p>In some cases, the <span class="code">Parameter_Name</span> is implied and does not need to be explicitly included.</p>
<p>In syntax descriptions: </p>
<pre> [-Param] -- is optional 
  -Param  -- is required</pre>
<p>If you exclude the Parameter Names you must ensure that the Parameter Values are listed in the correct order (assuming more than one value is being passed .)</p>
<p>Parameter Names will be ignored if contained in quotation marks.</p>
<p> Multiple values (for the same parameter) can be separated with commas.</p>
</blockquote>
<h2>Parameters for external commands</h2>
<blockquote>
<p>When calling a non-PowerShell command or <a href="../nt/index.html">CMD utility</a> then the parameters won't follow any PowerShell conventions,</p>
<p>Generally any arguments to external commands should be surrounded in quotes if needed 
due to spaces/long filenames (just like the CMD shell) or if any part of the command uses characters that have a special meaning to PowerShell such as brackets ( ) or { }  s</p>
<p> See the <a href="call.html">&amp; CALL operator page</a> for more ways to execute a command, script or function. </p>
</blockquote>
<h2>CmdletBinding</h2>
<blockquote>
<p>An <a href="syntax-functions.html">Advanced Function</a> is  one that contains either a <span class="code">[cmdletbinding()]</span> attribute or the <span class="code">Parameter</span> attribute, or both.</p>
<p>cmdletbinding adds several capabilities such as additional parameter checking, and the ability to easily use <a href="write-verbose.html">Write-Verbose</a>.<br>
A function with cmdletbinding  will throw an error if unhandled parameter values appear on the command line.</p>
</blockquote>
<p class="quote"><i>“Slow down and enjoy life. It's not only the scenery you miss by going too fast, you also miss the sense of where you are going and why” - Eddie Cantor</i></p>
<p><b>Related:</b></p>
<p>help about_Functions_Advanced_Parameters<br>
<a href="call.html">&amp; (call)</a> - Run a command, script or function<br>
<a href="syntax-pipeline.html">Pipelines</a> - Pass objects down the pipeline.<br>
<a href="syntax-wildcards.html">Wildcards</a> - Match multiple items.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-args.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

