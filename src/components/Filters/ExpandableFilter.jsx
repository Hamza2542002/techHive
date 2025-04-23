import { useRef, useState } from "react";
import useFilter from "../../features/products/useFilter";

var filters= []
export default function ExpandableFilter({data , title, setFilters,initialLength = 115}) {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(); 
  function handleClick(b) {
    if (filters.includes(b)) {
      filters.splice(filters.indexOf(b), 1);
    } else {
      filters.push(b);
    }
    setFilters(filters);
  }
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
      <h4 className="font-medium mb-2">{title}</h4>
      </div>
      <ul 
        ref={listRef}
        style={{
          maxHeight: isOpen ? `${listRef.current?.scrollHeight}px` : `${initialLength}px`,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease'
        }}
        className={`space-y-1 overflow-hidden transition-all duration-500`}>
        {data.map((item) => (
          <li key={item.id}>
            <input type="checkbox" id={item.name} className="mr-2" />
            <label htmlFor={item.name} className='cursor-pointer' onClick={() => handleClick(item.name)}>{item.name}</label>
          </li>
        ))}
      </ul>
      <span 
        className="text-sm text-gray-500 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Show less" : "Show more"}
        </span>
    </div>
  )
}
