type IButtonProps = {
  children: string;
  url?: string;
};

const Button = (props: IButtonProps) => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex justify-start">
      <div className="rounded-md shadow">
        <a
          href={props.url}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
        >
          {props.children}
        </a>
      </div>
    </div>
  );
};

export { Button };
