---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Command</h1> 
<p>Get  basic information about  PowerShell commands: cmdlets, files and functions.</p>
<pre>Syntax
      Get-Command [<b>-Noun</b> <i>String</i>[] ]  [<b>-Verb</b> <i>String</i>[] ] [[-ArgumentList] <i>Object</i>[] ]
          [-All] [-ListImported] [-Module <i>String</i>[] ] 
             [-ParameterName <i>String</i>[] ] [-ParameterType <i>PSTypeName</i>[] ] 
                [-Syntax] [-TotalCount <i>Int32</i> ] [ <i>CommonParameters</i>]

      Get-Command [[<b>-Name</b>] <i>String</i>[] ]  [-CommandType <i>CommandTypes</i> ] [[-ArgumentList] <i>Object</i>[] ]
          [-All] [-ListImported] [-Module <i>String</i>[] ]
             [-ParameterName <i>String</i>[] ] [-ParameterType <i>PSTypeName</i>[] ]
                [-Syntax] [-TotalCount <i>Int32</i> ] [ <i>CommonParameters</i>]

key
   -All
       Get all commands, including commands of the same type that have the same name.
       By default, only returns the command that would run if you typed the command name.
       PowerShell 3.0+  (In PowerShell 2.0, Get-Command gets all commands by default.)

   -name
       Get information for cmdlets (or command elements) with this name.
       All or part of the name, wildcards are permitted.
        
   -verb
       Get information for cmdlet names that include the specified verb.
       String  "Get", "Set", "Remove" etc.  Wildcards are permitted and multiple
       verbs or verb patterns can be specified: "*et".
        
   -noun
       Get information for cmdlet names that include the specified noun.
       "process", "Service", "Variable" etc. Wildcards are permitted:"*item*"
        
   -commandType <i>CommandTypes</i>
       Get only specified type(s) of command objects:

             Alias              PowerShell Alias
             All                       
             Application        Non-PowerShell files in the PowerShell path.
             Cmdlet             PowerShell Cmdlet (default)
             ExternalScript     .ps1 script files in the <a href="../nt/path.html">Path</a> (<a href="syntax-env.html">$env</a>:path).
             Filter             PowerShell functions.
             Functon            PowerShell functions.
             Script             Script blocks built into the runspace config.
             Workflow           Workflows.
       You can use -CommandType or its alias, -Type.
        
   -totalCount <i>int32</i>
       Limit the number of items retrieved.

   -ListImported
       Get only commands in the current session.
       Beginning in PowerShell 3.0, by default, Get-Command gets all installed commands,
       including, but not limited to, the commands in the current session.
       In PowerShell 2.0, only commands in the current session are returned.

   -Module string[]
       Get the commands that came from the specified modules or snap-ins.
       Enter the names of modules or snap-ins, or enter snap-in/module object name(s).

       You can use -Module, or its alias, -PSSnapin.

       This parameter takes string values, or a PSModuleInfo or PSSnapinInfo object, such as the 
       objects returned by Get-Module, Get-PSSnapin, and Import-PSSession.

   -ParameterName <i>String</i>
       Get commands in the session that have the specified parameters.
       Enter parameter names and/or parameter aliases. Wildcard are supported.
       The -ParameterName and -ParameterType parameters search only commands in the current session.
       PowerShell 3.0+ 

   -ParameterType <i>PSTypeName</i>[]
       Get commands in the session that have parameters of the specified type.
       Enter the full name or partial name of a parameter type. Wildcards are supported.
       The ParameterName and ParameterType parameters search only commands in the current session.
       PowerShell 3.0+ 

   -syntax
       Describes the item:
       alias name, cmdlet syntax, function definition, filter definition,
       script path/filename.

   -argumentList
       Get information about a cmdlet when it is used with a specific argument,
       such as a file path or a registry key. e.g., "HKML\Software" or "cert:\my".
       This is useful because some cmdlet parameters are added dynamically.
        
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Command:<span class="code"> <b>gcm</b></span></p>
<p>Get-Command gets its data directly from the code of a cmdlet, function, script, or alias, unlike <a href="get-help.html">Get-Help</a>, which gets its information from help topic files.<br>
<br>
The <span class="code">-Module</span> parameter will find the commands added to the session by adding a PowerShell snap-in or importing a module.</p>
<p>To list commands with the same <span class="code">-name</span> in execution order, type the command name without wildcard characters.</p>
<p><b>Examples</b></p>
<p>Describe the 'Set' verbs:</p>
<p><span class="code">PS C:\&gt; get-command -verb set | format-list<br>
PS C:\&gt; get-command -verb set | format list *</span><br>
<br>
List all functions in the current session:</p>
<p><span class="code"> PS C:\&gt; get-command -CommandType function</span></p>
<p>Display cmdlets  in noun-based groups:</p>
<p class="code">PS C:\&gt; get-command | sort-object noun | format-table -group noun</p>
<p>Display all <a href="ad.html">Active Directory cmdlets</a> available to PowerShell:</p>
<p class="code">PS C:\&gt; get-command -module ActiveDirectory -verb get<br>
PS C:\&gt; get-command -module ActiveDirectory -noun ADUser</p>
<p>Retrieve information about all the elements available to PowerShell (all files, functions, aliases and cmdlets):</p>
<p class="code">PS C:\&gt; get-command *</p>
<p>Describe the alias 'dir':</p>
<p class="code">PS C:\&gt; get-command dir | format-list</p>
<p class="quote"><i>Klinger: "Oh, you were built for command.  Those shoulders --
  broad enough for four stars.  That height--
commanders should be tall--to look down on his men"<br>
Corporal:  "Napoleon didn't do so bad" ~ Dialogue from M*A*S*H 1978 </i></p>
<p><b>Related:</b><br>
<br>
<a href="get-help.html">Get-Help</a> - Open the help file<br>
<a href="get-psdrive.html">Get-PSDrive</a> - Get drive information (DriveInfo)<br>
<a href="get-member.html">Get-Member</a> - Enumerate the properties of an object<br>
Equivalent bash command: <a href="../bash/man.html">man</a> - Display helpful information about commands.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

