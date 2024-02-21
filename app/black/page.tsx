"use client"
import CheckoutPageOne from '@/components/CheckOutComponents/Checkoutpage1'
import CheckoutPageTwo from '@/components/CheckOutComponents/checkoutpage2'
import PaymentSelectionSection from '@/components/cart-page/Payment'
import React from 'react'

export default function page() {
  return (
    <div className='bg-green-200'>
      <PaymentSelectionSection/>
      <CheckoutPageOne/>
      <CheckoutPageTwo/>
    </div>
  )
}
