This is a fork of [ClearURLs/Addon](https://github.com/ClearURLs/Addon) with some modifications. The
main change is moving the data/rule files to this repo instead of loading them from a gitlab page
that the original author hosts. This removes the risk of a bad actor gaining control over that URL
and making changes that lead to arbitrary code execution or redirecting your browser to arbitrary
URLs.

## Install

**Firefox**
* I have a signed xpi that you can immediately install. Open `build/` and drag the xpi into Firefox.
  It may take a few seconds for the browser to display the extension installation dialog box.
* You can also find the signed Firefox files in the project's [Releases page](https://github.com/sir-pinecone/clear-urls-browser-extension/releases).

**Chrome**
* Go to Chrome extensions page.
* Toggle the developer mode (top-right of page). 
* Click `Load unpacked`.
* Select this project's root folder.

## Development

### Local Testing

* Firefox: open about:debugging and click `Load Temporary Add-on...` then select `manifest.json` file.
* Chrome: follow the install steps from above.

## Signing and Building

### Firefox
* Install web-ext with `$ npm install --global web-ext`
* Generate an unlisted xpi with:
  `web-ext sign --api-key <your JWT issuer> --api-secret <your JWT secret>`
    * You can obtain these keys from https://addons.mozilla.org/en-US/developers/addon/api/key/
* The signed xpi will be in `web-ext-artifacts/`. Drag this into Firefox to install it.
* Alternatively use the private sign-firefox-extension.sh script (not included in the repo) which places the xpi in `build/`.

---

**ClearURLs** is an add-on based on the new WebExtensions technology and is optimized for *Firefox* and *Chrome* based browsers.

This extension will automatically remove tracking elements from URLs to help protect your privacy when browse through the Internet,
which is regularly updated by us and can be found [here](https://gitlab.com/anti-tracking/ClearURLs/rules/-/raw/master/data.min.json).

## Application
Many websites use tracking elements in the URL (e.g. `https://example.com?utm_source=newsletter1&utm_medium=email&utm_campaign=sale`) to mark your online activity.
All that tracking code is not necessary for a website to be displayed or work correctly and can therefore be removed—that is exactly what ClearURLs does.

Another common example are Amazon URLs. If you search for a product on Amazon you will see a very long URL, such as:
```
https://www.amazon.com/dp/exampleProduct/ref=sxin_0_pb?__mk_de_DE=ÅMÅŽÕÑ&keywords=tea&pd_rd_i=exampleProduct&pd_rd_r=8d39e4cd-1e4f-43db-b6e7-72e969a84aa5&pd_rd_w=1pcKM&pd_rd_wg=hYrNl&pf_rd_p=50bbfd25-5ef7-41a2-68d6-74d854b30e30&pf_rd_r=0GMWD0YYKA7XFGX55ADP&qid=1517757263&rnid=2914120011
```

Indeed most of the above URL is tracking code. Once ClearURLs has cleaned the address, it will look like this:
`https://www.amazon.com/dp/exampleProduct`

## Features

* Removes tracking from URLs automatically in the background
* Blocks some common ad domains (optional)
* Has a built-in tool to clean up multiple URLs at once
* Supports redirection to the destination, without tracking services as middleman
* Adds an entry to the context menu so that links can be copied quickly and cleanly
* Blocks hyperlink auditing, also known as *ping tracking* (see also [this article](https://html.spec.whatwg.org/multipage/links.html#hyperlink-auditing))
* Prevents ETag tracking
* Prevents tracking injection over history API (see also: [The replaceState() method](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_replaceState()_method))
* Prevents Google from rewriting the search results (to include tracking elements)
* Prevents Yandex from rewriting the search results (to include tracking elements)

## Permissons
Reasoning for needed permissions can be found under [here](https://gitlab.com/KevinRoebert/ClearUrls/issues/159).

## Copyright
We use some third-party scripts in our add-on. The authors and licenses are listed below.
-   [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill) |
    Copyright by Mozilla |
    [MPL-2.0](https://github.com/mozilla/webextension-polyfill/blob/master/LICENSE)
-   [Bootstrap v4.3.1](https://github.com/twbs/bootstrap/tree/v4.3.1) |
    Copyright 2011-2016 Twitter, Inc. |
    [MIT](https://github.com/twbs/bootstrap/blob/master/LICENSE)
-   [jQuery v3.4.1](https://github.com/jquery/jquery/tree/3.4.1) |
    Copyright JS Foundation and other contributors |
    [MIT](https://jquery.org/license/)
-   [DataTables v1.10.20](https://github.com/DataTables/DataTables/tree/master) |  Copyright (c) 2008-2015 SpryMedia Limited | [MIT](https://datatables.net/license/)
-   [Pickr v1.7.0](https://github.com/Simonwep/pickr/tree/1.7.0) | Copyright (c) 2018 - 2020 Simon Reinisch |
    [MIT](https://github.com/Simonwep/pickr/blob/master/LICENSE)
-   [Font Awesome v5.12.0](https://github.com/FortAwesome/Font-Awesome/tree/5.12.0) | Copyright (c) @fontawesome |
    [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt)
