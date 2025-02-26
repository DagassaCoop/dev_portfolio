// Mock
import { projects } from "@/data";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-36">
      <div className="max-w-7xl w-full">{project?.title}</div>
    </main>
  );
}
