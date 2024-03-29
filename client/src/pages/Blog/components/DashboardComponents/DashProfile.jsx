// import { Button, TextInput } from 'flowbite-react';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { DarkModeContext } from '../../../../context/darkModeContext';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import ref and getDownloadURL
// import { app } from '../../../../firebase';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { updateStart,updateSuccess, updateFailure } from '../../../../redux/user/userSlice';
// import { useDispatch } from 'react-redux';


// const DashProfile = () => {
//   const { currentUser } = useSelector(state => state.user);
//   const { toggle, darkMode } = useContext(DarkModeContext);
//   const [imageFile, setImageFile] = useState(null);
//   const [imageFileUrl, setImageFileUrl] = useState(null);
//   const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
//   const [imageFileUploadError, setImageFileUploadError] = useState(null);
//   const [imageFileUploading, setImageFileUploading] = useState(false);
//   const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
//   const [updateUserError, setUpdateUserError] = useState(null);
//   const [formData, setFormData] = useState({})
//   const filePickerRef = useRef();
//   const dispatch = useDispatch();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//     setImageFileUrl(URL.createObjectURL(file));
//   };

//   useEffect(() => {
//     if (imageFile) {
//       uploadImage();
//     }
//   }, [imageFile]);

//   const uploadImage = () => {
//     setImageFileUploadError(null);
//     const storage = getStorage(app);

//     let filename = null;
//     if (imageFile) {
//       filename = new Date().getTime() + imageFile.name;
//     }
//     const storageRef = filename ? ref(storage, filename) : null;
//     const uploadTask = filename ? uploadBytesResumable(storageRef, imageFile) : null;

 
//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setImageFileUploadingProgress(progress.toFixed(0)); // Fix the syntax for toFixed
//       },
//       (error) => {
//         setImageFileUploadError("Couldn't upload image (File must be less than 2 mb)");
//         setImageFileUploadingProgress(null);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setImageFileUrl(downloadURL);
//         });
//       }
//     );
//   };

//   const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.id]:e.target.value});
//   }

//   console.log(formData)
  
//   const handleSubmitUpdate = async (e) => {
//     e.preventDefault();
//     setUpdateUserError(null);
//     setUpdateUserSuccess(null);
//     if (Object.keys(formData).length === 0) {
//       setUpdateUserError('No changes made');
//       return;
//     }
//     if (imageFileUploading) {
//       setUpdateUserError('Please wait for image to upload');
//       return;
//     }
//     try {
//       dispatch(updateStart());
//       const res = await fetch(`/api/user/update/${currentUser._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         dispatch(updateFailure(data.message));
//         setUpdateUserError(data.message);
//       } else {
//         dispatch(updateSuccess(data));
//         setUpdateUserSuccess("User's profile updated successfully");
//       }
//     } catch (error) {
//       dispatch(updateFailure(error.message));
//       setUpdateUserError(error.message);
//     }
//   }

//   return (
//     <div className='max-w-lg mx-auto p-3 w-full'>
//       <h1 className='my-7 text-center font-semibold text-3xl font-serif '>Profile</h1>
//       <form action='' className='flex flex-col' onSubmit={handleSubmitUpdate}>
//         <input type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />
//         <div
//           className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full m-4'
//           onClick={() => filePickerRef.current.click()}
//         >
//           {imageFileUploadingProgress && (
//             <CircularProgressbar value={imageFileUploadingProgress || 0} 
//               text={`${imageFileUploadingProgress}`}
//               strokeWidth={5}
//               styles={{
//                 root: {
//                   width: '100%',
//                   height: '100%',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                 },
//                 path: {
//                   stroke: `rgba(62, 152,199, ${imageFileUploadingProgress / 100})`,
//                 }
//               }}
//             />
//           )}
//           <img
//             src={imageFileUrl || currentUser.profilePicture}
//             alt='user'
//             className={`rounded-full w-full h-full object-cover border-8 border-[#c6c6c6]
//             ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && 'opacity-60'}`}
//           />
//         </div>
//         {imageFileUploadError && (

