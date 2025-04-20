// import { CourseState } from "../../../core/constants/Types";


// interface Props{
//     setCardList: (data: CourseState[]) => void
//     originalData: CourseState[]
// }

// const Search = ({setCardList, originalData}: Props) => {
  
//     const searchbox = (search: any) => {
//         if (search === "") {
//           setCardList(originalData)
//         } else {
//           const filtered = originalData.filter((el: any) => 
//             el.title.indexOf(search) !== -1 && search !==""
//           )
//           setCardList(filtered)
//         }
//     };
  
//     return (
//         <div className="w-full h-12 box-border pl-10 pr-10">
//             <label className="h-full input outline-none rounded-xl w-full border-0 drop-shadow-sm">
//             <input
//                 type="search"
//                 className="grow outline-none bg-[url(./search-normal.svg)] bg-no-repeat bg-3 bg-left"
//                 placeholder="چی میخوای یاد بگیری ؟"
//                 onKeyUp={(e) => {
//                 const value= (e.target as HTMLInputElement).value
//                 searchbox(value)}
//                 }
//             />
//             </label>
//         </div>  
//     )
// }

// export {Search}

import { useState } from "react";
import { CourseState } from "../../../core/constants/Types";

interface Props {
  setCardList: (data: CourseState[]) => void;
  originalData: CourseState[];
}

const Search = ({ setCardList, originalData }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    
    if (search === "") {
      // اگر جستجو خالی است، 12 آیتم اول را نمایش بده
      setCardList(originalData.slice(0, 12));
    } else {
      // جستجو در تمام داده‌ها
      const filtered = originalData.filter((el) => 
        el.title.toLowerCase().includes(search.toLowerCase())
      );
      setCardList(filtered);
    }
  };

  return (
    <div className="w-full h-12 box-border pl-10 pr-10">
      <label className="h-full input outline-none rounded-xl w-full border-0 drop-shadow-sm">
        <input
          type="search"
          className="grow outline-none bg-[url(./search-normal.svg)] bg-no-repeat bg-[size:20px] bg-[center_left_0.75rem] pl-10"
          placeholder="چی میخوای یاد بگیری؟"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </label>
    </div>  
  );
};

export { Search };