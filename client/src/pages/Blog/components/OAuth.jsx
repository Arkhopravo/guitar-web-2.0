// import React from 'react'
// import { GoogleLogin } from '@react-oauth/google';
// import { useDispatch } from 'react-redux';

// const OAuth = () => {

//     // actions.js
//  const loginSuccess = (userData) => ({
//     type: 'LOGIN_SUCCESS',
//     payload: userData,
//   });
  
//    const loginFailure = () => ({
//     type: 'LOGIN_FAILURE',
//   });
  
//     const dispatch = useDispatch();
//     const handleSuccess = (credentialResponse) => {
//         console.log("Google Login Successful",credentialResponse);
//         const authorizationCode = credentialResponse.code;


//         dispatch(loginSuccess(credentialResponse.profileObj));
//         // Send the authorization code to your backed server
//         fetch('/api/auth/google', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ code: authorizationCode }),
//           })
//           .then(response => response.json())
//           .then(data => {
//             // Handle the response from your backend server
//             console.log('Login successful, backend response:', data);
//           })
//           .catch(error => {
//             // Handle errors in communicating with your backend server
//             console.error('Error exchanging authorization code:', error);
//           });

      
//     };


// const handleError = () => {
//         console.log('Login Failed');
//         dispatch()
//     };

//   return (
//     <GoogleLogin
//         onSuccess={handleSuccess}
//         onError={handleError}
//         useOneTap
//         flow="auth-code"
//     />
//   )
// }

// export default OAuth

import Google from '@mui/icons-material/Google'
import { Button } from 'flowbite-react'
import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth'
import {app} from '../../../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'


const OAuth = () => {
    const auth = getAuth(app)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleClick = async() => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account'})

        try {
            const resultsfromGoogle = await signInWithPopup(auth,provider)
            console.log(resultsfromGoogle)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    name: resultsfromGoogle.user.displayName,
                    email: resultsfromGoogle.user.email,
                    googlePhotoUrl : resultsfromGoogle.user.photoURL,
                }),
            })

            const data = await res.json()
            if(res.ok) {
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick} >
        <Google className='w-6 h-6 mr-2' />
        Continue with google
    </Button>
  )
}

export default OAuth