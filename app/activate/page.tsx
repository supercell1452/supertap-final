"use client"
import { createClient } from '@supabase/supabase-js'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Activate() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get('id')
  const [status, setStatus] = useState('Checking card...')

  useEffect(() => {
    async function checkCard() {
      if (!id) {
        setStatus('No Card ID found. Please scan your card again.')
        return
      }
      
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('card_id', id)
        .single()

      if (data) {
        setStatus('Card Verified! Redirecting to setup...')
        setTimeout(() => router.push('/dashboard'), 2000)
      } else {
        setStatus('Invalid Card. This card is not in our system.')
      }
    }
    checkCard()
  }, [id, router])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h2>{status}</h2>
      </div>
    </div>
  )
}
