---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cfdisk</h1> 
<p>Curses based disk partition table manipulator for Linux </p>
<pre>Syntax
      cfdisk [ -agvz ] [ -c <i>cylinders</i> ] [ -h <i>heads</i> ]
                [ -s <i>sectors-per-track</i> ] [ -P <i>opt</i> ] [ <i>device</i> ]  

Options
   -a  Use an arrow cursor instead of reverse video
       for highlighting the current partition.

   -g  Do not use the geometry given by the disk driver,
       but try to guess a geometry from the partition table.

   -v  Print the version number and copyright.

   -z  Start with zeroed partition table.
       This option is useful when you want to repartition your entire disk.
       <i>Note:</i> this option does not zero the partition table on the disk;
             rather, it simply starts the program without reading the existing partition table. 
   -c<i> cylinders</i>

   -h<i> heads</i>

   -s<i> sectors-per-track</i>
             Override the number of cylinders, heads and sectors per track read from the BIOS.
             If your BIOS or adapter does not supply this information or if it supplies incorrect
             information, use these options to set the disk geometry values.
   -P<i> opt</i>
           Prints the partition table in specified formats.
           <i>opt</i> can be one or more of "r", "s" or "t".
           See the <b>p</b>rint command (below) for more information on the print formats. 

<i>   device
   </i>Typical values:
      /dev/hda [<i>default</i>]
      /dev/hdb
      /dev/sda
      /dev/sdb
      /dev/sdc
      /dev/sdd</pre>
<p>In order to write the partition table
<b>cfdisk </b>needs something called the `geometry' of the disk: the number
of `heads' and the number of `sectors per track'. Linux does not
use any geometry, so if the disk will not be accessed by other
operating systems, you can safely accept the defaults that
<b>cfdisk</b>

chooses for you. The geometry used by
<b>cfdisk</b>

