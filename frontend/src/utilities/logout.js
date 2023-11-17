import axios from "axios";

/**
 * logout utility - accepts a client token to match against database
 * @param {*string} clientToken 
 */
const logout = async (clientToken) => {
      const response = await axios.post('http://localhost:3001/admin/destroyauth', {
            clientToken: clientToken
      })

      const match = response.data.match;

      if (match === true) {
            localStorage.removeItem('clientToken')
            document.location.reload()
      } else {
            window.alert('You are not logged in')
            document.location.reload()
      }
}

export default logout;