import { CardViewOne } from "../CardViewOne"

const CardWrapper = () => {
  return (
    <div className="courseCards w-full flex flex-wrap justify-between gap-2">
        <CardViewOne />
        <CardViewOne />
        <CardViewOne />
        <CardViewOne />
    </div>
  )
}

export {CardWrapper}