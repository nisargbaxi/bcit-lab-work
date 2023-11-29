import { db } from "@/db";
import Link from "next/link";
export default async function Home() {
  const data = await db.codeblock.findMany();

  return (
    <main>
      <div className="flex flex-col">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="font-bold leading-7 text-gray-900 sm:truncate sm:text-lg sm:tracking-tight">
              List of Code Blocks
            </h3>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <Link href="/blocks/new" className="flex gap-2 p-1 border rounded">
              <svg
                className="h-6 w-6 text-red-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span className="mt-0.1">Codeblock</span>
            </Link>
          </div>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-100">
            {data &&
              data.map((block, index) => (
                <li key={index} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {block.title}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {(() => {
                          const options = [];

                          for (let i = 0; i < block.rating; i++) {
                            options.push("⭐️");
                          }
                          return options;
                        })()}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <Link
                      href={`/blocks/${block.id}`}
                      className="flex w-full justify-center rounded-md bg-green-600 px-2 py-1 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
            {!data && (
              <li className="flex justify-between gap-x-6 py-5">
                No code block available
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
