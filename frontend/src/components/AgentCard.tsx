type Props = {
  icon: string;
  name: string;
  status: string;
};

export default function AgentCard({
  icon,
  name,
  status,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 p-4">

      <div className="flex items-center justify-between">

        <span>
          {icon} {name}
        </span>

        <span
          className={
            status === "complete"
              ? "text-green-400"
              : status === "running"
              ? "text-yellow-400"
              : "text-zinc-500"
          }
        >
          {status}
        </span>

      </div>

    </div>
  );
}