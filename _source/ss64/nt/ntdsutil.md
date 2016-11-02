---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NTDSUtil (NT Directory Service Utility)</h1>
<p>Active Directory Domain Services management, database/metadata maintenance, etc.</p>
<p> Run NTDSUtil from an elevated command prompt. NTDSUtil.exe is built into Windows Server 2008 /R2. It is available if you have the AD DS or the AD LDS server role installed or if you install the Active Directory Domain Services Tools that are part of the Remote Server Administration Tools (RSAT).</p>
<p>This tool is intended for use by experienced administrators, NTDSUtil is very powerful, but it’s also dangerous - some  commands  will require Active Directory to be taken offline.</p>
<pre>Syntax
      Ntdsutil <i>option</i>

Options
   <b>ac</b>tivate <b>i</b>nstance %<i>s</i>        - Set "NTDS" or a specific AD LDS instance as the active instance.
   <b>au</b>thoritative <b>r</b>estore       - Authoritatively restore the DIT database.
   change service account %<i>s1</i> %<i>s2</i>   - Change AD DS/LDS Service Account to
                                   username %<i>s1</i> and password %<i>s2</i>.
                                   Use "NULL" for blank password, * to be prompted.
   <b>co</b>nfigurable <b>s</b>ettings       - Manage configurable settings
   <b>DS b</b>ehavior                 - View and modify AD DS/LDS Behavior
   <b>f</b>iles                       - Manage AD DS/LDS database files
   <b>g</b>roup <b>m</b>embership <b>e</b>valuation - Evaluate SIDs in token for a given user or group
   Help                        - Show help
   <b>i</b>fm                         - IFM media creation
   ldap policies               - Manage LDAP protocol policies
   ldap port %d                - Configure LDAP Port for an AD LDS Instance.
   <b>li</b>st <b>i</b>nstance               - List all AD LDS instances installed on this machine.
   <b>lo</b>cal <b>r</b>oles                 - Local RODC roles management
   <b>m</b>etadata <b>c</b>leanup            - Clean up objects of decommissioned servers
   <b>pa</b>rtition <b>m</b>anagement        - Manage directory partitions
   <b>po</b>pups <b>on</b>                   - Disable popups
   <b>po</b>pups <b>off</b>                  - Enable popups
   <b>q</b>uit                        - Quit the utility
   <b>r</b>oles                       - Manage NTDS role owner tokens
   <b>sec</b>urity <b>a</b>ccount <b>m</b>anagement - Manage Security Account Database - Duplicate SID Cleanup
   <b>sem</b>antic <b>d</b>atabase <b>a</b>nalysis  - Semantic Checker
   <b>set</b> DSRM password           - Reset directory service restore mode administrator account password
   <b>sn</b>apshot                    - Snapshot management
   SSL port %<i>d</i>                 - Configure SSL Port for an AD LDS Instance.  </pre>
<p>For most commands, there is a short form, using the first few characters  instead of the entire command, these are shown above in <b>bold</b>. Any abbreviation that will uniquely identify the command will work.</p>
<p>For example the interactive commands: </p>
<pre>ntdsutil <b>r</b>oles 
  "<b>sel</b>ect <b>o</b>peration <b>t</b>arget" 
    "<b>c</b>onnections" 
      "<b>co</b>nnect <b>t</b>o <b>s</b>erver server64" 
      <b>q</b>uit 
  "<b>l</b>ist <b>r</b>oles <b>f</b>or <b>c</b>onnected <b>s</b>erver"
      <b>q</b>uit
    <b>q</b>uit
  <b>q</b>uit </pre>
<p>Can be abbreviated for use in a script:</p>
<p class="code">ntdsutil r "sel o t" c "co t s server64" q "l r f c s" q q q</p>
<p>Or a little more readably:</p>
<p class="code">ntdsutil rol "sel op targ" conn "conn to serv server64" qu "li rol fo conn serv" qu qu qu </p>
<p>At the <span class="code">ntdsutil:</span> prompt, type HELP any point to see the available commands/subcommands.
</p>
<p class="quote"><i>“Tyranny is always better organized than freedom” ~ Charles Peguy</i></p><p><b>Related:</b></p>
<p><a href="http://technet.microsoft.com/en-us/library/cc753343.aspx">NTDSUtil</a> - Microsoft reference page<br>
<a href="http://www.microsoft.com/en-us/download/details.aspx?id=9028">Repadmin</a> -  Diagnose Active Directory replication problems.<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ntdsutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

