---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>lsof</h1> 
<p>List open files.</p>
<pre>Syntax
      lsof [ -?abChlnNOPRstUvVX ] [ -A A ] [ -c c ] [ +c c ] [ +|-d d ]
              [ +|-D D ] [ +|-f [cfgGn] ] [ -F [f] ] [ -g [s] ] [ -i[i] ]
                 [ -k k ] [ +|-L [l] ] [ +|-m m ] [ +|-M ] [ -o [o] ] [ -p s ]
                    [ +|-r [t] ] [ -S [t] ] [ -T [t] ] [ -u s ] [ +|-w ]
                       [ -x [fl] ] [ -z [z] ] [ -Z [Z] ] [ -- ] [<i>filenames</i>] </pre>
<p><span class="body">  Jump to <a href="#examples">examples</a> <br>
An open file can be a regular file, a directory, a block special file, a character special file, an executing text reference, a library, a stream or a network file (Internet socket, NFS file or UNIX domain socket.) A specific file or all the files in a file system can be selected by path.</span></p>
<p>Instead of a formatted display, lsof will produce output that can be parsed by other programs. See the -F, option description, and the OUTPUT FOR OTHER PROGRAMS section for more information.</p>
<p>In addition to producing a single output list, lsof will run in repeat mode. In repeat mode it will produce output, delay, then repeat the output operation until stopped with an interrupt or quit signal. See the +|-r [t] option description for more information.<br>
<br>
In the absence of any options, lsof lists <b>all open files</b> belonging to all active processes.</p>
<pre>Options

