import Link from 'next/link';
import Image from 'next/image';
import adliya from '../public/adliya.png';
import edo from '../public/edo.png';
import { TelNumber } from '../components/exports';
export default function Contacts(second) {
  return (
    <>
      <p className="flex items-center justify-center">BOG&apos;LANISH</p>
      {TelNumber.map((everyNumber) => (
        <Link
          href={`tel: +99${everyNumber.number}`}
          key={everyNumber.id}
          className="flex items-center justify-center"
        >
          <h2 className="py-2 font-sans font-bold">+998{everyNumber.number}</h2>
        </Link>
      ))}

      <div className="flex justify-center">
        <Link
          title=" Telegram E-Huquqshunos gruppa"
          className="m-0 p-0"
          href="https://t.me/+D7bZ7hRxsqAwMjky"
        >
          <Image src={adliya} alt="adliya" width={200} height={200} />
        </Link>

        <Link
          title=" Telegram Edo gruppa"
          className="m-0 p-0"
          href="https://t.me/+D7bZ7hRxsqAwMjky"
        >
          <Image
            className="mx-2 "
            src={edo}
            alt="edo"
            width={180}
            height={180}
          />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.2681473399093!2d68.78250290574455!3d40.49145313620931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b207cf60c038f3%3A0x40162bac68102a48!2z0KHRi9GA0LTQsNGA0YzQuNC90YHQutC40Lkg0YTQuNC70LjQsNC7IFVuaWNvbiBTb2Z0!5e0!3m2!1sru!2s!4v1676398245522!5m2!1sru!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
