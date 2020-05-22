import React, {FC, useState} from "react"
import s from './Paginator.module.css';

type PropsType = {
    pageChanger: (pagesCount: number) => void,
    selectedPage: number,
    pagesCount: number,
    paginationPortion:number
}

const Pagination: FC<PropsType> = ({ pageChanger, selectedPage, pagesCount, paginationPortion }) => {

    let pages = []

    let [forSelectedPage, setForSelectedPage] = useState(selectedPage)

    for (let i = forSelectedPage - 3; i <= forSelectedPage + paginationPortion; i++) {
        if (i > 0 && i <= pagesCount) {
            pages.push(i);
        }
    }

    return <div className={s.pageCount}>
        {forSelectedPage > 4 ? <span onClick={() => { pageChanger(1); setForSelectedPage(1)  }} className={s.paginatorSpans}>1...</span> : null}
        {forSelectedPage > 4 ? <button className={s.nextPrevButtons} onClick={() => { setForSelectedPage(forSelectedPage - 10) }}>PREV</button> : null}
        {pages.map(p => { return <span key={p} onClick={() => { pageChanger(p); setForSelectedPage(p)  }} className={(selectedPage === p && s.pageSelected) + " " + s.paginatorSpans}>{p}</span> })}
        {forSelectedPage < pagesCount - paginationPortion ? <button className={s.nextPrevButtons} onClick={() => { setForSelectedPage(forSelectedPage + 10) }}>NEXT</button> : null}
        {forSelectedPage < pagesCount - paginationPortion ? <span onClick={() => { pageChanger(pagesCount); setForSelectedPage(pagesCount)  }} className={s.paginatorSpans}>...{pagesCount}</span> : null}
    </div>
};

export default Pagination;
