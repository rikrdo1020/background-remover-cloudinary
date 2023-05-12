
import { useContext, useEffect } from 'react'
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
import { Cloudinary } from '@cloudinary/url-gen'
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'
import { ImageStatus } from '../store/types'
import { ImageContext } from '../store/ImageContext'


export const StepUpload = () => {

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

    const { data, setData } = useContext(ImageContext)
    const cloudinary = new Cloudinary({
      cloud: {
        cloudName
      },
      url: {
        secure: true
      }
    })
    useEffect(() => {
        console.log('Test')
        Dropzone.autoDiscover = false;
      const dropzone = new Dropzone( '#dropzone', {
        uploadMultiple: false,
        acceptedFiles:'.jpg, .png, .webp',
        maxFiles: 1,
      })

      dropzone.on('sending',(file, xhr, formData) => {
        setData({...data, imageStatus: ImageStatus.UPLOADING})
        formData.append('upload_preset', uploadPreset)
        formData.append('timestamp', (Date.now()/1000))
        formData.append('api_key', apiKey)
      })

      dropzone.on('success', (file, response) => {
        const { public_id: publicId, secure_url: url} = response

        const imageWithoutBackground = cloudinary
          .image(publicId)
          .effect(backgroundRemoval())

        setData( {
          imageStatus: ImageStatus.DONE, 
          originalImage: url, 
          modifiedImage: imageWithoutBackground.toURL()
        })
      })
      dropzone.on('error', (file, response) => {
        console.log('Ha ido mal')
        console.log(response)
      })
    }, [])
    
  return (
    <form 
        id='dropzone' 
        className='shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col'
        action='https://api.cloudinary.com/v1_1/djzgnijd4/image/upload'
    >
        {
            data.imageStatus === ImageStatus.READY &&
            <>
                <button className='pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4'>
                    Upload files
                </button>
                <strong className='text-lg mt-4 text-gray-800'>or drop a file</strong>
            </>
        }

        {
            data.imageStatus === ImageStatus.UPLOADING && <strong className='text-lg mt-4 text-gray-800'>Uploading file...</strong>
        }
        
        
    </form>
  )
}
