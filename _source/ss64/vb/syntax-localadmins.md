---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Local Admins </h1> 
<p>List local administrators across a network domain.</p>
<pre>'localadmins.vbs

' Usage:
'        cscript //Nologo localadmins.vbs
' List local administrators across a network domain

Dim oDomain, strComputer,oLocalGroup,Item,IsOnline

' Enumerate all the computers in the domain (OU specified below)

Set oDomain = GetObject ("LDAP://cn=Computers,DC=ss64,DC=com")

For Each strComputer in oDomain
   Wscript.Echo strComputer.CN

      'Check if the PC is booted and online
      IsOnline=PcOnline(strComputer.CN)
      
      'If so then list the local Administrators
      If IsOnline = true Then
          Set oLocalGroup = GetObject("WinNT://" &amp; strComputer.CN &amp; "/Administrators,group")
          For Each item In oLocalGroup.Members
             Wscript.Echo strComputer.CN &amp; " " &amp; item.ADsPath
          Next
      End If
Next


Function PcOnline (strComputer)
'Check if the remote machine is online.
    Dim objPing,objStatus
   
    Set objPing = GetObject("winmgmts:{impersonationLevel=impersonate}")._
        ExecQuery("select Replysize from Win32_PingStatus where address = '" &amp; strComputer &amp; "'")

    For Each objStatus in objPing
        If  IsNull(objStatus.ReplySize) Then
            PcOnline=False
            Wscript.Echo strComputer &amp; " is NOT available"
         Else
            PcOnline = True
            Wscript.Echo strComputer &amp; " is responding to a ping"
          End If
    Next
    Set objPing=Nothing
    Set objStatus=Nothing
End Function
</pre>
<p class="quote"><i>“A good reputation is more valuable than money” ~ Publilius Syrus</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-userinfo.html">userinfo.vbs</a> - List User properties (as shown in ADUC) </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-localadmins.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

