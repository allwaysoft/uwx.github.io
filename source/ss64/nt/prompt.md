---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PROMPT</h1> 
<p>Change the cmd.exe command prompt.</p>
<pre>Syntax
      PROMPT [<i>text</i>] 
   
Key
   <i>text</i> : a text string.</pre>
<p>The prompt text can be made up of normal characters and the following 
special codes:</p>
<pre>   $A  &amp;           (Ampersand) 
   $B  |           (pipe) 
   $C  (           (Left parenthesis) 
   $D Current date 
   $E Escape code  (<a href="../ascii.html">ASCII code</a> 27) 
   $F  )           (Right parenthesis) 
   <b>$G</b>  &gt;           (greater-than sign) 
   $H  Backspace   (erases previous character) 
   $L  &lt;           (less-than sign) 
   $M  Display the remote name for Network drives
   $N  Current drive 
   <b>$P</b>  Current drive and path 
   $Q  =           (equal sign) 
   $S              (space) 
   $T  Current time 
   $V  Windows NT version number 
   $_  Carriage return and linefeed 
   $$  $           (dollar sign)
   $+  Will display plus signs (+) one for each level of the PUSHD directory stack</pre>
<p>The default prompt is <span class="code">$P$G</span> (drive/path followed by &gt; )<br>
</p>
<p>The PROMPT command is highly dependent on the <span class="code">%PROMPT%</span> environment variable,  editing the variable will lead to the same result as using the PROMPT command (e.g. <span class="code">PROMPT $P$G</span> is the same as <span class="code">SET PROMPT=$P$G</span>)</p>
<p>If the %PROMPT% variable is deleted, the prompt will automatically revert to the default.</p>
<p>To set  the CMD prompt for all sessions, set a permanent environment variable (SETX) with the appropriate prompt text. e.g. <br>
<br>
<span class="code">SETX PROMPT $M$_$P$G </span><br>
</p>
<p>The prompt variable only holds the prompt definition, the  final prompt characters are calculated by the CMD console.  If an attempt is made to set a prompt using a dollar sign followed by any character not in the list of codes above, then everything after that dollar sign will be ignored.</p>
<p> Limitations for prompt length are 400 symbols in Windows XP / Vista and 511</p>
<p>The maximum length of a prompt string (in Widows 7 and above) is 511 characters. If a longer prompt is set it will be silently truncated to the first  511 symbols. The dollar codes count as 1 character.</p>
<p>Hitting the limit also produces different results in XP/Vista and the fresher versions: 1.On XP/Vista it produces error message 2.On 7 and above it just only takes the first 511 symbols.</p>
<h2>Errorlevels</h2>
<blockquote>
<p> When <a href="cmd.html">CMD Command Extensions</a> are enabled (the default)</p>
<p>If the prompt was successfully changed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If prompt could not be changed = 1</p>
<p>PROMPT does not error when passed invalid switches - it will just set them as part of the prompt.</p></blockquote>
<p><b>Examples</b></p>
<p>Display the UNC path whenever you are using a network drive (mapped with NET USE)<br>
<code class="code">PROMPT $M$_$P$G</code></p>
<p>Simulate an HP-UX style prompt with the  computername and the current folder on  separate lines:<br>
<code class="code">PROMPT=$p$_%username%@%computername%:.</code></p>
<p>Display the  time, backspacing to hide the milliseconds:<br>
<code class="code">PROMPT=$T$H$H$H$G$S</code></p>
<p>Restore the default prompt:<br>
<code class="code">PROMPT $P$G</code></p>
<p>PROMPT is an <a href="syntax-internal.html">internal</a> command. If <a href="cmd.html">Command Extensions</a> are disabled the commands <span class="code">$M</span> and <span class="code">$+</span> are not supported.</p>
<p><i class="quote">“All actions are judged by the motive prompting them”  ~ Muhammad</i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="setx.html">SETX</a> - Set an environment variable permanently.<br>
  Powershell: Create a function called <a href="http://blogs.msdn.com/powershell/archive/2006/07/21/Setting--the-console-title-to-be-your-current-working-directory.aspx">Prompt</a> (save in Profile.ps1 to make permanent) <br>
  Equivalent bash command (Linux): variable <a href="../bash/syntax-prompt.html">$PROMPT_COMMAND</a> </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="prompt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

