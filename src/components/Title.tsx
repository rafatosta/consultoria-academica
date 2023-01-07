interface TitleProps {
  title: string;
  caption?: string;
}

export default function Title(props: TitleProps) {
  return (
    <div className="sm:text-center p-8">
      <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
        {props.title}
      </h1>

      <div className="mx-auto mt-3 flex justify-center">
        <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
        <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
        <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 ">
        {props.caption}
      </p>
    </div>
  );
}
