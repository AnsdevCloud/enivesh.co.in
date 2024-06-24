import { Box } from '@mui/material'
import { editorJsParser } from 'editorjs-data-parser';
import React, { useEffect, useState } from 'react'

const HTMLView = ({ EditorjsJSON }) => {
    console.log(EditorjsJSON);
    const [isHtml, setIsHtml] = useState();


    useEffect(() => {
        let htmlparse = editorJsParser(EditorjsJSON)
        setIsHtml(htmlparse);

    }, [EditorjsJSON])
    return (<Box dangerouslySetInnerHTML={{ __html: isHtml }} />)
}

export default HTMLView