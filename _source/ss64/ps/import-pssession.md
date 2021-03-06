---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Import-PSSession</h1> 
<p>Import commands from another session into the current session.</p>
<pre>Syntax
      Import-PSSession [-Session] <i>PSSession</i> 
         [[-CommandName] <i>string</i>[]] [[-FormatTypeName] <i>string</i>[]]
            [-AllowClobber] [-ArgumentList <i>Object</i>[]]
               [-CommandType {Alias | Function | Filter | Cmdlet | ExternalScript | Application | Script | All}]
                  [-Encoding <i>string</i>] [-Force] [-Module <i>string</i>[]]
                     [-Prefix <i>string</i>]  [<i>CommonParameters</i>]

Key
   -AllowClobber
       Import the specified commands, even if they have the same names as
       commands in the current session.

       If you import a command with the same name as a command in the current session,
       the imported command hides or replaces the original commands.
       For more information, see about_Command_Precedence. 

       By default Import-PSSession does not import commands that have the same names as commands
       in the current session. The default behavior is designed to prevent command name conflicts.

   -ArgumentList <i>Object</i>[]
       Import the variant of the command that results from using the specified arguments (parameter values). 
       For example, to import the variant of the Get-Item command in the certificate (Cert:) drive
       in the PSSession in $sess, type "import-pssession -session $sess -command get-item -argumentlist cert:".

    -CommandName <i>string</i>[]
       Import only the commands with the specified <i>string</i> names or name patterns.
       Wildcards are permitted.
       Use "-CommandName" or its alias, "-Name".

       By default, import-PSSession will import all commands from the PSSession except
       for commands that have the same names as commands in the current session.
       This prevents imported commands from hiding or replacing commands in the
       current session. To import all commands, even those that hide or replace other commands,
       use -AllowClobber 
       If you use -CommandName, the formatting files for the commands are not imported unless
       you use -FormatTypeName. Similarly, if you use -FormatTypeName, no commands are imported unless 
       you specify -CommandName.

    -CommandType <i>CommandTypes</i>
        Import only specific types of command objects. Use "-CommandType" or its alias, "-Type".

        Valid values are:
           Alias           All PowerShell aliases in the current session.
           All             All command types. It is the equivalent of "get-command *".
           Application     All files other than  PowerShell files in paths listed in the Path environment variable 
                           ($env:path), including .txt, .exe, and .dll files.
           Cmdlet          The cmdlets in the current session. "Cmdlet" is the default.
           ExternalScript  All .ps1 files in the path(s) listed in the Path environment variable ($env:path).
           Filter          All PowerShell functions.
           Function        All PowerShell functions.
           Script          Script blocks in the current session.

   -FormatTypeName <i>string</i>[]
       Import formatting instructions only for the specified Microsoft .NET Framework types.
       Enter the type names. Wildcards are permitted. 
       The value of this parameter must be the name of a type that is returned by a Get-FormatData
       command in the session from which the commands are being imported.

       To get all of the formatting data in the remote session, type *

       If the command does not include either -CommandName or -FormatTypeName, Import-PSSession 
       will import formatting instructions for all .NET Framework types returned by a
       Get-FormatData command in the remote session.

       If you use the FormatTypeName parameter, no commands are imported unless you use -CommandName.
       Similarly, if you use -CommandName, the formatting files for the commands are not imported unless 
       you also use -FormatTypeName.

   -Module <i>string</i>[]
       Import only the commands in the specified PowerShell snap-ins and modules.
       Enter the snap-in and module names. Wildcards are not permitted.
       For more information, see about_PSSnapins and Import-Module.

   -Prefix <i>string</i>
       Add the specified prefix to the nouns in the names of imported commands.

       Use this parameter to avoid name conflicts that might occur when different commands in the
       session have the same name. 
       For example, if you specify the prefix "Remote" and then import a Get-Date cmdlet, the cmdlet
       is known in the session as Get-RemoteDate and it is not confused with the original Get-Date cmdlet.

   -Session <i>PSSession</i>
       The PSSession from which the commands are imported.
       Enter a variable that contains a session object or a command that gets a session object,
       such as a Get-PSSession command. This parameter is required.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  Standard <a href="get-alias.html">Aliases</a> for Import-PSSession:<span class="code"> ipsn</span></p>
