import HomeHeader from '@/component/HomeHeader'
import HomeSearch from '@/component/HomeSearch'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <>
            <HomeHeader />
            {/* body */}
            <div className='flex flex-col items-center mt-24'>
                <Image width='300' height='100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' />
                <HomeSearch />
            </div>
        </>
    )
}

export default page
