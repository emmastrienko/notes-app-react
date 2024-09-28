import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <NoteCard
          title={"Meeting on 7th April"}
          date={"3rd April 2024"}
          content={"Meeting on 7th April Meeting on 7th April"}
          tags={"#meeting"}
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  );
};

export default Home;
