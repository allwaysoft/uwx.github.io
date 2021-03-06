---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-TraceSource</h1> 
<p>Trace a PowerShell component.</p>
<pre>Syntax
      Set-TraceSource [-name] <i>string</i>[] [[-option] <i>PSTraceSourceOptions</i>
           [-filePath <i>string</i>] [-debugger] [-pSHost] [-listenerOption <i>TraceOptions</i>]
              [-passThru] [-force] [<i>CommonParameters</i>]

      Set-TraceSource [-removeListener <i>string</i>[]] [-name] <i>string</i>[] 
           [<i>CommonParameters</i>]

      Set-TraceSource [-removeFileListener <i>string</i>[]] [-name] <i>string</i>[] 
           [<i>CommonParameters</i>]

Key
   -Name <i>string</i>[]
       Name of the trace source of each component to be traced.
       Wildcards are permitted.

   -Option <i>PSTraceSourceOptions</i>
       Type of events to trace, comma separated enclosed in quotes: 
        
       "None, Constructor, Dispose, Finalizer, Method, Property, Delegates,
       Events, Exception, Lock, Error, Errors, Warning, Verbose, WriteLine,
       Data, Scope, ExecutionFlow, Assert, <u>All</u>".

   -FilePath <i>string</i>
       Send the trace output to specified file. This will also select the
       file trace listener. Use -RemoveFileListener to stop this trace.

   -Debugger 
       Send the trace output to the debugger (or in Visual Studio) This will
       also select the default trace listener.

   -pSHost 
       Send the trace output to the PowerShell host.
       This will also select the PSHost trace listener.

   -ListenerOption <i>TraceOptions</i>
       Add optional data to the prefix of each trace message in the output:
            "<u>None</u>, LogicalOperationStack, DateTime, Timestamp,
            ProcessId, ThreadId, or Callstack"

   -PassThru
       Pass the object created by this cmdlet through the pipeline.

   -RemoveListener <i>string</i>[]
       Stop the trace by removing the trace listener. 
       Either "Host" to remove PSHost (console)
       or "Debug" to remove Debugger
       or "*" to remove all trace listeners.

   -RemoveFileListener <i>string</i>[]
       Stop the trace by removing the file trace listener associated with the
       specified trace output filename. Enter the path and filename of the <br>       trace output file.

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. overwrite a read-only file.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> The following values for <i>PSTraceSourceOptions</i> are combinations of other values:<br>
ExecutionFlow: "Constructor,Dispose,Finalizer,Method,Delegates,Events,Scope"<br>
Data: "Constructor,Dispose,Finalizer,Property,Verbose,WriteLine"<br>
 Errors: "Error,Exception"<br>
<br>
To specify multiple <i>PSTraceSourceOptions</i>, separate  with commas,  no spaces, and enclose  in quotation marks.</p>
<p><b>Examples</b></p>
<p>Start tracing for the ParameterBinding component:</p>
<p><span class="code">PS C:\&gt; Set-TraceSource -Name Parameterbinding -Option ExecutionFlow -PSHost ` <br>
    -ListenerOption "ProcessID,TimeStamp"</span><br>
  <br>
  Stop the trace of the ParameterBinding component:</p>
<p class="code">PS C:\&gt; set-tracesource -name ParameterBinding -RemoveListener Host</p>
<p class="quote"><i>“Sweet babe, in thy face Soft desires I can trace, Secret joys and secret smiles, Little pretty infant wiles” ~ William Blake</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-tracesource.html">Get-Tracesource</a> - Get components that are instrumented for tracing.<br>
<a href="trace-command.html">Trace-Command</a> - Trace an expression or command.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

