---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>acMsgBoxStyle</h1>
<table width="100%"><tbody><tr> <th>
              Member
            </th> <th>
              Value
            </th> <th>
              Description
            </th> </tr><tr> <td> <p> vbOKOnly </p> </td> <td> <p>0</p> </td> <td> <p>Displays OK button only.</p> </td> </tr>
<tr> <td> <p> vbOKCancel </p> </td> <td> <p>1</p> </td> <td> <p>Displays OK and Cancel buttons.</p> </td> </tr>
<tr> <td> <p> vbAbortRetryIgnore </p> </td> <td> <p>2</p> </td> <td> <p>Displays Abort, Retry, and Ignore buttons.</p> </td> </tr>
<tr> <td> <p> vbYesNoCancel </p> </td> <td> <p>3</p> </td> <td> <p>Displays Yes, No, and Cancel buttons.</p> </td> </tr>
<tr> <td> <p> vbYesNo </p> </td> <td> <p>4</p> </td> <td> <p>Displays Yes and No buttons.</p> </td> </tr>
<tr> <td> <p> vbRetryCancel </p> </td> <td> <p>5</p> </td> <td> <p>Displays Retry and Cancel buttons.</p> </td> </tr>
<tr> <td> <p> vbCritical </p> </td> <td> <p>16</p> </td> <td> <p>Displays Critical Message icon + System beep.</p> </td> </tr>
<tr> <td> <p> vbQuestion </p> </td> <td> <p>32</p> </td> <td> <p>Displays Warning Query icon + System beep.</p> </td> </tr>
<tr> <td> <p> vbExclamation </p> </td> <td> <p>48</p> </td> <td> <p>Displays Warning Message icon + System beep.</p> </td> </tr>
<tr> <td> <p> vbInformation </p> </td> <td> <p>64</p> </td> <td> <p>Displays Information Message icon + System beep.</p> </td> </tr>
<tr> <td> <p> vbDefaultButton1 </p> </td> <td> <p>0</p> </td> <td> <p>First button is default.</p> </td> </tr>
<tr> <td> <p> vbDefaultButton2 </p> </td> <td> <p>256</p> </td> <td> <p>Second button is default.</p> </td> </tr>
<tr> <td> <p> vbDefaultButton3 </p> </td> <td> <p>512</p> </td> <td> <p>Third button is default.</p> </td> </tr>
<tr> <td> <p> vbApplicationModal </p> </td> <td> <p>0</p> </td> <td> <p>Application is modal. The user must respond to the message box before continuing work in the current application.</p> </td> </tr>
<tr> <td> <p> bnSystemModal </p> </td> <td> <p>4096</p> </td> <td> <p>System is modal. All applications are suspended until the user responds to the message box.</p> </td> </tr>
<tr> <td> <p> vbMsgBoxSetForeground </p> </td> <td> <p>65536</p> </td> <td> <p>Specifies the message box window as the foreground window.</p> </td> </tr>
<tr> <td> <p> vbMsgBoxRight </p> </td> <td> <p>524288</p> </td> <td> <p>Text is right-aligned.</p> </td> </tr>
<tr> <td> <p> vbMsgBoxRtlReading </p> </td> <td> <p>1048576</p> </td> <td> <p>Specifies text should appear as right-to-left reading on Hebrew and Arabic systems.</p> </td> </tr></tbody></table>
<p>More than one of the options can be chosen, add numbers together to combine them. </p>
<ul>
<li>The first group of values (0–5) describes the number and type of buttons displayed in the dialog box. </li>
<li>The second group (16, 32, 48, 64) describes the icon style. </li>
<li>The third group (0, 256, 512) determines which button is the default.</li>
<li> The fourth group (0, 4096) determines the modality of the message box, </li>
<li>The fifth group (65536 +) specifies whether or not the message box window is the foreground window, along with the alignment and direction of the text. </li>
</ul>
<p>When adding numbers to create a final value for the Buttons argument, use only one number from each group.</p>
<p>System beeps:   if no button icon is added then no system beep will be produced.</p>
<p>In addition to the above there is an HTML help option for MsgBox (vbMsgboxHelpButton) unfortunately this is <a href="http://www.fmsinc.com/FRee/NewTips/VBA/MsgBoxFailsHelpFile/index.html">broken</a> in Access 2007 and above and so it's use is best avoided.</p>
<p>Example</p>
<p class="code">vbOKCancel + vbExclamation</p>
<p class="quote"><i>“An honest tale speeds best being plainly told” ~ William Shakespeare (Richard III)</i></p>
<p><b>Related:</b></p>
<p><a href="inputbox.html">InputBox</a> - Prompt for user input.<br>
<a href="msgbox.html">MsgBox</a> - Display a message in a dialogue box.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="acmsgboxstyle.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

