import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Image src="/folded-map.svg" alt="camp" width={28} height={28} />
          </div>
          <div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
        <div>
          <span>
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt=""
                key={url}
                width={52}
                height={52}
                className="inline-block w-10 h-10 rounded-full"
              />
            ))}
          </span>
          <p>{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section>
      <div>
        <CampSite
          backgroundImage="bg-bg-img1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div>
        <div>
          <h2>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p>
            {" "}
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image src="/quote.svg" alt="camp-2" width={186} height={219} />
        </div>
      </div>
    </section>
  );
};

export default Camp;
