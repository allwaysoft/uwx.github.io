---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-Variable</h1> 
<p>Set the value of a variable.</p>
<pre>Syntax
      Set-Variable [-Name] <i>String[] </i>[-value] <i>Object</i>] 
           [-Include <i>string[]</i>] [-Exclude <i>string[]</i>] [-option <i>option</i>]
              [-scope <i>string</i>] [-force] [-passThru] [-whatIf]
                 [-Description <i>string</i>] [-Visibility <b>{</b><u>Public</u> | Private<b>}</b> ]
                    [-confirm] [<i>CommonParameters</i>]
Key
   -Name <i>String</i>
       The name of the variable(s), may be piped.

   -Value <i>Object</i>
       The value to assign to the variable.

   -Include <i>string</i>
       Items upon which Set-variable will act, excluding all others.

   -Exclude <i>string</i>
       Items upon which Set-variable will not act, include all others.

   -Option <i>option</i>
       The valid options are: 
         None    : Set no options. (default) 
         ReadOnly: The alias cannot be changed unless you use -Force. 
         Constant: The alias cannot be changed, even by using -Force. 
         Private : The alias is available only within the scope specified by -Scope. 
                   It is invisible in all other scopes.  
         AllScope: The variable is copied to any new scopes that are created.

   -Scope <i>string</i>
       The scope in which this alias is valid. 
       Valid values are "Global", "Local", "Private" or "Script", or a number 
       relative to the current scope ( 0 through the number of scopes, where 
       0 is the current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scope<b>".</b>

   -force
       create a variable with the same name as an existing read-only variable,
       or change the value of a read-only variable. 

       By default, a variable may be overwritten, unless it has an option value
       of "ReadOnly" or "Constant". For more information, see the -Option parameter.

   -passThru 
       Pass the object created by this cmdlet through the pipeline.

   -Visibility <b>{</b><u>Public</u> | Private<b>}</b>
       Whether the variable is visible outside of the session in which it was created.<br>       This parameter is designed for  use in scripts and commands that
       will be delivered to other users.<br>        <br>       When a variable is private, it does not appear in lists of variables, such as
       those returned by Get-Variable, or in displays of the Variable: drive.
       Commands to read or change the value of a private variable return an error.

       However, the user can run commands that use a private variable if the
       commands were written in the session in which the variable was defined.

   -WhatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   -Description <i>string</i>
       The description of the variable.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
Standard <a href="get-alias.html">Aliases</a> for Set-Variable:<span class="code"> set, <b>sv</b></span></p>
<p><b>Examples</b></p>
<p>Set the value of the "SS64" variable to "My Sample text ":</p>
<p><span class="code">PS C:\&gt; set-variable -name SS64 -value "My Sample text"</span><br>
<br>
Create a global, read-only variable that contains all processes on the system:</p>
<p class="code">PS C:\&gt; set-variable -name myprocs -value (Get-Process) -option constant -scope global</p>
<p>In the example above, the value is enclosed in parentheses  this executes the command: (Get-Process)  before  storing the result in the variable, rather than just storing the text "Get-Process". </p>
<p class="quote"><i>“O, swear not by the moon, the fickle moon, the inconstant moon, that monthly changes in her circle orb, Lest that thy love prove likewise variable” ~ Shakespeare</i></p>
<p><b>Related:</b><br>
<br>
<a href="clear-variable.html">Clear-Variable</a> - Remove the value from a variable<br>
<a href="get-variable.html">Get-Variable</a> - Get a PowerShell variable<br>
<a href="new-variable.html">New-Variable</a> - Create a new variable<br>
<a href="remove-variable.html">Remove-Variable</a> - Remove a variable and its value<br>
<a href="syntax-env.html">Environment Variables</a><br>
Equivalent bash command: <a href="../bash/env.html">env</a> - Display, set, or remove environment variables </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-variable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

