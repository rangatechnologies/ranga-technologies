import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FloatingButton(props: {
    show: boolean;
    setTabIndex: (value: number) => void;
}) {
    return (
        <button className='absolute bottom-10 right-12 rounded-xl overflow-hidden bg-primary flex items-center justify-center px-5 py-3'>
            <FontAwesomeIcon icon={faHeadset} className="pr-2 h-8" />
            Lets Talk
        </button>
    )
}
