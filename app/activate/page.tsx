"use client"
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Activate() {
  const router = useRouter()
  const [status, setStatus] = useState('Verifying Card...')

  useEffect(() => {
    // This part grabs the ID from the URL manually
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    async function checkCard() {
      if (!id) {
        setStatus('No Card ID found. Scan again.')
        return
      }
      
      const { data } = await supabase
        .from('cards')
        .select('*')
        .eq('card_id', id)
        .single()

      if (data) {
        setStatus('Card Verified! Opening Dashboard...')
        setTimeout(() => router.push('/dashboard'), 1500)
      } else {
        setStatus('Invalid Card ID.')
      }
    }
    checkCard()
  }, [router])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '30px', border: '1px solid #eee', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0 }}>{status}</h2>
      </div>
    </div>
  )
}
