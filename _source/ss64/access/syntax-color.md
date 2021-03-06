---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Microsoft Access Colors</h1>
<p>Colours in Microsoft access can be set, manually or using VBA to either a Long number or (in recent versions of Access) a Hex color code. </p>
<p>The default numeric number type used by Access is a 16 bit integer (max=65,535), and 6 Hex codes will exceed this range, for example FFFFFF is 16,777,215 </p>
<p>Therefore when working with colors it is important to use a 32-bit  Long (max=2,147,483,647),<br>
for a hex constant like <span class="code">&amp;FF005F&amp;</span> the extra <span class="code">&amp;</span> on the end denotes a 32 bit Long instead of a 16 bit integer.</p>
<p>Converting hex colors to long for compatibility with older versions of Access can be done with the <a href="rgb.html">RGB</a> function.</p>
<p>The color of many objects can be set using the .backcolor and .forecolor properties</p>
<p><b>Examples</b></p>
<p class="code">Me!txtAddress.BackColor = <b>&amp;</b>FF005F<b>&amp;</b></p>
<p class="code">Me!txtPostcode.ForeColor = <b>&amp;</b>FF005F<b>&amp;</b></p>
<h2>Windows Color Constants </h2>
<p>To set colors based on the users current desktop theme, use the constants below.<br>
To set colors in VBA use the numeric value instead of the name.</p>
<pre>System Scrollbar       -2147483648
System Desktop         -2147483647
System Active Title Bar   -2147483646
System Inactive Title Bar -2147483645
System Menu Background    -2147483644
System Window          -2147483643
System Window Frame    -2147483642
System Menu Text       -2147483641
System Window Text     -2147483640
System Title Bar Text  -2147483639
System Active Border   -2147483638
System Inactive Border -2147483637
System Application Background -2147483636
System Highlight       -2147483635
System Highlight Text  -2147483634
System Button Face     -2147483633
System Button Shadow   -2147483632
System Alternate Row   -2147483631
System Button Text     -2147483630
System Inactive Caption Text -2147483629
System 3D Highlight    -2147483628
System 3D Shadow       -2147483627
System 3D Light        -2147483626
System Tooltip Text    -2147483625
System Tooltip Background -2147483624
System Static          -2147483623
System Static Text     -2147483622
System Gradient Active Caption -2147483621
System Gradient Inactive Caption -2147483620
System Menu Highlight  -2147483619
System Menu Bar        -2147483618</pre>
<p class="quote"><i>“Speed kills colour... the gyroscope, when turning at full speed, shows up gray” ~ Paul Morand</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-references.html">Access Form References</a> - Reference controls on subforms.<br>
<a href="../colour.html">Mix colour codes</a><br>
<a href="http://www.endprod.com/colors/">List of Access color codes</a></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-color.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
