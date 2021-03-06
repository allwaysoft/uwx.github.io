---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Functions</h1> 
<p>A block of code may be contained within a function for easy re-use.<br>
To create a function, call the <b>function</b> keyword followed by a name for the function,  then include your code inside a pair of curly braces.</p>
<p class="code"><b>function</b> Add-Numbers<br>
<b>{<br>
</b> &nbsp;$args[0] + $args[1]<b><br>
}</b></p>
<p class="code">PS C:\&gt; Add-Numbers 5 10<br>
15</p>
<p>A similar function with named <a href="syntax-args.html">parameters</a>:</p>
<p class="code"><b>function</b> Output-SalesTax<br>
<b>{</b><br>
&nbsp;param<b>(</b> [int]$Price, [int]$Tax <b>)<br>
</b>&nbsp;$Price + $Tax<b><br>
}</b></p>
<p class="code">PS C:\&gt; Output-SalesTax -price 1000 -tax 38<br>
1038</p>
<p>To display the  definition of a function several methods can be used:</p>
<p><span class="code">cat function:Add-Numbers<br>
</span>or <span class="code"><br>
${function:Add-Numbers}<br>
</span>or <span class="code"><br>
(get-command Add-Numbers).definition</span><br>
</p>
<p>To list all functions in the current session:<span class="code"> <a href="get-command.html">get-command</a> -CommandType function</span></p>
<p>N.B in a block of code you need to define the function <b>before </b>you call it.</p>
<p>Don't add brackets around the function parameters:</p>
<p><span class="code">$result = Add-Numbers (5, 10) --Wrong!</span><br>
<span class="code">$result = Add-Numbers 5 10 &nbsp;&nbsp;&nbsp;--Right</span></p>
<p>PowerShell does not save functions or filters permanently by default. So if you close and reopen PowerShell, the function/filter will no longer be available. To make it permanent, add the function to your PowerShell <a href="syntax-profile.html">$Profile</a> file.</p>
<p>When you call the function name, the code within the function will run, A function can accept imported values either as arguments or through the  pipeline. If the function returns any values, they can be assigned to variables or passed to other functions or cmdlets.</p>
<p>Function or Filter definition:</p>
<pre class="code"><b>function</b> [<i>scope_type</i>:]<i>name</i>
 { 
  [ param(<i>param_list</i>) ]
   <i>script_block
 </i>}</pre>
<pre class="code"><b>filter</b> [<i>scope_type</i>:]<i>name</i>
 {
  [ param(<i>param_list</i>) ]
  <i>script_block</i> 
 }</pre>
<p>The difference between a filter function and a regular function is the way they handle items passed through the pipeline:</p>
<p>With a regular function, pipeline objects  are bound to the<span class="code"> $input</span> <a href="syntax-automatic-variables.html">automatic variable</a>, and execution is blocked until all input is received. The function then begins processing the data.</p>
<p>With a filter function, data is processes while it is being received, without waiting for all input. A filter receives each object from the pipeline through the <span class="code">$_</span> <a href="syntax-automatic-variables.html">automatic variable</a>, and the script block is processed for each object.</p>
<p>The <span class="code"><i>param_list</i></span> is an optional list of comma separated parameter names, these may also be preceded by their data types in brackets. This makes the function more readable than  using <span class="code">$args</span> and also gives you the option to supply default values.</p>
<h2>"Advanced" function ?</h2>
<blockquote>
<p>An Advanced PowerShell function contains the <span class="code">[cmdletbinding()]</span> attribute. This adds several capabilities such as additional parameter checking, and the ability to easily use <a href="write-verbose.html">Write-Verbose</a>. <br>
A function with cmdletbinding  will throw an error if unhandled parameter values appear on the command line.</p>
<p>Advanced PowerShell functions typically include <a href="syntax-function-input.html">Begin..Process..End</a> blocks for processing the input data,  documentation and auto-help, including the <a href="syntax-args.html">parameters</a>.</p>
</blockquote>
<h2>Variable Scope</h2>
<blockquote>
<p>By default, all variables created in functions are local, they only exist within the function, though they are still visible if you call a second function from within the first one.</p>
<p>To persist a variable, so the function can be called repeatedly and the variable will retain it's last value, prepend <span class="code">$script:</span> to the variable name, e.g. <span class="code">$script:myvar</span></p>
<p>To make a variable global prepend <span class="code">$global:</span> to the variable name, e.g. <span class="code">$global:myvar</span></p>
</blockquote>
<p><b>Example Functions</b></p>
<p>A function to find all files on the C: drive owned by a particular user:</p>
<pre><b> function</b> Get-ByOwner
<b> {</b>
   Get-ChildItem -recurse C:\ | get-acl | where {$_.Owner -match <span class="code">$args[0]</span>} 
<b> }<br></b><br>PS C:\&gt; Get-ByOwner JackFrost</pre>
<p>A function to display PowerShell help on SS64.com, this will launch your default web browser:</p>
<pre><b> function</b> Get-Help2
<b> {</b><br>   param([string]$command)
   Start-process -filepath "http://ss64.com/ps/$command.html"
 <b>}</b></pre>
<p>You can then do:<br>
<span class="code">PS C:\&gt; Get-Help2 -command set-acl</span><br>
<br>
or because there is only one parameter:<br>
<span class="code">PS C:\&gt; Get-Help2 set-acl</span></p>
<p>A filter to display only files smaller than a given size:</p>
<pre><b> filter</b> FileSizeBelow($size) <b>{</b> if ($_.length -le $size) { $_ } <b>}</b></pre>
<p class="code">PS C:\&gt; gci \\server64\workgroups -filter | <b>FileSizeBelow</b> 200kb<br>
PS C:\&gt; gci -recurse \\server64\workgroups | ?{!$_.PSIsContainer} | <b>FileSizeBelow</b> 100mb</p>
<p>A function with default values:</p>
<pre><b> function</b> write-price<b>
 {</b>
  param<b>(</b>[string]$description = "unknown",
        [int]$price = 100<b>)</b>
  Write-Output "$description ..... $price"
<b> }</b>

PS C:\&gt; write-price -price 250 -description Hammer<br>Hammer ..... 250</pre>
<p>A filter to find files owned by a specific user: </p>
<pre><b> filter</b> ownedbyme
<b> {</b>
  if ($_.Owner -match "JackFrost") {$_}
<b> }</b>

PS C:\&gt; <a href="get-childitem.html">gci</a> -recurse C:\ | Get-Acl | where {$_ | <b>ownedbyme</b>}</pre>
<p class="quote"><i>“The function of the imagination is not to make strange things settled, so much as to make settled things strange” ~ G. K. Chesterton</i></p>
<p><b>Related:</b></p>
<p><a href="new-alias.html">New-Alias</a> -   Create a new (short) alias name for your function.<br>
<a href="syntax-function-input.html">Begin..Process..End</a> - Function Input Processing<br>
<a href="syntax-scriptblock.html">Scriptblock</a> - A collection of statements<br>
<a href="syntax-ref.html">Ref vars</a> - Passing a reference variable to a function. </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-functions.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

