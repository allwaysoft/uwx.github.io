---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>PowerShell Base 36 <a href="syntax-functions.html">functions</a> </h1>
<p>Base 36 is  the most compact case-insensitive alphanumeric numbering system. 
Base 36 is used for Dell <i>Express Service Codes</i>, website url shorteners and many other applications which have a need to minimise human error.</p>
<p>Convert from Decimal (base 10)  to Base 36:</p>
<pre>function convertTo-Base36
{
    [CmdletBinding()]
    param ([parameter(valuefrompipeline=$true, HelpMessage="Integer number to convert")][int]$decNum="")
    $alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    do
    {
        $remainder = ($decNum % 36)
        $char = $alphabet.substring($remainder,1)
        $base36Num = "$char$base36Num"
        $decNum = ($decNum - $remainder) / 36
    }
    while ($decNum -gt 0)

    $base36Num
}</pre>
<p># source: adapted from Tony Marston's <a href="http://www.tonymarston.net/php-mysql/converter.html">PHP code</a> </p>
<p>Convert from Base 36 back to Decimal:</p>
<pre>function convertFrom-base36
{
    [CmdletBinding()]
    param ([parameter(valuefrompipeline=$true, HelpMessage="Alphadecimal string to convert")][string]$base36Num="")
    $alphabet = "0123456789abcdefghijklmnopqrstuvwxyz"
    $inputarray = $base36Num.tolower().tochararray()
    [array]::reverse($inputarray)
    [long]$decNum=0
    $pos=0

    foreach ($c in $inputarray)
    {
        $decNum += $alphabet.IndexOf($c) * [long][Math]::Pow(36, $pos)
        $pos++
    }
    $decNum
}
</pre>
<p># source:<a href="http://www.schnellbach.de/node/19"> Mirko's Blog</a></p>
<p><b>Examples</b></p>
<p class="code">PS C:\&gt; convertTo-Base36 1645205<br> 
Z9G5</p>
<p class="code">PS C:\&gt; convertFrom-base36 z9g5<br>
1645205</p>
<p class="quote"><i>“Failure is not fatal, but failure to change might be” - John Wooden</i></p>
<p><b>Related:</b></p>
<p><a href="../convert.html">Online base 36 converter</a> (Javascript) 
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-base36.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>


