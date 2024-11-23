import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {PortableText} from '@portabletext/react';
import { GoDot } from "react-icons/go";
import Link from "next/link";

const imageComponent = (props) => 
  props.value? (
    <Image
      className="rounded-lg not-prose w-full h-auto"
      src={urlFor(props.value)
        .width(600)
        .height(400)
        .quality(80)
        .auto("format")
        .url()}
      alt={props?.value?.alt || ""}
      width="600"
      height="400"
    />
  ) : null;


const components = {
  block: {
    h1: ({children}) => <h1 className="text-2xl font-semibold mb-2">{children}</h1>,
    h2: ({children}) => <h2 className="text-xl font-semibold mb-1.5">{children}</h2>,
    h3: ({children}) => <h3 className="text-lg font-semibold mb-1">{children}</h3>,
  },
  list: {
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>
  },
  listItem: {
    bullet: ({children}) => <li className="my-5"><GoDot className="inline-block text-lg mr-1" />{children}</li>
  },
  types: {
    image: imageComponent
  },
  marks: {
    link: ({value, children}) => {
      return (
        <Link href={value?.href} target="_blank" className="underline underline-offset-2">{children}</Link>
      )
    },
  },
};

const TextBlock = (props) => {
  return <PortableText value={props.value} components={components} />
}

export default TextBlock;