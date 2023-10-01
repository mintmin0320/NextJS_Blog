const Video = () => {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      className="hidden md:block absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1] opacity-50"
    >
      <source src="/static/images/background.mp4" type="video/mp4" />
    </video>
  )
}

export default Video
