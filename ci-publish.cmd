@echo off
call publish
if errorlevel 1 (
   call alt-publish
)
@echo on