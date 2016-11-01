---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Find circular nested AD groups.</h1>
<p>If an Active Directory(AD) group has another AD group as both it's parent and as a child member you have a circular nested reference.</p>
<p>Why would that matter?<br>
There is no technical reason preventing the use of circular references between AD groups, Active Directory can still calculate and grant access.
 The main reason that <a href="http://programmers.stackexchange.com/questions/11856/whats-wrong-with-circular-references">circular references are considered harmful</a> is that they tend to make management more difficult.<br>
 In a well structured active directory every AD group will have a single purpose, ideally with people and resources in separate groups and  following a clear heirarchy.
If group A is a member of Group B and vice versa then neither group has a single purpose - both groups are now performing two tasks. Circular references are often the cause of unintended privilege escalation.</p>
<pre># Circular.ps1
# List all AD groups that contain one or more circular nested groups
# outputs the parent group's DN and a list of the nested groups.

# Limitations
# The script works by scanning through every group, so any circular relationships
# will be listed twice, once for the parent group and once for the child.

# ADSI has a limit of 1500 items for a multi-valued attribute so 
# groups containing more than 1500 members may return the error:
#  "Get-ADGroupMember : The size limit for this request was exceeded.."

# If a circular relationship exists between a large (&gt;1500) group and small one,
# the script may fail enumerating the large group, but still detect the circular
# relationship against the small one.

# This script only checks direct members: A&gt;B&gt;A
# inherited circular memberships A&gt;B&gt;C&gt;A will not be detected.

cls
Import-Module Activedirectory

write-host "Circular.ps1  Search for nested groups - getting Groups"
# Retrieve all top/parent level AD groups.
$Parents = get-adgroup -ResultPageSize 1000 -filter 'ObjectClass -eq "group"'

# Loop through each parent group
ForEach ($Parent in $Parents)
{
   [int]$Len = 0
   # Create an array of the group members, limited to sub-groups (not users)
   $Children = @(Get-ADGroupMember $Parent | where {$_.objectClass -eq "group"} )
   $Len = @($Children).Count

   if ($Len -eq 1) {"$Parent contains 1 group"}
   elseif ($Len -gt 0) {"$Parent contains $Len groups"}
   
   if ($Len -gt 0)
   {
   "--check nesting"
      ForEach ($Child in $Children)
      {
          # Now find any member of $Child which is also the childs $Parent
          $nested = @(Get-ADGroupMember $Child | where {$_.objectClass -eq "group" -and "$_" -eq "$Parent"} )
          $NestCount = @($nested).Count
          if ($NestCount -gt 0)
          {
            " "
            "   Found a circular nested group: "
            "   $nested is both a parent and a member of:"
            "   $Child"
            "   ========================================"
          }
      }
   "--done"
   }
}</pre>
<p class="quote"><i>“There nearly always is method in madness. It's what drives men mad, being
methodical” ~ G. K. Chesterton</i></p>
<p><b>Related:</b></p>
<p><a href="https://gallery.technet.microsoft.com/scriptcenter/fa4ccf4f-712e-459c-88b4-aacdb03a08d0">Richard Mueller - CircularNestedGroups.ps1</a> - Find  circular nested groups in the domain (very fast but fails for groups containing more than 1500 members).</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-circular.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

