import { Skeleton } from "../ui/skeleton";

export default function Card() {
  return (
    <div className="flex flex-col gap-1 bg-card p-2 rounded-lg shadow-md">
        <div className="flex h-10 gap-2 items-center px-2 mb-2">
          <Skeleton className="rounded-full w-8 h-8"></Skeleton>
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="min-h-36 rounded-br-2xl flex-grow px-2">
          <Skeleton className=" h-full w-full rounded-br-2xl"></Skeleton>
        </div>
    </div>
  )
}
