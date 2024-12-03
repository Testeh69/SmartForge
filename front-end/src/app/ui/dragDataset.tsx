'use client';
import React, { useState } from 'react';
import Image from 'next/image'


const DragDataset = () => {

    const [uploadFile, setUploadFile] = useState<string|null>(null);

    const handleFileSelection = (files: FileList | null) => {
        if (files && files.length > 0) {
            setUploadFile(files[0].name);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        handleFileSelection(files);
    };


    const handleSubmitDoc = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file){
            setUploadFile(file.name)
        }
    }

    return (
        <div 
            id = "dropArea" 
            className="bg-gradient-to-tl from-neutral-950 to-neutral-900 w-[500px] h-[400px] 
            shadow-lg shadow-[0px_10px_15px_#404040] 
            border-2 border-solid border-white rounded-xl text-center flex justify-center items-center 
            hover:shadow-[0px_10px_15px_#404040,inset_-6px_-14px_25px_#404040] 
            transition-shadow duration-350 ease-in-out"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        
        > { uploadFile === null? (
            <div className='flex flex-col'>
               <Image 
                src="/assets/data.gif" 
                alt="Animation GIF" 
                width={300}
                height={300} 
                />
                <div className="inline-flex items-center space-x-2">
                    <h1 className="text-xl">Drop your Dataset </h1>
                    <label htmlFor="fileInput" className="cursor-pointer text-xl font-sans font-bold hover:text-blue-500 hover:underline">
                         Here!
                    </label>
                </div>
                <input 
                    className="border-none bg-transparent hidden" 
                    type="file" 
                    id="fileInput" 
                    name="file"
                    onChange = {handleSubmitDoc}
                />
            </div>
        ):(
            <div className='flex flex-col items-center'>
                <Image 
                    src="/assets/loader_data.gif" 
                    alt="Animation GIF" 
                    width={170}
                    height={170} 
                />
                <h1 className='text-xl'>Selected file: {uploadFile}</h1>
            </div>
        )

        }
        </div>
    )
}

export default DragDataset;