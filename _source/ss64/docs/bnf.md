---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_docs.lbi" --><!-- #EndLibraryItem --><h1>Syntax diagrams - Backus Normal Form (BNF) </h1>
<p>The syntax definitions on this site use a  variant of Backus Normal Form (BNF) that includes the following:</p>
<pre>    [ ]        Brackets enclose optional items. 
    { }        Items of which only one is required.
    |          A vertical pipe separates alternatives (OR)
  <u>underlined</u>   The default option
    ...        The preceding item can be repeated (as many times as needed)
  UPPER CASE        Command that should be entered as shown
  <i>lowercase&amp;italic</i>  Variable that should be replaced with an appropriate value</pre>
<p>
Where a command is too long to fit on a single line it is wrapped<br>
with each subsequent line indented:</p>
<pre>   COMMAND <i>option option option option option option option option 
      option option option option</i> <i>option option option option</i>
         <i>option option option option</i>
</pre>
<p>Where there are several optional items and you can choose any,several or all<br>
these are shown in a list, all indented to the same degree:</p>
<pre>   COMMAND <i>option option 
                  option
                  option</i>
</pre>
<p>If further command options follow they will be indented:</p>
<pre>   COMMAND <i>option option 
                  option
                  option
                     option option option</i>
</pre>
<p>If the options have sub options they are individually indented:</p>
<pre>   COMMAND <i>option option 
                     option option option
                  option
                     option option 
                  option
                     option option option</i>
</pre>
<p>Where there are several optional items and you can choose <b>only one</b> from the list, they are indented and separated by a blank line</p>
<pre>   COMMAND <i>option option 

                  option

                  option</i>

<span class="body">This is the same as:  </span>COMMAND <i>option</i> {<i>option</i> | <i>option</i> | <i>option</i>}</pre>
<p>  Where the layout makes it possible, braces and the pipe symbol are the preferred method to show alternative options.</p>
<p> On some pages <i>option</i> [,<i>option</i>] [,...] can be abbreviated to just <i>option </i>,... this is to avoid having a surfeit of  brackets around the  more complex commands.</p>
<p>  <b>Bold text</b> is used to highlight some key items but does not have any syntactic importance.</p>
<p>In the case of the <a href="../css/index.html">CSS</a> pages the curly brackets { } are omitted from the syntax diagrams to avoid any confusion with the curly brackets that are part of actual CSS rules.</p>
<p>In some older texts BNF is also referred to as Backus-Naur Form.</p>
<p><b>Related:</b></p>
<p><a href="http://www.cl.cam.ac.uk/%7Emgk25/iso-ebnf.html">ISO Standard for BNF</a> <br>
  <a href="http://en.wikipedia.org/wiki/Backus-Naur_form">Wikipedia entry for BNF</a> <br>
<a href="http://www.cs.man.ac.uk/%7Epjj/farrell/comp2.html">Chomsky Normal Form</a></p><!-- #BeginLibraryItem "/Library/foot_menu.lbi" --><hr>
<div id="bl" class="footer"><a href="bnf.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

