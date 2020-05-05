import dotenv from 'dotenv'

const envFound = dotenv.config()
if (!envFound) {
  // This error should crash whole process
  throw new Error(`⚠️  Couldn't find .env file  ⚠️`)
}

export default {
  publicUrl: process.env.REACT_APP_PUBLIC_URL,
  apiUrl: process.env.REACT_APP_API_URL,
}
