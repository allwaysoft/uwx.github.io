---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dseditgroup</h1> 
<p>Directory Service group record manipulation tool.</p>
<pre>Syntax
     dseditgroup [<i>options</i>] [<i>parameters</i>] <i>groupname</i>

Key:
          options:
             -o <i>operation</i>   perform (read, create, delete, edit, checkmember)
                            operation with given group-name.
             -p             prompt for authentication password
             -q             disables interactive verification
             -v             verbose logging to stdout

          parameters:
             -m <i>member</i>      username to use for checkmember option
             -n <i>nodename</i>    directory node location of group record
             -u <i>username</i>    authenticate with admin username
             -P <i>password</i>    authentication password
             -a <i>recordname</i>  name of the record to add
             -d <i>recordname</i>  name of the record to delete
             -t <i>recordtype</i>  type of the record to add or delete
             -T <i>grouptype</i>   type of group to create or modify
             -L             maintain ComputerLists in parallel with ComputerGroups 
             -i <i>gid</i>         gid to add/replace
             -g <i>guid</i>        GUID to add/replace
             -S <i>sid</i>         SID to add/replace
             -r <i>realname</i>    realname to add/replace
             -k <i>keyword</i>     keyword to add
             -c <i>comment</i>     comment to add/replace
             -s <i>timetolive</i>  seconds to live to add/replace
             -f n | l       change the group's format - 'n' for the
                            new group format and 'l' for the legacy
                            group format</pre>
<p>dseditgroup allows manipulation of a single named group record on either
the default local node or the specified DirectoryService node. </p>
<p>For the "read" operation the authentication search policy (/Search node) is consulted.</p>
<p> Default behaviour is presented below after a discussion of each operation and the possible parameters.</p>
<pre>     Options and their descriptions:

     -o <i>operation</i>
              If "read" then the parameters of the specified groupname will be
              displayed. This is the default option. The authentication search
              policy (/Search node) will be used.

              If "create" then create a group with the specified groupname on
              either the default local node or the specified DirectoryService
              node.

              If "delete" then delete a group with the specified groupname on
              either the default local node or the specified DirectoryService
              node.

              If "edit" then edit a group with the specified groupname on
              either the default local node or the specified DirectoryService
              node.

              If "checkmember" then check if the user specified with -m or
              current logged in user is a member of the specified groupname.
              The authentication search policy (/Search node) is used to find
              the member. The specified node (defaults to the authentication
              search policy) is used to find the group. If the specified node
              is not on the authentication search policy the behaviour is
              undefined.

     -p       You will be prompted for a password to use in conjunction with
              the specified username.

     -q       This disables interactive verification of replace or delete
              operations.

     -v       This enables the logging of the DirectoryService API calls and
              their return codes.

     Parameters and their descriptions:

     -m <i>member</i>
              The username of the account to verify group membership when
              using -o checkmember

     -n <i>nodename</i>
              Directory Service node name such as /LDAPv3/ldap.company.com and
              whose default value is the local node. "." can also be used to
              specify the local node.

     -u <i>username</i>
              Username of a user that has administrative privileges on this
              computer.

     -P <i>password</i>
              Password to use in conjunction with the specified username.  If
              this is not specified, you will be prompted for a password.

     -a <i>recordname</i>
              The name of the record to be added to the group specified by
              groupname. This name is related to the first record found on the
              authentication search policy when a search is made with this
              recordname and the given recordtype.

     -d <i>recordname</i>
              The name of the record to be deleted from the group specified by
              groupname. This name is related to the first record found on the
              authentication search policy when a search is made with this
              recordname and the given recordtype.

     -t <i>recordtype</i>
              The type of the record to be added to or deleted from the group
              specified by groupname. Valid values are user, computer, group,
              or computergroup.

     -T <i>grouptype</i>
              The type of the group record to be created or modified as speci-
              fied by groupname. Valid values are group or computergroup.

     -L       If used with computergroup will also maintain the computerlist
              if it exists or create it if a computergroup is created.

     -i <i>gid</i>   This is a group id. This will be automatically created if not
              specified for a create.

     -g <i>guid</i>  This is a text representation of an 128 bit id. This will be
              automatically created if not specified for a create.

     -r <i>realname</i>
              This is a simple text string.

     -k <i>keyword</i>
              This is a simple text string.

     -c <i>comment</i>
              This is a simple text string.

     -s <i>timetolive</i>
              The number of seconds that this record is deemed valid as a
              cached value. There will be no automatically created default
              value if not specified for a create.

