---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Rnd</h1>
<p>  Generate a <a href="../nt/syntax-random.html">pseudorandom</a> number, a value between 0 and 1 (less than 1 but greater than or equal to zero.)</p>
<pre>Syntax
      Rnd[(<i>number</i>)]

Key
   <i>number</i>    This argument is a Single or any valid numeric
             expression, it determines how Rnd will generates
             a random number:</pre>
<table><tbody><tr><th><p>If <i>number</i> is</p></th><th><p>Rnd generates</p></th></tr>
<tr><td><p>Less than zero</p></td><td><p>The same number every time, using <i>number</i> as the seed.</p></td></tr>
<tr><td><p>Greater than zero</p></td><td><p>The next random number in the sequence.</p></td></tr><tr><td><p>Equal to zero</p></td><td><p>The most recently generated number.</p></td></tr>
<tr><td><p>Not supplied</p></td><td><p>The next random number in the sequence.</p></td></tr></tbody></table>
<p>For any given initial seed, the same number sequence is generated because each successive call to the Rnd() function uses the previous number as a seed for the next number in the sequence.</p>
<p>Before calling Rnd, use the <span class="code">Randomize</span> statement to initialize the random-number generator with a seed based on the system timer.</p>
<p>To produce random integers in a given range, use this formula:</p>
<p class="code"><a href="int.html">Int</a>((upperbound - lowerbound + 1) * Rnd + lowerbound)</p>
<p>The Rnd() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim intDemo as Integer<br>
Randomize<br>
</span>'A random number between 1 and 6<br>
<span class="code"> intDemo = Int ((6 - 1 + 1) * Rnd + 1)</span></p>
<p>'A random number between 1 and 100 <span class="code"><br>
intDemo = Int ((100 - 1 + 1) * Rnd + 1)</span></p>
<p>'A random number between 50 and 100 <span class="code"><br>
intDemo = Int ((100 - 50 + 1) * Rnd + 50)</span></p>
<p class="quote"><i>“All human actions have one or more of these seven causes: chance, nature, compulsions, habit, reason, passion and desire” ~ Aristotle</i></p>
<p><b>Related:</b></p>
<p><a href="asc.html">Asc</a> - The Ascii code of a character.<br>
  Equivalent PowerShell cmdlet: <a href="../ps/get-random.html">Get-Random</a><br>
<a href="../nt/syntax-random.html">Random Numbers</a> in CMD or .js</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="rnd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

