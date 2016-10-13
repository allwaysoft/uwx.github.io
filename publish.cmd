git subtree pull --prefix public origin master && git subtree push --prefix public origin master
if errorlevel 1 (
   exit /b %errorlevel%
)