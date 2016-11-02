---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-ModuleMember</h1>
<p>Specifies the module members that are exported.</p>
<pre>Syntax
      Export-ModuleMember [[-Function] <i>String</i>[]] [-Alias <i>String</i>[]] [-Cmdlet <i>String</i>[]]
         [-Variable <i>String</i>[]] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Alias <i>String</i>[]
       The aliases that are to be exported from the script module file.
       Enter the alias names. Wildcards are permitted.
        
   -Cmdlet <i>String</i>[]
       The cmdlets that are to be exported from the script module file.
       Enter the cmdlet names. Wildcards are permitted.
        
       You cannot create cmdlets in a script module file, but you can import cmdlets from a binary module into a 
       script module and re-export them from the script module.
        
   -Function <i>String</i>[]
       The functions that are to be exported from the script module file.
       Enter the function names. Wildcards are permitted.
       You can also pipe function name strings to Export-ModuleMember.
        
   -Variable <i>String</i>[]
       Specifies the variables that are exported from the script module file. Enter the variable names (without a 
       dollar sign). Wildcards are permitted.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Export-ModuleMember  specifies the module members (such as cmdlets, functions, variables, and aliases)      that are exported from a script module (.psm1) file, or from a dynamic module created by using the New-Module      cmdlet. <br>
This cmdlet can be used only in a script module file or a dynamic module.</p>
<p>If a script module does not include an Export-ModuleMember command, the functions in the script module are      exported, but the variables and aliases are not. When a script module includes Export-ModuleMember commands, only      the members specified in the Export-ModuleMember commands are exported. You can also use Export-ModuleMember to      suppress or export members that the script module imports from other modules.          </p>
<p>An Export-ModuleMember command is optional, but it is a best practice. Even if the command confirms the default      values, it demonstrates the intention of the module author.</p>
<p><b>Examples</b></p>
<p>Export the aliases defined in the script module, along with the functions defined in the script      module:</p>
<p><span class="code">PS C:\&gt; Export-ModuleMember -function * -alias *</span><br>
<br>
Export two aliases and two functions defined in the script module:</p>
<pre>PS C:\&gt; Export-ModuleMember -function Get-SS64, New-SS64 -alias gss, nss
</pre>
<p>Export only the $ss64 variable from the script module:</p>
<pre>PS C:\&gt; Export-ModuleMember -variable ss64</pre>
<p>Export no members defined in the script module.          This does not hide the members. Users can read and      copy module members or use the call operator (&amp;) to invoke module members that are not exported:</p>
<pre>PS C:\&gt; Export-ModuleMember</pre>
<p class="quote"><i>“If we do not find anything pleasant, at least we shall find something new” ~ </i><i>Voltaire</i></p>
<p><b>Related:</b></p>
<p><a href="import-module.html">Import-Module</a> - Add a module to the session <br>
<a href="new-module.html">New-Module</a> - Create a new dynamic module (only in memory) <br>
<a href="remove-module.html">Remove-Module</a> - Remove a module from the current session</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-modulemember.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

