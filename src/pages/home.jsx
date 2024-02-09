import React from 'react'
import Button from '../components/Button'
import Card from '../components/card'

function HomePage() {
  return (
    <div className='absolute md:ml-[19%] ml-[30%]'>
        <h3 className='text-white text-[24px]'></h3>
        <div className='flex flex-row justify-start  gap-10 my-10'>
<Button>Set criteria</Button>
<Button>Events archive</Button>
   </div>
   <h3 className='text-white text-[28px] py-8'>Welcome !</h3>
<Cardhome time="48 minutes ago"></Cardhome>
   </div>
  )
}

function Cardhome (props){
return(
    <Card>
    <div className='flex flex-row justify-start align-middle items-center mb-'>
        <img src="GDGicon.svg" alt="" />
        <div className='flex flex-col text-left ml-5'>
            <h4 className='font-semibold text-[18px]'>GDG Algiers</h4>
            <h6 className='text-[12px]'>{props.time}</h6>
        </div>
    </div>
    <p className='font-semibold'>Good evening Participant I hope you're doing well. Here is the hacker guide of the first edition of GDG Hack!
Good luck and have a good hacking!  Thank you for your attention.</p>
   </Card>
)
}

export default HomePage