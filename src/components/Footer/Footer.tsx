import {JSX}from 'react'

const Footer = () :JSX.Element=> {
  return (
    <div>
        <footer className="py-6 text-center bg-gray-800">
        <p>&copy; {new Date().getFullYear()} YStudios. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Footer