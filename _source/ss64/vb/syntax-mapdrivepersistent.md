---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>MapDrivePersistent.vbs</h1> 
<p>VBScript to Map a Drive letter to a network file share (persistent)</p>
<p>This script is designed to maximise the speed of login, so if a drive  already has the correct persistent connection it will be left alone. This is a good approach for machines that are running a recent version of Windows and which are always connected to the domain e.g. Windows 7 Workstations.</p>
<p>For each drive letter there are several possible states, that may have to be dealt with by the script: <br>
- Remembered (persistent connection) / Not Remembered<br>
- Already Connected / Connected to the wrong network share / Not Connected.</p>
<p> If a drive does have to be re-connected this script will attempt to remove any  'remembered' connections, including those to a file share that no longer exists or which is off-line.</p>
<pre>Option Explicit
Function <b>MapDrivePersistent</b>(strDrive,strPath)
   ' strDrive = Drive letter - e.g. "x:"
   ' strPath = Path to server/share - e.g. "\\server\share"
   ' Returns a boolean (True or False)

   Dim objNetwork, objDrives, blnFound, objReg, i
   Dim strLocalDrive, strRemoteShare, strRemembered, strMessage
   Const HKCU = &amp;H80000001

   ' Check syntax of parameters passed
   If Right(strDrive, 1) &lt;&gt; ":" OR Left(strPath, 2) &lt;&gt; "\\" Then
      WScript.echo "Usage: MapDrivePersistent.vbs ""X:"" ""\\server\share"" //NoLogo"
     WScript.Quit(1)
   End If

   Err.clear
   MapDrivePersistent = False

   Set objNetwork = WScript.CreateObject("WScript.Network")

   'Step 1: Get the current drives
   Set objDrives = objNetwork.EnumNetworkDrives
   If Err.Number &lt;&gt; 0 Then
        'Code here for error logging
        Err.Clear
        MapDrivePersistent = False
        Exit Function 
   End If

   WScript.echo "   Connecting drive letter: " + strDrive + " to " + strPath
    
   'Step 2: Compare drive letters to the one requested
   blnFound = False
   For i = 0 To objDrives.Count - 1 Step 2
        If UCase(strDrive) = UCase(objDrives.Item(i)) Then
            blnFound = True
            'Drive letter was found.  Now see if the network share on it is the same as requested
            If UCase(strPath) = UCase(objDrives.Item(i+1)) Then
                'Correct mapping on the drive
                MapDrivePersistent = True
            Else
                'Wrong mapping on drive.  Disconnect and remap
                WScript.Echo "--"
                objNetwork.RemoveNetworkDrive strDrive, True, True 'Disconnect drive
                If Err.Number &lt;&gt; 0 Then
                    'Code here for error logging
                    Err.clear
                    MapDrivePersistent = False
                    Exit Function
                End If

                ' To completely remove the previous remembered persistent mapping
                ' we also delete the associated registry key HKCU\Network\Drive\RemotePath
                ' In theory this should be covered by bUpdateProfile=True in
                ' the RemoveNetworkDrive section above but that doesn't always work.
                 Set objReg = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\default:StdRegProv")
                 objReg.GetStringValue HKCU, "Network\" &amp; Left(strDrive, 1), "RemotePath", strRemembered
                 If strRemembered &lt;&gt; "" Then
                   objReg.DeleteKey HKCU, "Network\" &amp; Left(strDrive, 1)
                 End If

               ' Connect drive
               On Error Resume Next
                WScript.Echo "++"
                objNetwork.MapNetworkDrive strDrive, strPath, True 
                If Err.Number &lt;&gt; 0 Then
                    'Code here for error logging
                    Err.clear
                    MapDrivePersistent = False
                    Exit Function 
                End If

                MapDrivePersistent = True
                
            End If
        End If
        
    Next'Drive in the list
    
   'If blnFound is still false, the drive letter isn't being used.  So let's map it.
   If Not blnFound Then
        On Error Resume Next
        objNetwork.MapNetworkDrive strDrive, strPath, True
        If Err.Number &lt;&gt; 0 Then
            'Code here for error logging
            Err.clear
            MapDrivePersistent = False
            Exit Function 
        End If

        MapDrivePersistent = True
   End If

   WScript.Echo "   ____"
End Function


' Example calling the function above to map a drive:

if not <b>MapDrivePersistent</b>("Z:","\\Server64\workgroups") Then
    Wscript.Echo "   ERROR: Drive Z: failed to connect!"
End If</pre>
<p> You are free to use or modify this script: Creative Commons Attribution 2.5 License.</p>
<p>For drive mapping to work, <i>File and Printer sharing</i> must  be enabled on the remote (server) computer.</p>
<p>based on a script by Corey Thomas<a href="http://vbscripter.blogspot.co.uk/2008/03/better-drive-mapping.html"> Better Drive Mapping</a></p>
<p class="quote"><i>“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one” ~ John Lennon</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-mapdrive.html">MapDrive</a> - Map a Drive letter to a network file share (non-persistent)<br>
<a href="mapnetworkdrive.html">.MapNetworkDrive</a> - Drive Map.<br>
<a href="http://blogs.technet.com/b/askds/archive/2009/01/07/using-group-policy-preferences-to-map-drives-based-on-group-membership.aspx">Using Group Policy Preferences</a> to Map Drives Based on Group Membership.<br>
<a href="../nt/syntax-nodrives.html">NoDrives</a> - Hide mapped drives from Windows Explorer.<br>
<a href="../nt/net.html">NET</a> - Manage network resources.<br>
Equivalent PowerShell command: <a href="../ps/new-psdrive.html">New-PSDrive</a>- Create a  mapped network drive.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-mapdrivepersistent.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

