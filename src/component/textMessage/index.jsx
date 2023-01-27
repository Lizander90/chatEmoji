import React from 'react'
import { useRef } from 'react'
import FindEmoji from '../SearchEmoji';

const TextMessage = () => {

    const textInputRef = useRef(null);


    console.log('desde textMessage-->' + textInputRef)
    return <>
        <input ref={textInputRef} type={'text'} />
        <FindEmoji ref={textInputRef} />
        
    </>


}

export default TextMessage