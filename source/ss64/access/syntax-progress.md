---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Progress meter</h1>
<p>Display a progress meter or optional specified text in the MS Access status bar.</p>
<pre>Syntax
      <i>expression</i> .SysCmd(<i>Action </i>[, <i>Argument2, Argument3</i>] )

Key
    <i>Action</i> 	 A AcSysCmdAction constant that identifies the type of action to take.
              This set of constants applies to a progress meter.
              The SysCmd method returns a null if these actions are successful.
              Otherwise, Microsoft Access generates a run-time error.

   <i>Argument2</i>  The <b>text</b> to be displayed left-aligned in the status bar.
              This argument is required when the action argument is acSysCmdInitMeter,
              acSysCmdUpdateMeter, or acSysCmdSetStatus;
              this argument isn't valid for other action argument values.

   <i>Argument3</i>  A <b>numeric</b> expression that controls the display of the progress meter.
              This argument is required when the action argument is acSysCmdInitMeter;
              this argument isn't valid for other action argument values.</pre>
<p>You can display a progress meter in the status bar for any operation that has a known duration or number of steps, and update it to indicate the progress of the operation. Typically a loop with a known number of iterations or a Form Wizard with a known number of Steps.</p>
<p>To display a status bar progress meter, first call the SysCmd method with the <span class="code">acSysCmdInitMeter</span> action argument, and the <i>text</i> and <i>value </i>arguments. When the action argument is <span class="code">acSysCmdInitMeter</span>, the <i>value</i> argument is the maximum value of the meter, or 100 percent.</p>
<p>To update the meter (to show new progress), call  SysCmd with the <span class="code">acSysCmdUpdateMeter</span> action argument and an appropriate <i>value</i> argument. </p>
<p>When the action argument is <span class="code">acSysCmdUpdateMeter</span>, the SysCmd method uses the <i>value</i> argument to calculate the percentage displayed by the meter. For example, if you set the maximum value to 200 and then update the meter with a value of 100, the progress meter will be half-filled. </p>
<p>To change the text displayed in the status bar, call SysCmd with the <span class="code">acSysCmdSetStatus</span> action argument and the new <i>text </i>argument. <br>
For example, during a sort you might change the text to "<i>Sorting...</i>". </p>
<p>The status bar text is displayed using a proportional font, so the number of characters that will fit may vary - keep the messages short.</p>
<p>To remove any existing text from the status bar, set the text argument to a single space " " (n.b. not a zero length string).</p>
<p>Example</p>
<pre>' Initialise meter
varReturn = SysCmd(acSysCmdInitMeter, " ", 100)  
' Set to halfway
varReturn = SysCmd(acSysCmdSetStatus, "Thinking...", 50)

'wait for 3 seconds
Dim WAIT As Double
WAIT = Timer
While Timer &lt; WAIT + 3
    DoEvents  
Wend 
' Clear message
varReturn = SysCmd(acSysCmdSetStatus, " ")
</pre>
<p class="quote"><i>“The greatness of a nation and its moral progress can be judged by the way its animals are treated” ~ Mahatma Gandhi</i><!-- #BeginLibraryItem "/Library/foot_access.lbi" --></p><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-progress.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

