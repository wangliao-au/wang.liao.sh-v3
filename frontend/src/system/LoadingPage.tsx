import React from 'react'
import { CircularProgress } from "@nextui-org/react";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <CircularProgress />
    </div>
  )
}

export default LoadingPage
