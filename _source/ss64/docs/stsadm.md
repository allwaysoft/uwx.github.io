---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_docs.lbi" --><!-- #EndLibraryItem --><h1>STSADM commands for Sharepoint 2007 sp2</h1>
<pre>activatefeature  

stsadm.exe -o activatefeature 
           {-filename &lt;relative path to Feature.xml&gt; |
            -name &lt;feature folder&gt; |
            -id &lt;feature Id&gt;} 
           [-url &lt;url&gt;]
           [-force]
  
activateformtemplate  

stsadm -o activateformtemplate
	-url &lt;URL to the site collection&gt;
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
  
add-ecsfiletrustedlocation  

stsadm -o add-ecsfiletrustedlocation
	-Ssp &lt;SSP name&gt;
	-Location &lt;URL|UNC&gt;
	-LocationType SharePoint|Unc|Http
	-IncludeChildren True|False
	[-SessionTimeout &lt;time in seconds&gt;]
	[-ShortSessionTimeout &lt;time in seconds&gt;]
	[-MaxRequestDuration &lt;time in seconds&gt;]
	[-MaxWorkbookSize &lt;file size in Mbytes&gt;]
	[-MaxChartSize &lt;size in Mbytes&gt;]
	[-VolatileFunctionCacheLifetime &lt;time in seconds&gt;]
	[-DefaultWorkbookCalcMode File|Manual|Auto|AutoDataTables]
	[-AllowExternalData None|Dcl|DclAndEmbedded]
	[-WarnOnDataRefresh True|False]
	[-StopOpenOnRefreshFailure True|False]
	[-PeriodicCacheLifetime &lt;time in seconds&gt;]
	[-ManualCacheLifetime &lt;time in seconds&gt;]
	[-MaxConcurrentRequestsPerSession &lt;number of requests&gt;]
	[-AllowUdfs True|False]
	[-Description &lt;descriptive text&gt;]
  
add-ecssafedataprovider  

stsadm -o add-ecssafedataprovider
	-Ssp &lt;SSP name&gt;
	-ID &lt;data provider id&gt;
	-Type Oledb|Odbc|OdbcDsn
	[-Description &lt;descriptive text&gt;]
  
add-ecstrusteddataconnectionlibrary  

stsadm -o add-ecstrusteddataconnectionlibrary
	-Ssp &lt;SSP name&gt;
	-Location &lt;URL&gt;
	[-Description &lt;descriptive text&gt;]
  
add-ecsuserdefinedfunction  

stsadm -o add-ecsuserdefinedfunction
	-Ssp &lt;SSP name&gt;
	-Assembly &lt;strong name|file path&gt;
	-AssemblyLocation GAC|File
	[-Enable True|False]
	[-Description &lt;descriptive text&gt;]
  
addalternatedomain  

stsadm.exe -o addalternatedomain
           -url &lt;protocol://existing.WebApplication.URLdomain&gt;
           -incomingurl &lt;protocol://incoming.url.domain&gt;
           -urlzone &lt;default, extranet, internet, intranet, custom&gt;
           -resourcename &lt;non-web application resource name&gt;
  
addcontentdb  

stsadm.exe -o addcontentdb 
           -url &lt;url&gt;
           -databasename &lt;database name&gt;
           [-databaseserver &lt;database server name&gt;]           
           [-databaseuser &lt;database username&gt;] 
           [-databasepassword &lt;database password&gt;]
           [-sitewarning &lt;site warning count&gt;]
           [-sitemax &lt;site max count&gt;]
           [-assignnewdatabaseid]
           [-clearchangelog]
  
adddataconnectionfile  

stsadm -o adddataconnectionfile
	-filename &lt;path to file to add&gt;
	[-webaccessible &lt;bool&gt;]
	[-overwrite &lt;bool&gt;]
	[-category &lt;bool&gt;]
  
addexemptuseragent  

stsadm -o addexemptuseragent
	-name &lt;user-agent to receive InfoPath files instead of a Web page&gt;
  
addpath  

stsadm.exe -o addpath 
           -url &lt;url&gt; 
           -type &lt;explicitinclusion/wildcardinclusion&gt;
  
addpermissionpolicy  

stsadm.exe -o addpermissionpolicy 
           -url &lt;url&gt; 
           -userlogin &lt;login name&gt;
           -permissionlevel &lt;permission policy level&gt;
           [-zone &lt;URL zone&gt;]
           [-username &lt;display name&gt;]
  
addsolution  

stsadm.exe -o addsolution
            -filename &lt;Solution filename&gt;
            [-lcid &lt;language&gt;]
  
addtemplate  

stsadm.exe -o addtemplate 
           -filename &lt;template filename&gt; 
           -title &lt;template title&gt; 
           [-description &lt;template description&gt;]
  
adduser  

stsadm.exe -o adduser
           -url &lt;url&gt;
           -userlogin &lt;DOMAIN\user&gt;
           -useremail &lt;someone@example.com&gt;
           -role &lt;role name&gt; / -group &lt;group name&gt;
           -username &lt;display name&gt;
           [-siteadmin]
  
addwppack  

stsadm.exe -o addwppack
                   -filename &lt;Web Part Package filename&gt;
                   [-lcid &lt;language&gt;]
                   [-url &lt;url&gt;]
                   [-globalinstall]
                   [-force]
                   [-nodeploy]
        
        stsadm.exe -o addwppack
                   -name &lt;name of Web Part Package&gt;
                   [-lcid &lt;language&gt;]
                   [-url &lt;url&gt;]
                   [-globalinstall]
                   [-force]
  
addzoneurl  

stsadm.exe -o addzoneurl
           -url &lt;protocol://existing.WebApplication.URLdomain&gt;
           -urlzone &lt;default, extranet, internet, intranet, custom&gt;
           -zonemappedurl &lt;protocol://outgoing.url.domain&gt;
           -resourcename &lt;non-web application resource name&gt;
  
allowuserformwebserviceproxy  

stsadm -o allowuserformwebserviceproxy
	-url &lt;Url of the web application&gt;
	-enable &lt;true to enable, false to disable&gt;
  
allowwebserviceproxy  

stsadm -o allowwebserviceproxy
	-url &lt;Url of the web application&gt;
	-enable &lt;true to enable, false to disable&gt;
  
associatewebapp  

stsadm -o associatewebapp
	-title &lt;SSP name&gt; [-default | -parent]
        -url &lt;Web application 1 url,Web application 2 url&gt; [-all]
  
authentication  

stsadm.exe -o authentication
           -url &lt;url&gt;
           -type &lt;windows/forms/websso&gt;
           [-usebasic (valid only in windows authentication mode)]
           [-usewindowsintegrated (valid only in windows authentication mode)]
           [-exclusivelyusentlm (valid only in windows authentication mode)]
           [-membershipprovider &lt;membership provider name&gt;]
           [-rolemanager &lt;role manager name&gt;]
           [-enableclientintegration]
           [-allowanonymous]
  
backup  

For site collection backup:
    stsadm.exe -o backup 
        -url &lt;url&gt;
        -filename &lt;filename&gt;
        [-overwrite]
        [-nositelock]

For catastrophic backup:
    stsadm.exe -o backup
        -directory &lt;UNC path&gt;
        -backupmethod &lt;full | differential&gt;
        [-item &lt;created path from tree&gt;]
        [-percentage &lt;integer between 1 and 100&gt;]
        [-backupthreads &lt;integer between 1 and 10&gt;]
        [-showtree]
        [-quiet]
        [-force]
  
backuphistory  

stsadm.exe -o backuphistory -directory &lt;UNC path&gt; [-backup] [-restore]
  
