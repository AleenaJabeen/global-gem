import React from 'react'
import VisitChart from './VisitChart'
import UsersAnalyticsCard from './UsersAnalyticsCard'
import DonutChart from './DonoutChart'

function Analytics() {
  const analytics=[
    {
      title:"Total User",
      stats:"60,549",
      number:"54,494"
    },
    {
      title:"AVG. Click Rate",
      stats:"58,549",
      number:"52,494"
    },
    {
      title:"Page View",
      stats:"50,549",
      number:"50,494"
    }

  ]
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6'>
        {analytics.map((analytic,index)=>{
          return (<UsersAnalyticsCard analytic={analytic} key={index}/>);
        })}

      </div>
      <h2 className='text-[#1C1C1E] font-[Inter] font-semibold text-base pb-3'>Ads Management</h2>
      <VisitChart/>
       <h2 className='text-[#1C1C1E] font-[Inter] font-semibold text-base pt-5'>Sentiment</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 gap-4'>
        <DonutChart/>
        <DonutChart/>
        <DonutChart/>

      </div>

      
    </div>
  )
}

export default Analytics
