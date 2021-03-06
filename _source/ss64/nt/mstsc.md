---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MSTSC</h1> 
<p>Connect and login to a remote machine using the Remote Desktop Protocol (RDP) also known as Terminal Server Connection (TSC). </p>
<pre>Syntax
      MSTSC <i>option</i>
      MSTSC /Edit "<i>ConnectionFile</i>"
      MSTSC /migrate

<i>Options</i>
   <i>ConnectionFile</i>     The name of an RDP file for connection

   /v:&lt;<i>server</i>[:<i>port</i>]&gt; The remote computer to connect to

   /console       Connect to the console of a server (NT/XP)
   /Admin         Connect to a session for administering the server(Vista/2008)

   /f             Start in Full Screen mode

   /w:<i>width</i>       Width of the RDP screen
   /h:<i>height</i>      Height of the RDP screen

   /span          Match the Remote Desktop width and height with the local virtual
                  desktop, spanning across multiple monitors if necessary.(Vista/2008)

   /public        Run Remote Desktop in public mode. (Vista/2008)
                  In public mode, passwords and bitmaps are not cached.

   /edit          Open the RDP file for editing.
   /migrate       Convert a legacy Client connection file into an .RDP file</pre>
<p> To connect to a remote computer the user account must be a member of the local group '<span class="code">Remote Desktop users</span>' on the remote server (either directly or inherited via a global group) in addition the user account needs the privilege <span class="code"><a href="ntrights.html">SeRemoteInteractiveLogonRight</a></span> (allow logon through RDP/Terminal Services.)</p>
<p>The command <a href="cmdkey.html">CMDKEY</a> can be used to setup/save the password credentials used by Remote Desktop.</p>
<h2>Shortcut Keys</h2>
<blockquote>
<p>Shortcut keys that can be used when connected to a Remote Desktop:</p>

<table id="keys">
<tbody><tr>
<th scope="col">Windows Shortcut</th>
<th scope="col">Remote Desktop</th>
<th scope="col">Description</th>
</tr>
<tr>
<td>Ctrl+ALT+Del</td>
<td>Ctrl+ALT+END</td>
<td>Bring up the Windows Security dialog box.</td>
</tr>
<tr>
<td>ALT+TAB</td>
<td>ALT+Page Up</td>
<td>Switch between programs from left to right.</td>
</tr>
<tr>
<td>ALT+Shift+TAB</td>
<td>ALT+Page Down</td>
<td>Switch between programs from right to left.</td>
</tr>
<tr>
<td>ALT+Esc <br>
ALT+Shift+Esc</td>
<td>ALT+INSERT</td>
<td>Switch between programs in the order they were started.</td>
</tr>
<tr>
<td>Ctrl+Esc</td>
<td>ALT+HOME</td>
<td>Display the Start menu.</td>
</tr>
<tr>
<td>n/a</td>
<td>Ctrl+ALT+BREAK</td>
<td>Switch the client between full-screen mode and window mode.</td>
</tr>
<tr>
<td>ALT+Space Bar </td>
<td>ALT+Delete</td>
<td>Displays the remote window's Control menu</td>
</tr>
<tr>
<td>ALT+Print&nbsp;Screen</td>
<td>Ctrl+ALT+NumPad MINUS</td>
<td> Place an image of active window onto the Terminal Services clipboard.</td>
</tr>
<tr>
<td>Print Screen</td>
<td>Ctrl+ALT+NumPad PLUS</td>
<td> Place an image of the entire TS client on the Terminal Services clipboard. <br>
This is almost the same as pressing ALT+Print Screen to capute the window locally but removes the Windows chrome and so shows more of the remote window.</td>
</tr>
</tbody></table>
<p>If the RDP shortcut keys don't work - this is dependent on your RDP options/settings.<br>
The window may need to be full screen to accept shortcut keys.</p>
<p><img src="rdp.png" width="441" height="244" alt="RDP Shortcut Keys"></p>
</blockquote>
<h2>Citrix ICA Client Shortcut Keys</h2>
<blockquote>
<p>Shortcut keys that can be used when connected to a Citrix Desktop:</p>

