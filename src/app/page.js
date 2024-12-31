import Image from "next/image";
import styles from "./page.module.css";

import VinylPlayerAnimation from "@/components/VinylPlayerAnimation/VinylPlayerAnimation";
import SampleCoverImage from "/public/cd-1.jpg";

export default function Home() {
  return (
    <>

      <VinylPlayerAnimation
        textPrimary={[
          "Fly to the moon now", 
          "Fly to the moon now",
          "Fly to the moon now",
        ]}
        textSecondary={["Throwback music vol"]}
        coverImg={SampleCoverImage}
      />
    </>
  );
}
