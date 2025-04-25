import { useEffect, useState } from "react";
import { CourseState } from "../../../core/constants/Types";

interface PriceRangeFilterProps {
  allCourses: CourseState[];
  onFilterChange: (filteredCourses: CourseState[]) => void;
}

const PriceRangeFilter = ({allCourses, onFilterChange}: PriceRangeFilterProps) => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);
  const [filterOptions, setFilterOptions] = useState({
    free: false,
    paid: false,
    all: true
  });

    // فیلتر کردن دوره‌ها بر اساس تنظیمات
    useEffect((): any => {
      const filtered = allCourses.filter(course => {
        // فیلتر بر اساس قیمت
        const priceInThousand = course.cost / 1000;
        const priceMatch = priceInThousand >= minValue && priceInThousand <= maxValue;
        
        // فیلتر بر اساس نوع دوره
        let typeMatch = true;
        if (filterOptions.free) typeMatch = true;
        if (filterOptions.paid) typeMatch = true;
        
        return priceMatch && typeMatch;
      });
      onFilterChange(filtered);
    }, [minValue, maxValue, filterOptions, allCourses, onFilterChange]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = Number(e.target.value);
    if (type === 'min') {
      setMinValue(Math.min(value, maxValue - 1));
    } else {
      setMaxValue(Math.max(value, minValue + 1));
    }
  };

  const handleCheckboxChange = (type: keyof typeof filterOptions) => {
    setFilterOptions(prev => ({
      ...prev,
      [type]: !prev[type],
      ...(type !== 'all' && { all: false })
    }));
  };

  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <div className="mb-6">

        {/* Min Range Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">حداقل قیمت: {minValue * 1000} تومان</label>
          <input
            type="range"
            min="0"
            max="100"
            value={minValue}
            onChange={(e) => handleRangeChange(e, 'min')}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Max Range Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">حداکثر قیمت: {maxValue * 1000} تومان</label>
          <input
            type="range"
            min="0"
            max="100"
            value={maxValue}
            onChange={(e) => handleRangeChange(e, 'max')}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="space-y-3 mt-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={filterOptions.free}
            onChange={() => handleCheckboxChange('free')}
          />
          <span className="text-sm">فقط دوره‌های رایگان</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={filterOptions.paid}
            onChange={() => handleCheckboxChange('paid')}
          />
          <span className="text-sm">فقط دوره‌های پولی</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={filterOptions.all}
            onChange={() => handleCheckboxChange('all')}
            
          />
          <span className="text-sm">همه دوره‌ها</span>
        </label>
      </div>
    </div>
  );
}

export { PriceRangeFilter }