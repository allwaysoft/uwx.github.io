---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>scp</h1> 
<p>Secure copy (remote file copy program) </p>
<pre>Syntax
      scp [-1246BCpqrv] [-c <i>cipher</i>] [-F <i>ssh_config</i>] [-i <i>identity_file</i>]
             [-l <i>limit</i>] [-o <i>ssh_option</i>] [-P <i>port</i>] [-S <i>program</i>]
                <b>[</b> [<i>user</i>@]<i>host1</i>:<b>]</b><i>file1</i> [...] <b>[</b> [<i>user</i>@]<i>host2</i>:<b>]</b><i>file2</i></pre>
<p>scp copies files between hosts on a network. It uses ssh(1) for data transfer, and uses the same authentication and provides the same security as ssh(1). Unlike <a href="rcp.html">rcp</a>, scp will ask for passwords or passphrases if they are needed for authentication.</p>
<p>Any file name can contain a host and user specification to indicate that the file is to be copied to/from that host. <br>
Copies between two remote hosts are permitted.</p>
<pre><i>Options</i>:
    -1' Force scp to use protocol 1.

    -2' Force scp to use protocol 2.

    -4' Force scp to use IPv4 addresses only.

    -6' Force scp to use IPv6 addresses only.

    -B' Select batch mode (dont ask for passwords or passphrases).

    -C' Compression, passes the -C flag to ssh(1) to enable compression.

    -c <i>cipher</i>
    Select the cipher to use for encrypting the data transfer.
    This option is directly passed to ssh(1).

    -F <i>ssh_config</i>
    Specifies an alternative per-user configuration file for ssh.
    This option is directly passed to ssh(1).

    -i <i>identity_file</i>
    Select the file from which the identity (private key) for RSA
    authentication is read. This option is directly passed to ssh(1).

    -l <i>limit</i>
    Limit the used bandwidth, specified in Kbit/s.

    -o <i>ssh_option</i>
    Can be used to pass options to ssh in the format used in ssh_config(5).
    This is useful for specifying options for which there is no separate
    scp command-line flag.

    For full details of the options listed below, and their possible values,
    see ssh_config(5).

    AddressFamily
    BatchMode
    BindAddress
    ChallengeResponseAuthentication
    CheckHostIP
    Cipher
    Ciphers
    Compression
    CompressionLevel
    ConnectionAttempts
    ConnectTimeout
    ControlMaster
    ControlPath
    GlobalKnownHostsFile
    GSSAPIAuthentication
    GSSAPIDelegateCredentials
    HashKnownHosts
    Host'
    HostbasedAuthentication
    HostKeyAlgorithms
    HostKeyAlias
    HostName
    IdentityFile
    IdentitiesOnly
    KbdInteractiveDevices
    LogLevel
    MACs'
    NoHostAuthenticationForLocalhost
    NumberOfPasswordPrompts
    PasswordAuthentication
    Port'
    PreferredAuthentications
    Protocol
    ProxyCommand
    PubkeyAuthentication
    RekeyLimit
    RhostsRSAAuthentication
    RSAAuthentication
    SendEnv
    ServerAliveInterval
    ServerAliveCountMax
    SmartcardDevice
    StrictHostKeyChecking
    TCPKeepAlive
    UsePrivilegedPort
    User'
    UserKnownHostsFile
    VerifyHostKeyDNS

    -P <i>port</i>
    The port to connect to on the remote host.
    Note that this option is written with a capital 'P', because -p is
    already reserved for preserving the times and modes of the file in rcp(1).

    -p' Preserves modification times, access times, and modes from the original file.

    -q' Disables the progress meter.

    -r' Recursively copy entire directories.

    -S <i>program</i>
    Name of program to use for the encrypted connection.
    The program must understand ssh(1) options.

    -v' Verbose mode.
        Causes scp and ssh(1) to print debugging messages about their progress.
        This is helpful in debugging connection, authentication, and configuration problems. </pre>
<p>scp exits with 0 on success or &gt;0 if an error occurred.</p>
<p>scp is part of the the <a href="http://www.openssh.com/">OpenSSH</a> suite.</p>
<p><b>Example</b></p>
<p>Copy file1 to a remote host:<span class="code"><br>
scp /home/simon/file1 kate@ss64.com:/home/kate</span></p>
<p class="quote"><i>“Nothing is secure but life, transition, the energizing spirit” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b><br>
<br>
<a href="rcp.html">rcp</a> - Copy files between two machines<br> sftp(1), ssh(1), ssh-add(1), ssh-agent(1), ssh-keygen(1), ssh_config(5), sshd(8) </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="scp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

