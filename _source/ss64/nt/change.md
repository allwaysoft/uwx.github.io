---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CHANGE</h1> 
<p>Change Terminal Server Session properties, use when installing software on a terminal server. </p>
<pre>Syntax
      CHANGE USER /<i>options</i>
      CHANGE LOGON /<i>options</i>
      CHANGE PORT /<i>options</i>

Options:
  To change .INI file mapping: (administrator rights required)

  CHANGE USER /INSTALL   Enable install mode. This command has to be run before
                         installing any new software on a Terminal Server.
                         This will create a .ini file for the application
                         in the TS system directory.

  CHANGE USER /EXECUTE   Enable execute mode (default)
                         Run this when an installation is complete.

  CHANGE USER /QUERY     Display current settings.

  To enable or disable terminal session logins:

  CHANGE LOGON /QUERY    Query current terminal session login mode.
  CHANGE LOGON /ENABLE   Enable user login from terminal sessions.
  CHANGE LOGON /DISABLE  Disable user login from terminal sessions.


  To list or change COM port mappings for the current session.
  This can allow DOS applications to access high numbered ports e.g. COM12

  CHANGE PORT portx=porty      Map port x to port y.
  CHANGE PORT /D portx         Delete mapping for port x.
  CHANGE PORT /QUERY           Display current mapping ports.
</pre>
<p><br>
  How .ini files work:<br>
    <br>
  Installing an application will create a .ini file in the TS system directory.<br>
    <br>
  The first time a user runs the application, the application looks in the 
  home directory for its .ini file. If none is found then Terminal Server will
  copy the .ini file from the system directory to the users home directory.<br>
    <br>
  Each user will have a unique copy of the application's .ini file in their home directory.<br>
    <br>
  To learn more about what happens when the system is put into install mode
  run CHANGE USER /? <br>
    <br>
  The CHANGE command replaces CHGLOGON, CHGUSER, and CHGPORT from Citrix Winframe. </p>
<p><i class="quote"> “There are two ways to slide easily through life; to believe everything or to doubt everything. Both ways save us from thinking” ~ Alfred Korzybski</i><br>
<b> <br>
Related:</b><br>
<br>
Other <a href="http://www.robvanderwoude.com/termserv.html">Terminal Server 
commands</a><br>
<a href="syntax-autoexec.html">INSTSRV</a> - Install an NT Service<br>
<a href="logoff.html">LOGOFF</a> - Log a user off <br>
<a href="msiexec.html">MSIEXEC</a> - Microsoft Windows Installer<br>
<a href="https://support.microsoft.com/kb/243202">Q243202</a> - TS Session 
Management Tools<br>
Equivalent bash command (Linux):<a href="../bash/who.html"> who</a> - Print all usernames currently logged 
in</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="change.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

