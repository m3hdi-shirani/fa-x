import Link from "next/link";
import Share from "./components/Share";
import Feed from "./components/Feed";

const Homepage = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-textGray">
        <Link
          href=""
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          link
        </Link>
        <Link href="" className=" hidden md:flex pb-3  items-center">
          دنبال شده
        </Link>
        <Link href="" className=" hidden md:flex pb-3  items-center">
          React
        </Link>
        <Link href="" className=" hidden md:flex pb-3  items-center">
          Next
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
