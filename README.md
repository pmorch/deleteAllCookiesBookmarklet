# deleteAllCookies: Bookmarklet to Delete Cookies for the Current Domain

Handy for mobile. Some sites are annoying and need the cookies cleared
sometimes. But I don't want to clear all cookies for all domains. Enter this
bookmarklet, because at least Chrome on Android does not let me delete all
cookies for a single domain.

Install it in Chrome and you can type `deleteAllCookies` in the addressbar (or
just the first few letters...) Gone are the all the cookies for this domain.
Refresh the page, and you're good to go with brand new cookies.

# Installation in Chrome for Mobile

Make sure you're logged into your desktop Chrome browser and the mobile with
the same username and that the bookmarks sync from the desktop to the mobile.
That happened automatically for me.

Now we're going to create a bookmark for this bookmarklet:

* Go to a random webpage on the desktop in Chrome, and hit `CTRL-D` for
  *Bookmark this page...*
* Click on the `Edit` button.
* Now change the `Name` of the bookmark to `deleteAllCookies`.
* Open `bookmarklet.txt` from this repo and copy the contents to the clipboard.
  Paste these contents as `URL` in the bookmark.
* Click `Save`.

Now go to the mobile. After "a while" (tm) the bookmarklet we've just created
will be synced to the mobile. This can be hurried along by going to Menu -->
Desktop Bookmarks, then Menu --> and click the refresh icon. That'll force the
sync (it did for me at least).

See more e.g. at [How to Use Bookmarklets in Chrome for
Mobile](http://www.labnol.org/software/google-chrome-bookmarklets/27894/)

# Building the Bookmarklet from Source

I've included `deleteAllCookiesSource.js` which is the source. I guess I
could've encoded it properly with a little script, but I just copied the
contents of the above file, went to Peter Coles' [Bookmarklet Creator with
Script Includer](http://mrcoles.com/bookmarklet/), pasted the contents and
pressed `Convert to bookmarklet` to create the contents of `bookmarklet.txt`
there. Easy.

# Caveat
This cannot delete any
[HttpOnly](https://en.wikipedia.org/wiki/HTTP_cookie#Secure_and_HttpOnly)
cookies. Sorry.
