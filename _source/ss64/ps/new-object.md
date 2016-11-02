---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-Object</h1> 
<p>Create an instance of a .Net or COM object. This allows you to startup and control other applications (including VBScript) from PowerShell. </p>
<pre>Syntax
      New-Object [-comObject] <i>string</i>[] [-strict]  
            [-Property <i>hashtable</i>] [<i>CommonParameters</i>]

      New-Object [-typeName] <i>string</i>[] [[-argumentList] <i>Object[]</i>]
            [-Property <i>hashtable</i>] [<i>CommonParameters</i>]

Key
   -argumentList <i>Object</i>
       A comma separated list of arguments to pass to the constructor of the .Net class.

   -comObject <i>string</i>
       Programmatic Identifier (ProgID) of the COM object.

   -Property <i>hashtable<br></i>       Set property values and invokes methods of the new object.

       Enter a hash table in which the keys are the names of properties or methods and
       the values are property values or method arguments. New-Object creates the object and
       sets each property value and invokes each method in the order that they appear in the hash table.

       If the new object is derived from the PSObject class, a property is specified that
       does not exist on the object, it will be added to the object as a NoteProperty.
       If the object is not a PSObject, the command generates a non-terminating error.

   -strict 
       Raise an error if the COM object that you attempt to
       create uses an interop assembly.
       This enables you to distinguish actual COM objects from
       .Net objects with COM-callable wrappers.

   -typeName <i>string</i>
       The fully-qualified name of the .Net class.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p><a id="speech"></a>Speak a sentence:</p>
<p class="code">PS C:\&gt; Add-Type -AssemblyName System.Speech<br>
$say = New-Object -TypeName System.Speech.Synthesis.SpeechSynthesizer<br>
$say.Speak('SS64 taught me everything.')</p>
<p>Open MS Word, create a COM object "Word.Application" and store the resulting reference in a variable:</p>
<p class="code">PS C:\&gt; $objWord=<b>new-object</b> -comobject Word.Application<br>
$objWord.visible=$true</p>
<p>Create a <a href="../vb/index.html">VBScript</a> COM object, start MS Word and type in some text using SendKeys: </p>
<pre>$objVBscript = <b>new-object</b> -comobject wscript.shell
[void] $objVBscript.<a href="../vb/popup.html">popup</a>("This is VBScript",0,"SS64 MsgBox",1)
 
[void] $objVBscript.<a href="../vb/run.html">Run</a>("Winword.exe")
Start-sleep 3</pre>
<pre>If ($objVBscript.<a href="../vb/appactivate.html">AppActivate</a>("Microsoft Word"))
{
  Start-sleep 2
  $objVBscript.<a href="../vb/sendkeys.html">SendKeys</a>("Hello 123")
}</pre>
<p>Create a COM object "Shell.Application" and store the resulting reference in a variable, display the properties and methods of the COM object (via get-member.) Then use the ToggleDesktop method to minimize all open desktop windows:</p>
<p><span class="code">PS C:\&gt; $objShell = <b>new-object</b> -comobject "Shell.Application"<br>
$objShell | get-member<br>
$objShell.ToggleDesktop()</span></p>
<p>Send email:</p>
<p class="code"># Instantiate an SmtpClient object<br>
$objMailClient = <b>new-object</b> Net.Mail.SmtpClient -arg "mailserver.example.com" </p>
<p class="code"># Instantiate a new MailMessage object, with sender, destination,subject and body<br>
$objMessage = <b>new-object</b> Net.Mail.MailMessage("me@example.com","you@example.com", "Subject", "Here is some email")</p>
<p class="code"># Add an attachment to the message<br>
$objAttach = <b>new-object</b> Net.Mail.Attachment("c:\\demo.txt")<br>
$objMessage.Attachments.Add($objAttach)</p>
<p class="code"># Send the message object using the email client <br>
$objMailClient.Send($objMessage)</p>
<p>Install fonts from local path <span class="code">:<br>
<br>
$FONTS = 0x14 <br>
$objShell = New-Object -ComObject Shell.Application <br>
$objFolder = $objShell.Namespace($FONTS) <br>
$objFolder.CopyHere("C:\tempfiles\ITCBLKAD.TTF")</span></p>
<p>For more examples, type: "get-help New-Object -detailed"</p>
<p class="quote"><i>“The creation of a thousand forests is in one acorn” ~ Ralph Waldo Emerson </i></p>
<p><b>Related:</b></p>
<p><a href="compare-object.html">Compare-Object</a> - Compare the properties of objects<br>
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>
<span class="body"><a href="measure-object.html">Measure-Object</a> - Measure aspects of object properties and create objects from those values<br>

<a href="select-object.html">Select-Object</a> - Select objects based on parameters set in the Cmdlet command string<br>
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
<a href="where-object.html">Where-Object</a> - Filter input from the pipeline allowing operation on only certain objects<br>
OS X Equivalent: <a href="../osx/say.html">say</a> - Convert text to audible speech.</span></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-object.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

