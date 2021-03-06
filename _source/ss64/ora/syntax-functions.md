---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Oracle SQL Functions</h1>
<p>Functions:</p>
<pre>ABS(<i>n</i>)        Absolute value of number
ACOS(<i>n</i>)       arc cosine of n
ADD_MONTHS(<i>date,num_months</i>)
              Returns date + num_months
ASCII(<i>char</i>)   Converts char into a decimal ascii code
ASIN(<i>n</i>)       arc sine of n.
ATAN(<i>n</i>)       arc tangent of n. 
ATAN2(<i>n.m</i>)    arc tangent of n and m. 
<b>AVG</b>([DISTINCT]<i>n</i>)
              Averge value of 'n' ignoring NULLs

BETWEEN <i>value</i> AND <i>value</i>
              e.g. Where 'x' between 25 AND 100
              which means 'x' <b>&gt;=</b> 25 AND 'x' <b>&lt;=</b> 100

BFILENAME('<i>directory</i>','<i>filename</i>')
              Get the BFILE locator associated with a physical LOB binary file.

<a href="syntax-analytic-case.html">CASE</a>          Group the data into sub-sets.
CEIL(<i>n</i>)       Round n up to next whole number.
CHARTOROWID(<i>char</i>)
              Converts a Char into a rowid value.
CHR(<i>n</i>)        Character with value <i>n</i>
CONCAT(<i>s1,s2</i>) Concatenate string1 and string2
<a href="syntax-convert.html">CONVERT</a>(<i>char_to_convert, new_char_set, old_char_set</i>)
              Convert a  string from one character set to another.
COS(<i>n</i>)        Cosine of number
COSH(<i>n</i>)       Hyperbolic Cosine of number
COUNT(*)      Count the no of rows returned
COUNT([DISTINCT] <i>expr</i>)
              Count the no of rows returned by expr
CURRENT_DATE
CURRENT_TIME
CURRENT_TIMESTAMP
<a href="syntax-decode.html"><b>
DECODE</b></a>        IF x THEN return y ELSE return z
<a href="syntax-analytic-topn.html">DENSE_RANK</a>    Calculate the rank of a value in a group
DEREF(<i>e</i>)      Return the object reference of argument e. 
DUMP(<i>expr</i>,<i>fmt</i>[,<i>start</i>,<i>length</i>])
              Convert to dec/hex/oct and display char set

EMPTY_BLOB    Return an empty LOB locator (use to empty a column or variable)
EMPTY_CLOB    Return an empty LOB locator (use to empty a column or variable)
EXISTS        Return TRUE if a subquery returns at least one row
EXP(<i>n</i>)        Exponential (e to 'n'th power)
<a href="syntax-extract.html">EXTRACT</a>       Extract part of a DATE (Year,Month,Day,Second,etc)

FLOOR(<i>n</i>)      Round n down to the next whole number.

GREATEST(<i>expression, expression</i>…)
              Returns the largest in a list of expressions.
GROUPING      Grouping for superaggregate rows=NULL
              (see <a href="syntax-analytic-grouping.html">GROUP BY ROLLUP/CUBE</a>)

HEXTORAW(<i>char</i>) Convert char containing hex digits to a raw value.

IN (<i>list of comma separated values</i>)
              Effectively a shorthand for ['x' = y OR 'x' = z…] i.e.
              Where 'x' IN ('sales','marketing','recruitment')
INITCAP(<i>char</i>) String with Initial Capitals
INSTR(str, chars[,s[,n]])
              Find the 'n'th occurence of 'chars' in 'str'<br>              Starting at position 's'
              n and s default to 1
INSTRB (<i>str, chars</i>[,<i>s</i>[,<i>n</i>]])
              The same as INSTR, except that 's' and the return value are expressed in bytes,
              use for double-byte char sets.
