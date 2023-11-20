import React, {useState, useCallback} from 'react'
import copy from 'copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';

const STATUS_COPY = {
    COPY: 'copy',
    COPIED: 'copied',
}

const TITLE_BY_STATUS = {
    [STATUS_COPY.COPY]: 'copy',
    [STATUS_COPY.COPIED]: 'copied',
}

interface ToCopyTextProps {
    text: string ;
}
  const ToCopyText: React.FC<ToCopyTextProps> = ({ text }) =>  {

    const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

    //по клику за пределами облати номера тел или email функция сбрасывает значение тултипа в дефолт
    const onClickAway = useCallback(() => {
        setStatusCopy(STATUS_COPY.COPY);
    },[setStatusCopy]);

    //функция копирует в буфер текст и вставляет в тултип значение (copied )
    const onClickCopy = useCallback(() => { 
            copy(text)
          setStatusCopy(STATUS_COPY.COPIED)
    },[ text])

    return (
        <>
            <ClickAwayListener onClickAway={onClickAway}>
                <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement='top' arrow style={{color: 'gray', whiteSpace: 'normal', wordBreak: 'break-all'}}>
                    <Button onClick={onClickCopy} >
                    {text}
                    </Button>
                </Tooltip>
            </ClickAwayListener>
        </>
    )
  }
  export default ToCopyText;