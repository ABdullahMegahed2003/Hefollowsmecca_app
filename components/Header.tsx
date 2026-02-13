export default function Header() {
  return (
    <header className="relative w-full h-[90vh] overflow-hidden">
      
      <video
        className=" w-full h-[80%] 
"
        src="/Video-logo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40"></div>

    </header>
  )
}
