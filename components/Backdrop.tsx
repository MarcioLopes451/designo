import React from 'react';

type Nav = {
    isOpen: boolean
    onClose: () => void
}

export default function Backdrop({isOpen, onClose} : Nav) {
  return (
    <div onClick={onClose} className='fixed z-50 left-0 h-full bg-trans' style={{top:'336px', width:'375px'}}></div>
  )
}