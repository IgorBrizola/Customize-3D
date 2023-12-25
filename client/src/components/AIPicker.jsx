import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt,generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
      placeholder='Digite seu estilo...'
      rows={5}
      
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className='aipicker-textarea'
      />

      <div className='flex flex-wrap gap-3'>
{generatingImg ? (
  <CustomButton
  type='outline'
  title='Gerando estilo IA...'
  customStyle="text-xs"
  />
) : (
  <>
  <CustomButton
  type="outline"
  title="Logo IA"
  handleClick={() => handleSubmit('logo')}
  customStyle="text-xs"
  />
  <CustomButton
  type="filled"
  title="Estampa IA"
  handleClick={() => handleSubmit('full')}
  customStyle="text-xs"

  />



  </>
)}
      </div>
      
      
      </div>
  )
}

export default AIPicker