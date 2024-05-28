// // src/components/ImageUpload.js
// import React, { useState } from 'react';
// import { diagnoseNoFilter, diagnoseWithFilter } from '../Selector/ApiService.jsx';
// import examp from "../../assets/im-2/examp.png"
// const ImageUpload = () => {
//   const [imageFile, setImageFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImageFile(file);
//   };
  

//   const handleNoFilterDiagnosis = async () => {
//     try {
//       const response = await diagnoseNoFilter(imageFile);
//       setResult(response);
//     } catch (error) {
//       setResult(error);
//     }
//   };

//   const handleWithFilterDiagnosis = async () => {
//     try {
//       const response = await diagnoseWithFilter(imageFile);
//       setResult(response);
//     } catch (error) {
//       setResult(error);
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
//     <section className='px-5 xl:px-0'>
//     <div className='max-w-[1170px] mx-auto'>
//       <div className='grid grid-cols-1 lg:grid-cols-2'>
//         <div className='hidden lg:block bg:primaryColor rounded-l-lg'>
//           <figure className='rounded-l-lg'>
//             <img src={examp} alt="" className='w-full rounded-l-lg' />
//           </figure>
//         </div>    

//         <div className='rounded-l-lg lg:pl-16 py-10'>
//           <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
//             Browse an <span className='text-primaryColor'>Image</span>
//           </h3>
//     <div>
//     <div className="flex justify-center mb-5">
//           <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
//           <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md ">
//             Upload Image
//           </label>
//         </div> <br />
//         <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4 mr-md-8"  style={{ marginLeft: '150px' }} onClick={handleNoFilterDiagnosis}> No Filter</button>
//         <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleWithFilterDiagnosis}>With Filter</button>
        
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
//         {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
//         {/* <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleNoFilterDiagnosis}> No Filter</button> <br />
//         <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleWithFilterDiagnosis}>With Filter</button> */}
        

//       {result && (
//         <div>
//           <h2>Result:</h2>
//           <p>{result.prediction}</p>
//           {result.visualization && (
//             <img src={`data:image/png;base64, ${result.visualization}`} alt="Segmentation" />
//           )}
//         </div>
//       )}
//     </div>
//     </div>
//         </div>
//     </div>
//     </section>
//   );
// };

// export default ImageUpload;
{/* {result && (
              // <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
              //   <h2 style={{ fontWeight: 'bold' }}>Result:</h2>
              //   <p>{result.prediction}</p>
              //   {result.visualization && (
              //     <img src={`data:image/png;base64, ${result.visualization}`} alt="Segmentation" />
              //   )}
              // </div>
              <div style={{ textAlign: 'center', margin: 'auto', width: '50%' }}>
                <div style={{ border: '2px solid black', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                  <h2 style={{ fontWeight: 'bold' }}>Result:</h2>
                  <p>{result.prediction}</p>
                  {result.visualization && (
                    <img src={`data:image/png;base64, ${result.visualization}`} alt="Segmentation" style={{ maxWidth: '100%', height: 'auto' }} />
                  )}
                </div>
              </div>

            )} */}


import React, { useState } from 'react';
import { diagnoseNoFilter, diagnoseWithFilter } from '../Selector/ApiService.jsx';
import examp from "../../assets/im-2/examp.png";

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      setImagePreview(imageUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNoFilterDiagnosis = async () => {
    try {
      const response = await diagnoseNoFilter(imageFile);
      setResult(response);
    } catch (error) {
      setResult(error);
    }
  };

  const handleWithFilterDiagnosis = async () => {
    try {
      const response = await diagnoseWithFilter(imageFile);
      setResult(response);
    } catch (error) {
      setResult(error);
    }
  };

  const cancelPreview = () => {
    setImagePreview(null);
    setImageFile(null); // Reset image file
    document.getElementById('fileInput').value = ''; 
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg:primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={examp} alt="" className='w-full rounded-l-lg' style={{marginTop:"160px"}} />
            </figure>
          </div>    

          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'style={{ marginLeft: '175px' }}>
              Browse an <span className='text-primaryColor'>Image</span>
            </h3>
            <div className="flex justify-center mb-5">
              <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
              <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md ">
                Upload Image
              </label>
            </div> 
            {/* <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" style={{ marginLeft: '150px' }} onClick={handleNoFilterDiagnosis}>Model 1</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleWithFilterDiagnosis}>Model 2</button> */}
            
            {/* <div id="imagePreview" className="w-auto h-[180px] md:h-[250px] border border-gray-300 rounded-md overflow-hidden">
              {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-auto" />}
            </div> */}
            <div id="imagePreview" className="w-auto border border-gray-300 rounded-md overflow-hidden">
              {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-auto" />}
            </div>

            <div className="flex justify-center mt-7 ">
              <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleWithFilterDiagnosis}>Submit</button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={cancelPreview}>
                Cancel
              </button>
            </div>

            
          </div>
        </div>
        {result && (
              // <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
              //   <h2 style={{ fontWeight: 'bold' }}>Result:</h2>
              //   <p>{result.prediction}</p>
              //   {result.visualization && (
              //     <img src={`data:image/png;base64, ${result.visualization}`} alt="Segmentation" />
              //   )}
              // </div>
              <div style={{ textAlign: 'center', margin: 'auto', width: '80%' }}>
                <div style={{ border: '2px solid black', padding: '30px', borderRadius: '8px', marginTop: '20px' }}>
                  <h1 style={{ fontWeight: 'bold' }}>Result:</h1>
                  <p>{result.prediction}</p>
                  {result.visualization && (
                    <img src={`data:image/png;base64, ${result.visualization}`} alt="Segmentation" style={{ maxWidth: '100%', height: 'auto' }} />
                  )}
                </div>
              </div>
              
            )}
      </div>
    </section>
  );
};

export default ImageUpload;
