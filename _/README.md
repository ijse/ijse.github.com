# Syte for DocPad

Syte for [DocPad](http://docpad.org) is a skeleton that pulls in all its data from external sources. Unlike the original [Syte](http://rigoneri.github.com/syte/) by [Rodrigo Neri](https://github.com/rigoneri) the DocPad edition creates a static site that already contains all the data, making requests incredibly fast (no need to ajax everything which is very slow).


## Step 1. Clone & Install

1. [Install DocPad](http://docpad.org)

1. Clone the project and install dependencies

	``` bash
	git clone git://github.com/docpad/syte.docpad.git
	cd syte.docpad
	npm install
	```


## Step 2. Social Integrations

Create a `.env` file that contains:

```
FLICKR_USER_ID=35776898@N00
FLICKR_API_KEY=

INSTAGRAM_USER_ID=5876296
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_CLIENT_ID=

TUMBLR_BLOG=balupton.tumblr.com
TUMBLR_API_KEY=

SOUNDCLOUD_USERNAME=balupton
SOUNDCLOUD_CLIENT_ID=

VIMEO_USERNAME=balupton

GITHUB_USERNAME=balupton
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

TWITTER_USERNAME=balupton
```

And update the API Keys etc to your own values. Here are the links to get them:

- [Flickr](http://www.flickr.com/services/apps/create/noncommercial/?)
- [Instagram](http://instagram.com/developer/clients/register/)
- [Tumblr](http://www.tumblr.com/oauth/register)
- [Soundcloud](http://soundcloud.com/you/apps/new)
- [GitHub](https://github.com/settings/applications/new)


## Step 3. Run DocPad

``` bash
docpad run
```

[Open http://localhost:9778/](http://localhost:9778/)