binddrservice  

stsadm.exe -o binddrservice 
           -servicename &lt;data retrieval service name&gt; 
           -setting &lt;data retrieval services setting&gt;
  
blockedfilelist  

stsadm.exe -o blockedfilelist 
       -extension &lt;extension&gt;
       -add
       [-url &lt;url&gt;]       

stsadm.exe -o blockedfilelist 
       -extension &lt;extension&gt;
       -delete
       [-url &lt;url&gt;]
  
canceldeployment  

stsadm.exe -o canceldeployment
            -id &lt;id&gt;
  
changepermissionpolicy  

stsadm.exe -o changepermissionpolicy 
           -url &lt;url&gt; 
           -userlogin &lt;DOMAIN\name&gt;
           [-zone &lt;URL zone&gt;]
           [-username &lt;display name&gt;]
           [{ -add | -delete }
                     -permissionlevel &lt;permission policy level&gt;]
  
copyappbincontent  

stsadm.exe -o copyappbincontent
  
createadminvs  

stsadm.exe -o createadminvs
           [-admapidname &lt;app pool name&gt;]
           [-admapidtype &lt;configurableid/NetworkService&gt;]
           [-admapidlogin &lt;DOMAIN\name&gt;]
           [-admapidpwd &lt;app pool password&gt;]
  
createcmsmigrationprofile  

stsadm -o createcmsmigrationprofile
	  -profilename &lt;profile name&gt; 
  	 [-description &lt;description&gt;] 
  	 [-connectionstring &lt;connection string&gt;] 
  	 -databaseserver &lt;server&gt; 
  	 -databasename &lt;name&gt; 
  	 -databaseuser &lt;username&gt; 
  	 [-databasepassword &lt;password&gt;] 
  	 [-auth windowsauth|sqlauth] 
  	 -destination &lt;url&gt; 
  	 [-rootchannel &lt;channelname&gt;] 
  	 [-destinationlocale &lt;LCID&gt;] 
  	 [-migrateresources onlyused|all] 
  	 [-migrateacls yes|no] 
  	 [-emailto &lt;address1;address2&gt;] 
  	 [-emailon success|failure|none|both] 
  	 [-keeptemporaryfiles Never|Always|Failure] 
  	 [-enableeventreceivers yes|no] 

  
creategroup  

stsadm.exe -o creategroup
           -url &lt;url&gt;
           -name &lt;group name&gt;
           -description &lt;description&gt;
           -ownerlogin &lt;DOMAIN\name or group name&gt;
           [-type member|visitor|owner]
  
createsite  

stsadm.exe -o createsite
            -url &lt;url&gt;
            -owneremail &lt;someone@example.com&gt; 
            [-ownerlogin &lt;DOMAIN\name&gt;]
            [-ownername &lt;display name&gt;]
            [-secondaryemail &lt;someone@example.com&gt;]
            [-secondarylogin &lt;DOMAIN\name&gt;]
            [-secondaryname &lt;display name&gt;]
            [-lcid &lt;language&gt;] 
            [-sitetemplate &lt;site template&gt;] 
            [-title &lt;site title&gt;] 
            [-description &lt;site description&gt;] 
            [-hostheaderwebapplicationurl &lt;web application url&gt;] 
            [-quota &lt;quota template&gt;]
  
createsiteinnewdb  

stsadm.exe -o createsiteinnewdb
            -url &lt;url&gt;
            -owneremail &lt;someone@example.com&gt; 
            [-ownerlogin &lt;DOMAIN\name&gt;]
            [-ownername &lt;display name&gt;]
            [-secondaryemail &lt;someone@example.com&gt;]            
            [-secondarylogin &lt;DOMAIN\name&gt;]
            [-secondaryname &lt;display name&gt;]
            [-lcid &lt;language&gt;] 
            [-sitetemplate &lt;site template&gt;] 
            [-title &lt;site title&gt;] 
            [-description &lt;site description&gt;] 
            [-hostheaderwebapplicationurl &lt;web application url&gt;] 
            [-quota &lt;quota template&gt;]
            [-databaseuser &lt;database username&gt;] 
            [-databasepassword &lt;database password&gt;]
            [-databaseserver &lt;database server name&gt;] 
            [-databasename &lt;database name&gt;]
  
createssp  

stsadm -o createssp
	-title &lt;SSP name&gt;
        -url &lt;Web application url&gt;
        -mysiteurl &lt;MySite Web application url&gt;
        -ssplogin &lt;username&gt;
        -indexserver &lt;index server&gt;
        -indexlocation &lt;index file path&gt;
        [-ssppassword &lt;password&gt;]
        [-sspdatabaseserver &lt;SSP database server&gt;]
        [-sspdatabasename &lt;SSP database name&gt;]
        [-sspsqlauthlogin &lt;SQL username&gt;]
        [-sspsqlauthpassword &lt;SQL password&gt;]
        [-searchdatabaseserver &lt;search database server&gt;]
        [-searchdatabasename &lt;search database name&gt;]
        [-searchsqlauthlogin &lt;SQL username&gt;]
        [-searchsqlauthpassword &lt;SQL password&gt;]
        [-ssl &lt;yes|no&gt;]
  
createweb  

stsadm.exe -o createweb  
           -url &lt;url&gt;
           [-lcid &lt;language&gt;]
           [-sitetemplate &lt;site template&gt;] 
           [-title &lt;site title&gt;] 
           [-description &lt;site description&gt;]
           [-convert]
           [-unique]
  
databaserepair  

stsadm.exe -o databaserepair
           -url &lt;url&gt;
           -databasename &lt;database name&gt;
           [-deletecorruption]
  
deactivatefeature  

stsadm.exe -o deactivatefeature 
           {-filename &lt;relative path to Feature.xml&gt; |
            -name &lt;feature folder&gt; |
            -id &lt;feature Id&gt;} 
           [-url &lt;url&gt;]
           [-force]
  
deactivateformtemplate  

stsadm -o deactivateformtemplate
	-url &lt;URL to the site collection&gt;
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
  
deleteadminvs  

stsadm.exe -o deleteadminvs
  
deletealternatedomain  

stsadm.exe -o deletealternatedomain
           -url &lt;ignored&gt;
           -incomingurl &lt;protocol://incoming.url.domain&gt;
  
deletecmsmigrationprofile  

stsadm -o deletecmsmigrationprofile
	  -profilename &lt;profile name&gt; 

  
deleteconfigdb  

stsadm.exe -o deleteconfigdb
  
deletecontentdb  

stsadm.exe -o deletecontentdb 
           -url &lt;url&gt;
           -databasename &lt;database name&gt;
           [-databaseserver &lt;database server name&gt;]
  
deletegroup  

stsadm.exe -o deletegroup
           -url &lt;url&gt; 
           -name &lt;group name&gt;
  
deletepath  

stsadm.exe -o deletepath 
           -url &lt;url&gt;
  
deletepermissionpolicy  

stsadm.exe -o deletepermissionpolicy 
           -url &lt;url&gt; 
           -userlogin &lt;login name&gt;
           [-zone &lt;URL zone&gt;]
  
deletesite  

stsadm.exe -o deletesite 
          [-url &lt;url&gt;
           -deleteadaccounts &lt;true/false&gt;]
          [-force
           -siteid &lt;site id&gt;
           -databasename &lt;database name&gt;
           -databaseserver &lt;database server name&gt;]
  
deletesolution  

stsadm.exe -o deletesolution
            -name &lt;Solution name&gt;
            [-override]
            [-lcid &lt;language&gt;]
  
deletessp  

