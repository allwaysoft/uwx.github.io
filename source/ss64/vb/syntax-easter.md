---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Easter function</h1> 
<p>The Pascha function  below will calculate the date of Easter Sunday. The DemoEaster function simply calls Pascha() passing a range of years, it will work for years far into the future (millions of years.)</p>
<p>[Start Easter.vbs]</p>
<pre>DemoEaster 1550, 2100

Sub DemoEaster (Y1, Y2)
Dim Y, M, D
for Y = Y1 to Y2
  Pascha Y, M, D
  Wscript.echo St, Y &amp; "-0" &amp; M &amp; "-" &amp; LdgZ(D)
Next
End sub
 
Function LdgZ(ByVal N)
  if (N&gt;=0) and (N&lt;10) then LdgZ = "0" &amp; N else LdgZ = "" &amp; N
End function

Sub Pascha(iYear, iMonth, iDay)
 'Reads Year
 'Returns the Month and Day of Easter Sunday.
  Dim C, G, K, I, J, L
 
  G = iYear mod 19
 
  if iYear &gt; 1582 then
    C = iYear \ 100
    K = (C - 17) \ 25
    I = C - (C \ 4) - ((C - K) \ 3) + 19 * G + 15
    I = I mod 30
    I = I - (I \ 28) * (1 - (I \ 28) * (29 \ (I + 1)) * ((21 - G) \ 11))
    J = iYear + (iYear \ 4) + I + 2 - C + (C \ 4)
    J = J mod 7
  else
    I = ((19 * G) + 15) mod 30
    J = (iYear + (iYear \ 4) + I) mod 7
  end if
 
  L = I - J
  iMonth = 3 + ((L + 40) \ 44)
  iDay = L + 28 - 31 * (iMonth \ 4)

End sub</pre>
<p> [End Easter.vbs]</p>
<p>The Pascha function above gives a Julian date for Easter in years before 1583 otherwise it returns a standard Gregorian date.</p>
<p>Source: Newsgroups (May 2003) &gt; <a href="http://www.merlyn.demon.co.uk/vb-date2.htm#ESu">Dr J.R. Stockton’s website</a>. The Pascha function  is based on the <a href="https://web.archive.org/web/20140208073159/http://astro.nmsu.edu/~lhuber/leaphist.html">algorithm of Oudin</a> (1940) a recognised algorithm for computing the date of Easter, it can be considered to be in the public domain.</p>
<p>This is the Western/Christian definition of Easter, many other methods exist for <a href="http://en.wikipedia.org/wiki/Computus">calculating Easter</a>, "algorithm of Oudin" is a useful Google search to find other Easter algorithms and programming functions.</p>
<p><b>Example</b></p>
<p class="code">cscript easter.vbs</p>
<p class="quote"><i>“Gather ye rosebuds while ye may, Old Time is still a flying; And that same flower that blooms today, Tomorrow shall be dying” ~ Fredrick O' R. Hayes</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-getdatetime.html">DateTime</a> - Get Date, Time and daylight savings</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-easter.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

