---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WshShell.SendKeys </h1> 
<p>Send one or more keystrokes to the active window as if they were 
  typed at the keyboard. This method is similar to the VB SendKeys method.</p>
<pre>      WshShell.SendKeys <b>"</b><i>Character_string_and/or_SendKeys</i><b>"</b></pre>
<p>Most <a href="../ascii.html">ASCII</a> characters can be represented simply by the character itself. <br>
  E.g, the key sequence FRED can be represented  by <span class="code">"FRED"</span>. <br>
  Some special keys, such as the control keys, function keys etc are encoded in 
  a string enclosed by {braces} <br>
  See the table below </p>
<table>
  <tbody><tr> 
    <th><b>Key/Character</b></th>
    <th><b>SendKey</b></th>
    <th><b>Description</b></th>
  </tr>
  <tr> 
    <td>~</td>
    <td>{~}</td>
    <td>Send a tilde (~)</td>
  </tr>
  <tr> 
    <td> !</td>
    <td>{!}</td>
    <td> Send an exclamation point (!)</td>
  </tr>
  <tr> 
    <td> ^</td>
    <td> {^}</td>
    <td>Send a caret (^)</td>
  </tr>
  <tr> 
    <td>+</td>
    <td>{+}</td>
    <td>Send a plus sign (+)</td>
  </tr>
  <tr> 
    <td>Backspace</td>
    <td>{BACKSPACE} or {BKSP} or {BS}</td>
    <td>Send a Backspace keystroke</td>
  </tr>
  <tr>
<td>Break</td>
<td>{BREAK}</td>
<td>Send a Break keystroke</td>
</tr>
<tr>
<td>Caps Lock</td>
<td>{CAPSLOCK}</td>
<td>Press the <a href="../case.html">Caps Lock</a> Key (toggle on or off)</td>
</tr>
<tr> 
  <td>Clear</td>
  <td>{CLEAR}</td>
  <td>Clear the field</td>
</tr>
  <tr> 
    <td>Delete</td>
    <td>{DELETE} or {DEL}</td>
    <td>Send a Delete keystroke</td>
  </tr>
  <tr>
<td>Insert</td>
<td>{INSERT} or {INS}</td>
<td>Send an Insert keystroke</td>
</tr>
<tr> 
  <td>Cursor control arrows</td>
  <td>{LEFT} / {RIGHT} / {UP} / {DOWN}</td>
  <td>Send a Left/Right/Up/Down Arrow</td>
</tr>
  <tr> 
    <td>End</td>
    <td>{END}</td>
    <td>Send an End keystroke</td>
  </tr>
  <tr> 
    <td>Enter</td>
    <td>{ENTER} or ~</td>
    <td>Send an Enter keystroke</td>
  </tr>
  <tr> 
    <td>Escape</td>
    <td>{ESCAPE}</td>
    <td>Send an Esc keystroke</td>
  </tr>
  <tr> 
    <td>F1 through F16</td>
    <td>{F1} through {F16}</td>
    <td>Send a Function keystroke</td>
  </tr>
  <tr>
<td>Help</td>
<td>{HELP}</td>
<td>Send a Help keystroke</td>
</tr>
<tr>
<td>Home</td>
<td>{HOME}</td>
<td>Send a Home keystroke</td>
</tr>
<tr> 
  <td>Page Down<br>
Page Up</td>
  <td>{PGDN}<br>
{PGUP}</td>
  <td>Send a Page Down or Page Up keystroke</td>
</tr>
<tr>
<td>Numlock</td>
<td>{NUMLOCK}</td>
<td>Send a Num Lock keystroke</td>
</tr>
<tr>
<td>Scroll lock</td>
<td>{SCROLLLOCK}</td>
<td>Press the Scroll lock  Key (toggle on or off)</td>
</tr>
<tr>
<td>Print Screen</td>
<td>{PRTSC}</td>
<td>Send a  Print Screen keystroke</td>
</tr>
</tbody></table>
<p> To specify keys combined with any combination of  
SHIFT, CTRL, and ALT keys, precede the key code with 
one or more of the following:</p>
<pre>   For SHIFT prefix with <b>+</b>
   For CTRL  prefix with <b>^</b>
   For ALT   prefix with <b>%</b></pre>
<p><b>Example</b></p>
<pre>' Open notepad 
Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run "notepad.exe", 9

' Give Notepad time to load
WScript.Sleep 500 

' Type in Hello World
WshShell.SendKeys "Hello World!"
WshShell.SendKeys "{ENTER}"

' Add the date
WshShell.SendKeys "{F5}"</pre>
<p><i class="quote">“History repeats itself; that's one of the things that's wrong with history” ~ Clarence Darrow</i><br>
<br>
<b>Related:</b></p>
<p><a href="http://social.technet.microsoft.com/wiki/contents/articles/5169.vbscript-sendkeys-method.aspx">TechNet</a> - SendKeys Method.<br>
<a href="../nt/clip.html">CLIP</a> - Copy STDIN to the Windows clipboard.<br>
<a href="http://gallery.technet.microsoft.com/scriptcenter/fb742f92-e594-4d0c-8b79-27564c575133">Install a Font remotely with VBS</a> - Microsoft Script Center<br>
Equivalent PowerShell: none but VBScript Sendkeys can be called using <a href="../ps/new-object.html">New-Object</a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

