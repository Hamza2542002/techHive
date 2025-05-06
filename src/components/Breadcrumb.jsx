import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
  <nav className="text-sm text-gray-500 mb-6">
    <ul className="flex space-x-2">
      <li>
        <Link to="/" className="hover:underline text-primary">Home</Link>
      </li>
      {paths.map((segment, index) => {
        const path = "/" + paths.slice(0, index + 1).join("/");
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <li key={index} className="flex items-center">
            <span className="mx-1">/</span>
            {index === paths.length - 1 ? (
              <span className="text-gray-800">{label}</span>
            ) : (
              <Link to={path} className="hover:underline text-primary">
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  </nav>
  )
}
