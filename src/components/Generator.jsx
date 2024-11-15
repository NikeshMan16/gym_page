import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'

export default function Generator() {


    const [showModal, setShowModal] = useState(false)
    const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goals, setGoals] = useState('strength_power')

    function toggleModal(){
        setShowModal(!showModal)
    }

    function Header(props){

        const { index, title, description} = props


        return(
        <>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-center gap-2'>
                    <p className='text-3xl sm:4xl md:5xl font-semibold text-slate-400'>{index}</p>
                    <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
                </div>
                <p className='text-sm sm:text-base mx-auto'>{description}</p>
            </div>
        </>
        )
    }

  return (

    <SectionWrapper header = {"generate your workout"} title = {['It\'s','Huge', 'o\'clock']}>

       <Header index={'01'} title={'Pick you poison'}
       description= {'Select the workout you wish to endure!'} />

       <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

       {Object.keys(WORKOUTS).map((type, typeIndex) => {
           return(
               <button onClick={()=> {
                    setPoison(type)
               }}
               className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? ' border-blue-700' : ' border-blue-400')} key={typeIndex}>
                <p className='capitalize'>{type.replaceAll('_',' ')}</p>
            </button>
        )
    })}
    </div>


    <Header index={'02'} title={'Lock on targets'}
       description= {'Select the muscles judged for training '} />

       <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
            <button onClick={()=>{
                toggleModal()

            }} 
            className='relative p-3 flex items-center justify-center'>
                <p>Select muscles groups</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
            </button>
            {showModal && (
                <div>
                    Modal
                </div>
            )}
        </div>

     <Header index={'03'} title={'Become Juggernaut'}
       description= {'Select your ultimate objective!'} />

       <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>

       {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
           return(
               <button onClick={()=> {
                setp
               }} 
               className='bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600' key={schemeIndex}>
                <p className='capitalize'>{scheme.replaceAll('_',' ')}</p>
            </button>
        )
    })}
    </div>


    </SectionWrapper>
  )
}
