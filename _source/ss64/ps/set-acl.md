---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-acl</h1> 
<p>Set  Access Control List permissions from on a file (or object).</p>
<pre>Syntax
      Set-Acl [-path] <i>string</i>[] [-aclObject] <i>ObjectSecurity</i>
                 [-Include <i>String</i>] [-Exclude <i>String</i>]
                    [-filter <i>string</i>] [-passThru] [-whatIf]
                       [-confirm] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>path</i>
       Path to the item to be changed {accepts wildcards}

       If a security object is passed to Set-Acl (either via -AclObject 
       or by passing an object from Get-Acl), and -Path is omitted,
       Set-Acl will use the path that is included in the security object.

   -AclObject <i>ObjectSecurity</i>
       An ACL with the desired property values.
       Often the output of a Get-Acl command saved in a variable.

   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -include <i>string</i>
       Include only the specified items from the Path. e.g. "May*"
       This qualifies the -Path parameter and normally includes a wildcard.
        
   -Exclude <i>string</i>
       Omit the specified items from the Path e.g. "*SS64*"
       This qualifies the -Path parameter and normally includes a wildcard.

   -PassThru 
       Pass the object created by Set-Acl through the pipeline.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>To apply a new rule to an ACL, requires an AccessRule Object of Type <span class="code">System.Security.AccessControl.<a href="https://msdn.microsoft.com/en-us/library/system.security.accesscontrol.filesystemaccessrule%28v=vs.110%29.aspx">FileSystemAccessRule</a></span></p>
<p>Inherited folder permissions:</p>
<pre> Object inherit    - This folder and files. (no inheritance to subfolders)
 Container inherit - This folder and subfolders.
 Inherit only      - The ACE does not apply to the current file/directory</pre>
<p><b>Examples</b></p>
<p>Copy the security settings from Dog.txt to Cat.txt</p>
<p><span class="code">PS C:\&gt; $DogACL = get-acl c:\dog.txt</span><br>
<span class="code">PS C:\&gt; set-acl -path C:\cat.txt -AclObject $DogACL</span></p>
<p>Or the same thing with a pipeline: </p>
<p><span class="code">PS C:\&gt; get-acl c:\dog.txt | set-acl -path C:\cat.txt</span><br>
<br>
Apply the same $Dog ACL to all the  files in  C:\Temp\ and all of its subdirectories:</p>
<p class="code">PS C:\&gt; get-childitem c:\temp -recurse -force | set-acl -aclobject $DogACL -whatif</p>
<p>Disable inheritance for the folder 'C:\DemoFolder' (If inheritance is left in place the folder will inherit all the permissions of the parent folder.)</p>
<p class="code">PS C:\&gt; $acl = Get-Acl -Path 'C:\DemoFolder'<br>
PS C:\&gt; $acl.<a href="https://msdn.microsoft.com/en-us/library/system.security.accesscontrol.objectsecurity.setaccessruleprotection%28v=vs.110%29.aspx">SetAccessRuleProtection</a>($true, $false)<br>
PS C:\&gt; $acl | Set-Acl -Path 'C:\DemoFolder'</p>
<p>Add a new permission for the current user:</p>
<pre>PS C:\&gt; $acl = Get-Acl -Path 'C:\DemoFolder'
PS C:\&gt; $perm = <b>$env:username</b>, 'Read,Modify', 'ContainerInherit, ObjectInherit', 'None', 'Allow' 
PS C:\&gt; $rule = New-Object -TypeName System.Security.AccessControl.<a href="https://msdn.microsoft.com/en-us/library/system.security.accesscontrol.filesystemaccessrule%28v=vs.110%29.aspx">FileSystemAccessRule</a> -ArgumentList $perm
PS C:\&gt; $acl.SetAccessRule($rule) 
PS C:\&gt; $acl | Set-Acl -Path 'C:\DemoFolder'</pre>
<p class="quote"><i>“If it's a good idea - go ahead and do it. It’s easier to ask forgiveness than it is to get permission” ~ <a href="http://en.wikipedia.org/wiki/Grace_Hopper">Grace Murray Hopper</a></i></p>
<p><b>Related:</b><br>
<br>
<a href="get-acl.html">Get-Acl</a> - Get permission settings for a file or registry key<br>
<a href="../nt/cacls.html">CACLS</a> - 
Display or modify Access Control Lists (ACLs) for files and folders.<br>
<a href="https://gallery.technet.microsoft.com/scriptcenter/1abd77a5-9c0b-4a2b-acef-90dbb2b84e85">NTFS Security  Module</a> - Raimund Andrée MSFT<br>
Equivalent bash command: <a href="../bash/chmod.html">chmod</a> - Change access permissions</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

