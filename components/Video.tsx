const Video = () => {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      src="/static/images/background.mp4"
      className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1] opacity-50"
    />
  )
}

export default Video
