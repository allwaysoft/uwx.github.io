---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>NoDrives</h1> 
<p> Hide drive mappings in 'My Computer', Windows Explorer
and the standard Open dialog box.</p>
<table>
<tbody><tr>
<th scope="col">A:</th>
<th scope="col">B:</th>
<th scope="col">C:</th>
<th scope="col">D:</th>
<th scope="col">E:</th>
<th scope="col">F:</th>
<th scope="col">G:</th>
<th scope="col">H:</th>
<th scope="col">I:</th>
<th scope="col">J:</th>
<th scope="col">K:</th>
<th scope="col">L:</th>
<th scope="col">M:</th>
<th scope="col">None</th>
</tr>
<tr>
<td><input id="d1" value="1" type="checkbox" onclick="calculate();"></td>
<td><input id="d2" value="2" type="checkbox" onclick="calculate();"></td>
<td><input id="d3" value="4" type="checkbox" onclick="calculate();"></td>
<td><input id="d4" value="8" type="checkbox" onclick="calculate();"></td>
<td><input id="d5" value="16" type="checkbox" onclick="calculate();"></td>
<td><input id="d6" value="32" type="checkbox" onclick="calculate();"></td>
<td><input id="d7" value="64" type="checkbox" onclick="calculate();"></td>
<td><input id="d8" value="128" type="checkbox" onclick="calculate();"></td>
<td><input id="d9" value="256" type="checkbox" onclick="calculate();"></td>
<td><input id="d10" value="512" type="checkbox" onclick="calculate();"></td>
<td><input id="d11" value="1024" type="checkbox" onclick="calculate();"></td>
<td><input id="d12" value="2048" type="checkbox" onclick="calculate();"></td>
<td><input id="d13" value="4096" type="checkbox" onclick="calculate();"></td>
<td><input id="d0" value="0" type="checkbox" onclick="window.location.reload(true);"></td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>4</td>
<td>8</td>
<td>16</td>
<td>32</td>
<td>64</td>
<td>128</td>
<td>256</td>
<td>512</td>
<td>1024</td>
<td>2048</td>
<td>4096</td>
<td>0</td>
</tr>
<tr>
<th>N:</th>
<th>O:</th>
<th>P:</th>
<th>Q:</th>
<th>R:</th>
<th>S:</th>
<th>T:</th>
<th>U:</th>
<th>V:</th>
<th>W:</th>
<th>X:</th>
<th>Y:</th>
<th>Z:</th>
<th>ALL</th>
</tr>
<tr>
<td><input id="d14" value="8192" type="checkbox" onclick="calculate();"></td>
<td><input id="d15" value="16384" type="checkbox" onclick="calculate();"></td>
<td><input id="d16" value="32768" type="checkbox" onclick="calculate();"></td>
<td><input id="d17" value="65536" type="checkbox" onclick="calculate();"></td>
<td><input id="d18" value="131072" type="checkbox" onclick="calculate();"></td>
<td><input id="d19" value="262144" type="checkbox" onclick="calculate();"></td>
<td><input id="d20" value="524288" type="checkbox" onclick="calculate();"></td>
<td><input id="d21" value="1048576" type="checkbox" onclick="calculate();"></td>
<td><input id="d22" value="2097152" type="checkbox" onclick="calculate();"></td>
<td><input id="d23" value="4194304" type="checkbox" onclick="calculate();"></td>
<td><input id="d24" value="8388608" type="checkbox" onclick="calculate();"></td>
<td><input id="d25" value="16777216" type="checkbox" onclick="calculate();"></td>
<td><input id="d26" value="33554432" type="checkbox" onclick="calculate();"></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>8192</td>
<td>16384</td>
<td>32768</td>
<td>65536</td>
<td>131072</td>
<td>262144</td>
<td>524288</td>
<td>1048576</td>
<td>2097152</td>
<td>4194304</td>
<td>8388608</td>
<td>16777216</td>
<td>33554432</td>
<td>67108863</td>
</tr>
</tbody></table>
<p>Result: <input id="result" value="0"> Decimal</p>
<p>Copy the result into the registry to hide the drive letter(s)</p>
<p>User Key:<br>
<span class="code">[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]</span><br>
<br>
 System Key:<br>
<span class="code">[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]</span></p>
<p>Value Name: <span class="code">NoDrives</span><br>
Data Type: DWORD</p>
<p>After changing the registry, logoff or reboot so that it takes effect.</p>
<p>Drive mappings hidden with a nodrives registry setting are still available, just type the drive letter into the explorer address bar. </p>
<p class="quote"><i>“The dream is the small hidden door in the deepest and most intimate sanctum of the soul, which opens to that primeval cosmic night that was soul long before there was conscious ego and will be soul far beyond what a conscious ego could ever reach” ~ Carl Jung</i></p>
<p><b>Related:</b></p>
<p><a href="reg.html">REG</a> - Registry: Read, Set, Export, Delete keys and values <br>
<a href="regedit.html">REGEDIT</a> - Import or export registry settings</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-nodrives.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

