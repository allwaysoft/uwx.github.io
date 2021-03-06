---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Create Date Dimension</h1>
<p>The script below creates and populates a date table containing records 
at one day intervals for a range of years.


The table contains a single datetime  
column and many other columns created with calculated attributes. All the additional columns are PERSISTED in the table for better performance.
This make it convenient to get various commonly 
used date attributes from the data warehouse without having to program and test 
the same logic in many reports/applications.</p>
<p>First create an empty table (called dimDates) with this <a href="syntax-dimdates-create.html">Create Table script</a></p>
<pre>USE [SS64_DATA_WAREHOUSE]
GO
Delete FROM DimDates
-- declare variables to hold the start and end date
DECLARE @StartDate datetime
DECLARE @EndDate datetime
DECLARE @LoopDate datetime
-- Assign values to the start date and end date we want our reports to 
-- cover, take into account future reporting needs.
SET @StartDate = CAST('<b>1995</b>-01-01T00:00:00.000' AS datetime)
SET @EndDate = CAST('<b>2025</b>-12-31T00:00:00.000' AS datetime)
SET @LoopDate = @StartDate

-- Use a while loop to increment from the start to the end date
WHILE @LoopDate &lt;= @EndDate
  BEGIN
     -- add a record into the date dimension table for this date
    INSERT INTO DimDates (ActualDate) VALUES (@LoopDate)  
     -- increment the LoopDate by 1 day
    SET @LoopDate = DateAdd(day, 1, @LoopDate)
  END

-- check how this looks in the table
SELECT * FROM DimDates order by [ActualDate]</pre>
<p class="quote"><i>“I don't understand how a woman can leave the house without fixing herself up a little - if only out of politeness. And then, you never know, maybe that's the day she has a date with destiny. And it's best to be as pretty as possible for destiny” ~ Coco Chanel</i></p>
<p><b>Related</b></p>
<p><a href="syntax-dimtimes.html">Time Dimension</a><br>
<a href="http://www.made2mentor.com/2011/04/calendar-tables-why-you-need-one/">Calendar Table</a> - with Year, Month, Week, weekday etc<br>
Sources/Linkage: <a href="http://stackoverflow.com/questions/1803561/deterministic-scalar-function%20%20-to-get-day-of-week-for-a-date">weekday calculation</a>, <a href="http://msmvps.com/blogs/robfarley/archive/2009/12/08/t-sql-tuesday-a-date-dimension-table-with-computed-columns.aspx">persisted columns</a>, <a href="http://www.bidn.com/blogs/DevinKnight/ssis/1243/date-dimension-using-computed-columns">computed columns</a> <br>
</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-dimdates.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

