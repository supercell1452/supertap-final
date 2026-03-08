"use client"
import { createClient } from '@supabase/supabase-js'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function ActivateContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get('id')
  const [status, setStatus] = useState('Checking card...')

  useEffect(() => {
    async function checkCard() {
      if (!id) {
        setStatus('No Card ID found. Please scan again.')
        return
      }
      
      const { data } = await supabase
        .from('cards')
        .select('*')
        .eq('card_id', id)
        .single()

      if (data) {
        setStatus('Card Verified! Redirecting...')
        setTimeout(() => router.push('/dashboard'), 2000)
      } else {
        setStatus('Invalid Card ID.')
      }
    }
    checkCard()
  }, [id, router])

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>{status}</h2>
    </div>
  )
}

export default function Activate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActivateContent />
    </Suspense>
  )
}
