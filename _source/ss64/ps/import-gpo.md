---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>Import-GPO</h1> 
<p>Import Group Policy settings into a specified GPO from a GPO backup.</p>
<pre>Syntax
      Import-GPO <b>-BackupId <i>Guid</i></b> [-TargetGuid <i>Guid</i>] [-TargetName <i>string</i>] -Domain <i>string
        </i> [-CreateIfNeeded] [-MigrationTable <i>string</i>] [-Path <i>string</i>] [-Server <i>string</i>] [<i>CommonParameters</i>]

      Import-GPO [-BackupGpoName <i>string</i>] [-TargetGuid <i>Guid</i>] [-TargetName <i>string</i>] -Domain <i>string</i>
<i>        </i> [-CreateIfNeeded] [-MigrationTable <i>string</i>] [-Path <i>string</i>] [-Server <i>string</i>] [<i>CommonParameters</i>]

Key
   -BackupGpoName
         The display name of the backed-up GPO from which to import the settings. 

   -BackupId <i>Guid</i>
         The backup ID of a GPO backup. Use this to specify a particular version of a backed-up GPO.

   -CreateIfNeeded
         Create a new GPO from the backup if the specified target GPO does not exist.

   -Domain string
         The domain containing the GPOs to restore, requires a trust relationship if not the current domain.

   -MigrationTable
         Specifies the path to a migration table file. You can use a migration table to map security
         principals and UNC paths across domains.

   -Path <i>string</i>
         The path to the backup directory; for example, "C:\Backups" or "\\Server64\Backups".

   -Server <i>string</i>
         The name of the domain controller that should complete the operation.
         Specify either a fully qualified domain name (FQDN) or the host name.
         For example: 
         FQDN:      DomainController1.europe.ss64.com
         Host Name: DomainController1

   -TargetGuid <i>Guid</i>
         Specifies the GUID of the GPO into which the settings are to be imported.
         You must specify either the -TargetGuid or -TargetName.

   -TargetName <i>string</i>
         The display name of the GPO into which the settings are to be imported.
         You must specify either the -TargetGuid or -TargetName.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>The current/default domain is that of the user that is running the session or, for startup and shutdown scripts, the computer.</p>
<p><b>Examples</b></p>
<p>Import the settings from the most recent backup of the GPO named  "SS64" from  the C:\GpoBackups directory and restore as DemoGPO:</p>
<p><span class="code">PS C:\&gt; import-gpo -BackupGpoName SS64 -TargetName DemoGPO -path C:\Gpobackups</span></p>
<p>Import the settings from the specified backup in the C:\Gpobackups directory into a GPO that is named DemoGPO in the current domain. The <span class="code">-BackupId</span> parameter is used to specify the GUID of the GPO backup to import:</p>
<p class="code">PS C:\&gt; import-gpo -BackupId A641D730-F2E3-464C-B8C9-F64562C536AF -TargetName DemoGPO -path c:\Gpobackups -CreateIfNeeded </p>
<p> Import the settings from the specified backup in the C:\Gpobackups directory into a GPO  named DemoGPO in the current domain. The -BackupId parameter is used to specify the GUID of the GPO backup to use. </p>
<p class="code">PS C:\&gt; import-gpo -BackupId A641D730-F2EC-464C-B8C1-F50564C536AF -TargetName DemoGPO -path c:\Gpobackups -CreateIfNeeded</p>
<p class="quote"><i>“Everybody thinks that when new technologies come along that they're transparent and you can just do your job well on it. But technologies always import a whole new set of values with them” ~ </i><i>Brian Eno </i></p>
<p><b>Related:</b></p>
<p><a href="backup-gpo.html">Backup-GPO</a> - Backup group policy objects (GPOs)<br>
<a href="restore-gpo.html">Restore-GPO</a> - Restore one or all GPOs  from a GPO backup.</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="import-gpo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