stsadm -o deletessp
	-title &lt;SSP name&gt;
        [-deletedatabases]
  
deletessptimerjob  

stsadm -o deletessptimerjob
	-title &lt;SSP Name&gt; -jobid &lt;SSP Timer Job Id&gt;
  
deletetemplate  

stsadm.exe -o deletetemplate 
           -title &lt;template title&gt; 
           [-lcid &lt;language&gt;]
  
deleteuser  

stsadm.exe -o deleteuser 
           -url &lt;url&gt; 
           -userlogin &lt;DOMAIN\name&gt;
           [-group &lt;group&gt;]
  
deleteweb  

stsadm.exe -o deleteweb 
           [-url &lt;url&gt;]
           [-force
            -webid &lt;web id&gt;
            -databasename &lt;database name&gt;
            -databaseserver &lt;database server name&gt;]
  
deletewppack  

stsadm.exe -o deletewppack
           -name &lt;name of Web Part Package&gt;
           [-lcid &lt;language&gt;]
           [-url &lt;url&gt;]
  
deletezoneurl  

stsadm.exe -o deletezoneurl
           -url &lt;protocol://existing.WebApplication.URLdomain&gt;
           -urlzone &lt;default, extranet, internet, intranet, custom&gt;
           -resourcename &lt;non-web application resource name&gt;
  
deploysolution  

stsadm.exe -o deploysolution
            -name &lt;Solution name&gt;
           [-url &lt;virtual server url&gt;]
           [-allcontenturls]
           [-time &lt;time to deploy at&gt;]
           [-immediate]
           [-local]
           [-allowgacdeployment]
           [-allowcaspolicies]
           [-lcid &lt;language&gt;]
           [-force]
  
deploywppack  

stsadm.exe -o deploywppack
            -name &lt;Web Part Package name&gt;
           [-url &lt;virtual server url&gt;]
           [-time &lt;time to deploy at&gt;]
           [-immediate]
           [-local]
           [-lcid &lt;language&gt;]
           [-globalinstall]
           [-force]
  
disablessc  

stsadm.exe -o disablessc 
           -url &lt;url&gt;
  
displaysolution  

stsadm.exe -o displaysolution
            -name &lt;Solution name&gt;
  
editcmsmigrationprofile  

stsadm -o editcmsmigrationprofile
	  -profilename &lt;profile name&gt; 
  	 [-description &lt;description&gt;] 
  	 [-connectionstring &lt;connection string&gt;] 
  	 [-databaseserver &lt;server&gt;] 
  	 [-databasename &lt;name&gt;] 
  	 [-databaseuser &lt;username&gt;] 
  	 [-databasepassword &lt;password&gt;] 
  	 [-auth sqlauth|windowsauth] 
  	 [-emailto &lt;address1;address2&gt;] 
  	 [-emailon success|failure|none|both] 
  	 [-excludeschema ] 
  	 [-keeptemporaryfiles Never|Always|Failure] 
  	 [-enableeventreceivers yes|no] 

  
editcontentdeploymentpath  

stsadm -o editcontentdeploymentpath
	  -pathname &lt;path name&gt; 
  	 [-keeptemporaryfiles Never|Always|Failure] 
  	 [-enableeventreceivers yes|no] 
  	 [-enablecompression yes|no] 

  
editssp  

stsadm -o editssp
	-title &lt;SSP name&gt;
        [-newtitle &lt;new SSP name&gt;]
        [-sspadminsite &lt;administration site url&gt;]
        [-ssplogin &lt;username&gt;]
        [-ssppassword &lt;password&gt;]
        [-indexserver &lt;index server&gt;]
        [-indexlocation &lt;index file path&gt;]
        [-setaccounts &lt;process accounts (domain\username)&gt;]
        [-ssl &lt;yes|no&gt;]
  
email  

stsadm.exe -o email 
           -outsmtpserver &lt;SMTP server&gt;
           -fromaddress &lt;someone@example.com&gt;
           -replytoaddress &lt;someone@example.com&gt;
           -codepage &lt;codepage&gt;
           [-url &lt;url&gt;]
  
enablecmsurlredirect  

stsadm -o enablecmsurlredirect
	   -profilename &lt;profile name&gt; 
   	   -off 

  
enablessc  

stsadm.exe -o enablessc 
           -url &lt;url&gt; 
           [-requiresecondarycontact]
  
enumallwebs  

stsadm.exe -o enumallwebs
           -databasename &lt;database name&gt;
           [-databaseserver &lt;database server name&gt;]
  
enumalternatedomains  

stsadm.exe -o enumalternatedomains
           -url &lt;protocol://existing.WebApplication.URLdomain&gt;
           -resourcename &lt;non-web application resource name&gt;
  
enumcontentdbs  

stsadm.exe -o enumcontentdbs
           -url &lt;url&gt;
  
enumdataconnectionfiledependants  

stsadm -o enumdataconnectionfiledependants
	-filename &lt;filename for which to enumerate dependants&gt;
  
enumdataconnectionfiles  

stsadm -o enumdataconnectionfiles
	[-mode &lt;a | u | all | unreferenced&gt;]
  
enumdeployments  

stsadm.exe -o enumdeployments 
  
enumexemptuseragents  

stsadm -o enumexemptuseragents
	
  
enumformtemplates  

stsadm -o enumformtemplates
	
  
enumgroups  

stsadm.exe -o enumgroups
           -url &lt;url&gt;
  
enumroles  

stsadm.exe -o enumroles 
           -url &lt;url&gt;
  
enumservices  

stsadm.exe -o enumservices
  
enumsites  

stsadm.exe -o enumsites 
           -url &lt;virtual server url&gt;
           -showlocks
           -redirectedsites
           [-databasename &lt;database name&gt;]
  
enumsolutions  

stsadm.exe -o enumsolutions 
  
enumssp  

stsadm -o enumssp
	-title &lt;SSP name&gt; [-default | -parent | -all]
  
enumssptimerjobs  

stsadm -o enumssptimerjobs
	-title &lt;SSP Name&gt;
  
enumsubwebs  

stsadm.exe -o enumsubwebs 
           -url &lt;url&gt;
  
enumtemplates  

stsadm.exe -o enumtemplates 
           [-lcid &lt;language&gt;]
  
enumusers  

stsadm.exe -o enumusers
           -url &lt;url&gt;
  
enumwppacks  

stsadm.exe -o enumwppacks
           [-name &lt;name of Web Part Package&gt;]
           [-url &lt;virtual server url&gt;]
           [-farm]
  
enumzoneurls  

stsadm.exe -o enumzoneurls
           -url &lt;protocol://existing.WebApplication.URLdomain&gt;
           -resourcename &lt;non-web application resource name&gt;
  
execadmsvcjobs  

stsadm.exe -o execadmsvcjobs
  
export  

stsadm.exe -o export
           -url &lt;URL to be exported&gt;
           -filename &lt;export file name&gt;
               [-overwrite]
           [-includeusersecurity]
           [-haltonwarning]
           [-haltonfatalerror]
           [-nologfile]
           [-versions &lt;1-4&gt;
               1 - Last major version for files and list items (default)
               2 - The current version, either the last major or the last minor
               3 - Last major and last minor version for files and list items
               4 - All versions for files and list items]
           [-cabsize &lt;integer from 1-1024 megabytes&gt; (default: 25)]
           [-nofilecompression]
           [-quiet]
  
exportipfsadminobjects  

stsadm -o exportipfsadminobjects
	-filename &lt;path to file&gt;
  
extendvs  

