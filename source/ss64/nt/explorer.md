---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem -->
<h1>Explorer.exe</h1>  
<p>Command-line switches that you can use to open the GUI Windows Explorer (Explorer.exe).
</p><pre>Syntax
      Explorer.exe <i>options</i>

Options
    /n            Open a new single-pane window for the default selection. This is usually the root
                  of the drive Windows is installed on. If the window is already open, a duplicate opens.

    /e            Open Windows Explorer in its default view.

  (,)/root,<i>object</i> Open the specified object in a window view.

   /select,<i>object</i> Open a window view with the specified folder, file or application selected.

   /separate      Launch the explorer instance as a separate process.
                  (This is an undocumented feature)</pre>
<p>Quotation marks are required if the File/Folder object contains spaces or symbols.<br>
Explorer.exe is normally found in the Windows folder, typically <span class="code">C:\Windows\Explorer.exe</span> </p>
<p><b>Examples</b></p>
<p>Open an Explorer window  with the 'C:\Demo' folder displayed:</p>
<p class="code">Explorer.exe "C:\Demo"</p>
<p>Open an Explorer window  with the 'examples' folder displayed and its parent hidden:</p>
<p class="code">Explorer.exe /root,"C:\Demo\examples"</p>
<p>Open an Explorer window  with SS64App selected:</p>
<p class="code">Explorer.exe /select,"C:\Demo\SS64App.exe"</p>
<p>Open an Explorer window with C: expanded and SS64App selected:</p>
<p class="code">Explorer.exe /e,/root,"C:\Demo\SS64App.exe"</p>
<p>Open an Explorer window  with the share <span class="code">\\server64\FileShare1</span> :</p>
<p class="code">Explorer.exe /root,"\\server64\FileShare1" </p>
<p>Open an Explorer window with  TestApp.exe selected in the share<span class="code">\\server64\FileShare1</span> :</p>
<p class="code">Explorer.exe /root,\\server64\FileShare1,select,SS64App.exe </p>
<p>Open an Explorer window at the root of the system drive C:\</p>
<p class="code">Explorer \</p>
<p>Open an Explorer window at 'My Documents'</p>
<p class="code">Explorer \\<br>
or<br>
Explorer /</p>
<p>Open an Explorer window at the 'Computer'</p>
<p class="code">Explorer , </p>
<p><i class="quote">“From the growth of the Internet through to the mapping of the human genome and our understanding of the human brain, the more we understand, the more there seems to be for us to explore” ~ Martin Rees</i><br>
<br>
<b>Related:</b></p>
<p><a href="shell.html">Shell: folder</a> - Shortcuts to key folders.<br>
<a href="cmd.html">CMD</a> - Start a new CMD shell.<br>
<a href="run.html">RUN</a> <a href="run.html">Start | RUN</a> commands.<br>
<a href="start.html">START</a> - Start a program, command or batch file.<br>
<a href="syntax-folders.html">ProfileFolders</a> - Location of user profile folders.<br>
<a href="https://support.microsoft.com/en-us/kb/152457">Q152457</a> - Windows Explorer Command-Line Options.</p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="explorer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
