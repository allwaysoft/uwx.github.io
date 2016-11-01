---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Import-Alias</h1> 
<p>Import an alias list from a file.</p>
<pre>Syntax
      Import-Alias [-path] <i>string</i> [-passThru] [-scope <i>string</i>]
         [-force] [-whatIf] [-confirm] [CommonParameters]

Key
   -Path <i>path</i>
        The path to the item {may be piped}
        Wildcards are allowed but they must resolve to a single name.

   -passThru 
        Pass the object created by Import-Alias through the pipeline.

   -scope <i>string</i>
       The scope to apply to the imported aliases.
       Valid values are "Global", "Local", or "Script", or a number relative
       to the current scope ( 0 through the number of scopes, where 0 is the
       current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scope<b>".</b>

   -force 
       Allows importing/overwriting an alias that is already defined and has
       the read-only option set. For currently-defined aliases see:
         <a href="get-alias.html">get-alias</a> | select-object name,Options

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Import-Alias:<span class="code"> <b>ipal</b></span></p>
<p><b>Examples</b></p>
<p>Import alias info from SS64.txt:</p>
<p><span class="code">PS C:\&gt; import-alias SS64.txt</span></p>
<p class="quote"><i>"What's in a name?  That which we call a rose, by any other
name would smell as sweet" ~ Shakespeare </i></p>
<p><b>Related:</b></p>
<p><a href="export-alias.html">export-alias</a> epal Export an alias list to a file<br>
<a href="get-alias.html">get-alias</a> - Return alias names for Cmdlets<br>
<a href="new-alias.html">new-alias</a> - Create a new Cmdlet-alias pairing<br>
<a href="set-alias.html">set-alias</a> - Map an alias to a Cmdlet</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="import-alias.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