<table>
<tbody>
<tr>
<th>Windows Shortcut </th>
<th>Citrix Shortcut</th>
<th>Description</th>
</tr>
<tr>
<td>n/a </td>
<td>Shift+F1 </td>
<td> Display   Start Menu  in the remote ICA session.<br></td>
</tr>
<tr>
<td>n/a </td>
<td>Shift+F2 </td>
<td>Toggle  display of the remote Windows Title bar.<br></td>
</tr>
<tr>
<td>n/a </td>
<td>Shift+F3 </td>
<td>Disconnect the ICA session and exit   the ICA Win32 Client. <br>
This might leave the associated   application in a disconnected state, depending  how the application is   configured.<br></td>
</tr>
<tr>
<td>Ctrl+ALT+Del </td>
<td>Ctrl+F1 </td>
<td>Display the Windows NT Security desktop.<br></td>
</tr>
<tr>
<td>Ctrl+Esc</td>
<td>Ctrl+F2 </td>
<td>Display the    Task List  in the remote ICA session.<br></td>
</tr>
<tr>
<td>Ctrl+ Shift+Esc</td>
<td>Ctrl+F3 </td>
<td>Display the Windows NT Task Manager in the remote ICA session.<br></td>
</tr>
<tr>
<td>ALT+Esc</td>
<td>ALT+F2 </td>
<td>Cycle through any maximized or minimized program Windows  in the remote ICA session.<br></td>
</tr>
<tr>
<td>ALT+TAB </td>
<td>ALT+PLUS </td>
<td>Cycle through open applications in the   remote ICA session.<br></td>
</tr>
<tr>
<td>ALT+SHIFT+TAB </td>
<td>ALT+MINUS </td>
<td>Cycle through open applications in the   remote ICA session but in the opposite direction. </td>
</tr>
</tbody>
</table>

<p><b>Examples:<br>
</b><span class="code"><br>
MSTSC /v:MyServer /f /console <br>
MSTSC /v:127.0.0.1   /w:1024 /h:768<br>
MSTSC /v:MyServer  /w:800 /h:600<br>
MSTSC /edit filename.rdp</span> </p>
</blockquote>
<h2>"Your credentials did not work"</h2>
<blockquote>
<p>This error can have several causes:</p>
<p>If using a domain account, prefix with the domain name: <span class="code">SS64dom\user64</span><br>
If the account is a non-administrator, you may need to grant logon rights as described above.<br>
If the password contains any special characters: <span class="code">$,/,\, Tabs</span> etc then copy and paste of the password may not work.<br>
Specific problems: copy/paste will convert TABs into spaces and double $$'s are removed (e.g. Pa$$word1)</p>
</blockquote>
<p><i class="quote">“Ignorance is preferable to error; and he is less remote from the truth who believes nothing, than he who believes what is wrong” - Thomas Jefferson</i> <br>
<br>
<b>Related:</b></p>
<p><a href="http://www.microsoft.com/en-us/download/details.aspx?id=21101">Remote Desktop Connection Manager</a> - RDP to multiple machines.<br>
<a href="https://support.microsoft.com/kb/216783">Q216783</a> - Keep-Alive Disconnected TS Connections<br>
  <a href="https://support.microsoft.com/kb/2726399">Q2726399</a> - Cannot change the DPI setting through an RDP session.  <br>
<a href="mapisend.html">MAPISEND</a> - Send email from the command line<br>
<a href="rmtshare.html">RMTSHARE</a> - Share a folder or  printer<br>
<a href="shortcut.html">SHORTCUT</a> - Create a windows shortcut<br>
SHADOW - Monitor/View another users running RDP session. <br>
<a href="shutdown.html">SHUTDOWN</a> - Shutdown the computer/Log off a user<br>
<a href="tsdiscon.html">TSDISCON</a> - Disconnect a Remote Desktop Session<br>
<a href="tsshutdn.html">TSSHUTDN</a> - Remotely shut down or reboot a terminal server<br>
<a href="http://msdn.microsoft.com/en-us/library/aa383500.aspx">Remote Desktop Services Shortcut Keys</a> - MSDN<br>
Equivalent bash command (Linux): VNCconnect or <a href="../bash/screen.html">screen</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

