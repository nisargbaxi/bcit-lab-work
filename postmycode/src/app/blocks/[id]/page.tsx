"use client";
import { loadData } from "@/components/actions/codeblockActions";
import { CodeBlock, PageParms } from "@/components/assets/CommonType";
import DeleteButton from "@/components/assets/DeleteButton";
import Rating from "@/components/assets/Rating";
import { db } from "@/db";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

export default function Home({ params }: PageParms) {
  const [data, setData] = useState<CodeBlock | null>();
  const [notification, setNotification] = useState(false);
  useEffect(() => {
    loadData(parseInt(params.id)).then((response) => {
      setData(response);
    });
  }, []);

  const toastNotification = (show: boolean) => {
    if (show) {
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  };

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex">
          <h3 className="font-bold leading-7 text-gray-900 sm:truncate sm:text-lg sm:tracking-tight">
            Code Block Details
          </h3>
        </div>
        {notification && (
          <>
            <div className="absolute flex origin-center m-96">
              <div className="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">
                <div className="text-green-500 rounded-full bg-white mr-3">
                  <svg
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 16 16"
                    className="bi bi-check"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                    />
                  </svg>
                </div>

                <div className="text-white max-w-xs ">Rating updated</div>
              </div>
            </div>
          </>
        )}
        <div className="mt-5 flex lg:ml-4 lg:mt-0 gap-4">
          <Link href={`/blocks/${data?.id}/edit`}>
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </Link>
          <DeleteButton id={data?.id} />
          <Link href="/">
            <svg
              className="h-8 w-8 text-red-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
            </svg>
          </Link>
        </div>
      </div>
      {data && (
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Title
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data?.title}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Code
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 max-w-24">
                {data?.code}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Rating
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <Rating
                  rating={data?.rating}
                  id={data?.id}
                  notify={toastNotification}
                />
              </dd>
            </div>
          </dl>
        </div>
      )}
      {!data && (
        <div className="flex justify-center mt-11">
          <FidgetSpinner />
        </div>
      )}
    </div>
  );
}
