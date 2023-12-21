import Link from 'next/link';

const Navlink = ({ href, title }) => {
  const getHref = (title) =>
    `#${title.split().map((char, i) => (i === 0 ? char.toLowerCase() : char))}`;

  console.log('href', href);

  return (
    <Link
      href={getHref(href)}
      className='block py-2 pl-3 pr-4 text=[#ADB7BE] sm:text-xl rounded md:p-0 text-black font-extrabold font hover:text-slate-200'
    >
      {title}
    </Link>
  );
};

export default Navlink;
