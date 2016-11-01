---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem -->
<h1>sharing</h1> 
<p>Create share points for afp (<a href="https://en.wikipedia.org/wiki/Apple_Filing_Protocol">Apple Filing Protocol</a>), <a href="ftp.html">ftp</a> and <a href="https://msdn.microsoft.com/en-gb/library/windows/desktop/aa365233(v=vs.85).aspx">Microsoft smb</a> services.</p>
<pre>Syntax
      sharing [-a <i>path</i> [<i>options</i>]] [-e <i>share_point_name</i> [<i>options</i>]]
              [-r <i>share_point_name</i>] [-l]

Key
   -a <i>path</i>              Add a new share point for the directory specified by <i>path</i>.
   -e <i>share_point_name</i>  Edit the share point record specified by <i>share_point_name</i>.
   -r <i>share_point_name</i>  Delete the share point record specified by <i>share_point_name</i>.
   -l                   List all existing share point records.

 The following options modify share point record attributes:
   -A <i>afp_name</i>     Use customized name <i>afp_name</i> when using share point with afp.
   -F <i>ftp_name</i>     Use customized name <i>ftp_name</i> when using share point with ftp.
   -S <i>smb_name</i>     Use customized name <i>smb_name</i> when using share points with smb.

   -s <i>flags</i>        Use this option to enable and disable sharing via afp, ftp, and smb.
                   By default a share point is enabled for afp, ftp, and smb protocols.

                   To enable/disable particular services, combine (binary AND) the following flags:
                   100 (enable sharing for afp), 
                   010 (enable sharing for smb), 
                   001 (enable sharing for ftp). Specify 000 to turn off sharing of a share point altogether.
                   Use a customized name <i>smb_name</i> if appropriate when using share points with smb.

   -g <i>guest_flag</i>   Use this option to enable and disable guest access for afp, ftp, and smb.
                   By default guest access is enabled for afp, ftp, and smb.
                   To enable/disable guest access to particular services, combine (binary AND) the following flags:
                   100  (enable guest for afp),
                   010 (enable guest for smb), 
                   001 (enable guest for ftp). Specify 000 to turn off guest access for a share point altogether.

   -i <i>inherit_privileges_flag</i>
                   Use this option to enable/disable the "inherit privileges" attribute for afp, ftp, and smb.
                   By default "inherit privileges" is enabled for ftp only.

                   To enable/disable guest access to particular services, combine (binary AND) the following flags:
                   100 ("inherit privileges" for afp),
                   010 ("inherit privileges" for smb), 
                   001 ("inherit privileges" for ftp).  Specify 000 to turn off "inherit privileges" for a share point altogether.

   -n <i>customized_record_name</i>
                   Specify a <i>customized_record_name</i> to be used as the share point record name.
                   By default the record name is the name of the directory pointed to by the share point record.
                   This directory is specified by the <i>path</i> when the record is created.
</pre>
<p>The GUI controls for sharing can be found under System Preferences &gt; Sharing &gt; File Sharing</p>
<p>For Windows file sharing, Apple uses "SMBX" to support  Microsoft's SMB2. This is a proprietary Apple replacement for the open source <a href="https://en.wikipedia.org/wiki/Samba_(software)">Samba</a> library.</p>
<p>In OS X Mavericks, Apple  began migrating from afp to  SMBX, OS X will only fall back to afp when file sharing with Macs running previous versions of OS X or when working with Time Machine backups.</p>
<p> Location of tool: <span class="code">usr/sbin/sharing</span></p>
<p><b>Examples</b></p>
<p>Create a share point for the directory      "/SomePath/ShareThisDirectory":</p>
<p class="code">$ sudo /usr/sbin/sharing -a /SomePath/ShareThisDirectory</p>
<p>Edit the share point record created above,      and add a customized name "SP1" for afp servies, also enable guest access      only for afp and smb.</p>
<p class="code">$ sudo /usr/sbin/sharing -e ShareThisDirectory -A SP1 -g 101</p>
<p>To turn off guest access to the newly-created share:</p>
<p class="code">$ sudo /usr/sbin/sharing -e ShareThisDirectory -g 000</p>
<p>Remove the share entirely:</p>
<p class="code">$ sudo /usr/sbin/sharing -r ShareThisDirectory</p>
<p class="quote"><i>“Plenty of people miss their share of happiness, not because they never found it, but because they didn't stop to enjoy it.” ~ William Feather</i></p>
<p><b>Related:</b></p>
<p><a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="mount.html">mount</a> - Mount a file system</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sharing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
