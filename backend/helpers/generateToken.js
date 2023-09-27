function generateToken(length) {
      let token = '';
      const keyboardChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
      const uniqueChars = [...new Set(keyboardChars)];

      while (token.length < length) {
            let randomChar = uniqueChars[Math.floor(Math.random() * uniqueChars.length)]
            token += randomChar
      }

      return token
}

module.exports = generateToken;