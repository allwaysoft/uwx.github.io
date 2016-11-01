---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_LDAP</h1> 
<p>Access data from a Lightweight Directory Access Protocol (LDAP) 
  server. Load this package using the catldap.sql script.</p>
<pre>Subprocedures:

init Function 
            Initialize a session with an LDAP server.
            Establish a connection with the LDAP server. 

simple_bind_s Function 
            Perform simple username/password based authentication
            to the directory server. 

bind_s Function 
            Perform complex authentication to the directory server. 

unbind_s Function 
            Close an active LDAP session. 

compare_s Function 
            Test if a particular attribute in a particular entry has a particular value. 

search_s Function 
            Perform a synchronous search in the LDAP server.

search_st Function 
            Perform a synchonous search in the LDAP server with a client side timeout.

first_entry Function 
            Retrieve the first entry in the result set returned by either search_s or search_st. 

next_entry Function 
            Iterate to the next entry in the result set of a search operation. 

count_entries Function 
            Count the number of entries in the result set.

first_attribute Function 
            Fetch the first attribute of a given entry in the result set. 

next_attribute Function 
            Fetch the next attribute of a given entry in the result set. 

get_dn Function 
            Retrieve the X.500 distinguished name of given entry in the result set. 

get_values Function 
            Retrieve all the values associated for a given attribute in a given entry. 

get_values_len Function 
            Retrieve values of attributes that have a Binary syntax. 

delete_s Function 
            Remove a leaf entry in the LDAP Directory Information Tree. 

modrdn2_s Function 
            Rename the relative distinguished name of an entry. 

err2string Function 
            Convert an LDAP error code to string in the local language.

create_mod_array Function 
            Allocate memory for array modification entries. 

populate_mod_array (String Version) 
            Populate one set of attribute information for add or modify operations. 

populate_mod_array (Binary Version) 
            Populate one set of attribute information for add or modify operations. 

modify_s Function 
            Perform a sychronous modification of an existing LDAP directory entry.  

add_s Function 
            Add a new entry to the LDAP directory synchronously. 

free_mod_array Procedure 
            Frees the memory allocated by DBMS_LDAP.create_mod_array. 

count_values Function 
            Count the number of values returned by DBMS_LDAP.get_values. 

count_values_len Function 
            Count the number of values returned by DBMS_LDAP.get_values_len. 

rename_s Function 
            Renames an LDAP entry synchronously. 

explode_dn Function 
            Breaks a DN up into its components. 

open_ssl Function 
            Establish an SSL (Secure Sockets Layer) connection over an existing LDAP connection. 
 
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_LDAP.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

