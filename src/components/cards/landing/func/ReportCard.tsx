type ReportCardProps = {
  title: string;
  count: number;
  image: string;
};

const ReportCard = ({ title, count, image }: ReportCardProps) => {
  return (
    <div className="w-50 h-46 card border-4 border-white rounded-xl p-4 shadow-md bg-[rgba(255,255,255,0.4)] bg-opacity-80 text-center flex flex-col justify-between">
      <img src={image} alt={title} className="w-12 h-12 mx-auto mb-2" />
      <h2 className="text-3xl font-extrabold">{count}</h2>
      <p className="text-xl text-[#455A64] mt-2">{title}</p>
    </div>
  );
};

export default ReportCard;
