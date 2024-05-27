//@ts-nocheck

// ------------------------------------------------------------------------------------------------------------------------------------
// IMPORTANT: This is the old way of using google provided api
// In order to use this method, you need to add <script src="https://accounts.google.com/gsi/client" async defer></script> to your index page!
// This is already "alledgedly" deprecated by Google (see https://developers.google.com/identity/gsi/web/guides/overview)
// There is another way to use O2Auth provided by Google is useing their library using "npm install @react-oauth/google@latest"
// ------------------------------------------------------------------------------------------------------------------------------------

import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react'

export default function O2Auth_old() {
    // Checking for user log in state
    // It's better to store this as cookie and send them back to Backend server for later use. 
    const [user, setUser] = useState({});

    // Initialize on render.
    useEffect( () => {
        /* global google */

        // Initialize the Google O2Auth provider.
        google.accounts.id.initialize( { client_id: "<Insert_Your_Client_ID_Here", callback: HandleCallbackResponse});
    
        // Create a button at the div with id "signInDiv"
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {theme: "outline", size:"large"}
        )
      }, [])

    const HandleCallbackResponse = (response) => {
        //== Debugging: printing the response information to the console.
        console.log(`Google response: ${response}`)
        console.log(`User Secret: ${response.credential}`)
        
        // Decode the credential secret with JSon Web Token Decoder.
        const decoded = jwtDecode(response.credential);
        setUser(decoded);
        
        //== Debugging: printing decoded credential information to the console.
        console.log(`User Secret (decoded): ${decoded}`);
        
        // UI changes.
        document.getElementById("signInDiv").hidden = true;
        document.getElementById("g_id_signout").hidden = false;
        document.getElementById("signInDiv").hidden = false;
    }

    const logout = () => {
        //  When the user clic the sign out button (provided by Google API).
        googleLogout();

        // == Debugging: Check if the user information gone yet.
        console.log(`User Secret (decoded): ${user}`);
        
        // UI changes.
        document.getElementById("signInDiv").hidden = true;
        document.getElementById("g_id_signout").hidden = false;
        document.getElementById("signInDiv").hidden = false;
      }

  return (
    <div className='SignIn'>
        <button id="g_id_signout" onClick={logout}>Sign Out</button>  {/* I have no idea why the id is like this but I can change the class without affecting the button at all.*/}

        <div id='signInDiv'>{/* Please make sure this div is empty because the button will be placed here. */}</div>
        {   user &&
            <div className='UserProfile'>
                <img src={user.picture} alt='User Profile Pic'/>
                <h3>{user.name}</h3>
            </div>
        }
    </div>
  )
}
