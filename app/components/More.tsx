'use client'

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function More({ title, excerpt, details }) {
    const [expanded, setExpanded] = useState(false);
    return <>
    <div>
      <h3 className="text-xl font-bold border-b-2 mb-4 pb-4 border-red-500">{title}</h3>
      <div className={`
        overflow-hidden transition-max-height duration-300 ease-in-out 
        ${expanded ? 'max-h-[500px] text-gray-300' : 'max-h-48 text-gray-400'}
      `}>
        {excerpt}
        {expanded && <span>{details}</span>}
      </div>
      <button 
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-white text-sm font-bold focus:outline-none">
        <span className="mr-1">{expanded ? 'Minder' : 'Meer'}</span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`transition-transform duration-300 ${expanded && 'rotate-180'}`} 
        />
      </button>
      </div>
    </>
}