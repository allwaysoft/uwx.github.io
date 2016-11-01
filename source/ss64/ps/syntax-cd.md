---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> CD - </h1> 
<p>In the bash shell, the command <span class="code">'cd -' </span>will jump to the previous
working directory. To add this functionality to PowerShell, here is a simple <span class="code">cd</span> function from
<a href="http://windows-powershell-scripts.blogspot.com/2009/07/cd-change-to-previous-working-directory.html">Jagadish</a>. 
This works by setting a global variable "OLDPWD"</p>
<p> <span class="code">Remove-Item Alias:cd</span></p>
<pre>Function cd
<b>{</b>
    if ($args[0] -eq '-')
    {
        $newdir=$OLDPWD;
    } else {
        $newdir=$args[0];
    }
    $before_change=Get-Location
    if ($newdir)
    {
        Set-Location $newdir;
    }
    Set-Variable -Name OLDPWD -Value $before_change -Scope global; 
 <b>}</b></pre>
<p>A  more complex <span class="code">cd</span> function is below, this stores the last directory/location <i>for each drive/provider</i>. 
<br>
Windows   remembers the <i>current</i> directory
for each drive so you may find it more  intuitive to also have the <i>last</i> directory remembered for each drive.</p>
<p>This function also demonstrates the use of <a href="invoke-expression.html">Invoke-Expression</a> to evaluate an expression
where the VALUE of one variable ($tmp) contains the NAME of a second
variable.</p>
<pre>Remove-Item Alias:cd

function cd
<b>{</b>
    [string]$drivepath = pwd; 
    $pwdletter = $drivepath.substring(0,1); 
    if ($args[0] -eq '-')
    {
        Set-Variable -Name tmp -Value "`$OLDPWD$pwdletter"; 
        $newdir = Invoke-Expression $tmp; 
        $newletter = '-' 
    } else {
        $newdir=$args[0]; 
        $newletter = ("$newdir  ").substring(1,1); 
    }

    $before_change=Get-Location; 
    if ($newdir -eq $null) {$newdir = '-'}

    if  (test-path $newdir)
    { 
        Set-Location $newdir; 
        if ($newletter -ne ':')
        { 
            Set-Variable -Name "OLDPWD$pwdletter" -Value $before_change -Scope global; 
        } 

    } else {
        # changing drive so dont store last dir 
        write-warning "Set-Location : Cannot find path [$newdir]"
    };
<b>}</b></pre>
<p>The function uses the first letter of each drive name to assign the
variable, one for each drive:<br>
OLDPWDc for the C drive, OLDPWDd for D: drive etc<br>
This can also be used with the Registry and Certificate providers but
using just one letter is not always a unique identifier i.e. Cert: will
share a variable with C: and HKLM:/HKCU: share a variable with H:
(fixing this is left as an exercise for the reader.)</p>
<p>Note: PowerShell does not save functions or aliases permanently by
default. So if you close and reopen PowerShell, this function will no
longer be available. To make it permanent, add the function to your
<a href="syntax-profile.html">PowerShell $Profile</a> file.</p>
<p class="quote"><i>“Web 1.0 was where corporations thought the internet was another dandy platform for telling us what they wanted us to know. <br>
&nbsp;Web 2.0 was where we showed them that the internet is about us, not them, and that if they want to stay around, they'd better sit back, shut up, and listen. <br>
&nbsp;Web 2.0, like Rock and Roll, is here to stay” - Ray Beckerman</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-run.html">Run a script</a> - How to run a PowerShell script</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

