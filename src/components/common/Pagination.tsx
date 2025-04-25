interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // تولید دکمه‌های صفحه‌بندی با منطق هوشمند
  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5; // حداکثر صفحات قابل نمایش
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      // نمایش همه صفحات اگر تعداد کم است
      startPage = 1;
      endPage = totalPages;
    } else {
      // محاسبه صفحات قابل نمایش برای حالت‌های مختلف
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    // ایجاد دکمه‌های صفحات
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`join-item btn rounded-4xl ${
            i === currentPage ? 'bg-blue-400 text-white' : 'border-0'
          }`}
          onClick={() => onPageChange(i)}>{i}</button>
      );
    } 
    return buttons;
  };

  return (
    <div>
      <div className="join my-10 gap-1 items-center">
        {/* دکمه قبلی */}
        <button
          className={`join-item btn rounded-3xl bg-[url(/cardIcons/arrow-right.svg)] bg-[size:8px] bg-[60%] bg-no-repeat ${
            currentPage === 1 ? 'btn-disabled opacity-50' : ''
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        ></button>
        {/* دکمه‌های صفحات */}
        {renderPageButtons()}
        {/* دکمه بعدی */}
        <button
          className={`join-item btn rounded-3xl bg-[url(/cardIcons/arrow-left.svg)] bg-[size:8px] bg-[50%] bg-no-repeat ${
            currentPage === totalPages ? 'btn-disabled opacity-50' : ''
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        ></button>
      </div>
    </div>
  );
};
export { Pagination }