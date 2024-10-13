import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const Logo = ({className,props}) => {
  return (
    <Link href={"/"}>
    <h1 className={clsx('text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300 ml-[-30px] ',
    className)} {...props}>
        VehicleInsurance
    </h1>
    </Link>
  )
}

export default Logo