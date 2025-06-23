import type React from "react"

interface HeaderProps {
  logoSrc: string
  altText: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc, altText }) => {
  return (
    <header
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Ensure logo is at the top left
      }}
    >
      <img
        src={logoSrc || "/placeholder.svg"}
        alt={altText}
        style={{
          height: "50px",
          marginRight: "10px",
        }}
      />
      {/* Add other header elements here if needed */}
    </header>
  )
}

export { Header }
export default Header
