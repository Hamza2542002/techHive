import { useRef, useState } from "react";
import useFilter from "../../features/products/useFilter";

const filters= []
export default function ExpandableFilter({data , title, setFilters}) {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(); 
  function handleClick(b) {
    if (filters.includes(b)) {
      filters.splice(filters.indexOf(b), 1);
    } else {
      filters.push(b);
    }
    setFilters(filters);
    // console.log(useFilter(filters));
  }
  return (
    <div className="mb-4">
      <h4 className="font-medium mb-2">{title}</h4>
      <ul 
        ref={listRef}
        style={{
          maxHeight: isOpen ? `${listRef.current?.scrollHeight}px` : '115px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease'
        }}
        className={`space-y-1 overflow-hidden transition-all duration-500`}>
        {data.map((item) => (
          <li key={item}>
            <input type="checkbox" id={item} className="mr-2" />
            <label htmlFor={item} className='cursor-pointer' onClick={() => handleClick(item)}>{item}</label>
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
