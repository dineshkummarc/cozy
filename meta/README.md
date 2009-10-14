### Deprecated

This direcotry is deprecated. It will prebably be deleted in the future.

- "forms" will move to _attachments/pages
- "code" will move to lib/meta
- "security" - didn't decide yet


### Application data ###

- "./code/" - the code used with the app meta-data;
- "./forms/" - the app entities meta-data;
- "./security/" - an app-level security model.


### Meta-forms ###

For each app entity there is a directory that holds the JsonHtml meta-data files
which combined and translated to HTML should form pages for CRUD.

- "./forms/default/" - will probably hold the common parts for pages;
- "./forms/lib/" - a JsonHtml file that generates the script tags for commonly
  used Javascript libraries and/or utilities; just a drop of DRYing.
