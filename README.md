# About Eleventy Plugin SEO

An [Eleventy](https://github.com/11ty/eleventy) plugin to generate meta tags for improved SEO using the Liquid templating engine.

[![GitHub Actions](https://github.com/artstorm/eleventy-plugin-seo/workflows/CI/badge.svg)](https://github.com/artstorm/eleventy-plugin-seo/actions)
[![GitHub Actions](https://github.com/artstorm/eleventy-plugin-seo/workflows/style/badge.svg)](https://github.com/artstorm/eleventy-plugin-seo/actions)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

_I wrote this plugin when moving from Jekyll to Eleventy to get the functionality I previously had with Jekyll SEO Tag._

## Installation

Available on [npm](https://www.npmjs.com/package/eleventy-plugin-seo):

```sh
npm install eleventy-plugin-seo --save
```

Add the plugin to `.eleventy.js`:

```js
const pluginSEO = require("eleventy-plugin-seo");

module.exports =  function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSEO);
};
```

## Usage

Add the following right before `</head>` in your site's template(s):

```liquid
{% seo %}
```

Done!

## Additional Tags

While adding the `seo` tag is all that is needed, the plugin defines more liquid tags that it uses internally that can be convenient to use in other places.

The following tags are supplied by the plugin.

### `canonicalURL [url]`

Uses: `site.url`

```liquid
{% canonicalURL %}
{% canonicalURL /feed.xml %}
{% canonicalURL post.url %}
```

Use without arg to canonical url for current page
```
<link rel="canonical" href="{% canonicalURL %}">
```

Use with arg to link to a specific page, like feed.xml

```liquid
<link type="application/atom+xml" rel="alternate" href="{% canonicalURL /feed.xml %}" title="{{ site.title }}" >
```

Use with eleventy data arg, like post.url that resolves to the current url in places like feed.liquid or sitemap.liquid
```liquid
// from feed.liquid
<link>{% canonicalURL post.url %}</link>

// from sitemap.liquid
<loc>{% canonicalURL item.url %}</loc>
```
