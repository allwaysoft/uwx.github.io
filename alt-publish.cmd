FOR /F "tokens=* USEBACKQ" %%F IN (`git subtree split --prefix=public --onto=origin/master`) DO (
SET tid=%%F
)
git push origin %tid%:master