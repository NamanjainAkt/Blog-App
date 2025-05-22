import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-50% rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img 
                  src={appwriteService.getFilePreview(featuredImage)} 
                  alt={title}
                  className='rounded-xl'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling?.remove();
                    const fallback = document.createElement('div');
                    fallback.className = 'bg-gray-200 rounded-xl flex items-center justify-center';
                    fallback.innerHTML = '<svg class="w-12 h-12 text-gray-500" ... </svg>';
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard