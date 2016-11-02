---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>CreateObject / wscript.CreateObject</h1> 
<p>Create a Windows Scripting Host (WSH) automation object / run an external command.</p>
<pre>Syntax:
      Set objObject = <b>CreateObject(</b><i>ServerName</i>.<i>typeName</i>, [<i>Location</i>]<b>)</b>

Key:
   <i>ServerName</i>   The name of the application
<i>   typeName</i>     Type or class of object to create
   <i>Location</i>     The name of the server. (creates the object on a remote server via DCOM)


Syntax:
      Set objObject = WScript<b>.CreateObject(</b><i>strProgID</i>[, <i>strPrefix</i>]<b>)</b>

Key:
   <i>strProgID</i>    The programmatic identifier of the object to create. String value.
   <i>strPrefix</i>    String value indicating the function prefix.
                Create a local object and hook up its event handlers</pre>
<p>Objects created with the wscript.CreateObject method using the strPrefix argument are <i>connected</i> objects.<br>
These are useful when you want to sync an object's events.</p>
<p>CreateObject is a wscript method. </p>
<p><b>Examples</b></p>
<p>Run a <a href="../nt/index.html">cmd command</a> from vbs</p>
<p class="code">Set objShell = Wscript.CreateObject("Wscript.Shell")<br>
objShell.run("%comspec% /c ipconfig /release") </p>
<p>Run a cmd batch file from vbs</p>
<p class="code">Set objShell = Wscript.CreateObject("Wscript.Shell")<br>
objShell.run("%comspec% /c mybatchfile.cmd") </p>
<p> Create a WshController object to run scripts on a remote machine:</p>
<p class="code">strServer = "machine_name"<br>
strScript = "script_name.vbs"<br>
 Set objWshController = WScript.CreateObject("<a href="http://technet.microsoft.com/en-us/library/ee156594.aspx">WshController</a>")<br>
 Set objRemoteScript = objWshController.CreateScript(strScript, strServer)<br>
objRemoteScript.Execute</p>
<p>For the above to work, enable DCOM , then enable WshRemote in the registry:</p>
<p><span class="code">HKLM\Software\Microsoft\Windows Script Host<br>
</span>String value: <span class="code">Remote</span></p>
<p>Set Remote to "1" to enable WshRemote and "0" to disable.</p>
<p>Create a WshNetwork object (for mapping to a network share)<br>
<span class="code">WshNetwork = WScript.CreateObject("<a href="network.html">WScript.Network</a>")</span></p>
<p> Echo the script mode.<br>
<span class="code">WScript.Echo (WScript.Interactive)</span></p>
<p class="quote"><i>“..an understanding of Visual Basic would be advantageous although not to a programming level.” ~ Job advert on Monster.com</i></p>
<p>  <b>Related:</b></p>
<p><a href="cscript.html">cscript</a> - Run a VBScript .vbs file<br>
<a href="getobject.html">.GetObject</a> - Get an Automation object<br>
.ConnectObject - Connect to a COM object<br>
.DisconnectObject - Disconnect  from a COM object<br>
<a href="exec.html">.Exec</a> - Run a command<br>
<a href="https://blogs.msdn.microsoft.com/ericlippert/2004/06/01/whats-the-difference-between-wscript-createobject-server-createobject-and-createobject/">The difference between WScript.CreateObject and CreateObjec</a>t - Eric Lippert<br>
<a href="../nt/psexec.html">psExec</a> - Run commands remotely
<br>
Equivalent in Powershell - <a href="../ps/new-object.html">New-Object</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="createobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

