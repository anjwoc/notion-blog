import CONFIG from 'morethan-log.config';
import React from 'react'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'

type ServiceCardDetailProps = {
  project: {
    href: string,
    name: string
  }
}

const ServiceCardDetail: React.FC<ServiceCardDetailProps> = ({ project }) => {
  if (!project) return null;

  return (
      <a
        href={`${project.href}`}
        rel="noreferrer"
        target="_blank"
        className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
      >
        <AiFillCodeSandboxCircle className="text-2xl" />
        <div className="text-sm">{project.name}</div>
      </a>
  )
}

export default ServiceCardDetail;