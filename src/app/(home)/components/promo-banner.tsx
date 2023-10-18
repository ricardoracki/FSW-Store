import Image, { ImageProps } from "next/image";

const PromoBanner = ({ ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      height={0}
      width={0}
      className="mt-8 h-auto w-full px-5"
      sizes="100vw"
      alt={props.alt}
    />
  );
};

export default PromoBanner;
