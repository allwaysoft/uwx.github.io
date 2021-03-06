---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PSSession</h1> 
<p>Get the PowerShell sessions (PSSessions) in the current session.</p>
<pre>Syntax
      Get-PSSession [[-ComputerName] <i>string</i>[]] [<i>CommonParameters</i>]

      Get-PSSession [-Id] <i>Int32</i>[] [<i>CommonParameters</i>]

      Get-PSSession [-InstanceId <i>Guid</i>[]] [<i>CommonParameters</i>]

      Get-PSSession [-Name <i>string</i>[]] [<i>CommonParameters</i>]

Key
   -ComputerName <i>string</i>[]
       Get only the PSSessions that are connected to the specified computers.
       Wildcards are permitted. 
       Type the NetBIOS name, an IP address, or a fully-qualified domain name of one or more computers.
       To specify the local computer, type the computer name, "localhost", or a dot (.).

   -Id <i>Int32</i>[]
       Get only the PSSessions with the specified IDs. Type one or more IDs (separated by commas),
       or use the <a href="syntax-operators.html#range">range</a> operator (..) to specify a range of IDs.  
       An ID is an integer that uniquely identifies the PSSession in the current session.
       It is easier to remember and type than the InstanceId, but is unique only within the current session.
       To find the ID of a PSSession, use <a href="get-pssession.html">Get-PSSession</a> without parameters.

   -InstanceId <i>Guid</i>[]
       Get only the PSSessions with the specified instance IDs.

       The InstanceID is a GUID that uniquely identifies a PSSession in the current session.
       The InstanceID is unique, even when you have multiple sessions running on a single computer.

       The InstanceID is stored in the InstanceID property of the object that represents a PSSession.
       To find the InstanceID of the PSSessions in the current session:
          "<a href="get-pssession.html">Get-PSSession</a> | <a href="format-table.html">format-table</a> Name, ComputerName, InstanceId".

   -Name <i>string</i>[]
       Get only the PSSessions with the specified friendly names.
       Wildcards are permitted.
       To find the names of the PSSessions in the current session, type "<a href="get-pssession.html">get-pssession</a>" without parameters.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-PSSession:<span class="code"> gsn</span></p>
<p>Get-PSSession  gets the Windows PowerShell sessions (PSSessions) that were created in the current session. <br>
<br>
Without parameters, Get-PSSession gets all of the PSSessions created in the current session. You can use the parameters of Get-PSSession to get the sessions that are connected to particular computers, or you can identify sessions 
by their names, IDs, or instance IDs.<br>
<br>
For more information about Windows PowerShell sessions, see about_PSSessions.</p>
<p><b>Examples</b></p>
<p>Get all of the PSSessions that were created in the current session. : </p>
<pre>PS C:&gt; get-pssession</pre>
<p>Get the PSSessions that are connected to the Server64 computer and save them in the $sess variable:</p>
<pre>PS C:&gt; $sess = get-pssession -computername Server64</pre>
<p>Save the results of a Get-PSSession command in multiple variables:<br> 
When  PowerShell assigns the first object to the first variable, the second object to the second variable, and so on. If there are more objects than variables, it assigns all remaining objects to the last variable in the array.</p>
<p class="code">PS C:&gt; new-pssession -computername Server64, Server65, Server66<br>
<br>

PS C:&gt; $s64, $s65, $s66 = get-pssession</p>
<p>Get a PSSession  using its instance ID, and then  delete the PSSession.:</p>
<pre>PS C:&gt; get-pssession | format-table -property computername, InstanceID<br><br>PS C:&gt; $sess = get-pssession -InstanceID fc3e6dfb-f342-253d-7fa4-1abdfc64ae84<br><br>PS C:&gt; remove-pssession -session $sess</pre>
<p>Get all the PSSessions that connect to computers with computer names that begin with "mail": </p>
<pre>PS C:&gt; get-pssession -computername mail*</pre>
<p>Get the PSSession with ID = 4: </p>
<pre>PS C:&gt; get-pssession 4</pre>
<p class="quote"><i>“Remove advertising, disable a person or firm from proclaiming its wares and their merits, and the whole of society and of the economy is transformed. The enemies of advertising are the enemies of freedom” - David Ogilvy (Scottish/British military intelligence officer and later top advertising executive)</i></p>
<p><b>Related:</b></p>
<p><a href="enter-pssession.html">Enter-PSSession</a> - Start an interactive session with a remote computer<br>
<a href="new-pssession.html">New-PSSession</a> - Create a persistent connection to a local or remote computer<br>
<a href="remove-pssession.html">Remove-PSSession</a> - Close PowerShell sessions</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-pssession.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

