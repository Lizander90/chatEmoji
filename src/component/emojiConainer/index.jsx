import React, { useState } from 'react'
import { emojisFile } from '../dataEmoji'

export const EmojiContainer = ({ handleClickEmoji }) => {
    const [filter, setFilter] = useState('')

    const handleFilter = (event) => {
        setFilter(event.target.value)


        console.log(handleMatch(emojisFile[0].keyWords, filter))
        console.log(emojisFile[0].keyWords)
    }

    const handleMatch = (ListKey, finder) => {
        let result = false;
        ListKey.forEach(keyWordX => {
            if (keyWordX.includes(finder)) {
                result = true;
            }
            // console.log(keyWordX + ' -- ' + finder + ' -->' + keyWordX.includes(finder));
        });

        return result;
    }

    return <>
        <div className='containerFilter'>
            <div className='emojisContainerButtons'>
                <input onChange={handleFilter} placeholder='filtrar emoji' value={filter} type={'text'} name={'inputFilter'} className={'inputText inputFilter'} />
                <br />
                {
                    emojisFile
                        .filter((emojiX) => handleMatch(emojiX.keyWords, filter))
                        .map((emojiX) => {
                            return <button className='btnEmoji btnEmojiSelector' key={crypto.randomUUID()} onClick={() => handleClickEmoji(emojiX.symbol)}>{emojiX.symbol}</button>
                        })}
            </div>

        </div>
    </>
}

export default EmojiContainer