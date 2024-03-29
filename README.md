# Learning Web Video and Image

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Web video playback, web video manipulation, web image manipulation, and connecting video to CSS animations.

```bash
git clone https://github.com/hchiam/learning-web-video-and-image.git
cd learning-web-video-and-image
yarn
yarn start
# Control+c
# yarn stop
```

## Learning from

### (for video:)

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

- <https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-1/>
  - Prepare different-sized videos for mobile (Smaller is faster to load and also less choppy to play back.): none, small, big video file in `src`, and `<video>` dimensions.
  - Omit audio if possible. Prefer silent videos to videos with audio. (Less to download.)
  - Compress video.
  - YouTube and Vimeo download playback setup, but not actual video until user hits play.
  - If streaming, default to lowest quality for fast playback.
- <https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/#conclusion>
  - `preload="none"` -> do NOT store any part of the video until requested by the user, for faster page startup, at the cost of a delay in video startup: **I'd personally recommended this in most cases. Recommended for long videos.** (YouTube does this.)
    - ```html
      <video
        preload="none"
        width="100%"
        muted
        controls
        src="http://res.cloudinary.com/dougsillars/video/upload/w_960/v1534228645/30s4kbbb_oblsgc.mp4"
      />
      ```
  - `preload="metadata"` -> store initial segment of video locally, for faster startup of page but also of video: **only use if the video is highly likely to be watched, or if the video is small, because large video = large initial segment. A good balance but should be monitored.**
    - ```html
      <video
        preload="metadata"
        width="100%"
        muted
        controls
        src="http://res.cloudinary.com/dougsillars/video/upload/w_960/v1534228645/30s4kbbb_oblsgc.mp4"
      />
      ```
  - `preload="auto"` -> avoid network problems by storing entire video locally: **only use if the video is very highly likely to be watched.**
- <https://www.smashingmagazine.com/2013/11/the-future-of-video-in-web-design/>

  - Demo of connecting video to HTML elements and triggering CSS animations: <https://www.sketchingwithcss.com/flexbox/> uses [charlie.js](https://github.com/sfioritto/charlie.js), e.g.: to run grow and then shrink CSS `@keyframes` animations: `<div class="charlie" data-animations="grow, shrink" data-times="40.2, 90.3"></div>` and `CHARLIE.setup(document.getElementById("video")); CHARLIE.addCallback(() => {...}, 43.2);`
    - **_NOTE:_** using charlie.js and `<video>` is not tested to be fully cross-browser compatible.

- <https://codepen.io/hchiam/pen/ZEWrEJd> demo of video that looks like a looping gif but is actually a video playing that you can even click on to pause it or click it again to resume play.

### (for image:)

- [p5.js](https://p5js.org/reference/#/p5/filter)
  - You can do things like blur, filter, etc.
- [Jimp](https://github.com/oliver-moran/jimp): <https://www.npmjs.com/package/jimp>
- [Canvas](https://github.com/hchiam/learning-canvas) and [WebGL](https://github.com/hchiam/learning-webgl)

- `<img loading="lazy">` for images that start off-screen https://www.w3schools.com/tags/att_img_loading.asp

- see https://github.com/hchiam/learning-css for `src`, `srcset`, `source` with resolution or layout width https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/

---

## Other notes

[![generator-hchiam-learning](https://img.shields.io/badge/built%20with-generator--hchiam--learning-brightgreen.svg)](https://github.com/hchiam/generator-hchiam-learning)

You can generate a [dependency graph](https://github.com/hchiam/learning-dependency-cruiser) with `npm run deps` (which runs `bash show_dep_graph.sh`).

You can publish a live site to [surge](https://github.com/hchiam/learning-surge) with `bash publish_live_site.sh` (Just go into the relevant enclosing `src` or `public` folder of your site files - a CNAME file is there for convenience).

You can zip the current folder with `npm run zip`.

This file was first created using the Yeoman generator [`generator-hchiam-learning`](https://www.npmjs.com/package/generator-hchiam-learning).

WebVTT (Web Video Text Tracks) Format <https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API> is most flexible, lets you set caption preferences like color/size.
