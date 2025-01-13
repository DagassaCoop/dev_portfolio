export default function About() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-36">
      <h1 className="heading">
        <span className="text-purple">About</span> &{" "}
        <span className="text-purple">Skills</span>
      </h1>
      <div className="flex flex-wrap mt-10 mb-6">
        <div className="flex justify-center w-full md:w-2/5 p-4">
          <div className="w-2/3 md:w-full h-full overflow-hidden rounded-xl">
            <img src="./person.jpg" alt="" />
          </div>
        </div>
        <div className="w-full md:w-3/5 p-4">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Alias totam, quas nesciunt perferendis voluptates minima repellat!
          </p>
          <p>
            Atque facilis aut sapiente distinctio ut dolores laboriosam iste
            nisi at voluptatum. Accusamus, vel.
          </p>
        </div>
      </div>
    </main>
  );
}
