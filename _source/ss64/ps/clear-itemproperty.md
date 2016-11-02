---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Clear-ItemProperty</h1>
<p>Delete the value of a property (e.g. a registry value) but not the property itself.</p>
<pre>Syntax
      Clear-ItemProperty [[-path]| [-literalPath] ] [-name] <i>string</i>[]
         [-include <i>string</i>[]] [-exclude <i>string</i>[] ]
            [-filter <i>string</i>] [-force] [-credential <i>PSCredential</i>] [-passThru] [-whatIf]
               [-confirm] [-UseTransaction] [<i>CommonParameters</i>]

Key
    -path <i>string</i>[]
        The paths to the items from which content is deleted.
        Wildcards are permitted.

    -literalPath <i>string</i>[]
        Like Path above, only the value is used exactly as typed.
        No characters are interpreted as wildcards. If the path includes any
        escape characters then enclose the path in single quotation marks.

    -name <i>string</i>
        The name of the property to be cleared, wildcards are not permitted.

    -include <i>string</i>[]
        Clear only the specified items from the Path. e.g. "ora*"
        
    -exclude <i>string</i>[]
        Omits the specified items from the Path e.g. "*SS64*"
        
    -filter <i>string</i>
        A filter in the provider's format or language. 
        The exact syntax of the filter (wildcard support etc) depends on the provider.
        Filters are more efficient than -include/-exclude, because the provider
        applies the filter when retrieving the objects, rather than having 
        PowerShell filter the objects after they are retrieved.
        
    -force <i>SwitchParameter</i>
        Override restrictions that prevent the command from succeeding, apart
        from security settings. e.g. Force will create file path directories 
        or override a files read-only attribute, but will not change file permissions.
        
    -credential <i>PSCredential</i>
        Uses a <i>credential</i> to validate access to the file. Credential represents
        a user-name, such as "User01" or "Domain01\User01", or a PSCredential
        object, such as the one retrieved using <a href="get-credential.html">Get-Credential</a>.
        This parameter appears, but it is not yet supported in any PowerShell core 
        cmdlets or providers
  
    -passThru 
        Pass the object created by Clear-ItemProperty through the pipeline.
        (By default this switch is not set)

    -whatIf
        Describe what would happen if you executed the command without actually
        executing the command.
        
    -confirm
        Prompt for confirmation before executing the command.
 
   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Clear-ItemProperty: <span class="code"> <b>clp</b></span></p>
<p><b>Examples</b></p>
<p>Delete  data in the 'Spud' registry value under 'DemoKey' in HKEY_LOCAL_MACHINE</p>
<pre>C:\PS&gt; clear-itemproperty -path HKLM:\Software\SS64\DemoKey -name Spud</pre>
<p class="quote"><i>“Destroying rainforest for economic gain is like burning a renaissance painting to cook a meal” ~ E. O. Wilson</i></p>
<p><b>Related:</b></p>
<p><a href="copy-itemproperty.html">Copy-ItemProperty</a> - Copy a property along with its value<br>
<a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="move-itemproperty.html">Move-ItemProperty</a> - Move a property from one location to another<br>
<a href="new-itemproperty.html">New-ItemProperty</a> - Set a new property of an item at a location<br>
<a href="remove-itemproperty.html">Remove-ItemProperty</a> - Delete the property and its value from an item<br>
<a href="rename-itemproperty.html">Rename-ItemProperty</a> - Rename a property of an item<br>
<a href="set-itemproperty.html">Set-ItemProperty</a> - Set the value of a property<br>
<a href="unblock-file.html">Unblock-File</a> - Unblock files downloaded from the Internet<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clear-itemproperty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

