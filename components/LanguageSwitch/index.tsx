import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import cookieCutter from 'cookie-cutter'
import { classNames } from '../../functions/classNames'

const LANG_TO_COUNTRY = {
    en: 'English',
    zh_CN: '简体中文',
    zh_TW: '繁體中文',
    tr: 'Türkçe',
    el: 'Ελληνικά',
}

export default function LangSwitcher() {
    const { locale, locales, asPath } = useRouter()

    return (
        <Menu as="div" className="relative inline-block text-right ml-3">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full p-1.5 text-xs font-bold border rounded shadow-sm text-primary border-white">
                            <h2>{LANG_TO_COUNTRY[locale]}</h2>
                        </Menu.Button>
                    </div>
                </>
            )}
        </Menu>
    )
}
