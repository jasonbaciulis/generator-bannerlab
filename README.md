# Generator BannerLab

Custom configuration of [Generator Bannertime ](https://github.com/pyramidium/generator-bannertime) with [ScrubGSAPTimeline](https://github.com/chrisgannon/ScrubGSAPTimeline) implementation.

## What's changed:

* Added ScrubGSAPTimeline in the preview page allowing you to scrub through a timeline using your mouse to debug and fine-tune your GSAP animations quickly.
* Custom configuration for HTML, CSS, JS templates.
* Added support for two new platforms: Adnet and Gemius.
* Added pngquant image optimization.

## Getting started

### Install bannerlab:
```bash
npm i -g yo generator-bannerlab gulp yarn
```

### Create a new directory:
```bash
mkdir your-project
```

### Run the generator:
```bash
yo bannerlab
```

## Usage

### Create a new banner format:
```bash
yo bannerlab:new
```

### Copy existing banner and resize:
```bash
yo bannerlab:copy
```

### Gulp tasks

Use `gulp` to automatically launch the banner into the browser with browsersync, all your changes will be reflected in the browser with each file save.

Use `gulp prod` to generate a ZIP file of all the assets of the banner, these will all have been minified as well.

## ScrubGSAPTimeline

* To let the timeline play automatically, move your mouse outside the document.
* Moving your mouse off the document at, say, halfway along the X axis, will play the timeline from that percentage of the timeline (i.e. halfway through the timeline's duration).
* Double click to pause scrubbing. Double click again to unpause.


For more information about Bannertime read [documentation](https://pyramidium.github.io/generator-bannertime/).