stsadm.exe -o extendvs 
           -url &lt;url&gt;
           -ownerlogin &lt;domain\name&gt; 
           -owneremail &lt;someone@example.com&gt; 
           [-exclusivelyusentlm]
           [-ownername &lt;display name&gt;] 
           [-databaseuser &lt;database user&gt;] 
           [-databaseserver &lt;database server&gt;] 
           [-databasename &lt;database name&gt;]
           [-databasepassword &lt;database user password&gt;] 
           [-lcid &lt;language&gt;] 
           [-sitetemplate &lt;site template&gt;]
           [-donotcreatesite]
           [-description &lt;iis web site name&gt;]
           [-sethostheader]
           [-apidname &lt;app pool name&gt;] 
           [-apidtype &lt;configurableid/NetworkService&gt;]
           [-apidlogin &lt;DOMAIN\name&gt;]
           [-apidpwd &lt;app pool password&gt;]
           [-allowanonymous]
  
extendvsinwebfarm  

stsadm.exe -o extendvsinwebfarm 
           -url &lt;url&gt; 
           -vsname &lt;web application name&gt;
           [-exclusivelyusentlm]
           [-apidname &lt;app pool name&gt;] 
           [-apidtype &lt;configurableid/NetworkService&gt;]
           [-apidlogin &lt;DOMAIN\name&gt;]
           [-apidpwd &lt;app pool password&gt;]
           [-allowanonymous]
  
forcedeletelist  

stsadm.exe -o forcedeletelist
           -url &lt;url&gt;
  
formtemplatequiescestatus  

stsadm -o formtemplatequiescestatus
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
  
getadminport  

stsadm.exe -o getadminport
  
getdataconnectionfileproperty  

stsadm -o getdataconnectionfileproperty
	-filename &lt;filename of the data connection file&gt;
	-pn &lt;property name&gt;
  
getformsserviceproperty  

stsadm -o getformsserviceproperty
	-pn &lt;option name&gt;
  
getformtemplateproperty  

stsadm -o getformtemplateproperty
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
	-pn &lt;property name&gt;
  
getproperty  

stsadm.exe -o getproperty 
           -propertyname &lt;property name&gt;
           [-url &lt;url&gt;]

SharePoint cluster properties:
	avallowdownload
	avcleaningenabled
	avdownloadscanenabled
	avnumberofthreads
	avtimeout
	avuploadscanenabled
	command-line-upgrade-running
	database-command-timeout
	database-connection-timeout
	data-retrieval-services-enabled
	data-retrieval-services-oledb-providers
	data-retrieval-services-response-size
	data-retrieval-services-timeout
	data-retrieval-services-update
	data-source-controls-enabled
	dead-site-auto-delete
	dead-site-notify-after
	dead-site-num-notifications
	defaultcontentdb-password
	defaultcontentdb-server
	defaultcontentdb-user
	delete-web-send-email
	irmaddinsenabled
	irmrmscertserver
	irmrmsenabled
	irmrmsusead
	job-ceip-datacollection
	job-config-refresh
	job-database-statistics
	job-dead-site-delete
	job-usage-analysis
	job-watson-trigger
	large-file-chunk-size
	token-timeout
	workflow-cpu-throttle
	workflow-eventdelivery-batchsize
	workflow-eventdelivery-throttle
	workflow-eventdelivery-timeout
	workflow-timerjob-cpu-throttle
	workitem-eventdelivery-batchsize
	workitem-eventdelivery-throttle

SharePoint virtual server properties:
	alerts-enabled
	alerts-limited
	alerts-maximum
	change-log-expiration-enabled
	change-log-expiration-enabled
	change-log-retention-period
	change-log-retention-period
	data-retrieval-services-enabled
	data-retrieval-services-inherit
	data-retrieval-services-oledb-providers
	data-retrieval-services-response-size
	data-retrieval-services-timeout
	data-retrieval-services-update
	data-source-controls-enabled
	days-to-show-new-icon
	dead-site-auto-delete
	dead-site-notify-after
	dead-site-num-notifications
	defaultquotatemplate
	defaulttimezone
	delete-web-send-email
	event-log-retention-period
	job-change-log-expiration
	job-dead-site-delete
	job-diskquota-warning
	job-immediate-alerts
	job-recycle-bin-cleanup
	job-usage-analysis
	job-workflow
	job-workflow-autoclean
	job-workflow-failover
	max-file-post-size
	peoplepicker-activedirectorysearchtimeout
	peoplepicker-distributionlistsearchdomains
	peoplepicker-nowindowsaccountsfornonwindowsauthenticationmode
	peoplepicker-onlysearchwithinsitecollection
	peoplepicker-searchadcustomfilter
	peoplepicker-searchadcustomquery
	peoplepicker-searchadforests
	peoplepicker-serviceaccountdirectorypaths
	presenceenabled
	recycle-bin-cleanup-enabled
	recycle-bin-enabled
	recycle-bin-retention-period
	richtexteditorshortcutenabled
	second-stage-recycle-bin-quota
	send-ad-email

  
getsitedirectoryscanschedule  

stsadm -o getsitedirectoryscanschedule
	
  
getsitelock  

stsadm.exe -o getsitelock  
           -url &lt;url&gt;
  
getsiteuseraccountdirectorypath  

stsadm.exe -o getsiteuseraccountdirectorypath
           -url &lt;url&gt;
  
geturlzone  

stsadm.exe -o geturlzone
           -url &lt;protocol://incoming.url.domain&gt;
  
grantiis7permission  

stsadm.exe -o grantiis7permission
  
import  

stsadm.exe -o import
           -url &lt;URL to import to&gt;
           -filename &lt;import file name&gt;
           [-includeusersecurity]
           [-haltonwarning]
           [-haltonfatalerror]
           [-nologfile]
           [-updateversions &lt;1-3&gt;
               1 - Add new versions to the current file (default)
               2 - Overwrite the file and all its versions (delete then insert)
               3 - Ignore the file if it exists on the destination]
           [-nofilecompression]
           [-quiet]
  
installfeature  

stsadm.exe -o installfeature 
           {-filename &lt;relative path to Feature.xml from system feature directory&gt; | 
            -name &lt;feature folder&gt;}
           [-force]
  
listlogginglevels  

stsadm.exe -o listlogginglevels [-showhidden]
  
listqueryprocessoroptions  

stsadm -o listqueryprocessoroptions
	
    -ssp &lt;ssp name&gt;
  
listregisteredsecuritytrimmers  

stsadm -o listregisteredsecuritytrimmers
	
    -ssp &lt;ssp name&gt;
  
localupgradestatus  

stsadm.exe -o localupgradestatus
  
managepermissionpolicylevel  

stsadm.exe -o managepermissionpolicylevel 
           -url &lt;url&gt; 
           -name &lt;permission policy level name&gt;
           [{ -add | -delete }]
           [-description &lt;description&gt;]
           [-siteadmin &lt;true | false&gt;]
           [-siteauditor &lt;true | false&gt;]
           [-grantpermissions &lt;comma-separated list of permissions&gt;]
           [-denypermissions &lt;comma-separated list of permissions&gt;]
  
mergecontentdbs  

stsadm.exe -o mergecontentdbs
           -url &lt;url&gt;
           -sourcedatabasename &lt;source database name&gt;
           -destinationdatabasename &lt;destination datbabase name&gt;
           [-operation &lt;1-3&gt;
                1 - Analyze (default)
                2 - Full Database Merge
                3 - Read from file]
           [-filename &lt;file generated from stsadm -o enumsites&gt;]

See also:
     stsadm -o enumcontentdbs -url &lt;url&gt;
     stsadm -o enumsites -url &lt;url&gt; -databasename &lt;database&gt;

  
