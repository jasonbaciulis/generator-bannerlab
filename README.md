# Generator BannerLab 

Custom configuration of [Generator Bannertime ](https://github.com/pyramidium/generator-bannertime) with [AnimPanel](https://github.com/onedesign/anim-panel) implementation.

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

### Create a new banner format
```bash
yo bannerlab:new
```

### Copy existing banner and resize
```bash
yo bannerlab:copy
```

## What's changed:

* Added animation panel in the preview page allowing you to quickly debug and fine-tune your animations with GSAP.
* Removed scripts for polite loading.
* Custom configuration for HTML, CSS, JS templates.

For more information about Bannertime read [documentation](https://pyramidium.github.io/generator-bannertime/).