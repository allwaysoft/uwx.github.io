---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Preference Variables</h1> 
<p>PowerShell preferences:</p>
<pre>    Variable                         Default Value     Options
    --------                         -------------     --------------------------------
    $ConfirmPreference               High              (none | low | medium | <u>high</u>)
    $DebugPreference                 SilentlyContinue  (<a href="write-debug.html">Write-Debug</a>) (stop | Inquire | continue | <u>SilentlyContinue</u>)
    $ErrorActionPreference           Continue          (<a href="write-error.html">Write-Error</a>) (stop | Inquire | <u>continue</u> | SilentlyContinue)
    $ErrorView                       NormalView        (<u>NormalView</u> | CategoryView)
    $FormatEnumerationLimit          4
    $LogCommandHealthEvent           False (not logged)
    $LogCommandLifecycleEvent        False (not logged)
    $LogEngineHealthEvent            True (logged)
    $LogEngineLifecycleEvent         True (logged)
    $LogProviderLifecycleEvent       True (logged)
    $LogProviderHealthEvent          True (logged)
    $MaximumAliasCount               4096     Max no. of <a href="new-alias.html">aliases</a> available to the session. Valid values: 1024-32768
    $MaximumDriveCount               4096     Max no. of drives available, excluding those provided by the OS.
    $MaximumErrorCount               256      Valid values: 256 - 32768
    $MaximumFunctionCount            4096     Max no. of <a href="syntax-functions.html">functions</a> available to the session.
    $MaximumHistoryCount             64       Max no. of entries saved in the command <a href="get-history.html">history</a>. Valid values: 1-32768
    $MaximumVariableCount            4096     Max no. of <a href="syntax-variables.html">variables</a> available to the session.
    $OFS                             Space " "  Output Field Separator (converting an array to string.)
    $OutputEncoding                  ASCIIEncoding object
                                     Valid values: Objects derived from an Encoding class, such as:
                                         ASCIIEncoding, SBCSCodePageEncoding, UTF7Encoding,
                                         UTF8Encoding, UTF32Encoding, and UnicodeEncoding.
    $ProgressPreference              Continue       (stop | Inquire | continue | SilentlyContinue)
    $PSEmailServer                   (None)
    $<span class="code">PSModuleAutoloading</span>             <a href="import-module.html">Import</a> installed modules automatically.
    $PSSessionApplicationName        WSMAN
    $PSSessionConfigurationName      http://schemas.microsoft.com/powershell/microsoft.powershell 
    $PSSessionOption                 (See below)
    $VerbosePreference               SilentlyContinue   (<a href="write-verbose.html">Write-Verbose</a>) (stop | Inquire | continue | <u>SilentlyContinue</u>)
    $WarningPreference               Continue           (<a href="write-warning.html">Write-Warning</a>) (stop | Inquire | <u>continue</u> | SilentlyContinue)
    $WhatIfPreference                0</pre>
<p><b>Examples</b></p>
<p>Display the value of the 
$ConfirmPreference variable.</p>
<p class="code"> PS C:\&gt; $ConfirmPreference<br>
High</p>
<p> Assign the value "Medium" to the 
$ConfirmPreference variable.</p>
<p class="code"> PS C:\&gt; $ConfirmPreference = "Medium"</p>
<p>Setting $OFS (the Output Field Separator) to display an array with different separators:</p>
<pre><span class="code">PS C:\&gt; </span>&amp;{ $a = 1,2,3; "$a"}
  1 2 3

<span class="code">PS C:\&gt; </span>&amp;{ $OFS="-"; $a = 1,2,3; "$a"}
  1-2-3</pre>
<p class="quote"><i>"Democracy cannot be static. Whatever is static is dead" ~ Eleanor
Roosevelt </i></p>
<p><b>Related:</b></p>
<p><a href="syntax-env.html">Variables</a> - Environment variables<br>
<a href="syntax-automatic-variables.html">Automatic variables</a> -  Variables  created and maintained by  PowerShell $_, $Args, $Error, $Home etc<br>
<a href="syntax-arrays.html">Array Variables</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-preference.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

