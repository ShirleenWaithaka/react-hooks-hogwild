import React from "react";
const FilterSort = ({FilterGreased, setFilterGreased, setSortType}) =>{
return (
    <div className="filter-sort">
        <div className="filter">
            <label>
                 <input 
                 type="checkbox"
                 checked={FilterGreased}
                 onChange={()=>setFilterGreased(!FilterGreased)}> 
                 </input> 
                 Greased Hogs
            </label>
        </div>
        <div className="sort">
            <label>
                Sort By 
                <select onChange={(e)=>setSortType(e.target.value)}>
                   <option value="">select</option> 
                   <option value="name">Name</option> 
                   <option value="weight">Weight</option> 
                </select>
            </label>

        </div>
    </div>
)
}
export default FilterSort;