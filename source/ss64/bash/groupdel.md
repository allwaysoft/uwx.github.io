---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>groupdel</h1> 
<p>Delete a  user security group. </p>
<pre>Syntax
      groupdel <i>group</i> </pre>
<p>groupdel  modifies the system account files, deleting all entries that refer to group. The named group must exist.</p>
<h2>Caveats</h2>
<p>You can not remove the primary group of any existing user. </p>
<p>You must remove the user before you remove the group.</p>
<p>You should manually check all file systems to ensure that no files remain owned by this group.</p>
<h2>Configuration</h2>
<p>The following configuration variables in /etc/login.defs change the behavior of this tool:</p>
<p><span class="code">MAX_MEMBERS_PER_GROUP</span> (number)</p>
<p>Maximum members per group entry. When the maximum is reached, a new group entry (line) is started in /etc/group (with the same name, same password, and same GID).</p>
<p>The default value is 0, meaning that there are no limits in the number of members in a group.</p>
<p>This feature (split group) permits to limit the length of lines in the group file. This is useful to make sure that lines for NIS groups are not larger than 1024 characters.</p>
<p>If you need to enforce such limit, you can use 25.</p>
<p>Note: split groups might not be supported by all tools (even in the Shadow toolsuite). You should not use this variable unless you really need it. </p>
<h2>Files</h2>
<p><span class="code">/etc/group</span> Group account information. <br>
<span class="code">/etc/gshadow</span> 
Secure group account information. </p>
<h2>Exit Values</h2>
<p>The groupdel command exits with the following values:</p>
<pre>   0    success 
   2    invalid command syntax 
   3    invalid argument to option 
   6    specified group doesn't exist 
   8    can't remove user's primary group 
  10    can't update group file</pre>
<p class="quote"><i class="quote">“If future generations are to remember us with gratitude rather than contempt, we must leave them more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through with it” ~ President Lyndon B. Johnson</i></p>
<p><b>Related:</b><br>
<br>
<a href="groupadd.html">groupadd</a> - Add a group <br>
<a href="groupmod.html">
groupmod</a> - Modify a group<br>
<a href="userdel.html">userdel</a> - Delete a user account<br>
Equivalent Windows command: <a href="../nt/dsrm.html">dsrm</a> - Remove active directory object.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="groupdel.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

