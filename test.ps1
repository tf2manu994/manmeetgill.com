﻿Start-Process powershell.exe -ArgumentList "jekyll build --watch"
cd .\_site\
live-server --port=4000 --browser="%PROGRAMFILES(X86)%\Firefox Developer Edition\firefox.exe"