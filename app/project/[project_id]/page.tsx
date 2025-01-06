import React from 'react'

function ProjectCardPage({params}: {params:{project_id: number}}) {
  return (
    <div>{params.project_id}</div>
  )
}

export default ProjectCardPage