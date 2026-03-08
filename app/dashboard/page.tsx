"use client"
import { useState } from 'react'

export default function Dashboard() {
  const [tiktok, setTiktok] = useState('')
  const [instagram, setInstagram] = useState('')

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Create Your Profile</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Add your social media handles below.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          placeholder="TikTok Username (e.g. @user)" 
          style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }}
          onChange={(e) => setTiktok(e.target.value)}
        />
        <input 
          placeholder="Instagram Username" 
          style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <button 
          onClick={() => alert(`Saved! TikTok: ${tiktok}, IG: ${instagram}`)}
          style={{ padding: '15px', borderRadius: '12px', background: 'black', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Save & Activate Card
        </button>
      </div>
    </div>
  )
}