migrateuser  

stsadm.exe -o migrateuser 
           -oldlogin &lt;DOMAIN\name&gt;
           -newlogin &lt;DOMAIN\name&gt;
           [-ignoresidhistory]
  
mlstaddcrawlerjob  

stsadm -o mlstaddcrawlerjob
	
  
mlstaddfilter  

stsadm -o mlstaddfilter
	-scope &lt;farm | webapp | site | web | list&gt;
	[-url &lt;url of web application, site collection, site or list&gt;]
	[-fieldid &lt;RequestUrl | RequestUrlReferrer | RequestUserAgent | RequestHostAddress | RequestHostName | 
		RequestAuthType | RequestIsAuthenticated | RequestAuthenticationName | ItemEvent | 
		ItemDisplayName | ItemName | ItemTitle | ItemCreated | ListTitle | ListDescription | 
		ListDefaultViewUrl | ListBaseTemplate | ListBaseType | DocumentName | DocumentCreated | 
		DocumentTitle | DocumentUrl | DocumentLenght | DocumentFolderName | UserAnonimous | 
		UserLoginName | UserEmail | UserName | UserNotes | UserIsSiteAdmin | UserIsSiteAuditor&gt;]
	[-relop &lt;Greather | GreatherOrEqual | Less | LessOrEqual | Equal | NotEqual | True | False | StartsWith | 
		EndsWith | Contains | NotContains | Empty | NotEmpty | MatchRegex | NotMatchRegex&gt;]
	[-expression &lt;filter expression&gt;]
	[-fromscratch]
  
mlstcompleteupgrade  

stsadm -o mlstcompleteupgrade
	[-restartsptimer]
	[-copyappbincontent]
  
mlstcopyappbincontent  

stsadm -o mlstcopyappbincontent
	
  
mlstdeployeventreceivers  

stsadm -o mlstdeployeventreceivers
	
  
mlstdisplayfilter  

stsadm -o mlstdisplayfilter
	-scope &lt;farm | webapp | site | web | list&gt;
	[-url &lt;url of web application, site collection, site or list&gt;]
	[-effective]
  
mlstdisplaypolicies  

stsadm -o mlstdisplaypolicies
	
  
mlstenableliststatistics  

stsadm -o mlstenableliststatistics
	-url &lt;List url&gt;
	-enable &lt;true|false&gt;
  
mlstremovefilter  

stsadm -o mlstremovefilter
	-scope &lt;farm | webapp | site | web | list&gt;
	[-url &lt;url of web application, site collection, site or list&gt;]
	{-ruleid &lt;filter rule identifier&gt; |
	 -all}
  
mlstresetfilter  

stsadm -o mlstresetfilter
	-scope &lt;farm | webapp | site | web | list&gt;
	[-url &lt;url of web application, site collection, site or list&gt;]
  
mlstrestartsptimer  

stsadm -o mlstrestartsptimer
	
  
mlstsetpolicy  

stsadm -o mlstsetpolicy
	[-maskusername &lt;true | false&gt;]
	[-maskadgroup &lt;true | false&gt;]
	[-maskaddepartment &lt;true | false&gt;]
	[-maskspgroup &lt;true | false&gt;]
	[-maskurl &lt;true | false&gt;]
	[-maskdocname &lt;true | false&gt;]
	[-maskdoclocation &lt;true | false&gt;]
	[-masklistname &lt;true | false&gt;]
	[-masklistlocation &lt;true | false&gt;]
	[-disablereport &lt;report id&gt;]
	[-enablereport &lt;report id&gt;]
  
mysite  

stsadm -o mysite
	-title &lt;SSP name&gt; -usemysitelanguage &lt;0 or 1&gt;
  
osearch  

stsadm -o osearch
	
    [-action &lt;list|start|stop|showdefaultsspadmin&gt;] required parameters
              for 'start' (if not already set): role, farmcontactemail,
              service credentials
    [-f (suppress prompts)]
    [-role &lt;Index|Query|IndexQuery&gt;]
    [-farmcontactemail &lt;email&gt;]
    [-farmperformancelevel &lt;Reduced|PartlyReduced|Maximum&gt;]
    [-farmserviceaccount &lt;DOMAIN\name&gt; (service credentials)]
    [-farmservicepassword &lt;password&gt;]
    [-defaultindexlocation &lt;directory&gt;]
    [-propagationlocation &lt;directory&gt;]
    [-reprovisionindex]
    [-cleansearchdatabase &lt;true|false&gt;]
    [-ssp &lt;ssp name&gt;] required parameter for 'cleansearchdatabase' and
              'reprovisionindex'
  
osearchdiacriticsensitive  

stsadm -o osearchdiacriticsensitive
	    -ssp &lt;ssp name&gt;
            [-setstatus &lt;True|False&gt;] 
            [-noreset]
            [-force]
  
preparetomove  

stsadm -o preparetomove
	   {-ContentDB &lt;DatabaseServer:DatabaseName&gt; |
            -Site &lt;URL&gt;}
           [-OldContentDB &lt;uniqueidentifier&gt;]
           [-undo]
  
preupgradecheck  

stsadm.exe -o preupgradecheck 
                   [ -rulefiles &lt;rule files delimited by comma or semicolon.&gt; ]
                   [ -listrulefiles ]
                   [ -localonly ]

             The preupgrade checker does not perform any repairs, but instead only
             checks for issues and outputs the list of issues and possible remedies to the issues.
             
  
profilechangelog  

stsadm -o profilechangelog
	-title &lt;SSP Name&gt; -daysofhistory &lt;number of days&gt; -generateanniversaries
  
profiledeletehandler  

stsadm -o profiledeletehandler
	-type &lt;Full Assembly Path&gt;
  
provisionservice  

stsadm.exe -o provisionservice -action &lt;start/stop&gt; -servicetype &lt;servicetype
               (namespace or assembly qualified name if not SharePoint service)&gt;
                  [-servicename &lt;servicename&gt;]
  
quiescefarm  

stsadm -o quiescefarm
	-maxduration &lt;duration in minutes&gt;
  
quiescefarmstatus  

stsadm -o quiescefarmstatus
	
  
quiesceformtemplate  

stsadm -o quiesceformtemplate
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
	-maxduration &lt;time in minutes&gt;
  
reconvertallformtemplates  

stsadm -o reconvertallformtemplates
	
  
refreshdms  

stsadm.exe -o refreshdms
           -url &lt;url&gt;
  
refreshsitedms  

stsadm.exe -o refreshsitedms
           -url &lt;url&gt;
  
registersecuritytrimmer  

stsadm -o registersecuritytrimmer
	
    -ssp &lt;ssp name&gt;
    -id &lt;0 - 2147483647&gt;
    -typename &lt;assembly qualified TypeName of ISecurityTrimmer implementation&gt;
    -rulepath &lt;crawl rule URL&gt;
    [-configprops &lt;name value pairs delimited by '~'&gt;]

    Example:
        stsadm -o registersecuritytrimmer -ssp SharedServices1 -id 0 -typeName "Microsoft.Office.Server.ApplicationRegistry.Search.QueryProcessorSecurityTrimmer, Microsoft.SharePoint.Portal, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" -rulepath bdc2://* -configprops name1~value1~name2~value2
  
registerwsswriter  

stsadm.exe -o registerwsswriter
  
remove-ecsfiletrustedlocation  

stsadm -o remove-ecsfiletrustedlocation
	-Ssp &lt;SSP name&gt;
	-Location &lt;URL|UNC&gt;
	-LocationType SharePoint|Unc|Http
  