//         <alert color="red">{imageFileUploadError}</alert>
//         )}
//         <TextInput type='text' id='username' className={`w-full m-4 ${darkMode ? 'dark' : ''}`} placeholder='username' defaultValue={currentUser.username} onChange={handleChange}/>
//         <TextInput type='email' id='email' className={`w-full m-4 ${darkMode ? 'dark' : ''}`} placeholder='email' defaultValue={currentUser.email} onChange={handleChange}/>
//         <TextInput type='password' id='password' className={`w-full m-4 ${darkMode ? 'dark' : ''}`} placeholder='password' onChange={handleChange}/>
//         <Button type='submit' gradientDuoTone='purpleToBlue' outline className='w-full m-4'>
//           Update
//         </Button>
//         <div className='text-red-500 flex justify-between mt-5'>
//           <span className='cursor-pointer'>Delete Account</span>
//           <span className='cursor-pointer'>Sign out</span>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DashProfile;

import { Button, TextInput, Alert } from 'flowbite-react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../../../context/darkModeContext';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import ref and getDownloadURL
import { app } from '../../../../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateStart, updateSuccess, updateFailure } from '../../../../redux/user/userSlice';
import { useDispatch } from 'react-redux';

const DashProfile = () => {
  const { currentUser } = useSelector(state => state.user);
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [formData, setFormData] = useState({});
  const filePickerRef = useRef();
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageFileUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = () => {
    setImageFileUploadError(null);
    const storage = getStorage(app);

    let filename = null;
    if (imageFile) {
      filename = new Date().getTime() + imageFile.name;
    }
    const storageRef = filename ? ref(storage, filename) : null;
    const uploadTask = filename ? uploadBytesResumable(storageRef, imageFile) : null;

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0)); // Fix the syntax for toFixed
      },
      (error) => {
        setImageFileUploadError("Couldn't upload image (File must be less than 2 mb)");
        setImageFileUploadingProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);
    if (Object.keys(formData).length === 0) {
      setUpdateUserError('No changes made');
      return;
    }
    if (imageFileUploading) {
      setUpdateUserError('Please wait for image to upload');
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("User's profile updated successfully");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl font-serif'>Profile</h1>
      <form action='' className='flex flex-col' onSubmit={handleSubmitUpdate}>
        <input type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />
        <div className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full m-4' onClick={() => filePickerRef.current.click()}>
          {imageFileUploadingProgress && (
            <CircularProgressbar
              value={imageFileUploadingProgress || 0}
              text={`${imageFileUploadingProgress}`}
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152,199, ${imageFileUploadingProgress / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt='user'
            className={`rounded-full w-full h-full object-cover border-8 border-[#c6c6c6] ${
              imageFileUploadingProgress && imageFileUploadingProgress < 100 ? 'opacity-60' : ''
            }`}
          />
        </div>
        {imageFileUploadError && <Alert color='red'>{imageFileUploadError}</Alert>}
        <div className='flex flex-col'>
          <TextInput type='text' id='username' className={`w-full m-4 ${darkMode ? 'dark' : ''}`} placeholder='username' defaultValue={currentUser.username} onChange={handleChange} />
          <TextInput type='email' id='email' className={`w-full m-4 ${darkMode ? 'dark' : ''}`} placeholder='email' defaultValue={currentUser.email} onChange={handleChange} />
          <TextInput type='password' id='password' className={`w-full m-4 ${darkMode ? 'dark' : ''}`} placeholder='password' onChange={handleChange} />
        </div>
        <Button type='submit' gradientDuoTone='purpleToBlue' outline className='w-full m-4'>
          Update
        </Button>
        <div className='text-red-500 flex justify-between mt-5'>
          <div className='cursor-pointer'>Delete Account</div>
          <div className='cursor-pointer'>Sign out</div>
        </div>
      </form>
    </div>
  );
};

export default DashProfile;
