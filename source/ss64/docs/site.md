---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_docs.lbi" --><!-- #EndLibraryItem --><h1>Website design and usability</h1>
<p> A few technical details about how this site is written.<br>
  <br>
  It won't escape your notice that this site is 'low tech' in design with almost everything in basic HTML and CSS, the reason for this is to maximise usability  and performance.</p>
<p>Here's my quick checklist of web design issues...<br>
  <br>
  <b>The  basics</b></p>
<ul>
  <li> Compatibility with any web browser<br>
    There are two validation tests available at W3.org - passing these ensures that *any* version of *any* browser, will give at least a reasonable approximation of the site (maybe with different fonts) but won’t produce a load of errors 
    or a blank screen.<br>
    <a href="http://validator.w3.org/">HTML validation</a> at w3.org<br>
    <a href="http://jigsaw.w3.org/css-validator/">CSS validation</a> at w3.org<br>
<br>
</li>
  <li>Access for the disabled<br>
  Making a website work for disabled web surfers is again really just a case of adhering to web standards. <br>
<br>
</li>
  <li>Navigation<br>
Moving around a website should be simple - really simple - there are few things more off-putting than arriving at a new site and having to figure how the navigation system works.<br>
<br>
</li>
<li> The status bar<br>
  This display at the bottom of the browser window shows the destination of links as you move the cursor. It also displays the status of the current page as it loads. Don't overwrite this useful information with Javascript 
  messages.</li>
</ul>
<p><b>Appearance</b></p>
<ul>
  <li>Fonts<br>
    The choice of font is not just a personal preference, it affects how quickly people can read text on screen. Don’t make assumptions about the fonts people will have installed (cater for several.)<br>
    <br>
    In usability tests Arial, 
for all it's <a href="http://www.ms-studio.com/articles.html">faults</a>  has the <a href="http://www.wilsonweb.com/wmt6/html-email-fonts.htm">advantage</a> over either Times or Verdana.<br>
<br>
For  use on the web it has often argued that sans serif fonts are more <a href="http://typoface.blogspot.co.uk/2009/08/academic-base.html">readable</a> than serif fonts. However recent research indicates that a <a href="http://alexpoole.info/blog/which-are-more-legible-serif-or-sans-serif-typefaces/">greater difference in legibility can easily be found within members of the same type family</a> than between a serif and a sans serif typeface. Most mainstream typefaces will be equally legible when set at the same size. <br>
<br>
</li>
  <li>Colour<br>
    It's important that foreground and background have sufficient contrast to be readable - maximum contrast is achieved with black text on a white background, 
    making this ideal for navigation elements.<br>
    Link colours - active and followed hyperlink colours should be left at (or at least close to) the standard settings. <br>
    <br>
  Finally remember some people are <a href="http://msdn.microsoft.com/en-us/library/bb263953(VS.85).aspx">colour blind</a> - so never use colour as the only means of identifying things.<br>
</li><br>
<li>Contrast <br>
A contrast ratio of at least 4.5:1 is recommended for normal text. <br>
The <a href="http://webaim.org/resources/contrastchecker/">WebAim contrast checker</a> can be used to calculate this for any two <a href="../colour.html">HTML colours</a>.<br>
<br>
<br>
</li>
  <li> Graphics<br>
    The number one cause of page bloat - avoid adding graphics just to "to jazz things up" and remember some people (particularly the disabled)  will browse with images turned off.<br>
    <br>
    Interlaced GIFs give the effect of the image being continuously redrawn at a higher and higher resolution. The files for these images are actually larger than for the equivalent GIF, and take longer to load.<br>
<br>
  </li>
  <li>Writing <br>
    The web is not the same as writing for print - text should be brief and to the point. <br>
Short paragraphs of text are much easier to read on a computer screen.</li>
</ul>
<p><b>Performance Issues</b></p>
<ul>
<li> Speed<br>
    There is never going to be 'enough' bandwidth on the web; as capacity increases it tends to get used by more people, more pages and larger downloads such as internet radio and streaming video. <br>
Not everyone will have a fast connection - so the best strategy if you want to reach a large audience - is to avoid bandwidth hungry design. This applies equally to pure HTML and any plug-ins you might use.</li>
</ul>
<ul>
<li>Connections<br>
    Every separate file generally means a separate connection for the web browser to fetch the data. One html page with a CSS style sheet, a couple of .js or .vbs scripts and say 6 graphics adds up to 10 trips to the server - this is 10 opportunities for something to go wrong and the page to display incorrectly. 
    I don't think 10 is likely to be a problem but some sites have ~100 items on a single page which I think is pushing things.<br>
High Speed Internet availability is lower than you might think, worldwide only 8% of connections (<a href="http://www.websiteoptimization.com/bw/1103/">2010</a> figure).</li>
</ul>
<p><b>Technical issues </b></p>
<ul>
<li>Relative Font Sizes<br>
  Different PC's have different sized monitors, different display drivers, different resolutions and DPI settings. Those with poor eyesight need to be able to see text at a size they 
  can read. Ensure that your design will accommodate this (Jakob Neilson has an <a href="http://www.nngroup.com/articles/let-users-control-font-size/">alert 
box</a> on this issue)</li>
</ul>
<ul>
  <li>URLs<br>
    The URL of a page should be short and simple (no spaces or punctuation.) <br>
    It should be possible to copy a URL into an email message without it wrapping 
    into multiple lines of %20complete%20gibber%20ish.<br>
<br>
</li>
<li>Dead Links<br>
  If you change a URL you should ensure links and bookmarks don't break by setting up a redirect.</li>
</ul>
<ul>
  <li>Window size<br>
Not everyone will be reading in a maximised window - is your browser window maximised right now? Test a variety of window sizes; along with large fonts and make sure all the navigation features are still visible.</li>
</ul>
<p><b>Related:</b></p><p><a href="http://www.amazon.com/dp/0465067107?tag=ss64">The Design of Everyday Things</a> - by Donald A. Norman <br>
<a href="http://www.amazon.com/dp/0321344758?tag=ss64">Don't Make Me Think</a>: A Common Sense Approach to Web Usability by Steve Krug <br>  
<a href="http://www.nngroup.com/">useit.com</a>  - Jakob Nielsen <br>
<a href="https://www.dotcom-tools.com/website-speed-test.aspx">Dotcom-tools</a> - Web page speed test/waterfall chart.<br>
<a href="http://www.w3.org/TR/WCAG20/">Web Content Accessibility Guidelines</a> (WCAG) 2.0 - W3C<br>
<a href="http://web-sniffer.net/">Web-sniffer</a> - View HTTP Request and Response Headers<br>
<a href="http://www.fivesecondtest.com/">Five Second Test</a><br>
</p><p class="quote"><i>“Anyone who slaps a 'this page is best viewed with Browser X' label   on a Web page appears to be yearning for the bad old days, before the Web, when you had very little chance of reading a document written on another computer,   another word processor, or another network” ~ Tim Berners-Lee in Technology 
Review, July 1996</i></p><!-- #BeginLibraryItem "/Library/foot_docs.lbi" --><p>
<hr>
<div id="bl" class="footer"><a href="site.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

