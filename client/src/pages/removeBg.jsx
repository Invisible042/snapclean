
import React, { useState } from 'react';
import axios, { formToJSON } from 'axios'

const RemoveBg = () => {
    const [processImage, setProcessImage] = useState(null);
    const [removedBg, setRemovedBg] = useState(null)

    // Handle file selection
    const handleChange =async (e)=>{
        e.preventDefault()
        const image = e.target.files[0]
        if(!image) return
        const imageUrl = URL.createObjectURL(image)
        setProcessImage(imageUrl)
        const formData = new FormData()
        formData.append("file", image)

        try {
            console.log(formData)

            const response =await axios.post('http://localhost:3001/removeBg', formData, {
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                responseType:'blob'
            })
            console.log(response.data)
            const processedImageUrl = URL.createObjectURL(response.data)
            setRemovedBg(processedImageUrl)
        }
        catch(err){
            console.log("could not process")
        }
       
    }

    // Sample images (assuming they are URLs)
    const sampleImages = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/250"
    ];

    return (
        <div className="max-w-[400px] mx-auto space-y-6 mt-16 text-center">
            <h1 className="text-3xl font-bold mb-8">
                Upload an image to remove the background
            </h1>

            {/* File upload button */}
            <label htmlFor="upload">
                <span className="px-5 py-2 bg-blue-600 inline-block text-xl rounded-full transform hover:scale-105 transition duration-300 cursor-pointer">
                    Upload Image
                </span>
                <input 
                    className="hidden" 
                    name="upload" 
                    type="file" 
                    id="upload" 
                    accept="image/*" 
                    onChange={handleChange} 
                />
            </label>
            {
                processImage &&
               <div className="flex ">
                 <div className="mt-10">
                    <h1 className="font-bold text-2xl">preview</h1>
                    <img src={processImage} className="mt-2 rounded-lg max-w-full" />
                </div>
                <div>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl">removed background</h1>
                    <img src={removedBg} className="mt-2 rounded-lg max-w-full" />
                </div>
                </div>
               </div>

            }

            <span className="block text-lg font-bold">Or drop a file</span>
            <span className="block text-sm font-semibold text-gray-500">
                Paste img or <a href="#">Url</a>
            </span>
            <div className="space-y-4">
                <h1>No images? Try these ones</h1>
                <div className="flex justify-center gap-4">
                    {sampleImages.map((src, index) => (
                        <img 
                            key={index} 
                            src={src} 
                            alt={`Sample ${index + 1}`} 
                            className="w-16 h-16 rounded-lg border cursor-pointer hover:opacity-80"
                        />
                    ))}
                </div>
                <p className="text-sm max-w-[600px] mx-auto text-gray-500 text-center">
                    By uploading an image or URL you agree to our 
                    <a target="_blank" rel="noopener noreferrer" className="text-typo-secondary underline" href="https://www.remove.bg/tos"> Terms of Service</a>. 
                    To learn more about how remove.bg handles your personal data, check our 
                    <a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.remove.bg/privacy"> Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};

export default RemoveBg;