<p>Import-PSSession  imports commands (such as cmdlets, functions, and aliases) from a PSSession on a local 
or remote computer into the current session. You can import any command that <a href="get-command.html">Get-Command</a> can find in the PSSession.<br>
<br>
This is useful for importing commands from a customized shell, such as an Exchange Server shell, or from a session that includes PowerShell modules and snap-ins or other elements that are not in the current session.<br>
<br>
To import commands, first use <a href="new-pssession.html"> New-PSSession</a>  to create a PSSession. Then use  Import-PSSession 
to import the commands. By default, Import-PSSession imports all commands except those with the same name as a command in the current session. To import all the commands, use <span class="code">-AllowClobber</span>.<br>
<br>
Use imported commands  as you would use any command in the session. When you use an imported command, the imported part of the command runs implicitly in the session from which it was imported. However, the remote operations are handled entirely by  PowerShell. You need not even be aware of them, except that you must keep the connection to the other session (PSSession) open. If you close it, the imported commands are no longer available.<br>
<br>
Because imported commands might take longer to run than local commands, Import-PSSession adds an AsJob parameter to
every imported command. This parameter allows you to run the command as a  PowerShell background job. For more information, see about_Jobs.<br>
<br>
PowerShell will add all imported commands to a temporary module that exists only
in your session and returns an object that represents the module. To create a persistent module that you can use in future sessions, use <a href="export-pssession.html">Export-PSSession</a>.<br>
<br>
Import-PSSession  uses the implicit remoting feature of  PowerShell. When you import commands into
the current session, they run implicitly in the original session or in a similar session on the originating computer.</p>
<p><b>Examples</b></p>
<p>Import all commands from a PSSession on the Server64 computer into the current session, except for commands that have the same names as commands in the current session: </p>
<pre>PS C:&gt; $sesh = new-pssession -computername Server64<br>PS C:&gt; import-pssession -session $sesh</pre>
<p>Import New-Test and Get-Test  cmdlets from a PSSession on the Server64 computer and  Set-Test  from Server75 computer, then demonstrate piping an object from one (imported) cmdlet to another 
without error:</p>
<pre>PS C:&gt; $s1 = new-pssession -computername Server64
PS C:&gt; $s2 = new-pssession -computername Server75
PS C:&gt; import-pssession -session s1 -type cmdlet -name New-Test, Get-Test -FormatTypeName *
PS C:&gt; import-pssession -session s2 -type cmdlet -name Set-Test -FormatTypeName *
PS C:&gt; new-test Test1 | set-test -runtype full</pre>
<p>Run an imported command as a background job:<br> 
Because imported commands might take longer to run than local commands, Import-PSSession adds an AsJob parameter to<br>
every imported command. The AsJob parameter lets you run the command as a background job.</p>
<pre>PS C:&gt; $s = new-pssession -computername <span class="code">Server64</span>
PS C:&gt; import-pssession -session $s -commandname *-test* -formattypename *
PS C:&gt; $batch = new-test -name Batch -asjob
PS C:&gt; receive-job $batch</pre>
<p>Import the cmdlets and functions from a  PowerShell module on a remote computer in
to the current session:</p>
<p class="code">PS C:&gt; $s = new-pssession -comp Server64<br>
PS C:&gt;  invoke-command -session $s {import-module TestManagement}<br>
PS C:&gt;  import-pssession -session $s -module TestManagement</p>
<p> After creating a PSSession on <span class="code">Server64</span>  and saving it in the $s variable,
the second command above uses Invoke-Command to run an Import-Module command in the PSSession in $s.<br>

Typically, the module would be added to all sessions by an Import-Module command in a  PowerShell profile, but profiles are not run in PSSessions.<br>
<br>
The last command above uses <span class="code">Import-PSSession -Module</span> to import the cmdlets and functions in the module
into the current session.<br>
--</p>
<p>Import a Get-Date cmdlet and a SearchHelp function into the current
session, this shows that all commands are converted into functions before they are imported:</p>
<p><span class="code">PS C:&gt; import-pssession $s -CommandName Get-Date, SearchHelp -formatTypeName * -AllowClobber</span></p>
<p>Using <span class="code"> Get-Command -Module</span> to find out what was imported into the
session by <span class="code">Import-PSSession</span> command:</p>
<p><span class="code">PS C:&gt; $mymod = import-pssession -session $sess -CommandName *bits* -formattypename *bits*<br>

PS C:&gt; get-command -module $mymod</span></p>
<p class="quote"><i>“We never fully grasp the import of any true statement until we have a clear notion of what the opposite untrue statement would be” ~ William James</i></p>
<p><b>Related:</b></p>
<p><a href="export-pssession.html">Export-PSSession</a> - Import commands and save them in a PowerShell module</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="import-pssession.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

