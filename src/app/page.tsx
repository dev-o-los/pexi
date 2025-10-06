import NavBar from "@/components/navbar/NavBar";

export default async function Home() {
  let movies: any[] = [];

  try {
    const data = await fetch(`${process.env.SITE_URL}/api/movies`, {
      method: "GET",
    }); // ✅ call TMDB directly from server
    console.log(await data.json());
  } catch (err) {
    console.error("Failed to fetch movies:", err);
  }
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <div className="justify-center">
        <div className="text-5xl">Start the project @dev-o-los</div>
        <div>Wish you best of luck for the SAAS</div>
      </div>
    </div>
  );
}
