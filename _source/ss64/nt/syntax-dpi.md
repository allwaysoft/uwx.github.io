---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>DPI display settings </h1>
<p>The DPI setting of a display monitor is a measure of the number of dots that are visible in a single inch (Dots-per-Inch or Pixels-per-inch).</p>
<p>DPI is not the same as resolution. (Resolution is the number of horizontal and vertical pixels. For example, 1024 x 768 pixels.) An image with 100 x 100 pixel resolution would be 1 x 1 inch when printed at 100 DPI.</p>
<p>When a display DPI is chosen in Microsoft Windows, you are telling  the system how the attached monitor will display images,  Windows will then rescale to take this into account. </p>
<p>For example changing from 96 DPI to 120 DPI, Windows will assume that you now have a display with closely packed (dense) pixels that  make everything 20% smaller, so to compensate  will scale everything to be   25% larger.</p>
<p>The changes made by adjusting DPI are more subtle than changing screen resolution, but setting DPI correctly can be important for preventing eye strain when using high pixel density displays.</p>
<p>The ideal* DPI for a display can be calculated using <a href="http://www.mathsisfun.com/pythagoras.html">pythagoras</a> as follows:</p>
<p>Given:<br>
W = Width in Pixels<br>H = Height in Pixels<br>S = Diagonal Size in Inches (display size) 
</p><p>Then the DPI = <span class="code">√(W<sup>2</sup> + H<sup>2</sup>) / S<br>
</span>examples <br>
An iPad with a 9.7" screen <span class="code">√(1024<sup>2</sup> + 768<sup>2</sup>) / 9.7= 132</span> DPI<br>
An IBM Thinkpad with a 15" screen <span class="code">√(1920<sup>2</sup> + 1200<sup>2</sup>) / 15.4= 147</span> DPI</p>
<p>* In practice you should select DPI based on individuals eyesight/preference.<br>
It is not advisable to set a DPI lower than 96 as the majority of Windows fonts are not hinted to display correctly at very small sizes.</p>
<h2> Windows 7/2008 DPI settings:</h2>
<blockquote>
<p>96 to 500 DPI <br>
<span class="code">Control Panel | Display | Set Custom Text Size (DPI)<br>
or
<br>
Control Panel | Personalisation | Adjust Font Size (DPI)<br>
<br>
</span>For custom sizes, tick: “<span class="code">Use Windows XP style DPI Scaling</span>”  un-ticking this option will turn on full scaling of all non-DPI aware applications, which can cause fonts to become blurry.</p>
<p>When  Windows SETUP is run to install Windows, the DPI will be set according to the capabilities of the attached monitor.<br>
This will automatically set most high resolution monitors to 120 DPI.</p>
</blockquote>
<h2>Citrix and Terminal servers</h2>
<p>Setting the DPI for individual users connected to a terminal server (or Citrix) can only be done in the registry, if the DPI is changed in the  Control Panel as above, then the change will apply to all users. 
</p>
<p>Registry settings for Per-User DPI setting (Windows 2003/2008):
</p>
<p><a href="dpi-small-96.txt">Small 96 DPI</a><br>
<a href="dpi-medium-120.txt">Medium 120 DPI</a><br>
<a href="dpi-large-144.txt">Large 144 DPI</a><br>
<a href="dpi-default-96.txt">Default 96 DPI</a> (includes AppliedDPI value)
</p>
<p class="quote"><i>“There are three classes of people: those who see. Those who see when they are shown. Those who do not see” ~ Leonardo da Vinci</i></p>
<p><b>Related</b>
</p><p><a href="https://support.microsoft.com/kb/2726399">Q2726399</a> - Cannot change the DPI setting through an RDP session.<br>
<a href="regedit.html">REGEDIT</a> - Import or export registry settings.<br>
<a href="http://pediddle.net/dpi-ruler.html">DPI ruler</a> <br>
<a href="http://members.ping.de/%7Esven/dpi.html">DPI Calculator</a> &amp; list of  common display sizes.<br>
<a href="http://www.infobyip.com/detectmonitordpi.php">Detect your monitor DPI</a>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-dpi.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

