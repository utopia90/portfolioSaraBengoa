import React from 'react'
import './SectionTitle.styles.scss'

export default function SectionTitle({sectionTitle}) {
  return (
    <h1 className='sectionTitleContainer'>{sectionTitle} <span class="dot">.</span></h1>
  )
}
