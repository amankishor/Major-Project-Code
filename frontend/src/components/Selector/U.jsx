import React from 'react'

const U = () => {
  return (
    <>
        <div class="flex justify-center">
        <div class="mx-10 hidden lg:block">
            <img src="./images/female.jpg" alt="Your Image" class="h-[500px] w-[550px]"/>
        </div>
        <div class="border-dashed border-2 border-gray-300 p-8 h-[400px] md:h-[500px] w-[800px] mx-10">
            
            <div class="flex justify-center mb-5">
                <input type="file" id="fileInput" class="hidden" onchange="previewImage(event)"/>
                <label for="fileInput" class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md ">Upload
                    Image</label>
            </div>
            <div id="imagePreview" class="w-auto h-[180px] md:h-[250px] border border-gray-300 rounded-md overflow-hidden">
            </div>
            {/* <div class="flex justify-center mt-5">
                <button class="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onclick="submitImage()">Submit</button>
                <button class="bg-red-500 text-white py-2 px-4 rounded-md" onclick="cancelPreview()">Cancel</button>
            </div> */}
        </div>
    </div>
      
    </>
  )
}

export default U
