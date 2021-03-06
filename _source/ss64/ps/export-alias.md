---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-Alias</h1> 
<p>Export information about currently-defined aliases to a file.</p>
<pre>Syntax
      Export-Alias [-path] <i>string</i> [[-name] <i>string</i>[]] [-passThru]
         [-as {<u>Csv</u> | Script}]  [-append]  [-description <i>string</i>]
            [-scope <i>string</i>] [-force] [-noClobber]
               [-whatIf] [-confirm] [CommonParameters]

Key
   -path <i>string</i>
       The path to the file where the alias information will be stored.
       Wildcards are permitted, but the resulting path value must resolve to a <br>       single file name. This parameter is required.

   -name <i>string</i>
       The name(s) of the aliases to export.
       Separate multiple names with commas, (default=all aliases)
       By default, Export-Alias exports all aliases in the session or scope.
       
   -passThru 
       Pass the object created by this cmdlet along the pipeline.
        
   -as <i>ExportAliasFormat</i>
       Format output as comma-separated (<u>CSV</u>) or (Script).
       Script will create a Set-Alias command for each exported alias. If the
       output file is named with a .ps1 filename extension, it can be run
       as a script to add the aliases to any session.

   -append
       Append output to the specified file, rather than overwrite.
        
   -description <i>string</i>
       Add a description to the exported file. The description appears
       at the top of the file, following the header information. It is
       preceded by a # symbol.
        
   -scope <i>string</i>
       Either a named scope: "global", "local", or "script"; or a number
       to indicate the scope level. Scope = 0 = current scope
       Increasing the scope value by 1 will increate the scope to include the
       parent scope of the current scope. 
        
   -noClobber
       Do not overwrite an existing file, -Append will take precendence over -NoClobber.
        
   -force
       Override the read-only attribute on the output file.
       By default, Export-Alias will overwrite files without warning, unless the
       read-only or hidden attribute is set or -NoClobber is used.
       The -NoClobber parameter takes precedence over -Force when both are used in a command.<br>        <br>       The Force parameter cannot force Export-Alias to overwrite files with the hidden attribute.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
       
   -confirm
       Prompt for confirmation before executing the command.
 
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
Standard <a href="get-alias.html">Aliases</a> for Export-Alias:<span class="code"> <b>epal</b></span></p>
<p>Header information output by Export-Alias, each is preceded by the # comment symbol: <br>
Alias File, Exported by, Date/Time and Machine. </p>
<p>The <span class="code">-as Script</span> output is in the format  of a <a href="set-alias.html">set-alias</a> command.</p>
<p><b>Examples</b></p>
<p>Export alias information to alias.txt formatted as a series of set-alias commands:</p>
<p><span class="code">PS C:&gt; export-alias -path alias.txt -as script</span></p>
<p>Append the aliases in the current session to  Alias.csv, use -Force to append to any existing Alias.csv file, even if it has the read-only attribute set:</p>
<p><span class="code">PS C:&gt; export-alias -path alias.csv -append -description "Appended Aliases" -force</span></p>
<p class="quote"><i>"Be the change you want to see in the world" ~ Mohandas Gandhi</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="import-alias.html">import-alias</a> - Import an alias list from a file<br>    
<a href="get-alias.html">get-alias</a> - Return alias names for Cmdlets<br>
<a href="new-alias.html">new-alias</a> - Create a new Cmdlet-alias pairing<br> 
<a href="set-alias.html">set-alias</a> - Map an alias to a Cmdlet<br>
Equivalent bash commands: <a href="../bash/useradd.html">useradd</a> - Create new user accounts</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-alias.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

