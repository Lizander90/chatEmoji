import React, { useState } from 'react'
import { forwardRef } from 'react'
import EmojiContainer from '../emojiConainer'

const FindEmoji = ({ }, inputRef) => {

    const [emojiContainer, SetToogleEmojiContainer] = useState(false)

    const handleModalEmojinToogle = () => {
        SetToogleEmojiContainer((prevValue) => !prevValue)
    }

    const handleClickEmoji = (emojiX) => {
        const inputText = inputRef.current
        const selStart = inputText.selectionStart
        const selEnd = inputText.selectionEnd

        const beforeSelection = inputText.value.slice(0, selStart)
        const afterSelection = inputText.value.slice(selEnd, inputText.length)

        inputText.value = beforeSelection + emojiX + afterSelection;

        inputText.setSelectionRange(selStart + emojiX.length, selEnd + emojiX.length);
        inputText.focus()

    }

    return <>
        <button onClick={handleModalEmojinToogle}>😊</button>

        {emojiContainer && <>
            <EmojiContainer isOpen={emojiContainer} handleClickEmoji={handleClickEmoji} />
        </>
        }
    </>
}

export { FindEmoji }

export default forwardRef(FindEmoji)
