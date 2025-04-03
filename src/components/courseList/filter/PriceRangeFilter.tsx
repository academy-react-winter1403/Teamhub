
const PriceRangeFilter = () => {
  return (
    <div>
        <div className="flex justify-between">
            <span>min</span>
            <span>max</span>
        </div>
        <input type="range " min={0} max="100" value="40" className="range range-primary " /> 
        <label className="fieldset-label mt-5">
            <input type="checkbox" className="checkbox checkbox-primary" />
        فقط دوره های رایگان
        </label>
        <label className="fieldset-label mt-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
         فقط دوره های پولی
        </label>
        <label className="fieldset-label mt-2">
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
         همه دوره ها
        </label>


    </div>
  )
}

export {PriceRangeFilter}