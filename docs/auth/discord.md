# Discord OAuth

The Canonn API uses the Discord OAuth2 authentication API, the core reason for this choice was to allow for easier communication related to science data. While currently we do support submitting reports without authentication, the CMDR may not receive proper credit for their find if we cannot verify the source.

The secondary reason for this choice was to provide better security by not storing any personal information of the user on our servers. With the rise of GDPR in Europe and user privacy we have made the choice to forgo storing any user data except for Canonn Administrators or Moderators which still use typical authentication methods.

## Setting up Auth for the Canonn API

::: warning
We are currently still working on our authentication process.
Check back for futher updates
:::
