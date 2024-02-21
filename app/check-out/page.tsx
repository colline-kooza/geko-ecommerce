import CheckoutPageTwo from '@/components/checkOutcomponents/Checkoutpage2'
import React from 'react'
import CheckoutPageOne from '@/components/CheckOutComponents/Checkoutpage1'
import CheckOutNav from '@/components/CheckOutComponents/CheckOutNav'
import { Star } from 'lucide-react'
export default function page() {
  return (
    <div className="w-screen">
      <CheckOutNav/>
      <CheckoutPageOne/>
      <CheckoutPageTwo/>
    </div>
  )
}
