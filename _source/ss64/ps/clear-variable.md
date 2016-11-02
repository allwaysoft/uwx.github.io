---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Clear-Variable</h1> 
<p>Remove the value from a variable. The value will become NULL (empty) but Clear-Variable will preserve the data-type of the object stored in the variable.</p>
<pre>Syntax
      Clear-Variable [-name] <i>string</i>[]
         [-include <i>string</i>[]] [-exclude <i>string</i>[] ]
            [-scope <i>string</i>] [-force] [-passThru] [-whatIf]
               [-confirm] [<i>CommonParameters</i>]
key
   -name <i>string</i>
       The name(s) of the variable to be cleared, required.
       Wildcards are permitted.

   -include <i>string</i>[]
       Clear only the specified items, wildcards allowed e.g. "ora*"

   -exclude <i>string</i>[]
       Omit the specified items, wildcards allowed e.g. "*ms*"

   -scope <i>string</i>
       The scope in which this alias is valid. 
       Valid values are "Global", "Local", or "Script", or a number relative
       to the current scope ( 0 through the number of scopes, where 0 is the
       current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scope<b>".</b>

   -force <i>SwitchParameter</i>
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions. 
       Even using -Force, Clear-Variable cannot clear CONSTANTS.
  
   -passThru 
       Pass the object created by Clear-Variable through the pipeline.
       (By default this switch is not set)

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
        
   -confirm
       Prompt for confirmation before executing the command.
 
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Clear-Variable: <span class="code"> <b>clv</b></span></p>
<p><b>Examples</b></p>
<p>Clear a local variable:</p>
<pre>PS C:\&gt; clear-variable -name ss64</pre>
<p>Clear a global variable:</p>
<pre>PS C:\&gt; clear-variable ss64 -global
</pre>
<p>Clearing a variable in a child scope (e.g. via the invoke operator: &amp;{....} ) will not clear the variables value in the parent scope.</p>
<p class="quote"><i>“It is not the strongest species that survives nor the most intelligent but rather the one that is most adaptive to change” ~ Charles Darwin</i></p>
<p><b>Related:</b><br>
  <br>
<a href="get-variable.html">Get-Variable</a> - Get a PowerShell variable<br>
<a href="new-variable.html">New-Variable</a> - Create a new variable<br>
<a href="remove-variable.html">Remove-Variable</a> - Remove a variable and its value<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable<br>
<a href="syntax-env.html">Environment Variables</a><br>
Equivalent bash commands: <a href="../bash/env.html">env</a> - Display, set, or remove environment variables </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clear-variable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

