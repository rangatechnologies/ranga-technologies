import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export interface ICard {
    name: string,
    country: string,
    rating: string,
    feedback: string,
    avatar: string
    image?: string,
}

// Update this from following website
// https://flagicons.lipis.dev/
const flagDictionary: Object = {
    "USA": "us",
    "Bulgaria": "bg",
    "South Korea": "kr",
    "Greece":"gr",
    "Thailand":'th',
    "Turkey":"tr",
    "Netherlands":"nl",
    "South Africa": "za",
    "Ireland":"ie",
    "Georgia":"ge",
    "Netherland":"nl",
    "Italy":"it"

}
export default function Card(props: { item: ICard }) {
    const { item: { avatar, country, image, feedback, name, rating } } = props;
    const ratingItems = Array(5).fill(0).map((i, index) => (<FontAwesomeIcon icon={faStar} className={Number(rating) > index ? "text-secondary" : ""} />))
    console.log(Number(rating), ratingItems)
    return (
        <div className=' drop-shadow-lg w-full h-full flex justify-center items-center p-4 pointer-events-none'>
            <div className='hover:bg-[#ffff]  hover:scale-110  duration-500 rounded-md p-4 text-text      pb-4   flex flex-col align-middle items-center justify-center  h-fit bg-[#E3DFFD] border-colorid7e810469 '>
                <div className=' w-full flex flex-row justify-center pb-2 mb-2'>
                    <img src={avatar} alt="avatar" className="h-24 w-24 shadow-sm rounded-full" />
                    <div className='flex flex-col pl-4 h-full justify-around  pt-4  '>
                        <p className='text-lg font-bold'>{name}</p>
                        <p className='text-sm'><span className={`fi mr-2 fi-${flagDictionary[country as keyof Object]}`} />{country}</p>
                        <div className='flex flex-row'>
                            {ratingItems}
                        </div>
                    </div>
                </div>
                {image && <img src={image} alt="avatar" className="h-24 py-2 rounded-md" />}
                <p className='text-sm text-center break-all '>
                    {feedback}
                </p>
            </div>
        </div>
    )
}



