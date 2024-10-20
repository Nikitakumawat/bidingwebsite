import React from 'react'
import Banner from './Partials/Banner';
import Catalogue from './Partials/Catalogue';

function LandingPage() {
  return (
    // <div className='flex flex-col  text-center items-center justify-center full-width-wrapper gap-10 mt-5'>
    //   <Banner/>
    //   <Catalogue/>
    // </div>
//     <div className='className="flex flex-col md:flex-row h-screen w-screen m-3'>
//     <div className=' h-[104px]'>
//       <Banner/>
//     </div>
//     <br/>
//     <div className='mt-8'>
//       <Catalogue/>
//     </div>
//   </div>
<div className='flex flex-col min-h-screen  py-8 px-4 full-width-wrapper'>
      <div className='flex-grow flex items-stretch overflow-hidden'>
        <Banner/>
      </div>
      <div className='mt-8'>
        <Catalogue/>
      </div>
    </div>
  )
}

export default LandingPage;
