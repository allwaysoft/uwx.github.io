@rem set git data
git config --global user.email "bbbbbbenes@outlook.com.br"
git config --global user.name "Appveyor Automated Build"

@rem set date
For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
For /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)

@rem clone gh pages branch
mkdir %USERPROFILE%\master
git clone --quiet --branch=master https://github.com/rafa1231518/rafa1231518.github.io %USERPROFILE%\master

@rem override public data and add to git
robocopy public %USERPROFILE%\master /E /IS /NDL
cd %USERPROFILE%\master
dir
git add -f .

@rem commit it
git commit -m "Built page at %mydate%_%mytime% [skip ci]"
git push origin master