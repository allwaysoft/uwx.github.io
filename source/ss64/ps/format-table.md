---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Format-Table</h1> 
<p>Format  output as a table.</p>
<pre>Syntax
      Format-Table [[-property] <i>Object</i>[]] [-autosize] [-hideTableHeaders]
          [-groupBy <i>Object</i>] [-wrap] [-view <i>string</i>] [-force]
             [-inputObject <i>psobject</i>] [-expand <i>string</i>]
                [-displayError] [-showError] [<i>CommonParameters</i>]

Key:
   -property <i>Object</i>[]
       The object properties to display (in order)
       Wildcards are permitted.
       You cannot use -Property and -View in the same command.

   -autosize
       Adjust the column sizes based on the width of the data.
       Ignore any column details in the view.

   -hideTableHeaders
       Omit column headings from the table.

   -view <i>string</i>
       The name of an alternate format or "view." 

   -groupBy <i>Object</i>
       Format the output in groups based on a shared property or value.
 
   -wrap
       Display text that exceeds the column width on the next line. 
       By default, text that exceeds the column width is truncated.

   -force 
       Directs the cmdlet to display all of the error information.
       Use with -DisplayError or -ShowError. <br>       By default, when an error object is written to the error or display streams,
       only some of the error information is displayed.

   -inputObject <i>psobject</i>
       The objects to format. 
       A variable, command or expression that gets the objects.
    
   -expand <i>string</i>
       Where string is either "EnumOnly" (the default), "CoreOnly" or "Both"
       "CoreOnly" will format and display properties of the collection object itself, 
       while "emumOnly" will enumerate and display the object properties. 
       (designed around the ICollection (System.Collections) interface.)

   -displayError 
       Display errors at the command line.

   -showError 
       Send errors through the pipeline.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Format-Table:<span class="code"> <b>ft</b></span></p>
<p>The value of <span class="code">-GroupBy</span> or <span class="code">-Property</span> can be a new calculated property. To create a calculated property, use a <a href="syntax-hash-tables.html">hash table</a>. Valid keys are:</p>
<blockquote>
<p class="code">Name (or Label) <i>string</i><br>
Expression <i>string</i> or <i>script block</i><br>
FormatString <i>string<br>
</i>Width<i> int32 </i> &nbsp;&nbsp;&nbsp;-Property only <i><br>
</i>Alignment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Property only ("Left", "Center", or "Right")</p>
</blockquote>
<p>In addition to simply formatting output as a table, Format-Table can be used to add calculated properties to an object before displaying it. </p>
<p>To add calculated properties, use the Property parameter to specify a hash table. The hash table must include two keys: <span class="code">Label</span> and <span class="code">Expression</span>. The Label key is assigned the name of the calculated property. The Expression key is assigned a script block that is evaluated to determine the value of the property.</p>
<p>Custom display formats can also be defined using XML tags see <span class="code">get-help about_Display.xml</span> for details.</p>
<p><b>Examples</b></p>
<p>Print information about Windows PowerShell snap-ins in a table: </p>
<p><span class="code">PS C:\&gt;get-pssnapin | format-table -wrap</span><br>
<br>
Print a list of running processes formatted into groups with the same base priority class:</p>
<p class="code">PS C:\&gt;get-process | format-table -groupby basepriority </p>
<p>Print the winlogon process, including a calculated total running time:</p>
<p class="code">PS C:\&gt;get-process winlogon | format-table ProcessName, @{Label="DD.HH:MM:Seconds"; Expression={(get-date) - $_.StartTime{% raw %}}}{% endraw %}</p>
<p>Changing the above for the notepad process, notice that this this will add up the running time for ALL notepad processes currently running:</p>
<pre>PS C:\&gt;get-process <span class="code">notepad</span> | format-table ProcessName, `
       @{Label="DD.HH:MM:Seconds"; Expression={(get-date) - $_.StartTime{% raw %}}}{% endraw %}</pre>
<p class="quote"><i>“A lot of people are afraid to say what they want, thats why a lot of people don't get what they want” ~ Madonna</i></p>
<p><b>Related:</b><br>
  <br>
<a href="format-custom.html">format-custom</a> - Format output using a customized view<br>
<a href="format-list.html">format-list</a> - Format output as a list of properties, each on a new line<br>
<a href="format-wide.html">format-wide</a> - Format objects as a table of their properties<br>
<a href="out-file.html">out-file</a> - Send command output to a file<br>
<a href="out-host.html">out-host</a> - Send the pipelined output to the host</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="format-table.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

