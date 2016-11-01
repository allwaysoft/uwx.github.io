---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>GPRESULT.exe</h1> 
<p>Display Resultant Set of Policy information for a remote user and computer.</p>
<pre>Syntax
       gpresult [/s <i>Computer</i> [/u [<i>Domain</i>\]<i>UserName</i> [/p [<i>Password</i>]]]]
          [/user [<i>TargetDomain</i>\]<i>TargetUser</i>] [/scope {user | computer}]
             [/r | /v | /z] [[/x | /h] <i>FileName</i> [/f]]

Key:
   /s        The name or IP address of a remote computer. Do not use backslashes.
             (default = the local computer)

   /u [<domain>\]<username>    Run the command with the credentials of the specified user.
             (default = the currently logged on user)

   /p [<password>]     The password of the user account that is provided in the /u parameter.
             If /p is omitted, gpresult prompts for the password.

   /user [<targetdomain>\] The remote user whose RSoP data is to be displayed.

   /scope {user | computer}
             Displays RSoP data for either the user or the computer.
             If /scope is omitted, gpresult displays RSoP data for both the userand the computer.

   [/x | /h] <filename>Save the report in either XML (/x) or HTML (/h) format at the location and
             with the file name specified by the <i>FileName</i> parameter.
             Cannot be used with /u, /p, /r, /v, or /z.

   /f        Force gpresult to overwrite the file name specified in the /x or /h option.

   /r        Display RSoP summary data.

   /v        Display verbose policy information, including additional detailed settings that
             have been applied with a precedence of 1.

   /z        Display all available information about Group Policy, including detailed settings
             that have been applied with a precedence of 1 and higher.

   /?        Display help</filename></targetdomain></password></username></domain></pre>
<p>The /f and /r options were introduced in Windows Vista/7/2008 </p>
<p><span class="body"><b>Examples</b></span></p>
<p><span class="code">C:\&gt; gpresult /z &gt;C:\batch\policy.txt<br>
</span><span class="code">C:\&gt; gpresult /user targetusername /scope computer /r<br>
C:\&gt; gpresult /s srvmain /u ss64dom\hiropln /p p@ssW23 /user targetusername /scope user<br>
C:\&gt; gpresult /s srvmain /u ss64dom\hiropln /p p@ssW23 /user targetusername /z &gt;policy.txt<br>
C:\&gt; gpresult /s srvmain /u ss64dom\hiropln /p p@ssW23</span></p>
<p><span class="quote"><i>“The difference between false memories and true ones is the same as for jewels: it is always the false ones that look the most real, the most brilliant” ~ Salvador Dalí</i></span><span class="body"><i><br>
  </i> <br>
</span> <b>Related:</b></p>
<p> <a href="gpupdate.html">GPUPDATE</a> Update Group Policy settings<br>
<a href="ntrights.html">NTRIGHTS</a> - Edit user account rights</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="gpresult.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

