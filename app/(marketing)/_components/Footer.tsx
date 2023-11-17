import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full p-4 border-t shadow-sm bg-slate-100 flex items-center'>
        <div className='md:max-w-2xl mx-auto flex items-center w-full justify-between'>
            <Logo />
            <div className='space-x-4 md:block md:w-auto flex items-center w-full justify-between'>
                <Button variant='ghost'>
                    Privacy Policy
                </Button>
                <Button variant='ghost'>
                    Terms of Service
                </Button>
            </div>
        </div>
    </div>
  )
}