remove-ecssafedataprovider  

stsadm -o remove-ecssafedataprovider
	-Ssp &lt;SSP name&gt;
	-ID &lt;data provider id&gt;
	-Type Oledb|Odbc|OdbcDsn
  
remove-ecstrusteddataconnectionlibrary  

stsadm -o remove-ecstrusteddataconnectionlibrary
	-Ssp &lt;SSP name&gt;
	-Location &lt;URL&gt;
  
remove-ecsuserdefinedfunction  

stsadm -o remove-ecsuserdefinedfunction
	-Ssp &lt;SSP name&gt;
	-Assembly &lt;strong name|file path&gt;
	-AssemblyLocation GAC|File
  
removedataconnectionfile  

stsadm -o removedataconnectionfile
	-filename &lt;filename to remove&gt;
  
removedrservice  

stsadm.exe -o removedrservice 
           -servicename &lt;data retrieval service name&gt;
           -setting &lt;data retrieval services setting&gt;
  
removeexemptuseragent  

stsadm -o removeexemptuseragent
	-name &lt;user-agent to receive InfoPath files instead of a Web page&gt;
  
removeformtemplate  

stsadm -o removeformtemplate
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
  
removesolutiondeploymentlock  

stsadm.exe -o removesolutiondeploymentlock
            [-server &lt;server&gt;
            [-allservers]
  
renameserver  

stsadm.exe -o renameserver 
           -oldservername &lt;oldServerName&gt;
           -newservername &lt;newServerName&gt;
  
renamesite  

stsadm.exe -o renamesite
           -oldurl &lt;oldUrl&gt; 
           -newurl &lt;newUrl&gt;
  
renameweb  

stsadm.exe -o renameweb 
           -url &lt;url&gt; 
           -newname &lt;new subsite name&gt;
  
restore  

For site collection restore:
    stsadm.exe -o restore
        -url &lt;url&gt;
        -filename &lt;filename&gt;
        [-hostheaderwebapplicationurl &lt;web application url&gt;] 
        [-overwrite]

For catastrophic restore:
    stsadm.exe -o restore 
        -directory &lt;UNC path&gt;
        -restoremethod &lt;overwrite | new&gt;
        [-backupid &lt;Id from backuphistory, see stsadm -help backuphistory&gt;]
        [-item &lt;created path from tree&gt;]
        [-percentage &lt;integer between 1 and 100&gt;]
        [-showtree]
        [-suppressprompt]
        [-username &lt;username&gt;]
        [-password &lt;password&gt;]
        [-newdatabaseserver &lt;new database server name&gt;]
        [-preservechangelog]
        [-quiet]
  
restoressp  

stsadm -o restoressp
	-title &lt;SSP name&gt;
                -url &lt;Web application url&gt;
                -ssplogin &lt;username&gt;
                -mysiteurl &lt;MySite Web application url&gt;
                -indexserver &lt;index server&gt;
                -indexlocation &lt;index file path&gt;
                [-keepindex]
                -sspdatabaseserver &lt;SSP database server&gt;
                -sspdatabasename &lt;SSP database name&gt;
                [-ssppassword &lt;password&gt;]
                [-sspsqlauthlogin &lt;SQL username&gt;]
                [-sspsqlauthpassword &lt;SQL password&gt;]
                [-searchdatabaseserver &lt;search database server&gt;]
                [-searchdatabasename &lt;search database name&gt;]
                [-searchsqlauthlogin &lt;SQL username&gt;]
                [-searchsqlauthpassword &lt;SQL password&gt;]
                [-ssl &lt;yes|no&gt;]
  
retractsolution  

stsadm.exe -o retractsolution
            -name &lt;Solution name&gt;
           [-url &lt;virtual server url&gt;]
           [-allcontenturls]
           [-time &lt;time to remove at&gt;]
           [-immediate]
           [-local]
           [-lcid &lt;language&gt;]
  
retractwppack  

stsadm.exe -o retractwppack
            -name &lt;Web Part Package name&gt;
           [-url &lt;virtual server url&gt;]
           [-time &lt;time to retract at&gt;]
           [-immediate]
           [-local]
           [-lcid &lt;language&gt;]
  
runcmsmigrationprofile  

stsadm -o runcmsmigrationprofile
	  -profilename &lt;profile name&gt; 
  	 [-skipanalyzer ] 
  	 [-onlyanalyzer ] 
  	 [-startover ] 
  	 [-migratesincetime &lt;DateTime string&gt;] 
  	 [-migrationfolder &lt;path&gt;] 
  	 [-exportonly ] 
  	 [-importonly ] 
  	 [-htmldiff &lt;path&gt;] 

  
runcontentdeploymentjob  

stsadm -o runcontentdeploymentjob
	  -jobname &lt;name&gt; 
  	 [-wait yes|no] 
  	 [-deploysincetime &lt;datetime&gt;] 

  	 The &lt;datetime&gt; parameter should be in the format "MM/DD/YY HH:MM:SS" 
  
scanforfeatures  

stsadm.exe -o scanforfeatures 
           [-solutionid &lt;Id of Solution&gt;]
           [-displayonly]
  
set-ecsexternaldata  

stsadm -o set-ecsexternaldata
	-Ssp &lt;SSP name&gt;
	[-ConnectionLifetime &lt;time in seconds&gt;]
	[-UnattendedServiceAccountName &lt;account name&gt;]
	[-UnattendedServiceAccountPassword &lt;account password&gt;]
  
set-ecsloadbalancing  

stsadm -o set-ecsloadbalancing
	-Ssp &lt;SSP name&gt;
	[-Scheme WorkbookUrl|RoundRobin|Local]
	[-RetryInterval &lt;time in seconds&gt;]
  
set-ecsmemoryutilization  

stsadm -o set-ecsmemoryutilization
	-Ssp &lt;SSP name&gt;
	[-MaxPrivateBytes &lt;memory in MBytes&gt;]
	[-MemoryCacheThreshold &lt;percentage&gt;]
	[-MaxUnusedObjectAge &lt;time in minutes&gt;]
  
set-ecssecurity  

stsadm -o set-ecssecurity
	-Ssp &lt;SSP name&gt;
	[-FileAccessMethod UseImpersonation|UseFileAccessAccount]
	[-AccessModel Delegation|TrustedSubsystem]
	[-RequireEncryptedUserConnection False|True]
	[-AllowCrossDomainAccess True|False]
  
set-ecssessionmanagement  

stsadm -o set-ecssessionmanagement
	-Ssp &lt;SSP name&gt;
	[-MaxSessionsPerUser &lt;number of sessions&gt;]
  
set-ecsworkbookcache  

stsadm -o set-ecsworkbookcache
	-Ssp &lt;SSP name&gt;
	[-Location &lt;local or UNC path&gt;]
	[-MaxCacheSize &lt;storage in Mbytes&gt;]
	[-EnableCachingOfUnusedFiles True|False]
  
setadminport  

stsadm.exe -o setadminport 
           -port &lt;port&gt; 
           [-ssl]
           [-admapcreatenew]
           [-admapidname &lt;app pool name&gt;]
  
setapppassword  

stsadm.exe -o setapppassword
           -password &lt;password&gt;
  
setbulkworkflowtaskprocessingschedule  

stsadm -o setbulkworkflowtaskprocessingschedule
	-schedule &lt;recurrence string&gt;
  
setconfigdb  

stsadm.exe -o setconfigdb 
           [-connect]
           -databaseserver &lt;database server&gt;
           [-databaseuser &lt;database user&gt;]
           [-databasepassword &lt;database user password&gt;]
           [-databasename &lt;database name&gt;]
           [-exclusivelyusentlm]
           [-farmuser]
           [-farmpassword]
           [-adcreation]
           [-addomain &lt;Active Directory domain&gt;]
           [-adou &lt;Active Directory OU&gt;]
  
setcontentdeploymentjobschedule  

stsadm -o setcontentdeploymentjobschedule
	  -jobname &lt;name&gt; 
  	 -schedule &lt;schedule&gt; 

   	 Schedule Parameter Examples:  
 
    		  "every 5 minutes between 0 and 59" 
    		  "hourly between 0 and 59" 
    		  "daily at 15:00:00" 
    		  "weekly between Fri 22:00:00 and Sun 06:00:00" 
    		  "monthly at 15 15:00:00" 
    		  "yearly at Jan 1 15:00:00" 
 
  
setdataconnectionfileproperty  

stsadm -o setdataconnectionfileproperty
	-filename &lt;filename of the data connection file&gt;
	-pn &lt;property name&gt;
	-pv &lt;property value&gt;
  
setdefaultssp  

stsadm -o setdefaultssp
	-title &lt;SSP name&gt;
  
setformsserviceproperty  

stsadm -o setformsserviceproperty
	-pn &lt;option name&gt;
	-pv &lt;option value&gt;
  
setformtemplateproperty  

stsadm -o setformtemplateproperty
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
	-pn &lt;property name&gt;
	-pv &lt;property value&gt;
  
setholdschedule  

stsadm -o setholdschedule
	-schedule &lt;recurrence string&gt;
  
setlogginglevel  

stsadm.exe -o setlogginglevel
  [-category &lt; [CategoryName | Manager:CategoryName [;...]] &gt;]
  {-default | 
   -tracelevel
        &lt; None;
        Unexpected;
        Monitorable;
        High;
        Medium;
        Verbose;
        &gt;
  [-windowslogginglevel
        &lt; None;
        ErrorServiceUnavailable;
        ErrorSecurityBreach;
        ErrorCritical;
        Error;
        Warning;
        FailureAudit;
        SuccessAudit;
        Information;
        Success;
        &gt;]
  }
  
setpolicyschedule  

stsadm -o setpolicyschedule
	-schedule &lt;recurrence string&gt;
  
setproperty  

stsadm.exe -o setproperty 
           -propertyname &lt;property name&gt;
           -propertyvalue &lt;property value&gt;
           [-url &lt;url&gt;]

SharePoint cluster properties:
	avallowdownload
	avcleaningenabled
	avdownloadscanenabled
	avnumberofthreads
	avtimeout
	avuploadscanenabled
	command-line-upgrade-running
	database-command-timeout
	database-connection-timeout
	data-retrieval-services-enabled
	data-retrieval-services-oledb-providers
	data-retrieval-services-response-size
	data-retrieval-services-timeout
	data-retrieval-services-update
	data-source-controls-enabled
	dead-site-auto-delete
	dead-site-notify-after
	dead-site-num-notifications
	defaultcontentdb-password
	defaultcontentdb-server
	defaultcontentdb-user
	delete-web-send-email
	irmaddinsenabled
	irmrmscertserver
	irmrmsenabled
	irmrmsusead
	job-ceip-datacollection
	job-config-refresh
	job-database-statistics
	job-dead-site-delete
	job-usage-analysis
	job-watson-trigger
	large-file-chunk-size
	token-timeout
	workflow-cpu-throttle
	workflow-eventdelivery-batchsize
	workflow-eventdelivery-throttle
	workflow-eventdelivery-timeout
	workflow-timerjob-cpu-throttle
	workitem-eventdelivery-batchsize
	workitem-eventdelivery-throttle

SharePoint virtual server properties:
	alerts-enabled
	alerts-limited
	alerts-maximum
	change-log-expiration-enabled
	change-log-expiration-enabled
	change-log-retention-period
	change-log-retention-period
	data-retrieval-services-enabled
	data-retrieval-services-inherit
	data-retrieval-services-oledb-providers
	data-retrieval-services-response-size
	data-retrieval-services-timeout
	data-retrieval-services-update
	data-source-controls-enabled
	days-to-show-new-icon
	dead-site-auto-delete
	dead-site-notify-after
	dead-site-num-notifications
	defaultquotatemplate
	defaulttimezone
	delete-web-send-email
	event-log-retention-period
	job-change-log-expiration
	job-dead-site-delete
	job-diskquota-warning
	job-immediate-alerts
	job-recycle-bin-cleanup
	job-usage-analysis
	job-workflow
	job-workflow-autoclean
	job-workflow-failover
	max-file-post-size
	peoplepicker-activedirectorysearchtimeout
	peoplepicker-distributionlistsearchdomains
	peoplepicker-nowindowsaccountsfornonwindowsauthenticationmode
	peoplepicker-onlysearchwithinsitecollection
	peoplepicker-searchadcustomfilter
	peoplepicker-searchadcustomquery
	peoplepicker-searchadforests
	peoplepicker-serviceaccountdirectorypaths
	presenceenabled
	recycle-bin-cleanup-enabled
	recycle-bin-enabled
	recycle-bin-retention-period
	richtexteditorshortcutenabled
	second-stage-recycle-bin-quota
	send-ad-email

  
setqueryprocessoroptions  

stsadm -o setqueryprocessoroptions
	
    -ssp &lt;ssp name&gt;
    [-securitytrimmingcachesize &lt;security trimming cache size&gt;]
    [-securitytrimmingmultiplier &lt;security trimming overfetch multiplier&gt;]
    [-nearduplicatemultiplier &lt;duplicate removal overfetch multiplier&gt;]
    [-joinmultiplier &lt;join discard overfetch multiplier&gt;]
    [-sdidjoinmultiplier &lt;missing security descriptor overfetch multiplier&gt;]

  
setrecordsrepositoryschedule  

stsadm -o setrecordsrepositoryschedule
	-schedule &lt;recurrence string&gt;
  
setsearchandprocessschedule  

stsadm -o setsearchandprocessschedule
	-schedule &lt;recurrence string&gt;
  
setsharedwebserviceauthn  

stsadm -o setsharedwebserviceauthn
	-ntlm | -negotiate
  
setsitedirectoryscanschedule  

stsadm -o setsitedirectoryscanschedule
	-schedule &lt;recurrence string&gt;

Schedule parameter examples:
		"every 5 minutes between 0 and 59"
		"hourly between 0 and 59"
		"daily at 15:00:00"
		"weekly between Fri 22:00:00 and Sun 06:00:00"
		"monthly at 15 15:00:00"
		"yearly at Jan 1 15:00:00"

  
setsitelock  

stsadm.exe -o setsitelock  
           -url &lt;url&gt;
           -lock &lt;none | noadditions | readonly | noaccess&gt;
  
setsiteuseraccountdirectorypath  

stsadm.exe -o setsiteuseraccountdirectorypath 
           -url &lt;url&gt; 
           [-path &lt;path&gt;]
  
setsspport  

stsadm -o setsspport
	-httpport &lt;HTTP port number&gt;
        -httpsport &lt;HTTPS port number&gt;
  
setworkflowconfig  

stsadm.exe -o setworkflowconfig 
           -url &lt;url&gt;
           {-emailtonopermissionparticipants &lt;enable|disable&gt; |
            -externalparticipants &lt;enable|disable&gt; |
            -userdefinedworkflows &lt;enable|disable&gt;}
  
siteowner  

stsadm.exe -o siteowner 
           -url &lt;url&gt; 
           [-ownerlogin &lt;DOMAIN\name&gt;] 
           [-secondarylogin &lt;DOMAIN\name&gt;]
  
spsearch  

stsadm -o spsearch
	
    [-action &lt;list|start|stop|attachcontentdatabase|detachcontentdatabase|fullcrawlstart|fullcrawlstop&gt;]
    [-f (suppress prompts)]
    [-farmperformancelevel &lt;Reduced|PartlyReduced|Maximum&gt;]
    [-farmserviceaccount &lt;DOMAIN\name&gt; (service credentials)]
    [-farmservicepassword &lt;password&gt;]
    [-farmcontentaccessaccount &lt;DOMAIN\name&gt;]
    [-farmcontentaccesspassword &lt;password&gt;]
    [-indexlocation &lt;new index location&gt;]
    [-databaseserver &lt;server\instance&gt; (default: rvn00-dr-spdb)]
    [-databasename &lt;database name&gt; (default: WSS_Search_RVN00-DR-SPWEB)]
    [-sqlauthlogin &lt;SQL authenticated database user&gt;]
    [-sqlauthpassword &lt;password&gt;]

    -action list

    -action stop
       [-f (suppress prompts)]

    -action start
       -farmserviceaccount &lt;DOMAIN\name&gt; (service credentials)
       [-farmservicepassword &lt;password&gt;]

    -action attachcontentdatabase
       [-databaseserver &lt;server\instance&gt; (default: rvn00-dr-spdb)]
       -databasename &lt;content database name&gt;
       [-searchserver &lt;search server name&gt; (default: RVN00-DR-SPWEB)]

    -action detachcontentdatabase
       [-databaseserver &lt;server\instance&gt; (default: rvn00-dr-spdb)]
       -databasename &lt;content database name&gt;
       [-f (suppress prompts)]
       
    -action fullcrawlstart
       
    -action fullcrawlstop
  
spsearchdiacriticsensitive  

stsadm -o spsearchdiacriticsensitive
	    [-setstatus &lt;True|False&gt;] 
            [-noreset]
            [-force]
  
stsadm -o sync
	   {-ExcludeWebApps &lt;web applications&gt; |
            -SyncTiming &lt;schedule(M/H/D:value)&gt; |
            -SweepTiming &lt;schedule(M/H/D:value)&gt; |
            -ListOldDatabases &lt;days&gt; |
            -DeleteOldDatabases &lt;days&gt;
            -IgnoreIsActive &lt;0 or 1&gt;}
  
syncsolution  

stsadm.exe -o syncsolution
            -name &lt;Solution name&gt;]
            [-lcid &lt;language&gt;]
            [-alllcids]
            
