import React from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'
import { TiMinus } from 'react-icons/ti'

function UsersAnalyticsCard({analytic}) {
  return (
    <div className={`${analytic.title.toLowerCase().includes("page")?"bg-[#303030] border-[2px] border-[#636363] text-[#F9F9F9]":"bg-[#F2F2F7] text-[#1C1C1E]"} font-[Inter] flex flex-col items-center justify-center gap-2 p-4 rounded-[20px]`}>
        <h3 className=' text-lg font-medium'>{analytic.title}</h3>
        <h2 className=' text-2xl font-semibold flex items-center gap-2'>{analytic.stats} {analytic.title.toLowerCase().includes("page")?<TiMinus className ="text-[#F9F9F9]"/>:<BsFillTriangleFill className="text-[#00C48C]" />}</h2>
        <p className='font-medium text-sm '>from {analytic.number}</p>
      
    </div>
  )
}

export default UsersAnalyticsCard
