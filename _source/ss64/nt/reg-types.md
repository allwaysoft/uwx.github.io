---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Registry Data types</h1> 
<table>
<tbody><tr><th>Constant</th><th>Description</th></tr>
<tr><td><a id="reg_binary"></a><code>REG_BINARY</code>
</td><td>Binary data in any form.</td></tr>
<tr><td><a id="reg_dword"></a><code>REG_DWORD</code></td>
<td>32-bit number.</td></tr>
<tr><td><a id="reg_qword"></a><code>REG_QWORD</code></td>
<td>64-bit number.</td></tr>
<tr><td><a id="reg_dword_little_endian"></a><code>REG_DWORD_LITTLE_ENDIAN</code></td>
<td>32-bit number in little-endian format. This is equivalent to <code>REG_DWORD</code>.<br>In little-endian format, a multibyte value is stored in memory from the lowest byte (the "little end") to the highest byte. For example, the value 0x12345678 is stored as (0x78 0x56 0x34 0x12) in little-endian format.</td></tr>
<tr><td><a id="reg_qword_little_endian"></a><code>REG_QWORD_LITTLE_ENDIAN</code></td>
<td>A 64-bit number in little-endian format. This is equivalent to <code>REG_QWORD</code>.</td></tr>
<tr><td><a id="reg_dword_big_endian"></a><code>REG_DWORD_BIG_ENDIAN</code></td>
<td>32-bit number in big-endian format.<br>In big-endian format, a multibyte value is stored in memory from the highest byte (the "big end") to the lowest byte. For example, the value 0x12345678 is stored as (0x12 0x34 0x56 0x78) in big-endian format.</td></tr>
<tr><td><a id="reg_expand_sz"></a><code>REG_EXPAND_SZ</code></td>
<td>Null-terminated string that contains unexpanded references to environment variables (for example, "%PATH%"). It will be a Unicode or ANSI string, depending on whether you use the Unicode or ANSI functions.</td></tr>
<tr><td><a id="reg_link"></a><code>REG_LINK</code></td>
<td>Unicode symbolic link.</td></tr>
<tr><td><a id="reg_multi_sz"></a><code>REG_MULTI_SZ</code></td>
<td>Array of null-terminated strings that are terminated by two null characters.</td></tr>
<tr><td><a id="reg_none"></a><code>REG_NONE</code></td>
<td>No defined value type.</td></tr>
<tr><td><a id="reg_resource_list"></a><code>REG_RESOURCE_LIST</code></td>
<td>Device-driver resource list.</td></tr>
<tr><td><a id="reg_sz"></a><code>REG_SZ</code></td>
<td>Null-terminated string. It will be a Unicode or ANSI string, depending on whether you use the Unicode or ANSI functions.</td></tr>
</tbody></table>
<p class="quote">“Have a place for everything and keep the thing somewhere else; this is not advice, it is merely custom” ~ Mark Twain</p>
<p><b>Related:</b></p>
<p><a href="setx.html">SETX</a> - Set environment variables permanently, can also read a registry key and write the value to a text file.<br>
<a href="reg.html">REG</a> -  Read, Set, Export &amp; Delete registry keys and values<br>
<a href="regedit.html">REGEDIT</a> - Load Registry settings from a .REG file</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="reg-types.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
