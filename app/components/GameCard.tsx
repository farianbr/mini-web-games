"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  photo: string;
  description: string;
  url: string
}

const GameCard: React.FC<CardProps> = ({ title, photo, description, url }) => {
  const router = useRouter()

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image alt={title} src={photo} width={300} height={300} className="rounded-xl"/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm">{description}</p>
          <div className="card-actions">
            <button onClick={() => router.push(url)} className="btn btn-primary btn-sm mt-5">Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