stsadm.exe -o syncsolution
            -allsolutions
  
trimauditlog  

stsadm.exe -o trimauditlog -date &lt;yyyymmdd&gt; -url &lt;url&gt;
stsadm.exe -o trimauditlog -date &lt;yyyymmdd&gt; -databasename &lt;database name&gt; [-databaseserver &lt;database server name&gt;]
  
unextendvs  

stsadm.exe -o unextendvs 
           -url &lt;url&gt; 
           [-deletecontent]
           [-deleteiissites]
  
uninstallfeature  

stsadm.exe -o uninstallfeature 
           {-filename &lt;relative path to Feature.xml&gt; |
            -name &lt;feature folder&gt; |
            -id &lt;feature Id&gt;} 
           [-force]
  
unquiescefarm  

stsadm -o unquiescefarm
	
  
unquiesceformtemplate  

stsadm -o unquiesceformtemplate
	[-formid &lt;form template ID&gt;]
	[-filename &lt;path to form template file&gt;]
  
unregistersecuritytrimmer  

stsadm -o unregistersecuritytrimmer
	
    -ssp &lt;ssp name&gt;
    -id &lt;0 - 2147483647&gt;
  
unregisterwsswriter  

stsadm.exe -o unregisterwsswriter
  
updateaccountpassword  

