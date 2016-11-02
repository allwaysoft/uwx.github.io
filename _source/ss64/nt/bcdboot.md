---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>BCDBOOT.exe (Windows 7 /2008) </h1> 
<p> Set up a system partition,   repair the boot environment located on the system partition. </p>
<pre>Syntax
      BCDBOOT <i>source</i> [/l <i>locale</i>] [/s <i>volume-letter</i>]
         [/v] [/m [{<i>OS Loader GUID</i>}]]

Options

   source  The location of the Windows directory to use as the source for
           copying boot-environment files.

   /l      The locale. default = US English.

   /s      The volume letter of the system partition.
           The default is the system partition identified by the firmware.

   /v      Enable verbose mode

   /m      By default, merge only global objects.
           If an OS Loader GUID is specified, merge the given loader object within
           the system template to produce a bootable entry.</pre>
<p> 
BCDboot can also be run from  Windows PE (Preinstallation Environment)</p>
<p><b>Examples</b></p>
<p>Initialize the system partition using files from the operating system image installed on the C: volume:</p>
<p class="code">C:\&gt; bcdboot C:\Windows</p>
<p>Set the default BCD locale to Japanese, and copy BCD (Boot Configuration Data) files to drive S: </p>
<p class="code">C:\&gt; bcdboot C:\Windows /l ja-jp /s S:</p>
<p>Merge the OS loader in the current BCD store identified with the given GUID in the new BCD store:</p>
<p class="code">C:\&gt; bcdboot c:\windows /m {d58d10c6-df53-11dc-878f-00064f4f4e08}</p>
<p class="quote"><i>“When all the world is young, lad, / And all the trees are green / And every goose a swan, lad / And every lass a queen / Then hey for boot and horse, lad, / And round the world away / Young blood must have its course, lad, / And every dog his day” - Charles Kingsley</i></p>
<p>  <b>Related:</b></p>
<p><a href="bcdedit.html">BCDEDIT</a> - Manage Boot Configuration Data<br>
<a href="fsutil.html">FSUTIL</a> - File and Volume utilities</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bcdboot.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
