---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_RESOURCE_MANAGER</h1> 
<p>Maintain plans, consumer groups, and plan directives.</p>
<pre>Subprocedures:
CREATE_PLAN        Create entries which define resource plans. 

CREATE_SIMPLE_PLAN Create a single-level resource plan containing up to
                   eight consumer groups in one step. 

UPDATE_PLAN        Update entries which define resource plans. 

DELETE_PLAN        Delete the specified plan as well as all the plan directives it refers to. 

DELETE_PLAN_CASCADE Delete the specified plan as well as all its descendants
                   (plan directives, subplans, consumer groups). 

CREATE_CONSUMER_GROUP   Create entries which define resource consumer groups. 
UPDATE_CONSUMER_GROUP   Update entries which define resource consumer groups. 
DELETE_CONSUMER_GROUP   Delete entries which define resource consumer groups. 

CREATE_PLAN_DIRECTIVE Create resource plan directives.  
UPDATE_PLAN_DIRECTIVE Update resource plan directives. 
DELETE_PLAN_DIRECTIVE Delete resource plan directives. 

CREATE_PENDING_AREA   Create a work area for changes to resource manager objects. 
VALIDATE_PENDING_AREA Validate pending changes for the resource manager. 
CLEAR_PENDING_AREA    Clear the work area for the resource manager. 
SUBMIT_PENDING_AREA   Submit pending changes for the resource manager. 

SET_INITIAL_CONSUMER_GROUP
                      Assign the initial resource consumer group for a user. 

SWITCH_CONSUMER_GROUP_FOR_SESS
                      Change the resource consumer group of a specific session. 

SWITCH_CONSUMER_GROUP_FOR_USER
                      Change the resource consumer group for all sessions with a
                      given user name.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i><b><br>
</b></span></p>
<pre><span class="body"><b>Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
</span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_RESOURCE_MANAGER.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

