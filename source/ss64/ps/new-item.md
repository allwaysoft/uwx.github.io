---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-Item</h1> 
<p>Create a new item in a namespace. Create files and folders, registry keys and registry entries.</p>
<pre>Syntax
      New-Item [-name] <i>string </i>[-path <i>string</i> ]
         [-force] [-credential <i>PSCredential</i>] [-itemType <i>string</i>]
            [-value <i>Object</i>] [-whatIf] [-confirm]
               [-UseTransaction] [<i>CommonParameters</i>]

Key
   -name <i>string</i>
       The name of the new item.

   -path <i>string</i>
       The path(s) to the items. Wildcards are permitted.
       Use a dot (.) to specify the current location. 

   -value <i>Object</i>
       The value the new item, can be piped.

   -force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. rename an existing file.
       Create a file when the directories in the path do not
       exist (PowerShell will create them)

   -itemType <i>string</i>
       The provider-specified type of the new item
       for the file system: file, directory

   -Type <i>string</i>
       An alias for -itemType above

   -whatIf
       Describe what would happen if you executed the command without 
       actually executing the command.
        
   -confirm
       Prompt for confirmation before executing the command.

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User64" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
Standard <a href="get-alias.html">Aliases</a> for New-Item:<span class="code"> md, <b>ni</b></span><br>
<span class="code">mkdir</span> is a <a href="syntax-functions.html">function</a> that calls New-Item<br>
</p>
<p>New-Item  creates a new item and sets its value. The types of items that can be created depend upon the location of the item. For example, in the file system, New-Item is used to create files and folders. In the registry, New-Item creates registry keys and entries. <br>
<br>
New-Item can also set the value of the items that it creates. For example, when creating a new file, New-Item can add initial content to the file.</p>
<p>By default <span class="code">new-item</span> will display the item just created, in fact it writes to the pipeline (which by default is passed  to the host). This can be suppressed by assigning to a dummy variable (<span class="code">$null = new-item...</span>) or just redirecting the pipeline to <span class="code"><a href="out-null.html">out-null</a></span>.</p>
<p><b>Examples</b></p>
<p>Create a text file:</p>
<p><span class="code">PS C:\&gt; new-item -path C:\docs -name SS64.txt -type "file" -value "some text"</span><br>
  <br>
  Note that this won't overwrite an existing file; to overwrite an existing file, use set-content instead of new-item.</p>
<p>Create a directory named 'Demo Folder' in the C: drive:</p>
<p class="code">PS C:\&gt; new-item -path c:\ -name "Demo Folder" -type directory</p>
<p>Create a new variable called $myVar:</p>
<p class="code">PS C:\&gt; new-item variable:\myVar  -value "testing123" </p>
<p>If a folder does not exist, then create it:<br>
<span class="code"> if ( -Not (<a href="test-path.html">Test-Path</a> "F:\BACKUP"))<br>
{<br>
&nbsp;New-Item -Path "F:\BACKUP" -ItemType Directory | out-null<br>
}</span></p>
<p>Create a PowerShell profile in the path  specified by the $profile variable:</p>
<p class="code">PS C:\&gt; new-item -path $profile -type file -force</p>
<p>$profile is an automatic (built-in) variable that stores the path and file name of your  <a href="syntax-profile.html">PowerShell profile</a></p>
<p>By default, the profile file does not exist, even though PowerShell has a filename for it, the file can be created using New-Item or notepad.</p>
<p>After  using the command above to create a profile, you can enter aliases, functions, and scripts in the profile to customize your shell. </p>
<p class="quote"><i>“Selection is creation” ~ Koichi (Japanese Interior Designer)</i></p>
<p><b>Related:</b></p>
<p>  <a href="clear-item.html">Clear-item</a> - Remove content from a variable or an alias<br>
<a href="copy-item.html">Copy-item</a> - Copy an item from a namespace location<br>
<a href="get-item.html">Get-item</a> - Return an object that represents an item in a namespace<br>
<a href="invoke-item.html">Invoke-item</a> - Invoke an executable or open a file (START)<br>
<a href="move-item.html">Move-item</a> - Move an item from one location to another<br>
<a href="new-object.html">New-Object</a> - Create a new .Net object<br>
<a href="set-item.html">Set-item</a> - Set the value of a provider pathname<br>
<a href="remove-item.html">Remove-item</a> - Remove an item<br>
<a href="rename-item.html">Rename-item</a> - Change the name of an existing item<br>
<a href="get-help.html">Help</a> about_automatic_variables</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-item.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

