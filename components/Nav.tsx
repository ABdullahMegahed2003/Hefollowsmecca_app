'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/public/logo.png' // الصورة اللي بعتها

const navigation = [
  { name: 'الرئيسية', href: '/', current: true },
  { name: 'القائمة', href: '/menu', current: false },
  { name: 'عن الموقع', href: '/about', current: false },
  { name: 'تواصل معنا', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav(): JSX.Element {
  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src={Logo} alt="شعار الموقع" width={140} height={50} />
                </Link>
              </div>

              {/* Desktop Links */}
              <div className="hidden md:flex space-x-6 items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-red-600 font-semibold'
                        : 'text-orange-500 hover:text-red-600',
                      'px-3 py-2 rounded-md text-sm'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Login Button */}
                <Link
                  href="/login"
                  className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  تسجيل الدخول
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-red-600 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">فتح القائمة</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-red-600 font-semibold'
                      : 'text-orange-500 hover:text-red-600',
                    'block px-3 py-2 rounded-md text-base'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="block mt-2 bg-red-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
              >
                تسجيل الدخول
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
