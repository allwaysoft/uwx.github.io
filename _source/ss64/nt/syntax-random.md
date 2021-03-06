---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Random Numbers</h1>
<p>The Windows CMD shell contains a <a href="syntax-variables.html#dynamicvariables">dynamic variable</a> called <span class="code">%RANDOM%</span> that can be used to generate random numbers.</p>
<p> %RANDOM% generates a random integer from 0 to 32,767 (inclusive)<br>
<br>
<span class="code"> &nbsp;0 ≤ %RANDOM% ≤ 32767 </span></p>
<p>The range of numbers can be made smaller than 32767 with a little arithmetic,<br>
for example to generate a range between 1 and 500:</p>
<p class="code">@ECHO OFF<br>
SET /a _rand=(%RANDOM%*<b>500</b>/32768)+1 <br>
ECHO Random number %_rand% </p>
<p>(The <a href="set.html">Set /a</a> will always round down)</p>
<p>If you try, it may look as though a larger range than 32767 will work, but doing this will produce gaps, for example changing 500 in the above to 65536 will result in a sequence of "random" numbers which only consists of odd numbers.</p>
<p>The distribution of numbers returned will be a determined by both the range and the quantity of numbers drawn. </p>
<p>For example if you are drawing random integer numbers where each number is between 0 and 100 then on average: </p>
<ul>
<li> If you draw 10 numbers then you should expect around 6% to be duplicates. </li>
<li> If you draw 100 numbers then just over 63% will be duplicates i.e. matching one or more of the other 99 numbers. </li>
<li> If you draw 1,000 numbers then almost all will be duplicates as there are only 100 possible values.</li>
</ul>
<h2 id="firstHeading">Random vs <a href="http://en.wikipedia.org/wiki/PRNG">Pseudorandom</a> numbers</h2>
<blockquote>
<p>A pseudorandom  sequence is not truly random but is determined by a small set of initial values (state), the initial seed is often based on the clock time. In the case of the CMD <span class="code">%RANDOM%</span> the seed is based on the clock time when the CMD session started. This can be problematic when running a batch file, if the script always takes about the same time to run before calling <span class="code">%RANDOM%</span> then the number returned will always lie within a small predictable range. </p>
<p>As an example create a file <span class="code">numbers.cmd:</span></p>
<p class="code">@Echo off<br>
Echo %RANDOM%</p>
<p>Then call the above with</p>
<p class="code">CMD /c numbers.cmd<br>
CMD /c numbers.cmd<br>
CMD /c numbers.cmd</p>
</blockquote>
<p>Johannes Baagøe has published a comparison of <a href="https://web.archive.org/web/20120802042822/http://baagoe.org/en/w/index.php/Better_random_numbers_for_javascript">better</a> random numbers for javascript. The <a href="http://jsperf.com/pseudo-random-number-generators">fastest</a> of these is Alea(), which you can find a copy of below. This has a number of advantages, you can create much larger numbers, it will create a lot of numbers quickly and if you call it passing a seed number then the results become repeatable - you can create exactly the same sequence of random numbers again at a later date.</p>
<pre>// random.js
// call this from the command line with:
// <a href="../vb/cscript.html">cscript</a> //E:jscript random.js

// Calling without a seed, the current time will be used as a seed
var srandom=Alea();

// Calling with a seed will return the same value for the same seed
//var seed=1234
//var srandom=Alea(seed);

var i=0

  // Return 10 random numbers
while ( i &lt; 10 ) {
  // Return a number between 1 and 500 million
  WScript.echo(Math.floor((srandom()*500000000)+1) );
  i++;
} 

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i &lt; data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h &gt;&gt;&gt; 0;
      h -= n;
      h *= n;
      n = h &gt;&gt;&gt; 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n &gt;&gt;&gt; 0) * 2.3283064365386963e-10; // 2^-32
  };

  mash.version = 'Mash 0.9';
  return mash;
}

function Alea() {
  return (function(args) {
    // Johannes Baagoe &lt;baagoe@baagoe.com&gt;, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    if (args.length == 0) {
      args = [+new Date];
    }
    var mash = Mash();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i &lt; args.length; i++) {
      s0 -= mash(args[i]);
      if (s0 &lt; 0) {
        s0 += 1;
      }
      s1 -= mash(args[i]);
      if (s1 &lt; 0) {
        s1 += 1;
      }
      s2 -= mash(args[i]);
      if (s2 &lt; 0) {
        s2 += 1;
      }
    }
    mash = null;

    var random = function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
    random.uint32 = function() {
      return random() * 0x100000000; // 2^32
    };
    random.fract53 = function() {
      return random() + 
        (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };
    random.version = 'Alea 0.9';
    random.args = args;
    return random;

  } (Array.prototype.slice.call(arguments)));
};

/* licensed according to the <a href="http://en.wikipedia.org/wiki/MIT_License">MIT - Expat license</a>:

Copyright (C) 2010 by Johannes Baagoe &lt;baagoe@baagoe.org&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */</pre>
<p class="quote"><i>“Anyone who attempts to generate random numbers by deterministic means is, of course, living in a state of sin” ~ John von Neumann</i>
</p><p><b>Related:</b></p><p>PowerShell Equivalent: <a href="../ps/get-random.html">Get-Random</a><br>
VBScript: <a href="../vb/rnd.html">Rnd</a> - Return a pseudorandom number.<br>
<a href="http://www.random.org/">Random.org</a> - Generate true random numbers online.<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-random.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
