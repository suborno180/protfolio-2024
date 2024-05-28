import ProjectsSection from '@/components/sections/ProjectsSection'
import React from 'react'

const Protfolio = () => {
  return (
    <div>
        <ProjectsSection isReflect={false} />
        <ProjectsSection isReflect={true} />
    </div>
  )
}

export default Protfolio