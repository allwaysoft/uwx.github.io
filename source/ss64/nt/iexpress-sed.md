---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SED File format</h1>
<p> The Self Extraction Directive (SED) file controls the options  used when building an installation (INF-based setup) package.</p>
<pre>[ Version ]
Class=IExpress
SEDVersion=3

[ Options ]
ExtractOnly=0/1                            ; 1 = execute nothing after extraction. If missing will create only a cab file.
ShowInstallProgramWindow=0/1/2/3           ; How the window for installation program will look
                                           ; 0-default , 1- hidden ,2-minimized ,3-maximized
HideExtractAnimation=1/0                   ;                                 
RebootMode=0/1/2 or A/I/N/S                ; 0 = Do not reboot machine afer installation, 1 = force a restart, 2 = restart if needed.
ShowRebootUI=1/0                           ; 1 = prompt user for restart, 2 = restart without prompt
CAB_FixedSize=0                            ;
CAB_ResvCodeSigning=6144                   ;
PackageInstallSpace(KB)=xxxx               ;
InsideCompressed=1                         ;   
CompressionType=[ MSZIP | LZX | QUANTUM ]  ;
Quantum=7                                  ;
KeepCabinet=1/0                            ;
SourceFiles="SampleApp"                    ;
Strings="Strings"                          ; The section in which additional info will be stored/
InstallPrompt=%InstallPrompt%              ; Prompt message before the extraction (with yes/no button). Actual value is in [Strings] section
DisplayLicense=%DisplayLicense%            ; Location to a file containing license message.. Actual value is in [Strings] section
AppLaunched=%AppLaunched%                  ; The Application that will be launched after the extraction
      -or-
AppLaunched="#Setup"                       ; A setup file with post-extraction commands
EndMessage=%FinishMessage%                 ; Post installation message (with OK button). Actual value is in [Strings] section
TargetName=%TargetName%                    ; The name of the .exe that will be created
FriendlyName=%FriendlyName%                ; String that will be used as a title in installation windows
AppLaunched2=%AppLaunched2%                ;
AppLaunched3=%AppLaunched3%
AppLaunched4=%AppLaunched4%

[ SampleApp ]
Source1=Source.prog   ;Path to source files. UNC or C:\<sourcedir>
Source2=Source.dat

[ Source.dat ]
%DisplayLicense%
%File1%   ;Can be localizable strings or exact file names
%File2%
%File3%
%File4%
%File5%

[ Source.prog ]
%AppLaunched%
%AppLaunched2%
%AppLaunched3%
%AppLaunched4%

[ Setup ] (Optional)
%AppLaunched2%
%AppLaunched3%
%AppLaunched4%

[ Strings ]      ;(Mainly used by localizers)
InstallPrompt="Do you wish to install this Sample App?"
DisplayLicense=License.txt
AppLaunched="Setup.exe"
      -or-
AppLaunched="#Setup"
EndMessage="Thank you installing Sample App"
PackageName="Sample.exe"
FriendlyName="Microsoft Cool App"
AppLaunched2=App.inf
AppLaunched3=Config.exe
AppLaunched4=Final.inf
File1=C:\stuff\*.*
File2=C:\Stuff\*.exe
File3=C:\Stuff\data.obj
File4=\\server\share\stuff\*.HTM
File5=C:\msdoc\License.txt</sourcedir></pre>
<p>If the <span class="code">%AppLaunched%</span> property is set to run a batch file (.BAT or .CMD) it will fail with the following error: "Error creating process Command.com /c ... " Reason: The system cannot find the file specified. </p>
<p>A workaround is to use "<span class="code">cmd.exe /c example.cmd</span>" </p>
<p><span class="quote">“He can compress the most words into the smallest ideas of any man I ever met”  ~ Abraham Lincoln (attr.)</span><br><br>
<b>Related:</b></p>
<p><a href="iexpress.html">IEXPRESS</a>- Create a self extracting ZIP file archive</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="iexpress-sed.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

