// import React from 'react'
// import examp from "../../assets/im-2/examp.png"

// const Sele = () => {

//    const [selectedFile, setSelectedFile] = useState(null);
//   const [text, setText] = useState("");
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const onUpload = async (formData) => {
//     try {
//       console.log("Uploading image...", formData.get("image"));
//       const response = await fetch(
//         "https://e4159b98-46eb-49da-8bd2-04d9a634e7cb-00-3asp7d384xftu.picard.replit.dev/brain/1",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );
//       console.log("response", response);
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("Upload successful:", responseData);
//         if (responseData.prediction) {
//           setText(responseData.prediction);
//         }
//       } else {
//         console.error("Error uploading image:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };
//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("image", selectedFile);
//       onUpload(formData);
//     }
//   };
//   return (
//     <section className='px-5 xl:px-0'>
//       <div className='max-w-[1170px] mx-auto'>
//         <div className='grid grid-cols-1 lg:grid-cols-2'>
//           <div className='hidden lg:block bg:primaryColor rounded-l-lg'>
//             <figure className='rounded-l-lg'>
//               <img src={examp} alt="" className='w-full rounded-l-lg' />
//             </figure>
//           </div>    

//           <div className='rounded-l-lg lg:pl-16 py-10'>
//             <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
//               Browse an <span className='text-primaryColor'>Image</span>
//             </h3>

//            <form action="" ></form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Sele


// import React, { useState } from 'react';
// import examp from "../../assets/im-2/examp.png";

// const Sele = ({ onUpload1 }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [text, setText] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const onUpload = async (formData) => {
//     try {
//       console.log("Uploading image...", formData.get("image"));
//       const response = await fetch(
//         "http://ec2-16-16-79-73.eu-north-1.compute.amazonaws.com/no_filter",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );
//       console.log("response", response);
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("Upload successful:", responseData);
//         if (responseData.prediction) {
//           setText(responseData.prediction);
//         }
//       } else {
//         console.error("Error uploading image:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const handleUpload = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("image", selectedFile);
//       onUpload(formData);
//     }
//   };

//   return (
//     <section className='px-5 xl:px-0'>
//       <div className='max-w-[1170px] mx-auto'>
//         <div className='grid grid-cols-1 lg:grid-cols-2'>
//           <div className='hidden lg:block bg:primaryColor rounded-l-lg'>
//             <figure className='rounded-l-lg'>
//               <img src={examp} alt="" className='w-full rounded-l-lg' />
//             </figure>
//           </div>    

//           <div className='rounded-l-lg lg:pl-16 py-10'>
//             <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
//               Browse an <span className='text-primaryColor'>Image</span>
//             </h3>

//             <form onSubmit={handleUpload}> {/* Handle form submission */}
//               <div className='flex justify-center mb-5'>
//                 <input type="file" onChange={handleFileChange} />
//               </div>
//               <div className='flex justify-center mt-7'>
//                 <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md mr-4">
//                   Submit
//                 </button>
//                 {text && <p>{text}</p>}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sele;


// import React,{useState} from 'react';
// import examp from "../../assets/im-2/examp.png";

// const Sele = ({ isAuthenticated }) => {
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [text, setText] = useState("");
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };
//   const onUpload = async (formData) => {
//     try {
//       console.log("Uploading image...", formData.get("image"));
//       const response = await fetch(
//         "https://e4159b98-46eb-49da-8bd2-04d9a634e7cb-00-3asp7d384xftu.picard.replit.dev/brain/1",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );
//       console.log("response", response);
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("Upload successful:", responseData);
//         if (responseData.prediction) {
//           setText(responseData.prediction);
//         }
//       } else {
//         console.error("Error uploading image:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };
//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("image", selectedFile);
//       onUpload(formData);
//     }
//   };

//   const previewImage = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const imageUrl = reader.result;
//       setImagePreview(imageUrl);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
//   const submitImage = () => {
//     alert('Image submitted!');
//   };

//   const cancelPreview = () => {
//     setImagePreview(null);
//     document.getElementById('fileInput').value = ''; 
//   };

//   return (
//     // isAuthenticated && (
//       <div className="flex justify-center">
//       <div className="mx-10 hidden lg:block">
//         <img src={examp} alt="Your Image" className="h-[500px] w-[550px]" />
//       </div>
//       <div className="border-dashed border-2 border-gray-300 p-8 h-[400px] md:h-[500px] w-[800px] mx-3 md:mx-5 lg:mx-10">
//         <p className="text-gray-500 text-center mb-5">Drop your image here</p>
//         <div className="flex justify-center mb-5">
//           <input type="file" id="fileInput" className="hidden" onChange={previewImage} />
//           <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md ">
//             Upload Image
//           </label>
//         </div>
//         <div id="imagePreview" className="w-auto h-[180px] md:h-[250px] border border-gray-300 rounded-md overflow-hidden">
//           {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-auto" />}
//         </div>
//         <div className="flex justify-center mt-7 ">
//           <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={submitImage}>
//             Submit
//           </button>
//           <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={cancelPreview}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//     // )
//   );
// };

// export default Sele;


import React from 'react'
import ImageUpload from './ImageUpload'

const Sele = () => {
  return (
    <div style={{marginTop:"-120px"}}>
      <ImageUpload/>
    </div>
  )
}

export default Sele
