---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Common Parameters </h1>
<p>  PowerShell includes several common parameters that all cmdlets support. </p>
<pre>   -Verbose        Generate detailed trace info about the operation.(Boolean)

   -Debug          Generate programmer-level detail about the operation.(Boolean)
    
   -ErrorAction    Determine how the cmdlet responds when an error occurs.
                   Valid values: <b>Continue</b> [default], <b>Stop</b>, <b>SilentlyContinue</b>, <b>Inquire</b>. (Enum)
                   e.g. -EA SilentlyContinue

   -ErrorVariable  Specify a variable to store errors from the command during processing.
                   This variable is populated in addition to $error. (String)

   -OutVariable    Specify a variable to store output from the command during processing.(String)

   -OutBuffer      The number of objects to buffer before calling the next 
                   cmdlet in the pipeline.(Int32)</pre>
<p> System State Parameters:</p>
<pre>   -WhatIf         Explain what will happen if the command is executed, without actually
                   executing the command.(Boolean ) -whatif:$false or -whatif:$true

   -Confirm        Prompt the user for permission before performing any action that
                   modifies the system.(Boolean) -Confirm:$false or -Confirm:$true</pre>

<p>Ubiquitous Parameters:</p>
<pre>    -Confirm       Prompt the user for permission before performing any action that
                   modifies the system.(Boolean)

    -Debug         Provide programming-level information about the operation (boolean)

    -ErrorAction   Control command behavior when error occurs (enum)
                   Valid values: <b>Continue</b> [default], <b>Stop</b>, <b>SilentlyContinue</b>, <b>Inquire</b>. (Enum)
                   e.g. -EA SilentlyContinue

    -ErrorVariable Name of variable (in addition to $error) in which 
                   to place objects to which an error has occurred (string)

    -OutputBuffer  Control the number of objects to be buffered between this 
                   command and the next (useful for tweaking performance) (int32)
                          
    -OutVariable   Name of variable in which to place output objects
                   (equivalent to piping the command Set-Variable -passthru true) (string)

    -Verbose       Provide detailed information about the operation (boolean)

    -WhatIf        Explain what will happen if the command is executed, without actually
                   executing the command.(Boolean)</pre>
<p>$ErrorVariable can be useful for logging errors as part of a pipeline process i.e. when only a few out of many items may fail:</p>
<p class="code">PS C:&gt; some-pscmdlet | foreach { <br>
&nbsp;&nbsp;another-pscmdlet -options blah -errorvariable ErrFlag<br>
&nbsp;&nbsp;if ($ErrFlag) {  Echo "$_.name failed" }<br>
}
</p>
<p>The <span class="code">-confirm</span> parameter allows dropping into the runtime command line while running a PowerShell v2 scriptCmdlet:<br>
The confirmation prompt is<span class="code"> [Y] Yes [A] All [N] No [L] No to all [S] Suspend</span><br>
choosing S will drop you at the command prompt where you can echo variables, make changes etc before typing EXIT to resume running the scriptCmdlet.</p>
<p>Some common parameters may have no effect in some cmdlets, this does not raise an error.</p>
<p><b>Examples</b></p>
<p><span class="code">PS C:\&gt; Del $somefile -ErrorVariable somevariable</span><br>
<br>
Notice that the error variable is not prefixed with a $ here, using <span class="code">$somevariable</span> will not work. </p>
<p>If  the ErrorVariable  name is prefixed with a <span class="code">+</span> then PowerShell will ADD the errors to that variable:</p>
<p class="code">PS C:\&gt; Del $somefile -ErrorVariable +somevariable<br>
PS C:\&gt; $somevariable.count</p>
<p><span class="code">-ErrorAction</span> and <span class="code">-ErrorVariable</span>,  have defined parameter aliases  so you can just type <span class="code">-EA</span> and <span class="code">-EV</span></p>
<p class="quote"><i>“Friendship is born at that moment when one person says to another, What! You, too? I thought I was the only one” ~ C. S. Lewis</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-args.html">Parameters</a> - Command Line Parameters  param() and $args[]<br>
<a href="get-help.html">get-help</a>  - Open the help file,  list  parameters for a cmdlet.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="common.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