<b>-?</b> -h</pre>
<blockquote>
<p>
These two equivalent options select a usage (help) output list. <i>Lsof</i> displays a shortened form of this output when it detects an error in the options supplied to it, after it has displayed messages explaining each error. (Escape the '?' character as your shell requires.)</p>
</blockquote>
<pre><b>-a</b></pre>
<blockquote>
<p>This option causes list selection options to be ANDed, as described below.
</p>
</blockquote>
<pre><b>-A</b> <i>A</i>
</pre>
<blockquote>
<p>This option is available on systems configured for AFS whose AFS kernel code is implemented via dynamic modules. It allows the <i>lsof</i> user to<br>
specify <i>A</i> as an alternate name list file where the kernel addresses of the dynamic modules might be found. See the <i>lsof</i> FAQ (The Related<br>
section gives its location.) for more information about dynamic modules, their symbols, and how they affect <i>lsof</i>.</p>
</blockquote>
<pre><b>-b</b>
</pre>
<blockquote>
<p>This option causes <i>lsof</i> to avoid kernel functions that might block - <i><b>lstat</b>(2)</i>, <i><b>readlink</b>(2)</i>, and <i><b>stat</b>(2)</i>. <br>
See the BLOCKS AND TIMEOUTS and AVOIDING KERNEL BLOCKS sections for information on using this option.</p>
</blockquote>
<pre><b>-c</b> <i>c</i></pre>
<blockquote>
<p>This option selects the listing of files for processes executing the command that begins with the characters of <i>c</i>. Multiple commands can be specified, using multiple <b>-c</b> options. They are joined in a single ORed set before participating in AND option selection.<br>If <i>c</i> begins and ends with a slash ('/'), the characters between the slashes are interpreted as a regular expression. <br>Shell meta-characters in the regular expression must be quoted to prevent their interpretation by the shell. <br>The closing slash can be followed by these modifiers:</p>
</blockquote>
<pre><blockquote>  b    the regular expression is a basic one.
  i    ignore the case of letters.
  x    the regular expression is an extended one (default</blockquote></pre>
<blockquote> 
<p>See the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> (The FAQ section gives its location.) for more information on basic and extended regular expressions.<br>
The simple command specification is tested first. If that test fails, the command regular expression is applied.<br>
 If the simple command test succeeds, the command regular expression test isn't made. This <b>-V</b>option is specified.</p>
</blockquote>
<pre><b><a id="command"></a>+c</b> <i>w</i>
</pre>
<blockquote>
<p>This option defines the maximum number of initial characters of the name, supplied by the UNIX dialect, of the UNIX command associated with a process to be
printed in the COMMAND column. (The <i>lsof</i> default is nine.)<br>
<br>Note that many UNIX dialects do not supply all command name characters to <i>lsof</i> in the files and structures from<br> which <i>lsof</i> obtains command name. Often dialects limit the number of characters supplied in those
sources. For example, Linux 2.4.27 and Solaris 9 both limit command name length to 16 characters.<br>
If <i>w</i> is zero ('0'), all command characters supplied to <i>lsof</i> by the UNIX dialect will be printed.<br>If <i>w</i> is less than the length of the column title, ''COMMAND'', it will be raised to that length.</p>
</blockquote>
<pre><b>-C</b>
</pre>
<blockquote>
<p>This option disables the reporting of any path name components from the kernel's name cache. <br>
See the KERNEL NAME CACHE section for more information.</p>
</blockquote>
<pre><b>+d</b> <i>s</i></pre>
<blockquote>
<p>This option causes <i>lsof</i> to search for all open instances of directory <i>s</i> and the files and directories it contains at its top level. This option does NOT descend the directory tree, rooted at <i>s</i>. <br>
The <b>+D</b> <i>D</i> option can be used to request a full-descent directory tree search,rooted at directory <i>D</i>. <br><br>Processing of the <b>+d</b> option does not follow symbolic links within <i>s</i> unless the <b>-x</b> or <b>-x " l"</b> option is also specified.<br>
Nor does it search for open files on file system mount points on subdirectories of <i>s</i> unless the <b>-x</b> or <b>-x " f"</b> option is also specified. Note: the authority of the user of this option limits it to searching for files that the user has permission to examine with the system <i><b>stat</b>(2)</i> function.</p>
</blockquote>
<pre><b>-d</b> <i>s</i></pre>
<blockquote>
<p>This option specifies a list of file descriptors (FDs) to exclude from or include in the output listing. <br>
The file descriptors are specified in the
comma-separated set <i>s</i> - e.g., ''cwd,1,3'', ''^6,^2''. <br>
(There should be no spaces in the set.)<br>The list is an exclusion list if all entries of the set begin with '^'. <br>
It is an inclusion list if no entry begins with '^'. Mixed lists are not permitted.</p>
<p> A file descriptor number range can be in the set as long as neither member is empty, both members are numbers, and<br>the ending member is larger than the starting one - e.g., ''0-7'' or ''3-10''. </p>
<p>Ranges can be specified for exclusion if theyhave the '^' prefix - e.g., ''^0-7'' excludes all file descriptors 0 through 7.</p>
<p> Multiple file descriptor numbers are joined in a single ORed set before participating in AND option selection.<br>
When there are exclusion and inclusion members in the set, <i>lsof</i> reports them as errors and exits with a non-zero return code. See the description of File Descriptor (FD) output values in the <b>OUTPUT</b> section for more information on file descriptor names.</p>
</blockquote>
<pre><b>+D</b> <i>D</i>
</pre>
<blockquote>
<p>This option causes <i>lsof</i> to search for all open instances of directory <i>D</i> and all the files and directories it contains to its complete depth.<br>Processing of the <b>+D</b> option does not follow symbolic links within <i>D</i> unless the <b>-x</b> or <b>-x " l"</b> option is also specified. <br>Nor does it search for open files on file system mount points on subdirectories of <i>D</i> unless the <b>-x</b> or <b>-x " f"</b> option is also specified.<br>Note: the authority of the user of this option limits it to searching for files that the user has permission to examine with the system <i><b>stat</b>(2)</i> function.<br><br>
Further note: <i>lsof</i> might process this option slowly and require a large amount of dynamic memory to do it. This is because it must descend the entire directory<br>
tree, rooted at <i>D</i>, calling <i><b>stat</b>(2)</i> for each file and directory, building a list of all the files it finds, and searching that list for a match<br>
with every open file. When directory <i>D</i> is large, these steps can take a long time, so use this option prudently.</p>
</blockquote>
<pre><b>-D</b> <i>D</i></pre>
<blockquote><p>This option directs <i>lsof's</i> use of the device cache file. The use of this option is sometimes restricted.<br> 
See the <b>DEVICE CACHE FILE</b> section and the sections that follow it for more information on this option.</p></blockquote>
<pre><b>-D</b></pre>
<blockquote>
<p>must be followed by a function letter; the function letter can optionally be followed by a path name. <i><br><br>Lsof</i> recognizes these function letters:<br><br>
<span class="code"><b>?</b> - report device cache file paths<br>
<b>b</b> - build the device cache file<br>
<b>i</b> - ignore the device cache file<br>
<b>r</b> - read the device cache file<br>
<b>u</b> - read and update the device cache file

</span></p>
</blockquote>
<blockquote>
<p>The <b>b</b>, <b>r</b>, and <b>u</b> functions, accompanied by a path name, are sometimes restricted.<br>When these functions are restricted, they will not appear in the description of the <b>-D</b> option that accompanies <b>-h</b> or <b>-?</b> option output. See the DEVICE CACHE FILE section and the
sections that follow it for more information on these functions and when they're restricted.<br>
<br>
The <b>?</b> function reports the read-only and write paths that lsof can use for the device cache file, the names of any environment variables whose values <i>lsof</i> will examine when forming the device cache file path, and the format for the personal device cache file path. (Escape the '?' character as your shell requires.)<br>When available, the <b>b</b>, <b>r</b>, and <b>u</b> functions can be followed by the device cache file's path.<br>The standard default is <i>.lsof_hostname</i> in the home directory of the real user ID that executes <i>lsof</i>, but this could have been changed when <i>lsof</i> was configured and compiled. (The output of the <b>-h</b> and <b>-?</b> options show the current default prefix - e.g., ''.lsof''.) The suffix, <i>hostname</i>, is the first component of the host's name returned by <i><b>gethostname</b>(2).</i> <br>When available, the <b>b</b> function directs <i>lsof</i> to build a new device cache file at the default or specified path.<br>
The <b>i</b> function directs <i>lsof</i> to ignore the default device cache file and obtain its information about devices via direct calls to the kernel.<br><br>
The <b>r</b> function directs <i>lsof</i> to read the device cache at the default or specified path, but prevents it from creating a new device cache file when none exists or the existing one is improperly structured. The <b>r</b> function, when specified without a path name, prevents <i>lsof</i> from updating an incorrect or outdated device cache file, or creating a new one in its place.<br><br>The <b>r</b> function is always available when it is specified without a path name
argument; it can be restricted by the permissions of the <i>lsof</i> process.<br>
<br>When available, the <b>u</b> function directs <i>lsof</i> to read the device cache file at the default or specified path,<br>
if possible, and to rebuild it, if necessary. This is the default device cache file function when no <b>-D</b> option has been specified.</p>
</blockquote>
<pre><b>+|-f [cfgGn]</b></pre>
<blockquote><p><b>f</b> by itself clarifies how path name arguments are to be interpreted. When followed by <b>c</b>, <b>f</b>, <b>g</b>, <b>G</b>, or <b>n</b> in any<br>
combination it specifies that the listing of kernel file structure information is to be enabled ('+') or inhibited ('-').<br>
<br>Normally a path name argument is taken to be a file system name if it matches a mounted-on directory<br>name reported by <i><b>mount</b>(8)</i>, or if it represents a block device, named in the <i>mount</i> output and associated<br>
with a mounted directory name. When <b>+f</b> is specified, all path name arguments will be taken to be file system names, and <i>lsof</i> will complain if any are not. This can be useful, for example, when the file system name (mounted-on device) isn't a block device. This happens for some CD-ROM file systems.<br><br>When <b>-f</b> is specified by itself, all path name arguments will be taken to be simple files. <br>Thus, for example, the ''<b>-f</b> -- /'' arguments direct lsof to search for open files with a '/' path name, <br>not all open files in the '/' (root) file system.<br>
<br>Be careful to make sure <b>+f</b> and <b>-f</b> are properly terminated and aren't followed by a character<br> (e.g., of the file or file system name) that might be taken as a parameter. <br>For example, use ''--'' after <b>+f</b> and <b>-f</b> as in these examples.<br><br>$ lsof +f -- /file/system/name    $ lsof -f -- /file/name</p><p>The listing of information from kernel file structures, requested with the <b>+f [cfgGn]</b> option form,<br>is normally inhibited, and is not available for some dialects - e.g., /proc-based Linux.<br>When the prefix to <b>f</b> is a plus sign ('+'), these characters request file structure information:</p></blockquote>
<pre>   <b>c</b>    file structure use count <br>   <b>f</b>    file structure address <br>   <b>g</b>    file flag abbreviations<br>   <b>G</b>    file flags in hexadecimal<br>   <b>n</b>    file structure node address</pre><blockquote>
<p>When the prefix is minus ('-') the same characters disable the listing of the indicated values.<br><br>
File structure addresses, use counts, flags, and node addresses can be used to detect more readily identical files inherited by child processes and identical files in use by different processes.<br>
<i>Lsof</i> column output can be sorted by output columns holding the values and listed to identify identical file use,<br>or <i>lsof</i> field output can be parsed by an AWK or Perl post-filter script, or by a C program.<br>
</p>
</blockquote>
<pre><b>-F</b> <i>f</i>
</pre>
<blockquote>
<p>This option specifies a character list, <i>f</i>, that selects the fields to be output for processing by another program, and the character that terminates each output field. Each field to be output is specified with a single character in <i>f</i>. The field terminator defaults to NL, but can be changed to NUL
(000). See the OUTPUT FOR OTHER PROGRAMS section for a description of the field identification characters and the field output process.<br>
<br>
When the field selection character list is empty, all standard fields are selected (except the raw device field, security context and zone field for compatibility reasons) and the NL field terminator is used.<br>
When the field selection character list contains only a zero ('0'), all fields are selected (except the raw device field for compatibility reasons) and the NUL terminator character is used. Other combinations of fields and their associated field terminator character must be set with explicit entries in <i>f</i>, as described in the OUTPUT FOR OTHER PROGRAMS section.<br><br>When a field selection character identifies an item <i>lsof</i> does not normally list - <br>e.g., PPID, selected with <b>-R</b> - specification of the field character - e.g., '<b>-FR</b>' - also selects the listing of the item.<br>
<br>
When the field selection character list contains the single character '?', <i>lsof</i> will display a help list of the field identification characters. (Escape the '?' character as your shell requires.)<br>
</p>
</blockquote>
<pre><b>-g</b> <i>[s]</i>
</pre>
<blockquote>
<p>This option excludes or selects the listing of files for the processes whose optional process group IDentification (PGID) numbers are in the<br>
comma-separated set <i>s</i> - e.g., ''123'' or ''123,^456''. (There should be no spaces in the set.) <br>PGID numbers that begin with '^' (negation) represent exclusions.<br>Multiple PGID numbers are joined in a single ORed set before participating in AND option selection. <br>However, PGID exclusions are applied without ORing or ANDing and take effect before other selection criteria are applied.<br>
The <b>-g</b> option also enables the output display of PGID numbers. When specified without a PGID set that's all it does.</p>
</blockquote>
<pre><b><a id="network"></a>-i</b> <i>[i]</i></pre>
<blockquote>
<p>This option selects the listing of files any of whose Internet address matches the address specified in <i>i</i>. If no address is specified, this option
selects the listing of all Internet and x.25 (HP-UX) network files.<br>
If  <b>-i</b><i>4</i> or <b>-i</b><i>6</i> is specified with no following address, only files of the indicated IP version, IPv4 or IPv6, are displayed. (An<br>
IPv6 specification can be used only if the dialects supports IPv6, as indicated by ''[46]'' and ''IPv[46]'' in <i>lsof's</i> <b>-h</b> or <b>-?</b> output.)<br>
Sequentially specifying <b>-i</b>4, followed by <b>-i</b>6 is the same as specifying <b>-i</b>, and vice-versa. <br>Specifying <b>-i</b>4, or <b>-i</b>6 after <b>-i</b> is the same as specifying <b>-i</b>4 or <b>-i</b>6 by itself.<br>Multiple addresses (up to a limit of 100) can be specified with multiple <b>-i</b> options. <br>
(A port number or service name range is counted as one address.) They are joined in a single ORed set before participating in AND option
selection. <br>An Internet address is specified in the form (Items in square brackets are optional.):<span class="code"> [<i>46</i>][<i>protocol</i>][@<i>hostname</i>|<i>hostaddr</i>][:<i>service</i>|<i>port</i>]</span><br>
where:</p>
</blockquote>
<blockquote>
<p>    <span class="code">46</span> specifies the IP version, IPv4 or IPv6 that applies to the following address.<br>
        '6' can be be specified only if the UNIX
        dialect supports IPv6.  <br>
If neither '4' nor
        '6' is specified, the following address applies to all IP versions.<br>
    <span class="code">protocol</span> is a protocol name - TCP or UDP.<br>
    <span class="code">hostname</span> is an Internet host name.  Unless a
        specific IP version is specified, open
        network files associated with host names
        of all versions will be selected.<br>
    <span class="code">hostaddr</span> is a numeric Internet IPv4 address in
        dot form; or an IPv6 numeric address in
        colon form, enclosed in brackets, if the 
        UNIX dialect supports IPv6.  <br>
When an IP 
        version is selected, only its numeric
        addresses can be specified.<br>
    <span class="code">service</span> is an /etc/services name - e.g., smtp -
        or a list of them.<br>
    <span class="code">port</span> is a port number, or a list of them.</p>
<p>IPv6 options can be used only if the UNIX dialect supports IPv6. </p>
</blockquote>
<blockquote>
<p>To see if the dialect supports IPv6, run <i>lsof</i> and specify the <b>-h</b> or <b>-?</b> (help) option. If the displayed description of the <b>-i</b>

option contains ''[46]'' and ''IPv[46]'', IPv6 is supported.
<br>IPv4 host names and addresses can not be specified if network file selection
is limited to IPv6 with <b>-i</b> 6. <br>
IPv6 host names and addresses can not be specified if network file selection is limited to IPv4 with <b>-i</b> 4. <br>
When
an open IPv4 network file's address is mapped in an IPv6 address, the open file's type will be IPv6, not IPv4, and its display will be selected by '6', not
'4'.
<br>
<br>At least one address component -
</p>
</blockquote>
<blockquote>
<p><b>4, 6,</b> <i>protocol</i>, ,IR hostname , <i>hostaddr</i>, or <i>service</i> - must be supplied. The '@' character, leading the host
specification, is always required; as is the ':', leading the port specification. Specify either <i>hostname</i> or <i>hostaddr</i>. Specify either

<i>service</i> name list or <i>port</i> number list. If a <i>service</i> name list is specified, the <i>protocol</i> might also need to be specified if the TCP
and UDP port numbers for the service name are different. Use any case - lower or upper - for <i>protocol</i>.</p>
<p><i> Service </i>names and <i>port</i> numbers can be combined in a list whose entries are separated by commas and whose numeric range entries are separated by minus signs.
There can be no embedded spaces, and all service names must belong to the specified <i>protocol</i>. Since service names can contain embedded minus signs, the
starting entry of a range can't be a service name; it can be a port number, however.
<br>
</p>
</blockquote>
<blockquote>
<pre> Here are some sample addresses:

 -i6 - IPv6 only

 TCP:25 - TCP and port 25

 @1.2.3.4 - Internet IPv4 host address 1.2.3.4

 @[3ffe:1ebc::1]:1234 - Internet IPv6 host address
 3ffe:1ebc::1, port 1234

 UDP:who - UDP who service port


 TCP@lsof.itap:513 - TCP, port 513 and host name lsof.itap<br> tcp@foo:1-10,smtp,99 - TCP, ports 1 through 10,
 service name smtp, port 99, host name foo

 tcp@bar:1-smtp - TCP, ports 1 through smtp, host bar<br> :time - either TCP or UDP time service port</pre>
</blockquote><pre><b>-k</b> <i>k</i><br></pre>
<blockquote>
<p>This option specifies a kernel name list file, <i>k</i>, in place of /vmunix, /mach, etc. This option is not available under AIX on the IBM RISC/System
6000.
</p>
</blockquote><pre><b>-l</b>
</pre><blockquote>
<p>This option inhibits the conversion of user ID numbers to login names. It is also useful when login name lookup is working improperly or slowly.
</p>
</blockquote><pre><b>+|-L</b> <i>[l]</i>
</pre>
<blockquote>
<p>This option enables ('+') or disables ('-') the listing of file link counts, where they are available - <br>
e.g., they aren't available for sockets, or most
FIFOs and pipes.
When
<b>+L</b> is specified without a <br>
following number, all link counts will be listed. When <b>-L</b> is specified (the default), no link counts will be
listed.
<br>
When <b>+L</b> is followed by a number, only files having a link count less than that number will be listed. <br>
(No number can follow <b>-L</b>.) A specification
of the form ''<b>+L1</b>'' will select open files that have been unlinked.<br> 
A specification of the form ''<b>+aL1 <i>&lt;file_system&gt;</i></b>'' will select
unlinked open files on the specified file system.
<br>
For other link count comparisons, use field output (<b>-F</b>) and a post-processing script or program.
<br>
</p>
</blockquote>
<pre><b>+|-m</b> <i>m</i>
</pre>
<blockquote>
<p>This option specifies an alternate kernel memory file or activates mount table supplement processing.
<br>The option form
<b>-m</b> <i>m</i> specifies a kernel memory file, <i>m</i>, in place of <i>/dev/kmem</i> or <i>/dev/mem</i> - e.g., a crash dump file.
<br>
The option form <b>+m</b> requests that a mount supplement file be written to the standard output file. All other options are silently ignored.
<br>
<br>
There will be a line in the mount supplement file for each mounted file system, containing the mounted file system directory, followed by a single space, followed by the device number in hexadecimal "0x" format - <br>
e.g.,<br>   
/ 0x801 <br>
<i>Lsof</i> can use the mount supplement file to get device numbers for file systems when it can't get them via <i><b>stat</b>(2)</i> or <i><b>lstat</b>(2)</i>.
<br>
The option form <b>+m</b> <i>m</i> identifies <i>m</i> as a mount supplement file.
<br>
Note: the <b>+m</b> and <b>+m</b> <i>m</i> options are not available for all supported dialects. <br>
Check the output of <i>lsof's</i> <b>-h</b> or <b>-?</b> options to
see if the <b>+m</b> and <b>+m</b> <i>m</i> options are available.
<br>
</p>
</blockquote>
<pre><b>+|-M</b>
</pre>
<blockquote>
<p>Enables (<b>+</b>) or disables (<b>-</b>) the reporting of portmapper registrations for local TCP and UDP ports. <br>
The default reporting mode is set by the
<i>lsof</i> builder with the HASPMAPENABLED #define in the dialect's machine.h header file;<br> 
<i>lsof</i> is distributed with the HASPMAPENABLED #define
deactivated, so portmapper reporting is disabled by default 
and must be requested with <b>+M</b>. Specifying <i>lsof's</i> <b>-h</b> or <b>-?</b> option will
report the default mode. <br>
Disabling portmapper registration when it is already disabled or enabling it when already enabled is acceptable.
<br>
<br>When portmapper registration reporting is enabled,
<i>lsof</i> displays the portmapper registration (if any) for local TCP or UDP ports in square brackets immediately following the port numbers or service
names - e.g., '':1234[name]'' or '':name[100083]''. The registration information can be a name or number, depending on what the registering program supplied to
the portmapper when it registered the port.
<br>
<br>
When portmapper registration reporting is enabled, <i>lsof</i> might run a little more slowly or even become blocked 
when access to the portmapper becomes congested or stopped. Reverse the reporting mode to
determine 
if portmapper registration reporting is slowing or blocking <i>lsof</i>.
<br>
For purposes of portmapper registration reporting
<i>lsof</i> considers a TCP or UDP port local if: it is found in the 
local part of its containing kernel structure; or if it is located in the foreign part
of its containing kernel structure 
and the local and foreign Internet addresses are the same; or if it is located in the foreign part of its containing <br>
kernel
structure and the foreign Internet address is INADDR_LOOPBACK (127.0.0.1). <br>
This rule can make <i>lsof</i> ignore some foreign ports on machines with multiple
interfaces when the foreign 
Internet address is on a different interface from the local one.
<br>
See the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for further discussion of portmapper registration reporting issues. </p>
</blockquote>
<pre><b>-n</b>
</pre><blockquote>
<p>This option inhibits the conversion of network numbers to host names for network files. <br>
Inhibiting conversion can make <i>lsof</i> run faster. It is also
useful when host name lookup is not working properly.
</p>
</blockquote>
<pre><b>-N</b>
</pre><blockquote>
<p>This option selects the listing of NFS files.
</p>
</blockquote>
<pre><b>-o</b>
</pre>
<blockquote>
<p>This option directs <i>lsof</i> to display file offset at all times. It causes the SIZE/OFF output column title to be changed to OFFSET. Note: on some UNIX
dialects <i>lsof</i> can't obtain accurate or consistent file offset information from its kernel data sources, sometimes just for particular kinds of files
(e.g., socket files.) Consult the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for more information. <br>The
<b>-o</b> and <b>-s</b> options are mutually exclusive; they can't both be specified. <br>
When neither is specified, <i>lsof</i> displays whatever value - size
or offset - is appropriate and available for the type of the file.
<br>
</p>
</blockquote>
<pre><b>-o</b> <i>o</i>
</pre>
<blockquote>
<p>This option defines the number of decimal <i>digits (</i>o) to be printed after the ''0t'' for a file offset before the form is switched to ''0x...''. <br>
An
<i>o</i> value of zero (unlimited) directs <i>lsof</i> to use the ''0t'' form for all offset output.
<br>
<br>This option does NOT direct
<i>lsof</i> to display offset at all times; specify <b>-o</b> (without a trailing number) to do that. <br>
This option only specifies the number of digits after
''0t'' in either mixed size and offset or offset-only output. <br>
Thus, for example, to direct <i>lsof</i> to display offset at all times with a decimal digit
count of 10, use:<br>
</p>

</blockquote>
<pre>   -o -o 10or    -oo10
</pre><blockquote>
<p>The default number of digits allowed after ''0t'' is normally 8, but might have been changed by the lsof builder. <br>
Consult the description of the <b>-o</b>
<i>o</i> option in the output of the <b>-h</b> or <b>-?</b> option to determine the default that is in effect.
</p>
</blockquote>
<pre><b>-O</b>
</pre>
<blockquote>
<p>This option directs <i>lsof</i> to bypass the strategy it uses to avoid being blocked by some kernel operations - <br>
i.e., doing them in forked child
processes. See the BLOCKS AND TIMEOUTS and AVOIDING KERNEL BLOCKS sections<br> 
for more information on kernel operations that can block <i>lsof</i>.
<br>While use of this option will reduce
<i>lsof</i> startup overhead, it can also cause <i>lsof</i> to hang when the kernel doesn't respond to a function.<br> 
Use this option cautiously.

</p>
</blockquote>
<pre><b>-p</b> <i>s</i>
</pre>
<blockquote>
<p>This option excludes or selects the listing of files for the processes whose optional process IDentification (PID) <br>
numbers are in the comma-separated set
<i>s</i> - e.g., ''123'' or ''123,^456''. (There should be no spaces in the set.)
<br>PID numbers that begin with '^' (negation) represent exclusions.
<br>Multiple process ID numbers are joined in a single ORed set before
participating in AND option selection. <br>
However, PID exclusions are applied without ORing or ANDing and take effect before other selection criteria are
applied.
</p>
</blockquote>
<pre><b>-P</b>
</pre><blockquote>
<p>This option inhibits the conversion of port numbers to port names for network files.<br> 
Inhibiting the conversion can make <i>lsof</i> run a little faster. It
is also useful when port name lookup is not working properly.
<br>
</p>
</blockquote>
<pre><b><a id="repeat"></a>+|-r</b> <i>[t]</i>
</pre>
<blockquote>
<p>This option puts <i>lsof</i> in repeat mode. There <i>lsof</i> lists open files as selected by other options, delays <i>t</i> seconds (default fifteen),
then repeats the listing, delaying and listing repetitively until stopped by a condition defined by the prefix to the option.
<br>If the prefix is a '-', repeat mode is endless.
<i>Lsof</i> must be terminated with an interrupt or quit signal.
<br>
If the prefix is '+', repeat mode will end the first cycle no open files are listed - and of course when <i>lsof</i> is stopped<br>
with an interrupt or quit signal. When repeat mode ends because no files are listed,<br> 
the process
exit code will be zero if any open files were ever listed; one, if none were ever listed.<br>
<i><br>
Lsof</i>
marks the end of each listing: if field output is in progress (the <b>-F</b>, option has been specified), <br>
the marker is 'm'; otherwise the marker is
''========''. The marker is followed by a NL character.
<br>
<br>Repeat mode reduces
<i>lsof</i> startup overhead, so it is more efficient to use this mode than to call <i>lsof</i> repetitively from a shell script, for example.
<br>
To use repeat mode most efficiently, accompany <b>+|-r</b> with specification of other <i>lsof</i> selection options, <br>
so the amount of kernel memory access <i>lsof</i> does will be kept to a minimum.
<br>
Options that filter at the process level - e.g., <b>-c</b>, <b>-g</b>, <b>-p</b>, <b>-u</b> - are the most efficient selectors.
<br>
Repeat mode is useful when coupled with field output (see the
<b>-F</b>, option description) and a supervising <i>awk</i> or <i>Perl</i> script, or a C program.
<br>
</p>
</blockquote>

<pre><b>-R</b>
</pre><blockquote>
<p>This option directs lsof to list the Parent Process IDentification number in the PPID column.
</p>
</blockquote><pre><b>-s</b>
</pre>
<blockquote>
<p>This option directs <i>lsof</i> to display file size at all times. It causes the SIZE/OFF output column title to be changed to SIZE. If the file does not
have a size, nothing is displayed.
<br>The
<b>-o</b> (without a following decimal digit count) and <b>-s</b> options are mutually exclusive; they can't both be specified. When neither is specified,
<i>lsof</i> displays whatever value - size or offset - is appropriate and available for the type of file.
<br>Since some types of files don't have true sizes - sockets, FIFOs,pipes, etc.<br> 
- lsof displays for their sizes the content amounts in their associated kernel buffers, if possible.
<br>
</p>
</blockquote>
<pre><b>-S</b> <i>[t]</i>
</pre>
<blockquote>
<p>This option specifies an optional time-out seconds value for kernel functions - <i><b>lstat</b>(2)</i>, <i><b>readlink</b>(2)</i>, and <i><b>stat</b>(2)</i> - that might
otherwise deadlock. <br>
The minimum for <i>t</i> is two; the default, fifteen; when no value is specified, the default is used.
<br>
See the
BLOCKS AND TIMEOUTS section for more information.
<br>
</p>
</blockquote>
<pre><b>-T</b> <i>[t]</i>
</pre><blockquote>
<p>This option controls the reporting of some TCP/TPI information, also reported by <i><b>netstat</b>(1)</i>, following the network addresses. In normal output the
information appears in parentheses, each item except state identified by a keyword, followed by '=', separated from others by a single space:<br>
<br>
<span class="code">&lt;TCP or TPI state name&gt;    QR=&lt;read queue length&gt;    QS=&lt;send queue length&gt;    SO=&lt;socket options and values&gt;    SS=&lt;socket
states&gt;    TF=&lt;TCP flags and values&gt;    WR=&lt;window read length&gt;    WW=&lt;window write length&gt;
</span><br>
</p>
</blockquote>
<blockquote>
<p>Not all values are reported for all UNIX dialects. Items values (when available) are reported after the item name and '='.
<br>
When the field output mode is in effect (See OUTPUT FOR OTHER PROGRAMS.) each item appears as a field with a 'T' leading character.
<br>
</p>
</blockquote>
<pre><b>-T</b>
</pre><blockquote>
<p>with no following key characters disables TCP/TPI information reporting.
</p>
</blockquote><pre><b>-T</b>
</pre><blockquote>
<p>with following characters selects the reporting of specific TCP/TPI information:<br>   
<b>f</b>    selects reporting of socket options,        states and values, and TCP flags and        values.<br>    
<b>q</b>    selects queue length
reporting.    <b><br>
s</b>    selects connection state reporting.    <b><br>
w</b>    selects window size reporting.

</p>
</blockquote>
<blockquote>
<p>Not all selections are enabled for some UNIX dialects. State can be selected for all dialects and is reported by default. <br>
The <b>-h</b> or <b>-?</b> help
output for the <b>-T</b> option will show what selections can be used with the UNIX dialect.
<br>
<br>
When <b>-T</b> is used to select information - i.e., it is followed by one or more selection characters - the displaying of state is disabled by default, and it
must be explicitly selected again in the characters following <b>-T</b>. (In effect, then, the default is equivalent to <b>-Ts</b>.) <br>
<br>
For example, if queue
lengths and state are desired, use <b>-Tqs</b>.
<br>
Socket options, socket states, some socket values, TCP flags and
one TCP value can be reported (when available in the UNIX dialect) in the form of the names that commonly appear after SO_, so_, SS_, TCP_ and TF_ in the
dialect's header files - most often &lt;sys/socket.h&gt;, &lt;sys/socketvar.h&gt; and &lt;netinet/tcp_var.h&gt;. <br>
<br>
Consult those header files for the meaning of
the flags, options, states and values.
''SO='' precedes socket options and values; ''SS='', socket states;
and ''TF='', TCP flags and values.
If a flag or option has a value, the value will follow an '=' and
the name -- e.g., ''SO=LINGER=5'', ''SO=QLIM=5'', ''TF=MSS=512''. <br>
<br>
The following  values can be reported:<br>
<br>
   <i>Name    Reported    Description (Common Symbol)    </i><br>
KEEPALIVE    keep alive time (SO_KEEPALIVE)    <br>
LINGER    linger time (SO_LINGER)    <br>
MSS
maximum segment size (TCP_MAXSEG)    <br>
PQLEN    partial listen queue connections    <br>
QLEN        established listen queue connections    <br>
QLIM        established
listen queue limit    <br>
RCVBUF    receive buffer length (SO_RCVBUF)    <br>
SNDBUF    send buffer length (SO_SNDBUF)
<br>
</p>
</blockquote>
<blockquote>
<p>Details on what socket options and values, socket states, and TCP flags and values can be displayed for particular UNIX dialects can be found in the answer
to the ''Why doesn't lsof report socket options, socket states, and TCP flags and values for my dialect?'' and ''Why doesn't lsof report the partial listen
queue connection count for my dialect?'' questions in the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a></p>
</blockquote>
<pre><b>-t</b>
</pre><blockquote>
<p>This option specifies that <i>lsof</i> should produce terse output with process identifiers only and no header - e.g., so that the output can be piped to
<i><b>kill</b>(1)</i>. This option selects the <b>-w</b> option.

</p>
</blockquote><pre><b><a id="user"></a>-u</b> <i>s</i>
</pre>
<blockquote>
<p>This option selects the listing of files for the user whose login names or user ID numbers are in the comma-separated set <i>s</i> - e.g., ''abe'', or
''548,root''. (There should be no spaces in the set.)
<br>Multiple login names or user ID numbers are joined in a single ORed set
before participating in AND option selection.
<br>If a login name or user ID is preceded by a '^', it becomes a negation -</p>
</blockquote>
<blockquote>
<p>i.e., files of processes owned by the login name or user ID will never be listed. <br>
A negated login name or user ID selection is neither ANDed nor ORed with
other selections;<br> 
it is applied before all other selections and absolutely excludes the listing of the files of the process. <br>
For example, to direct <i>lsof</i>
to exclude the listing of files belonging to root processes, specify ''-u^root'' or ''-u^0''.
</p>
</blockquote><pre><b>-U</b><br></pre>
<blockquote>
<p>This option selects the listing of UNIX domain socket files.
</p>
</blockquote><pre><b>-v</b>
</pre><blockquote>
<p>This option selects the listing of <i>lsof</i> version information, including: revision number; <br>
when the <i>lsof</i> binary was constructed; <br>
who
constructed the binary and where; <br>
the name of the compiler used to construct the <i>lsof</i> binary;<br>
the version number of the compiler when readily available;
<br>
the compiler and loader flags used to construct the <i>lsof</i> binary; <br>
and system information, typically the output of <i>uname</i>'s <b>-a</b> option.

</p>
</blockquote><pre><b>-V</b>
</pre>
<blockquote>
<p>This option directs <i>lsof</i> to indicate the items it was asked to list and failed to find - command names, file names, Internet addresses or files,
login names, NFS files, PIDs, PGIDs, and UIDs.
<br>When other options are ANDed to search options, or compile-time
options restrict the listing of some files, <i>lsof</i> can not report that it failed to find a search item when an ANDed option or compile-time option
prevents the listing of the open file containing the located search item.
<br>
For example, ''lsof -V -iTCP@foobar -a -d 999'' can not report a failure to locate open files at ''TCP@foobar'' and can not list any, if none have a file descriptor number of 999. A similar situation arises when
HASSECURITY and HASNOSOCKSECURITY are defined at compile time and they prevent the listing of open files.
</p>
</blockquote><pre><b>+|-w</b>
</pre>
<blockquote>
<p>Enables (<b>+</b>) or disables (<b>-</b>) the suppression of warning messages.
<br>
The
<i>lsof</i> builder can choose to have warning messages disabled or enabled by default. The default warning message state is indicated in the output of the
<b>-h</b> or <b>-?</b> option. Disabling warning messages when they are already disabled or enabling them when already enabled is acceptable.
<br>
The <b>-t</b> option selects the <b>-w</b> option.
<br>
</p>
</blockquote><pre><b>-x " [fl]"</b>
</pre>
<blockquote>
<p>This option can accompany the <b>+d</b> and <b>+D</b> options to direct their processing to cross over symbolic links and|or file system mount points
encountered when scanning the directory (<b>+d</b>) or directory tree (<b>+D</b>).
<br>If
<b>-x</b> is specified by itself without a following parameter, cross-over processing of both symbolic links and file system mount points is enabled. Note
that when <b>-x</b> is specified without a parameter, the next argument must begin with '-' or '+'.
<br>
The optional 'f' parameter enables file system mount point cross-over processing; 'l', symbolic link cross-over processing.
<br>
The <b>-x</b> option can not be supplied without also supplying a <b>+d</b> or <b>+D</b> option.
<br>
</p>
</blockquote><pre><b>-X</b>
</pre><blockquote>
<p>This is a dialect-specific option.
<br>    
<br>
AIX:

</p>
</blockquote>
<blockquote>
<p>This IBM AIX RISC/System 6000 option requests the reporting of executed text file and shared library references.
<br>
<b>WARNING:</b>
</p>
</blockquote>
<blockquote>
<p>because this option uses the kernel readx() function, its use on a busy AIX system might cause an application process to hang so completely that it can
neither be killed nor stopped. I have never seen this happen or had a report of its happening, but I think there is a remote possibility it could happen.
<br>By default use of readx() is disabled.
</p>
</blockquote>
<blockquote>
<p>On AIX 5L and above <i>lsof</i> might need setuid-root permission to perform the actions this option requests.
<br>
The
<i>lsof</i> builder can specify that the <b>-X</b> option be restricted to processes whose real UID is root. If that has been done, the <b>-X</b> option
will not appear in the <b>-h</b> or <b>-?</b> help output unless the real UID of the <i>lsof</i> process is root. The default <i>lsof</i> distribution allows
any UID to specify <b>-X,</b> so by default it will appear in the help output.
<br>
When AIX readx() use is disabled, <i>lsof</i> might not be able to report information for all text and loader file references, but it can also avoid exacerbating an AIX kernel
directory search kernel error, known as the Stale Segment ID bug.
<br>
The readx() function, used by <i>lsof</i> or any other program to access some sections of kernel virtual memory, can trigger the Stale Segment ID bug. It can cause the kernel's
dir_search() function to believe erroneously that part of an in-memory copy of a file system directory has been zeroed. Another application process, distinct
from <i>lsof</i>, asking the kernel to search the directory - e.g., by using <i><b>open</b>(2)</i> - can cause dir_search() to loop forever, thus hanging the
application process.
<br>
Consult the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> and the <i>00README</i> file of the <i>lsof</i> distribution for a more complete description
of the Stale Segment ID bug, its APAR, and methods for defining readx() use when compiling <i>lsof</i>.
<br>
<br>    
Linux:<br>
This Linux option requests that <i>lsof</i> skip the reporting of information on all open TCP and UDP IPv4 and IPv6 files.
<br>This Linux option is most useful when the system has an extremely</p>
</blockquote>
<blockquote>
<p>large number of open TCP and UDP files, the processing of whose information in the <i>/proc/net/tcp*</i> and <i>/proc/net/udp*</i> files would take
<i>lsof</i> a long time, and whose reporting is not of interest.
<br>Use this option with care and only when you are sure that the
</p>
</blockquote>
<blockquote>
<p>information you want <i>lsof</i> to display isn't associated with open TCP or UDP socket files.
<br>
<br>    
Solaris 10 and above:
</p>
</blockquote>
<blockquote>
<p>This Solaris 10 and above option requests the reporting of cached paths for files that have been deleted - i.e., removed with <i><b><a href="/bash/rm.html">rm</a></b></i> or <i><b>unlink</b>(2)</i>.
<br>The cached path is followed by the string '' (deleted)'' to indicate
that the path by which the file was opened has been deleted.
<br>
Because intervening changes made to the path - i.e., renames with <i><b><a href="/bash/mv.html">mv</a></b>(1)</i> or <i><b>rename</b>(2)</i> - are not recorded in the cached path, what <i>lsof</i> reports is only the path by which the file was opened, not its
possibly different final path.
<br>
</p>
</blockquote>
<pre><b>-z</b> <i>[z]</i>
</pre>
<blockquote>
<p>specifies how Solaris 10 and higher zone information is to be handled.
<br>Without a following argument - e.g., NO
<i>z</i> - the option specifies that zone names are to be listed in the ZONE output column.
<br>
The <b>-z</b> option can be followed by a zone name, <b>z</b><i>.</i> That causes lsof to list only open files for processes in that zone. Multiple <b>-z</b>
<i>z</i> option and argument pairs can be specified to form a list of named zones. Any open file of any process in any of the zones will be listed, subject to
other conditions specified by other options and arguments.
<br>
</p>
</blockquote><pre><b>-Z</b><i>[Z]</i>
</pre>
<blockquote>
<p>specifies how SELinux security contexts are to be handled.
<br>Without a following argument - e.g., NO
<i>Z</i> - the option specifies that security contexts are to be listed in the SECURITY-CONTEXT output column.
<br>
The <b>-Z</b> option can be followed by a wildcard security context name, <b>Z</b><i>.</i> That causes lsof to list only open files for processes in that
security context. Multiple <b>-Z</b><i>Z</i> option and argument pairs can be specified to form a list of security contexts. Any open file of any process in
any of the security contexts will be listed, subject to other conditions specified by other options and arguments. Note that <i>Z</i> can be A:B:C or *:B:C or
A:B:* or *:*:C to match against the A:B:C context.
<br>
</p>
</blockquote><pre><b>--</b>
</pre><blockquote><p>The double minus sign option is a marker that signals the end of the keyed options. It can be used, for example, when the first file name begins with a
minus sign. It can also be used when the absence of a value for the last keyed option must be signified by the presence of a minus sign in the following option
and before the start of the file names.
</p>
</blockquote>
<pre><i><b>filenames</b></i></pre>
<blockquote>
<p>These are path names of specific files to list. <br>
Symbolic links are resolved before use. <br>
The first name can be separated from the preceding options with the
''--'' option.
<br>
If a
<i>filename</i> is the mounted-on directory of a file system or the device of the file system, <i>lsof</i> will list all the files open on the file system. <br>
To
be considered a file system, the <i>filename</i> must match a mounted-on directory name in <i><b><a href="mount.html" rel="nofollow">mount</a></b></i> output, or match the name of a block device associated
with a mounted-on directory name. The <b>+|-f</b> option can be used to force <i>lsof</i> to consider a <i>name</i> a file system identifier (<b>+f</b>) or a
simple file (<b>-f</b>).
<br> 
<br>
If <i>name</i> is a path to a directory that is not the mounted-on directory name of a file system, it is treated just as a regular file is treated - i.e.,
its listing is restricted to processes that have it open as a file or as a process-specific directory, such as the root or current working directory. To
request that <i>lsof</i> look for open files inside a directory name, use the <b>+d</b> <i>s</i> and <b>+D</b> <i>D</i> options.
<br>
<br>
If a <i>name</i> is the base name of a family of multiplexed files - e. g, AIX's <i>/dev/pt[cs]</i> - <i>lsof</i> will list all the associated multiplexed files
on the device that are open - e.g., <i>/dev/pt[cs]/1</i>, <i>/dev/pt[cs]/2</i>, etc.
<br>
<br>
If a
<i>name</i> is a UNIX domain socket name, <i>lsof</i> will usually search for it by the characters of the name alone - exactly as it is specified and is
recorded in the kernel socket structure. (See the next paragraph for an exception to that rule for Linux.) Specifying a relative path - e.g., <i>./file</i> -
in place of the file's absolute path - e.g., <i>/tmp/file</i> - won't work because <i>lsof</i> must match the characters you specify with what it finds in the
kernel UNIX domain socket structures.<br>
<br>If a
<i>name</i> is a Linux UNIX domain socket name, in one case <i>lsof</i> is able to search for it by its device and inode number, allowing <i>name</i> to be
a relative path. The case requires that the absolute path -- i.e., one beginning with a slash ('/') be used by the process that created the socket, and hence
be stored in the <i>/proc/net/unix</i> file; and it requires that <i>lsof</i> be able to obtain the device and node numbers of both the absolute path in
<i>/proc/net/unix</i> and <i>name</i> via successful <i><b>stat</b>(2)</i> system calls. When those conditions are met, <i>lsof</i> will be able to search for the
UNIX domain socket when some path to it is is specified in <i>name</i>. Thus, for example, if the path is <i>/dev/log</i>, and an <i>lsof</i> search is
initiated when the working directory is <i>/dev</i>, then <i>name</i> could be <i>./log</i>.<br>
<br>
If a <i>name</i> is none of the above, <i>lsof</i> will list any open files whose device and inode match that of the specified path <i>name</i>.
<br>
<br>
If you have also specified the <b>-b</b> option, the only <i>names</i> you can safely specify are file systems for which your mount table supplies alternate device numbers. See the
AVOIDING KERNEL BLOCKS and ALTERNATE DEVICE NUMBERS sections for more information. <br>
Multiple file names are joined in a single ORed set before participating in AND option selection.</p></blockquote>
<p><b>Notes</b></p>
<blockquote>
<p>If any list request option is specified, other list requests must be specifically requested - e.g., if -U is specified for the listing of UNIX socket files, NFS files won't be listed unless -N is also specified; or if a user list is specified with the -u option, UNIX domain socket files, belonging to users not in the list, won't be listed unless the -U option is also specified.</p>
<p>Normally list options that are specifically stated are ORed - i.e., specifying the -i option without an address and the -ufoo option produces a listing of all network files OR files belonging to processes owned by user ''foo''. Three exceptions are: 1) the '^' (negated) login name or user ID (UID), specified with the -u option; 2) the '^' (negated) process ID (PID), specified with the -p option; and 3) the '^' (negated) process group ID (PGID), specified with the -g option. Since they represent exclusions, they are applied without ORing or ANDing and take effect before any other selection criteria are applied.</p>
<p>The -a option can be used to AND the selections. For example, specifying -a, -U, and -ufoo produces a listing of only UNIX socket files that belong to processes owned by user ''foo''.</p>
<p>Caution: the -a option causes all list selection options to be ANDed; it can't be used to cause ANDing of selected pairs of selection options by placing it between them, even though its placement there is acceptable. Wherever -a is placed, it causes the ANDing of all selection options.</p>
<p>Items of the same selection set - command names, file descriptors, network addresses, process identifiers, user identifiers, zone names, security contexts - are joined in a single ORed set and applied before the result participates in ANDing. Thus, for example, specifying -i@aaa.bbb, -i@ccc.ddd, -a, and -ufff,ggg will select the listing of files that belong to either login ''fff'' OR ''ggg'' AND have network connections to either host aaa.bbb OR ccc.ddd.</p>
<p>Options can be grouped together following a single prefix -- e.g., the option set ''-a -b -C'' can be stated as -abC. However, since values are optional following +|-f, -F, -g, -i, +|-L, -o, +|-r, -S, -T, -x and -z. when you have no values for them be careful that the following character isn't ambiguous. For example, -Fn might represent the -F and -n options, or it might represent the n field identifier character following the -F option. When ambiguity is possible, start a new option with a '-' character - e.g., ''-F -n''. If the next option is a file name, follow the possibly ambiguous option with ''--'' - e.g., ''-F -- name''.</p>
<p>Either the '+' or the '-' prefix can be applied to a group of options. Options that don't take on separate meanings for each prefix - e.g., -i - can be grouped under either prefix. Thus, for example, ''+M -i'' can be stated as ''+Mi'' and the group means the same as the separate options. Be careful of prefix grouping when one or more options in the group does take on separate meanings under different prefixes - e.g., +|-M; ''-iM'' is not the same request as ''-i +M''. When in doubt, use separate options with appropriate prefixes. </p>
</blockquote>
<p><b>Security</b></p>
<blockquote>
<p>Lsof has three features that can cause security concerns. First, its default compilation mode allows anyone to list all open files with it. Second, by default it creates a user-readable and user-writable device cache file in the home directory of the real user ID that executes lsof. (The list-all-open-files and device cache features can be disabled when lsof is compiled.) Third, its -k and -m options name alternate kernel name list or memory files.</p>
<p>Restricting the listing of all open files is controlled by the compile-time HASSECURITY and HASNOSOCKSECURITY options. When HASSECURITY is defined, lsof will allow only the root user to list all open files. The non-root user can list only open files of processes with the same user IDentification number as the real user ID number of the lsof process (the one that its user logged on with).</p>
<p>However, if HASSECURITY and HASNOSOCKSECURITY are both defined, anyone can list open socket files, provided they are selected with the -i option.</p>
<p>When HASSECURITY is not defined, anyone can list all open files.</p>
<p>Help output, presented in response to the -h or -? option, gives the status of the HASSECURITY and HASNOSOCKSECURITY definitions.</p>
<p>See the Security section of the 00README file of the lsof distribution for information on building lsof with the HASSECURITY and HASNOSOCKSECURITY options enabled.</p>
<p>Creation and use of a user-readable and user-writable device cache file is controlled by the compile-time HASDCACHE option. See the DEVICE CACHE FILE section and the sections that follow it for details on how its path is formed. For security considerations it is important to note that in the default lsof distribution, if the real user ID under which lsof is executed is root, the device cache file will be written in root's home directory - e.g., / or /root. When HASDCACHE is not defined, lsof does not write or attempt to read a device cache file.</p>
<p>When HASDCACHE is defined, the lsof help output, presented in response to the -h, -D?, or -? options, will provide device cache file handling information. When HASDCACHE is not defined, the -h or -? output will have no -D option description.</p>
<p>Before you decide to disable the device cache file feature - enabling it improves the performance of lsof by reducing the startup overhead of examining all the nodes in /dev (or /devices) - read the discussion of it in the 00DCACHE file of the lsof distribution and the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a></p>
<p>WHEN IN DOUBT, YOU CAN TEMPORARILY DISABLE THE USE OF THE DEVICE CACHE FILE WITH THE -Di OPTION.</p>
<p>When lsof user declares alternate kernel name list or memory files with the -k and -m options, lsof checks the user's authority to read them with access(2). This is intended to prevent whatever special power lsof's modes might confer on it from letting it read files not normally accessible via the authority of the real user ID. </p>
</blockquote>
<p><b>Output</b></p>
<blockquote>
<p>This section describes the information lsof lists for each open file. See the OUTPUT FOR OTHER PROGRAMS section for additional information on output that can be processed by another program.</p>
<p>Lsof only outputs printable (declared so by isprint(3)) 8 bit characters. Non-printable characters are printed in one of three forms: the C ''\[bfrnt]'' form; the control character '^' form (e.g., ''^@''); or hexadecimal leading ''\x'' form (e.g., ''\xab''). Space is non-printable in the COMMAND column (''\x20'') and printable elsewhere.</p>
<p>For some dialects - if HASSETLOCALE is defined in the dialect's machine.h header file - lsof will print the extended 8 bit characters of a language locale. The lsof process must be supplied a language locale environment variable (e.g., LANG) whose value represents a known language locale in which the extended characters are considered printable by isprint(3). Otherwise lsof considers the extended characters non-printable and prints them according to its rules for non-printable characters, stated above. Consult your dialect's setlocale(3) man page for the names of other environment variables that can be used in place of LANG - e.g., LC_ALL, LC_CTYPE, etc.</p>
<p>Lsof's language locale support for a dialect also covers wide characters - e.g., UTF-8 - when HASSETLOCALE and HASWIDECHAR are defined in the dialect's machine.h header file, and when a suitable language locale has been defined in the appropriate environment variable for the lsof process. Wide characters are printable under those conditions if iswprint(3) reports them to be. If HASSETLOCALE, HASWIDECHAR and a suitable language locale aren't defined, or if iswprint(3) reports wide characters that aren't printable, lsof considers the wide characters non-printable and prints each of their 8 bits according to its rules for non-printable characters, stated above.</p>
<p>Consult the answers to the "Language locale support" questions in the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for more information.</p>
<p>Lsof dynamically sizes the output columns each time it runs, guaranteeing that each column is a minimum size. It also guarantees that each column is separated from its predecessor by at least one space.</p>
</blockquote>
<p>COMMAND</p>
<blockquote>
<p>contains the first nine characters of the name of the UNIX command associated with the process. If a non-zero w value is specified to the +cw option, the column contains the first w characters of the name of the UNIX command associated with the process up to the limit of characters supplied to lsof by the UNIX dialect. (See the description of the +c w command or the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a>) <br>
If<br>
w is less than the length of the column title, ''COMMAND'', it will be raised to that length. <br>
If a zero<br>
w value is specified to the +c w option, the column contains all the characters of the name of the UNIX command associated with the process. <br>
All command name characters maintained by the kernel in its structures<br>
are displayed in field output when the command name descriptor ('c') is specified. See the OUTPUT FOR OTHER COMMANDS section for information on selecting field output and the associated command name descriptor. <br>
<br>
PID<br>
is the Process IDentification number of the process. <br>
ZONE<br>
is the Solaris 10 and higher zone name. This column must be selected with the -z option. <br>
SECURITY-CONTEXT<br>
is the SELinux security context. This column must be selected with the -Z option. <br>
PPID<br>
is the Parent Process IDentification number of the process. It is only displayed when the -R option has been specified. <br>
PGID<br>
is the process group IDentification number associated with the process. It is only displayed when the -g option has been specified. <br>
USER<br>
is the user ID number or login name of the user to whom the process belongs, usually the same as reported by ps(1). However, on Linux USER is the user ID number or login that owns the directory in /proc where lsof finds information about the process. Usually that is the same value reported by ps(1), but can differ when the process has changed its effective user ID. (See the -l option description for information on when a user ID number or login name is displayed.) <br>
FD<br>
is the File Descriptor number of the file or:<br>
cwd current working directory; Lnn library references (AIX); err FD information error (see NAME column); jld jail directory (FreeBSD); ltx shared library text (code and data); Mxx hex memory-mapped type number xx. m86 DOS Merge mapped file; mem memory-mapped file; mmap memory-mapped device; pd parent directory; rtd root directory; tr kernel trace file (OpenBSD); txt program text (code and data); v86 VP/ix mapped file;<br>
FD is followed by one of these characters, describing the <b>mode</b> under which the file is open:</p>
<p class="code">r for read access;<br>
w for write access;<br>
u for read and write access;<br>
space if mode unknown and no lock
character follows;<br>
'-' if mode unknown and lock character follows</p>
</blockquote>
<p>The mode character is followed by one of these <b>lock</b> characters, describing
the type of lock applied to the file:<br>
N for a Solaris NFS lock of unknown type;</p>
<blockquote>
<p class="code">r for read lock on part of the file;<br> 
R for a read lock on the entire file;<br> 
w for a write lock on part of the file;<br> 
W for a write lock on the entire file;<br> 
u for a read and write lock of any length;<br> 
U for a lock of unknown type;<br> 
x for an SCO OpenServer Xenix lock on part
of the file;<br> 
X for an SCO OpenServer Xenix lock on the
entire file;<br> 
space if there is no lock.</p>
<p><br>
See the
LOCKS section for more information on the lock information character. <br>
The FD column contents constitutes a single field for parsing in
post-processing scripts. <br>
<br>
TYPE
is the type of the node associated with the file - e.g., GDIR, GREG, VDIR, VREG, etc. <br>
or ''IPv4'' for an IPv4 socket;<br>
or ''IPv6'' for an open IPv6 network file - even if its address is<br>
IPv4, mapped in an IPv6 address; <br>
or ''ax25'' for a Linux AX.25 socket;<br>
or ''inet'' for an Internet domain socket;<br>
or ''sock'' for a socket of unknown domain;<br>
or ''unix'' for a UNIX domain socket;<br>
or ''BLK'' for a block special file;<br>
or ''CHR'' for a character special file;<br>
or ''DEL'' for a Linux map file that has been deleted;<br>
or ''DIR'' for a directory;<br>
or ''DOOR'' for a VDOOR file;<br>
or ''FIFO'' for a FIFO special file;<br>
or ''KQUEUE'' for a BSD style kernel event queue file;<br>
or ''LINK'' for a symbolic link file;<br>
or ''MPB'' for a multiplexed block file;<br>
or ''MPC'' for a multiplexed character file;<br>
or ''NOFD'' for a Linux /proc/&lt;PID&gt;/fd directory that can't be opened --<br>
the directory path appears in the NAME column, followed by an error message; <br>
or ''PAS'' for a<br>
/proc/as file; <br>
or ''PAXV'' for a<br>
/proc/auxv file; <br>
or ''PXMP'' for a<br>
/proc/xmap file; <br>
or ''REG'' for a regular file;<br>
or ''SMT'' for a shared memory transport file;<br>
or ''STSO'' for a stream socket;<br>
or ''UNNM'' for an unnamed type file;<br>
<br>
or the four type number octets if the corresponding name isn't known.<br>
FILE-ADDR<br>
contains the kernel file structure address when f has been specified to +f; <br>
FCT<br>
contains the file reference count from the kernel file structure when c has been specified to +f; <br>
FILE-FLAG<br>
when g or G has been specified to +f, this field contains the contents of the f_flag[s] member of the kernel file structure and the kernel's per-process open file flags (if available); 'G' causes them to be displayed in hexadecimal; 'g', as short-hand names; two lists can be displayed with entries separated by commas, the lists separated by a semicolon (';'); the first list can contain short-hand names for f_flag[s] values from the following table:<br>
</p>
<p>AIO asynchronous I/O (e.g., FAIO) <br>
AP append <br>
ASYN asynchronous I/O (e.g., FASYNC) <br>
BAS block, test, and set in use <br>
BKIU block if in use BL use block offsets <br>
BSK block seek <br>
CA copy avoid <br>
CIO concurrent I/O <br>
CLON clone <br>
CLRD <br>
CL read <br>
CR create <br>
DF defer <br>
DFI defer IND <br>
DFLU data flush <br>
DIR direct <br>
DLY delay <br>
DOCL do clone <br>
DSYN data-only integrity <br>
EVO event only EX open for exec <br>
EXCL exclusive open <br>
FSYN synchronous writes <br>
GCDF defer during unp_gc() (AIX) <br>
GCMK mark during unp_gc() (AIX) <br>
GTTY accessed via /dev/tty <br>
HUP HUP in progress <br>
KERN kernel <br>
KIOC kernel-issued ioctl <br>
LCK has lock LG large file <br>
MBLK stream message block <br>
MK mark <br>
MNT mount <br>
MSYN multiplex synchronization <br>
NB non-blocking I/O <br>
NBDR no BDRM check <br>
NBIO SYSV non-blocking I/O NBF n-buffering in effect <br>
NC no cache <br>
ND no delay <br>
NDSY no data synchronization <br>
NET network <br>
NMFS NM file system <br>
NOTO disable background stop <br>
NSH no share NTTY no controlling TTY <br>
OLRM OLR mirror <br>
PAIO POSIX asynchronous I/O <br>
PP POSIX pipe R read RC file and record locking cache <br>
REV revoked <br>
RSH shared read <br>
RSYN read synchronization <br>
SL shared lock <br>
SNAP cooked snapshot <br>
SOCK socket <br>
SQSH Sequent shared set on open <br>
SQSV Sequent <br>
SVM set on open <br>
SQR Sequent set repair on open <br>
SQS1 Sequent full shared open <br>
SQS2 Sequent partial shared open <br>
STPI stop I/O <br>
SWR synchronous read <br>
SYN file integrity while writing <br>
TCPM avoid TCP collision <br>
TR truncate W write <br>
WKUP parallel I/O synchronization <br>
WTG parallel I/O synchronization <br>
VH vhangup pending <br>
VTXT virtual text <br>
XL exclusive lock</p>
<p> This list of names was derived from F* #define's in dialect header files <span class="code">&lt;fcntl.h&gt;, &lt;linux&lt;/fs.h&gt;, &lt;sys/fcntl.c&gt;, &lt;sys/fcntlcom.h&gt;</span>, and <span class="code">&lt;sys/file.h&gt;</span>; <br>
see the lsof.h header file for a list showing the correspondence between the above short-hand names and the header file definitions; <br>
the second list (after the semicolon) can contain short-hand names
for kernel per-process open file flags from this table:</p>
<p>ALLC allocated BR the file has been read BHUP activity stopped by SIGHUP BW the file has been written CLSG closing CX close-on-exec (see fcntl(F_SETFD)) LCK lock was applied MP memory-mapped OPIP open pending - in progress RSVW reserved wait SHMT UF_FSHMAT set (AIX) USE in use (multi-threaded)NODE-ID<br>
(or INODE-ADDR for some dialects) contains a unique identifier for the file node (usually the kernel vnode or inode address, but also occasionally a concatenation of device and node number) when n has been specified to +f; <br>
<br>
DEVICE<br>
contains the device numbers, separated by commas, for a character special, block special, regular, directory or NFS file; <br>
or ''memory'' for a memory file system node under Tru64 UNIX;<br>
or the address of the private data area of a Solaris socket<br>
stream; <br>
or a kernel reference address that identifies the file<br>
(The kernel reference address can be used for FIFO's, for example.); <br>
or<br>
the base address or device name of a Linux AX.25 socket device. <br>
Usually only the lower thirty two bits of Tru64 UNIX kernel addresses<br>
are displayed. <br>
<br>
SIZE, SIZE/OFF, or OFFSET<br>
is the size of the file or the file offset in bytes. A value is displayed in this column only if it is available. Lsof displays whatever value - size or offset - is appropriate for the type of the file and the version of lsof. <br>
On some UNIX dialects
lsof can't obtain accurate or consistent file offset information from its kernel data sources, sometimes just for particular kinds of files (e.g., socket files.) In other cases, files don't have true sizes - e.g., sockets, FIFOs, pipes - so lsof displays for their sizes the content amounts it finds in their kernel buffer descriptors (e.g., socket buffer size counts or TCP/IP window sizes.) Consult the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for more information. <br>
The file size is displayed in decimal;<br>
the offset is normally displayed in decimal with a leading ''0t'' if it contains 8 digits or less; in hexadecimal with a leading ''0x'' if it is longer than 8 digits. (Consult the -o o option description for information on when 8 might default to some other value.) <br>
Thus the leading ''0t'' and ''0x'' identify an offset when the column<br>
may contain both a size and an offset (i.e., its title is SIZE/OFF). <br>
If the
-o option is specified, lsof always displays the file offset (or nothing if no offset is available) and labels the column OFFSET. The offset always begins with ''0t'' or ''0x'' as described above. <br>
The lsof user can control the switch from ''0t'' to ''0x'' with the -o o option. Consult its description for more information. <br>
If the -s option is specified, lsof always displays the file size (or nothing if no size is available) and labels the column SIZE. The -o and -s options are mutually exclusive; they can't both be specified. <br>
For files that don't have a fixed size - e.g., don't reside<br>
on a disk device - lsof will display appropriate information about the current size or position of the file if it is available in the kernel structures that define the file. <br>
<br>
NLINK<br>
contains the file link count when +L has been specified; <br>
<br>
NODE<br>
is the node number of a local file; <br>
or the inode number of an NFS file in the server host;<br>
or the Internet protocol type - e. g, ''TCP'';<br>
or ''STR'' for a stream;<br>
or ''CCITT'' for an HP-UX x.25 socket;<br>
or the IRQ or inode number of a Linux AX.25 socket device.<br>
<br>
NAME<br>
is the name of the mount point and file system on which the file resides; <br>
or the name of a file specified in the<br>
names option (after any symbolic links have been resolved); <br>
or the name of a character special or block special device;<br>
or the local and remote Internet addresses of a network file;<br>
the local host name or IP number is followed by a colon (':'), the port, ''-&gt;'', and the two-part remote address; IP addresses can be reported as numbers or names, depending on the +|-M, -n, and -P options; colon-separated IPv6 numbers are enclosed in square brackets; IPv4 INADDR_ANY and IPv6 IN6_IS_ADDR_UNSPECIFIED addresses, and zero port numbers are represented by an asterisk ('*'); a UDP destination address can be followed by the amount of time elapsed since the last packet was sent to the destination; TCP and UDP remote addresses can be followed by TCP/TPI information in parentheses - state (e.g., ''(ESTABLISHED)'', ''(Unbound)''), queue sizes, and window sizes (not all dialects) - in a fashion similar to what netstat(1) reports; see the -T option description or the description of the TCP/TPI field in OUTPUT FOR OTHER PROGRAMS for more information on state, queue size, and window size; <br>
or the address or name of a UNIX domain socket, possibly including<br>
a stream clone device name, a file system object's path name, local and foreign kernel addresses, socket pair information, and a bound vnode address; <br>
or the local and remote mount point names of an NFS file;<br>
or ''STR'', followed by the stream name;<br>
or a stream character device name, followed by ''-&gt;'' and the stream name<br>
or a list of stream module names, separated by ''-&gt;''; <br>
or ''STR:'' followed by the SCO OpenServer stream device and module<br>
names, separated by ''-&gt;''; <br>
or system directory name, '' -- '', and as many components of the path<br>
name as lsof can find in the kernel's name cache for selected dialects (See the KERNEL NAME CACHE section for more information.); <br>
or ''PIPE-&gt;'', followed by a Solaris kernel pipe destination address;<br>
or ''COMMON:'', followed by the vnode device information structure's<br>
device name, for a Solaris common vnode; <br>
or the address family, followed by a slash ('/'), followed by fourteen<br>
comma-separated bytes of a non-Internet raw socket address; <br>
or the HP-UX x.25 local address, followed by the virtual connection<br>
number (if any), followed by the remote address (if any); <br>
or ''(dead)'' for disassociated Tru64 UNIX files - typically terminal files<br>
that have been flagged with the TIOCNOTTY ioctl and closed by daemons; <br>
or ''rd=&lt;offset&gt;'' and ''wr=&lt;offset&gt;'' for the values of the<br>
read and write offsets of a FIFO; <br>
or ''clone n:/dev/event'' for SCO OpenServer file clones of the<br>
/dev/event device, where n is the minor device number of the file; <br>
or ''(socketpair: n)'' for a Solaris 2.6, 8, 9 or 10
UNIX domain socket, created by the socketpair(3N) network function; <br>
or ''no PCB'' for socket files that do not have a protocol block<br>
associated with them, optionally followed by '', CANTSENDMORE'' if sending on the socket has been disabled, or '', CANTRCVMORE'' if receiving on the socket has been disabled (e.g., by the shutdown(2) function); <br>
or the local and remote addresses of a Linux IPX socket file<br>
in the form &lt;net&gt;:[&lt;node&gt;:]&lt;port&gt;, followed in parentheses by the transmit and receive queue sizes, and the connection state; <br>
or ''dgram'' or ''stream'' for the type UnixWare 7.1.1 and above in-kernel<br>
UNIX domain sockets, followed by a colon (':') and the local path name when available, followed by ''-&gt;'' and the remote path name or kernel socket address in hexadecimal when available.</p>
</blockquote>
<p>For dialects that support a ''namefs'' file system, allowing one file to be attached to another with fattach(3C), lsof will add ''(FA:&lt;address1&gt;&lt;direction&gt;&lt;address2&gt;)'' to the NAME column. &lt;address1&gt; and &lt;address2&gt; are hexadecimal vnode addresses. &lt;direction&gt; will be ''&lt;-'' if &lt;address2&gt; has been fattach'ed to this vnode whose address is &lt;address1&gt;; and ''-&gt;'' if &lt;address1&gt;, the vnode address of this vnode, has been fattach'ed to &lt;address2&gt;. &lt;address1&gt; can be omitted if it already appears in the DEVICE column.</p>
<p>Lsof might add two parenthetical notes to the NAME column for open Solaris 10 files: ''(?)'' if lsof considers the path name of questionable accuracy; and ''(deleted)'' if the -X option has been specified and lsof detects the open file's path name has been deleted. Consult the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for more information on these NAME column additions.</p>
<h2>Locks</h2>
<blockquote>
<p> Lsof can't adequately report the wide variety of UNIX dialect file locks in a single character. What it reports in a single character is a compromise between the information it finds in the kernel and the limitations of the reporting format.</p>
<p>Moreover, when a process holds several byte level locks on a file, lsof only reports the status of the first lock it encounters. If it is a byte level lock, then the lock character will be reported in lower case - i.e., 'r', 'w', or 'x' - rather than the upper case equivalent reported for a full file lock.</p>
<p>Generally lsof can only report on locks held by local processes on local files. When a local process sets a lock on a remotely mounted (e.g., NFS) file, the remote server host usually records the lock state. One exception is Solaris - at some patch levels of 2.3, and in all versions above 2.4, the Solaris kernel records information on remote locks in local structures.</p>
<p>Lsof has trouble reporting locks for some UNIX dialects. Consult the BUGS section of this manual page or the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for more information.</p>
</blockquote>
<h2>Output for Other Programs</h2>
<blockquote>
<p> When the -F option is specified, lsof produces output that is suitable for processing by another program - e.g, an awk or Perl script, or a C program.</p>
<p>Each unit of information is output in a field that is identified with a leading character and terminated by a NL (012) (or a NUL (000) if the 0 (zero) field identifier character is specified.) The data of the field follows immediately after the field identification character and extends to the field terminator.</p>
<p>It is possible to think of field output as process and file sets. A process set begins with a field whose identifier is 'p' (for process IDentifier (PID)). It extends to the beginning of the next PID field or the beginning of the first file set of the process, whichever comes first. Included in the process set are fields that identify the command, the process group IDentification (PGID) number, and the user ID (UID) number or login name.</p>
<p>A file set begins with a field whose identifier is 'f' (for file descriptor). It is followed by lines that describe the file's access mode, lock state, type, device, size, offset, inode, protocol, name and stream module names. It extends to the beginning of the next file or process set, whichever comes first.</p>
<p>When the NUL (000) field terminator has been selected with the 0 (zero) field identifier character, lsof ends each process and file set with a NL (012) character.</p>
<p>Lsof always produces one field, the PID ('p') field. All other fields can be declared optionally in the field identifier character list that follows the -F option. When a field selection character identifies an item lsof does not normally list - e.g., PPID, selected with -R - specification of the field character - e.g., ''-FR'' - also selects the listing of the item.</p>
<p>It is entirely possible to select a set of fields that cannot easily be parsed - e.g., if the field descriptor field is not selected, it can be difficult to identify file sets. To help you avoid this difficulty, lsof supports the -F option; it selects the output of all fields with NL terminators (the -F0 option pair selects the output of all fields with NUL terminators). For compatibility reasons neither -F nor -F0 select the raw device field.</p>
<p>These are the fields that lsof will produce. The single character listed first is the field identifier.</p>
<p>a file access mode<br>
c process command name (all characters from proc or<br>
user structure)<br>
C file structure share count<br>
d file's device character code<br>
D file's major/minor device number (0x&lt;hexadecimal&gt;)<br>
f file descriptor<br>
F file structure address (0x&lt;hexadecimal&gt;)<br>
G file flaGs (0x&lt;hexadecimal&gt;; names if +fg follows)<br>
i file's inode number<br>
k link count<br>
l file's lock status<br>
L process login name<br>
m marker between repeated output<br>
n file name, comment, Internet address<br>
N node identifier (ox&lt;hexadecimal&gt;<br>
o file's offset (decimal)<br>
p process ID (always selected)<br>
g process group ID<br>
P protocol name<br>
r raw device number (0x&lt;hexadecimal&gt;)<br>
R parent process ID<br>
s file's size (decimal)<br>
S file's stream identification<br>
t file's type<br>
T TCP/TPI information, identified by prefixes (the<br>
'=' is part of the prefix):<br>
QR=&lt;read queue size&gt;<br>
QS=&lt;send queue size&gt;<br>
SO=&lt;socket options and values&gt; (not all dialects)<br>
SS=&lt;socket states&gt; (not all dialects)<br>
ST=&lt;connection state&gt;<br>
TF=&lt;TCP flags and values&gt; (not all dialects)<br>
WR=&lt;window read size&gt; (not all dialects)<br>
WW=&lt;window write size&gt; (not all dialects)<br>
(TCP/TPI information isn't reported for all supported<br>
UNIX dialects. The -h or -? help output for the<br>
-T option will show what TCP/TPI reporting can be<br>
requested.)<br>
u process user ID<br>
z Solaris 10 and higher zone name<br>
0 use NUL field terminator character in place of NL<br>
1-9 dialect-specific field identifiers (The output<br>
of -F? identifies the information to be found<br>
in dialect-specific fields.)</p>
<p>You can get on-line help information on these characters and their descriptions by specifying the -F? option pair. (Escape the '?' character as your shell requires.) Additional information on field content can be found in the OUTPUT section.</p>
<p>As an example, ''-F pcfn'' will select the process ID ('p'), command name ('c'), file descriptor ('f') and file name ('n') fields with an NL field terminator character; ''-F pcfn0'' selects the same output with a NUL (000) field terminator character.</p>
<p>Lsof doesn't produce all fields for every process or file set, only those that are available. Some fields are mutually exclusive: file device characters and file major/minor device numbers; file inode number and protocol name; file name and stream identification; file size and offset. One or the other member of these mutually exclusive sets will appear in field output, but not both.</p>
<p>Normally lsof ends each field with a NL (012) character. The 0 (zero) field identifier character can be specified to change the field terminator character to a NUL (000). A NUL terminator can be easier to process with xargs (1), for example, or with programs whose quoting mechanisms can not easily cope with the range of characters in the field output. When the NUL field terminator is in use, lsof ends each process and file set with a NL (012).</p>
<p>Three aids to producing programs that can process lsof field output are included in the lsof distribution. The first is a C header file, lsof_fields.h, that contains symbols for the field identification characters, indexes for storing them in a table, and explanation strings that can be compiled into programs. Lsof uses this header file.</p>
<p>The second aid is a set of sample scripts that process field output, written in awk, Perl 4, and Perl 5. They're located in the scripts subdirectory of the lsof distribution.</p>
<p>The third aid is the C library used for the lsof test suite. The test suite is written in C and uses field output to validate the correct operation of lsof. The library can be found in the tests/LTlib.c file of the lsof distribution. The library uses the first aid, the lsof_fields.h header file.</p>
</blockquote>
<h2> Blocks and Timeouts</h2>
<blockquote>
<p> Lsof can be blocked by some kernel functions that it uses - lstat(2), readlink(2), and stat(2). These functions are stalled in the kernel, for example, when the hosts where mounted NFS file systems reside become inaccessible.</p>
<p>Lsof attempts to break these blocks with timers and child processes, but the techniques are not wholly reliable. When lsof does manage to break a block, it will report the break with an error message. The messages can be suppressed with the -t and -w options.</p>
<p>The default timeout value can be displayed with the -h or -? option, and it can be changed with the -S [t] option. The minimum for t is two seconds, but you should avoid small values, since slow system responsiveness can cause short timeouts to expire unexpectedly and perhaps stop lsof before it can produce any output.</p>
<p>When lsof has to break a block during its access of mounted file system information, it normally continues, although with less information available to display about open files.</p>
<p>Lsof can also be directed to avoid the protection of timers and child processes when using the kernel functions that might block by specifying the -O option. While this will allow lsof to start up with less overhead, it exposes lsof completely to the kernel situations that might block it. Use this option cautiously.<br>
Avoiding Kernel Blocks</p>
<p>You can use the -b option to tell lsof to avoid using kernel functions that would block. Some cautions apply.</p>
<p>First, using this option usually requires that your system supply alternate device numbers in place of the device numbers that lsof would normally obtain with the lstat(2) and stat(2) kernel functions. See the ALTERNATE DEVICE NUMBERS section for more information on alternate device numbers.</p>
<p>Second, you can't specify names for lsof to locate unless they're file system names. This is because lsof needs to know the device and inode numbers of files listed with names in the lsof options, and the -b option prevents lsof from obtaining them. Moreover, since lsof only has device numbers for the file systems that have alternates, its ability to locate files on file systems depends completely on the availability and accuracy of the alternates. If no alternates are available, or if they're incorrect, lsof won't be able to locate files on the named file systems.</p>
<p>Third, if the names of your file system directories that lsof obtains from your system's mount table are symbolic links, lsof won't be able to resolve the links. This is because the -b option causes lsof to avoid the kernel readlink(2) function it uses to resolve symbolic links.</p>
<p>Finally, using the -b option causes lsof to issue warning messages when it needs to use the kernel functions that the -b option directs it to avoid. You can suppress these messages by specifying the -w option, but if you do, you won't see the alternate device numbers reported in the warning messages.</p>
</blockquote>
<h2> Alternate Device Numbers</h2>
<blockquote>
<p>On some dialects, when lsof has to break a block because it can't get information about a mounted file system via the lstat(2) and stat(2) kernel functions, or because you specified the -b option, lsof can obtain some of the information it needs - the device number and possibly the file system type - from the system mount table. When that is possible, lsof will report the device number it obtained. (You can suppress the report by specifying the -w option.)</p>
<p>You can assist this process if your mount table is supported with an /etc/mtab or /etc/mnttab file that contains an options field by adding a ''dev=xxxx'' field for mount points that do not have one in their options strings. Note: you must be able to edit the file - i.e., some mount tables like recent Solaris /etc/mnttab or Linux /proc/mounts are read-only and can't be modified.</p>
<p>You can also be able to supply device numbers using the +m and +m m options, provided they are supported by your dialect. Check the output of lsof's -h or -? options to see if the +m and +m m options are available.</p>
<p>The ''xxxx'' portion of the field is the hexadecimal value of the file system's device number. (Consult the st_dev field of the output of the lstat(2) and stat(2) functions for the appropriate values for your file systems.) Here's an example from a Sun Solaris 2.6 /etc/mnttab for a file system remotely mounted via NFS:</p>
<p class="code"> nfs ignore,noquota,dev=2a40001</p>
<p>There's an advantage to having ''dev=xxxx'' entries in your mount table file, especially for file systems that are mounted from remote NFS servers. When a remote server crashes and you want to identify its users by running lsof on one of its clients, lsof probably won't be able to get output from the lstat(2) and stat(2) functions for the file system. If it can obtain the file system's device number from the mount table, it will be able to display the files open on the crashed NFS server.</p>
<p>Some dialects that do not use an ASCII /etc/mtab or /etc/mnttab file for the mount table can still provide an alternative device number in their internal mount tables. This includes AIX, Apple Darwin, FreeBSD, NetBSD, OpenBSD, and Tru64 UNIX. Lsof knows how to obtain the alternative device number for these dialects and uses it when its attempt to lstat(2) or stat(2) the file system is blocked.</p>
<p>If you're not sure your dialect supplies alternate device numbers for file systems from its mount table, use this lsof incantation to see if it reports any alternate device numbers:</p>
<p class="code">lsof -b</p>
<p>Look for standard error file warning messages that begin ''assuming "dev=xxxx" from ...''.</p>
</blockquote>
<h2> Kernel Name Cache</h2>
<blockquote>
<p>Lsof is able to examine the kernel's name cache or use other kernel facilities (e.g., the ADVFS 4.x tag_to_path() function under Tru64 UNIX) on some dialects for most file system types, excluding AFS, and extract recently used path name components from it. (AFS file system path lookups don't use the kernel's name cache; some Solaris VxFS file system operations apparently don't use it, either.)</p>
<p>Lsof reports the complete paths it finds in the NAME column. If lsof can't report all components in a path, it reports in the NAME column the file system name, followed by a space, two '-' characters, another space, and the name components it has located, separated by the '/' character.</p>
<p>When lsof is run in repeat mode - i.e., with the -r option specified - the extent to which it can report path name components for the same file can vary from cycle to cycle. That's because other running processes can cause the kernel to remove entries from its name cache and replace them with others.</p>
<p>Lsof's use of the kernel name cache to identify the paths of files can lead it to report incorrect components under some circumstances. This can happen when the kernel name cache uses device and node number as a key (e.g., SCO OpenServer) and a key on a rapidly changing file system is reused. If the UNIX dialect's kernel doesn't purge the name cache entry for a file when it is unlinked, lsof can find a reference to the wrong entry in the cache. The<a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> has more information on this situation.</p>
<p>Lsof can report path name components for these dialects:</p>
<blockquote>
<p> FreeBSD<br>
HP-UX<br>
Linux<br>
NetBSD<br>
NEXTSTEP<br>
OpenBSD<br>
OPENSTEP<br>
SCO OpenServer<br>
SCO|Caldera UnixWare<br>
Solaris<br>
Tru64 UNIX</p>
</blockquote>
<p>Lsof can't report path name components for these dialects:AIX</p>
<p>If you want to know why lsof can't report path name components for some dialects, see the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a><br>
Device Cache File</p>
<p>Examining all members of the /dev (or /devices) node tree with stat(2) functions can be time consuming. What's more, the information that lsof needs - device number, inode number, and path - rarely changes.</p>
<p>Consequently, lsof normally maintains an ASCII text file of cached /dev (or /devices) information (exception: the /proc-based Linux lsof where it's not needed.) The local system administrator who builds lsof can control the way the device cache file path is formed, selecting from these options:</p>
<blockquote>
<p> Path from the -D option;<br>
Path from an environment variable;<br>
System-wide path;<br>
Personal path (the default);<br>
Personal path, modified by an environment variable.</p>
</blockquote>
<p>Consult the output of the -h, -D? , or -? help options for the current state of device cache support. The help output lists the default read-mode device cache file path that is in effect for the current invocation of lsof. The -D? option output lists the read-only and write device cache file paths, the names of any applicable environment variables, and the personal device cache path format.</p>
<p>Lsof can detect that the current device cache file has been accidentally or maliciously modified by integrity checks, including the computation and verification of a sixteen bit Cyclic Redundancy Check (CRC) sum on the file's contents. When lsof senses something wrong with the file, it issues a warning and attempts to remove the current cache file and create a new copy, but only to a path that the process can legitimately write.</p>
<p>The path from which a lsof process can attempt to read a device cache file might not be the same as the path to which it can legitimately write. Thus when lsof senses that it needs to update the device cache file, it can choose a different path for writing it from the path from which it read an incorrect or outdated version.</p>
<p>If available, the -Dr option will inhibit the writing of a new device cache file. (It's always available when specified without a path name argument.)</p>
<p>When a new device is added to the system, the device cache file might need to be recreated. Since lsof compares the mtime of the device cache file with the mtime and ctime of the /dev (or /devices) directory, it usually detects that a new device has been added; in that case lsof issues a warning message and attempts to rebuild the device cache file.</p>
<p>Whenever lsof writes a device cache file, it sets its ownership to the real UID of the executing process, and its permission modes to 0600, this restricting its reading and writing to the file's owner.<br>
Lsof Permissions that Affect Device Cache File Access</p>
<p>Two permissions of the lsof executable affect its ability to access device cache files. The permissions are set by the local system administrator when lsof is installed.</p>
<p>The first and rarer permission is setuid-root. It comes into effect when lsof is executed; its effective UID is then root, while its real (i.e., that of the logged-on user) UID is not. The lsof distribution recommends that versions for these dialects run setuid-root.</p>
<blockquote>
<p> HP-UX 11.11 and 11.23<br>
Linux</p>
</blockquote>
<p>The second and more common permission is setgid. It comes into effect when the effective group IDentification number (GID) of the lsof process is set to one that can access kernel memory devices - e.g., ''kmem'', ''sys'', or ''system''.</p>
<p>An lsof process that has setgid permission usually surrenders the permission after it has accessed the kernel memory devices. When it does that, lsof can allow more liberal device cache path formations. The lsof distribution recommends that versions for these dialects run setgid and be allowed to surrender setgid permission.</p>
<blockquote>
<p> AIX 5.[123]<br>
Apple Darwin 7.x Power Macintosh systems<br>
FreeBSD 4.x, 4.1x, 5.x and [67].x for x86-based systems<br>
FreeBSD 5.x and [67].x for Alpha, AMD64 and Sparc64-based<br>
systems<br>
HP-UX 11.00<br>
NetBSD 1.[456], 2.x and 3.x for Alpha, x86, and SPARC-based<br>
systems<br>
NEXTSTEP 3.[13] for NEXTSTEP architectures<br>
OpenBSD 2.[89] and 3.[0-9] for x86-based systems<br>
OPENSTEP 4.x<br>
SCO OpenServer Release 5.0.6 for x86-based systems<br>
SCO|Caldera UnixWare 7.1.4 for x86-based systems<br>
Solaris 2.6, 8, 9 and 10<br>
Tru64 UNIX 5.1</p>
</blockquote>
<p>(Note: lsof for AIX 5L and above needs setuid-root permission if its -X option is used.)</p>
<p>Lsof for these dialects does not support a device cache, so the permissions given to the executable don't apply to the device cache file.</p>
<blockquote>
<p> Linux</p>
</blockquote>
<p>Device Cache File Path from the -d Option</p>
<p>The -D option provides limited means for specifying the device cache file path. Its ? function will report the read-only and write device cache file paths that lsof will use.</p>
<p>When the -D b, r, and u functions are available, you can use them to request that the cache file be built in a specific location (b[path]); read but not rebuilt (r[path]); or read and rebuilt (u[path]). The b, r, and u functions are restricted under some conditions. They are restricted when the lsof process is setuid-root. The path specified with the r function is always read-only, even when it is available.</p>
<p>The b, r, and u functions are also restricted when the lsof process runs setgid and lsof doesn't surrender the setgid permission. (See the LSOF PERMISSIONS THAT AFFECT DEVICE CACHE FILE ACCESS section for a list of implementations that normally don't surrender their setgid permission.)</p>
<p>A further -D function, i (for ignore), is always available.</p>
<p>When available, the b function tells lsof to read device information from the kernel with the stat(2) function and build a device cache file at the indicated path.</p>
<p>When available, the r function tells lsof to read the device cache file, but not update it. When a path argument accompanies -Dr, it names the device cache file path. The r function is always available when it is specified without a path name argument. If lsof is not running setuid-root and surrenders its setgid permission, a path name argument can accompany the r function.</p>
<p>When available, the u function tells lsof to attempt to read and use the device cache file. If it can't read the file, or if it finds the contents of the file incorrect or outdated, it will read information from the kernel, and attempt to write an updated version of the device cache file, but only to a path it considers legitimate for the lsof process effective and real UIDs.<br>
Device Cache Path from an Environment Variable</p>
<p>Lsof's second choice for the device cache file is the contents of the LSOFDEVCACHE environment variable. It avoids this choice if the lsof process is setuid-root, or the real UID of the process is root.</p>
<p>A further restriction applies to a device cache file path taken from the LSOFDEVCACHE environment variable: lsof will not write a device cache file to the path if the lsof process doesn't surrender its setgid permission. (See the LSOF PERMISSIONS THAT AFFECT DEVICE CACHE FILE ACCESS section for information on implementations that don't surrender their setgid permission.)</p>
<p>The local system administrator can disable the use of the LSOFDEVCACHE environment variable or change its name when building lsof. Consult the output of -D? for the environment variable's name.</p>
</blockquote>
<h2> System-wide Device Cache Path</h2>
<blockquote>
<p>The local system administrator can choose to have a system-wide device cache file when building lsof. That file will generally be constructed by a special system administration procedure when the system is booted or when the contents of /dev or /devices) changes. If defined, it is lsof's third device cache file path choice.</p>
<p>You can tell that a system-wide device cache file is in effect for your local installation by examining the lsof help option output - i.e., the output from the -h or -? option.</p>
<p>Lsof will never write to the system-wide device cache file path by default. It must be explicitly named with a -D function in a root-owned procedure. Once the file has been written, the procedure must change its permission modes to 0644 (owner-read and owner-write, group-read, and other-read).<br>
Personal Device Cache Path (default)</p>
<p>The default device cache file path of the lsof distribution is one recorded in the home directory of the real UID that executes lsof. Added to the home directory is a second path component of the form .lsof_hostname.</p>
<p>This is lsof's fourth device cache file path choice, and is usually the default. If a system-wide device cache file path was defined when lsof was built, this fourth choice will be applied when lsof can't find the system-wide device cache file. This is the only time lsof uses two paths when reading the device cache file.</p>
<p>The hostname part of the second component is the base name of the executing host, as returned by gethostname(2). The base name is defined to be the characters preceding the first '.' in the gethostname(2) output, or all the gethostname(2) output if it contains no '.'.</p>
<p>The device cache file belongs to the user ID and is readable and writable by the user ID alone - i.e., its modes are 0600. Each distinct real user ID on a given host that executes lsof has a distinct device cache file. The hostname part of the path distinguishes device cache files in an NFS-mounted home directory into which device cache files are written from several different hosts.</p>
<p>The personal device cache file path formed by this method represents a device cache file that lsof will attempt to read, and will attempt to write should it not exist or should its contents be incorrect or outdated.</p>
<p>The -Dr option without a path name argument will inhibit the writing of a new device cache file.</p>
<p>The -D? option will list the format specification for constructing the personal device cache file. The conversions used in the format specification are described in the 00DCACHE file of the lsof distribution.<br>
Modified Personal Device Cache Path</p>
<p>If this option is defined by the local system administrator when lsof is built, the LSOFPERSDCPATH environment variable contents can be used to add a component of the personal device cache file path.</p>
<p>The LSOFPERSDCPATH variable contents are inserted in the path at the place marked by the local system administrator with the ''%p'' conversion in the HASPERSDC format specification of the dialect's machine.h header file. (It's placed right after the home directory in the default lsof distribution.)</p>
<p>Thus, for example, if LSOFPERSDCPATH contains ''LSOF'', the home directory is ''/Homes/abe'', the host name is ''lsof.itap.purdue.edu'', and the HASPERSDC format is the default (''%h/%p.lsof_%L''), the modified personal device cache file path is:</p>
<p class="code"> /Homes/abe/LSOF/.lsof_vic</p>
<p>The LSOFPERSDCPATH environment variable is ignored when the lsof process is setuid-root or when the real UID of the process is root.</p>
<p>Lsof will not write to a modified personal device cache file path if the lsof process doesn't surrender setgid permission. (See the LSOF PERMISSIONS THAT AFFECT DEVICE CACHE FILE ACCESS section for a list of implementations that normally don't surrender their setgid permission.)</p>
<p>If, for example, you want to create a sub-directory of personal device cache file paths by using the LSOFPERSDCPATH environment variable to name it, and lsof doesn't surrender its setgid permission, you will have to allow lsof to create device cache files at the standard personal path and move them to your subdirectory with shell commands.</p>
<p>The local system administrator may: disable this option when lsof is built; change the name of the environment variable from LSOFPERSDCPATH to something else; change the HASPERSDC format to include the personal path component in another place; or exclude the personal path component entirely. Consult the output of the -D? option for the environment variable's name and the HASPERSDC format specification.</p>
</blockquote>
<h2> Diagnostics</h2>
<blockquote>
<p> Errors are identified with messages on the standard error file.</p>
<p>Lsof returns a one (1) if any error was detected, including the failure to locate command names, file names, Internet addresses or files, login names, NFS files, PIDs, PGIDs, or UIDs it was asked to list. If the -V option is specified, lsof will indicate the search items it failed to list.</p>
<p>It returns a zero (0) if no errors were detected and if it was able to list some information about all the specified search arguments.</p>
<p>When lsof cannot open access to /dev (or /devices) or one of its subdirectories, or get information on a file in them with stat(2), it issues a warning message and continues. That lsof will issue warning messages about inaccessible files in /dev (or /devices) is indicated in its help output - requested with the -h or &gt;B -? options - with the message:</p>
<p> Inaccessible /dev warnings are enabled.</p>
<p>The warning message can be suppressed with the -w option. It can also have been suppressed by the system administrator when lsof was compiled by the setting of the WARNDEVACCESS definition. In this case, the output from the help options will include the message:</p>
<p> Inaccessible /dev warnings are disabled.</p>
<p>Inaccessible device warning messages usually disappear after lsof has created a working device cache file.</p>
</blockquote>
<p><b>Examples</b><br>
</p>
<p>List all open files, if you need to filter the output, pipe this into <a href="grep.html">grep</a>:</p>
<p class="code">$ lsof</p>
<p>Show who is using a file, list all the processes that are using a file, or several files:<span class="code"><br>
$ lsof /path/to/file1</span><br>
<span class="code">$ lsof /path/to/file1 /path/to/file2</span></p>
<p>To list all open files on a device:<br>
<span class="code">$ lsof /dev/hd4</span></p>
<p>List all open files by a <a href="#user">user</a>, or users: </p>
<p class="code">$ lsof -u ashley<br>
$ lsof -u ashley, pete<br>
$ lsof -u ashley -u pete</p>
<p>Options can be combined, the default is to OR between options unless you also specify <span class="code">-a</span> which will AND the options.<br>
List all open files for login name ''ashley'', or user ID 6464, or process 123, or process 456:</p>
<p class="code">$ lsof -p 123,456 -u 6464,ashley</p>
<p>To list all open  files whose PID is 1234 AND  are in use via the  IPv4 network:</p>
<p class="code">$ lsof -i 4 -a -p 1234</p>
<p>List only open IPv6 network files:</p>
<p class="code">$ lsof -i 6</p>
<p>List all <a href="#network">network</a> connections, this can be useful to spot processes or websites that are constantly dialling home:</p>
<p class="code">$ lsof -i</p>
<p>Find the  files opened by a program/process whose <a href="#command">command</a> name <b>begins with</b> 'apache'. </p>
<p class="code">$ lsof -c apache</p>
<p>List the  files opened by all users except root. The caret here ^ specifies NOT:</p>
<p class="code">$ lsof -u ^root</p>
<p>List the processes that are using a given port:</p>
<p class="code">$ lsof -i :80</p>
<p>List all files using any protocol on ports 513, 514, or 515 of host ss64.com:</p>
<p class="code">$ lsof -i @ss64.com:513-515</p>
<p>To list all files using any protocol on any port of mace.cc.purdue.edu (cc.purdue.edu is the default domain), use:</p>
<p class="code">$ lsof -i @mace</p>
<p> lsof <a href="#repeat">repeat mode</a>, add <span class="code">-r</span> and a number in seconds to any lsof command to make it repeat:</p>
<p class="code">$ lsof -i :80 -r 2</p>
<p>Lists memory-mapped files with the special value <b>mem</b>: </p>
<p class="code">$ lsof -d mem </p>
<p>List programs loaded in memory and executing with the special value <b>txt</b>: </p>
<p class="code">$ lsof -d txt</p>
<p>To send a SIGHUP to the processes that have /u/abe/bar open, use:</p>
<p class="code">$ kill -HUP 'lsof -t /u/abe/bar'</p>
<p>To find any open file, including an open UNIX domain socket file, with the name /dev/log, use:</p>
<p class="code">$ lsof /dev/log</p>
<p>To find processes with open files on the NFS file system named /nfs/mount/point whose server is inaccessible, and presuming your mount table supplies the device number for /nfs/mount/point, use:</p>
<p class="code">$ lsof -b /nfs/mount/point</p>
<p>To do the preceding search with warning messages suppressed, use:</p>
<p class="code">$ lsof -bw /nfs/mount/point</p>
<p>To ignore the device cache file, use:</p>
<p class="code">$ lsof -Di</p>
<p>To obtain PID and command name field output for each process, file descriptor, file device number, and file inode number for each file of each process, use:</p>
<p class="code">$ lsof -FpcfDi</p>
<p>To list the files at descriptors 1 and 3 of every process running the lsof command for login ID ''abe'' every 10 seconds, use:</p>
<p class="code">$ lsof -c lsof -a -d 1 -d 3 -u abe -r10</p>
<p>To list the current working directory of processes running a command that is exactly four characters long and has an 'o' or 'O' in character three, use this regular expression form of the -c c option:</p>
<p class="code">$ lsof -c /^..o.$/i -a -d cwd</p>
<p>To find an IP version 4 socket file by its associated numeric dot-form address, use:</p>
<p class="code">$ lsof -i@128.210.15.17</p>
<p>To find an IP version 6 socket file (when the UNIX dialect supports IPv6) by its associated numeric colon-form address, use:</p>
<p class="code">$ lsof -i@[0:1:2:3:4:5:6:7]</p>
<p>To find an IP version 6 socket file (when the UNIX dialect supports IPv6) by an associated numeric colon-form address that has a run of zeroes in it - e.g., the loop-back address - use:</p>
<p class="code">$ lsof -i@[::1]</p>
<p>For a more extensive set of examples, see the 00QUICKSTART file of the lsof distribution.</p>
<h2>Bugs</h2>
<blockquote>
<p> Since lsof reads kernel memory in its search for open files, rapid changes in kernel memory can produce unpredictable results.</p>
<p>When a file has multiple record locks, the lock status character (following the file descriptor) is derived from a test of the first lock structure, not from any combination of the individual record locks that might be described by multiple lock structures.</p>
<p>Lsof can't search for files with restrictive access permissions by name unless it is installed with root set-UID permission. Otherwise it is limited to searching for files to which its user or its set-GID group (if any) has access permission.</p>
<p>The display of the destination address of a raw socket (e.g., for ping) depends on the UNIX operating system. Some dialects store the destination address in the raw socket's protocol control block, some do not.</p>
<p>Lsof can't always represent Solaris device numbers in the same way that <a href="ls.html">ls</a>(1) does. For example, the major and minor device numbers that the lstat(2) and stat(2) functions report for the directory on which CD-ROM files are mounted (typically /cdrom) are not the same as the ones that it reports for the device on which CD-ROM files are mounted (typically /dev/sr0). (Lsof reports the directory numbers.)</p>
<p>The support for /proc file systems is available only for BSD and Tru64 UNIX dialects, Linux, and dialects derived from SYSV R4 - e.g., FreeBSD, NetBSD, OpenBSD, Solaris, UnixWare.</p>
<p>Some /proc file items - device number, inode number, and file size - are unavailable in some dialects. Searching for files in a /proc file system can require that the full path name be specified.</p>
<p>No text (txt) file descriptors are displayed for Linux processes. All entries for files other than the current working directory, the root directory, and numerical file descriptors are labeled mem descriptors.</p>
<p>Lsof can't search for Tru64 UNIX named pipes by name, because their kernel implementation of lstat(2) returns an improper device number for a named pipe.</p>
<p>Lsof can't report fully or correctly on HP-UX 9.01, 10.20, and 11.00 locks because of insufficient access to kernel data or errors in the kernel data. See the <a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ</a> for details.</p>
<p>The AIX SMT file type is a fabrication. It's made up for file structures whose type (15) isn't defined in the AIX /usr/include/sys/file.h header file. One way to create such file structures is to run X clients with the DISPLAY variable set to '':0.0''.</p>
<p>The +|-f[cfgGn] option is not supported under /proc-based Linux lsof, because it doesn't read kernel structures from kernel memory.</p>
</blockquote>
<h2>Environment variables.</h2>
<blockquote>
<p>LANG 
defines a language locale. See setlocale(3) for the names of other variables that can be used in place of LANG - e.g., LC_ALL, LC_TYPE, etc. <br>
LSOFDEVCACHE
defines the path to a device cache file. See the DEVICE CACHE PATH FROM AN ENVIRONMENT VARIABLE section for more information. <br>
LSOFPERSDCPATH 
defines the middle component of a modified personal device cache file path. See the MODIFIED PERSONAL DEVICE CACHE PATH section for more information.</p>
</blockquote>
<p class="quote"><i>"Art, like morality, consists in drawing the line somewhere" ~ Gilbert K. Chesterton</i></p>
<p><b>Related:</b><br>
<br>
<a href="http://ftp.tuwien.ac.at/utils/admin-tools/lsof/FAQ">lsof FAQ </a>- full documentation<br>
<a href="awk.html">awk</a> - Find and Replace text<br>
<a href="fuser.html">fuser</a> - Identify/kill the process that is accessing a file<br>
<a href="kill.html">kill</a> - Stop a process from running<br>
<a href="mount.html">mount</a> - Mount a file system<br>
<a href="ps.html">ps</a> - Process status<br>
<a href="strace.html">strace</a> - Trace system calls and signals<br>
<a href="uname.html">uname</a> - Print system information<br>
access(2), crash(1), fattach(3C), ff(1), fstat(8), 
gethostname(2), isprint(3), lstat(2),  netstat(1),   readlink(2)<br>
Equivalent Windows command: <a href="../nt/psfile.html">  psFILE</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

