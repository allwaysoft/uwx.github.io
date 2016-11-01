---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>lsregister</h1> 
<p>Reset the Launch Services database.</p>
<pre>Syntax
      lsregister: [<i>Options</i>] [<i>path</i>...]
                     [-apps <i>domain</i>[,<i>domain</i>]...]
                       [-libs <i>domain</i>[,<i>domain</i>]...]
                           [-all  <i>domain</i>[,<i>domain</i>]...]
</pre>
<p> lsregister is not on the system path so  run it using the full path as shown in the examples below.<br>
</p>
<pre>Options
   -kill     Reset the Launch Services database before doing anything else<br>   -seed     If database isn't seeded, scan default locations for applications and libraries to register<br>   -lint     Print information about plist errors while registering bundles<br>   -convert  Register apps found in older LS database files<br>   -lazy <i>n</i>   Sleep for <i>n</i> seconds before registering/scanning<br>   -r        Recursive directory scan, do not recurse into packages or invisible directories<br>   -R        Recursive directory scan, descending into packages and invisible directories<br>   -f        force-update registration even if mod date is unchanged<br>   -u        unregister instead of register<br>   -v        Display progress information<br>   -dump     Display full database contents after registration<br>   -h        Display help</pre>
<p> Valid <i><span class="code">domains</span></i> are "<span class="code">system</span>", "<span class="code">local</span>", "<span class="code">network</span>" and "<span class="code">user</span>". 
Domains can also
be specified using only the first letter.</p>
<p>Paths are searched for applications to register with the Launch Service database. The Launch Service database controls the Finder's '<i>Open With</i>' right click, contextual menu.<br>
</p>
<p>After running lsregister to rescan the database or create a new UTI, run <span class="code">killall Finder</span> to reload the Finder's “Open With” Menu, or just restart the machine.</p>
<h2>Full Path to lsregister</h2>
<blockquote>
<p><span class="body">lsregister is not on the system path so</span> either:</p>
<p><span class="body">Create an alias 'lsr' for the full path to lsregister:</span><span class="code">lsr='/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister </span></p>
<p>or  temporarily add the directory to your PATH so that you can run lsregister with just <span class="code">lsregister</span><br>
<span class="code">PATH=/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support:"$PATH"</span></p>
</blockquote>
<p><b>Examples</b></p>
<p>Run lsregister and display help </p>
<pre>lsregister</pre>
<pre><span class="body">
Reset the local &amp; user domains:
</span><span class="code">lsregister</span> -kill -r -domain local -domain user<span class="body">

Reset the local, user and system domains:</span><br><span class="code">lsregister</span>-kill -r -domain local -domain user -domain system</pre>
<p>Resetting the <span class="code">system</span>  will also reset the first-launch security prompt: the first time you launch an application by opening a document, the system will ask '<i>are you sure</i>'.<br>
This is equivalent to deleting the Launch services plist:<br>
<span class="code">~/Library/Preferences/com.apple.LaunchServices.plist</span></p>
<p class="quote"><i>“Because the people who are crazy enough to think they can change the world, are the ones who do” ~ Apple Advert </i></p>
<p><b>Related:</b></p>
<p><a href="http://www.titanium.free.fr/">Onyx utility</a> - Includes a maintenance script to rebuild the Launch Services.<br>
<a href="https://support.apple.com/kb/TA24770">Article: TA24770</a> - Clear the 10.4 Finder "Open With" contextual menu.<br>
<a href="http://apple.stackexchange.com/questions/47319/how-can-i-make-os-x-recognize-new-file-extensions">StackExchange</a> - How can I make OS X recognize new file extensions?</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lsregister.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