<a href="syntax-is-null.html">IS NULL</a>       Check for NULL (empty) values  (Select * from demo Where x IS NULL;)
<a href="syntax-is-not-null.html">IS NOT NULL</a>   Check for items that contain a value (Select * from demo Where x IS NOT NULL;)

LAST_DAY(<i>date</i>)Returns the last day of month in Date
LEAST(expression, expression…)
              Returns the smallest in a list of expressions
LENGTH(<i>char</i>)  Returns the number of characters in char
LENGTHB(<i>char</i>) Returns the number of bytes in char (use for double-byte char sets)
<b><a id="like"></a>LIKE</b> <i>wildcard/value</i>
              Wildcards are [% = any chars] [ _ = any one char]
              Where 'x' LIKE 'smith%' [will find 'Smithson']
              Where 'x' LIKE 'smith_' [will find 'Smithy']
LN(<i>n</i>)         Natural Log of n, where n&gt;0
LOG(<i>b,n</i>)      log of n, base b
LOWER(<i>char</i>)   Returns character string in lowercase
LPAD(<i>char</i>, <i>n</i>[,<i>PadChar</i>])
              Left Pad char with n spaces [or PadChars]
LTRIM(<i>char</i>[,<i>set</i>])
              Left Trim char - remove leading spaces [or char set]

MAKE_REF(<i>table</i>,<i>key</i>)
              Create a REF to a row of an OBJECT view/table
<b>
MAX</b>([DISTINCT] <i>expr</i>)
              Maximum value returned by <i>expr</i>

MEDIAN(<i>expr</i>) [OVER(<i><a href="syntax-analytic-aggregate.html">query partition clause</a></i>) ]
              Returns the <a href="http://en.wikipedia.org/wiki/Median">median</a> of an expression (10g and above).

<b>MIN</b>([DISTINCT] <i>expr</i>)
              Minimum value returned by <i>expr</i>

MOD(<i>x,y</i>)      Remainder of x divided by y

MONTHS_BETWEEN(<i>end_date, start_date</i>)
              Number of months between the 2 dates (integer)

NEW_TIME(<i>date, zone1, zone2</i>)
              Convert between GMT and US time zones (but not CET)
NEXT_DAY(<i>date,day_of_week</i>)
              '12-OCT-01','Monday' will return the next Mon after 12 Oct
NLS_CHARSET_DECL_LEN (<i>bytecount,charset</i>)
              Returns the declaration width (no of chars) of an NCHAR column
NLS_CHARSET_ID(<i>varchars</i>)
              Returns the char set ID given a charset name
NLS_CHARSET_NAME(<i>charset_id</i>)
              Returns the char set name given a charset id
NLS_INITCAP(<i>char</i>[,'NLS_SORT = <i>sort_sequence</i>'])
              Returns char in Initial Caps, using an NLS sort_sequence
              either the session default or specified directly
NLS_LOWER(<i>char</i>[,'NLS_SORT = <i>sort_sequence</i>'])
              Returns char in lower case, using an NLS sort_sequence
              either the session default or specified directly
NLSSORT(<i>char</i>[,'NLS_SORT = <i>sort_sequence</i>'])
              Return the string of bytes used to sort char, using an NLS sort_sequence
              either the session default or specified directly
NLS_UPPER(<i>char</i>[,'NLS_SORT = <i>sort_sequence</i>'])
              Returns char in UPPER case, using an NLS sort_sequence
              either the session default or specified directly
<b>NVL</b>(<i>expression, value_if_null</i>)
              If <i>expression</i> is null, returns <i>value_if_null</i>; if <i>expression</i> is not null, returns <i>expression</i>.
              The arguments can have any datatype (Oracle will perform implicit conversion where needed).
<a href="syntax-analytic-topn.html">PERCENT_RANK</a>  Calculate the percent rank of a value in a group.
POWER(<i>m,n</i>)    m raised to the nth power

