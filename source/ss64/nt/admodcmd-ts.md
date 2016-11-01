---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="admodcmd.html">ADmodcmd</a> Terminal Server attributes </h1> 
<p>Windows 2003 or later is required to modify Terminal Server attributes.</p>
<pre>   -tsprofilepath <i>ProfilePath</i>
               Set the users Terminal Server Profile path to the specified value.

   -tshomefolderpath FolderPath
               Set the users Terminal Server home folder path to the specified value.
   
   -tsnetworkfolderpath <i>driveLetter FolderPath</i>
               Set the users Terminal Server home folder path to a network share.
               driveLetter should be the drive that FolderPath will be mapped to.

   -tsenable   Enable the user for Terminal Server.

   -tsdisable  Disable the user from using Terminal Server.

   -enableremote [-required] [-interact]
               Enable Remote Control for the user.
               The -required and -interact switches are optional.
               If required is used, "Require Users Permission" will be checked.
               If -interact is specified, then "Interact With The Session" will be checked.

   -disableremote
               Disable Remote Control for the user.

   -tsstartingprogram program
               Set the program to start when the user logs on to Terminal Server.  

   -tsstartin location
               Set the location for the users startup program to start in.

   -maxdisconnectedsession <i>minutes</i>
               Set the maximum disconnected session time for the user in minutes.
               Setting to 0 minutes indicates an unlimited time.

   -maxconnectiontime <i>minutes</i>
               Set the maximum connection time for the user in minutes.
               Setting to 0 indicates an unlimited time.

   -maxidletime <i>minutes</i>
               Set the maximum idle time for the user in minutes.
               Setting to 0 indicates an unlimited time.

   -sessionlimitaction disconnect|end
               The action to take when a sessions limit has been reached.
               (disconnect the session or end the session).

   -allowreconnect any|originating
               Whether or not to allow a reconnect from anywhere (any) or just
               the originating client (originating).

   -tsconnectclientdrives yes|no
               Whether or not to connect client drives upon logon to
               a Terminal Server session.

   -tsconnectclientprinters yes|no
               Whether or not to connect client printers upon logon to
               a Terminal Server session.

   -tsdefaulttomainprinter yes|no
               Whether or not to default to the main client printer.</pre>
<p class="quote"><i>“I did not fully understand the dread term 'terminal illness' until I saw Heathrow for myself” - </i>Dennis Potter</p>
<p><b>Related:</b><br>
<br>
<a href="admodcmd.html">ADmodcmd</a> - Active Directory Bulk Modify Tool<br>
<a href="admodcmd-ex.html">Exchange Related Attributes</a> | <a href="admodcmd-mail.html">Mailbox Rights</a> | <a href="admodcmd-user.html">User Account Settings</a> |<a href="admodcmd-custom.html"> Custom Attributes</a><br>
<a href="http://technet.microsoft.com/en-us/library/cc755399%28WS.10%29.aspx">How Terminal Services Works</a> - Technet </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="admodcmd-ts.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
