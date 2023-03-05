import Image from 'next/image';
import Link from 'next/link';

export default function Downloads() {
  return (
    <>
      <span className="flex justify-center text-center mt-8">
        Masofadan kompyuterga ulanish uchun
      </span>
      <div className="flex justify-center text-center gap-5 mt-4 max-sm:flex-col">
        <Link
          className="flex justify-center"
          href="https://anydesk.com/ru/downloads/windows?dv=win_exe"
        >
          <Image
            className="pt-3 bg-white"
            src="https://anydesk.com/_static/img/logos/anydesk-logo-c0861c.png"
            width={200}
            height={200}
            alt="alt"
          />
        </Link>
        <Link
          className="flex justify-center"
          href="https://dl2.topfiles.net/files/2/217/64137/WURLaSlLbdt4bzJrOUI4WjdRME1iR0NyVnZCUGJKWnRNcnE3cUhxRUJyVVVXaz06Opff4JE4ABIDaYfv3Et6qS8/ammyy-admin_3.10.exe"
        >
          <Image
            className=" bg-white"
            src="https://www.ammyy.com/img/ammyy_logo.gif"
            width={200}
            height={200}
            alt="alt"
          />
        </Link>

        <Link
          className="flex justify-center"
          href="https://download.teamviewer.com/download/TeamViewer_Setup.exe"
        >
          <Image
            className=" bg-white"
            src="https://sathisharthars.files.wordpress.com/2013/12/teamviewer-logo.png?w=640"
            width={200}
            height={200}
            alt="alt"
          />
        </Link>
      </div>
      <span className="flex justify-center text-center mt-8">
        Uzcrypto(ekektron imzo ishlashi uchun)
      </span>
      <div className="flex justify-center text-center gap-5 mt-4 max-sm:flex-col">
        <Link
          className="flex justify-center"
          href="https://github.com/unicon-soft-uz/data/raw/main/uzcrypto-1.1.0.6-x32-setup.exe"
        >
          <Image
            className=" rounded-full bg-white"
            src="https://play-lh.googleusercontent.com/jINhI8JpFbLv_BUo-paMnRpFPg9J-uKzuyKwJIEc7QsWeyE8M95nlRLQDlbmKIeamlk=w220-rw"
            width={90}
            height={90}
            alt="alt"
          />
        </Link>
      </div>
    </>
  );
}
