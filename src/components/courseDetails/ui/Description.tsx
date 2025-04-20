const Description = ({describe}: any) => {
  return (
    <div className="w-full text-justify flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4">
        <h5 className="font-normal text-xl ">
        {describe}
        </h5>
      </div>
    </div>
  );
};

export default Description;
