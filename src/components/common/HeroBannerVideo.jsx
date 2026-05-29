const BANNER_VIDEO_SRC = `${process.env.PUBLIC_URL}/assets/banner.mp4`;

const HeroBannerVideo = () => (
  <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={BANNER_VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
);

export default HeroBannerVideo;
