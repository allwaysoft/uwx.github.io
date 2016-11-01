---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Looping Statements </h1> 
<p>LOOP, WHILE Loop, FOR Loop</p>
<pre>A basic <b>LOOP</b> command will continue until 'condition' evaluates to true
(condition is a boolean var)

LOOP
   STATEMENT1;
   ...
   EXIT [WHEN condition];
END LOOP;

The only difference between LOOP and <b>WHILE</b> is that the
condition is evaluated at the start of each iteration.

WHILE condition LOOP
   statement1;
   statement2;
...
END LOOP;

A PL/SQL <b>FOR Loop</b> will implicitly declare a counter,
the counter can only be referenced within the loop. 
Don't try to change the counter's value using code.

FOR loop

FOR counter in [REVERSE]
   lower_bound..upper_bound LOOP
   statement1;
   statement2;
...
END LOOP;


The 3 loop commands above (LOOP, WHILE, FOR) can be Nested...

To give each loop a specific name - put the name in double
angle brackets &lt;&lt; &gt;&gt;
Put this name definition on the line immediately before each LOOP 

&lt;&lt;Main_loop&gt;&gt;
LOOP
...
   &lt;&lt;sub_loop&gt;&gt;
   LOOP
   ...
   END LOOP sub_loop;

END LOOP Main_loop;</pre>
<p><span class="body"><br>
  When PL/SQL code contains labels like the above it is also possible to simply 
  GOTO a given label:<br>
  <br>
  e.g. <br>
  GOTO Main_loop<b><br>
  </b><br>
  This is generally poor programming practice - and some destinations, such as 
  the middle of a loop, won't work.<b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b><br>Cursor FOR loop - 
EXIT - 
</span></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="loops.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

