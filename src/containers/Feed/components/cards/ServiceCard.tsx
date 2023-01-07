import CONFIG from 'morethan-log.config'
import React from 'react'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import { ServiceCardDetail } from './index';

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🌟 Service</div>
      <ul className="rounded-2xl mb-9 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.projects.map((project: { href: string, name: string }) => (
          <ServiceCardDetail key={project.href} project={project} />
        ))}
      </ul>
    </>
  )
}

export default ServiceCard
