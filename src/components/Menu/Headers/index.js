import React from 'react'

function Headers(id) {
    return (
        
    <div class="card-header" id={`heading${id}`}>
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target={`collapse-${id}`} aria-expanded="true" aria-controls={`collapse-${id}`}>
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

 
    )
}

export default Headers