<a href="syntax-analytic-topn.html">RANK</a>          Calculate the rank of a value in a group
RAWTOHEX(<i>raw</i>) Convert raw to a character value containing its hex equivalent
REF(<i>table_alias</i>)
              Returns a REF value for an object instance (bound to the variable or row.)
              The table alias (correlation variable) is associated with
              one row of an object table or an object view in an SQL statement.
REFTOHEX(<i>ref</i>) Convert ref (object type) to a char value containing its hex equivalent.
<b>REPLACE</b>(<i>char, search_str</i>[,<i> replace_str</i>])
              ANSI alternative to <a href="syntax-decode.html">decode()</a> Replace every occurrence of search_str
              with replace_str, replace_str defaults to null.
<b>ROUND</b>(<i>n,d</i>)    n rounded to d decimal places (d defaults to 0)
ROUND(<i>date,<a href="syntax-fmt.html">fmt</a></i>)
              date rounded to fmt
ROWIDTOCHAR(<i>rowid</i>)
              Convert a rowid value to VARCHAR2
<a href="syntax-analytic-topn.html">ROW_NUMBER</a>    Assign a unique number to each row of results. 
RPAD(<i>char</i>, <i>n</i>[,<i>PadChar</i>])
              Right Pad char with n spaces [or PadChars]
RTRIM(<i>char</i>[,<i>set</i>])
              Right Trim char - remove trailing spaces [or char set]

SIGN(<i>n</i>)       positive = 1, zero = 0, negative = -1
SIN(<i>n</i>)        Sine of n in Radians.
SINH(<i>n</i>)       Hyperbolic Sine of n in Radians.
SOUNDEX(<i>char</i>) Returns a char value representing the sound of the words.
              Use Soundex() to find names that sound alike but are spelled differently
              e.g. ...WHERE SOUNDEX(EMP_SURNAME) = SOUNDEX('HAUGHIE');

SQRT(<i>n</i>)       Square Root (returns NULL for negative no's)
STDDEV([DISTINCT] <i>n</i>)
              Standard deviation of n.
<b>SUBSTR</b>(<i>char</i>, <i>s</i>[,<i>l</i>])
              A substring of char, starting at character s, length l.
SUBSTRB(<i>char</i>, <i>s</i>[,<i>l</i>])
              A substring of char, starting at character s, length l
              The same as SUBSTR, except that 's', 'l' and the return value are expressed in bytes,
              use for double-byte char sets.
<b>SUM</b>([DISTINCT] <i>n</i>)
              Sum of values of n, ignoring NULLs
SYS_CONTEXT('<i>namespace</i>','<i>attribute_name</i>')
              Examine the package associated with the context <i>namespace</i> 
              Possible attributes are: NLS_TERRITORY, NLS_CURRENCY, NLS_CALENDAR 
              NLS_DATE_FORMAT, NLS_DATE_LANGUAGE, NLS_SORT, SESSION_USER, CURRENT_USER
              CURRENT SCHEMAID,SESSION_USERID, CURRENT_USERID, <a href="session_a.html">CURRENT_SCHEMA</a>
              note: CURRENT_USER can be different from SESSION_USER within a stored procedure
              (e.g an invoker-rights procedure).  
SYS_CONTEXT ('<i>USERENV</i>','<i>IP_ADDRESS</i>')
SYS_GUID()    Returns a globally unique identifier (16 byte RAW value)
<b><a href="syntax-sysdate.html">SYSDATE</a></b>       The current system date &amp; time

TAN(<i>n</i>)        Tangent of <i>n</i> in Radians
TANH(<i>n</i>)       Hyperbolic tangent of <i>n</i> in Radians
TO_BLOB(<i>Raw_col</i>)  Convert LONG RAW and RAW values to BLOB
<a href="syntax-to_char.html"><b>TO_CHAR</b></a>       Convert to a character String
TO_CLOB       Convert character or NCLOB values to the database character set.
<a href="syntax-to_date.html"><b>TO_DATE</b></a>       Convert to date value
<a href="syntax-to_lob.html">TO_LOB</a>(<i>long</i>)  Convert LONG values to CLOB or NCLOB values
              or convert LONG RAW values to BLOB values
TO_MULTI_BYTE(<i>char</i>)
              Convert single-byte char to multi-byte char
TO_NCHAR(<i>expr</i>) Convert a TEXT expression, date, or number to NTEXT in a specified format.
               Mostly used to format output data.
TO_NCLOB      Convert any character string (including LOBs) to the national character set.
<a href="syntax-to_number.html"><b>TO_NUMBER</b></a>     Convert to numeric format
TO_SINGLE_BYTE(<i>char</i>)
              Convert multi-byte <i>char</i> to single-byte character.
TO_TIME       Convert to time value
TO_TIME_TZ    Convert to time zone
TO_TIMESTAMP  Convert to timestamp 
TO_TIMESTAMP_TZ
TO_YMINTERVAL Convert a character string to an INTERVAL YEAR TO MONTH type
<b>TRANSLATE</b>('<i>char</i>','<i>search_str</i>','<i>replace_str</i>')
              Replace every occurrence of <i>search_str</i> with <i>replace_str</i>
              unlike REPLACE() if <i>replace_str</i> is NULL the function returns NULL
TRANSLATE (<i>text</i> USING <i>charset</i>)
              Convert <i>text</i> into a specific character set
              Use this instead of CONVERT() if either the input or output datatype
              is NCHAR or NVARCHAR2.
<b>TRIM</b>(LEADING|TRAILING|BOTH <i>trim_char</i> FROM <i>trim_source</i>)
              Return <i>trim_source </i>as a VARCHAR2 with leading/trailing items removed
              <i>trim_char </i>defaults to a space ' ' but can be numeric or char 'A' 
<a href="syntax-trunc.html">TRUNC</a>(<i>i,d</i>)    Truncate <i>i</i> to <i>d</i> decimal places (<i>d</i> defaults to 0)
<a href="syntax-trunc.html">TRUNC</a>(<i>date,<a href="syntax-fmt.html">fmt</a></i>) Truncate <i>Date </i>to nearest <i>fmt</i>.
UID           User id (a unique number)
UPPER(<i>char</i>)   Return characters in uppercase
USER          Return the current Username
USERENV('<i>option</i>')
              Can return any of the options: ENTRYID, SESSIONID,
              TERMINAL, LANGUAGE, ISDBA, LANG, INSTANCE, CLIENT_INFO

VALUE(<i>correlation_variable</i>)
              Return the object instance for a row of an object table 
              as associated with the correlation_variable (table alias)
VARIANCE([DISTINCT] <i>n</i>)
              Variance of <i>n</i>, ignoring NULLs
VSIZE(<i>expr</i>)   Value Size, returns the number of bytes used by each row of <i>expr</i>.
</pre>
<p>Examples</p>
<p>Return the left 4 characters from the column prod_code, like a <span class="code">left()</span> function in other languages:<br>
<span class="code">SQL&gt; select substr(prod_code,1,4) from sales;</span></p>
<p>Return the right 3 characters from the column prod_code, like a <span class="code">right()</span> function in other languages:<br>
<span class="code">SQL&gt; select substr(prod_code,-3) from sales;</span></p>
<p>Return the leftmost 2 digits of idnum:<br>
<span class="code">SQL&gt; select substr(to_char(idnum),1,2) from mytable; </span></p>
<p>This page is not an exhaustive list of all the functions available - to find a complete list of functions for a particular release of Oracle see <a href="http://docs.oracle.com/">docs.oracle.com</a> or run this query:<br>
<br>
SELECT distinct object_name <br>
FROM <a href="../orad/ALL_ARGUMENTS.html">all_arguments</a> <br>
WHERE package_name = 'STANDARD';</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-functions.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

