import React from 'react'

function Course() {
  return (
    <section id="services" className="  py-16 px-4 sm:px-10 lg:px-20">
      
  <div>
  <p className='text-black font-bold text-2xl'>course</p>
    <div className="w-full px-0 mx-0">
<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 lg:text-6xl">
Check Out the  <span className='text-[#FFB600]'>Course</span> Introduction
</h2>
  </div>
  <div className="mt-6 relative w-full" style={{ paddingTop: '56.25%' }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/uHbZkYWRDNI?si=wLFjnWPidYF8gX34"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
  
  <div className='flex justify-center items-center mt-4'>
    <button className='bg-[#FFB600] hover:bg-[#000000] hover:text-white transition duration-75 text-black px-20 py-4 rounded font-bold'>Watch full course on youtube</button>
  </div>

</div>
</section>
  )
}

export default Course