DEFAULT BEHAVIOUR

     dseditgroup mygroup

     This simple version of the command will default to:

     dseditgroup -o read -n . -u $USER mygroup

     The output will be the parameters of the "mygroup" group record if the
     shell user has read access to the local node's group record of name
     "mygroup".

EXAMPLES

     dseditgroup extragroup

     dseditgroup -o read extragroup

                    The attributes of the group extragroup from the local node
                    are displayed.

     dseditgroup -o create -n /LDAPv3/ldap.company.com -u myusername -P
              mypassword -r "Extra Group" -c "a nice comment" -s 3600 -k "some
              keyword" extragroup

                    The group extragroup is created from the node
                    /LDAPv3/ldap.company.com with the realname, comment,
                    timetolive (instead of default of 14400 = 4 hours), and
                    keyword atttribute values given above if the user
                    myusername has supplied a correct password and has write
                    access.

     dseditgroup -o delete -n /LDAPv3/ldap.company.com -u myusername -P
              mypassword extragroup

                    The group extragroup is deleted from the node
                    /LDAPv3/ldap.company.com if the user myusername has
                    supplied a correct password and has write access.

     dseditgroup -o edit -n /LDAPv3/ldap.company.com -u myusername -p -a
              username -t user extragroup

                    The group extragroup from the node
                    /LDAPv3/ldap.company.com will have the username added if
                    the username is in a user record on the search policy and
                    if the correct password is presented interactively for the
                    user myusername which also need to have write access.

     dseditgroup -o edit -n /LDAPv3/ldap.company.com -u myusername -P -a
              mysubgroup -t group extragroup

                    The group extragroup from the node
                    /LDAPv3/ldap.company.com will have the mysubgroup added if
                    the mysubgroup is in a group record on the search policy
                    and if the user myusername has supplied a correct password
                    and has write access.

     dseditgroup -o edit -n /LDAPv3/ldap.company.com -u myusername -p -d
              username -t user extragroup

                    The group extragroup from the node
                    /LDAPv3/ldap.company.com will have the username deleted if
                    the correct password is presented interactively for the
                    user myusername which also need to have write access.

     dseditgroup -o checkmember extragroup

                    Will write out a message specifying if the current user is
                    a member of extragroup on the authentication search
                    policy.

     dseditgroup -o checkmember -n  . extragroup

                    Will write out a message specifying if the current user is
                    a member of extragroup on the local node.

     dseditgroup -n /LDAPv3/ldap.company.com -o checkmember -m user extragroup

                    Will write out a message specifying if user (found in
                    /Search) is a member of extragroup on the specified node
                    /LDAPv3/ldap.company.com. The specified node
                    /LDAPv3/ldap.company.com needs to be on the authentication
                    search policy for a valid answer.</pre>
<p><span class="quote"><i>“Don’t waste your crazy” ~ <a href="http://www.elle.com/pop-culture/celebrities/a-new-albumand-lifefor-fiona-apple-656787">Fiona Apple</a></i></span></p>
<p><b>Related:</b></p>
<p><a href="dscacheutil.html">dscacheutil</a> - Query or flush the Directory Service/DNS cache<br>
<a href="dsenableroot.html">dsenableroot</a> - Enable root access<br>
dsmemberutil - View user and groups rights</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
