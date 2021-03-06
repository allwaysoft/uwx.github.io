---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NLTEST.exe (Windows 2008 or via <abbr title="Active Directory Domain Services or the AD LDS server role">AD DS</abbr>)</h1>
<p>Network Location Test - List  domain controllers(DCs), Force a remote shutdown, Query the status of trust,<br>
test trust relationships and the state of domain controller replication.</p>
<pre>Syntax
      NLTEST [/server:<i>servername</i>] [<i>operation</i>[<i>parameter</i>]

Key
   /server: <i>ServerName</i> 
            Run nltest at a remote domain controller: <i>ServerName</i>.
            default = the local computer (a domain controller).

   /query   Report on the state of the secure channel the last time you used it.
            (The secure channel is the one that the NetLogon service established.)

   /repl    Force synchronization with the primary domain controller (PDC).
            Nltest synchronizes only changes that are not yet replicated to the backup
            domain controller (BDC). NT 4.0 BDCs only, not for Active Directory replication.
            You must have administrative credentials to use this parameter.

<span class="grey">   /sync    Force an immediate synchronization with the PDC of the entire SAM database.
            NT 4.0 BDCs only, not for Active Directory replication.
            You must have administrative credentials to use this parameter.

   /pdc_repl Force the PDC to send a synchronization notification to all BDCs.
            NT 4.0 PDCs only, not for Active Directory replication.
            You must have administrative credentials to use this parameter.</span>

   /sc_query: <i>DomainName</i>
             Report on the state of the secure channel the last time that you used it.
            (The secure channel is the one that the NetLogon service established.)
            This parameter lists the name of the domain controller that you queried on the
            secure channel, also.

   /sc_reset:[ <i>DomainName</i>]
            Remove, and then rebuild, the secure channel that the NetLogon service established.
            You must have administrative credentials to use this parameter.

   /sc_verify:[ <i>DomainName</i>]
            Check the status of the secure channel that the NetLogon service established.
            If the secure channel does not work, this parameter removes the existing channel, and
            then builds a new one. You must have administrative credentials to use this parameter.

   /sc_change_pwd:[ <i>DomainName</i>]
            Change the password for the trust account of a domain that you specify.
            If you run nltest on a domain controller, and an explicit trust relationship exists,
            then nltest resets the password for the interdomain trust account.
            Otherwise, nltest changes the computer account password for the domain that you specify.

   /dclist:[ <i>DomainName</i>]
            List all DCs in the domain.
            This command first queries Active Directory for a list of DCs.
            If this query is unsuccessful, nltest then uses the Browser service (if netbios is enabled).

   /dcname:[ <i>DomainName</i>]
            List the primary domain controller or the PDC emulator for DomainName.

   /<b>ds</b>getdc:[ <i>DomainName</i>]
            Query the Domain Name System (DNS) server for a list of DCs and their
            IP addresses. This parameter also contacts each domain controller to check for connectivity.
            The following list shows the values that you can use to filter the list of DCs
            or specify alternate names types in the syntax.

            /PDC: Return only the PDC (Windows NT 4.0) or domain controllers designated as the PDC
                  emulator (Windows 2000 and later).
            /DS:  Return only those DCs that are Windows 2000 and later.
            /DSP: Return only Windows 2000 and later DCs. If the query finds no such server,
                  then return Windows NT 4.0 DCs.
            /GC:  Return only those DCs that are designated as global catalog servers.
            /KDC: Return only those DCs that are designated as Kerberos key distribution centers.
            /TIMESERV: Return only those DCs that are designated as time servers.
            /GTTIMESERV: Return only DCs designated as master time servers.
            /WS: /NetBIOS: Specifies computer names in the syntax as NetBIOS names.
            /DNS: Specify computer names in the syntax as fully qualified domain names (FQDNs).
                  If you do not specify a return format, the DC can return either NetBIOS or DNS format.
            /IP:  Return only DCs that have IP addresses. i.e. return only TCP/IP DCs.
            /FORCE: Force the computer to run the command against the DNS server instead of looking in
                    the cache for the information.
            /Writable: Require that the returned DC be writable; All Windows 2000 DCs are writable
            /Avoidself: When called from a DC, specifies that the returned DC name should
                        not be the current computer. If the current computer is not a DC, this flag is ignored.
                        This flag can be used to obtain the name of another DC in the domain.
            /LDAPOnly: Specifies that the server returned is an LDAP server. The server returned is not
                       necessarily a DC. This flag can be used with the DS_GC_SERVER_REQUIRED flag
                       to return an LDAP server that also hosts a global catalog server.
                       If this flag is specified, the DS_PDC_REQUIRED, DS_TIMESERV_REQUIRED, 
                       DS_GOOD_TIMESERV_PREFERRED, DS_DIRECTORY_SERVICES_PREFERED,
                       DS_DIRECTORY_SERVICES_REQUIRED, and DS_KDC_REQUIRED flags are ignored.
            /Backg: If the DS_FORCE_REDISCOVERY flag is not specified, this function uses cached DC data.
                    If the cached data is more than 15 minutes old, the cache is refreshed by pinging
                    the DC. If this flag is specified, this refresh is avoided even if the cached data
                    is expired. This flag should be used if the DsGetDcName function is called periodically.
            /DS_6: Require that the returned DC be running Windows Server 2008 or later.
            /DS_8: Require that the returned domain controller be running Windows Server 2012 or later.
            /Try_Next_Closest_Site: When this flag is specified, DsGetDcName attempts to find a DC in
                                    the same site as the caller.
            /Ret_DNS: Specifies that the names returned in the DomainControllerName and DomainName members
                      of DomainControllerInfo should be DNS names.
            /Ret_NETBIOS: Specifies that the names returned in the DomainControllerName and DomainName members
                          of DomainControllerInfo should be flat names.

   /<b>dns</b>getdc: <i>DomainName</i>
            Query the DNS server for a list of domain controllers and their corresponding IP addresses.
            values that you can use to filter the list of DCs:
               /PDC: Return only those DCs that are PDCs (Windows NT 4.0) or designated as PDC emulators.
               /GC:  Return only those DCs that you designate as global catalogs.
               /KDC: Return only those DCs that you designate as Kerberos key distribution centers.
               /WRITABLE: Return only those DCs that can accept changes to the directory database.
                          This value returns all Active Directory DCs, but not Windows NT 4.0 BDCs.
               /LDAPONLY: Return servers that are running a Lightweight Directory Access Protocol (LDAP) application.
                          The servers can include LDAP servers that are not DCs.
               /FORCE:    Run the command against the DNS server instead of looking in cache.
               /SITE <i>Sitename</i>: Sort to list first the records that pertain to <i>Sitename</i>.
               /SITESPEC:      Filter the returned records to display only <i>Sitename</i>, used only with /SITE.

   /dsgetfti: <i>DomainName</i>[ /UpdateTDO]
            Return information about interforest trusts. You use this parameter only for a Windows Server 2008
            domain controller that is in the root of the forest. If no interforest trusts exist, this parameter
            returns an error. The /UpdateTDO value updates the locally stored information on the interforest trust.

   /dsgetsite
            Return the name of the site in which the DC resides.

   /dsgetsitecov
            Return the name of the site that the DC covers. A DC can cover a site
            that has no local DC of its own.

   /parentdomain
            Return the name of the parent domain of the server.

   /dsregdns
            Refreshe the registration of all DNS records that are specific to a DC that you specify.


   /dsderegdns: <i>DnsHostName</i>
            Deregisters DNS host records for the host that you specify in the DnsHostName parameter.
            values you can use to specify which records nltest deregisters:
               /DOM:  Specify a DNS domain name for the host to use when you search for records on the DNS server.
                      If you do not specify this value, nltest uses the DNS domain name as the suffix of the
                      DnsHostName parameter.
               /DSAGUID: Deletes Directory System Agent (DSA) records that are based on a GUID.
               DOMGUID: Deletes DNS records that are based on a globally unique identifier (GUID).

   /whowill: <i>Domain</i>/ <i>User</i>
            Find the DC that has the user account that you specify. Use this parameter to determine
            whether nltest has replicated the account information to other DCs.

   /finduser: <i>User</i>
            Find the directly-trusted domain that the user account <i>User</i> belongs to.
            Use this parameter to troubleshoot logon issues of older client operating systems.

<span class="grey">   /transport_notify    Flushe the negative cache to force the discovery of a domain controller.
                        You can use this parameter for Windows NT 4.0 domain controllers only.
                        This operation is done automatically when clients log on to Windows 2000 and
                        Windows Server 2003 domain controllers.</span>
   /dbflag: <i>HexadecimalFlags</i>
            Set a new debug flag. For most purposes, use 0x2000FFFF as the value for HexadecimalFlags.
            The entry in the Windows Server 2003 registry for debug flags is
            HKLM\System\CurrentControlSet\Services\Netlogon\Parameters\DBFlag.

   /user: <i>UserName</i>
            Display many of the attributes that you maintain in the SAM account database for the user that
            you specify. You cannot use this parameter for user accounts that are stored in an AD database.

   /time: <i>HexadecimalLSL HexadecimalMSL</i>
            Convert Windows NT Greenwich Mean Time (GMT) time to ASCII. <i>HexadecimalLSL</i> is a hex value for
            least significant longword. <i>HexadecimalMSL</i> is a hexa value for most significant longword.

   /logon_query
            Query the cumulative number of NTLM logon attempts at a console or over a network.

   /domain_trusts
            Returns a list of trusted domains. /Primary /Forest /Direct_Out /Direct_In /All_Trusts /v.
            values that you can use to filter the list of domains:
               /Primary: Return only the domain to which the computer account belongs.
               /Forest: Return only those domains that are in the same forest as the primary domain.
               /Direct_Out: Return only the domains that are explicitly trusted with the primary domain.
               /Direct_In: Return only the domains that explicitly trust the primary domain.
               /All_Trusts: Return all trusted domains.
               /v: Display verbose output, including any domain SIDs and GUIDs that are available.

   /dsquerydns
            Query for the status of the last update for all DNS records that are specific to a DC.

<span class="grey">   /bdc_query: <i>DomainName</i>
            Query for a list of BDCs in <i>DomainName</i>, and then display their state of synchronization
            and replication status. You can use this parameter only for Windows NT 4.0 domain controllers.</span>

   /sim_sync: <i>DomainName ServerName</i>
            Simulate full synchronization replication. This is a useful parameter for test environments.

<span class="grey">   /list_deltas: <i>FileName
</i>            Display the contents of the FileName change log file, which lists changes to the user account 
            database. Netlogon.chg is the default name for this log file, which resides only on Windows NT 4.0 BDCs.</span>

   /cdigest: <i>Message </i>/domain: <i>DomainName</i>
            Display the current digest that the client uses for the secure channel.
            (The digest is the calculation that nltest derives from the password.)
            This parameter displays the digest that is based on the previous password, also. Nltest uses
            the secure channel for logons between client computers and a domain controller, or for
            directory service replication between domain controllers. You can use this parameter in
            conjunction with the /sdigest parameter to check the synchronization of trust account passwords.

   /sdigest: &lt;Message&gt; /rid: <i>RID_In_Hexadecimal</i>
            Display the current digest that the server uses for the secure channel.
            (The digest is the calculation that nltest derives from the password.)
            This parameter displays the digest for the previous password, also. If the digest from the
            server matches the digest from the client, then nltest synchronizes the passwords that it
            uses for the secure channel. If the digests do not match, then nltest might not have replicated
            the password change yet.

   /shutdown: <i>Reason</i> [<i>Seconds</i>]
            Remotely shut down the server that you specify in <i>ServerName</i>.
            Use a string to specify the reason for the shutdown in the Reason value.
            Use an integer value of <i>Seconds</i> before the shutdown will occur.
            (see InitiateSystemShutdown in the Platform SDK documentation.)

   /shutdown_abort
            Terminate a system shutdown.

  {/help | /?}   Display help at the command prompt.</pre>
<p>Examples</p>
<p>Verify domain controllers in a domain:</p>
<p class="code">nltest /dclist:ss64dom</p>
<p>Show detailed information about a specific user:</p>
<p class="code">nltest /user:"user64"</p>
<p>Verify trust relationship with a specific server:</p>
<p class="code">nltest /server:ss64-DC01 /sc_query:ss64dom</p>
<p class="code">lags: 30 HAS_IP  HAS_TIMESERV <br>
Trusted DC Name \\ss64-DC01.ss64.com <br>
Trusted DC Connection Status Status = 0 0x0 NERR_Success<br>
The command completed successfully</p>
<p class="quote"><i>“..If it disagrees with experiment it is wrong. In that simple statement is the key to science. It does not make any difference how beautiful your guess is. It does not make any difference how smart you are, who made the guess, or what his name is – if it disagrees with experiment it is wrong” ~ <a href="http://www.youtube.com/watch?v=EYPapE-3FRw">Richard Feynman</a></i></p>
<p><b> Related commands:</b></p>
<p>RepAdmin - Diagnose Active Directory replication problems between domain controllers.<br>
<a href="http://technet.microsoft.com/en-us/library/cc731968.aspx">DcDiag</a> - Analyze the state of domain controllers and report any problems.<br>
DsMgt - Manage password operations over unsecured connections, AD Lightweight Directory Services application partitions, flexible single master operations (FSMO), and clean up AD metadata.<br>
<a href="setspn.html">SetSpn</a> - Read, modify, or delete the Service Principal Names (SPN) for an Active Directory service account. <br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nltest.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

