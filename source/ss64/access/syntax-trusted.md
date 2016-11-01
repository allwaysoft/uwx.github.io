---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Microsoft Access – Trusted Locations</h1>
<p>Add folders to trusted locations from Office Button | Access Options | Trust Center | Trust Center Settings | Trusted Locations.</p>
<p>The entries are stored in the registry under the following keys (where <i><b>N</b></i> is the number of the Trusted Location, starting from 0). </p>
<p>The registry settings can be set on a per-user basis using Group Policy or a registry/reg batch file. You can also set registry keys using VBA within Access, but that will only work if the database is already in a trusted location.</p>
<pre>Access 2007: 
[HKEY_CURRENT_USER\Software\Microsoft\Office\12.0\Access\Security\Trusted Locations]
[HKEY_CURRENT_USER\Software\Microsoft\Office\12.0\Access\Security\Trusted Locations\Location<i><b>N</b></i>] </pre>
<pre>Access 2010: 
[HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Access\Security\Trusted Locations]
[HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Access\Security\Trusted Locations\Location<i><b>N</b></i>] </pre>
<pre>Access 2013: 
[HKEY_CURRENT_USER\Software\Microsoft\Office\15.0\Access\Security\Trusted Locations]
[HKEY_CURRENT_USER\Software\Microsoft\Office\15.0\Access\Security\Trusted Locations\Location<i><b>N</b></i>] </pre>
<p>For each trusted folder an entry with following registry keys can be populated:  <br>
<span class="code">Path</span>: 	 Path of trusted location, ending with \  (reg_sz)<br>
<span class="code">AllowSubfolders</span>: 	 Determines whether subfolders are trusted as well (0=No; 1=Yes) reg_dword. <br>
<span class="code">Description</span>: 	 Optional text description (reg_sz). <br>
<span class="code">Date</span>: 	 Date of last update.</p>
<p>You should not designate a public folder on a network share as a trusted location, apply appropriate NTFS permissions.</p>
<p>Example (2010)</p>
<pre>Windows Registry Editor Version 5.00</pre>
<pre>[HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Access\Security\Trusted Locations]
"AllowNetworkLocations"=dword:00000001</pre>
<pre>[HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Access\Security\Trusted Locations\Location0]
"Path"="\\\\<i>server64</i>\\<i>foldershare</i>\\" 
"AllowSubfolders"=dword:00000001</pre>
<p><b>Related:</b></p>
<p><a href="../nt/reg.html">REG</a> - Add a registry key<br>
<a href="../nt/regedit.html">REGEDIT</a> - Add a registry file<br>
<a href="http://msdn.microsoft.com/en-us/library/ee691831%28office.14%29.aspx">Compatibility Between the 32-bit and 64-bit Versions of Office 2010</a> - MSDN</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-trusted.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

