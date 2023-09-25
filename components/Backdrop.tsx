import React from 'react';

type Nav = {
    isOpen: boolean
    onClose: () => void
}

export default function Backdrop({isOpen, onClose} : Nav) {
  return (
    <div onClick={onClose} className='absolute z-50 left-0 h-full bg-trans w-full' style={{top:'336px'}}></div>
  )
}