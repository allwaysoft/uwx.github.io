---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-acl</h1> 
<p>Get the Access Control List (permissions) for a file or registry key.</p>
<pre>Syntax
      get-acl [[-Path] <i>path </i>[] ]  [-Filter <i>String</i>]
         [-Include <i>String</i>] [-Exclude <i>String</i>]
            [-Audit []] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>path</i>       The path to the item {may be piped}
   -Filter <i>String</i>   Filter elements as required and supported by providers
   -Include <i>String</i>  Item(s) upon which Get-acl will act, wildcards are permitted
   -Exclude <i>String</i>  Item(s) upon which Get-acl is not to act
   -Audit           Retrieve audit data for this item from the System ACL
   -UseTransaction  Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Get  ACL information for the Windows directory:</p>
<p><span class="code">PS C:\&gt; get-acl C:\windows</span></p>
<p>Get ACL information for C:\Windows expanding the individual ACEs
(access control entries)</p>
<p class="code">PS C:\&gt; $mywin = get-acl -path "c:\windows" | select -expand access<br>
PS C:\&gt; $mywin[0] </p>
<p>Get ACL information for all of the .log files in the Windows directory beginning with k. <br>
Display output as a table showing the Path and the owner of each file:</p>
<p class="code">PS C:\&gt; get-acl C:\Windows\k*.log | format-table Path,owner</p>
<p>Retrieve HKLM\SYSTEM\CurrentControlSet\Control from the registry:</p>
<p class="code">PS C:\&gt; get-acl -path hklm:\system\currentcontrolset\control | format-list</p>
<p class="quote"><i>“It's easier to ask forgiveness than it is to get permission” ~ Rear Admiral Grace Hopper</i></p>
<p><b>Related:</b><br>
<br>
  <a href="set-acl.html">set-acl</a> - Set permissions<br>
<a href="https://gallery.technet.microsoft.com/scriptcenter/1abd77a5-9c0b-4a2b-acef-90dbb2b84e85">NTFS Security  Module</a> - Raimund Andrée MSFT</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

