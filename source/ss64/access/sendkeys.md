---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Sendkeys</h1>
<p>  Send one or more keystrokes to the active window as if typed at the keyboard.</p>
<pre>Syntax
      SendKeys <i>string</i>[, <i>wait</i>]

Key
   <i>string</i> 	 String expression specifying the keystrokes to send.

   <i>Wait</i>     Boolean value specifying the wait mode.

            If False (default), control is returned to the
            procedure immediately after the keys are sent.
            If True, keystrokes must be processed before control
            is returned to the procedure.</pre>
<p> Each key is represented by one or more characters. To specify a single keyboard character, use the character itself. For example, to represent the letter A, use "A" for <i>string</i>. </p>
<p>A string of characters can be sent: e.g. "SS64"</p>
<p>To specify keys combined with any combination of the SHIFT, CTRL, and ALT keys, precede the key code with one or more of the following codes:</p>
<pre> SHIFT  +
 CTRL   ^
 ALT    %</pre>
<p>Character codes for other keyboard characters:</p>
<pre> BACKSPACE {BACKSPACE}, {BS}, or {BKSP} 
 BREAK     {BREAK}
 <a href="../case.html">CAPS LOCK</a> {CAPSLOCK}
 DEL or DELETE {DELETE} or {DEL}
 END   {END}
 ENTER {ENTER} or ~
 TAB   {TAB}
 ESC   {ESC}
 HELP  {HELP}
 HOME  {HOME}
 INS or INSERT {INSERT} or {INS}
 DOWN ARROW  {DOWN}
 LEFT ARROW  {LEFT}
 RIGHT ARROW {RIGHT}
 UP ARROW    {UP}
 NUM LOCK 	  {NUMLOCK}
 SCROLL LOCK {SCROLLLOCK}
 PAGE DOWN   {PGDN}
 PAGE UP {PGUP}
 F1 {F1}
 F2 {F2}
 F3 {F3}
 F4 {F4}
 F5 {F5}
 F6 {F6}
 F7 {F7} 
 F8 {F8}
 F9 {F9}
 F10 {F10}
 F11 {F11}
 F12 {F12}
 F13 {F13}
 F14 {F14}
 F15 {F15}
 F16 {F16}</pre>
<p>The plus sign <span class="code">+</span>, caret <span class="code">^</span>, percent sign <span class="code">%</span>, tilde <span class="code">~</span>, and parentheses <span class="code">( </span>and <span class="code">)</span> have special meanings to SendKeys. To specify one of these characters, enclose it within braces: <span class="code">{+}</span> </p>
<p>To specify that any combination of SHIFT, CTRL, and ALT should be held down while several other keys are pressed, enclose the code for those keys in parentheses. </p>
<p>For example, to specify to hold down SHIFT while E and C are pressed, use <span class="code">+(EC)<br>
</span>To specify to hold down SHIFT while E is pressed, followed by C without SHIFT, use: <span class="code">+EC</span></p>
<p>To specify repeating keys, use the form</p>
<p class="code"> {key number}</p>
<p>The SendKeys() statement can be used in VBA.</p>
<p><b>Examples</b></p>
<p>'Send the string SS64 to the active application:<br>
<span class="code">SendKeys "SS64"</span></p>
<p>'Press Control and F2 in the active application:<br>
<span class="code">SendKeys ^{F2}</span></p>
<p>'press the LEFT ARROW key 42 times:<br>
<span class="code">SendKeys {LEFT 42}</span></p>
<p class="quote"><i>“Begin at the beginning, the King said, very gravely, and go on till you come to the end: then stop” ~ Lewis Carroll</i></p>
<p><b>Related:</b></p>
<p><a href="setfocus.html">SetFocus</a> - Move the focus to a specific control on a form.<!-- #BeginLibraryItem "/Library/foot_access.lbi" --></p><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="sendkeys.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

