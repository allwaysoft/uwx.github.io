---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Execute</h1> 
<p> Execute one or more  statements.  ExecuteGlobal will execute in the global namespace of the script.</p>
<pre>Syntax
      Execute <i>statement</i>

      ExecuteGlobal <i>statement</i></pre>
<p>The required <i>statement</i> argument is a string expression containing one or more statements for execution. <br>
To include multiple statements in the statement argument, use colons or embedded line breaks to separate them. </p>
<p>There are <a href="http://blogs.msdn.com/b/ericlippert/archive/2003/09/20/53058.aspx">three things</a> that we may need to do: evaluate expressions, execute statements using local scope and execute statements using global scope.  The three methods for these are <a href="eval.html">Eval</a>, which takes an expression and returns its value, <span class="code">Execute</span>, which takes a group of statements and executes them in local scope, and <span class="code">ExecuteGlobal</span> which executes them in global scope.</p>
<h2>Execute</h2>
<blockquote>
<p>The context in which the <span class="code">Execute</span> statement is invoked determines what objects and variables are available to the code being run. In-scope objects and variables are available to code running in an <span class="code">Execute</span> statement. However, it is important to understand that if you execute code that creates a procedure, that procedure does not inherit the scope of the procedure in which it occurred. </p>
<p>Like any procedure, the new procedure's scope is global, and it inherits everything in the global scope. </p>
<p>Unlike any other procedure, its context is not global scope, so it can only be executed in the context of the procedure where the Execute statement occurred. </p>
<p>However, if the same Execute statement is invoked outside of a procedure (i.e., in global scope), not only does it inherit everything in global scope, but it can also be called from anywhere, since its context is global.</p>
</blockquote>
<h2>ExecuteGlobal</h2>
<blockquote>
<p>All statements used with ExecuteGlobal are executed in the script's global namespace. This allows code to be added to the program so that any procedure can access it. For example, a VBScript Class statement can be executed at run time and functions can subsequently create new instances of the class. Adding procedures and classes at runtime can be useful, but also introduces the possibility of overwriting existing global variable and functions at runtime. </p>
<p>Because this can cause significant programming problems, care should be exercised when using the ExecuteGlobal statement. If you don't need access to a variable or function outside of a procedure, use the Execute statement that will only affect the namespace of the calling function. </p>
</blockquote>
<p><b>Example</b></p>
<p>Run the VBscript examples with <span class="code"><a href="cscript.html">cscript.exe</a> nameofscript.vbs //nologo</span></p>
<pre class="code">Dim X   ' Declare X in global scope.
X = "Global"   ' Assign global X a value.

Sub Proc1   ' Declare procedure.
   Dim X    ' Declare X in local scope.
   X = "Local"   ' Assign local X a value.
            ' The Execute statement here creates a
            ' procedure that, when invoked, prints X.
            ' It print the global X because Proc2
            ' inherits everything in global scope.
   <b>Execute "Sub Proc2: wscript.echo X: End Sub"</b>
   wscript.echo Eval("X")   ' Print local X.
   Proc2    ' Invoke Proc2 in Proc1's scope.
End Sub

Proc1   ' Invoke Proc1.
'Proc2   ' This line will cause a vbscript runtime error since 
         ' Proc2 is unavailable outside Proc1.

<b>Execute "Sub Proc2: wscript.echo X: End Sub"</b>
Proc2   ' This invocation succeeds because Proc2 is now available globally.</pre>
<p>In practice, particularly with more complex scripts you may want to rewrite the <b>Execute</b> statement on several lines for better readability:<br>
</p>
<pre class="code">SS = "Sub Proc2" &amp; vbCrLf
SS = SS &amp; " wscript.echo X" &amp; vbCrLf 
SS = SS &amp; "End Sub"
Execute SS</pre>
<p class="quote"><i>“Anxiety is love's greatest killer. It makes one feel as you might when a drowning man holds unto you.<br>
You want to save him, but you know he will strangle you with his panic” ~ Anaïs Nin</i></p><p><b>Related:</b></p>
<p><a href="exec.html">.Exec</a> - Run a command<br>
<a href="run.html">.Run</a> - Run a command</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="execute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

