import React from 'react'
import { useComparison } from './CompareContext';
import { Link } from 'react-router-dom';

export default function ShowComparison() {
  const {products} = useComparison();
  return (
    <>
      {products.length >= 2 && <Link
        to={"/compare"}
        className="inline-block sticky bottom-10 left-full -translate-x-10 text-background font-semibold bg-primary shadow-lg px-4 py-2 rounded-lg"
        >Go To Comparison
      </Link>}
    </>
  )
}
