---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> Touch</h1> 
<p>Change the date/time of a file. </p>
<p>Changing the last modified date/time of a file (or folder) in PowerShell can be a simple one liner, to set the date/time to 1976 Dec 31st:<br>
<br>
<span class="code">PS C:&gt; (dir sample_file.txt).LastWriteTime = New-object DateTime 1976,12,31</span></p>
<p>The function below implements a fully featured PowerShell version of the Unix touch command. It accepts piped input and if the file does not already exist it will be created. There are options to change only the Modification time or Last access time (<span class="code">-only_modification</span> or <span class="code">-only_access</span>) </p>
<pre>function Set-FileTime{
  param(
    [string[]]$paths,
    [bool]$only_modification = $false,
    [bool]$only_access = $false
  );

  begin {
    function updateFileSystemInfo([System.IO.FileSystemInfo]$fsInfo) {
      $datetime = get-date
      if ( $only_access )
      {
         $fsInfo.LastAccessTime = $datetime
      }
      elseif ( $only_modification )
      {
         $fsInfo.LastWriteTime = $datetime
      }
      else
      {
         $fsInfo.CreationTime = $datetime
         $fsInfo.LastWriteTime = $datetime
         $fsInfo.LastAccessTime = $datetime
       }
    }
   
    function touchExistingFile($arg) {
      if ($arg -is [System.IO.FileSystemInfo]) {
        updateFileSystemInfo($arg)
      }
      else {
        $resolvedPaths = resolve-path $arg
        foreach ($rpath in $resolvedPaths) {
          if (test-path -type Container $rpath) {
            $fsInfo = new-object System.IO.DirectoryInfo($rpath)
          }
          else {
            $fsInfo = new-object System.IO.FileInfo($rpath)
          }
          updateFileSystemInfo($fsInfo)
        }
      }
    }
   
    function touchNewFile([string]$path) {
      #$null &gt; $path
      Set-Content -Path $path -value $null;
    }
  }
 
  process {
    if ($_) {
      if (test-path $_) {
        touchExistingFile($_)
      }
      else {
        touchNewFile($_)
      }
    }
  }
 
  end {
    if ($paths) {
      foreach ($path in $paths) {
        if (test-path $path) {
          touchExistingFile($path)
        }
        else {
          touchNewFile($path)
        }
      }
    }
  }
}

New-Alias touch Set-FileTime</pre>
<p>This script is based on <a href="http://rkeithhill.wordpress.com/2006/04/04/writing-cmdlets-with-powershell-script/">Keith Hill's Touch-File script</a> combined with <a href="http://joe-pruitt.sys-con.com/node/954652/mobile">Joe Pruitt's touch</a> script, just like the <a href="../bash/touch.html">Unix Touch</a> command this function can be used to create new empty files. These are <i>completely</i> empty: 0 bytes (not 2 bytes due to a CR/LF being added)</p>
<p>Note: PowerShell does not save functions or aliases permanently by
default. So if you close and reopen PowerShell, this function will no
longer be available. To make it permanent, add the function to your <a href="syntax-profile.html">PowerShell $Profile</a> file.</p>
<p>The PowerShell community extensions  include a similar function, also called Set-FileTime (with the alias Touch) but that function will not create  new files, (it throws an error if  the file does not already exist).</p>
<p><b>Examples:</b></p>
<p>Change the Creation + Modification + Last Access Date/time and if the file does not already exist, create it:<span class="code"><br>
PS C:\&gt; touch foo.txt</span><br>
<br>
Change only the modification time:<br>
<span class="code">PS C:\&gt; touch foo.txt -only_modification</span><br>
<br>
Change only the last access time.<br>
<span class="code">PS C:\&gt; touch foo.txt -only_access </span><br>
<br>
Change multiple files: <br>
<span class="code">PS C:\&gt; touch *.bak<br>
PS C:\&gt; dir . -recurse -filter "*.xls" | touch</span></p>
<p>Files showing a data/time earlier than 1980 are likely to be corrupt - often   permissions messed up due to  incorrectly ordered ACLs.<br>
List all files that are  over 40 years old:<br>
<span class="code">PS C:\&gt; dir "\\server64\fileshare\" -recurse | where{$_.LastWriteTime -lt ((get-date).adddays(-14609))} &gt; problems.txt</span></p>
<p class="quote"><i>“Any fool can make things bigger, more complex, and more violent.<br> 
It takes a touch of genius, and a lot of courage, to move in the opposite direction” - Albert Einstein</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-stampme.html">StampMe</a> - Rename a file with the current Date/Time.<br>
<a href="syntax-set-eol.html">set-eol</a> - Change the line endings of a text file.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-touch.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

