---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Trace-Command</h1> 
<p>Trace an expression or command.</p>
<pre>Syntax
      Trace-Command [-command] <i>string </i>[-argumentList <i>Object</i>[]] [-name] <i>string</i>[] 
             [-option] <i>PSTraceSourceOptions</i> [-FilePath <i>string</i>]
                [-debugger] [-PSHost] [-ListenerOption <i>TraceOptions</i>]
                   [-inputObject <i>psobject</i>] 
                      [-force] [<i>CommonParameters</i>]

      Trace-Command [-Expression] <i>scriptblock</i> [-Name] <i>string</i>[] 
             [-Option] <i>PSTraceSourceOptions</i> [-FilePath <i>string</i>]
                [-Debugger] [-PSHost] [-ListenerOption <i>TraceOptions</i>]
                   [-InputObject <i>psobject</i>] [-Force] [<i>CommonParameters</i>]

Key
   -Name <i>string</i>[]
       Name of the trace source of each component to be traced.
       Wildcards are permitted.
       Use Get-TraceSource to find the trace sources on your computer.

   -ArgumentList <i>Object</i>[]
       Parameters and parameter values for the command being traced.
       This feature is especially useful for debugging dynamic parameters.

   -Command <i>string
</i>       A command that is being processed during the trace.

   -Debugger 
       Send the trace output to the debugger (or in Visual Studio) This will
       also select the default trace listener.

   -Expression <i>scriptblock</i>
       The expression to be processed during the trace.
       Enclose the expression in curly braces {}

   -FilePath <i>string</i>
       Send the trace output to specified file. This will also select the
       file trace listener.

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. override the read-only attribute on a file.

   -InputObject <i>psobject</i>
       An input to the expression that is being processed during the trace.
       This can be a variable, or an object passed through the pipeline.

   -ListenerOption <i>TraceOptions</i>
       Add optional data to the prefix of each trace message in the output:
            "<u>None</u>,LogicalOperationStack,DateTime,Timestamp,
            ProcessId,ThreadId or Callstack"

   -Option <i>PSTraceSourceOptions</i>
       Type of events to trace, comma separated enclosed in quotes: 
        
       "None, Constructor, Dispose, Finalizer, Method, Property, Delegates,
       Events, Exception, Lock, Error, Errors, Warning, Verbose, WriteLine,
       Data, Scope, ExecutionFlow, Assert, <u>All</u>".

   -PassThru
       Pass the object created by this cmdlet through the pipeline.

   -PSHost 
       Send the trace output to the PowerShell host.
       This will also select the PSHost trace listener.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
Trace-command works like Set-TraceSource except that it applies only to the specified <i>command</i>.</p>
<p>The following values for <i>PSTraceSourceOptions</i> are combinations of other values:<br>
ExecutionFlow: "Constructor,Dispose,Finalizer,Method,Delegates,Events,Scope"<br>
Data: "Constructor,Dispose,Finalizer,Property,Verbose,WriteLine"<br>
Errors: "Error,Exception"<br>
To specify multiple <i>PSTraceSourceOptions</i>, separate  with commas, no spaces, and enclose  in quotation marks.</p>
<p><b>Examples</b></p>
<p>Start a trace of the "get-process notepad" expression using the defaults: "All" for tracing and "None" for the listener option:</p>
<p><span class="code">PS C:\&gt; Trace-Command -name metadata,parameterbinding,cmdlet -expression {get -process notepad} -pshost</span><br>
  <br>
  Trace the actions of the ParameterBinding operations of PowerShell while it processes a Get-Alias expression:</p>
<p class="code">PS C:\&gt; $a = "i*"<br>
PS C:\&gt; trace-command -name parameterbinding {get-alias $input} -pshost -inputobject $a</p>
<p>The -InputObject parameter passes the variable $a to the expression.<br>
In effect, the command being processed during the trace is "get-alias -inputobject $a"</p>
<p class="quote"><i>“Follow your instincts. That's where true wisdom manifests itself” ~ Oprah Winfrey</i></p>
<p><b>Related:</b><br><br>
<a href="set-tracesource.html">Set-Tracesource</a> - Trace a PowerShell component.<br>
<a href="get-tracesource.html">Get-Tracesource</a> - Get components that are instrumented for tracing.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
