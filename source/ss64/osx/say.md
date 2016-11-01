---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>say</h1> 
<p>Convert text to audible speech.
  <br>
  This tool uses the Speech Synthesis manager to convert input text to
audible speech and either play it through the sound output device chosen in System
Preferences or save it to an AIFF file.</p>
<pre>Syntax
      say [-v <i>voice</i>] [-o <i>out.aiff</i> | -n <i>name</i>:<i>port</i> ] [-f <i>file.in</i> | <i>string</i> ...]

Key

   <i>string</i>   The text to speak on the command line.
            This can consist of multiple arguments, which are
            considered to be separated by spaces.

   --input-file=<i>file</i>
   -f <i>file</i>  A file to be spoken.
            If <i>file</i> is <i>-</i> or neither this parameter nor a message
            is specified, read from standard input.

   --file-format=<i>format</i>
            The format of the file to write (AIFF, caff, m4af, WAVE).
            Generally, it's easier to specify a suitable file extension
            for the output file. To obtain a list of writable file formats,
            specify '?' as the format name.

   --data-format=<i>format</i>
            The format of the audio data to be stored. default=linear PCM.

   --progress    Display a progress meter during synthesis.

   --rate=<i>rate
</i>   -r <i>rate</i>       Speech rate to be used, in words per minute.

   --voice=<i>voice</i>
   -v <i>voice</i>      The voice to be used: Alex, Bruce, Fred, Kathy, Vicki or Victoria
                 Default is the voice selected in System Preferences | Speech

   -v ?          List available voices.

   --output-file=<i>file</i>out.aiff
   -o <i>fileout.aiff</i>
                 An AIFF file to be written, some voices support other file formats.

   --channels=<i>channels</i>   The number of channels. Most synthesizers produce mono audio only.
   --bit-rate=<i>rate</i>       The bit rate for formats, default=AAC.specify '?' as the rate.
   --quality=<i>quality</i>     The audio converter quality level between 0 (lowest) and 127 (highest).

   --network-send=<i>name</i>
   -n <i>name</i>

   --network-send=<i>name</i>:<i>port</i><br>   -n <i>name</i>:<i>port</i>

   --network-send=:<i>port</i><br>   -n :<i>port</i>

   --network-send=:<br>   -n :          Specify a service <i>name</i> (default "AUNetSend") and/or IP <i>port</i> to be
                 used for redirecting the speech output through AUNetSend.
                 specify '?' as the device name to obtain a list of audio output devices.</pre>
<p>     If the input is a TTY, or if no text is specified, the typed input text will be spoken line by line, and the output
       file, if specified, will only contain audio for the last line of the
  input.  Press Ctrl-C to cancel. Otherwise, text is spoken all at once.</p>
<p>Returns 0 if the text was spoken successfully, otherwise non-zero.<br>
Diagnostic messages will be printed to standard error.</p>
<p>The default voice (and speaking rate) can be set in <i>System Preferences</i> | <i>Dictation &amp; Speech.</i></p>
<p>Some voices are not installed by default, selecting them in System Preferences will cause the voice to be downloaded.</p>
<p>Examples</p>
<pre> say -v Agnes "Isn't it nice to have a computer that will talk to you?"
 say -v Albert "I have a frog in my throat. No, I mean a real frog!"
 say -v Alex "Most people recognize me by my voice."
 say -v Bad News "The light you see at the end of the tunnel is the headlamp of a fast approaching train."
 say -v Bahh "Do not pull the wool over my eyes."
 say -v Bells "Time flies when you are having fun."
 say -v Boing "Spring has sprung, fall has fell, winter's here and it's colder than usual."
 say -v Bruce "I sure like being inside this fancy computer"
 say -v Bubbles "Pull the plug! I'm drowning!"
 say -v Cellos "Doo da doo da dum dee dee doodly doo dum dum dum doo da doo da doo da doo da doo da doo da doo"
 say -v Deranged "I need to go on a really long vacation."
 say -v Fred "I sure like being inside this fancy computer"
 say -v Good News "Congratulations you just won the sweepstakes and you don't have to pay income tax again."
 say -v Hysterical "Please stop tickling me!"
 say -v Junior "My favorite food is pizza."
 say -v Kathy "Isn't it nice to have a computer that will talk to you?"
 say -v Pipe Organ "We must rejoice in this morbid voice."
 say -v Princess "When I grow up I'm going to be a scientist."
 say -v Ralph "The sum of the squares of the legs of a right triangle is equal to the square of the hypotenuse."
 say -v Trinoids "We cannot communicate with these carbon units."
 say -v Vicki "Isn't it nice to have a computer that will talk to you?"
 say -v Victoria "Isn't it nice to have a computer that will talk to you?"
 say -v Whisper "Pssssst, hey you, Yeah you, Who do ya think I'm talking to, the mouse? "
 say -v Zarvox "That looks like a peaceful planet."</pre>
<pre class="code"> say "Hello world"</pre>
<pre class="code"> say -v ?

 say -v fiona "i like irn bru"</pre>
<pre class="code"> say -v fiona -o likeit.aiff "i like irn bru"</pre>
<p><span class="code"> &nbsp;say -f myfile.txt<br>
</span>or<span class="code"><br>
&nbsp;cat myfile.txt | say</span></p>
<p class="code"> &nbsp;cat myfile.txt | say -o MyAudioFile.aiff</p>
<p class="code">$ ./long-running-script ; say "Your Script has finished running"</p>
<p class="quote"><i>“We're nothing but the stories we tell ourselves” ~ Michael Montoure </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/say.1.html">say man page</a> - Apple.com<br>
<a href="echo.html">echo</a> - Display message on screen<br>
<a href="pr.html">pr</a> - Convert text files for printing<br>
<a href="textutil.html">textutil</a> - Manipulate text files in various formats<br>
<a href="http://www.apple.com/accessibility/osx/voiceover/">OS X VoiceOver</a> - Apple.com accessibility page.<br>
<a href="wall.html">wall</a> - Write a message to users<br>
Windows PowerShell: <span class="code"><a href="../ps/add-type.html#speech">Add-Type</a> System.Speech</span></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="say.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
