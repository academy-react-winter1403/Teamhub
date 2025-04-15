import { CourseState } from "../../../core/constants/Types";


interface Props{
    setCardList: (data: CourseState[]) => void
    originalData: CourseState[]
}

const Search = ({setCardList, originalData}: Props) => {
  
    const searchbox = (search: any) => {
        if (search === "") {
          setCardList(originalData)
        } else {
          const filtered = originalData.filter((el: any) => 
            el.title.indexOf(search) !== -1 && search !==""
          )
          setCardList(filtered)
        }
    };
  
    return (
        <div className="w-full h-12 box-border pl-10 pr-10">
            <label className="h-full input outline-none rounded-xl w-full border-0 drop-shadow-sm">
            <input
                type="search"
                className="grow outline-none bg-[url(./search-normal.svg)] bg-no-repeat bg-3 bg-left"
                placeholder="چی میخوای یاد بگیری ؟"
                onKeyUp={(e) => {
                const value= (e.target as HTMLInputElement).value
                searchbox(value)}
                }
            />
            </label>
        </div>  
    )
}

export {Search}