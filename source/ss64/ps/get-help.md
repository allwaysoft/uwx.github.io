---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Help</h1> 
<p>Display information about Windows PowerShell cmdlets and concepts.</p>
<pre>Syntax
      Get-Help [[-name] <i>string</i>] [-component <i>string</i>[]]
         [-functionality <i>string</i>[]]
            [-role <i>string</i>[]] [-category <i>string</i>[]]
               [ {-full | -detailed | -examples | -parameter <i>string</i>}]
                  [-Online] [-Path <i>string</i>] [<i>CommonParameters</i>]
Key
   -name 
       Request help about <i>string</i>
       A cmdlet name, topic, alias, script or function name. Wildcards are permitted. 
       e.g. -name Get-Member, -name "About_Object", -name "ls" 
       The "-Name" is optional.

   -category 
       Display help for items in the specified category.
       Valid values are:  Alias, Cmdlet, Provider, and HelpFile.
       Conceptual topics are in the HelpFile category.

   -component 
       Display a list of cmdlets with the specified component value,
       such as "Exchange."

   -detailed 
       Display additional information about a cmdlet, including
       descriptions of the parameters and examples of using
       the cmdlet. This parameter has no effect on displays
       of conceptual ("About_") help.

   -examples 
       Display examples of using the cmdlet. 
       To display only the examples, type 
         "(get-help <i>cmdlet-name</i>).examples".

   -full 
       Display the entire help file for a cmdlet, including
       technical information about the parameters.
       This parameter has no effect on displays of
       conceptual ("About_") help.

   -functionality 
       Display help for cmdlets with the specified functionality.
       Wildcards are permitted.

   -Online
       Display the online version of a help topic in the default Internet browser. 
       This parameter is valid only for cmdlet, function, and script help topics.
       see Help about_Comment_Based_Help

   -parameter 
       Display a detailed description of the specified parameter.
       These descriptions are included in the Full view of help.
       Wildcards are permitted.

   -Path <i>string</i><br>       Get help that explains how the cmdlet works in the specified provider path.
       Enter a Windows PowerShell provider path.<br>        <br>       This parameter is effective only for help about a provider cmdlet and only when
       the provider includes a custom version of the provider cmdlet help topic.<br>        <br>       Go to the provider path location and enter Get-Help or, from any path location,
       use Get-Help -Path. For more information, see about_Providers.

   -role <i>String</i>
       Display help customized for the specified user role. 
       The role that the user plays in an organization.
       This parameter has no effect for the core cmdlets.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>List of all help files in the  PowerShell help system:</p>
<p><span class="code">PS C:\&gt;get-help *</span><br>
  <br>
  Display detailed help for the <a href="get-childitem.html">Get-Childitem</a> cmdlet by specifying one of its aliases, ls :</p>
<p class="code">PS C:\&gt;get-help ls -detailed</p>
<p>Display descriptions of the parameters of the Get-Childitem cmdlet that begin with "f" (filter and force):</p>
<p class="code">PS C:\&gt;get-help get-childitem -parameter f*</p>
<p>To see descriptions of all parameters, type <span class="code">"get-help get-childitem parameter*"</span></p>
<p>Display  only the syntax of the write-object cmdlet:</p>
<p class="code">PS C:\&gt;(get-help write-object).syntax</p>
<p>Syntax is one of many properties of help objects; others are: 
description, details, examples, and parameters. </p>
<p>To find all properties and methods of help objects, type <span class="code">"get-help &lt;cmdlet-name&gt; | get-member", </span>for example, <span class="code">"get-help start-service | get-member"</span></p>
<p class="quote"><i>"Evangelise wherever you go, and, if necessary, use words" ~ St Francis of Assisi</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-command.html">Get-Command</a> - Retrieve basic information about a command<br>
<a href="get-psdrive.html">Get-PSDrive</a> - Get drive information (DriveInfo)<br>
<a href="get-member.html">Get-Member</a> - Enumerate the properties of an object<br>
Equivalent bash command: <a href="../bash/man.html">man</a> - Display helpful information about commands.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-help.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

