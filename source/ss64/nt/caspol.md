---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CASPOL.exe</h1>  
<p>Code Access Security Policy Tool. Modify security policy for the machine policy level, the user policy level, and the enterprise policy level.</p>
<p>Trust a single file:</p>
<input id="inputfile" size="60" onchange="buildfile()" value="C:\demo\example.DLL" ;"="">
<div class="code" id="resultfile">Caspol.exe</div>

<p>Trust a folder:</p>
<input id="inputfolder" size="60" onchange="buildfolder()" value="C:\demo\" ;"="">
<div class="code" id="resultfolder">Caspol.exe</div><br>

<input id="clickMe" type="button" value="calculate" onclick="buildfile();buildfolder();">
<p>For the most common options, trusting a file or folder (Machine policy level) paste the path into the relevant box above and press calculate.</p>
<p>In most cases you should specify a specific version of caspol e.g. <span class="code">C:\WINDOWS\Microsoft.NET\Framework\v2.x.xxxxx\Caspol.exe </span></p>
<p> If you run the Caspol.exe that was installed with version X  of the runtime, the changes apply only to that version. Other  side-by-side installations of the runtime, if any, are not affected. If  you run Caspol.exe from the command line without being in a directory  for a specific runtime version, the tool is executed from the first  runtime version directory in the path (usually the most recent   version installed).</p>
<p>When a user without administrative rights runs Caspol.exe, all options refer to the user level policy unless the <span class="code">-machine</span> option is specified. When an administrator runs Caspol.exe, all options refer to the machine policy unless the –user option is specified.</p>
<p>For advanced usage - see the full syntax on MSDN - <a href="http://msdn.microsoft.com/en-us/library/cb6t8dtz%28v=vs.80%29.aspx">Code Access Security Policy Tool</a></p>
<script type="text/javascript">
function buildfile()
{
  if(document.all){
  //ie
    document.getElementById('resultfile').innerText="Caspol.exe -machine -addgroup All_Code -url "+ document.getElementById('inputfile').value +" FullTrust"; 
  //alert(document.getElementById('resultfile').innerText);
  } else{
  //firefox
    document.getElementById('resultfile').textContent="Caspol.exe -machine -addgroup All_Code -url "+ document.getElementById('inputfile').value +" FullTrust";
  //alert(document.getElementById('resultfile').textContent);
  }
}
function buildfolder()
{
  if(document.all){
  //ie
    document.getElementById('resultfolder').innerText="Caspol.exe -machine -addgroup All_Code -url "+ document.getElementById('inputfolder').value +"* FullTrust"; 
  //alert(document.getElementById('resultfolder').innerText);
  } else{
  //firefox
    document.getElementById('resultfolder').textContent="Caspol.exe -machine -addgroup All_Code -url "+ document.getElementById('inputfolder').value +"* FullTrust";
  //alert(document.getElementById('resultfolder').textContent);
  }
}
</script>
<p class="quote"><i>“Change is the law of life.  And those who look only to the past or the present are certain to miss the future” ~ John F. Kennedy</i></p>
<p><b>Related:</b></p>
<p><a href="http://gallery.technet.microsoft.com/scriptcenter/PowerShell-Caspol-f2c61fb1">CasPol wrapper for PowerShell</a> - Peter Kriegel/TechNet<br>
<a href="http://brandonpotter.wordpress.com/2010/01/23/code-access-security-policy-caspol-exe-gui-utility/">Code Access Security Policy GUI Utility</a> - Brandon Potter<br>
<a href="sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="caspol.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

