
import { useContext } from 'react'
import './App.css'
import { CloudinaryLogo } from './CloudinaryLogo'
import { StepUpload } from './components/StepUpload'
import { ImageContext } from './store/ImageContext'
import { StepEdit } from './components/StepEdit'
import { ImageStatus } from './store/types'

function App() {
  const { data } = useContext(ImageContext)
  return (
    <div className='max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-screen'>
      <header className='flex justify-center py-10'>
        <h1 className='text-3xl font-bold text-blue-900 tracking-tighter'>Background<span className='text-blue-600'>Remover</span></h1>
      </header>

      <main>
        {
          data.imageStatus === ImageStatus.READY || data.imageStatus === ImageStatus.UPLOADING
          ? <StepUpload/>
          : <StepEdit />
        }
        
      </main>

      <footer className='flex justify-center items-center gap-x-2 font-semibold pt-10'>
        Hecho con <a href='https://cloudinary.com/' target="_blank" rel='noreferrer'> <CloudinaryLogo/> </a>
      </footer>
    </div>
  )
}

export default App
