---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Update-List</h1> 
<p>Add and remove items from a property value that contains a collection of objects.</p>
<pre>Syntax
      Update-List [-Add <i>Object</i>[]] [-Remove <i>Object</i>[]]
         [[-Property] <i>string</i>] [-InputObject <i>psobject</i>] [<i>CommonParameters</i>]

      Update-List -Replace <i>Object</i>[]
         [[-Property] <i>string</i>] [-InputObject <i>psobject</i>] [<i>CommonParameters</i>]

Key
   -Add <i>Object</i>[]
       The property values to be added to the collection.
       Enter the values in the order that they should appear in the collection.

   -InputObject <i>psobject
</i>       The objects to be updated.
       The object to be updated may be piped to Update-List.

   -Property <i>string
</i>       The property that contains the collection that is being updated.
       If omitted, Update-List will return an object that represents
       the change instead of changing the object.

   -Remove <i>Object</i>[]
       The property values to be removed from the collection.

   -Replace <i>Object</i>[]
       Specifies a new collection.
       This parameter replaces all items in the original collection
       with the items specified by this parameter.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Update-List adds items to and removes items from a property value of an object, and then it returns the 
updated object. This cmdlet is designed for properties that contain collections of objects.<br>
<br>
The -Add and -Remove parameters add individual items to and remove them from the collection. The -Replace parameter replaces the entire collection.<br>
<br>
If no property is specified in the command, Update-List will return an object that describes the update instead of
updating the object. The update object may be submitted to cmdlets that change objects, such as Set-* cmdlets. <br>
<br>
This cmdlet works only when the property that is being updated supports the IList interface that Update-List uses. 
Also, any Set-* cmdlets that accept an update must support the IList interface. The core cmdlets that are installed
with PowerShell do <b>not </b>support this interface.</p>
<p><b>Examples</b></p>
<p>Add A and B and remove X and Y from the Aliases property of an Exchange mailbox:</p>
<p><span class="code">PS C:\&gt; <a href="http://go.microsoft.com/fwlink/?LinkId=111536">get-mailbox</a> | update-list -Property aliases -Add "A","B" -Remove "X","Y" | set-mailbox
Hello</span></p>
<p>Add A and B to the value of the Aliases property of a Exchange mailbox and remove X and Y. This command has the same effect as the previous command, although it has a slightly different format:</p>
<p><span class="code">PS C:\&gt; $mb = get-mailbox<br>

PS C:\&gt; update-list -InputObject $mb -Property aliases -Add "A","B" -Remove "X", "Y" | set-mailbox</span></p>
<p>Add A and B and remove X and Y from the Aliases property of an Exchange mailbox, again this  command has the same effect:</p>
<p><span class="code">PS C:\&gt; get-mailbox | set-mailbox -alias (update-list -Add "A", "B" -Remove "X","Y")</span></p>
<p class="quote"><i>“You never have to change anything you got up in the middle of the night to write” ~ Saul Bellow</i></p>
<p><b>Related:</b></p>
<p> <a href="set-content.html">Set-Content</a> - Set content in an item (specific location)<br>
<a href="set-item.html">Set-Item</a> - Change the value of an item</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="update-list.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

