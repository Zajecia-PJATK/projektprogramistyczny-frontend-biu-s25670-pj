import { useState } from "react";

const searchData = [
  {
      name: 'Rifles',
      image: 'https://gunfire.com/data/gfx/eng/navigation/4_1_o_17201.svg'
  },
  {
      name: 'Sniper rilfes',
      image: 'https://gunfire.com/data/gfx/eng/navigation/4_1_o_17209.svg'
  },
  {
      name: 'Pistols',
      image: 'https://gunfire.com/data/gfx/eng/navigation/4_1_o_17224.svg'
  }
]

const SearchBar = () => {
   const [search, setSearch] = useState("");

   const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search)).slice(0, 8)
  return (
    <div className="">
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-gray-100 placeholder-gray-600 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black '
        />
    </div>

    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-100 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div key={index} className="py-2 px-2">
                                <div className="flex items-center gap-2">
                                    <img className="w-12" src={item.image} alt="" />
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </>
                :
                <>
                    <div className="flex justify-center">
                        Not Found
                    </div>
                </>}
        </div>
        }
    </div>
</div>
  );
}

export default SearchBar;
