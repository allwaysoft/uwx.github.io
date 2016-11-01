---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsget.html">DSGET</a> contact (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Display contact(s) from active directory.</p>
<pre>Syntax
      DSGET Contact <i>ContactDN</i> [-dn] [-fn] [-mi] [-ln] [-display] [-desc] [-office]
         [-tel] [-email] [-hometel] [-pager] [-mobile] [-fax] [-iptel] [-title] [-dept] [-company]
            [{-s <i>Server</i> | -d <i>Domain</i>}]   [-u <i>UserName</i>]  [-p {<i>Password</i> | *}]
               [-c] [-q] [-l] [{-uc | -uco | -uci}] 
   
Key
   <i>ContactDN</i>  Distinguished Name of the contact to view.

   -dn      Display the distinguished name
   -fn      Display the first names 
   -mi      Display the middle initials 
   -ln      Display the last names 
   -display Display the display names 
   -desc    Display the descriptions  
   -office  Display the office locations 
   -tel     Display the telephone numbers 
   -email   Display the e-mail addresses 
   -hometel Display the home telephone numbers 
   -pager   Display the pager numbers 
   -mobile  Display the mobile phone numbers 
   -fax     Display the fax numbers 
   -iptel   Display the IP phone number of the contact.
   -title   Display the titles 
   -dept    Display the departments 
   -company Display the company information

   -s       Server to connect to (Default=the domain controller in the logon domain.)
   -d       Domain to connect to

   -u       Username with which the user logs on to a remote server. 
   -p       Password     (UserName or Domain\UserName or Username@domain.com)

   -c       Report errors, but continue with the next object after any error (when you specify multiple objects)
            by default dsget will exit when the first error occurs.
   -q       Quiet, suppress all output
   -l       Display entries in a list format. By default, dsget outputs a table format.

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only</pre>
<p><b>Example</b></p>
<p>Display  the description and mobile phone number for contact Andy Kaufman:</p>
<p class="code">C:\&gt; dsget contact "CN=Andy Kaufman,OU=Users,OU=AcmeCo,DC=ss64,DC=Com" -desc -mobile</p>
<p><i class="quote">“I just want real reactions. I want people to laugh from the gut, be sad from the gut-or get angry from the gut” ~ Andy Kaufman </i><br>
  <br>
<b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>

<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
PowerShell: <a href="../ps/get-adobject.html">Get-adObject</a> - Get one or more AD objects. </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsget-contact.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

