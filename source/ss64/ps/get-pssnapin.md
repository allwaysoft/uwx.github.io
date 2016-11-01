---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PSSnapin</h1> 
<p>List PowerShell snap-ins on this computer.</p>
<pre>Syntax
      Get-PSSnapin [[-name] <i>string</i>[]] [-registered] [<i>CommonParameters</i>]

Key
   -name
       The PowerShell snap-in(s). Wildcards are permitted.
        
   -registered 
       Get only the PowerShell snap-ins that have been registered on 
       the system. The snap-ins that are installed with Windows PowerShell do 
       not appear in this list.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-PSSnapin:<span class="code"> <b>gsnp</b></span></p>
<p>PowerShell contains a  default  set of snap-ins containing the built-in providers and cmdlets. <br>
<br>
In PowerShell 1.0 these default Snap-Ins are:<br>
Microsoft.PowerShell.Core = components of PowerShell.<br>
Microsoft.PowerShell.Host = Start-Transcript, Stop-Transcript etc, 
managing PowerShell console host.<br>
Microsoft.PowerShell.Management = management cmdlets used to manage
Windows components.<br>
Microsoft.PowerShell.Security = cmdlets to manage Windows PowerShell
security.<br>
Microsoft.PowerShell.Utility = utility Cmdlets used to manipulate data.<br>
<br>
PowerShell 2.0 adds to the above: <br>
Microsoft.PowerShell.Diagnostics = Eventing and Performance Counter cmdlets.<br>
Microsoft.WSMan.Management = Get-WSManInstance, Set-WSManInstance etc for WSMan operations.</p>
<p>Installing a Snap-In requires Administrator rights.</p>
<p>Beginning in  PowerShell 2.0 <i>Modules</i> were introduced and they almost entirely replace Snap-Ins. <br>
Snap-Ins are still available and fully supported. Snap-Ins have to be installed, modules can be simply copied and then made available with <a href="import-module.html">Import-Module</a></p>
<p>Equivalent commands for Snap-Ins and Modules are shown below: </p>
<blockquote>
<p><span class="code">Get-PSSnapIn -registered<br>
Add-PSSnapIn <i>name</i><br>
Get-Command -pssnapin <i>name</i></span></p>
<p class="code">Get-Module -ListAvailable<br>
Import-Module <i>name</i><br>
Get-Command -module <i>name</i></p>
</blockquote>
<p><b>Examples</b></p>
<p>Get the Windows PowerShell snap-ins that are currently loaded:</p>
<pre>PS C:&gt; get-PSSnapIn</pre>
<p>Gets the PowerShell snap-ins  registered on the computer:</p>
<pre>PS C:&gt; get-PSSnapIn * -registered</pre>
<p class="quote"><i>"A  man's got to know his limitations" - Harry Callahan (Magnum Force)</i></p>
<p><b>Related:</b></p>
<p><a href="add-pssnapin.html">Add-PSSnapIn</a> - Add snap-ins to the console<br>
<a href="get-module.html">Get-Module</a> - Get the modules imported to the session<br>
<a href="remove-pssnapin.html">Remove-PSSnapin</a> - Remove PowerShell snap-ins from the console<br>
<a href="export-console.html">Export-Console</a> - Export console configuration to a file</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-pssnapin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

