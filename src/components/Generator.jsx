import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Generator() {

    function Header(props){

        const { index, title, description} = props


        return(
        <>
            <div className='flex flex-col gap-4'>
                <div className='flex items-centers gap-2'>
                    <p className='text-3xl sm:4xl'>{index}</p>
                    <h4 className='text-lg sm:tex-2xl md:text-3xl'>{title}</h4>
                </div>
                <p className=''>{description}</p>
            </div>
        </>
        )
    }

  return (

    <SectionWrapper header = {"generate your workout"} title = {['It\'s','Huge', 'o\'clock']}>

       <Header index={'01'} title={'Pick you poison'}
       description= {'Select the workout you wish to endure'} />
       
    </SectionWrapper>
  )
}
