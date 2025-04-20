import { useState } from "react";

const PriceRangeFilter = () => {
  const [priceRange, setPriceRange] = useState(40);
  const [filterOptions, setFilterOptions] = useState({
    free: false,
    paid: false,
    all: true
  });

  const handleCheckboxChange = (type: keyof typeof filterOptions) => {
    setFilterOptions(prev => ({
      ...prev,
      [type]: !prev[type],
      // اگر یکی از گزینه‌ها انتخاب شد، گزینه "همه" را غیرفعال کن
      ...(type !== 'all' && { all: false })
    }));
  };

  return (
    <div className="p-0 rounded-lg bg-white shadow-sm">
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">حداقل: 0 </span>
          <span className="text-sm font-medium">حداکثر: {priceRange * 10000} </span>
        </div>
        <input 
          type="range"
          dir="rtl"
          min={0}
          max={100}
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={filterOptions.free}
            onChange={() => handleCheckboxChange('free')}
          />
          <span className="text-sm">فقط دوره‌های رایگان</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={filterOptions.paid}
            onChange={() => handleCheckboxChange('paid')}
          />
          <span className="text-sm">فقط دوره‌های پولی</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={filterOptions.all}
            onChange={() => handleCheckboxChange('all')}
          />
          <span className="text-sm">همه دوره‌ها</span>
        </label>
      </div>
    </div>
  );
};

export { PriceRangeFilter };