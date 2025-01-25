import React from 'react'

const Upload = () => {
    const images = [2,3,4]
  return (
    <div className="max-w-[400px] mx-auto space-y-6 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-8">
            Upload an image to remove the background
        </h1>
        <label htmlFor="upload" className=""><span className="bg-blue-600 px-5 py-2 inline-block text-xl rounded-full transform hover:scale-105 transition duration-300 cursor-pointer">Upload Image</span><input className="hidden" name="upload" type="file" id="upload" /></label>
        <span className="block text-lg font-bold">Or drop a file</span>
        <span className="block text-sm font-semibold text-gray-500">Paste img or <a>Url</a></span>
        <div className="space-y-4">
            <h1>No images? Try these ones</h1>
            <ul className="flex justify-center space-x-3">
                {images.map((image, index)=>{
                    return(
                        <li><img src="/img" alt={`this is img${index}`} /></li>
                    )
                })}
            </ul>
            <p className="text-sm max-w-[600px] mx-auto text-gray-500 text-center">By uploading an image or URL you agree to our <a target="_blank" class="text-typo-secondary underline" draggable="false" href="https://www.remove.bg/tos">Terms of Service</a>.
To learn more about how remove.bg handles your personal data, check our <a target="_blank" rel="noopener" class="underline"  href="https://www.remove.bg/privacy">Privacy Policy</a>.
            </p>
        </div>
    </div>
  )
}

export default Upload