import { CardViewOne } from "../CardViewOne";
interface Course {
  title: string;
}

const WrapperViewOne = ({ cardList }: { cardList: Course[] }) => {
  return (
    <div className="courseCards w-full flex flex-wrap justify-between gap-2">
      {cardList.map((item, index) => (
        <CardViewOne key={index} title={item.title} />
      ))}
    </div>
  );
};

export { WrapperViewOne };
