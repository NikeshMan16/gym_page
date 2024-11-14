import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title} = props
  return (
    <section className='min-h-screen flex flex-col gap-8'>
        <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center'>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='font-semibold text-3xl sm:4xl md:5xl lg-6xl '>
                {title[0]} 
                <span className='uppercase text-blue-400'> {title[1]} </span> 
                <span>{title[2]}</span>

            </h2>

        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-8'>
            {children}

        </div>

    </section>
  )
}
