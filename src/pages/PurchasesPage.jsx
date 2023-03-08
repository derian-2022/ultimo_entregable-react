import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../utils/getConfig'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'

const PurchasesPage = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.get(url, config)
        .then(res => setPurchases(res.data))
        .catch(err => console.log(err.response))
  }, [])
  
  return (
    <div className='purchase'>
        <div className='purchase__container'>
            {
                purchases?.map(purchase => (
                    <PurchaseCard 
                        key={purchase.id}
                        purchase={purchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage