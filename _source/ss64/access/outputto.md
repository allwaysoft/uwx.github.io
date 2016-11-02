---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.OutputTo</h1>
<p> Output the data held in an Access database object (datasheet, form, report, module, data access page) to several output formats.</p>
<pre>Syntax
      DoCmd.OutputTo(<i>ObjectType, ObjectName, OutputFormat</i>,
                        <i>OutputFile, AutoStart, TemplateFile</i>,
                            <i>Encoding</i>, <i>OutputQuality</i>)

Key
<i>   ObjectType</i>    An <a href="acoutputobjecttype.html">AcOutputObjectType</a> constant that specifies
                 the type of object to output.<i>

   ObjectName</i>    The name of an object of the type selected by
                 the <i>ObjectType</i> argument.
                 To output the active object, specify the object
                 type and leave this argument blank.

   <i>OutputFormat</i>  An <a href="acformat.html">AcFormat</a> constant that specifies the output format.

   <i>OutputFile</i>    The full pathname of the file to output the object to.
                 If left blank, Access will prompts for an filename.

   <i>AutoStart</i>     Use True (-1) to start the appropriate application
                 and immediately load the output file.
                 Use <u>False</u> (0) to just export the file.<i>

   TemplateFile</i>  A string expression that's the full pathname of
                 a file to use as a template for an HTML, HTX, or
                 ASP output file.

   <i>Encoding</i>      The type of character encoding format to use to
                 output the text or HTML data. 

   <i>OutputQuality</i>  A constant that specifies the type of output 
                 device to optimize for. <u>acExportQualityPrint</u> (0)
                 or acExportQualityScreen (1).</pre>
<p>The Access data is output in the selected format and can be read by any application that uses the same format. For example, you can output an Access report with its formatting to a rich-text format document and then open the document in Microsoft Word.</p>
<p>Microsoft Internet Information Server and Microsoft ActiveX Server formats are available only for the Object Types: tables, queries, and forms.</p>
<p><b>Examples</b></p>
<p><span class="code"></span>'Output the tblPatients table as .RTF <span class="code"><br>
DoCmd.OutputTo acOutputTable, "tblPatients", 
acFormatRTF, "patients.rtf", True</span></p>
<p class="quote"><i>“An Asian can't help but love China and take pride in it. China doesn't export tanks and men. It exports dignity and respect” ~ Norodom Sihanouk</i></p>
<p><b>Related:</b></p>
<p><a href="transfertext.html">TransferText</a> - Import or export data to/from a text file.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

