import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/my-recipes.svg" width={250} height={95} />
        </Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/recipes"><a>Recipe List</a></Link>
      
      
    </nav>
  );
}
 
export default Navbar;