stsadm.exe -o updateaccountpassword
           -userlogin &lt;DOMAIN\name&gt;
           -password &lt;password&gt;
           [-noadmin]
  
updatealert  

stsadm -o updatealert
	stsadm.exe -o updateAlert -url &lt;siteUrl&gt; -oldUrl &lt;siteUrl&gt; [-nologfile] [-quiet]
  
updatealerttemplates  

stsadm.exe -o updatealerttemplates
           -url &lt;url&gt;
           [-filename &lt;filename&gt;]
           [-lcid &lt;language&gt;
  
updatefarmcredentials  

stsadm.exe -o updatefarmcredentials
           [-identitytype &lt;configurableid/NetworkService&gt;]
           [-userlogin &lt;DOMAIN\name&gt;]
           [-password &lt;password&gt;]
           [-local [-keyonly]]
           [-resume]
  
updatequota  

stsadm -o updatequota
	-quotaname &lt;quotaTemplateName&gt;
        [-contentdb &lt;database name&gt;]
        [-nologfile]
        [-quiet]
  
upgrade  

stsadm.exe -o upgrade
           {-inplace |
            -sidebyside} 
           [-url &lt;url&gt;] 
           [-forceupgrade] 
           [-quiet]
           [-farmuser &lt;farm user&gt;]
           [-farmpassword &lt;farm user password&gt;]
           [-reghost] 
           [-sitelistpath &lt;sites xml file&gt;]
  
upgradeformtemplate  

stsadm -o upgradeformtemplate
	-filename &lt;path to form template file&gt;
	[-upgradetype &lt;upgrade type&gt;]
  
upgradesolution  

stsadm.exe -o upgradesolution
            -name &lt;Solution name&gt;
            -filename &lt;upgrade filename&gt;
            [-time &lt;time to upgrade at&gt;]
            [-immediate]
            [-local]
            [-allowgacdeployment]
            [-allowcaspolicies]
            [-lcid &lt;language&gt;]
  
upgradetargetwebapplication  

stsadm.exe -o upgradetargetwebapplication 
           -url &lt;URL to upgrade&gt;
           -relocationurl &lt;new URL for non-upgraded content&gt; 
           -apidname &lt;new app pool name&gt; 
           [-apidtype &lt;configurableid/NetworkService&gt;]
           [-apidlogin &lt;DOMAIN\name&gt;]
           [-apidpwd &lt;app pool password&gt;]
           [-exclusivelyusentlm]
  
uploadformtemplate  

stsadm -o uploadformtemplate
	-filename &lt;path to form template file&gt;
  
userrole  

stsadm.exe -o userrole 
           -url &lt;url&gt; 
           -userlogin &lt;DOMAIN\name&gt;
           -role &lt;role name&gt; 
           [-add]
           [-delete]
  
variationsfixuptool  

stsadm -o variationsfixuptool
	  -url &lt;absolute web URL&gt; 
  	 [-recurse] 
  	 [-label &lt;label to fix or spawn&gt;] 
  	 [-fix] 
  	 [-scan] 
  	 [-spawn] 
  	 [-showrunningjobs] 

  
verifyformtemplate  

stsadm -o verifyformtemplate
	-filename &lt;path to form template file&gt;</pre>
<p class="quote"><i> “Confidence is what you have before you understand the problem” ~ Woody Allen</i></p>
<p><b>Related</b></p>
<p><a href="../ps/">PowerShell</a> - Future Sharepoint commands will be implemented as cmdlets<br>
<a href="http://blogs.technet.com/b/josebda/archive/2008/03/15/complete-reference-of-all-stsadm-operations-with-parameters-in-moss-2007-sp1.aspx">STSADM commands for 
Sharepoint 2007 sp1</a></p><!-- #BeginLibraryItem "/Library/foot_docs.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- General300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7010419507"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
