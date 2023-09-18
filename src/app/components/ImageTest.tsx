import Image from 'next/image';

export default function ImageTest({ img }) {
  return <Image alt="" width="800" height="800" src={img} />;
}
