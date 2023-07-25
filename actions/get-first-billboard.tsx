import { Billboard } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getFirstBillboard = async (): Promise<Billboard> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      onlyFirst: true,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getFirstBillboard;