is found as follows. First the partition table is examined,
to see what geometry was used by the previous program that
changed it. If the partition table is empty, or contains garbage,
or does not point at a consistent geometry, the kernel is
asked for advice. If nothing works 255 heads and 63 sectors/track
is assumed. The geometry can be overridden on the command line
or by use of the `g' command. When partitioning an empty large modern
disk, picking 255 heads and 63 sectors/track is always a good idea.
There is no need to set the number of cylinders, since
<b>cfdisk</b>

knows the disk size.
</p><p>
Next,
<b>cfdisk</b>

tries to read the current partition table from the disk drive.  If it
is unable to figure out the partition table, an error is displayed and
the program will exit.  This might also be caused by incorrect
geometry information, and can be overridden on the command line.
Another way around this problem is with the
<b>-z</b>

option.  This will ignore the partition table on the disk.
</p><p>
The main display is composed of four sections, from top to bottom: the
header, the partitions, the command line and a warning line.  The
header contains the program name and version number followed by the
disk drive and its geometry.  The partitions section always displays
the current partition table.  The command line is the place where
commands and text are entered.  The available commands are usually
displayed in brackets.  The warning line is usually empty except when
there is important information to be displayed.  The current partition
is highlighted with reverse video (or an arrow if the
<b>-a</b>

option is given).  All partition specific commands apply to the
current partition.
</p><p>
The format of the partition table in the partitions section is, from
left to right: Name, Flags, Partition Type, Filesystem Type and Size.
The name is the partition device name.  The flags can be
<i>Boot</i>,

which designates a bootable partition or
<i>NC</i>,

which stands for "Not Compatible with DOS or OS/2".  DOS, OS/2 and
possibly other operating systems require the first sector of the first
partition on the disk and all logical partitions to begin on the
second head.  This wastes the second through the last sector of the
first track of the first head (the first sector is taken by the
partition table itself).
<b>cfdisk</b>

allows you to recover these "lost" sectors with the maximize command
(<b>m</b>).


<i>Note:</i>

<b><a href="fdisk.html">fdisk</a></b>(8)

and some early versions of DOS create all partitions with the number
of sectors already maximized.  For more information, see the maximize
command below.  The partition type can be one of
<i>Primary</i> or <i>Logical</i>.

For unallocated space on the drive, the partition type can also be
<i>Pri/Log</i>,

or empty (if the space is unusable).  The filesystem type section
displays the name of the filesystem used on the partition, if known.
If it is unknown, then
<i>Unknown</i>

and the hex value of the filesystem type are displayed.  A special
case occurs when there are sections of the disk drive that cannot be
used (because all of the primary partitions are used).  When this is
detected, the filesystem type is displayed as
<i>Unusable</i>.

The size field displays the size of the partition in megabytes (by
default).  It can also display the size in sectors and cylinders (see
the change units command below).  If an asterisks
(<b>*</b>)

appears after the size, this means that the partition is not aligned
on cylinder boundaries.
</p><h2>DOS 6.x WARNING</h2>

<p>
The DOS 6.x FORMAT command looks for some information in the first
sector of the data area of the partition, and treats this information
as more reliable than the information in the partition table.  DOS
FORMAT expects DOS FDISK to clear the first 512 bytes of the data area
of a partition whenever a size change occurs.  DOS FORMAT will look at
this extra information even if the /U flag is given -- we consider
this a bug in DOS FORMAT and DOS FDISK.
</p><p>
The bottom line is that if you use cfdisk or fdisk to change the size of a
DOS partition table entry, then you must also use
<b>dd</b>

to zero the first 512 bytes of that partition before using DOS FORMAT to
format the partition.  For example, if you were using cfdisk to make a DOS
partition table entry for /dev/hda1, then (after exiting fdisk or cfdisk
and rebooting Linux so that the partition table information is valid) you
would use the command "dd if=/dev/zero of=/dev/hda1 bs=512 count=1" to zero
the first 512 bytes of the partition. Note:
</p><p>
<b>BE EXTREMELY CAREFUL</b>

if you use the
<b>dd</b>

command, since a small typo can make all of the data on your disk useless.
</p><p>
For best results, you should always use an OS-specific partition table
program.  For example, you should make DOS partitions with the DOS FDISK
program and Linux partitions with the Linux fdisk or Linux cfdisk program.
</p><p><b>Commands</b>
<b>cfdisk</b>

commands can be entered by pressing the desired key (pressing

<i>Enter</i>

after the command is not necessary).  Here is a list of the available
commands:
</p><dl compact="">
<dt><b>b</b>

</dt><dd>
Toggle bootable flag of the current partition.  This allows you to
select which primary partition is bootable on the drive.
</dd><dt><b>d</b>

</dt><dd>
Delete the current partition.  This will convert the current partition
into free space and merge it with any free space immediately
surrounding the current partition.  A partition already marked as free
space or marked as unusable cannot be deleted.
</dd><dt><b>g</b>

</dt><dd>
Change the disk geometry (cylinders, heads, or sectors-per-track).
<b>WARNING:</b>

This option should only be used by people who know what they are
doing.  A command line option is also available to change the disk
geometry.  While at the change disk geometry command line, you can
choose to change cylinders
(<b>c</b>),

heads
(<b>h</b>),

and sectors per track
(<b>s</b>).

The default value will be printed at the prompt which you can accept
by simply pressing the
<i>Enter</i>

key, or you can exit without changes by pressing the

<i>ESC</i>

key.  If you want to change the default value, simply enter the
desired value and press
<i>Enter</i>.

The altered disk parameter values do not take effect until you return
the main menu (by pressing
<i>Enter</i> or <i>ESC</i>

at the change disk geometry command line.  If you change the geometry
such that the disk appears larger, the extra sectors are added at the
end of the disk as free space.  If the disk appears smaller, the
partitions that are beyond the new last sector are deleted and the
last partition on the drive (or the free space at the end of the
drive) is made to end at the new last sector.
</dd><dt><b>h</b>

</dt><dd>

Print the help screen.
</dd><dt><b>m</b>

</dt><dd>
Maximize disk usage of the current partition.  This command will
recover the the unused space between the partition table and the
beginning of the partition, but at the cost of making the partition
incompatible with DOS, OS/2 and possibly other operating systems.
This option will toggle between maximal disk usage and DOS, OS/2,
etc. compatible disk usage.  The default when creating a partition is
to create DOS, OS/2, etc. compatible partitions.
</dd><dt><b>n</b>

</dt><dd>
Create new partition from free space.  If the partition type is
<i>Primary</i> or <i>Logical</i>,

a partition of that type will be created, but if the partition type is
<i>Pri/Log</i>,

you will be prompted for the type you want to create.  Be aware that
(1) there are only four slots available for primary partitions and (2)
since there can be only one extended partition, which contains all of
the logical drives, all of the logical drives must be contiguous (with
no intervening primary partition).

<b>cfdisk</b>

next prompts you for the size of the partition you want to create.
The default size, equal to the entire free space of the current
partition, is display in megabytes.  You can either press the
<i>Enter</i>

key to accept the default size or enter a different size at the
prompt.
<b>cfdisk</b>

accepts size entries in megabytes
(<b>M</b>)

[default], kilobytes
(<b>K</b>),

cylinders
(<b>C</b>)

and sectors
(<b>S</b>)

by entering the number immediately followed by one of
(<b>M</b>, <b>K</b>, <b>C</b> or <b>S</b>).

If the partition fills the free space available, the partition is
created and you are returned to the main command line.  Otherwise, the
partition can be created at the beginning or the end of the free
space, and

<b>cfdisk</b>

will ask you to choose where to place the partition.  After the
partition is created,
<b>cfdisk</b>

automatically adjusts the other partition's partition types if all of
the primary partitions are used.
</dd><dt><b>p</b>

</dt><dd>
Print the partition table to the screen or to a file. There are
several different formats for the partition that you can choose from:
<p>
</p><dl compact="">
  <dd>
<dl compact="">
<dt><b>r</b>

</dt><dd>
Raw data format (exactly what would be written to disk)
</dd><dt><b>s</b>

</dt><dd>
Partition table in sector order format
</dd><dt><b>t</b>

</dt><dd>
Partition table in raw format
</dd></dl>
</dd></dl>

<dl compact="">
  <dd>
      <p>
        The
          <i>raw data format</i>
        
will print the sectors that would be written to disk if a
        <b>w</b>rite
        
command is selected.  First, the primary partition table is printed,
        followed by the partition tables associated with each logical
        partition.  The data is printed in hex byte by byte with 16 bytes per
        line.
      </p>
  </dd><dd>
      <p>
          The
            <i>partition table in sector order format</i>
          
will print the partition table ordered by sector number.  The fields,
          from left to right, are the number of the partition, the partition
          type, the first sector, the last sector, the offset from the first
          sector of the partition to the start of the data, the length of the
          partition, the filesystem type (with the hex value in parenthesis),
          and the flags (with the hex value in parenthesis).  In addition to the
          primary and logical partitions, free and unusable space is printed and
          the extended partition is printed before the first logical partition.
      </p><p>
          If a partition does not start or end on a cylinder boundary or if the
          partition length is not divisible by the cylinder size, an asterisks
          (<b>*</b>)
          
is printed after the non-aligned sector number/count.  This usually
          indicates that a partition was created by an operating system that
          either does not align partitions to cylinder boundaries or that used
          different disk geometry information.  If you know the disk geometry of
          the other operating system, you could enter the geometry information
          with the change geometry command
          (<b>g</b>).
          

      </p><p>
          For the first partition on the disk and for all logical partitions, if
          the offset from the beginning of the partition is not equal to the
          number of sectors per track (i.e., the data does not start on the
          first head), a number sign
          (<b>#</b>)
          
is printed after the offset.  For the remaining partitions, if the
          offset is not zero, a number sign will be printed after the offset.
          This corresponds to the
          <i>NC</i>
          
flag in the partitions section of the main display.
      </p><p>
          The
            <i>partition table in raw format</i>
          
will print the partition table ordered by partition number.  It will
          leave out all free and unusable space.  The fields, from left to
          right, are the number of the partition, the flags (in hex), the
          starting head, sector and cylinder, the filesystem ID (in hex), the
          ending head, sector and cylinder, the starting sector in the partition
          and the number of sectors in the partition.  The information in this
          table can be directly translated to the
          <i>raw data format</i>.
          
</p><p>
          
The partition table entries only have 10 bits available to represent
          the starting and ending cylinders.  Thus, when the absolute starting
          (ending) sector number is on a cylinder greater than 1023, the maximal
          values for starting (ending) head, sector and cylinder are printed.
          This is the method used by OS/2, and thus fixes the problems
          associated with OS/2's fdisk rewriting the partition table when it is
          not in this format.  Since Linux and OS/2 use absolute sector counts,
          the values in the starting and ending head, sector and cylinder are
          not used.
</p></dd></dl>
</dd><dt><b>q</b>

</dt><dd>
Quit program.  This will exit the program without writing any data to
disk.
</dd><dt><b>t</b>

</dt><dd>
Change the filesystem type.  By default, new partitions are created as
<i>Linux</i>

partitions, but since

<b>cfdisk</b>

can create partitions for other operating systems, change partition
type allows you to enter the hex value of the filesystem you desire.
A list of the know filesystem types is displayed.  You can type in the
filesystem type at the prompt or accept the default filesystem type
[<i>Linux</i>].

</dd><dt><b>u</b>

</dt><dd>
Change units of the partition size display.  It will rotate through
megabytes, sectors and cylinders.
</dd><dt><b>W</b>

</dt><dd>
Write partition table to disk (must enter an upper case W).  Since
this might destroy data on the disk, you must either confirm or deny
the write by entering `yes' or `no'.  If you enter `yes',
<b>cfdisk</b>

will write the partition table to disk and the tell the kernel to
re-read the partition table from the disk.  The re-reading of the
partition table works is most cases, but I have seen it fail.  Don't
panic.  It will be correct after you reboot the system.  In all cases,
I still recommend rebooting the system--just to be safe.
</dd><dt><i>Up Arrow</i>

</dt><dt><i>Down Arrow</i>

</dt><dd>
Move cursor to the previous or next partition.  If there are more
partitions than can be displayed on a screen, you can display the next
(previous) set of partitions by moving down (up) at the last (first)
partition displayed on the screen.
</dd><dt><i>CTRL-L</i>

</dt><dd>
Redraws the screen.  In case something goes wrong and you cannot read
anything, you can refresh the screen from the main command line.
</dd><dt><b>?</b>

</dt><dd>
Print the help screen.
<p>

All of the commands can be entered with either upper or lower case
letters (except for
<b>W</b>rites).

When in a sub-menu or at a prompt to enter a filename, you can hit the
<i>ESC</i>

key to return to the main command line.
</p></dd></dl>

<h2>EXIT STATUS</h2>


0: No errors; 1: Invocation error; 2: I/O error;
3: cannot get geometry; 4: bad partition table on disk.


<h2>BUGS</h2>

<p>The current version does not support multiple disks.</p>
<p class="quote"><i>"When I'm reading material, if I'm a little bit afraid of a 
    part and I'm willing to admit that to myself, then I'll do it, definitely. If 
    I'm worried about being able to do it, to get it - I absolutely just love it" ~ Jack 
    Lemmon</i>
</p>
<p><b>R</b><b>elated</b>:<br>
  <br>
  <a href="fdisk.html">fdisk</a> - disk partition table manipulator<br>
  <a href="fdformat.html">fdformat</a> - Low-level format a floppy disk<br>
  mkfs - <br>
  parted -<br>
  sfdisk -  <br>
Equivalent Windows command:  <a href="../nt/format.html">FORMAT</a> - Format a disk</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cfdisk.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

